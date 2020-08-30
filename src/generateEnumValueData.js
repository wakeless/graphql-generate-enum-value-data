const { prettierConfig, fileHeader } = require("./constants");
const prettier = require("prettier");

function unpack(type) {
  if (type.kind == "NON_NULL") {
    return type.ofType;
  } else {
    return type;
  }
}

function generateScalars(types) {
  let scalars = types
    .filter((i) => ["ENUM"].includes(i.kind))
    .filter((i) => i.name.substr(0, 2) != "__")
    .reduce((acc, baseType) => {
      let enumValues = baseType.enumValues.reduce((acc, value) => ({
        ...acc,
        [value.name]: value
      }), {});

      return {
        ...acc,
        [baseType.name]: enumValues
      };
    }, {});

  let fileOutput = fileHeader;

  Object.entries(scalars).forEach(([name, values]) => {
    fileOutput += `
      export const ${name} = ${JSON.stringify(values)}\n\n`;
  });

  return prettier.format(fileOutput, prettierConfig);
}

module.exports = generateScalars;
