#include "litebot.h"
#include <Windows.h>
#include <string.h>

// mouse getters
void getMousePos(int *outCords) { lb_CursorCordinates(outCords); }

// mouse setters
void setMousePos(int x, int y) { lb_setCursorPos(x, y); }