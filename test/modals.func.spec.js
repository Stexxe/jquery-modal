import {add, count, current, init, select} from '../src/modals';

const expect = require("chai").expect;

describe("Modals container functional", () => {
  it("Returns current modal", () => {
    expect(current([])).to.be.null;
    expect(current([{id: 1}])).to.eql({id: 1});
    expect(current([{id: 1}, {id: 2}])).to.eql({id: 2});
  });

  it("Selects modal without blocker", () => {
    expect(select([{}])).to.eql([]);
  });

  it("Selects modals with blocker", () => {
    const b1 = {};
    const b2 = {};

    expect(select([{$blocker: b1}])).to.eql([{el: b1, classPresent: "current", classAbsent: "behind"}]);
    expect(select([{$blocker: b1}, {$blocker: b2}])).to.eql(
      [
        {el: b1, classPresent: "current", classAbsent: "behind"},
        {el: b2, classPresent: "behind", classAbsent: "current"},
      ]
    );
  });

  it("Pops modals", () => {
    expect(init([])).to.eql([]);
    expect(init([{id: 1}])).to.eql([]);
    expect(init([{id: 1}, {id: 2}])).to.eql([{id: 1}]);
  });

  it("Gets count of modals", () => {
    expect(count([{id: 1}])).to.eq(1);
  });

  it("Adds modal", () => {
    expect(add([], {id: 1})).to.eql([{id: 1}]);
  })
});