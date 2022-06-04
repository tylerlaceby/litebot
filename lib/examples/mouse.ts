import { cursor_pos } from "../mod.ts";
console.log("Demo of mouse position in realtime:\n");

setInterval(() => {
	const position = cursor_pos();
	console.log(position);
});
