#Electro-weather
A simple electron app to display the current weather in your tray bar.

![image](https://s10.postimg.org/uouzjoezt/Screen_Shot_2016_10_08_at_18_32_58.png "logo")


##Config
Rename the ```config.js.dist``` to ```config.js``` and set the following:

```js
{
	"api_key": "{APIKEY}", // Grab your key from https://darksky.net/dev/
	"lat": "{LAT}", // The lat of your location
	"long": "{LONG}", // The long of you location
	"units": "{UNITS}", // the unit to use
	"forecast_api": "https://api.darksky.net/forecast/"
}
```


##Install dependencies
To run the app you need electron to be installed in your machine. You need also to install the node_modules for the app.

```js
npm install -g electron
npm install
```

##Run
```electron .```

##License
Copyright (c) 2016 Vincenzo Trapani

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
