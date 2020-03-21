export default class Modals {
  constructor() {
    this._list = [];
  }

  get current() {
    return this.count > 0 ? this._list[this.count - 1] : null;
  }

  add(m) {
    this._list.push(m);
  }

  select() {
    const withBlocker = this._list.filter((m) => m.$blocker);

    withBlocker.slice(0, 1).forEach((m) => {
      m.$blocker
        .toggleClass("current", true)
        .toggleClass("behind", false);
    });

    withBlocker.slice(1).forEach((m) => {
      m.$blocker
        .toggleClass("current", false)
        .toggleClass("behind", true);
    });
  }

  pop() {
    return this._list.pop();
  }

  get count() {
    return this._list.length;
  }
}