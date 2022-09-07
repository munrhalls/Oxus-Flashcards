export const Utils = {
  Toggle: function ({ children, toggle }) {
    return toggle ? children[0] : children[1];
  },
};
