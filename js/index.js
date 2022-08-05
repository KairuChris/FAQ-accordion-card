let faqContainer = document.querySelectorAll('.faq')

faqContainer.forEach(container=>{
    container.addEventListener('click',()=>{
        container.classList.toggle('active')
    })
})



