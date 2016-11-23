const modulo = (a: number, b: number) => (+a % (b = +b) + b) % b

export interface RGB {
  r: number,
  g: number,
  b: number
}

export interface RGBA extends RGB {
  a?: number
}

export interface HSV {
  h: number,
  s: number,
  v: number
}

export interface HSVA extends HSV {
  a?: number
}

export interface HSL {
  h: number,
  s: number,
  l: number
}

export interface HSLA extends HSL {
  a?: number
}

export default class Color {
  protected _hue: number
  protected _saturation: number
  protected _value: number
  protected _alpha: number
  protected names = {
    'AliceBlue': 'F0F8FF',
    'AntiqueWhite': 'FAEBD7',
    'Aqua': '00FFFF',
    'Aquamarine': '7FFFD4',
    'Azure': 'F0FFFF',
    'Beige': 'F5F5DC',
    'Bisque': 'FFE4C4',
    'Black': '000000',
    'BlanchedAlmond': 'FFEBCD',
    'Blue': '0000FF',
    'BlueViolet': '8A2BE2',
    'Brown': 'A52A2A',
    'BurlyWood': 'DEB887',
    'CadetBlue': '5F9EA0',
    'Chartreuse': '7FFF00',
    'Chocolate': 'D2691E',
    'Coral': 'FF7F50',
    'CornflowerBlue': '6495ED',
    'Cornsilk': 'FFF8DC',
    'Crimson': 'DC143C',
    'Cyan': '00FFFF',
    'DarkBlue': '00008B',
    'DarkCyan': '008B8B',
    'DarkGoldenRod': 'B8860B',
    'DarkGray': 'A9A9A9',
    'DarkGrey': 'A9A9A9',
    'DarkGreen': '006400',
    'DarkKhaki': 'BDB76B',
    'DarkMagenta': '8B008B',
    'DarkOliveGreen': '556B2F',
    'DarkOrange': 'FF8C00',
    'DarkOrchid': '9932CC',
    'DarkRed': '8B0000',
    'DarkSalmon': 'E9967A',
    'DarkSeaGreen': '8FBC8F',
    'DarkSlateBlue': '483D8B',
    'DarkSlateGray': '2F4F4F',
    'DarkSlateGrey': '2F4F4F',
    'DarkTurquoise': '00CED1',
    'DarkViolet': '9400D3',
    'DeepPink': 'FF1493',
    'DeepSkyBlue': '00BFFF',
    'DimGray': '696969',
    'DimGrey': '696969',
    'DodgerBlue': '1E90FF',
    'FireBrick': 'B22222',
    'FloralWhite': 'FFFAF0',
    'ForestGreen': '228B22',
    'Fuchsia': 'FF00FF',
    'Gainsboro': 'DCDCDC',
    'GhostWhite': 'F8F8FF',
    'Gold': 'FFD700',
    'GoldenRod': 'DAA520',
    'Gray': '808080',
    'Grey': '808080',
    'Green': '008000',
    'GreenYellow': 'ADFF2F',
    'HoneyDew': 'F0FFF0',
    'HotPink': 'FF69B4',
    'IndianRed' : 'CD5C5C',
    'Indigo' : '4B0082',
    'Ivory': 'FFFFF0',
    'Khaki': 'F0E68C',
    'Lavender': 'E6E6FA',
    'LavenderBlush': 'FFF0F5',
    'LawnGreen': '7CFC00',
    'LemonChiffon': 'FFFACD',
    'LightBlue': 'ADD8E6',
    'LightCoral': 'F08080',
    'LightCyan': 'E0FFFF',
    'LightGoldenRodYellow': 'FAFAD2',
    'LightGray': 'D3D3D3',
    'LightGrey': 'D3D3D3',
    'LightGreen': '90EE90',
    'LightPink': 'FFB6C1',
    'LightSalmon': 'FFA07A',
    'LightSeaGreen': '20B2AA',
    'LightSkyBlue': '87CEFA',
    'LightSlateGray': '778899',
    'LightSlateGrey': '778899',
    'LightSteelBlue': 'B0C4DE',
    'LightYellow': 'FFFFE0',
    'Lime': '00FF00',
    'LimeGreen': '32CD32',
    'Linen': 'FAF0E6',
    'Magenta': 'FF00FF',
    'Maroon': '800000',
    'MediumAquaMarine': '66CDAA',
    'MediumBlue': '0000CD',
    'MediumOrchid': 'BA55D3',
    'MediumPurple': '9370DB',
    'MediumSeaGreen': '3CB371',
    'MediumSlateBlue': '7B68EE',
    'MediumSpringGreen': '00FA9A',
    'MediumTurquoise': '48D1CC',
    'MediumVioletRed': 'C71585',
    'MidnightBlue': '191970',
    'MintCream': 'F5FFFA',
    'MistyRose': 'FFE4E1',
    'Moccasin': 'FFE4B5',
    'NavajoWhite': 'FFDEAD',
    'Navy': '000080',
    'OldLace': 'FDF5E6',
    'Olive': '808000',
    'OliveDrab': '6B8E23',
    'Orange': 'FFA500',
    'OrangeRed': 'FF4500',
    'Orchid': 'DA70D6',
    'PaleGoldenRod': 'EEE8AA',
    'PaleGreen': '98FB98',
    'PaleTurquoise': 'AFEEEE',
    'PaleVioletRed': 'DB7093',
    'PapayaWhip': 'FFEFD5',
    'PeachPuff': 'FFDAB9',
    'Peru': 'CD853F',
    'Pink': 'FFC0CB',
    'Plum': 'DDA0DD',
    'PowderBlue': 'B0E0E6',
    'Purple': '800080',
    'RebeccaPurple': '663399',
    'Red': 'FF0000',
    'RosyBrown': 'BC8F8F',
    'RoyalBlue': '4169E1',
    'SaddleBrown': '8B4513',
    'Salmon': 'FA8072',
    'SandyBrown': 'F4A460',
    'SeaGreen': '2E8B57',
    'SeaShell': 'FFF5EE',
    'Sienna': 'A0522D',
    'Silver': 'C0C0C0',
    'SkyBlue': '87CEEB',
    'SlateBlue': '6A5ACD',
    'SlateGray': '708090',
    'Snow': 'FFFAFA',
    'SpringGreen': '00FF7F',
    'SteelBlue': '4682B4',
    'Tan': 'D2B48C',
    'Teal': '008080',
    'Thistle': 'D8BFD8',
    'Tomato': 'FF6347',
    'Turquoise': '40E0D0',
    'Violet': 'EE82EE',
    'Wheat': 'F5DEB3',
    'White': 'FFFFFF',
    'WhiteSmoke': 'F5F5F5',
    'Yellow': 'FFFF00',
    'YellowGreen': '9ACD32',
  }
  protected lowerNames = null

  protected error() {
    throw 'No color picked'
  }

  protected isset() {
    return this._hue != null && this._saturation != null && this._value != null
  }

  public clone() {
    return Color.fromHSVA(this._hue, this._saturation, this._value, this._alpha)
  }

  public css(): string {
    if (this._alpha < 1) {
      const rgba = this.toRGBA()
      return `rgba(${[ rgba.r, rgba.g, rgba.b, rgba.a ].join(',')})`
    } else {
      return this.toHex()
    }
  }

  // From
  public fromName(name: string) {
    if (this.lowerNames === null) {
      this.lowerNames = {}

      for (const upperName in this.names) {
        this.lowerNames[upperName.toLowerCase()] = this.names[upperName]
      }
    }

    name = name.toLowerCase()

    const hex = this.lowerNames[name]
    if (typeof hex === 'undefined') {
      throw `Unknown color name "${name}"`
    } else {
      return this.fromHex(this.lowerNames[name])
    }
  }

  public fromHex(hex: string) {
    hex = hex.replace(new RegExp(' |#', 'g'), '')
    if (hex.length === 3 || hex.length === 4) {
      hex = hex.replace(/(.)/g, '$1$1')
    }

    const hexMatch = hex.match(/../g)

    if (hexMatch.length === 3) {
      return this.fromRGB(parseInt(hexMatch[0], 16), parseInt(hexMatch[1], 16), parseInt(hexMatch[2], 16))
    } else {
      return this.fromRGBA(parseInt(hexMatch[0], 16), parseInt(hexMatch[1], 16), parseInt(hexMatch[2], 16), parseInt(hexMatch[3], 16) / 255)
    }
  }

  public fromRGB(r: number, g: number, b: number) {
    return this.fromRGBA(r, g, b, 1)
  }

  public fromRGBA(r: number, g: number, b: number, a: number) {
    let h = 0
    let s = 0
    let v = 0

    r /= 255
    g /= 255
    b /= 255

    let minRGB = Math.min(r, g, b)
    let maxRGB = Math.max(r, g, b)

    if (minRGB === maxRGB) {
      // Black-gray-white
      v = minRGB
    } else {
      // Colors other than black-gray-white
      const d = (r === minRGB) ? (g - b) : (b === minRGB ? r - g : b - r)
      h = (r === minRGB) ? 3 : (b === minRGB ? 1 : 5)
      h = (h - d / (maxRGB - minRGB)) * (1/6)
      s = (maxRGB - minRGB) / maxRGB
      v = maxRGB
    }

    this._hue = h
    this._saturation = s
    this._value = v
    this._alpha = a

    return this
  }

  public fromHSL(h: number, s: number, l: number) {
    return this.fromHSLA(h, s, l, 1)
  }

  public fromHSLA(h: number, s: number, l: number, a: number) {
    s *= l < 0.5 ? l : (1 - l)
    const v = l + s
    s = (l + s) !== 0 ? (2 * s / (l + s)) : 0

    this._hue = h
    this._saturation = s
    this._value = v
    this._alpha = a

    return this
  }

  public fromHSV(h: number, s: number, v: number) {
    return this.fromHSVA(h, s, v, 1)
  }

  public fromHSVA(h: number, s: number, v: number, a: number) {
    this._hue = h
    this._saturation = s
    this._value = v
    this._alpha = a

    return this
  }

  public fromColor(color: Color) {
    this._hue = color.hue
    this._saturation = color.saturation
    this._value = color.value
    this._alpha = color.alpha

    return this
  }

  public fromCSS(css: string) {
    const matches = css.match(/^\s*(#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|(rgb|hsl)\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.+?)\s*\)|(rgba|hsla)\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.+?),\s*(.+?)\s*\)|([a-z]+))\s*$/i)

    // Hex
    if (matches[2] != null) {
      return this.fromHex(matches[2])
    } else if (matches[3] != null) {
      switch (matches[3].toLowerCase()) {
        case 'rgb': return this.fromRGB(this.scaleToOne(matches[4]), this.scaleToOne(matches[5]), this.scaleToOne(matches[6]))
        case 'hsl': return this.fromHSL((parseInt(matches[4]) % 360) / 360, this.scaleToOne(matches[5]), this.scaleToOne(matches[6]))
      }
    } else if (matches[7] != null) {
      switch (matches[7].toLowerCase()) {
        case 'rgba': return this.fromRGBA(this.scaleToOne(matches[8]) * 255, this.scaleToOne(matches[9]) * 255, this.scaleToOne(matches[10]) * 255, parseFloat(matches[11]))
        case 'hsla': return this.fromHSLA((this.scaleToOne(matches[8]) % 360) / 360, this.scaleToOne(matches[9]) / 100, this.scaleToOne(matches[10]) / 100, parseFloat(matches[11]))
      }
    } else if (matches[12] != null) {
      return this.fromName(matches[12])
    } else {
      return this
    }
  }

  // To
  public toName() {
    const hex = this.toHex().substr(1).toUpperCase()
    for (const name of Object.keys(this.names)) {
      if (this.names[name] === hex) {
        return name
      }
    }

    return null
  }

  public toHex(): string {
    if (!this.isset()) this.error()

    const rgb = this.toRGB()

    return '#' + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)
  }

  public toRGB(): RGB {
    if (!this.isset()) this.error()

    const h = this._hue
    const s = this._saturation
    const v = this._value

    const i = Math.floor(h * 6)
    const f = h * 6 - i
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)
    
    const [ r, g, b ] = (() => {
      switch (i % 6) {
        case 0: return [v, t, p]
        case 1: return [q, v, p]
        case 2: return [p, v, t]
        case 3: return [p, q, v]
        case 4: return [t, p, v]
        case 5: return [v, p, q]
      }
    })()

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    }
  }

  public toRGBA(): RGBA {
    if (!this.isset()) this.error()

    const rgb: RGBA = this.toRGB()
    rgb.a = this._alpha

    return rgb
  }

  public toHSV(): HSV {
    if (!this.isset()) this.error()

    return {
      h: this._hue,
      s: this._saturation,
      v: this._value
    }
  }

  public toHSVA(): HSVA {
    if (!this.isset()) this.error()

    const hsv: HSVA = this.toHSV()
    hsv.a = this._alpha

    return hsv
  }

  public toHSL(): HSL {
    if (!this.isset()) this.error()

    let h = this._hue
    let s = this._saturation
    let v = this._value

    const divideBy = (h = (2 - s) * v) < 1 ? h : (2 - h)

    s = s * v
    if (divideBy !== 0) {
      s /= divideBy
    }
    const l = h / 2

    return { h, s, l }
  }

  public toHSLA(): HSLA {
    if (!this.isset()) this.error()

    const hsl: HSLA = this.toHSL()
    hsl.a = this._alpha

    return hsl
  }

  protected restrict(value: number, min: number, max: number) {
    return Math.max(Math.min(value, max), min)
  }

  protected restrict1bit(value: number) {
    return parseFloat(String(this.restrict(value, 0, 1)))
  }

  protected restrict8bit(value: number) {
    return parseInt(String(this.restrict(value, 0, 255)))
  }

  protected scaleToOne(value: string, base: number = null) {
    // Auto-detect base
    if (base == null) {
      // Use 100 if percentage
      if (value.match(/^.+%\s*$/)) {
        base = 100
      // Use 255 by default
      } else {
        base = 255
      }
    }

    return this.restrict1bit(parseFloat(value) / base)
  }

  // Modify
  public fade(percent: number) {
    this._alpha = this.restrict1bit(this._alpha + (percent / 100))
    return this
  }

  public rotate(degrees: number) {
    const newHue = modulo((this._hue * 360 + degrees), 360) / 360
    return this.fromHSV(newHue, this._saturation, this._value)
  }

  public saturate(percent: number) {
    const saturation = this.restrict1bit(this._saturation + percent / 100)
    return this.fromHSV(this._hue, saturation, this._value)
  }

  public desaturate(percent: number) {
    return this.saturate(-percent)
  }

  public lighten(percent: number) {
    const hsl = this.toHSL()
    const lightness = this.restrict1bit(hsl.l + percent / 100)
    return this.fromHSL(this._hue, hsl.s, lightness)
  }

  public darken(percent: number) {
    return this.lighten(-percent)
  }

  public addRed(percent: number) {
    const rgb = this.toRGB()
    return this.fromRGBA(this.restrict8bit(rgb.r + (percent * 2.55)), rgb.g, rgb.b, this._alpha)
  }

  public addGreen(percent: number) {
    const rgb = this.toRGB()
    return this.fromRGBA(rgb.r, this.restrict8bit(rgb.g + (percent * 2.55)), rgb.b, this._alpha)
  }

  public addBlue(percent: number) {
    const rgb = this.toRGB()
    return this.fromRGBA(rgb.r, rgb.g, this.restrict8bit(rgb.b + (percent * 2.55)), this._alpha)
  }

  // Get/Set
  public setAlpha(alpha: number) {
    this._alpha = alpha
    return this
  }

  public get alpha() {
    return this._alpha
  }

  public set alpha(value: number) {
    this.setAlpha(value)
  }

  public setRed(value: number) {
    const rgba = this.toRGBA()
    rgba.r = this.restrict8bit(value)
    return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a)
  }

  public get red() {
    return this.toRGB().r
  }

  public set red(value: number) {
    this.setRed(value)
  }

  public setGreen(value: number) {
    const rgba = this.toRGBA()
    rgba.g = this.restrict8bit(value)
    return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a)
  }
  
  public get green() {
    return this.toRGB().g
  }

  public set green(value: number) {
    this.setGreen(value)
  }

  public setBlue(value: number) {
    const rgba = this.toRGBA()
    rgba.b = this.restrict8bit(value)
    return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a)
  }

  public get blue() {
    return this.toRGB().b
  }

  public set blue(value: number) {
    this.setBlue(value)
  }

  public setHue(hue: number) {
    this._hue = hue
    return this
  }

  public get hue() {
    return this._hue
  }

  public set hue(value: number) {
    this.setHue(value)
  }

  public setSaturation(saturation: number) {
    this._saturation = saturation
    return this
  }
  
  public invertSaturation() {
    this._saturation = 1 - this._saturation
    return this
  }

  public get saturation() {
    return this._saturation
  }

  public set saturation(value: number) {
    this.setSaturation(value)
  }


  public setValue(value: number) {
    this._value = value
    return this
  }
  
  public invertValue() {
    this._value = 1 - this._value
    return this
  }

  public get value() {
    return this._value
  }

  public set value(value: number) {
    this.setValue(value)
  }

  public setLightness(lightness: number) {
    const hsl = this.toHSL()
    return this.fromHSLA(hsl.h, hsl.s, lightness, this._alpha)
  }
  
  public invertLightness() {
    const { h, s, l, a } = this.toHSLA()
    this.fromHSLA(h, s, 1 - l, a)
    return this
  }

  public get lightness() {
    return this.toHSL().l
  }

  public set lightness(value: number) {
    this.setLightness(value)
  }

  public toString() {
    return this.css()
  }

  // Static constructors
  public static random() {
    const rnd = () => Math.floor(Math.random() * 256)
    return (new Color).fromRGB(rnd(), rnd(), rnd())
  }

  public static fromName(name: string) {
    return (new Color).fromName(name)
  }

  public static fromHex(hex: string) {
    return (new Color).fromHex(hex)
  }

  public static fromRGB(r: number, g: number, b: number) {
    return (new Color).fromRGB(r, g, b)
  }

  public static fromRGBA(r: number, g: number, b: number, a: number) {
    return (new Color).fromRGBA(r, g, b, a)
  }

  public static fromHSL(h: number, s: number, l: number) {
    return (new Color).fromHSL(h, s, l)
  }

  public static fromHSLA(h: number, s: number, l: number, a: number) {
    return (new Color).fromHSLA(h, s, l, a)
  }

  public static fromHSV(h: number, s: number, v: number) {
    return (new Color).fromHSV(h, s, v)
  }

  public static fromHSVA(h: number, s: number, v: number, a: number) {
    return (new Color).fromHSVA(h, s, v, a)
  }

  public static fromColor(color: Color) {
    return (new Color).fromColor(color)
  }

  public static fromCSS(css: string) {
    return (new Color).fromCSS(css)
  }
}
