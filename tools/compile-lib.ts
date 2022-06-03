import { LIBRARY_NAME } from "./build-lib.ts";
import { walkSync } from "https://deno.land/std@0.141.0/fs/mod.ts";
import { sep } from "https://deno.land/std@0.142.0/path/mod.ts";

const COMPILATION_FLAGS = (files: string) => {
	return {
		// gcc -dynamiclib FILES* -o litebot-core.dylib
		OSX: ["-dynamic", "-o", `${LIBRARY_NAME}.dylib`, files],
		// gcc -shared -o litebot-core.dll FILES*
		WIN: ["-shared", "-o", `${LIBRARY_NAME}.dll`, files],
	};
};

export async function compile_binaries(
	output_dir: string,
	input_dir: string,
	win: boolean
): Promise<boolean> {
	const OS = win ? "Windows" : "OSX";
	console.log(
		`%c\n-- Starting compilation of dynamic library for ${OS}`,
		"color: palegreen"
	);
	let compilation_files = "";
	const files = walkSync(input_dir);
	for (const file of files)
		if (file.name.includes(".h") || file.name.includes(".c")) {
			compilation_files += `${file.path}`;
		}

	const args = win
		? COMPILATION_FLAGS(compilation_files).WIN
		: COMPILATION_FLAGS(compilation_files).OSX;

	const { status, stdout, stderr } = await Deno.spawn("gcc", {
		args,
	});

	// handle bad calls
	if (!status.success) {
		console.log(
			`%c Could not compile the ${OS} dynamic library\n`,
			"color: crimson"
		);

		console.log(new TextDecoder().decode(stdout));
		console.log(new TextDecoder().decode(stderr));
		console.log(`%c - failure`, "color: tomato");
		return false;
	}

	console.log(`%c - Compiled all ${OS} dynamic library files`, "color: azure;");
	if (!win) {
		// cleanup the .c files
		const _cfiles = walkSync(Deno.cwd(), { includeDirs: false });
		for (const file of _cfiles) {
			if (file.isFile && file.name.includes("litebot-osx.c")) {
				// check for c files inside ffi folder and dont remove them
				if (!file.path.includes("ffi"))
					Deno.spawnSync("rm", { args: [file.path] });
			}
		}
		console.log(
			`%c - Performed cleanup of compilation files`,
			"color: aliceblue"
		);
	}

	const fileName = win ? `${LIBRARY_NAME}.dll` : `${LIBRARY_NAME}.dylib`;

	Deno.spawnSync("mv", { args: [fileName, `${output_dir}${sep}${fileName}`] });
	console.log(
		`%c - Moved library into ${`${output_dir}${sep}${fileName}`}`,
		"color: ghostwhite"
	);

	console.log(`%c - success`, "color: palegreen");

	return true;
}
