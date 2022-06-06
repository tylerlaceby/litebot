import {
	join,
	sep,
	dirname,
	fromFileUrl,
} from "https://deno.land/std@0.142.0/path/mod.ts";
export const __dirname = dirname(fromFileUrl(import.meta.url));
import { compile_binaries } from "./compile-lib.ts";

// SETTINGS
export const LIBRARY_NAME = "litebot";
const OUTPUT_FOLDER = join(__dirname, `..${sep}lib${sep}core`);
const INPUT_DIR = join(__dirname, "..", "ffi");

console.log("\n -- Compiling Dynamic Library -- ");
const win = await compile_binaries(OUTPUT_FOLDER, INPUT_DIR);

if (win)
	console.log(
		"%c\n-- Compilation of library 100% successful",
		"color: paleturquoise"
	);
else
	console.log(
		`\n-- Could not satisy all compilation targets\n Could not compile targets`,
		"color: purple; text-decoration: underline"
	);

// lastly move the version of readme into the /lib folder

Deno.copyFileSync("readme.md", "lib/readme.md");
console.log("%c\n-- Running test suite", "color: cyan");
const { status, stderr, stdout } = await Deno.spawn("./test.exe");

console.log(new TextDecoder().decode(stdout));
console.log(new TextDecoder().decode(stderr));

if (status.success)
	console.log("%cResults:\n-- Ready for deployment", "color: cyan");
else console.log("Issues occured when running tests.");
