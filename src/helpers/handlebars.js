const handlebars = require('handlebars');

function eqHelper(a, b, options) {
  if ((a === b) || (a === "" && (b === null || b === undefined))) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

function neqHelper(a, b, options) {
  if (!eqHelper(a, b, options)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

handlebars.registerHelper('eq', eqHelper);
handlebars.registerHelper('neq', neqHelper);

module.exports = handlebars;