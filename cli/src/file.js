var fs = require('fs');

/**
 * @param {string} filename - The filenamt to import
 * @return {string} content of file
 */
export function importFile(filename){
    if( fs.existsSync(filename))
    return fs.readFileSync(filename, "utf-8")
    return ""
}

/**
 * @param {Object} data - The object to parse to JSON format
 * @param {string} filename - The writing file
 */
export async function exportFile(data, filename){

    const folder = filename.substr(0, filename.lastIndexOf("/"));

    if( !fs.existsSync( folder ) ){
        await fs.promises.mkdir(folder, { recursive: true });
    }
    
    fs.writeFileSync(filename + ".json", JSON.stringify(data, null, 2));
}
