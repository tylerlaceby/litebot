import {
	join,
	sep,
	dirname,
	fromFileUrl,
} from "https://deno.land/std@0.142.0/path/mod.ts";
// Without trailing slash
export const __dirname = dirname(fromFileUrl(import.meta.url));
import { compile_binaries } from "./compile-lib.ts";

// SETTINGS
export const LIBRARY_NAME = "litebot-core";
const OUTPUT_FOLDER = join(__dirname, `../lib${sep}core`);
const INPUT_DIRS = {
	WIN: join(__dirname, "../", "ffi/win"),
	OSX: join(__dirname, "../", "ffi/osx"),
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

// lastly move the version of readme into the /lib folder

Deno.copyFileSync("readme.md", "lib/readme.md");
