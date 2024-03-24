import { l as loginstat } from "../../chunks/stores.js";
const ssr = false;
let login = 0;
loginstat.subscribe((value) => {
  login = value;
});
async function load(event) {
  return {
    login,
    user: event.locals.user
  };
}
export {
  load,
  ssr
};
