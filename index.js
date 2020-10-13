const images = document.querySelectorAll('img');

const lazyLoad = target => {
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src', src);
            img.classList.add('fade');

            observer.disconnect();
        }
    });
});

observer.observe(target);
};

images.forEach(lazyLoad);