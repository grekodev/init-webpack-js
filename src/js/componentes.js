import '../css/componentes.css'
export const saludar = (nombre) => {
    console.log('creando etiqueda h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, como estas`

    document.body.append(h1);
}

// export default saludar;