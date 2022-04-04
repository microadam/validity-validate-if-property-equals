var createValidator = require("../"),
  validity = require("@clocklimited/validity"),
  assert = require("assert");

describe("validity-validate-if-property-equals", function () {
  it("should throw if no property to check passed", function () {
    assert.throws(function () {
      createValidator();
    }, /No property to check provided/);
  });

  it("should throw if no validity function passed", function () {
    assert.throws(function () {
      createValidator("property", "value");
    }, /No validator function provided/);

    assert.throws(function () {
      createValidator("property", "value", "not a function");
    }, /No validator function provided/);
  });

  it("should validate if property equals correct value", function (done) {
    var obj = { property: "value", secondProperty: "" };
    createValidator("property", "value", validity.required)(
      "secondProperty",
      "Second Property",
      obj,
      function (err, message) {
        assert.equal("Second Property is required", message);
        done();
      }
    );
  });

  it("should not validate if property not equal correct value", function (done) {
    var obj = { property: "", secondProperty: "" };
    createValidator("property", "value", validity.required)(
      "secondProperty",
      "Second Property",
      obj,
      function (err, message) {
        assert.equal(undefined, message);
        done();
      }
    );
  });

  it("should be able to pass validation", function (done) {
    var obj = { property: "value", secondProperty: "is set" };
    createValidator("property", "value", validity.required)(
      "secondProperty",
      "Second Property",
      obj,
      function (err, message) {
        assert.equal(undefined, message);
        done();
      }
    );
  });
});
