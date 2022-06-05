import { Plug } from "https://deno.land/x/plug@0.5.1/mod.ts";
import {
	join,
	dirname,
	fromFileUrl,
} from "https://deno.land/std@0.142.0/path/mod.ts";
export const __dirname = dirname(fromFileUrl(import.meta.url));
const TEST_LITEBOT_MODE = Deno.args.includes("--test-litebot");
const name = "litebot-core";
const options: Plug.Options = {
	name,
	url: !TEST_LITEBOT_MODE
		? "https://deno.land/x/litebot/core"
		: join(__dirname, `../core/${name}.dll`),
};

// verify the os is correct
if (Deno.build.os == "linux") Deno.exit(1);

// Drop-in replacement for `Deno.dlopen`
const library = await Plug.prepare(options, {
	getMousePos: { parameters: ["pointer"], result: "void" },
	setMousePos: { parameters: ["i32", "i32"], result: "i32" },
});

const litebot = library.symbols;
export default litebot;
