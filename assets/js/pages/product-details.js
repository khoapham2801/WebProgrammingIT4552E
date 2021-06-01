self = this;

const quantitySelect = new Shitonen({
    element: document.querySelector('.product-quantity'),
    shit: {
        qty: 1
    },
    init() {
        this.shit.on('init change', 'qty', _ => {
            this.query('input').value = +this.shit.qty;
        });
        this.query('input').onchange = _ => {
            let value = ''+this.query('input').value;
            if(!value.match(/[0-9]+/g)) value = 1;
            this.shit.qty = +value;
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
            };
        }
    });
}

function addToCart() {
    mobileObj['quantity'] = parseInt(document.getElementById("quantity-mobiles").value);

    var mobiles = [];
    if (sessionStorage.length != 0) {
        mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
        console.log(1);
        console.log(mobiles);
        var tmpMobile = mobiles.find(mobile => mobile['id'] = mobileObj['id']);
        console.log(2);
        console.log(mobiles);
        if (tmpMobile) {
            tmpMobile['quantity'] += mobileObj['quantity'];
        } else {
            mobiles.push(mobileObj);
        }
        console.log(3);
        console.log(mobiles);
    } else {
        mobiles.push(mobileObj);
    }
    console.log(4);
    console.log( mobiles);
    sessionStorage.setItem("mobiles", JSON.stringify(mobiles));
    alert("Successfully added to cart!")
}

function buyNow() {
    //self.addToCart();
    window.location.href = "checkout.php";
}


