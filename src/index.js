import React from 'react';
import ReactDOM from 'react-dom';


const saludo = <h1>Hola mundo</h1>;
const divRoot = document.querySelector('#app');
//console.log(divRoot);
ReactDOM.render(saludo,divRoot);