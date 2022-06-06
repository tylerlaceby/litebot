#include "mouse.h"
#include <Windows.h>


void moveMouse (int x, int y) {
    // Get the current mouse position for relative movement.
    POINT p; 
    GetCursorPos(&p);

    int newX = p.x += x;
    // apply inverse of y to the new y position.ss
    int newY = p.y += -y;
    SetCursorPos(newX, newY);
}