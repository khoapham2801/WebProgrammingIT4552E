const Collapsible = ({element, expanded=true, extras=0}={}) => {
    function setCollapse(state) {
        function collapseSection() {
            var sectionHeight = element.scrollHeight;
            var elementTransition = element.style.transition;
            element.style.transition = '';

            element.addEventListener('transitionend', function (e) {
                element.removeEventListener('transitionend', arguments.callee);
                element.setAttribute('data-collapsed', 'true');
            });
            requestAnimationFrame(function () {
                if(element.getAttribute('data-collapsed') == 'collapsing') {
                    element.style.height = sectionHeight + 'px';
                    element.style.transition = elementTransition;
                    requestAnimationFrame(function () {
                        element.style.height = 0 + 'px';
                    });
                }
            });
            element.setAttribute('data-collapsed', 'collapsing');
            element.classList.remove('active');
        }

        function expandSection() {
            var sectionHeight = element.scrollHeight;
            element.style.height = sectionHeight + extras + 'px';
            element.addEventListener('transitionend', function (e) {
                if(element.getAttribute('data-collapsed') == 'expanding') {
                    element.removeEventListener('transitionend', arguments.callee);
                    element.style.height = null;
                    element.setAttribute('data-collapsed', 'false');
                }
            });
            element.setAttribute('data-collapsed', 'expanding');
            element.classList.add('active');
        }
        const collapsedState = element.getAttribute('data-collapsed');

        if (collapsedState != ''+state) {
            if (collapsedState == 'true') {
                expandSection()
            } else if(collapsedState == 'false' || collapsedState == null) {
                collapseSection()
            }
        }
    }

    if(!element) {
        throw `Collapsible element required`;
    }
    if(!element.style.transition) {
        element.style.transition = '.001s';
    }

    const component = new Shitonen({
        element,
        shit: {
            expanded: true,
        },
        init() {
            this.shit.on('init change', 'expanded', _ => {
                setCollapse(!this.shit.expanded);
            });
        }
    });

    return component;
};

const AutoresizeTextarea = ({element, minRows=1}={}) => {
    const scrollHiddenCSS = `
        overflow: hidden !important;
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
    `;
    if(document.querySelector('body > .autoresize-textarea-zone') == null) {
        document.body.appendChild(htmlToElement('<div class="autoresize-textarea-zone"></div>'));
        document.querySelector('body > .autoresize-textarea-zone').setAttribute('style', `visibility:hidden;position:fixed;z-index:-9999999;`);
    }
    const hiddenTextarea = new Shitonen({
        html: `
            <textarea style="{{style}}" rows="${minRows}"></textarea>
        `,
        shit: {
            style: scrollHiddenCSS,
            value: ''
        },
        init() {
            this.shit.on('init change', 'value', _ => {
                this.element.value = this.shit.value;
            });
            document.querySelector('body > .autoresize-textarea-zone').appendChild(this.element);
        }
    });
    if(!element) {
        element = htmlToElement('<textarea></textarea>');
    }
    const displayTextarea = new Shitonen({
        element,
        shit: {
            value: ''
        },
        init() {
            this.element.classList.add('autoresize-textarea');
            CustomCSS.add('.autoresize-textarea', `
                resize: none !important;
                ${scrollHiddenCSS}
            `);
            const update = _ => {
                this.shit.value = this.element.value;
            };
            this.element.oninput = update;
            this.element.onchange = update;
            const copyStyle = (name) => {
                const css = this.element.style[name];
                hiddenTextarea.element.style[name] = css;
            };
            this.shit.on('init change', 'value', _ => {
                hiddenTextarea.shit.value = this.shit.value;
                this.element.value = this.shit.value
                copyStyle('width');
                copyStyle('font-family');
                copyStyle('font-size');
                copyStyle('font-weight');
                copyStyle('line-height');
                const height = hiddenTextarea.element.scrollHeight;
                this.element.style.height = height+'px';
            });
        }
    });
    return displayTextarea;
};

(function addModalCSS() {
    CustomCSS.add('@keyframes animatetop', `
        from {
            top: -300px;
            opacity: 0;
        }
        to {
            top: 0;
            opacity: 1;
        }
    `);
    CustomCSS.add('.modal-wrapper', `
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
    `);
    CustomCSS.add('.modal-backdrop', `
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #3333;
    `);
    CustomCSS.add('.modal', `
        background-color: #fefefe;
        width: 50%;
        height: max-content;
        position: relative;
        animation-name: animatetop;
        animation-duration: 0.4s;
        margin-top: 6rem;
        border: 1px solid transparent;
        border-radius: .25rem;
    `);
    CustomCSS.add('.modal-header', `
        padding: 1rem;
        background-color: #fefefe;
        color: #222;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #aaa3;
    `);
    CustomCSS.add('.modal-title', `font-weight: 500;`);
    CustomCSS.add('.modal-header .close', `
        color: #e77540;
        user-select: none;
        cursor: pointer;
        color: #e77540;
        user-select: none;
        cursor: pointer;
    `);
    CustomCSS.add('.modal-body', `
        padding: .25rem 2rem;
        background-color: #fefefe;
        margin: auto;
    `);
    CustomCSS.add('.modal-footer', `
        padding: 1rem;
        background-color: #fefefe;
        color: white;
        border-top: 1px solid #aaa3;
    `);
})();
const Modal = ({element}={}) => {
    const shitonenConfig = {
        html: `
            <div class="modal-wrapper">
                <div class="modal-backdrop"></div>
                <div class="modal">
                    <div class="modal-header">
                        <span class="modal-title">{{title | uppercase}}</span>
                        <span class="close">
                            <i class="gg-close"></i>
                        </span>
                    </div>
                    <div class="modal-body">
                        {{body}}
                    </div>
                    <div class="modal-footer">
                        {{footer}}
                    </div>
                </div>
            </div>
        `,
        shit: {
            show: false,
            title: '',
            body: '',
            footer: ''
        },
        shitConfig: {
            title: { escape: false },
            body: { escape: false },
            footer: { escape: false }
        },
        init() {
            this.shit.on('init change', 'show', _ => {
                if(this.shit.show) {
                    this.element.style.display = 'flex';
                    this.element.classList.add('show');
                }
                else {
                    this.element.style.display = 'none';
                    this.element.classList.remove('show');
                }
            });
            const closeBtn = this.element.querySelector('.modal > .modal-header > .close > i');
            if(closeBtn) {
                closeBtn.onclick = _ => {
                    this.shit.show = false;
                };
            }
            const backdrop = this.element.querySelector('.modal-backdrop');
            if(backdrop) {
                backdrop.onclick = event => {
                    this.shit.show = false;
                };
            }
        }
    };
    if(element) {
        delete shitonenConfig.html;
        shitonenConfig.element = element;
    }
    const component = new Shitonen(shitonenConfig);
    return component;
};
