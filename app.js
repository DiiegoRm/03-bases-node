const fs = require('fs');

let createFile = (command, base, limit) => {
    let data = "";
    let fileName = `tabla_${base}.txt`;
    let path = "./files/"

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return false;
        }

        for (let i = 0; i <= limit; i++) {
            data += ` ${base} * ${i} = ${base*i} \n`;
        }

        switch (command) {
            case 'create':
                fs.writeFile(path + fileName, data, (err) => {
                    if (err)
                        reject(`No se completo el proceso`);
                    resolve({
                        fileName
                    });
                });
                break;
            case 'list':
                console.log(data);
                break;
            default:
                reject(`${command} no es una opcion valida`);
        }
    });
}

module.exports = {
    createFile
}