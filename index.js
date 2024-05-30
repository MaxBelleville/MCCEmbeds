const fs =require('fs/promises');
const path = require('path');
class Embeds {
    static parsedFiles = {}

    async readEmbeddedFolder(folderName) {
        this.currentPath =folderName;
        const fullpath= path.join(__dirname,folderName);
        try {
            await fs.access(fullpath, fs.constants.R_OK | fs.constants.W_OK)
            Embeds.parsedFiles[folderName] = {};
            this.readItems(fullpath,Embeds.parsedFiles[folderName])
            console.log(JSON.stringify(Embeds.parsedFiles));
        }
        catch (e) {
            console.log("No embed with the name "+ folderName +" found")
            console.error(e)
        }
    }  
    async readItems(fullpath,obj) {
        const paths = await fs.readdir(fullpath)
        for(const path of paths) {
            const statPath=await fs.stat(path);
            if(statPath.isDirectory()){
                obj[path]={}
                this.readItems(fullpath+"/"+path,obj[path])
            }
            else if(statPath.isFile()){
                const file = await fs.readFile(fullpath+"/"+path);
                obj[path] = file;
            }
        }

    }
}

module.exports = Embeds;
