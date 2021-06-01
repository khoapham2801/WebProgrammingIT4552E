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
        <a class="apply-search-btn btn btn-warning w-100" style="line-height:2"><strong>Apply Search</strong></a>
    </div>
</div>
`;

document.body.querySelector('.shopnow-btn').onclick = _ => {
    const mainContentTop = document.querySelector('.main-content').offsetTop;
    const navbarHeight = remToPixels(4);
    window.scrollTo({
        left: 0,
        top: mainContentTop - navbarHeight,
        behavior: 'smooth',
    });
};
document.body.querySelector('.apply-search-btn').onclick = _ => {
    const mainContentTop = document.querySelector('.main-content').offsetTop;
    const navbarHeight = remToPixels(4);
    window.scrollTo({
        left: 0,
        top: mainContentTop - navbarHeight,
        behavior: 'smooth',
    });
};

var demoProducts = [];
for(var i = 0; i < Object.keys(obj).length;i++){
    var tmp = {
        "id":obj[i].id,
        "title":obj[i].name,
        "thumbnail":obj[i].img,
    };
    demoProducts.push(tmp);
}

function onclickProduct(id){
    location.href = "product-details.php" + "?id=" + id;
};

const productContainer = new Shitonen({
    element: document.querySelector('.product-list'),
    init() {
        this.element.innerHTML = '';
        for(const product of demoProducts) {
            const title = product.title || 'しゅうごう';
            const id = "obj" +product.id;
            const productEl = htmlToElement(`
                <a onclick="onclickProduct(id)" class="product">
                    <img class="product-thumbnail" src="${product.thumbnail}" onerror="this.src=''">
                    <span class="product-title">${title}</span>
                </a>
            `);
            productEl.id = id;
            // productEl.value = id;
            this.element.appendChild(productEl);
        }
    }
});


var x = document.getElementsByClassName("product");
var y = Array.from(x);


// for(var i = 0; i<10;i++){
//  y[i].style.display = "block";
// }
// for(var i = 10; i<y.length;i++){
//  y[i].style.display = "none";
// }
var Pagination = {
    

    
    code: '',
    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a class="pagination-item">' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a class="pagination-item">' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a class="pagination-item">1</a><i>...</i>';
    },

    OnclickProduct: function(){
        //alert(Pagination.page);
        var start = (Pagination.page-1)*9;
        var end = Pagination.page*9-1;
        if(Pagination.page == 1){
            for(var i = start;i<=end;i++){
                y[i].style.display = "flex";
            }
            for(var j = end+1; j<y.length;j++){
                y[j].style.display = "none";
            }
        }
        else{
            for(var i = 0 ; i<start;i++){
                y[i].style.display = "none";
            }
            for(var j = start; j<=end;j++){
                y[j].style.display = "flex";
            }
            for(var k = end+1; k<y.length ;k++){
                y[k].style.display = "none";
            }
        }
    },

    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
        Pagination.OnclickProduct();
    },

    // find pagination type
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
        const mainContentTop = document.querySelector('.main-content').offsetTop;
        const navbarHeight = remToPixels(4);
        window.scrollTo({
            left: 0,
            top: mainContentTop - navbarHeight,
            behavior: 'smooth',
        });

    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a class="pagination-item">prev</a>', // previous button
            '<span class="pagination-item"></span>',  // pagination container
            '<a class="pagination-item">next</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

var init = function() {
    Pagination.Init(document.getElementById('pagination'), {
        size:11, // pages size
        page: 1,  // selected page
        step: 1   // pages before and after current
    });
};

document.addEventListener('DOMContentLoaded', init, false);

