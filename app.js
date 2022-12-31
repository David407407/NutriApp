(function () {
    const hola = document.querySelector('#holaMundo');

    let array = [

        {l: 'hola'}
    ]
    hola.addEventListener('click', () => {
        holaMundo();
    })
    function holaMundo(e) {
        hola.innerHTML = 'Hola Mundo';
    }
    holaMundo();

})();