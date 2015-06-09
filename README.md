# color-converter
Allows transforming of colors with JavaScript from and to different formats and output as CSS.

# Usage

The class is pretty much self-documenting. Just risk a look into `color-converter.coffee`. :)

A little example:

```javascript
var cssValue = ColorConverter.fromRGB( 255, 0, 0 ) // create from red
	.darken( 20 ) // add 20% darkness
	.addBlue( 40 ) // add 40% blue
	.setAlpha( 0.5 ) // set opacity to 50%
	.css(); // output as Hex or RGBA string (depending on alpha value)

console.log( cssValue ); // output: rgba(153, 0, 102, 0.5)
```