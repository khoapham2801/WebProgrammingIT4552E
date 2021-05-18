const quantitySelect = new Shitonen({
    element: document.querySelector('.product-quantity'),
    shit: {
        qty: 1
    },
    init() {
        this.query('input').onchange = _ => {
            this.shit.qty = +this.query('input').value;
        };
        this.query('.inc-qty').onclick = _ => {
            this.shit.qty += 1;
        };
        this.query('.dec-qty').onclick = _ => {
            if(this.shit.qty > 1)
                this.shit.qty -= 1;
        };
    }
});

for(const section of document.querySelectorAll('.section')) {
    new Shitonen({
        element: section,
        init() {
            const sectionBody = Collapsible({
                element: this.query('.section-body.collapsible')
            });
            this.query('.section-title').onclick = _ => {
                sectionBody.shit.expanded = !sectionBody.shit.expanded;
                if(sectionBody.shit.expanded) {
                    this.element.classList.add('expanded');
                    this.query('i').className = "gg-math-minus mr-4";
                }
                else {
                    this.element.classList.remove('expanded');
                    this.query('i').className = "gg-math-plus mr-4";
                }
            }
        }
    });
}