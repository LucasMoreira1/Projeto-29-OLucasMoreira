const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.replace('opacity-0','opacity-100');
        } else {
            entry.target.classList.replace('opacity-100','opacity-0');

        }
    })
})


const hiddenElements = document.querySelectorAll('.transition-opacity');
hiddenElements.forEach((el) => observer.observe(el))

