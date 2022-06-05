#include "../litebot.h"
#include <string.h>
#include <stdlib.h>
#include <stdio.h>

// ************************************
// ****    OSX BUILDS DONT WORK   *****
// ************************************

void lb_CursorCordinates(int *outCords)
{
  outCords[0] = 0;
  outCords[1] = 0;
}

void lb_setCursorPos(int x, int y)
{
}