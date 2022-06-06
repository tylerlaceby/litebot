import { LIBRARY_NAME, __dirname } from "./build.ts";
import { walkSync } from "https://deno.land/std@0.141.0/fs/mod.ts";
import { sep } from "https://deno.land/std@0.142.0/path/mod.ts";

const COMPILATION_FLAGS = (files: string[]) => {
	return ["-shared", "-o", `${LIBRARY_NAME}.dll`, ...files];
};

export async function compile_binaries(
	output_dir: string,
	input_dir: string
): Promise<boolean> {
	const compilation_files = [];
	const files = walkSync(input_dir);
	for (const file of files)
		if (file.name.includes(".h") || file.name.includes(".c")) {
			compilation_files.push(file.path);
		}

	const args = COMPILATION_FLAGS(compilation_files);

	const { status, stdout, stderr } = await Deno.spawn("gcc", {
		args,
	});

	// handle bad calls
	if (!status.success) {
		console.log(`%c Could not compile the dynamic library\n`, "color: crimson");

		console.log(new TextDecoder().decode(stdout));
		console.log(new TextDecoder().decode(stderr));
		console.log(`%c - failure`, "color: tomato");
		return false;
	}

	console.log(`%c - Compiled all dynamic library files`, "color: azure;");
	const fileName = `${LIBRARY_NAME}.dll`;

	Deno.spawnSync("mv", { args: [fileName, `${output_dir}${sep}${fileName}`] });
	console.log(
		`%c - Moved library into ${`${output_dir}${sep}${fileName}`}`,
		"color: ghostwhite"
	);

	console.log(`%c - success`, "color: palegreen");

	return true;
}
