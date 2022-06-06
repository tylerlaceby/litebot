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

// test relative movements
Deno.test({
	name: "mouseUp -- #1",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(400, 500);
		symbols.mouseUp(100);
		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [400, 400]);
	},
});

// test relative movements
Deno.test({
	name: "mouseUp -- #2",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(400, 500);
		symbols.mouseUp(-100);
		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [400, 600]);
	},
});

Deno.test({
	name: "mouseDown -- #1",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(400, 500);
		symbols.mouseDown(-100);
		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [400, 400]);
	},
});

Deno.test({
	name: "mouseDown -- #2",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(400, 500);
		symbols.mouseDown(100);
		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [400, 600]);
	},
});

Deno.test({
	name: "mouseLeft -- #1",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(1000, 0);
		symbols.mouseLeft(500);
		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [500, 0]);
	},
});

Deno.test({
	name: "mouseLeft -- #2",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(1000, 0);
		symbols.mouseLeft(-50);
		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [1050, 0]);
	},
});

Deno.test({
	name: "mouseRight -- #1",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(100, 100);
		symbols.mouseRight(50);
		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [150, 100]);
	},
});

Deno.test({
	name: "mouseRight -- #2",
	fn: () => {
		const mousePos = new Int32Array(2);
		symbols.setMousePos(100, 100);
		symbols.mouseRight(-50);
		symbols.getMousePos(mousePos);
		assertEquals([mousePos[0], mousePos[1]], [50, 100]);
	},
});