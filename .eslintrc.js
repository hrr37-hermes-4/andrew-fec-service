
module.exports = {
  extends: ["airbnb"],

  rules: {
    "react/prefer-stateless-function" : 0,
    "import/extensions": "ignorePackages",
    "react/prop-types": 0,
    "import/no-cycle": 0,
  },

  env: {
    jest: true
  }
}
