let fs = require('fs');
require('dotenv').config();
fs.readFile(process.env.FOLDER + process.env.LIST, function(err, data) {
  let capitulos = data.toString().split("\r\n");
  fs.readdir(process.env.FOLDER, function (err, archivos) {
    let i = 0;
    for (capitulo of capitulos) {
      let partes = archivos[i].split('.');
      let extension = partes[partes.length-1];
      let origen = process.env.FOLDER + archivos[i];
      let destino = process.env.FOLDER + capitulo + `.${extension}`;
      fs.rename(origen, destino, (err) => {
        console.log( `Renamed ${origen} to ${destino}`);
      });
      i++;
    }
  });
});