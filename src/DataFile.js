import fs from 'fs';

const FILE_NAME = 'data.csv';

class DataFile {

    constructor(path) {
        this.path = path;
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }

    writeLine(line) {
        fs.appendFile(this.path + FILE_NAME, line, (err) => {
            if (err) throw err;
        });
    }
}
export default DataFile;