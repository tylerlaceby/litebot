import {
	assertEquals,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import { getMousePos, moveMouse, setMousePos, mouseDown, mouseLeft, mouseRight, mouseUp } from "../lib/mod.ts";

Deno.test({
	name: "setMousePos  - [0, 0]",
	fn: () => {
		setMousePos(0, 0);
		const mousePos = getMousePos();

		assertEquals(mousePos, {x: 0, y: 0});
	},
});


Deno.test({
	name: "moveMouse [500, 500] -> [100, 100]",
	fn: () => {
		setMousePos(500, 500);
		moveMouse(100, 100);

		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 600, y: 400});
	},
});


Deno.test({
	name: "moveMouse [500, 500] -> [-100, -100]",
	fn: () => {
		setMousePos(500, 500);
		moveMouse(-100, -100);

		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 400, y: 600});
	},
});

// test relative movements
Deno.test({
	name: "mouseUp -- #1",
	fn: () => {
		setMousePos(400, 500);
		mouseUp(100);
		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 400, y: 400});
	},
});

// test relative movements
Deno.test({
	name: "mouseUp -- #2",
	fn: () => {
		setMousePos(400, 500);
		mouseUp(-100);

		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 400, y: 600});
	},
});

Deno.test({
	name: "mouseDown -- #1",
	fn: () => {
		setMousePos(500, 500);
		mouseDown(0);

		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 500, y: 500});
	},
});

Deno.test({
	name: "mouseDown -- #2",
	fn: () => {
		setMousePos(400, 0);
		mouseDown(100);
		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 400, y: 100});
	},
});

Deno.test({
	name: "mouseLeft -- #1",
	fn: () => {
		setMousePos(1000, 0);
		mouseLeft(500);

		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 500, y: 0});
	},
});

Deno.test({
	name: "mouseLeft -- #2",
	fn: () => {
		setMousePos(1000, 0);
		mouseLeft(-50);
		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 1050, y: 0});
	},
});

Deno.test({
	name: "mouseRight -- #1",
	fn: () => {
		setMousePos(100, 100);
		mouseRight(50);

		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 150, y: 100});
	},
});

Deno.test({
	name: "mouseRight -- #2",
	fn: () => {
		setMousePos(100, 100);
		mouseRight(-50);
		const mousePos = getMousePos();
		assertEquals(mousePos, {x: 50, y: 100});
	},
});