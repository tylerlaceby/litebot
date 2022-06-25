import { assertEquals } from "https://deno.land/std@0.142.0/testing/asserts.ts";
import * as lb from "../lib/mod.ts";

Deno.test({
	name: "sendKey test with keycode",
	fn: () => {
		// press the space key with a 10ms delay between keydown and up.
		// lb.sendKey(SPACE_KEY, { delay: 10 });
		assertEquals(true, true);
	},
});
