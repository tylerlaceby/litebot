import { getMousePos, setMousePos } from "../../mod.ts";

console.log("The current mouse position is :", getMousePos());
console.log("Setting the mouse position to: 0, 0");

if (!setMousePos(0, 0)) console.log("Something went wrong.");
else console.log("TGhe new pos is: ", getMousePos());
