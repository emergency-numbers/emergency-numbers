
/**
 * Module dependencies.
 */

var countries = require('countries')
  , find = require('find');

/**
 * Expose country.
 */

var country = module.exports = function country(str) {
  return find(countries, { name: str });
}

// Norway

var norway = country('Norway');
norway.numbers = {
  "police": 112,
  "medical": 113,
  "fire": 110,
  "police (non-urgent)": 02800,
  "child-abuse and family violence": 116111
};

// Sweden

var sweden = country('Sweden');
sweden.numbers = {
  "emergency": 112,
  "police (non-urgent)": 11414,
  "medical (non-urgent)": 1177
};

