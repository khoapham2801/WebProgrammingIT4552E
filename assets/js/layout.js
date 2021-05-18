const cartSidebar = Modal({
    element: document.querySelector('.cart-sidebar-wrapper'),
});
cartSidebar.shit.show = false;

const navbar = new Shitonen({
    element: document.body.querySelector('.navbar'),
    init() {
        const height = this.element.scrollHeight ?? 0;
        window.onscroll = () => {
            if(window.scrollY >= window.innerHeight * 0.2) {
                this.element.classList.add('sticky');
                document.body.classList.add('sticky');
            }
            else {
                this.element.classList.remove('sticky');
                document.body.classList.remove('sticky');
            }
        };
        this.element.querySelector('.shopping-cart').onclick = _ => {
            cartSidebar.shit.show = true;
        };
    }
});

document.body.querySelector('.scroll-top-btn').onclick = _ => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
    });
};