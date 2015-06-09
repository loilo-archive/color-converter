class Color
	constructor: ->
	error: -> throw "No color picked"
	isset: -> @hue? and @saturation? and @value?


	# clone
	clone: ->
		Color.fromHSVA @hue, @saturation, @value, @alpha

	# CSS string
	css: ->
		if @alpha < 1
			rgba = @toRGBA()
			"rgba(#{[rgba.r, rgba.g, rgba.b, rgba.a].join(",")})"
		else
			@toHex()


	# from
	fromHex: (hex) ->
		hex = hex.replace (new RegExp " |#", "g"), ""
		hex = hex.replace(/(.)/g, "$1$1") if hex.length is 3
		hex = hex.match(/../g)

		@fromRGB parseInt(hex[0], 16), parseInt(hex[1], 16), parseInt(hex[2], 16)

	fromRGB: (r, g, b) -> @fromRGBA r, g, b, 1

	fromRGBA: (r, g, b, a) ->
		h = 0
		s = 0
		v = 0
	
		r /= 255
		g /= 255
		b /= 255
		minRGB = Math.min(r, Math.min(g, b))
		maxRGB = Math.max(r, Math.max(g, b))
	
		# Black-gray-white
		if minRGB is maxRGB
			v = minRGB
		else
			# Colors other than black-gray-white:
			d = (if (r is minRGB) then g - b else ((if (b is minRGB) then r - g else b - r)))
			h = (if (r is minRGB) then 3 else ((if (b is minRGB) then 1 else 5)))
			h = (h - d / (maxRGB - minRGB)) * (1/6)
			s = (maxRGB - minRGB) / maxRGB
			v = maxRGB

		@hue = h
		@saturation = s
		@value = v
		@alpha = a
		@

	fromHSL: (h, s, l) -> @fromHSLA h, s, l, 1

	fromHSLA: (h, s, l, a) ->
		s *= (if l < .5 then l else 1 - l)
		v = l + s
		s = 2 * s / (l + s)
		@hue = h
		@saturation = s
		@value = v
		@alpha = a
		@

	fromHSV: (h, s, v) -> @fromHSVA h, s, v, 1

	fromHSVA: (h, s, v, a) ->
		@hue = h
		@saturation = s
		@value = v
		@alpha = a
		@

	fromColor: (color) -> color.clone()

	# to
	toHex: ->
		return @error() unless @isset()
		rgb = @toRGB()

		"#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)

	toRGB: ->
		return @error() unless @isset()
		h = @hue
		s = @saturation
		v = @value
	
		i = Math.floor(h * 6)
		f = h * 6 - i
		p = v * (1 - s)
		q = v * (1 - f * s)
		t = v * (1 - (1 - f) * s)
		{r, g, b} = switch i % 6
			when 0 then { r: v, g: t, b: p }
			when 1 then { r: q, g: v, b: p }
			when 2 then { r: p, g: v, b: t }
			when 3 then { r: p, g: q, b: v }
			when 4 then { r: t, g: p, b: v }
			when 5 then { r: v, g: p, b: q }
	
		return {
			r: Math.round(r * 255)
			g: Math.round(g * 255)
			b: Math.round(b * 255)
		}

	toRGBA: ->
		return @error() unless @isset()
		rgb = @toRGB()
		rgb.a = @alpha
		rgb

	toHSV: ->
		return @error() unless @isset()
		return {
			h: @hue
			s: @saturation
			v: @value
		}

	toHSVA: ->
		return @error() unless @isset()
		hsv = @toHSV()
		hsv.a = @alpha
		hsv

	toHSL: ->
		return @error() unless @isset()
		h = @hue
		s = @saturation
		v = @value

		divideBy = (if (h = (2 - s) * v) < 1 then h else 2 - h)
		s = s * v
		s /= divideBy unless divideBy is 0
		l = h / 2

		return {
			h: h
			s: s
			l: l
		}

	toHSLA: ->
		return @error() unless @isset()
		hsl = @toHSL
		hsl.a = @alpha
		hsl


	restrict: (value, min, max) -> Math.max(Math.min(value, max), min)
	restrict1bit: (value) -> parseFloat(@restrict value, 0, 1)
	restrict8bit: (value) -> parseInt(@restrict value, 0, 255)


	# modify
	fade: (percent) ->
		@alpha = @restrict1bit(@alpha + (percent / 100))
		@


	rotate: (degrees) ->
		newHue = ((@hue * 360 + degrees) %% 360) / 360
		@fromHSV newHue, @saturation, @value

	saturate: (percent) ->
		saturation = @restrict1bit(@saturation + percent / 100)
		@fromHSV @hue, saturation, @value

	lighten: (percent) ->
		hsl = @toHSL()
		lightness = @restrict1bit(hsl.l + percent / 100)
		@fromHSL @hue, hsl.s, lightness

	darken: (percent) -> @lighten (-percent)


	addRed: (percent) ->
		rgb = @toRGB()
		@fromRGBA @restrict8bit(rgb.r  + (percent * 2.55)), rgb.g, rgb.b, @alpha

	addGreen: (percent) ->
		rgb = @toRGB()
		@fromRGBA rgb.r, @restrict8bit(rgb.g  + (percent * 2.55)), rgb.b, @alpha

	addBlue: (percent) ->
		rgb = @toRGB()
		@fromRGBA rgb.r, rgb.g, @restrict8bit(rgb.b  + (percent * 2.55)), @alpha


	# set
	setAlpha: (alpha) ->
		@alpha = alpha
		@

	setHue: (hue) ->
		@hue = hue
		@

	setRed: (value) ->
		rgba = @toRGBA()
		rgba.r = @restrict8bit(value)
		@fromRGBA rgba.r, rgba.g, rgba.b, rgba.a

	setGreen: (value) ->
		rgba = @toRGBA()
		rgba.g = @restrict8bit(value)
		@fromRGBA rgba.r, rgba.g, rgba.b, rgba.a

	setBlue: (value) ->
		rgba = @toRGBA()
		rgba.b = @restrict8bit(value)
		@fromRGBA rgba.r, rgba.g, rgba.b, rgba.a


	setSaturation: (saturation) ->
		@saturation = saturation
		@

	setValue: (value) ->
		@value = value
		@

	setLightness: (lightness) ->
		hsl = @toHSL()
		@fromHSLA hsl.h, hsl.s, lightness, @alpha


	# static constructors
	@random: ->
		rnd = -> Math.floor(Math.random() * (256))
		(new Color).fromRGB rnd(), rnd(), rnd()
	@fromHex: (hex) -> (new Color).fromHex(hex)
	@fromRGB: (r, g, b) -> (new Color).fromRGB(r, g, b)
	@fromRGBA: (r, g, b, a) -> (new Color).fromRGBA(r, g, b, a)
	@fromHSL: (h, s, l) -> (new Color).fromHSL(h, s, l)
	@fromHSLA: (h, s, l, a) -> (new Color).fromHSLA(h, s, l, a)
	@fromHSV: (h, s, v) -> (new Color).fromHSV(h, s, v)
	@fromHSVA: (h, s, v, a) -> (new Color).fromHSVA(h, s, v, a)
	@fromColor: (color) -> (new Color).fromColor(color)