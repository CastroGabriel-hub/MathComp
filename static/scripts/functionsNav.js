class MobileNavBar{
    constructor(mobileMenu,navLinks,navItens){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navLinks = document.querySelector(navLinks);
        this.navItens = this.navLinks.querySelectorAll(navItens);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    animatadeLinks(){
        this.navItens.forEach((link) => {

            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = "navLinkFade 0.5s ease forwards 0.3s");
        });
    }
    handleClick(){
        this.navLinks.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animatadeLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-links",
    ".nav-links li",
);
mobileNavBar.init();