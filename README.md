# Wopyno analitycs

Wopyno is a simple application write in NodeJS and Python permitt to help string treatment throught a CLI.

## Requirement

- Python 3.8.2
- NodeJS 10.19
- PypI 20.0.2

## Installation for Linux

To correctly install the application, make sure you have required packages.
To install wopyno API, go in project directory and make

```bash
pip install -r requirements.txt
```

And to run server API make (Warning, this server will running in daemon)

```bash
python server.py
```

And then for CLI installation make

```bash
cd ./cli
npm install
npm link
```

## Testing

You can test API with conventionnal tools unittest (standard module of python).
So just run `wopyno_test.py` module with python 3 to run unit test.

## Usage

Keyword `wopyno` use a nodejs cli to handle user command.
For use it, just compose `wopyno` command name and tell him corresponding text to handle.

```bash
wopyno <text>
```

A list of action appear and allow you to choose action to the given text.

They exists multiple option to work with the cli:

## CLI Options

action|description
-|-
`-v\|--version` | Return name version of cli tool.
`-f\|--filename <path>` | Defined a file that import text.
`-o\|--output <path>`| Write result in given file (create it if not exists)
`-h\|--help`| Return manual usage
</br>
