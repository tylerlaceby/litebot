#include "../litebot.h"
#include <string.h>
#include <stdlib.h>
#include <stdio.h>

// ************************************
// ****    OSX BUILDS DONT WORK   *****
// ************************************

// mouse getters
void getMousePos(int *outCords) { lb_CursorCordinates(outCords); }

// mouse setters
void setMousePos(int x, int y) { lb_setCursorPos(x, y); }

// needed for compilation
int main() { return 0; }