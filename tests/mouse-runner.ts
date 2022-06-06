import {
	assertEquals,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import { symbols } from "./test.ts";

Deno.test({
	name: "setMousePos  - [0, 0]",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(0, 0);
		symbols.getMousePos(mousePos);

		assertEquals([mousePos[0], mousePos[1]], [0, 0]);
	},
});


Deno.test({
	name: "moveMouse [500, 500] -> [100, 100]",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(500, 500);
		symbols.moveMouse(100, 100);

		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [600, 400]);
	},
});


Deno.test({
	name: "moveMouse [500, 500] -> [-100, -100]",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(500, 500);
		symbols.moveMouse(-100, -100);

		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [400, 600]);
	},
});