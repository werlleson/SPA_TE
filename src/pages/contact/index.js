export default () => {
    const container = document.createElement('div');


    const template = `
    <h2>Contatos</h2>
    <p>instagram @Marvel</p>`

    container.innerHTML = template;

    return container;
}