//CHEATSHEETS
import { cheatsheets } from "./cheatsheetsdata.js";
import { renderCheatsheets } from "./cheatsheetsutils.js";

document.addEventListener("DOMContentLoaded", () => {
    renderCheatsheets(cheatsheets);
});
