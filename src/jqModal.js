export default class JqModal {

  constructor($, $el, $blocker, options) {
    this._$ = $;
    this._$el = $el;
    this._$blocker = $blocker;
    this._options = options;
  }

  show() {
    this._$el.addClass("modal");
    this._$el.css("display", "inline-block");
    this._$el.appendTo(this._$blocker);

    if (this._options.showClose) {
      this._$closeButton = this._$("<c href='123'></c>");
    }
  }

  get closeButton() {
    return this._$closeButton;
  }
}