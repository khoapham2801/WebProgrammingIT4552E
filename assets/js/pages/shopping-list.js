modal = Modal();
modal.shit.title = `
    Notification
`;
modal.shit.body = `
    <p>Hi there!</p>
    <p>This is a demo modal.</p>
    <p>Do you like it?</p>
`;
modal.shit.footer = `
    <div class="d-flex justify-end">
        <button class="btn btn-success">Yes</button>
        <button class="btn btn-warning">No</button>
    </div>
`
modal.shit.show = false;

document.body.appendChild(modal.element);

document.body.querySelector('.shopnow-btn').onclick = _ => {
    const mainContentTop = document.querySelector('.main-content').offsetTop;
    const navbarHeight = remToPixels(4);
    window.scrollTo({
        left: 0,
        top: mainContentTop - navbarHeight,
        behavior: 'smooth',
    });
};


const demoProducts = [
    {
        title: 'Iphone 12 Pro',
        thumbnail: 'assets/images/product-1.jpg'
    },
    {
        title: 'Iphone 11 Pro Max',
        thumbnail: 'assets/images/iphone11promax.jpg'
    },
    {
        title: 'Samsung Galaxy S21 Ultra',
        thumbnail: 'assets/images/samsungs21ultra.jpg'
    },
    {
        title: 'Google Pixel 4a',
        thumbnail: 'assets/images/googlepixel4a.jpg'
    },
    {
        title: 'OnePlus 9 Pro',
        thumbnail: 'assets/images/oneplus9pro.jpg'
    },
    {
        title: 'Samsung Galaxy Note 20 Ultra',
        thumbnail: 'assets/images/iphone11promax.jpg'
    },
    {
        title: 'Samsung Galaxy S20 Plus',
        thumbnail: 'assets/images/iphone11promax.jpg'
    },
    {
        title: 'Google Pixel 5',
        thumbnail: 'assets/images/iphone11promax.jpg'
    },
    {
        title: 'Iphone 12',
        thumbnail: 'assets/images/iphone11promax.jpg'
    },
    {
        title: 'Xiaomi Mi 11 5G',
        thumbnail: 'assets/images/iphone11promax.jpg'
    },
    {
        title: 'Xiaomi Mi 10T Pro 5G',
        thumbnail: 'assets/images/iphone11promax.jpg'
    },
    {
        thumbnail: 'assets/images/iphone11promax.jpg'
    },
];

const productContainer = new Shitonen({
    element: document.querySelector('.product-list'),
    init() {
        this.element.innerHTML = '';
        for(const product of demoProducts) {
            const title = product.title || 'しゅうごう';
            const productEl = htmlToElement(`
                <a href="product-details.html" class="product">
                    <img class="product-thumbnail" src="${product.thumbnail}" onerror="this.src=''">
                    <span class="product-title">${title}</span>
                </a>
            `);
            this.element.appendChild(productEl);
        }
    }
});
