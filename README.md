# validity-validate-if-property-equals

Validate the current property if another property is equal to a particular value.

E.g you have a URL property of a schema, which is not a required field.
You only want to apply validation to that field if another field has a value equal to a certain value

## Installation

```
npm install validity-validate-if-property-equals --save
```

## Usage

Below is a simple example for usage with schemata and save:

```js
var validity = require("@clocklimited/validity"),
  schemata = require("schemata"),
  save = require("save"),
  collection = save("author"),
  validateIfPropertyEquals = require("@clocklimited/validity-validate-if-property-equals");

var schema = schemata({
  type: { type: String },
  url: {
    type: String,
    validators: {
      all: [validateIfPropertyEquals("type", "link", validity.url)],
    },
  },
});
```

## Credits

[Adam Duncan](https://github.com/microadam/)
