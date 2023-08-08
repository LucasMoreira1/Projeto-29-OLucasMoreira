const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.replace('transition-effect0','transition-effect1');
        } else {
            entry.target.classList.replace('transition-effect1','transition-effect0');

        }
    })
})


const hiddenElements = document.querySelectorAll('.efeito');
hiddenElements.forEach((el) => observer.observe(el))

