const fs =require('fs/promises');
const path = require('path');
class Embeds {
    static parsedFiles = {}

    async readEmbeddedFolder(folderName) {
        const fullpath= path.join(__dirname,"/"+folderName);
        try {
            await fs.access(fullpath, fs.constants.R_OK | fs.constants.W_OK)
            const files = await fs.readdir(fullpath)
            console.log(files);
        }
        catch (e) {
            console.log("No embed with the name "+ folderName +" found")
            console.error(e)
        }
    }  
}

module.exports = Embeds;
