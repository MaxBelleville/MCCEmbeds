const fs =require('fs/promises');
const path = require('path');
class Embeds {
    static parsedFiles = {}

    static async readEmbeddedFolder(folderName) {
        this.currentPath =folderName;
        const fullpath= path.join(__dirname,"/"+folderName);
        try {
            await fs.access(fullpath, fs.constants.R_OK | fs.constants.W_OK)
            if(!Embeds.parsedFiles[folderName]) {
            Embeds.parsedFiles[folderName] = {};
            await Embeds.readItems(fullpath,Embeds.parsedFiles[folderName])
            }
            else {
                console.log("Duplicate embeds " + folderName)
            }
        }
        catch (e) {
            console.log("No embed with the name "+ folderName +" found")
            console.error(e)
        }
    }  
    static async readItems(fullpath,obj) {
        const paths = await fs.readdir(fullpath)
        for(const path of paths) {
            const updated = fullpath+"/"+path;
            const statPath=await fs.stat(updated);
            if(statPath.isDirectory()){
                obj[path]={}
                await Embeds.readItems(updated,obj[path])
            }
            else if(statPath.isFile()){
                console.log(updated)
                const file = await fs.readFile(updated);
                obj[path] = file.toString();
            }
        }
    }
    static getEmbedded() {
        return Embeds.parsedFiles;
    }
}

module.exports = Embeds;
