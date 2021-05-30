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
        title: 'いけばな',
        thumbnail: 'assets/images/product-1.jpg'
    },
    {
        title: 'ぎむ',
        thumbnail: 'assets/images/product-2.jpg'
    },
    {
        title: 'すてき',
        thumbnail: 'assets/images/product-3.jpg'
    },
    {
        title: 'しゃしん',
        thumbnail: 'assets/images/product-4.jpg'
    },
    {
        title: 'ぞんざい',
        thumbnail: 'assets/images/product-5.jpg'
    },
    {
        title: 'ひじょうに',
        thumbnail: 'assets/images/product-6.jpg'
    },
    {
        title: 'つち',
        thumbnail: 'assets/images/product-7.jpg'
    },
    {
        title: 'こーひー',
        thumbnail: 'assets/images/product-8.jpg'
    },
    {
        title: 'しゅくだい',
        thumbnail: 'assets/images/product-9.jpg'
    },
    {
        title: 'わたしたち',
        thumbnail: 'assets/images/product-10.jpg'
    },
    {
        title: 'みやこ',
        thumbnail: 'assets/images/product-11.jpg'
    },
    {
        thumbnail: 'assets/images/product-12.jpg'
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
