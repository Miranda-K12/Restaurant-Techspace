import { initAccordion } from "./accordion.js";
import { initMode } from "./mode.js";
import { initSearch } from "./search.js";
import { initNav } from "./nav.js";
import { getMenuData } from "./app.js";
import { priceInfo } from "./data.js";
import { renderMenu, renderCart, updateCartCount } from './ui.js';
import { initCartUI } from './cartUI.js';




async function init() {
  const data = await getMenuData();
  initNav()
  initAccordion();
  renderMenu(data, priceInfo);
  renderCart();
  updateCartCount();
  initCartUI();
  initMode();
  initSearch();
  
}
init();