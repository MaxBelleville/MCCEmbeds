const fs =require('fs/promises');
const path = require('path');

class Embeds {
    static parsedFiles = {}
    static tags = {load:[],tick:[]}
    
    static async pathExists(path) {
        try {
            await fs.access(path, fs.constants.R_OK | fs.constants.W_OK)
            return true;
        }
        catch {
            return false;
        }
    }

    static async readEmbeddedFolder(folderName) {
        this.currentPath =folderName;
        const fullpath= path.join(__dirname,"/"+folderName);
        if (await Embeds.pathExists(fullpath)) {
            if(!Embeds.parsedFiles[folderName]) {
            Embeds.parsedFiles[folderName] = {};
            if(await Embeds.pathExists(fullpath+"/require.txt")) {
                const issue = await Embeds.readRequirements(fullpath+"/require.txt")
                if(issue){
                    console.log("Ignoring embed:" + folderName +" as it requires "+ issue);
                    return; 
                }
            }
            await Embeds.readItems(fullpath,Embeds.parsedFiles[folderName])
            }
            else {
                console.log("Duplicate embeds " + folderName)
            }
        }
        else {
            console.log("No embed with the name "+ folderName +" found")
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
                const file = await fs.readFile(updated);
                obj[path] = file.toString();
            }
        }
    }
    static async readRequirements(path) {
        const file = await fs.readFile(path)
        const lines =file.toString().split(/\r?\n/)
        for(const line of lines) {
            if(line.startsWith("r-")) {
                const lib=line.replace("r-","")
                if(!Embeds.parsedFiles[lib]) {
                    return lib;
                }
            }
            if(line.startsWith("l-")) {
                const load=line.replace("l-","")
                Embeds.tags['load'].push(load)
            }
            if(line.startsWith("n-")) {
                const note=line.replace("n-","")
                console.log(note)
            }
            if(line.startsWith("t-")) {
                const tick=line.replace("t-","")
                Embeds.tags['tick'].push(tick)
            }
        }
        return "";
    }

    static getEmbedded() {
        return Embeds.parsedFiles;
    }
    static getLoadCalls() {
        return Embeds.tags['load'];
    }
    static getTickCalls() {
        return Embeds.tags['tick'];
    }
}

module.exports = Embeds;
