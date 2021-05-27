import arg from 'arg'
import { importFile } from './file'
import { promptSelectActions } from './prompt'

export async function parseArgumentsIntoOptions(rawArgs){
    const args = arg(
        {
            "--filename": String,
            "--output-file": String,
            "--version": Boolean,
            "--help": Boolean,
            "-h": "--help",
            "-f": "--filename",
            "-o": "--output-file",
            "-v": "--version",
        },
        {
            argv: rawArgs.slice(2),
        }
    )

    // Verify extra command
    if(args["--filename"] != undefined && (args["_"].length>0 || importFile(args["--filename"]) == "")){
        console.error("Flag -f|--filename import a text content of a file, put a valid filename")
        return null
    }

    if(args["--help"] && args["_"].length == 0){

        console.log(importFile(__dirname + "/../docs/help.txt"))
        return null
    }

    if(args["--version"] != undefined && args.length>1){
        console.error("Flag -v|--version only to get version")
        return null
    }

    return {
        output: {
            isSelect: args["--output-file"] != undefined,
            fileName:args["--output-file"] != undefined?args["--output-file"]:null,
        },
        running: {
            command: args["--version"]?{action: "version"}: await promptSelectActions(),
            text: args["--filename"] == undefined?args["_"][0]:importFile(args["--filename"]),
        }
    }
}