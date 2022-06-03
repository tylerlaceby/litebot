import { cursor_pos } from "./modules/mouse.ts";

/**
 * API for interacting with the users mouse.
 */
export const mouse = { cursor_pos };

/**
 * Litebot API for interacting and controlling physical IO on windows and osx machines.
 */
const litebot = {
	mouse,
};

export default litebot;

/**
 * Positional Information for objects in 2D.
 */
export interface Cordinate {
	x: number;
	y: number;
}
