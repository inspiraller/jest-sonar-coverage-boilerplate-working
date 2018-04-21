# Set up jasmine - experiment

## create package.json
$ npm init -y

## install jasmine

## create config
reference :
https://jasmine.github.io/2.3/node.html#section-Configuration

jasmine.json
```
{
  "spec_dir": "specs",
  "spec_files": [
    "./*[sS]pec.js"
  ],
  "stopSpecOnExpectationFailure": false,
  "random": false
}
```
