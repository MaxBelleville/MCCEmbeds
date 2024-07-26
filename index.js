const fs = require("fs/promises");
const path = require("path");
const AdmZip = require("adm-zip");
class Embeds {
  static parsedFiles = {};
  static tags = { load: [], tick: [] };

  static readEmbeddedFolder(folderName) {
    const fullpath = path.join(__dirname, "/" + folderName + ".zip");
    try {
      if (!Embeds.parsedFiles[folderName]) {
        Embeds.parsedFiles[folderName] = {};
        this.zip = new AdmZip(fullpath);
        for (const zipEntry of this.zip.getEntries()) {
          if (zipEntry.name == "require.txt") {
            Embeds.readRequirements(zipEntry);
          } else {
            Embeds.readItems(Embeds.parsedFiles[folderName],zipEntry);
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
  static readItems(root,entry) {
    const arr = entry.entryName.split("/");
    const end = arr.pop();
    for (const section of arr){
      if(!root[section]) root[section]={}
      root = root[section];
    }
    root[end] = this.zip.readAsText(entry,'utf8');
  }
  static readRequirements(entry) {
    const lines = this.zip.readAsText(entry, "utf8").split(/\r?\n/);
    for (const line of lines) {
      if (line.startsWith("r-")) {
        const lib = line.replace("r-", "");
        if (!Embeds.parsedFiles[lib]) {
          return lib;
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

  static getEmbedded() {
    return Embeds.parsedFiles;
  }
  static getLoadCalls() {
    return Embeds.tags["load"];
  }
  static getTickCalls() {
    return Embeds.tags["tick"];
  }
}
module.exports = Embeds;
