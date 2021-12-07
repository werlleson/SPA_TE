export default () => {
    const container = document.createElement('div');


    const template = `
    <h2>Historia Marvel</h2>
    <p>A Marvel Entertainment foi fundada em 1939, nos Estados Unidos, por Martin Goodman. A primeira revista em quadrinhos da companhia foi a Marvel Comics, lançada em 31 de agosto de 1939, quando apareceu o personagem Tocha Humana e Namor. A história da empresa, no entanto, teve início em 1933, quando houveram as primeiras publicações na revista Western Supernovel Magazine.</p>`

    container.innerHTML = template;

    return container;
}