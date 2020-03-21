export class FakeModal {
  constructor({blocker = false} = {}) {
    this.$blocker = blocker ? new JqElement() : undefined;
  }
}

class JqElement {
  constructor() {
    this._classes = new Set();
  }

  toggleClass(cls, toggle) {
    if (toggle) {
      this._classes.add(cls);
    } else {
      this._classes.delete(cls);
    }

    return this;
  }

  hasClass(cls) {
    return this._classes.has(cls);
  }
}