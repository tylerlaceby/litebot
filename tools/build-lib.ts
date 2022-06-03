import { join, sep } from "https://deno.land/std@0.142.0/path/mod.ts";

import { compile_binaries } from "./compile-lib.ts";

// SETTINGS
export const LIBRARY_NAME = "litebot-core";
const OUTPUT_FOLDER = `lib${sep}core`;
const INPUT_DIRS = {
	WIN: join("ffi", "win"),
	OSX: join("ffi", "osx"),
};

const osx = await compile_binaries(OUTPUT_FOLDER, INPUT_DIRS.OSX, false);
const win = await compile_binaries(OUTPUT_FOLDER, INPUT_DIRS.WIN, true);

if (osx && win)
	console.log(
		"%c\n-- Compilation of library 100% successful",
		"color: paleturquoise"
	);
else
	console.log(
		`\n-- Could not satisy all compilation targets\n Could not compile both targets`,
		"color: purple; text-decoration: underline"
	);
