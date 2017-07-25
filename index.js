/**
 * @file   mofron-comp-text/index.js
 * @author simpart
 */
require('mofron-comp-iconawesome');

/**
 * @class mofron.comp.Feature
 * @brief feature component for mofron
 */
mofron.comp.Feature = class extends mofron.Component {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('Feature');
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            
            /* icon */
            this.addChild(
                new mofron.Component({
                    child : [ /* icon */
                              new mofron.Component(),
                              /* summary */
                              new mofron.Component({
                                  style : { 'margin-left' : '30px' }
                              }) ],
                    style : { 'display'     : 'flex',
                              'align-items' : 'center' }
                })
            );
            
            this.addChild(
                /* detail */
                new mofron.Component()
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    icon (ico, pth) {
        try {
            if (undefined === ico) {
                /* getter */
                return this.m_icon;
            }
            /* setter */
            if ('string' === typeof ico) {
                let clr = this.theme().color();
                this.m_icon = new mofron.comp.IconAwesome({
                                  param : ico,
                                  path  : pth,
                                  color : (null === clr) ?
                                              new mofron.Color(180,180,180) : clr
                              });
                this.child()[0].child()[0].addChild(
                    this.m_icon
                );
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    summary (val) {
        try {
            if (undefined === val) {
                /* getter */
                let smy = this.child()[0].child()[1].child();
                return ('array' === typeof smy) ? smy[0] : null;
            }
            /* setter */
            if ('string' === typeof val) {
                let size = this.size()[0] - 50;
                this.child()[0].child()[1].addChild(
                    new mofron.comp.Text({
                        text : val,
                        size : (10 > size) ? 10 : size
                    })
                );
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    detail (val) {
        try {
            if (undefined === val) {
                /* getter */
                let dtl = this.child()[1].child();
                return ('array' === typeof dtl) ? dtl[0] : null;
            }
            /* setter */
            if ('string' === typeof val) {
                let size = this.size()[0] - 70;
                this.child()[1].addChild(
                    new mofron.comp.Text({
                        text : val,
                        size : (10 > size) ? 10 : size
                    })
                );
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    size (val) {
        try {
            let ico = this.icon();
            if (undefined === val) {
                /* getter */
                if (undefined === ico) {
                    this.m_size = 100;
                    return this.m_size;
                }
                return ico.size();
            }
            /* setter */
            if ('number' !== typeof val) {
                throw new Error('invalid parameter');
            }
            if (undefined === ico) {
                this.m_size = val;
            } else {
                ico.size(val);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Feature;
