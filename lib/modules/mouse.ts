import { Cordinate } from "../mod.ts";
import litebot from "./library.ts";

export const cursor_pos = (): Cordinate => {
	// Pass a pointer from deno to C land. This pointer will then be written into
	// from C if everything is successful in the system call.

	// the values will remain [ 0 , 0 ] if there is an error.
	const pointer = new Uint32Array(2);
	litebot._CursorCordinates(pointer);

	// create cordinate from tuple.
	const cords: Cordinate = { x: pointer[0], y: pointer[1] };
	return cords;
};
