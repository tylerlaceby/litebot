#include <Windows.h>
#include "mouse.h"
#include <stdio.h>
// -----------------------------
// -- MOUSE CLICKS & ACTIONS  --
// -----------------------------

void mouseClick(int left)
{
  Sleeep(100);
  if (left)
    mouse_event(MOUSEEVENTF_LEFTDOWN | MOUSEEVENTF_ABSOLUTE | MOUSEEVENTF_VIRTUALDESK, 0, 0, 0, 0);
  else
    mouse_event(MOUSEEVENTF_RIGHTDOWN | MOUSEEVENTF_ABSOLUTE | MOUSEEVENTF_VIRTUALDESK, 0, 0, 0, 0);

  Sleep(100);

  if (left)
    mouse_event(MOUSEEVENTF_LEFTUP | MOUSEEVENTF_ABSOLUTE | MOUSEEVENTF_VIRTUALDESK, 0, 0, 0, 0);
  else
    mouse_event(MOUSEEVENTF_RIGHTUP | MOUSEEVENTF_ABSOLUTE | MOUSEEVENTF_VIRTUALDESK, 0, 0, 0, 0);
}

void sendKey(char keyCode)
{
  SHORT key;
  UINT mappedkey;
  // In a loop.
  INPUT input = {0};
  key = VkKeyScan(keyCode);
  // Simulating the i key.
  mappedkey = MapVirtualKey(LOBYTE(key), 0);
  input.type = INPUT_KEYBOARD;
  input.ki.dwFlags = KEYEVENTF_SCANCODE;
  input.ki.wScan = mappedkey;
  SendInput(1, &input, sizeof(input));
  Sleep(10);
  input.ki.dwFlags = KEYEVENTF_SCANCODE | KEYEVENTF_KEYUP;
  SendInput(1, &input, sizeof(input));
}
