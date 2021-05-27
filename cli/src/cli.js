import { exportFile, importFile } from './file'
import { parseArgumentsIntoOptions } from './parser'
import { api } from './actions'

export async function cli(args) {
    let options = await parseArgumentsIntoOptions(args);
    if (options != null){
        try {
            let data = await api({
                action: options.running.command.action,
                text: options.running.text,
                number: options.running.command.number?options.running.command.number:0,
            })
            if(options.output.isSelect){
                exportFile(data,  process.cwd()+"/"+options.output.fileName)
            }
            console.log(data)
        } catch (error){
            console.log("\nAny command match!")
            console.log(importFile(__dirname + "/../docs/help.txt"))
        }
    
        
    }
    return 
   }
