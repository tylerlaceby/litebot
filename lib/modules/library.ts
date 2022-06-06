import { Plug } from "https://deno.land/x/plug@0.5.1/mod.ts";

const name = "litebot";
const options: Plug.Options = {
	name,
	urls: {
		windows: `https://deno.land/x/litebot/core/${name}.dll`,
	},
};

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
