import { assertEquals } from "https://deno.land/std@0.142.0/testing/asserts.ts";
import {
	getMousePos,
	mouseClick,
	mouseDown,
	mouseLeft,
	mouseRight,
	mouseUp,
	moveMouse,
	setMousePos,
	sleep,
} from "../lib/mod.ts";

// ********************
// Getters & Setters **
// ********************

Deno.test({
	name: "setMousePos  - [0, 0]",
	fn: () => {
		setMousePos(0, 0);
		const mousePos = getMousePos();

		assertEquals(mousePos, { x: 0, y: 0 });
	},
});

Deno.test({
	name: "moveMouse [500, 500] -> [100, 100]",
	fn: () => {
		setMousePos(500, 500);
		moveMouse(100, 100);

		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 600, y: 400 });
	},
});

Deno.test({
	name: "moveMouse [500, 500] -> [-100, -100]",
	fn: () => {
		setMousePos(500, 500);
		moveMouse(-100, -100);

		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 400, y: 600 });
	},
});

// test relative movements
Deno.test({
	name: "mouseUp -- #1",
	fn: () => {
		setMousePos(400, 500);
		mouseUp(100);
		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 400, y: 400 });
	},
});

// ***************************
// Relative Mouse Movements **
// ***************************

Deno.test({
	name: "mouseUp -- #2",
	fn: () => {
		setMousePos(400, 500);
		mouseUp(-100);

		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 400, y: 600 });
	},
});

Deno.test({
	name: "mouseDown -- #1",
	fn: () => {
		setMousePos(500, 500);
		mouseDown(0);

		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 500, y: 500 });
	},
});

Deno.test({
	name: "mouseDown -- #2",
	fn: () => {
		setMousePos(400, 0);
		mouseDown(100);
		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 400, y: 100 });
	},
});

Deno.test({
	name: "mouseLeft -- #1",
	fn: () => {
		setMousePos(1000, 0);
		mouseLeft(500);

		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 500, y: 0 });
	},
});

Deno.test({
	name: "mouseLeft -- #2",
	fn: () => {
		setMousePos(1000, 0);
		mouseLeft(-50);
		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 1050, y: 0 });
	},
});

Deno.test({
	name: "mouseRight -- #1",
	fn: () => {
		setMousePos(100, 100);
		mouseRight(50);

		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 150, y: 100 });
	},
});

Deno.test({
	name: "mouseRight -- #2",
	fn: () => {
		setMousePos(100, 100);
		mouseRight(-50);
		const mousePos = getMousePos();
		assertEquals(mousePos, { x: 50, y: 100 });
	},
});

// -----------------------------
// -- MOUSE CLICKS & ACTIONS  --
// -----------------------------

Deno.test({
	name: "mouseClickLeft 1",
	fn: async () => {
		await sleep(1000);
		await mouseClick({ x: 600, y: 600, leftClick: true });
		assertEquals(getMousePos(), { x: 600, y: 600 });
	},
});

Deno.test({
	name: "mouseClickLeft 2",
	fn: async () => {
		await sleep(100);
		setMousePos(10, 10);
		await mouseClick();
		assertEquals(getMousePos(), { x: 10, y: 10 });
	},
});

Deno.test({
	name: "mouseClickRight",
	fn: async () => {
		await sleep(100);
		setMousePos(400, 400);
		await mouseClick({ leftClick: false });
		assertEquals(getMousePos(), { x: 400, y: 400 });
	},
});

Deno.test({
	name: "mouseClick with delay",
	fn: async () => {
		setMousePos(740, 1060);
		await sleep(2000);
		await mouseClick({ delay: 1000 });
		await sleep(2000);
		await mouseClick();
		assertEquals(getMousePos(), { x: 740, y: 1060 });
	},
});
