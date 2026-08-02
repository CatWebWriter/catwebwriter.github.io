console.log("Loaded examples.js");

const examples = {
  blocks: {
    0: {
      id: "0",
      text: ["Log", {
        value: "",
        t: "any"
      }],
      globalid: "Z<"
    },
    11: {
      id: "11",
      text: [
        "Set",
        {
          value: "",
          l: "variable",
          t: "string"
        },
        "to",
        {
          value: "",
          l: "any",
          t: "string"
        }
      ],
      globalid: "Z>"
    },
    87: {
      "id": "87",
      "text": ["Run function", {
        "value": "a",
        "t": "string",
        "l": "function"
      }, {
          "value": [{
            "value": "ta",
            "l": "any",
            "t": "string"
          }, {
            "value": "tb",
            "t": "string",
            "l": "any"
          }],
          "t": "tuple"
        }, "→", {
          "value": "b",
          "t": "string",
          "l": "variable?"
        }],
      "globalid": "@F"
    }
  },
  "script": [{
    "class": "script",
    "globalid": ".,",
    "alias": "Script",
    "content": []
  }],
  "websiteloaded": {
    "y": "4908",
    "x": "4876",
    "globalid": "t.",
    "id": "0",
    "text": ["When website loaded..."],
    "actions": [],
    "width": "350"
  },
  "func": {
    "y": "4911.4443359375",
    "variable_overrides": [],
    "x": "4837.0322265625",
    "globalid": "|^",
    "id": "6",
    "text": ["Define function", {
      "value": "a",
      "t": "string",
      "l": "function"
    }],
    "actions": [],
    "width": "350"
  }
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

function randomglobalid() {
  const char1 = String.fromCharCode(getRandomIntInclusive(33, 126));
  const char2 = String.fromCharCode(getRandomIntInclusive(33, 126));
  return char1 + char2;
}

export function retObj(id, v = []) {
  if (!examples.blocks[id]) {
    throw new Error(`Template with id "${id}" does not exist.`);
  }

  const obj = structuredClone(examples.blocks[id]);
  const inputObjects = obj.text.filter(
    item => item !== null && typeof item === "object"
  );

  inputObjects.forEach((inputObj, index) => {
    if (typeof inputObj.value != "object") {
      inputObj.value = v[index] ?? "";
    }
  });

  if (Object.hasOwn(obj, "globalid")) {
    obj.globalid = randomglobalid();
  }

  return obj;
}
export function returnEventobj(func, code) {
  const funcJSON = structuredClone(examples[func])
  funcJSON["actions"] = code
  funcJSON["globalid"] = randomglobalid();
  return funcJSON
}
export function returnFunctionobj(func, code, params) {
  const funcJSON = structuredClone(examples["func"])
  funcJSON["text"][1]["value"] = func.replaceAll("()", "")
  funcJSON["actions"] = code
  funcJSON["globalid"] = randomglobalid();
  return funcJSON
}
export function returnScriptobj(objs) {
  const scriptJSON = structuredClone(examples["script"]);
  scriptJSON[0]["content"] = objs;
  return scriptJSON;
}