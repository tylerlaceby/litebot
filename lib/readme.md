<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center"> 🪶 Litebot 🤖</h3>

<p align="center">
   A Deno library for interacting with the mouse 🖱️ keyboard ⌨️ and screen 💻. Litebot provides a simple API for creating kbm events, macros, & working with displays. Litebot leverages Deno's FFI to allow speedy low level control in C & C++ while having a typescript API exposed to the user.
    <br />
    <br />
    <a target="_blank" href="https://doc.deno.land/https://deno.land/x/litebot/mod.ts">Docs</a>
    ·
    <a target="_blank" href="https://github.com/tylerlaceby/litebot/issues">Report Bug</a>
    ·
    <a target="_blank" href="https://github.com/tylerlaceby/litebot/issues">Request Feature</a>
  </p>
</div>

<br/>
<hr/>
<br/>
<br/>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you can get started with Litebot. You can also check
out the `examples` folder for more documentation on each function.

1. Import Litebot

   ```ts
   import * as litebot from "https://deno.land/x/litebot/mod.ts";
   ```

2. Using Litebot Sub-Modules
   ```ts
   import { getMousePos } from "https://deno.land/x/litebot/mod.ts";
   getMousePos(); // { x: number, y: number }
   ```
3. Example Scripts

   ```
   deno run --allow-read --allow-ffi --allow-env --unstable https://deno.land/x/litebot/examples/mouse/mouse.ts
   ```

   - To view more more examples check out https://deno.land/x/litebot/examples/
   - Mouse Related https://deno.land/x/litebot/examples/mouse/
   - Keyboard Related https://deno.land/x/litebot/examples/keyboard/
   - Macros Related https://deno.land/x/litebot/examples/macros/

4. If you want to upgrade / switch versions then please use the `-r` &
   `-- --nocache` flags when calling deno run or compile.

```bash
deno run -r --allow-read --allow-ffi --allow-env --unstable https://deno.land/x/litebot/examples/mouse/mouse.ts
```

This will pevent the previously cached dll from being used and will fresh
install the new dll.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### `Mouse Position & Movement`

Currently this library will only work for windows machines. Lets demonstrate how
to use some common Litebot functions.

```ts
import {
  getMousePos,
  mouseDown,
  mouseLeft,
  mouseRight,
  mouseUp,
  moveMouse,
  setMousePos,
} from "https://deno.land/x/litebot/mod.ts";

// Get current position of mouse

const { x, y } = getMousePos();

// Setting the mouse position

setMousePos(0, 0);
setMousePos(-20000, 20398); // unsuccessful call results in the mouse being at the endge of the screen on the x and y

// Relative Mouse Movement
setMousePos(500, 500); // => {x: 500, y: 500}
moveMouse(100, -150); // -> {x: 600, y: 650}; // right 100 & down 150
moveMouse(0, 400); // -> {x: 600, y: 250}; // up 400

// Single Axis Relative Movement

mouseUp(20); // moves mouse up the screen by 20px
mouseUp(-20); // moves mouse down the screen by 20px
// Its possible to move by both positive and negative quantities. This simply inverts the direction again.

mouseLeft(100); // moves mouse left on screen by 100px
mouseRight(-23); // moves mouse left on screen by 23px
mouseDown(100); // moves mouse down on screen by 100px
```

### `Mouse / Keyboard Clicks`

Handling mouse clicks and keyboard presses is also quiet easy with Litebot. The
only diference is these operations are done on a `seperate thread`. It is vital
to `await` them to avoid race conditions between clicks and keyboard presses,

```ts
import { mouseClick, setMousePos } from "https://deno.land/x/litebot/mod.ts";

// left click at position 50, 100
setMousePos(50, 100);
await mouseClick();

// right click at same position
await mouseClick({ leftClick: false });

// left click at -100, 100
await mouseClick({ x: -100, y: 100, leftClick: true });
// or
await mouseClick({ x: -100, y: 100 });
```

### `Deno Flags`

- --allow-env
- --allow-read
- --allow-ffi
- --unstable

If you want to clear the cache or upgrade tyhe release please use these flags.

- `-- --nocache`
- `-r`

_For more examples, please refer to the
[Documentation](https://doc.deno.land/https://deno.land/x/litebot/mod.ts)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Screen

  - [ ] getMonitors
  - [ ] getMonitorCount
  - [ ] getActiveMonitor

  - [ ] setPixelColor ([r, g, b])
  - [ ] getPixelColor (x, y)
  - [ ] getMouseColor

- [ ] Mouse Actions

  - [x] Left Click
  - [x] Right Click
  - [ ] Double Click
    - [ ] Delayed Click

- [ ] Keyboard Actions

  - [ ] sendKey (keyCode : Litebot.Keycode )
  - [ ] sendKeys ( message : string )
  - [ ] keyPress (key : Litebot.Keycode | char )
  - [ ] keyRelease (key : Litebot.Keycode | char )

- [ ] Macro's
  - [ ] Macro.startRecordMacro ()
  - [ ] Macro.endRecordMacro ()
  - [ ] Macro.playBack ()
  - [ ] Macro.erase ()
  - [ ] Macro.saveMacro () : Litebot.Action []

## Completed

- [x] Mouse Moving Relative
  - [x] getMousePos
  - [x] setMousePos
  - [x] mouseUp
  - [x] mouseLeft
  - [x] mouseRight
  - [x] mouseDown
  - [x] mouseMove (pxX: number, pxY: number) -- move the mouse vertically and
        horicontaly at same time

See the [open issues](https://github.com/tylerlaceby/litebot/issues) for a full
list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Tyler Laceby: [@tylerbadger23](https://twitter.com/tylerbadger23) - Twitter

My Channel: [JSimplified](https://www.youtube.com/c/JSimplified) - YouTube

Deno Repo: [https://deno.land/x/litebot/](https://deno.land/x/litebot/)

Project Link:
[https://github.com/tylerlaceby/litebot](https://github.com/tylerlaceby/litebot)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/tylerlaceby/litebot.svg?style=for-the-badge
[contributors-url]: https://github.com/tylerlaceby/litebot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tylerlaceby/litebot.svg?style=for-the-badge
[forks-url]: https://github.com/tylerlaceby/litebot/network/members
[stars-shield]: https://img.shields.io/github/stars/tylerlaceby/litebot.svg?style=for-the-badge
[stars-url]: https://github.com/tylerlaceby/litebot/stargazers
[issues-shield]: https://img.shields.io/github/issues/tylerlaceby/litebot.svg?style=for-the-badge
[issues-url]: https://github.com/tylerlaceby/litebot/issues
[license-shield]: https://img.shields.io/github/license/tylerlaceby/litebot.svg?style=for-the-badge
[license-url]: https://github.com/tylerlaceby/litebot/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tyler-laceby-b94b27157

```
```
