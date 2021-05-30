const fs = require('fs');
const csso = require('csso');

const CustomCSSStatic = {
    ruleTable: {}
};

class CustomCSS {
    static getComputed() {
        const ruleTable = CustomCSSStatic.ruleTable;
        let result = '';
        for(const [selector, rule] of Object.entries(ruleTable)) {
            let synthRule = '';
            for(const [rulename, rulevalue] of Object.entries(rule)) {
                synthRule += rulename + ': ' + rulevalue + ';';
            }
            result += selector + ' {' + synthRule + '} ';
        }
        return result;
    }

    static add(selector, css) {
        if(css instanceof Object) {
            for(const [subselector, subcss] of Object.entries(css)) {
                CustomCSS.add(selector+' '+subselector, subcss);
            }
            return;
        }
        const ruleTable = CustomCSSStatic.ruleTable;
        if(ruleTable[selector] == undefined) {
            ruleTable[selector] = {};
        }
        const rules = css.split(';');
        for(const rule of rules) {
            const rulename = rule.split(':')[0].trim();
            if(!rulename) continue;
            const rulevalue = rule.split(':').slice(1).join(':').trim();
            ruleTable[selector][rulename] = rulevalue;
        }
    }
}

(function() {
    CustomCSS.add('body', `margin: 0;`);
    CustomCSS.add('body *', `box-sizing: border-box !important;`);
    CustomCSS.add('.d-flex', 'display: flex !important;');
    CustomCSS.add('.d-block', 'display: block !important;');
    CustomCSS.add('.d-inline-block', 'display: inline-block !important;');
    CustomCSS.add('.flex-column', 'flex-direction: column !important;');
    CustomCSS.add('.flex-1', 'flex: 1 !important;');
    CustomCSS.add('.justify-start', 'justify-content: flex-start !important;');
    CustomCSS.add('.justify-center', 'justify-content: center !important;');
    CustomCSS.add('.justify-end', 'justify-content: flex-end !important;');
    CustomCSS.add('.justify-space-between', 'justify-content: space-between !important;');
    CustomCSS.add('.align-baseline', 'align-items: baseline !important;');
    CustomCSS.add('.align-start', 'align-items: flex-start !important;');
    CustomCSS.add('.align-center', 'align-items: center !important;');
    CustomCSS.add('.align-end', 'align-items: flex-end !important;');
})();

(function generateMarginRules() {
    const classMapping = {
        'mt': 'margin-top',
        'mr': 'margin-right',
        'mb': 'margin-bottom',
        'ml': 'margin-left',
        'pt': 'padding-top',
        'pr': 'padding-right',
        'pb': 'padding-bottom',
        'pl': 'padding-left',
    };

    const spacer = '1rem';

    const spaceMapping = {
        '0': '0',
        '1': '.25',
        '2': '.5',
        '3': '1',
        '4': '1.5',
        '5': '3',
        'auto': 'auto',
    };

    Object.entries(classMapping).forEach(([shorthand, css]) => {
        Object.entries(spaceMapping).forEach(([spc, coeff]) => {
            if(spc.match(/[a-zA-Z]+/g)) {
                CustomCSS.add(`.${shorthand}-${spc}`, `${css}: ${coeff};`);
            }
            else {
                CustomCSS.add(`.${shorthand}-${spc}`, `${css}: calc(${coeff} * ${spacer});`);
            }
        });
    });
})();

(function generateAspectRatioRules() {
    CustomCSS.add('.as', `
        width: 100%;
        padding-top: var(--as-ratio, 100%);
        box-sizing: border-box;
        position: relative;
    `);
    CustomCSS.add('.as > *', `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `);
    for(let widthRatio = 1; widthRatio <= 16; widthRatio++) {
        for(let heightRatio = 1; heightRatio <= 16; heightRatio++) {
            CustomCSS.add(`.as-${widthRatio}-${heightRatio}`, `
                --as-ratio: ${heightRatio / widthRatio * 100}%;
            `);
        }
    }
})();

(function generateWidthRules() {
    for(let i = 0; i <= 100; i++) {
        CustomCSS.add(`.w-${i}`, `width: ${i}%;`);
        CustomCSS.add(`.h-${i}`, `height: ${i}%;`);
    }
})();

(function generateRowColRules() {
    CustomCSS.add('.row', `
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    `);

    for(let i = 1; i <= 12; i++) {
        const percent = i / 12 * 100;
        CustomCSS.add(`.col-${i}`, `
            -ms-flex: 0 0 ${percent}%;
            flex: 0 0 ${percent}%;
            max-width: ${percent}%;
        `);        
    }
})();

const minifiedCss = csso.minify(CustomCSS.getComputed()).css;

fs.writeFileSync('../core.css', minifiedCss);
