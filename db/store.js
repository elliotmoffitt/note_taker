// Class for your notes

// Define functions that read, write, and delete to JSON
const util = require("util");
const fs = require("fs");
// const uuidv1 = require("uuid/v1");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class store {
    read() {
        return readFileAsync("./db/db.json", "utf8");
    }
    write(note) {
        return writeFileAsync("./db/db.json", JSON.stringify(note))
    }
    

    addNotes(note) {
        return this.read()
            .then(data => JSON.parse(data))
            .then(notes => [...notes, note])
            .then((newNotes) =>
                this.write(newNotes)
            );

    }

    getNotes() {
        return this.read()
            .then((notes) => JSON.parse(notes));
    }

    deleteNotes(id) {
        return this.addNotes()
            .then(notes => this.write(notes.filter(note => note.id != id
              )))
    }
}

module.exports = new store();