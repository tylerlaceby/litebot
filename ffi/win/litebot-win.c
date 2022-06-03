#include "../litebot.h"
#include <Windows.h>
#include <string.h>
#include <stdlib.h>
#include <stdio.h>

void _CursorCordinates(int *outCords)
{
  POINT p;
  if (!GetCursorPos(&p))
    return;

  // Pass to Uint32Array in denoland.
  outCords[0] = p.x;
  outCords[1] = p.y;
}