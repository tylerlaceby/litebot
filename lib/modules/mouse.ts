import { Cordinate } from "../mod.ts";
import litebot from "./library.ts";

// ------------------------
// -- GETTERS & SETTERS  --
// ------------------------

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

// ------------------------
// RELATIVE MOVEMENT ------
// ------------------------

/**
 * Moves the mouse relative to the current position. values are relative to the current
 * mouse position.
 * @example
 * setMousePos (500, 500); // => {x: 500, y: 500}
 * moveMouse (100, -150); // -> {x: 600, y: 650}; // right 100 & down 150
 * moveMouse (0, 400); // -> {x: 600, y: 250}; // up 400
 *
 * @param { Number } x the x value to be offset by.
 * @param { Number } y The y value to be offset by. A negative value will move the mouse down the screen
 * this is atypical from normal screen operations but familar in the cartesian system.
 */

export const moveMouse = (x: number, y: number): void => {
	litebot.moveMouse(Math.floor(x), Math.floor(y));
};

/** Move the mouse up by a relative amount. */
export const mouseUp = (y: number): void => litebot.mouseUp(Math.floor(y));
/** Move the mouse down by a relative amount. */
export const mouseDown = (y: number): void => litebot.mouseDown(Math.floor(y));
/** Move the mouse left by a relative amount. */
export const mouseLeft = (x: number): void => litebot.mouseLeft(Math.floor(x));
/** Move the mouse right by a relative amount. */
export const mouseRight = (x: number): void =>
	litebot.mouseRight(Math.floor(x));

// ------------------------
// ---- MOUSE CLICKS ------
// ------------------------

/**
 * Default value is leftClick = true, and the x and y positions are determined by the current
 * mouse position. If these are overidden then the mouse click will be at thye new x and y location.
 */
export type LitebotClickOptions = {
	leftClick?: boolean;
	x?: number;
	y?: number;
};

export const mouseClick = (
	options: LitebotClickOptions = { leftClick: true, ...getMousePos() }
): void => {
	// handle default params
	options ??= { leftClick: true };
	options.leftClick ??= true;

	// only if one is undefined then get the cordinates.
	if (options.y == undefined || options.x == undefined) {
		const { x, y } = getMousePos();
		options.x ??= x;
		options.y ??= y;
	}

	// Move mouse before performing click.
	setMousePos(options.x, options.y);

	console.log(getMousePos(), options);
	const mode = options.leftClick ? 1 : -1;
	console.log(mode);
	litebot.mouseClick(mode);
};
