const fs =require('fs/promises');
const path = require('path');
class Embeds {
    static parsedFiles = {}

    async readEmbeddedFolder(folderName) {
        this.currentPath =folderName;
        const fullpath= path.join(__dirname,"/"+folderName);
        try {
            await fs.access(fullpath, fs.constants.R_OK | fs.constants.W_OK)
            Embeds.parsedFiles[folderName] = {};
            await this.readItems(fullpath,Embeds.parsedFiles[folderName])
        }
        catch (e) {
            console.log("No embed with the name "+ folderName +" found")
            console.error(e)
        }
    }  
    async readItems(fullpath,obj) {
        const paths = await fs.readdir(fullpath)
        console.log(fullpath);
        for(const path of paths) {
            const updated = fullpath+"/"+path;
            const statPath=await fs.stat(updated);
            if(statPath.isDirectory()){
                obj[path]={}
                this.readItems(updated,obj[path])
            }
            else if(statPath.isFile()){
                const file = await fs.readFile(updated);
                obj[path] = file;
            }
        }
        console.log(JSON.stringify(Embeds.parsedFiles));

    }
}

module.exports = Embeds;
