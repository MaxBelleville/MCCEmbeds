const fs =require('fs/promises');
class Embeds {
    static parsedFiles = {}

    async readEmbeddedFolder(folderName) {
        try {
            await fs.access("./"+folderName, fs.constants.R_OK | fs.constants.W_OK)
            const files = await fs.readdir("./"+folderName)
            console.log(files);
        }
        catch (e) {
            console.log("No embed with the name "+ folderName +" found")
            console.error(e)
        }
    }  
}

module.exports = Embeds;
