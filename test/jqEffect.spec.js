import {JqElement} from '../src/fake';
import {jqEffect} from '../src/jq';

const expect = require("chai").expect;

describe("Jquery effect", () => {
  it("Effect on classes", () => {
    const $el = new JqElement();
    $el.addClass("absent");
    jqEffect([{el: $el, classPresent: "present", classAbsent: "absent"}]);

    expect($el.hasClass("present")).to.be.true;
    expect($el.hasClass("absent")).to.be.false;
  });

  it("Multiple effects", () => {
    const $el = new JqElement();
    jqEffect([{el: $el, classPresent: "present1"}, {el: $el, classPresent: "present2"}]);
    expect($el.hasClass("present1")).to.be.true;
    expect($el.hasClass("present2")).to.be.true;
  })
});