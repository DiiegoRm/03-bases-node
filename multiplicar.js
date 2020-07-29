const app = require('./app.js');
const argv = require('./config/yargs').argv;

app.createFile(argv._[0], argv.base, argv.limit)
    .then(response => console.log(` el archivo ${response.fileName} fue creado`))
    .catch(err => console.log(err));