const open_link = document.querySelector('#open-journal')
// const bg = document.querySelector('.journal-bg')
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

// IMAGE CREDITS
// runyourpersonalbest.com | running
// enhancv.com | programming
// unsplash, Javier Martinez | gamming
// educationdestinationmalaysia.com | language
// pixabay.com | travel

var items = ['programming', 'running', 'gamming', 'sight-seeing', 'language-learning', 'traveling']

var intro = document.querySelector('.intro')

items.forEach(m=>{
    let link = document.createElement('a')
    link.href = `${m}`
    link.target = '_blank'

    let wrapper = document.createElement('div')
    wrapper.style.background = `url(images/${m}.jpeg) no-repeat center/cover`
    wrapper.style.position = 'relative'

    let back = document.createElement('div')
    back.style.position = 'absolute'
    back.style.right= '0'
    back.style.bottom = '0'
    back.style.borderLeft = '20px solid transparent'
    back.style.borderBottom = '20px solid white'

    let title = document.createElement('h1')
    title.innerText = m
    title.style.position = 'relative'
    title.style.top = '28px'
    title.style.fontWeight = 400
    title.style.fontSize = '1rem'

    link.append(title)
    back.appendChild(link)
    wrapper.appendChild(back)
    intro.appendChild(wrapper)
})


