#include <Windows.h>
#include "mouse.h"

void getMousePos(int *outCords)
{
  POINT p;
  if (!GetCursorPos(&p))
    return;

  // Pass to Uint32Array in denoland.
  outCords[0] = p.x;
  outCords[1] = p.y;
}

void setMousePos(int x, int y)
{
  // capture required access for desktop
  // https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setcursorpos
  HDESK hook = OpenInputDesktop(0, 1, DF_ALLOWOTHERACCOUNTHOOK);
  SetThreadDesktop(hook);
  SetCursorPos(x, y);
}