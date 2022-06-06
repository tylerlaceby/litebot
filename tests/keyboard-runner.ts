import {
	assertEquals,
	assertStrictEquals,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import { getMousePos, setMousePos } from "./test.ts";

Deno.test({
	name: "keyboard-test ",
	fn: () => {
		assertEquals(true, true);
	},
});
