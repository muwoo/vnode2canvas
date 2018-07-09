/**
 * @author monkeywang
 * Date: 2018/5/2
 */
const css = require('css')
module.exports = function (source, other) {
  let cssAST = css.parse(source)
  let parseCss = new ParseCss(cssAST)
  parseCss.parse()
  this.cacheable();
  this.callback(null, parseCss.declareStyle(), other);
};

class ParseCss {
  constructor(cssAST) {
    this.rules = cssAST.stylesheet.rules
    this.targetStyle = {}
  }

  parse () {
    this.rules.forEach((rule) => {
      let selector = rule.selectors[0]
      this.targetStyle[selector] = {}
      rule.declarations.forEach((dec) => {
        this.targetStyle[selector][dec.property] = this.formatValue(dec.value)
      })
    })
  }

  formatValue (string) {
    string = string.replace(/"/g, '').replace(/'/g, '')
    return string.indexOf('px') !== -1 ? parseInt(string) : string
  }

  declareStyle (property) {
    return `window.${property || 'vStyle'} = ${JSON.stringify(this.targetStyle)}`
  }
}


