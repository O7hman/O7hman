const open_link = document.querySelector('#open-journal')
const bg = document.querySelector('.journal-bg')
const intro_para = document.querySelector('.intro')
var flag = 'closed'
open_link.addEventListener('click', (event)=>{
    event.preventDefault()
    if (flag === 'closed'){
        // bg.style.height = '30%'
        intro_para.style.height = '55%'
        open_link.textContent = 'Return'
        flag = 'opened'
    }else{
        // bg.style.height = '80%'
        open_link.textContent = 'Welcome'
        intro_para.style.height = '0'
        flag = 'closed'
    }

})
