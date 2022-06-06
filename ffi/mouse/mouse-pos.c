#include <Windows.h>
#include "mouse.h"

// ------------------------
// -- GETTERS & SETTERS  --
// ------------------------

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

// ------------------------
// RELATIVE MOVEMENT ------
// ------------------------

static void __mouseVertical(int y)
{
  POINT p;
  // Get the current mouse position for relative movement.
  GetCursorPos(&p);
  // apply inverse of y to the new y position.ss
  int newY = p.y += -y;
  SetCursorPos(p.x, newY);
}

static void __mouseHorizontal(int x)
{
  POINT p;
  // Get the current mouse position for relative movement.
  GetCursorPos(&p);
  // apply inverse of y to the new y position.ss
  int newX = p.x += x;
  SetCursorPos(newX, p.y);
}

void moveMouse(int x, int y)
{
  // Get the current mouse position for relative movement.
  POINT p;
  GetCursorPos(&p);

  int newX = p.x += x;
  // apply inverse of y to the new y position.ss
  int newY = p.y += -y;
  SetCursorPos(newX, newY);
}

void mouseUp(int y)
{
  __mouseVertical(y);
}

void mouseDown(int y)
{
  __mouseVertical(-y);
}

void mouseLeft(int x)
{
  __mouseHorizontal(-x);
}

void mouseRight(int x)
{
  __mouseHorizontal(x);
}

// ------------------------
// ---- MOUSE CLICKS ------
// ------------------------