const expect = require("chai").expect;
import Modals from "../src/modals";
import {FakeModal} from '../src/fake';

describe("Jquery Modal", () => {
  let modals, m1, m2;

  beforeEach(() => {
    modals = new Modals();
    m1 = new FakeModal({blocker: true});
    m2 = new FakeModal({blocker: true});
  });

  it("Returns current modal", () => {
    expect(modals.current).to.be.null;

    modals.add(m1);
    expect(modals.current).to.eq(m1);

    modals.add(m2);
    expect(modals.current).to.eq(m2);
  });

  it("Selects modal without blocker", () => {
    const m = new FakeModal();
    modals.add(m);
    modals.select();
    expect(modals.$blocker).to.be.undefined;
  });

  it("Selects modal with blocker", () => {
    modals.add(m1);
    modals.select();
    expect(m1.$blocker.hasClass("current")).to.be.true;
    expect(m1.$blocker.hasClass("behind")).to.be.false;
  });

  it("Selects 2 modals with blocker", () => {
    modals.add(m1);
    modals.add(m2);
    modals.select();
    expect(m2.$blocker.hasClass("current")).to.be.false;
    expect(m2.$blocker.hasClass("behind")).to.be.true;
  });

  it("Pops modals", () => {
    modals.add(m1);
    expect(modals.pop()).to.eq(m1);
    expect(modals.pop()).to.be.undefined;
    expect(modals.count).to.eq(0);
  })
});