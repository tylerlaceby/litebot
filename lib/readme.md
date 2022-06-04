<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center"> 🪶 Litebot 🤖</h3>

  <p align="center">
    Litebot is a Deno package for interacting with the mouse 🖱️ keyboard ⌨️ and screen 💻. The
    focus of Litebot is to provide a fast and simple API for writing bots and programs that need
    fine control over the keyboard and mouse. OSX & Windows only.
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

This is an example of how you can get started with Litebot.

1. Import Litebot

   ```ts
   import * as litebot from "https://deno.land/x/litebot/mod.ts";
   ```

2. Using Litebot Sub-Modules
   ```ts
   import { cursor_pos } from "https://deno.land/x/litebot/mod.ts";
   mouse.cursor_pos(); // { x: number, y: number }
   ```
3. Example Scripts
   ```
   deno run -A --unstable https://deno.land/x/litebot/examples/mouse.ts
   ```
   - To view more more examples check out https://deno.land/x/litebot/examples/

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Using Litebot is as simple as importing the function / module you want to use and then calling a attached method.

The required dynamic libraries will be installed upon startup so there is no need to worry about OS specific dependecies.

Lets demonstrate how to use some common Litebot functions.

```ts
import litebot, { mouse } from "https://deno.land/x/litebot/mod.ts";

// Get the cordinates of the mouse. Works with multi monitors as well.
const { x, y } = mouse.cursor_position();
console.log(`Mouse Position x: ${x}, y: ${y}`);
```

_For more examples, please refer to the [Documentation](https://doc.deno.land/https://deno.land/x/litebot/mod.ts)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Mouse Position - OSX
- [ ] Color @ Pixel - OSX / Win
  - [ ] Color @ Cursor
  - [ ] RGB & Hex Support
- [ ] Mouse Actions - OSX / Win

  - [ ] Left Click
  - [ ] Right Click
  - [ ] Double Click
    - [ ] Delayed Click

- [ ] Keyboard Actions - OSX / Win
  - [ ] sendKey (keyCode : Litebot.Keycode )
  - [ ] sendKeys ( message : string )
  - [ ] keyPress (key : Litebot.Keycode | char )
  - [ ] keyRelease (key : Litebot.Keycode | char )
- [ ] Macro's OSX / Win
  - [ ] Macro.startRecordMacro ()
  - [ ] Macro.endRecordMacro ()
  - [ ] Macro.playBack ()
  - [ ] Macro.erase ()
  - [ ] Macro.saveMacro () : Litebot.Action []

See the [open issues](https://github.com/tylerlaceby/litebot/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Tyler Laceby: [@tylerbadger23](https://twitter.com/tylerbadger23) - Twitter

My Channel: [JSimplified](https://www.youtube.com/c/JSimplified) - YouTube

Deno Repo: [https://github.com/tylerlaceby/litebot](https://deno.land/x/litebot/)

Project Link: [https://github.com/tylerlaceby/litebot](https://github.com/tylerlaceby/litebot)

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
