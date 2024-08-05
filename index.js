const fs = require("fs/promises");
const path = require("path");
const AdmZip = require("adm-zip");
class Embeds {
  static parsedFiles = {};
  static config = {};
  static tags = { load: [], tick: []};

  static readEmbeddedFolder(folderName) {
    const fullpath = path.join(__dirname, "/" + folderName + ".zip");
    try {
      if (!Embeds.parsedFiles[folderName]) {
        Embeds.parsedFiles[folderName] = {};
        Embeds.config[folderName] = {};
        this._zip = new AdmZip(fullpath);
        for (const zipEntry of this._zip.getEntries()) {
          if (zipEntry.name == "require.txt") {
            Embeds._readRequirements(zipEntry,folderName);
          } else {
            Embeds._readItems(Embeds.parsedFiles[folderName],zipEntry);
          }
        }
      } else {
        console.log("Duplicate embeds " + folderName);
      }
    } catch (e) {
      console.log("No embed with the name " + fullpath + " found");
     console.log(`Something went wrong. ${e}`);
    }
  }
  static _readItems(root,entry) {
    const arr = entry.entryName.split("/");
    const end = arr.pop();
    for (const section of arr){
      if(!root[section]) root[section]={}
      root = root[section];
    }
    root[end] = this._zip.readAsText(entry,'utf8');
  }
  static _readRequirements(entry,folderName) {
    const lines = this._zip.readAsText(entry, "utf8").split(";");
    for (let line of lines) {
      line = line.replace(/(?:\r\n|\r|\n)/g,"");
      if (line.startsWith("r-")) {
        const lib = line.replace("r-", "");
        if (!Embeds.parsedFiles[lib]) {
          return lib;
        }
      }
      if(line.startsWith("c-")) {
        //Default config options, split by \n
        const defaults = line.replace("c-", "");
        const defaultLines = defaults.split(/\r?\n/);
        const configGroup=defaultLines.shift();

        Embeds.config[folderName][configGroup] = {};
        for(const dline of defaultLines) {
          const split = dline.split("-");
          Embeds.config[folderName][configGroup][split[0]] = split[1];
        }
      }
      if (line.startsWith("l-")) {
        const load = line.replace("l-", "");
        Embeds.tags["load"].push(load);
      }
      if (line.startsWith("n-")) {
        const note = line.replace("n-", "");
        console.log(note);
      }
      if (line.startsWith("t-")) {
        const tick = line.replace("t-", "");
        Embeds.tags["tick"].push(tick);
      }
    }
    return "";
  }

  static setConfig(folderName, configGroup, vars){
    if(Embeds.parsedFiles[folderName]) {
      Embeds.config[folderName][configGroup] = {};
      for(const keys of Object.keys(vars)) {
        Embeds.config[folderName][configGroup][keys] = vars[keys].toString();
      }
    }
    else {
      console.log("No embed with the name: " + folderName+ " imported.")
    }

  }
  /**
   * Required to be called before datapack bundler reads embeds.
  */
  static updateEmbedWithConfig() {
    for(const key of Object.keys(Embeds.parsedFiles)) {
      Embeds._updateEmbedWithConfig(key, Embeds.parsedFiles[key]);
    }
  }
  static _updateEmbedWithConfig(folderName, parsedObj) {
    for(const key of Object.keys(parsedObj)) {
      if (typeof parsedObj[key] === 'object' && parsedObj[key] !== null) {
        Embeds._updateEmbedWithConfig(folderName,parsedObj);
      }
      else {
        //JStart and end using random symbols to ensure code doesn't get confused with command code.
        Embeds._recursiveReplace("#?[","]?",folderName,parsedObj[key]);
        Embeds._recursiveReplace("![","]!",folderName,parsedObj[key]);
      }
    }
  }
  static _recursiveReplace(start,end,folderName,str){
    const startIndx = str.indexOf(start);
    const altStart = start.replace(/[!?\[\]]/g,"_");
    const altEnd = end.replace(/[!?\[\]]/g,"_");
  
    if(startIndx!=-1) {
      const endIndx= str.indexOf(end);
      const middle= str.substring(startIndx+start.length,endIndx);
      const altMiddle = middle.replace(".","_");
      if(middle.includes(".")) {
        const splitMiddle = middle.split(".");
        const configGroup = splitMiddle[0];
        const configID = splitMiddle[1];
        if(Embeds.config[folderName][configGroup]) {
          if(Embeds.config[folderName][configGroup][configID]) {
            const replaceMiddle = Embeds.config[folderName][configGroup][configID]
            str= str.replace(start+middle+end,replaceMiddle)
          }
          else str = str.replace(start+middle+end,altStart+altMiddle+altEnd);
        }
        else str = str.replace(start+middle+end,altStart+altMiddle+altEnd);
      }
      else {
        if(Embeds.config[folderName][middle]) {
          str= str.replace(start+middle+end,"");
        }
        else str = str.replace(start+middle+end,altStart+altMiddle+altEnd);
      }
      str= Embeds._recursiveReplace(start,end,folderName,str);
    }
    return str;
  }

  static getAllEmbedded() {
    return Embeds.parsedFiles;
  }
  static getEmbedded(folderName) {
    return Embeds.parsedFiles[folderName];
  }
  static getLoadCalls() {
    return Embeds.tags["load"];
  }
  static getTickCalls() {
    return Embeds.tags["tick"];
  }
}
module.exports = Embeds;
