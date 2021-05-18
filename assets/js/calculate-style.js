(function() {
    CustomCSS.add('.d-flex', 'display: flex !important;');
    CustomCSS.add('.d-block', 'display: block !important;');
    CustomCSS.add('.d-inline-block', 'display: inline-block !important;');
    CustomCSS.add('.justify-end', 'justify-content: flex-end !important;');
    CustomCSS.add('.justify-center', 'justify-content: center !important;');
    CustomCSS.add('.align-center', 'align-items: center !important;');

    const classMapping = {
        'mt': 'margin-top',
        'mr': 'margin-right',
        'mb': 'margin-bottom',
        'ml': 'margin-left',
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
