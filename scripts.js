const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.replace('transition-effect-off','transition-effect-on');
        } else {
            entry.target.classList.replace('transition-effect-on','transition-effect-off');

        }
    })
})


const hiddenElements = document.querySelectorAll('.efeito');
hiddenElements.forEach((el) => observer.observe(el))

