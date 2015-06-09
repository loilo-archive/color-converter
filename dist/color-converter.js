var ColorConverter = (function () {
var Color,
  modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

Color = (function() {
  function Color() {}

  Color.prototype.error = function() {
    throw "No color picked";
  };

  Color.prototype.isset = function() {
    return (this.hue != null) && (this.saturation != null) && (this.value != null);
  };

  Color.prototype.clone = function() {
    return Color.fromHSVA(this.hue, this.saturation, this.value, this.alpha);
  };

  Color.prototype.css = function() {
    var rgba;
    if (this.alpha < 1) {
      rgba = this.toRGBA();
      return "rgba(" + ([rgba.r, rgba.g, rgba.b, rgba.a].join(",")) + ")";
    } else {
      return this.toHex();
    }
  };

  Color.prototype.fromHex = function(hex) {
    hex = hex.replace(new RegExp(" |#", "g"), "");
    if (hex.length === 3) {
      hex = hex.replace(/(.)/g, "$1$1");
    }
    hex = hex.match(/../g);
    return this.fromRGB(parseInt(hex[0], 16), parseInt(hex[1], 16), parseInt(hex[2], 16));
  };

  Color.prototype.fromRGB = function(r, g, b) {
    return this.fromRGBA(r, g, b, 1);
  };

  Color.prototype.fromRGBA = function(r, g, b, a) {
    var d, h, maxRGB, minRGB, s, v;
    h = 0;
    s = 0;
    v = 0;
    r /= 255;
    g /= 255;
    b /= 255;
    minRGB = Math.min(r, Math.min(g, b));
    maxRGB = Math.max(r, Math.max(g, b));
    if (minRGB === maxRGB) {
      v = minRGB;
    } else {
      d = (r === minRGB ? g - b : (b === minRGB ? r - g : b - r));
      h = (r === minRGB ? 3 : (b === minRGB ? 1 : 5));
      h = (h - d / (maxRGB - minRGB)) * (1 / 6);
      s = (maxRGB - minRGB) / maxRGB;
      v = maxRGB;
    }
    this.hue = h;
    this.saturation = s;
    this.value = v;
    this.alpha = a;
    return this;
  };

  Color.prototype.fromHSL = function(h, s, l) {
    return this.fromHSLA(h, s, l, 1);
  };

  Color.prototype.fromHSLA = function(h, s, l, a) {
    var v;
    s *= (l < .5 ? l : 1 - l);
    v = l + s;
    s = 2 * s / (l + s);
    this.hue = h;
    this.saturation = s;
    this.value = v;
    this.alpha = a;
    return this;
  };

  Color.prototype.fromHSV = function(h, s, v) {
    return this.fromHSVA(h, s, v, 1);
  };

  Color.prototype.fromHSVA = function(h, s, v, a) {
    this.hue = h;
    this.saturation = s;
    this.value = v;
    this.alpha = a;
    return this;
  };

  Color.prototype.fromColor = function(color) {
    return color.clone();
  };

  Color.prototype.toHex = function() {
    var rgb;
    if (!this.isset()) {
      return this.error();
    }
    rgb = this.toRGB();
    return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
  };

  Color.prototype.toRGB = function() {
    var b, f, g, h, i, p, q, r, ref, s, t, v;
    if (!this.isset()) {
      return this.error();
    }
    h = this.hue;
    s = this.saturation;
    v = this.value;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    ref = (function() {
      switch (i % 6) {
        case 0:
          return {
            r: v,
            g: t,
            b: p
          };
        case 1:
          return {
            r: q,
            g: v,
            b: p
          };
        case 2:
          return {
            r: p,
            g: v,
            b: t
          };
        case 3:
          return {
            r: p,
            g: q,
            b: v
          };
        case 4:
          return {
            r: t,
            g: p,
            b: v
          };
        case 5:
          return {
            r: v,
            g: p,
            b: q
          };
      }
    })(), r = ref.r, g = ref.g, b = ref.b;
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  };

  Color.prototype.toRGBA = function() {
    var rgb;
    if (!this.isset()) {
      return this.error();
    }
    rgb = this.toRGB();
    rgb.a = this.alpha;
    return rgb;
  };

  Color.prototype.toHSV = function() {
    if (!this.isset()) {
      return this.error();
    }
    return {
      h: this.hue,
      s: this.saturation,
      v: this.value
    };
  };

  Color.prototype.toHSVA = function() {
    var hsv;
    if (!this.isset()) {
      return this.error();
    }
    hsv = this.toHSV();
    hsv.a = this.alpha;
    return hsv;
  };

  Color.prototype.toHSL = function() {
    var divideBy, h, l, s, v;
    if (!this.isset()) {
      return this.error();
    }
    h = this.hue;
    s = this.saturation;
    v = this.value;
    divideBy = ((h = (2 - s) * v) < 1 ? h : 2 - h);
    s = s * v;
    if (divideBy !== 0) {
      s /= divideBy;
    }
    l = h / 2;
    return {
      h: h,
      s: s,
      l: l
    };
  };

  Color.prototype.toHSLA = function() {
    var hsl;
    if (!this.isset()) {
      return this.error();
    }
    hsl = this.toHSL;
    hsl.a = this.alpha;
    return hsl;
  };

  Color.prototype.restrict = function(value, min, max) {
    return Math.max(Math.min(value, max), min);
  };

  Color.prototype.restrict1bit = function(value) {
    return parseFloat(this.restrict(value, 0, 1));
  };

  Color.prototype.restrict8bit = function(value) {
    return parseInt(this.restrict(value, 0, 255));
  };

  Color.prototype.fade = function(percent) {
    this.alpha = this.restrict1bit(this.alpha + (percent / 100));
    return this;
  };

  Color.prototype.rotate = function(degrees) {
    var newHue;
    newHue = (modulo(this.hue * 360 + degrees, 360)) / 360;
    return this.fromHSV(newHue, this.saturation, this.value);
  };

  Color.prototype.saturate = function(percent) {
    var saturation;
    saturation = this.restrict1bit(this.saturation + percent / 100);
    return this.fromHSV(this.hue, saturation, this.value);
  };

  Color.prototype.lighten = function(percent) {
    var hsl, lightness;
    hsl = this.toHSL();
    lightness = this.restrict1bit(hsl.l + percent / 100);
    return this.fromHSL(this.hue, hsl.s, lightness);
  };

  Color.prototype.darken = function(percent) {
    return this.lighten(-percent);
  };

  Color.prototype.addRed = function(percent) {
    var rgb;
    rgb = this.toRGB();
    return this.fromRGBA(this.restrict8bit(rgb.r + (percent * 2.55)), rgb.g, rgb.b, this.alpha);
  };

  Color.prototype.addGreen = function(percent) {
    var rgb;
    rgb = this.toRGB();
    return this.fromRGBA(rgb.r, this.restrict8bit(rgb.g + (percent * 2.55)), rgb.b, this.alpha);
  };

  Color.prototype.addBlue = function(percent) {
    var rgb;
    rgb = this.toRGB();
    return this.fromRGBA(rgb.r, rgb.g, this.restrict8bit(rgb.b + (percent * 2.55)), this.alpha);
  };

  Color.prototype.setAlpha = function(alpha) {
    this.alpha = alpha;
    return this;
  };

  Color.prototype.setHue = function(hue) {
    this.hue = hue;
    return this;
  };

  Color.prototype.setRed = function(value) {
    var rgba;
    rgba = this.toRGBA();
    rgba.r = this.restrict8bit(value);
    return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a);
  };

  Color.prototype.setGreen = function(value) {
    var rgba;
    rgba = this.toRGBA();
    rgba.g = this.restrict8bit(value);
    return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a);
  };

  Color.prototype.setBlue = function(value) {
    var rgba;
    rgba = this.toRGBA();
    rgba.b = this.restrict8bit(value);
    return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a);
  };

  Color.prototype.setSaturation = function(saturation) {
    this.saturation = saturation;
    return this;
  };

  Color.prototype.setValue = function(value) {
    this.value = value;
    return this;
  };

  Color.prototype.setLightness = function(lightness) {
    var hsl;
    hsl = this.toHSL();
    return this.fromHSLA(hsl.h, hsl.s, lightness, this.alpha);
  };

  Color.random = function() {
    var rnd;
    rnd = function() {
      return Math.floor(Math.random() * 256.);
    };
    return (new Color).fromRGB(rnd(), rnd(), rnd());
  };

  Color.fromHex = function(hex) {
    return (new Color).fromHex(hex);
  };

  Color.fromRGB = function(r, g, b) {
    return (new Color).fromRGB(r, g, b);
  };

  Color.fromRGBA = function(r, g, b, a) {
    return (new Color).fromRGBA(r, g, b, a);
  };

  Color.fromHSL = function(h, s, l) {
    return (new Color).fromHSL(h, s, l);
  };

  Color.fromHSLA = function(h, s, l, a) {
    return (new Color).fromHSLA(h, s, l, a);
  };

  Color.fromHSV = function(h, s, v) {
    return (new Color).fromHSV(h, s, v);
  };

  Color.fromHSVA = function(h, s, v, a) {
    return (new Color).fromHSVA(h, s, v, a);
  };

  Color.fromColor = function(color) {
    return (new Color).fromColor(color);
  };

  return Color;

})();

return Color;
})();

// ---
// generated by coffee-script 1.9.2