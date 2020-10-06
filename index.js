const images = document.querySelectorAll('img');

let imageOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log("😁");
        if(entry.isIntersecting){
            const img = entry.target;
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src', src);
            img.classList.add('fade');

            observer.disconnect();
        }
    });
}, imageOptions);

images.forEach(image => {
    observer.observe(image);
});