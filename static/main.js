contactBtn = document.getElementById('contact-button')
socialMedia = document.querySelector('.social-media')

contactBtn.addEventListener('click', contactFunction)

function contactFunction(){
   if(socialMedia.style.display==='none') {
    socialMedia.style.display='inline-block'
   } else {
    socialMedia.style.display='none'
   }
}

