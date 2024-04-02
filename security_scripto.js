let mudaIcon = function(icon){
    icon.classList.toggle('fa-times')
}

function menuShow() {
    let menuMobile = document.querySelector('.menu-moba');

    if (menuMobile.classList.contains('abre')) {
        menuMobile.classList.remove('abre');
        document.classList.toggle('fa-bars')
    }else{
        menuMobile.classList.add('abre')
    }
}


