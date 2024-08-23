# LandingPage
Elaboración del taller #1 de la materia plataformas de programación empresarial. Landing Page

# Pasos de configuración del bundle esbuild

1. Instalar esbuild con el siguiente comando: npm install --save-exact --save-dev esbuild
2. Verificar la version si se instalo el esbuild: .\node_modules\.bin\esbuild --version
3. Ahora instalar paquetes react y react-dom: npm install react react-dom
4. Crear un archivo llamado app.jsx en la raiz del programa
5. Colocar el siguiente codigo en el archivo app.jsx: 
import * as React from 'react'
import * as Server from 'react-dom/server'

//let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
6. Luego colocar la salida del archivo para cuando se ejecute: .\node_modules\.bin\esbuild app.jsx --bundle --outfile=out.js


