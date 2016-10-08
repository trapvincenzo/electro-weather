const {app, Menu, Tray, nativeImage} = require('electron'),
      request = require('request'),
      config = require('./config.json');

let tray = null;

const getWeather = () => {
  const url = config.forecast_api + config.api_key + '/' + config.lat + ',' + config.long + '?units=' + config.units;

  request(url, (error, response, body) => {
    
    if (!error && 200 === response.statusCode) {
      const resp = JSON.parse(body);
      tray.setTitle('' + resp.currently.summary + ' (' + resp.currently.temperature + '°C)');
    }

  });
}

app.on('ready', () => {
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'API Service Powered by Dark Sky',
    }
  ]);

  tray = new Tray(nativeImage.createEmpty());
  tray.setContextMenu(contextMenu);

  getWeather();
  setInterval(() => { getWeather() }, (1000*3600));
});