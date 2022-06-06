import { Plug, } from "https://deno.land/x/plug@0.5.1/mod.ts";
import {
	join,
	dirname,
	fromFileUrl,
} from "https://deno.land/std@0.142.0/path/mod.ts";
export const __dirname = dirname(fromFileUrl(import.meta.url));
const name = "litebot";
const WIN_FILENAME = `${name}.dll`;
const policy = Deno.args.includes("--litebot-dylib-nocache")? "NONE" : "STORE" as Plug.CachePolicy;
const WINDOWS_URL = new URL(`../core/${WIN_FILENAME}`, import.meta.url).href;
const options: Plug.Options = {
	name,
	policy,	
	urls: {
		windows: WINDOWS_URL
	},
};

console.log(Deno.args, policy)
// verify the os is correct
if (Deno.build.os !== "windows") {
	console.log("This library is strictly for windows machines at this time.");
	Deno.exit(1);
}

const library = await Plug.prepare(options, {
	getMousePos: { parameters: ["pointer"], result: "void" },
	setMousePos: { parameters: ["i32", "i32"], result: "void" },
	moveMouse : {parameters: ['i32', 'i32'], result: "void"},
	mouseUp: {parameters: ['i32'], result: "void"},
	mouseDown: {parameters: ['i32'], result: "void"},
	mouseLeft: {parameters: ['i32'], result: "void"},
	mouseRight: {parameters: ['i32'], result: "void"},
});

const litebot = library.symbols;
export default litebot;
