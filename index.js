const fs =require('fs/promises');
class Embeds {
    static parsedFiles = {}

    async readEmbededFolder(folderName) {
        try {
            await fs.access(folderName, fs.constants.R_OK | fs.constants.W_OK)
            const files = await fs.readdir(folderName)
            console.log(files);
        }
        catch {
            console.log("No embed with the name "+ folderName +" found")
        }
    }  
}
module.exports = Embeds;