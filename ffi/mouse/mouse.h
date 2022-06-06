#ifndef LITEBOT_mouse_LIB
#define LITEBOT_mouse_LIB

// Getters / Setters
/**
 * @brief Get the mouse position and then return the cordinates through a Int32Array(2) from Deno.
 * @param outCords the pointer to a Int Tuple.
 */
void getMousePos(int *outCords);

/**
 * @brief Set the mouse position from a absoute x and y position. If the values are too high or low the 
 * mouse is moved as close as possible to that bound without leaving the screens dimensions.
 * @param x a integer for x
 * @param y a integer for y
 */
void setMousePos(int x, int y);

#endif