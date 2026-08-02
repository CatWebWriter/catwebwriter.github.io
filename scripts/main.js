import * as examples from './examples.js';

console.log("Loaded main.js")

const button = document.getElementById('codesubmit');
function parseOperand(value) {
    if (value.startsWith('"') && value.endsWith('"')) {
        return value.slice(1, -1); // string
    }

    if (!isNaN(Number(value))) {
        return value; // number
    }

    return `{${value}}`; // variable
}
function compile() {
	const text = document.getElementById("message").value;
	const lines = text.split(/\r?\n/);
	let scripts = [];
	let actions = [];
	let currentEvent = null;
	let linenum = 1
	let currentFunction = null;
	for (const line of lines) {
		const trimmed = line.trim();
		const sline = trimmed.match(/"[^"]*"|\S+/g) || [];
		const funct = sline[0].replace(/\s/g, "");

		if (trimmed.endsWith(":") && trimmed.startsWith("when")) {
			currentEvent = trimmed.slice(5, -1).trim();
			linenum++
			continue;
		} else if (trimmed.endsWith(":") && trimmed.startsWith("function")) {
			currentFunction = trimmed.slice(8, -1).trim();
			linenum++
			continue;
		}

		if (trimmed === "end") {
			if (currentEvent) {
				scripts.push(examples.returnEventobj(currentEvent, actions))
				currentEvent = null;
			} else if (currentFunction) {
				scripts.push(examples.returnFunctionobj(currentFunction, actions, []))
				currentFunction = null;
			}
			actions = []
			// Compile this line into the current function
			linenum++
			continue;
		}

		if (funct == "log") {
			const ret = examples.retObj(0, [parseOperand(sline[1])]);
			actions.push(ret);
		} else if (funct == "set") {
			if (sline[2] !== "=") {
				throw new Error("Syntax error, forgot an equals symbol");
			}

			const ret = examples.retObj(11, [
				sline[1],
				parseOperand(sline[3])
			]);

			actions.push(ret);
		} else if (funct !== "") {
			throw new Error("Syntax Error: unknown token at line " + linenum)
		}
		linenum++
	}
	if (currentEvent) {
		throw new Error("Syntax Error: forgot to close { at line " + linenum)
	}
	const result = examples.returnScriptobj(scripts);
	return JSON.stringify(result);
};

function safecompile() {
	document.getElementById("console").value = ""
	document.getElementById("output").value = ""
	try {
		// Code that might throw an error
		const start = performance.now();
		document.getElementById("output").value = compile();
		const end = performance.now();
		document.getElementById("console").value = "Transpiled succesfully in " + (end - start) + " ms"
	} catch (error) {
		// Code to execute if an error occurs, use console.error so execution does not stop
		document.getElementById("console").value = "An error occurred:\n\n" + error.message;
	}

};

button.onclick = safecompile

