#include <Windows.h>
#include "mouse.h"
#include <stdio.h>

// -----------------------------
// -- MOUSE CLICKS & ACTIONS  --
// -----------------------------

int mouseClick(int left, int clickDelay)
{
  DWORD downclick = (MOUSEEVENTF_ABSOLUTE | (left == 1 ? MOUSEEVENTF_LEFTDOWN : MOUSEEVENTF_RIGHTDOWN));
  DWORD upclick = (MOUSEEVENTF_ABSOLUTE | (left == 1 ? MOUSEEVENTF_LEFTUP : MOUSEEVENTF_RIGHTUP));

  INPUT input;
  ZeroMemory(&input, sizeof(INPUT));
  input.type = INPUT_MOUSE;
  input.mi.dwFlags = downclick;
  input.mi.time = 0;
  UINT sent = SendInput(1, &input, sizeof(INPUT));

  // verify the commands were executed
  if (sent != 1)
    return -1;

  Sleep(clickDelay);
  input.mi.dwFlags = upclick;
  sent = SendInput(1, &input, sizeof(INPUT));

  return sent;
}
