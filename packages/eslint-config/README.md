# ESLint config for clear code

## Install

```
npm i @npm.piece/eslint-config -D
```

```
yarn add @npm.piece/eslint-config -D 
```

## Create .eslintrc near package.json file
```json
{
  "extends": [
    "@npm.piece/eslint-config"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  }
}
```

## Add line to your tsconfig.json file
```json
"include": [
    "src",
    "." 
  ]
```
