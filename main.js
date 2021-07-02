window.addEventListener('DOMContentLoaded', () => {

    const $menu = document.querySelector('.hamburger');
    const $nav = document.querySelector('.nav-header');
    const $li = document.querySelectorAll('.nav-header ul li');

    $menu.addEventListener('click', () => {

        $nav.classList.toggle('active');

        $li.forEach(el => {
            el.addEventListener('click', () => {
                $nav.classList.remove('active');
            })
        })

    })

})