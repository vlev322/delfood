import navList from "../nav-data-list";

const list = [];

const context = {
  current: navList[0],

  subscribe: fn => {
    list.push(fn);
  },

  goTo: index => {
    context.current = index;
    list.forEach(fn => {
      fn(index);
    });
  },

  onClick: item => e => {
    e.stopPropagation();
    context.goTo(item);
  },

  getNav(item) {
    if (!item) return navList.nav;
    return navList.subNav[item] || [];
  }
};

export const Context = {
  getNavContext: () => context
};
