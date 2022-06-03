#include "../litebot.h"
#include <string.h>
#include <stdlib.h>
#include <stdio.h>

// ************************************
// ****    OSX BUILDS DONT WORK   *****
// ************************************

void _CursorCordinates(unsigned int *outCords)
{
  outCords[0] = 0;
  outCords[1] = 0;
}

int main() { return 0; }