
const shareBtn = document.querySelector('.cards__card-link')
const socialBox = document.querySelector('.cards__card-social-box')

shareBtn.addEventListener('click', () => {
    socialBox.classList.toggle('active')
    shareBtn.classList.toggle('active')
})