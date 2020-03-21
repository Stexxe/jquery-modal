export const current = (modals) => modals.length > 0 ? modals[modals.length - 1] : null;
export const select = (modals) => {
  const withBlocker = modals.filter((m) => m.$blocker);

  return withBlocker.slice(0, 1)
    .map((m) => ({el: m.$blocker, classPresent: "current", classAbsent: "behind"}))
    .concat(withBlocker.slice(1).map((m) => ({el: m.$blocker, classPresent: "behind", classAbsent: "current"})));
};

export const init = (modals) => modals.slice(0, modals.length - 1);
export const count = (modals) => modals.length;
export const add = (modals, m) => modals.concat(m);