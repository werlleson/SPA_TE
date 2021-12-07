export default () => {
    const container = document.createElement('div');


    const template = `
    <h2>Marvel</h2>
    <p>A Marvel Comics é uma editora norte-americana de mídias relacionadas. Hoje a Marvel Comics é considerada a maior editora de histórias em quadrinhos do mundo. Em 2009, a The Walt Disney Company, adquiriu a Marvel Entertainment, a empresa mãe da Marvel.</p>`

    container.innerHTML = template;

    return container;
}