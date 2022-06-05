import { getMousePos } from "../../mod.ts";
console.log("Demo of mouse position in realtime:\n");

setInterval(() => {
	const position = getMousePos();
	console.log(position);
});
