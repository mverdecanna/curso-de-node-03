var colors = require('colors');
const fs = require('fs');
// const express = require('express');
//const f = require('./');

let crearArchivo = ( base, limite = 10 ) => {

    return new Promise( (resolve, reject) => {

        if( !Number(base) ){
            reject(`${ base } no es un número`);
        }
        
        if( !Number(limite) ){
            reject(`${ limite } no es un número`);
        }

        let data = '';
        for(let i = 1; i<=limite; i++){
            data += `${ i } * ${ base } = ${ i * base }\n`;
        }
        
        let name = `tabla-${ base }.txt`.green;

        fs.writeFile(name, data, (err) => {
            if (err) reject(err);
            else
                resolve(`El archivo ${ name } ha sido creado!`);
            //console.log(`El archivo ${ name } ha sido creado!`);
        });
    });
}


let listarTabla = (base, limite) => {

    return new Promise( (resolve, reject) => {

        if( !Number(base) ){
            reject(`${ base } no es un número`);
        }

        let data = '';
        for(let i = 1; i<=limite; i++){
            data += `${ i } * ${ base } = ${ i * base }\n`;
        }
        resolve(data);
        //console.log(data);
    });
}



module.exports = {
    crearArchivo,
    listarTabla
}