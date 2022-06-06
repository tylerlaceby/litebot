#include "mouse.h"
#include <Windows.h>

static void __mouseVertical (int y) {
    POINT p;
     // Get the current mouse position for relative movement.
    GetCursorPos(&p);
    // apply inverse of y to the new y position.ss
    int newY = p.y += -y;
    SetCursorPos(p.x, newY);
}

static void __mouseHorizontal (int x) {
    POINT p;
     // Get the current mouse position for relative movement.
    GetCursorPos(&p);
    // apply inverse of y to the new y position.ss
    int newX = p.x += x;
    SetCursorPos(newX, p.y);
}

void moveMouse (int x, int y) {
    // Get the current mouse position for relative movement.
    POINT p; 
    GetCursorPos(&p);

    int newX = p.x += x;
    // apply inverse of y to the new y position.ss
    int newY = p.y += -y;
    SetCursorPos(newX, newY);
}

void mouseUp (int y) {
    __mouseVertical(y);
}

void mouseDown (int y) {
    __mouseVertical(-y);
}

void mouseLeft (int x) {
    __mouseHorizontal(-x);
}

void mouseRight (int x) {
    __mouseHorizontal(x);
}