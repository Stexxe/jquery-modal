import {JqElement} from '../src/fake';
import JqModal from '../src/jqModal';

const expect = require("chai").expect;

describe("Show modal", () => {
  // it("Shows with default options", () => {
  //   const $el = new JqElement();
  //   const $blocker = new JqElement();
  //   const modal = new JqModal($el, $blocker);
  //
  //   expect($el.css("display")).to.be.undefined;
  //   expect($el.hasClass("modal")).to.be.false;
  //   expect($blocker.has($el)).to.be.false;
  //   modal.show();
  //   expect($el.css("display")).to.eq("inline-block");
  //   expect($el.hasClass("modal")).to.be.true;
  //   expect($blocker.has($el)).to.be.true;
  // });
  //
  // it("Shows with close button", () => {
  //   const $el = new JqElement();
  //   const $blocker = new JqElement();
  //   const modal = new JqModal($el, $blocker, {showClose: true});
  //
  //   modal.show();
  //   const closeButton = modal.closeButton;
  //   expect(closeButton.attr("href")).to.eq("#close-modal");
  // });
});