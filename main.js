const templateContent = `
    <header class="header">   
        <a href="#" class="logo">Things You Shouldn't Miss In Hungary</a>
        <nav class="navbar">
            <a href="index.html">Home</a>
            <a href="attractions.html">Attractions</a>
            <a href="food.html">Food & Drink</a>
            <a href="tips.html">Tips&Hotels</a>
            <a href="blogs.html">Blogs</a>
        </nav>
    </header>
    <section class="container">
        <div class="slider-wrapper">
            <div class="slider">
                <img id="slide-1" src="budapest.jpeg" alt="Parliament">
                <img id="slide-2" src="Budapest, Hungary.jpeg" alt="Fisherman's Bastion">
                <img id="slide-3" src="Lake Balaton.jpeg" alt="Balaton Lake">
                <img id="slide-4" src="Exploring Lake Balaton, Hungary - The Hungarian Sea - Travel Melodies.jpeg" alt="Balaton Lake">
                <img id="slide-5" src="How To Spend A Perfect Weekend In Budapest.jpeg" alt="Green Bridge">
            </div>
            <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
                <a href="#slide-4"></a>
                <a href="#slide-5"></a>
            </div>      
        </div>
    </section>
`;

function loadTemplate() {
    document.addEventListener('DOMContentLoaded', () => {
        const templateContainer = document.createElement('div');
        templateContainer.innerHTML = templateContent;
        document.getElementById('top').appendChild(templateContainer);

        
        const includeSlideshow = document.getElementById('top').getAttribute('data-include-slideshow') !== 'false';

        if (includeSlideshow) {
            window.addEventListener("load", function() {
                const slider = document.querySelector('.slider');
                const slides = slider.children;
                const slideCount = slides.length;
                let currentIndex = 0;
            
                function scrollSlider() {
                    currentIndex = (currentIndex + 1) % slideCount;
                    const offset = slides[currentIndex].offsetLeft;
                    slider.scrollTo({ left: offset, behavior: 'smooth' });
                }
            
                setInterval(scrollSlider, 3000); 
            });
        } else {
            
            const sliderWrapper = templateContainer.querySelector('.slider-wrapper');
            if (sliderWrapper) {
                sliderWrapper.remove();
            }
        }
    });
}

loadTemplate();
