import { getMousePos } from "https://deno.land/x/litebot/mod.ts";
console.log("Demo of mouse position in realtime:\n");

setInterval(() => {
	const position = getMousePos();
	console.log(position);
});
