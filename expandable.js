class expandableList extends HTMLUListElement{
    constructor(){
        super();

        this.style.position = "relative"
        this.toggelbtn = document.createElement("button");
        this.toggelbtn.style.position = "absolute";
        this.toggelbtn.style.border = "none";
        this.toggelbtn.style.background = "none";
        this.toggelbtn.style.padding = 0;
        this.toggelbtn.style.top = 0;
        this.toggelbtn.style.left = "5px";
        this.toggelbtn.style.cursor ="pointer";
        this.toggelbtn.innerText = ">";
        this.toggelbtn.addEventListener("click", () => {this.dataset.expanded = !this.isExpanded})
        this.appendChild(this.toggelbtn);
                
    }
    get isExpanded()
    {
        return this.dataset.expanded !== "false" && this.dataset.expanded != null;
    }

    static get observedAttributes(){

        return ["data-expanded"];
    }

    attributeChangedCallback(name, OldValue, NewValue)
    {
        this.updateStyles();
    }

    connectedCallback()
    {
        this.updateStyles();
    }
    updateStyles(){
        const transform = this.isExpanded ? "rotate(90deg)" : ""
        this.toggelbtn.style.transform = transform;
        ;[...this.children].forEach(child => {
            if(child !== this.toggelbtn){
                child.style.display = this.isExpanded ? "" : "none"
            }
        });
    }
    

}
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

    setInterval(scrollSlider, 3000); // Change slide every 3 seconds
});


customElements.define("expandable-list", expandableList, {extends: "ul"});