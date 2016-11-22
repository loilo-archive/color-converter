"use strict";
var modulo = function (a, b) { return (+a % (b = +b) + b) % b; };
var Color = (function () {
    function Color() {
        this.names = {
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
            'IndianRed': 'CD5C5C',
            'Indigo': '4B0082',
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
        };
        this.lowerNames = null;
    }
    Color.prototype.error = function () {
        throw 'No color picked';
    };
    Color.prototype.isset = function () {
        return this._hue != null && this._saturation != null && this._value != null;
    };
    Color.prototype.clone = function () {
        return Color.fromHSVA(this._hue, this._saturation, this._value, this._alpha);
    };
    Color.prototype.css = function () {
        if (this._alpha < 1) {
            var rgba = this.toRGBA();
            return "rgba(" + [rgba.r, rgba.g, rgba.b, rgba.a].join(',') + ")";
        }
        else {
            return this.toHex();
        }
    };
    // From
    Color.prototype.fromName = function (name) {
        if (this.lowerNames === null) {
            this.lowerNames = {};
            for (var upperName in this.names) {
                this.lowerNames[upperName.toLowerCase()] = this.names[upperName];
            }
        }
        name = name.toLowerCase();
        var hex = this.lowerNames[name];
        if (typeof hex === 'undefined') {
            throw "Unknown color name \"" + name + "\"";
        }
        else {
            return this.fromHex(this.lowerNames[name]);
        }
    };
    Color.prototype.fromHex = function (hex) {
        hex = hex.replace(new RegExp(' |#', 'g'), '');
        if (hex.length === 3 || hex.length === 4) {
            hex = hex.replace(/(.)/g, '$1$1');
        }
        var hexMatch = hex.match(/../g);
        if (hexMatch.length === 3) {
            return this.fromRGB(parseInt(hexMatch[0], 16), parseInt(hexMatch[1], 16), parseInt(hexMatch[2], 16));
        }
        else {
            return this.fromRGBA(parseInt(hexMatch[0], 16), parseInt(hexMatch[1], 16), parseInt(hexMatch[2], 16), parseInt(hexMatch[3], 16) / 255);
        }
    };
    Color.prototype.fromRGB = function (r, g, b) {
        return this.fromRGBA(r, g, b, 1);
    };
    Color.prototype.fromRGBA = function (r, g, b, a) {
        var h = 0;
        var s = 0;
        var v = 0;
        r /= 255;
        g /= 255;
        b /= 255;
        var minRGB = Math.min(r, g, b);
        var maxRGB = Math.max(r, g, b);
        if (minRGB === maxRGB) {
            // Black-gray-white
            v = minRGB;
        }
        else {
            // Colors other than black-gray-white
            var d = (r === minRGB) ? (g - b) : (b === minRGB ? r - g : b - r);
            h = (r === minRGB) ? 3 : (b === minRGB ? 1 : 5);
            h = (h - d / (maxRGB - minRGB)) * (1 / 6);
            s = (maxRGB - minRGB) / maxRGB;
            v = maxRGB;
        }
        this._hue = h;
        this._saturation = s;
        this._value = v;
        this._alpha = a;
        return this;
    };
    Color.prototype.fromHSL = function (h, s, l) {
        return this.fromHSLA(h, s, l, 1);
    };
    Color.prototype.fromHSLA = function (h, s, l, a) {
        s *= l < 0.5 ? l : (1 - l);
        var v = l + s;
        s = (l + s) !== 0 ? (2 * s / (l + s)) : 0;
        this._hue = h;
        this._saturation = s;
        this._value = v;
        this._alpha = a;
        return this;
    };
    Color.prototype.fromHSV = function (h, s, v) {
        return this.fromHSVA(h, s, v, 1);
    };
    Color.prototype.fromHSVA = function (h, s, v, a) {
        this._hue = h;
        this._saturation = s;
        this._value = v;
        this._alpha = a;
        return this;
    };
    Color.prototype.fromColor = function (color) {
        this._hue = color.hue;
        this._saturation = color.saturation;
        this._value = color.value;
        this._alpha = color.alpha;
        return this;
    };
    Color.prototype.fromCSS = function (css) {
        var matches = css.match(/^\s*(#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|(rgb|hsl)\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.+?)\s*\)|(rgba|hsla)\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.+?),\s*(.+?)\s*\)|([a-z]+))\s*$/i);
        // Hex
        if (matches[2] != null) {
            return this.fromHex(matches[2]);
        }
        else if (matches[3] != null) {
            switch (matches[3].toLowerCase()) {
                case 'rgb': return this.fromRGB(parseInt(matches[4]), parseInt(matches[5]), parseInt(matches[6]));
                case 'hsl': return this.fromHSL((parseInt(matches[4]) % 360) / 360, parseInt(matches[5]) / 100, parseInt(matches[6]) / 100);
            }
        }
        else if (matches[7] != null) {
            switch (matches[7].toLowerCase()) {
                case 'rgba': return this.fromRGBA(parseInt(matches[8]), parseInt(matches[9]), parseInt(matches[10]), parseFloat(matches[11]));
                case 'hsla': return this.fromHSLA((parseInt(matches[8]) % 360) / 360, parseInt(matches[9]) / 100, parseInt(matches[10]) / 100, parseFloat(matches[11]));
            }
        }
        else if (matches[12] != null) {
            return this.fromName(matches[12]);
        }
        else {
            return this;
        }
    };
    // To
    Color.prototype.toName = function () {
        var hex = this.toHex().substr(1).toUpperCase();
        for (var _i = 0, _a = Object.keys(this.names); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            if (this.names[name_1] === hex) {
                return name_1;
            }
        }
        return null;
    };
    Color.prototype.toHex = function () {
        if (!this.isset())
            this.error();
        var rgb = this.toRGB();
        return '#' + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    };
    Color.prototype.toRGB = function () {
        if (!this.isset())
            this.error();
        var h = this._hue;
        var s = this._saturation;
        var v = this._value;
        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        var _a = (function () {
            switch (i % 6) {
                case 0: return [v, t, p];
                case 1: return [q, v, p];
                case 2: return [p, v, t];
                case 3: return [p, q, v];
                case 4: return [t, p, v];
                case 5: return [v, p, q];
            }
        })(), r = _a[0], g = _a[1], b = _a[2];
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    };
    Color.prototype.toRGBA = function () {
        if (!this.isset())
            this.error();
        var rgb = this.toRGB();
        rgb.a = this._alpha;
        return rgb;
    };
    Color.prototype.toHSV = function () {
        if (!this.isset())
            this.error();
        return {
            h: this._hue,
            s: this._saturation,
            v: this._value
        };
    };
    Color.prototype.toHSVA = function () {
        if (!this.isset())
            this.error();
        var hsv = this.toHSV();
        hsv.a = this._alpha;
        return hsv;
    };
    Color.prototype.toHSL = function () {
        if (!this.isset())
            this.error();
        var h = this._hue;
        var s = this._saturation;
        var v = this._value;
        var divideBy = (h = (2 - s) * v) < 1 ? h : (2 - h);
        s = s * v;
        if (divideBy !== 0) {
            s /= divideBy;
        }
        var l = h / 2;
        return { h: h, s: s, l: l };
    };
    Color.prototype.toHSLA = function () {
        if (!this.isset())
            this.error();
        var hsl = this.toHSL();
        hsl.a = this._alpha;
        return hsl;
    };
    Color.prototype.restrict = function (value, min, max) {
        return Math.max(Math.min(value, max), min);
    };
    Color.prototype.restrict1bit = function (value) {
        return parseFloat(String(this.restrict(value, 0, 1)));
    };
    Color.prototype.restrict8bit = function (value) {
        return parseInt(String(this.restrict(value, 0, 255)));
    };
    // Modify
    Color.prototype.fade = function (percent) {
        this._alpha = this.restrict1bit(this._alpha + (percent / 100));
        return this;
    };
    Color.prototype.rotate = function (degrees) {
        var newHue = modulo((this._hue * 360 + degrees), 360) / 360;
        return this.fromHSV(newHue, this._saturation, this._value);
    };
    Color.prototype.saturate = function (percent) {
        var saturation = this.restrict1bit(this._saturation + percent / 100);
        return this.fromHSV(this._hue, saturation, this._value);
    };
    Color.prototype.desaturate = function (percent) {
        return this.saturate(-percent);
    };
    Color.prototype.lighten = function (percent) {
        var hsl = this.toHSL();
        var lightness = this.restrict1bit(hsl.l + percent / 100);
        return this.fromHSL(this._hue, hsl.s, lightness);
    };
    Color.prototype.darken = function (percent) {
        return this.lighten(-percent);
    };
    Color.prototype.addRed = function (percent) {
        var rgb = this.toRGB();
        return this.fromRGBA(this.restrict8bit(rgb.r + (percent * 2.55)), rgb.g, rgb.b, this._alpha);
    };
    Color.prototype.addGreen = function (percent) {
        var rgb = this.toRGB();
        return this.fromRGBA(rgb.r, this.restrict8bit(rgb.g + (percent * 2.55)), rgb.b, this._alpha);
    };
    Color.prototype.addBlue = function (percent) {
        var rgb = this.toRGB();
        return this.fromRGBA(rgb.r, rgb.g, this.restrict8bit(rgb.b + (percent * 2.55)), this._alpha);
    };
    // Get/Set
    Color.prototype.setAlpha = function (alpha) {
        this._alpha = alpha;
        return this;
    };
    Object.defineProperty(Color.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (value) {
            this.setAlpha(value);
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.setRed = function (value) {
        var rgba = this.toRGBA();
        rgba.r = this.restrict8bit(value);
        return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a);
    };
    Object.defineProperty(Color.prototype, "red", {
        get: function () {
            return this.toRGB().r;
        },
        set: function (value) {
            this.setRed(value);
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.setGreen = function (value) {
        var rgba = this.toRGBA();
        rgba.g = this.restrict8bit(value);
        return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a);
    };
    Object.defineProperty(Color.prototype, "green", {
        get: function () {
            return this.toRGB().g;
        },
        set: function (value) {
            this.setGreen(value);
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.setBlue = function (value) {
        var rgba = this.toRGBA();
        rgba.b = this.restrict8bit(value);
        return this.fromRGBA(rgba.r, rgba.g, rgba.b, rgba.a);
    };
    Object.defineProperty(Color.prototype, "blue", {
        get: function () {
            return this.toRGB().b;
        },
        set: function (value) {
            this.setBlue(value);
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.setHue = function (hue) {
        this._hue = hue;
        return this;
    };
    Object.defineProperty(Color.prototype, "hue", {
        get: function () {
            return this._hue;
        },
        set: function (value) {
            this.setHue(value);
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.setSaturation = function (saturation) {
        this._saturation = saturation;
        return this;
    };
    Color.prototype.invertSaturation = function () {
        this._saturation = 1 - this._saturation;
        return this;
    };
    Object.defineProperty(Color.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (value) {
            this.setSaturation(value);
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.setValue = function (value) {
        this._value = value;
        return this;
    };
    Color.prototype.invertValue = function () {
        this._value = 1 - this._value;
        return this;
    };
    Object.defineProperty(Color.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.setLightness = function (lightness) {
        var hsl = this.toHSL();
        return this.fromHSLA(hsl.h, hsl.s, lightness, this._alpha);
    };
    Color.prototype.invertLightness = function () {
        var _a = this.toHSLA(), h = _a.h, s = _a.s, l = _a.l, a = _a.a;
        this.fromHSLA(h, s, 1 - l, a);
        return this;
    };
    Object.defineProperty(Color.prototype, "lightness", {
        get: function () {
            return this.toHSL().l;
        },
        set: function (value) {
            this.setLightness(value);
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.toString = function () {
        return this.css();
    };
    // Static constructors
    Color.random = function () {
        var rnd = function () { return Math.floor(Math.random() * 256); };
        return (new Color).fromRGB(rnd(), rnd(), rnd());
    };
    Color.fromName = function (name) {
        return (new Color).fromName(name);
    };
    Color.fromHex = function (hex) {
        return (new Color).fromHex(hex);
    };
    Color.fromRGB = function (r, g, b) {
        return (new Color).fromRGB(r, g, b);
    };
    Color.fromRGBA = function (r, g, b, a) {
        return (new Color).fromRGBA(r, g, b, a);
    };
    Color.fromHSL = function (h, s, l) {
        return (new Color).fromHSL(h, s, l);
    };
    Color.fromHSLA = function (h, s, l, a) {
        return (new Color).fromHSLA(h, s, l, a);
    };
    Color.fromHSV = function (h, s, v) {
        return (new Color).fromHSV(h, s, v);
    };
    Color.fromHSVA = function (h, s, v, a) {
        return (new Color).fromHSVA(h, s, v, a);
    };
    Color.fromColor = function (color) {
        return (new Color).fromColor(color);
    };
    Color.fromCSS = function (css) {
        return (new Color).fromCSS(css);
    };
    return Color;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Color;
