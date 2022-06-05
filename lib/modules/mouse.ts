import { Cordinate } from "../mod.ts";
import litebot from "./library.ts";

/**
 * Gets the current mouse position in screen space. This will return a object containing both
 * the x and y value of -1 if the operation failed.
 *
 * NOTE* This could change in the future.
 * @example // Successful call
 * getMousePos (); - { x: number, y: number }
 * // failed call
 * getMousePos (); - { x: -1, y: -1 }
 * @returns {Cordinate} returns the cordinates of the mouse or values of -1 if the result failed.
 */
export const getMousePos = (): Cordinate => {
	// Pass a pointer from deno to C land. This pointer will then be written into
	// from C if everything is successful in the system call.

	// the values will remain [ 0 , 0 ] if there is an error.
	const pointer = new Int32Array(2);
	litebot.getMousePos(pointer);
	// create cordinate from tuple.
	const cords: Cordinate = { x: pointer[0], y: pointer[1] };
	return cords;
};

/**
 *Set the mouse location with screen-space x, y cordinates. The function can fail if the caller passes in bounds that do not exists.
 However this will simply move the mouse to the edge of the screen.
 * @example
 * setMousePos (0, 0) - true   // successful call
 * setMousePos (10000, 0)   // unsuccessful call
 * // will simply move to the furthest possible area of the screen before leaving thew screen's bounds.
 * @param {number} x numeric value
 * @param {number} y numeric value
 */
export const setMousePos = (x: number, y: number): void => {
	litebot.setMousePos(Math.floor(x), Math.floor(Math.abs(y)));
};
