import {
	join,
	dirname,
	basename,
	fromFileUrl,
} from "https://deno.land/std@0.142.0/path/mod.ts";
export const __dirname = dirname(fromFileUrl(import.meta.url));

const lib = Deno.dlopen(join(__dirname, "../lib/core/litebot.dll"), {
	getMousePos: { parameters: ["pointer"], result: "void" },
	setMousePos: { parameters: ["i32", "i32"], result: "void" },
});

export const { getMousePos, setMousePos } = lib.symbols;

const tests = ["mouse-runner.ts", "keyboard-runner.ts"].map((f) =>
	join(__dirname, "./", f)
);
const testResults: { file: string; success: boolean }[] = [];

async function run_tests() {
	// run tests
	for (const file of tests) {
		const { stdout, status, stderr } = await Deno.spawn("deno", {
			args: ["test", "-A", "--unstable", file],
			cwd: __dirname,
		});

		const stats = { file: basename(file), success: status.success };

		testResults.push(stats);
		if (!status.success) {
			console.log(new TextDecoder().decode(stdout));
			console.log(`%c- Test failed: ${basename(file)}`, "color: tomato");
			console.log(new TextDecoder().decode(stderr));
		} else console.log(`%c- Test Passed: ${basename(file)}`, "color: cyan");
	}

	const failed = testResults.filter((result) => !result.success);
	if (failed.length == 0) {
		console.log(`%c- 100% test coverage`, "color: dodgerblue");
		Deno.exit(0);
	} else {
		console.log("Could not complete these tests.");
		console.log(failed);
		Deno.exit(1);
	}
}

run_tests();
