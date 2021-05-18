console.log('-- ShittyBundle --');
(() => {
    const defineGlobal = (name, def) => {
        const globalScope = typeof window != 'undefined'
            ? window
            : global;
        if(globalScope[name] != undefined) return console.error(`Global name "${name}" conflict!`);
        globalScope[name] = def;
    };
    defineGlobal('defineGlobal', defineGlobal);

    const toCamelCase = slug => {
        return slug.replaceAll(' ', '-').split('-').map((word, idx) => {
            if(idx == 0) return word;
            return word[0].toUpperCase() + word.slice(1);
        }).join('');
    };

    const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
    const lru_cache = (f) => {
        const cache = {};
        const wrapper = (...args) => {
            const cacheKey = JSON.stringify(args);
            if(cache[cacheKey] == undefined) {
                cache[cacheKey] = f(...args);
            }
            return cache[cacheKey];
        };
        return wrapper;
    };
    const watch = function (obj, prop, callback) {
        if(! (callback instanceof Function)) {
            throw 'Callback must have specified.';
        }
        if(! (obj instanceof Object)) {
            throw 'Given value is not an instance of Object';
        }
        obj.__observers == undefined && (obj.__observers = {});
        const isFirstTime = obj.__observers[prop] == undefined;
        isFirstTime && (obj.__observers[prop] = []);

        const observers = obj.__observers[prop];

        const descriptor = Object.getOwnPropertyDescriptor(obj, prop) ?? {};
        let value;
        isFirstTime && obj instanceof Object && Object.defineProperty(obj, prop, {
            get() {
                return descriptor.get
                    ? (descriptor.get())
                    : value;
            },
            set(v) {
                value = v;
                descriptor.set && descriptor.set(v);
                observers.forEach(obsv => obsv.notify(value));
                return value;
            }
        });
        const observer = {
            notify(...v) {
                callback(...v);
            },
            destroy() {
                const idx = observers.indexOf(this);
                idx != -1 && observers.splice(idx, 1);
            }
        };
        observers.push(observer);
        return observer;
    };

    const uuidv4 = (() => {
        const registered = {};
        return function () {
            let uuid = null;
            while(uuid == null || registered[uuid]) {
                uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                );
            }
            registered[uuid] = true;
            return uuid;
        }
    })();
    const loop = (nrLoops, callback) => {
        const shouldBreak = false;
        const breaker = () => { shouldBreak = true; };
        for(let i = 0; i < nrLoops && !shouldBreak; ++i) callback(i, breaker);
    };
    class Profiler {
        constructor({maxsize=256}) {
            this.records = [];
            this.maxsize = maxsize;
        }

        profile(f) {
            const wrapper = (...args) => {
                const before = (new Date).getTime();
                const result = f(...args);
                const after = (new Date).getTime();
                this.records.push(after-before);
                if(this.records.length > this.maxsize) {
                    this.records.shift(1);
                }
                return result;
            };
            return wrapper;
        }
    }
    
    function htmlToElement(html) {
        const template = document.createElement('template');
        return template.innerHTML = html.trim() 
            , template.content.firstChild;
    }
    
    function remToPixels(rem) {    
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    const CustomCSSStatic = {
        elementID: `custom-style-${uuidv4()}`,
        ruleTable: {},
    };
    class CustomCSS {
        static __element() {
            const elementID = CustomCSSStatic.elementID;
            if(!document.querySelector(`#${elementID}`)) {
                const element = htmlToElement(`
                    <style id="${elementID}"></style>
                `);
                document.body.appendChild(document.createComment("ShittyBundle CustomCSS begin"));
                document.body.appendChild(element);
                document.body.appendChild(document.createComment("ShittyBundle CustomCSS end"));
            }
            return document.querySelector(`#${elementID}`);
        }

        static __apply() {
            const ruleTable = CustomCSSStatic.ruleTable;
            let result = '';
            for(const [selector, rule] of Object.entries(ruleTable)) {
                let synthRule = '';
                for(const [rulename, rulevalue] of Object.entries(rule)) {
                    synthRule += rulename + ': ' + rulevalue + ';';
                }
                result += selector + ' {' + synthRule + '} ';
            }
            CustomCSS.__element().innerHTML = result;
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
            CustomCSS.__apply();
        }
    }

    const classFactory = (classConfig) => {
        const typeid = uuidv4();
        const shared = {};
        Object.assign(classConfig, {
            __shared: shared,
            __type: typeid,
        });

        class Replicated {
            constructor(...args) {
                for(const [k, v] of Object.entries(this.__proto__)) {
                    v instanceof Function && v.bind(this);
                }
                this.__id = uuidv4();
                this.init instanceof Function && this.init(...args);
            }

            toJSON() {
                return [{}, ...Object.entries(this)].reduce(
                    (acc, [k, v]) => (k.slice(0, 2) != '__' && Object.assign(acc, {[k]: v}), acc)
                );
            }
        };
        for(const k in classConfig) {
            const descriptor = Object.getOwnPropertyDescriptor(classConfig, k);
            if(descriptor.get || descriptor.set) {
                Object.defineProperty(Replicated.prototype, k, {
                    get: descriptor.get,
                    set: descriptor.set
                });
            }
            else {
                Object.assign(Replicated.prototype, {[k]: classConfig[k]});
            }
        }
        return Replicated;
    };

    const EventEmitter = classFactory({
        init() { this.listeners = {}; },
        on(name, callback) {
            (this.listeners[name] || (this.listeners[name] = [])) && this.listeners[name].push(callback); },
        emit(name, ...message) { (this.listeners[name] ?? []).map(v => (v(...message),v)); },
        unbind(name) { this.listeners[name] && (this.listeners[name] = null); },
        unbindAll() { this.listeners = {}; }
    });

    const globalPipes = {};

    const Shitonen = classFactory({ // Shit tier component
        on(...args) { this.__eventEmitter.on(...args); },
        helper: {
            htmlToElement(html) {
                const template = document.createElement('template');
                return template.innerHTML = html.trim() 
                    , template.content.firstChild;
            },
            toArray(obj) {
                const arr = [];
                for(let i = 0; i < obj.length; ++i) { arr.push(obj[i]); }
                return arr;
            },
            uuidv4() {
                return (() => (typeof crypto == 'undefined' || crypto.getRandomValues == undefined)
                    ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return r.toString(16); })
                    : ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
                    )();
            },
            toRegex(str) {
                return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
            },
            generateDirective: lru_cache((match) => {
                return match.replaceAll('{{', '').replaceAll('}}', '').split('|').map(v=>v.trim());
            })
        },
        newShit(name) {
            const shit = this.shit;
            Object.defineProperty(shit, name, {
                get() { return shit.__data[name]; },
                set(val) {
                    shit.__data[name] = val;
                    shit.__eventEmitter.emit(`change__${name}`, val);
                },
                enumerable: true,
                configurable: true
            });
        },
        definePipe(name, processor) { this.__pipes[name] = processor; },
        getPipe(name) { return this.__pipes[name] ?? globalPipes[name]; },
        updateRefs() { this.__eventEmitter.emit('update_refs'); },
        query(query) { return this.element.querySelector(query) },
        queryAll(query) { return this.element.querySelectorAll(query); },
        defineProp(name, config) { Object.defineProperty(this, name, config); },
        init(config={}) {
            this.__eventEmitter = new EventEmitter;
            this.__pipes = {};
            const localPipes = config.pipes ?? {};
            Object.assign(this.__pipes, localPipes);
            const html = config.html ?? '';
            let element = config.element;
            try {
                element || (element = this.helper.htmlToElement(html));
            }
            catch(e) {
                console.error(`Failed to create component '${config.name ?? 'anonymous'}'. Error: ${e}`);
            }
            if(!element) return;
            this.element = element;
            this.config = config;
            thiscum = this;
            this.shit = {
                __eventEmitter: new EventEmitter,
                __data: {},
                on(events, poopName, callback) {
                    events = events.split(' ').filter(v => !!v);
                    for(const event of events) {
                        this.__eventEmitter.on(`${event}__${poopName}`, callback);
                    }
                }
            };

            const configShit = config.shit ?? {};
            const shitConfig = config.shitConfig ?? {};
            const getShitConfig = name => {
                return shitConfig[name] ?? {};
            };
            for(const [k, v] of Object.entries(configShit)) {
                const shit = this.shit;
                shit.__data[k] = v;
                this.newShit(k);
            }

            const parseElement = (element) => {
                const attributes = {};
                const updateRefs = () => {
                    for(const attr of this.helper.toArray(element.attributes ?? [])) {
                        attributes[attr.name] = {
                            get name() { return attr.name; },
                            get value() { return attr.value; },
                            set value(v) { attr.value = v; }
                        };
                    }
                    attributes['#innerHTML'] = {
                        get name() { return '#innerHTML'; },
                        get value() { return element.innerHTML; },
                        set value(v) {
                            element.innerHTML = v;
                        }
                    };
                    attributes['#value'] = {
                        get name() { return '#value'; },
                        get value() { return element.value; },
                        set value(v) { element.value = v; }
                    };
                };
                updateRefs();
                this.__eventEmitter.on('update_refs', () => updateRefs());
                
                const shit = this.shit;
                const shittyRegex = /\{\{[a-zA-Z0-9\|_ ]+\}\}/g;
                const renderChange = (config) => {
                    const replacements = {};
                    element && config.initialValue.match(shittyRegex).map(m => {
                        const directive = m.replaceAll('{{', '').replaceAll('}}', '').split('|').map(v=>v.trim());
                        let result = shit[directive[0]];
                        for(const pipeName of directive.slice(1)) {
                            const pipe = this.getPipe(pipeName);
                            pipe && (result = pipe(result));
                            !pipe && console.error(`Shitonen pipe '${pipeName}' not found!`);
                        }
                        replacements[m] = result;
                    });
                    let final = config.initialValue;
                    for(const [match, value] of Object.entries(replacements)) {
                        final = final.replaceAll(match, value);
                    }
                    if(!config.onApply) {
                        attributes[config.attrName].value = final;
                    }
                    else {
                        config.onApply(final);
                    }
                };
                Object.entries(attributes).map(([attrName, attr]) => `${attr.value}`.includes('{{') && `${attr.value}`.includes('}}') ? attr : null)
                    .filter(v => v != null)
                    .map(attr => (attr.value.match(shittyRegex) ?? []).map(m => (
                        (m = m.replaceAll('{{', '').replaceAll('}}', '').split('|').map(v=>v.trim())),
                        (() => {
                            const initialValue = attr.value;
                            if(attr.name == '#innerHTML') {
                                const children = this.helper.toArray(element.childNodes).filter(e => {
                                    return e.nodeName == '#text'
                                });
                                for(const node of children) {
                                    const match = node.textContent.match(shittyRegex);
                                    if(!match) continue;
                                    const initialValue = node.textContent;
                                    shit.on('init change', m[0], () => {
                                        renderChange({
                                            'initialValue': initialValue,
                                            onApply(v) {
                                                if(children.length == 1 && getShitConfig(m[0]).escape == false) {
                                                    // single element
                                                    if(shit[m[0]] instanceof HTMLElement) {
                                                        element.innerHTML = '';
                                                        element.append(shit[m[0]]);
                                                    }
                                                    // single component
                                                    else if(shit[m[0]].element) {
                                                        element.innerHTML = '';
                                                        element.append(shit[m[0]].element);
                                                    }
                                                    // multiple elements/components/html
                                                    else if(shit[m[0]] instanceof Array) {
                                                        element.innerHTML = '';
                                                        for(const el of shit[m[0]]) {
                                                            (el.element)
                                                                ? element.appendChild(el.element)
                                                                : (
                                                                    el instanceof HTMLElement
                                                                    ? element.appendChild(el)
                                                                    : element.innerHTML += el
                                                                );
                                                        }
                                                    }
                                                    // inner html
                                                    else {
                                                        element.innerHTML = v;
                                                    }
                                                }
                                                // text content
                                                else {
                                                    node.textContent = v;
                                                }
                                            }
                                        });
                                    });
                                }
                            }
                            else {
                                // normal attribute
                                shit.on('init change', m[0], () => {
                                    renderChange({
                                        'attrName': attr.name,
                                        'initialValue': initialValue
                                    });
                                });
                            }
                        })(), 'pee'))
                    );
            };
            const dfs = (element) => {
                parseElement(element);
                this.helper.toArray(element.childNodes ?? []).map(e => dfs(e));
            };
            config.setup && config.setup.call(this);
            dfs(element);
            for(const [k, v] of Object.entries(configShit)) {
                this.shit.__eventEmitter.emit(`init__${k}`);
            }
            config.init && config.init.call(this);
        },
    });
    Shitonen.definePipe = (name, processor) => { globalPipes[name] = processor; };
    Shitonen.getPipe = (name) => { return globalPipes[name]; };

    defineGlobal('Shitonen',        Shitonen);
    defineGlobal('pipe',            pipe);
    defineGlobal('lru_cache',       lru_cache);
    defineGlobal('watch',           watch);
    defineGlobal('classFactory',    classFactory);
    defineGlobal('EventEmitter',    EventEmitter);
    defineGlobal('uuidv4',          uuidv4);
    defineGlobal('loop',            loop);
    defineGlobal('Profiler',        Profiler);
    defineGlobal('toCamelCase',     toCamelCase);
    defineGlobal('CustomCSS',       CustomCSS);
    defineGlobal('htmlToElement',   htmlToElement);
    defineGlobal('remToPixels',     remToPixels);
})();

// DEFAULT SETUP
(() => {
    Shitonen.definePipe('uppercase', v => (''+v).toUpperCase());
    Shitonen.definePipe('lowercase', v => (''+v).toLowerCase());
    Shitonen.definePipe('titlecase', v => v.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
    Shitonen.definePipe('trim', v => (''+v).trim());
    Shitonen.definePipe('print', v => (console.log(v), v));
})();
