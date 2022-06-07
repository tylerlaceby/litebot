export * from "./modules/mouse.ts";

/**
 * Python like sleep function. blocks the thread's execution
 * @param ms to sleep for.
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Object with x , y cordinates for 2d object's
 */
export interface Cordinate {
  x: number;
  y: number;
}
