import { initHomePage } from "../pages/home/home.controller.js"

export function initApp () {
  initHomePage().catch((err) => {
    console.error(err);
  });
}