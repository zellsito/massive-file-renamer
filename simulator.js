(async () => {
  require('dotenv').config();
  const fs = require('fs').promises;
  let capitulos = await fs.readFile(process.env.FOLDER + process.env.LIST);
  capitulos = capitulos.toString().replace(/\r\n/g, '\n').split('\n'); // replace every \r\n with \n
  let archivos = await fs.readdir(process.env.FOLDER);
  archivos = archivos.filter((item) => item !== process.env.LIST);
  for (let i = 0; i <= capitulos.length - 1; i++){
    const partes = archivos[i].split('.');
    const extension = partes[partes.length-1];
    const origen = process.env.FOLDER + archivos[i];
    const destino = process.env.FOLDER + capitulos[i] + `.${extension}`;
    console.log(origen);
    console.log(destino);
    console.log('');
  }
})();