import { Plug } from "https://deno.land/x/plug@0.5.1/mod.ts";

// verify the users machine is not linux
if (Deno.build.os == "linux") {
	console.log(`%cSadly litebot does not support your machine or OS.\n`);
	Deno.exit(1);
}

const name = "litebot-core";

const options: Plug.Options = {
	name,
	url: "https://deno.land/x/litebot/core",
};

// Drop-in replacement for `Deno.dlopen`
const library = await Plug.prepare(options, {
	_CursorCordinates: { parameters: ["pointer"], result: "void" },
});

const litebot = library.symbols;
export default litebot;
