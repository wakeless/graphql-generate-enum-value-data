const generateScalars = require('../src/generateEnumValueData');
const parseSchema = require('../src/parseSchema');
const fs = require('fs');
const path = require('path');

let types;

beforeEach(async () => {
  const rawSchema = fs.readFileSync(path.resolve('./__tests__/fixtures/schema.graphql'), 'utf8');
  schema = await parseSchema(rawSchema, './__tests__/fixtures/schema.graphql');
  types = schema.data.__schema.types;
});


describe('Generate assets', () => {
  it('should generate enum descriptions', () => {
    expect(generateScalars(types)).toMatchSnapshot();
  });
});
