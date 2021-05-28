function showConfirm() {
    confirmModal.shit.show = true;
}

function closeConfirm() {
    confirmModal.shit.show = false;
}

const searchSidebar = Modal({
    element: document.querySelector('.search-sidebar-wrapper'),
});
searchSidebar.shit.show =false;
searchSidebar.shit.body = `
<div class="d-flex flex-column justify-space-between" style="height: 100vh;">
    <div class="d-flex justify-center align-center" style="height:5rem;border-bottom: 1px solid #eee;">
        <span><strong>Search</strong></span>
    </div>
    <div class="flex-1 pt-5 pb-5">
        <div class="search-sidebar-item">
            <div class="custom-search-bar">
            <input type="text" placeholder="Search product name" style="height: 30px;
            width: 400px;margin-bottom: 10px;">
            </div>
            <div class="custom-select"  style="order: 2">
            <label class="search-sidebar-label">Brand: </label>
            <select id="brands" name="brands">
            <option value="iphone">Iphone</option>
            <option value="samsung">Samsung</option>
            <option value="xiaomi">Xiaomi</option>
            <option value="oppo">Oppo</option>
            </select>
            </div>
            <div class="custom-select"  style="order: 3">
            <label class="search-sidebar-label">Memory size: </label>            <select id="mem-size" name="mem-size">
            <option value="64gb">64GB</option>
            <option value="128gb">128GB</option>
            <option value="521gb">512GB</option>
            </select>
            </div>
            <div class="custom-select"  style="order: 4">
            <label class="search-sidebar-label">Year Release: </label>
            <select id="year-release" name="year-release">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            </select>
            </div>
        </div>
        <div class="cart-sidebar-item">
            
        </div>
    </div>
    <div class="d-flex justify-center align-center mb-1" style="height:5rem;border-top: 1px solid #eee;">
        <a href="" class="search-btn btn btn-warning w-100" style="line-height:2"><strong>Apply Search</strong></a>
    </div>
</div>
`;

const cartSidebar = Modal({
    element: document.querySelector('.cart-sidebar-wrapper'),
});
cartSidebar.shit.show = false;
cartSidebar.shit.body = `
<div class="d-flex flex-column justify-space-between" style="height: 100vh;">
    <div class="d-flex justify-center align-center" style="height:5rem;border-bottom: 1px solid #eee;">
        <span><strong>Your items</strong></span>
    </div>
    <div class="flex-1 pt-5 pb-5">
        <div class="cart-sidebar-item">
            <div class="product-quantity">
                <button class="dec-qty">-</button>
                <input type="number" value="3" min="1">
                <button class="inc-qty">+</button>
            </div>
            <span class="ml-5 flex-1"><strong>しゅうごう</strong></span>
            <button class="btn remove-item" style="height:3rem;border:none;" onclick="showConfirm()">x</button>
        </div>
        <div class="cart-sidebar-item">
            <div class="product-quantity">
                <button class="dec-qty">-</button>
                <input type="number" value="2" min="1">
                <button class="inc-qty">+</button>
            </div>
            <span class="ml-5 flex-1"><strong>しゅうごうひじょうに</strong></span>
            <button class="btn remove-item" style="height:3rem;border:none;" onclick="showConfirm()">x</button>
        </div>
    </div>
    <div class="d-flex justify-center align-center mb-1" style="height:5rem;border-top: 1px solid #eee;">
        <a href="checkout.html" class="checkout-btn btn btn-warning w-100" style="line-height:2"><strong>Checkout</strong></a>
    </div>
</div>
`;

const confirmModal = Modal({
    element: document.querySelector('.confirm-modal-wrapper')
});
confirmModal.shit.show = false;
confirmModal.shit.title = '';
confirmModal.shit.body = '<img src="assets/images/areyousure.png" style="object-fit:contain;width:100%;">'
confirmModal.shit.footer = `
<div class="d-flex justify-end">
    <button class="btn btn-success" onclick="closeConfirm()">Yes</button>
    <button class="btn btn-warning" onclick="closeConfirm()">No</button>
</div>`;

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
        this.element.querySelector('.search').onclick = _ =>{
            searchSidebar.shit.show = true;
        };
    }
});

if(document.body.querySelector('.scroll-top-btn')) {
    document.body.querySelector('.scroll-top-btn').onclick = _ => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    };
}

const OnClickAboutUs = ()=>{
    window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
    });
}
const fakeDB = {
    11: {
        title: 'しゅうごう',
        images: ['assets/images/product-12.jpg'],
        price: 10
    }
};

function addToCart(itemID) {
    // demo id
}
