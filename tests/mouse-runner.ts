import {
	assertEquals,
	assertStrictEquals,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import { getMousePos, setMousePos } from "./test.ts";

Deno.test({
	name: "setMousePos  - [0, 0]",
	fn: () => {
		const mousePos = new Int32Array(2);
		setMousePos(0, 0);
		getMousePos(mousePos);

		assertEquals([mousePos[0], mousePos[1]], [0, 0]);
	},
});
