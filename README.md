# graphql-generate-enum-value-data

A small lib to help extract information about enum values from a graphql schema

It extracts the description and deprecation status of all enum values in a schema.

This is particularly useful if you would like to autogenerate things like tables or form fields and want them to be auto-configured by the graph schema.

Ideally, this lib is used in combination with saving your schema from your backend.
Example in `package.json`:

```
"scripts": {
  ...
  "graphql:save-schema": "some-script-to-save-your-schema && npm run graphql:generate-assets",
  "graphql:generate-enum-values": "graphql-generate-enum-value-data -s path/to/schema.json --output-path ./src/constants/enumDescirptions.js"
  ...
```


## Usage
All options can be seen by running:
```
graphql-generate-enum-value-data -h
```


A good amount of this code has been lifted from: [graphql-generate-flow-schema-assets](https://github.com/zth/graphql-generate-flow-schema-assets) this isn't really a fork, so hasn't been forked in the true sense of the word.

