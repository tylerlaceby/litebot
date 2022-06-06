#ifndef LITEBOT_mouse_LIB
#define LITEBOT_mouse_LIB

// ********************
// Getters & Setters **
// ********************

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

// ***************************
// Relative Mouse Movements **
// ***************************

/**
 * @brief Moves the mouse relative to the current position. values are relative to the current
 * mouse position.
 * @param x the x value to be offset by.
 * @param y The y value to be offset by. A negative value will move the mouse down the screen
 * this is atypical from normal screen operations but familar in the cartesian system.
 */
void moveMouse(int x, int y);

/**
 * @brief move the mouse relative to its current position. Moves up the screen by the y value passed.
 */
void mouseUp(int y);

/**
 * @brief move the mouse relative to its current position. Moves down the screen by the y value passed.
 */
void mouseDown(int y);

/**
 * @brief move the mouse relative to its current position. Moves left on the screen by the x value passed.
 */
void mouseLeft(int x);

/**
 * @brief move the mouse relative to its current position. Moves right on the screen by the x value passed.
 */
void mouseRight(int x);

// ------------------------
// ---- MOUSE CLICKS ------
// ------------------------

/**
 * @brief perform a mouse click at the mouse's current position.
 * @param left defaults to 0 for a left click and 1 for a right click.
 */
void mouseClick(char left);

#endif