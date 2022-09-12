const menu = document.querySelector('.menu');
const hamburguer = document.querySelector('.hamburguer');
hamburguer.onclick = () => {

    for (let i = 0; i < menu.classList.length; i++) {

        const menuClass = menu.classList[i] 

        if (menuClass === "ocultar") {
            menu.classList.remove('ocultar')
            menu.classList.add('open')

        } else if (menuClass === "open") {
            menu.classList.remove('open')
            menu.classList.add('ocultar')
        }

    }
}