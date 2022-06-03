import { mouse } from "../mod.ts";
console.log("Demo of mouse position in realtime:\n");

setInterval(() => {
	const position = mouse.cursor_pos();
	console.log(position);
});
