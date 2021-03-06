function showConfirm(i) {
    // confirmModal.shit.show = true;
    var mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
    //console.log(i);
    //console.log(mobiles[i].id);
    //mobiles.splice(i,1);
    mobiles[i].id = -1;
    //console.log(mobiles[i].id);

    sessionStorage.setItem("mobiles", JSON.stringify(mobiles));
    document.getElementById("item"+i).style.display = "none";
    if(window.location.href == "http://localhost/Project/WebProgrammingIT4552E/src/view/checkout.php"){
        location.reload();
    }
    //console.log(mobiles);
    // const isEmpty = mobiles.every(item => mobiles.id == -1);
    // if(isEmpty) sessionStorage.clear();
    // else alert("not empty");
    var isEmpty;
    for(var i = 0; i<mobiles.length;i++){
        isEmpty = 1;
        if(mobiles[i].id != -1){
            //console.log("Not empty");
            isEmpty = 0;
            break;
        }
    }
    //console.log(isEmpty);
    if(isEmpty == 1) sessionStorage.clear();



}

function closeConfirm() {
    confirmModal.shit.show = false;
}

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
        <a href="checkout.php" class="checkout-btn btn btn-warning w-100" style="line-height:2"><strong>Checkout</strong></a>
    </div>
</div>
`;

const confirmModal = Modal({
    element: document.querySelector('.confirm-modal-wrapper')
});
confirmModal.shit.show = false;
confirmModal.shit.title = '';
confirmModal.shit.body = '<img src="" style="object-fit:contain;width:100%;">'
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
        this.element.querySelector('.shopping-cart-icon').onclick = _ => {
            cartSidebar.shit.body = `
            <div class="d-flex flex-column justify-space-between" style="height: 100vh;">
            <div class="d-flex justify-center align-center" style="height:5rem;border-bottom: 1px solid #eee;">
                <span><strong>Your items</strong></span>
            </div>
            <div class="flex-1 pt-5 pb-5">`
            ;

            var mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
            if (mobiles) {
                //console.log(mobiles);
                for (var i = 0; i < mobiles.length; i++) {
                    //console.log(mobiles[i].id);
                    if(mobiles[i].id!= -1){
                        cartSidebar.shit.body += `
                        <div class="cart-sidebar-item" id="item`+i+`">
                            <div class="product-quantity">
                                
                                <input type="number" value="`+mobiles[i]['quantity']+`" min="1">
            
                            </div>
                            <span class="ml-5 flex-1"><strong>`+mobiles[i]['name']+`</strong></span>
                            <button class="btn remove-item" style="height:3rem;border:none;" onclick="showConfirm(`+i+`)">x</button>
                        </div>`;
                    }
                }
            }
            
            cartSidebar.shit.body += 
            `</div>
            <div class="d-flex justify-center align-center mb-1" style="height:5rem;border-top: 1px solid #eee;">
                <a href="checkout.php" class="checkout-btn btn btn-warning w-100" style="line-height:2"><strong>Checkout</strong></a>
            </div>
            </div>
            `;
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

function isEmptySession() {
    var flag = '<%=Session["mobiles"] == null%>';
    if (flag.toLowerCase() == 'true')
    {
        return true;
    }
    return false;
}

