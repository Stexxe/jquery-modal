export const jqEffect = (states) => {
  for (const {el, classPresent, classAbsent} of states) {
    el.addClass(classPresent);
    el.removeClass(classAbsent);
  }
};