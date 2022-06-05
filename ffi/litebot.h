#ifndef __LITEBOT_H
#define __LITEBOT_H

void lb_CursorCordinates(int *outCords); // [ Uint, Uint ]*

/**
 * @brief Set the mousePosition in screen space.
 * @param x int where x follows standard cartesian grid
 * @param y int where y starts from zero at the top
 */
void lb_setCursorPos(int x, int y);

#endif //  __LITEBOT_H