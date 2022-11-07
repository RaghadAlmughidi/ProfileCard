//====================SHOW SOCIAL NETWORK================
const showNetwork = (toggleCard, socialCard) => {
    const toggle = document.getElementById('card-toggle'),
        social = document.getElementById('card__social')

    toggle.addEventListener('click', () => {
        //if the animation class exists we add class the down-animation class
        if (social.classList.contains('animation')) {
            social.classList.add('down-animation')
                //we remove down-animation class
            setTimeout(() => {
                social.classList.remove('down-animation')
            }, 1000);
        }
        //we add the animation class to the div tag with card__social
        social.classList.toggle('animation')
    })

}
showNetwork('card-toggle', 'card__social')