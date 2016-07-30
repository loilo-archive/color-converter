# color-converter
Allows conversion of colors with JavaScript from and to different formats and output as CSS.

## Usage

The class is pretty much self-documenting. Just risk a look into `color-converter.ts`. :)

A small example:

```javascript
const Color = require('color-converter').default

let cssValue = Color
    .fromRGB(255, 0, 0)  // Create from red
	.darken(20)          // Make it 20% darker
	.addBlue(40)         // Add 40% blue
	.setAlpha(0.5)       // Set opacity to 50%
	.css()               // Returns Hex or RGBA string (depending on alpha value)

console.log(cssValue)    // Output: rgba(153, 0, 102, 0.5)
```

## API

### Static constructors

```javascript
// Returns a random color
Color.random()

// Returns a color...

// ...from another color object
Color.fromColor(color)

// ...from an HTML color name
Color.fromName(name)

// ...from a Hex string such as "#fff" or "#123456"
Color.fromHex(hexString)

// ...from red, green and blue each ranging from 0 to 255...
Color.fromRGB(red, green, blue)
// ...and alpha channel from 0 to 1
Color.fromRGBA(red, green, blue, alpha)

// ...from hue, saturation and lightness each ranging from 0 to 1...
Color.fromHSL(hue, saturation, lightness)
// ...and alpha channel from 0 to 1
Color.fromHSLA(hue, saturation, lightness, alpha)

// ...from hue, saturation and value each ranging from 0 to 1...
Color.fromHSV(hue, saturation, value)
// ...and alpha channel from 0 to 1
Color.fromHSVA(hue, saturation, value, alpha)
```

### Converters

```javascript
let color = Color.fromHex('#639')

// Converts the color to...

// A string usable in CSS
color.css()
// Returns "#663399"

// ...an HTML name
color.toName()
// Returns "RebeccaPurple" (returns null in case the color doesn't match any name)

// ...a Hex string
color.toHex()
// Returns "#663399", returns an rgba(...) string if alpha channel isn't 1

// ...an RGB hash
color.toRGB()
// Returns { r: 102, g: 51, b: 153 }

// ...an RGBA hash
color.toRGBA()
// Returns { r: 102, g: 51, b: 153, a: 1 }

// ...an HSL hash
color.toHSL()
// Returns { h: 0.8, s: 0.5, l: 0.4 }

// ...an HSLA hash
color.toHSLA()
// Returns { h: 0.8, s: 0.5, l: 0.4, a: 1 }

// ...an HSV hash
color.toHSV()
// Returns { h: 0.75, s: 0.667, v: 0.6 }

// ...an HSVA hash
color.toHSVA()
// Returns { h: 0.75, s: 0.667, v: 0.6, a: 1 }
```

### Properties & Modifiers
These modifiers will allow you to change a color according to your needs. Note that color objects are immutable so every modification returns a new color object.

```javascript
// Properties first. You can get and set those.

// The alpha channel, a value from 0 to 1
color.alpha

// The portion of red/green/blue a value from 0 to 255
color.red
color.green
color.blue

// The hue, a value from 0 to 1
color.hue

// The saturation as in HSV color model, a value between 0 and 1
color.saturation

// The value as in HSV color model, a value between 0 and 1
color.value

// The lightness as in HSL color model, a value between 0 and 1
color.lightness


// Modifiers

// Changes the opacity by an absolute percentage from -100 to 100
color.fade(number)

// Rotates the hue by a number of degrees
color.rotate(number)

// Changes the saturation by an absolute percentage from -100 to 100
color.saturate(number)

// Basically color.saturate(number * -1)
color.desaturate(number)

// Changes the lightness (as in HSL) by an absolute percentage from -100 to 100
color.lighten(number)

// The same as color.lighten(number * -1)
color.darken(number)

// Changes the portion of red/green/blue by an absolute percentage from -100 to 100
color.addRed(number)
color.addGreen(number)
color.addBlue(number)

// Inverts saturation as in HSV color model
color.invertSaturation()

// Inverts the value as in HSV color model
color.invertValue()

// Inverts the lightness as in HSL color model
color.invertLightness()
```