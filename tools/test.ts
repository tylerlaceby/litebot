import { getMousePos, setMousePos } from "../lib/mod.ts";

// --test-litebot

setTimeout(() => {
	setMousePos(100, 0);

	console.log(getMousePos());
	console.log("attempting break");
	setMousePos(-20000, -100);
	console.log(getMousePos());
	setMousePos(100, 0);

	console.log(getMousePos());
}, 100);
