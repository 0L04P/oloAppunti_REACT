//Generally the module name and the variable name both are same
//import { readFileSync, writeFileSync } from "fs";
import raw from './sample.txt';
export default function () {
	// fs.readFileSync
	// Sync' part allows the node to read the file synchronusly meaning all file is read first before going through other code.
	var sample = 'gyt'// readFileSync("sample.txt", "utf8");
	// utf8 is encoding format| you can find clean explanation here at http://stackoverflow.com/a/15128103/5388823
	console.log(sample);
    //usando AXIOS:
    fetch(raw)
        .then(r => r.text())
        .then(text => {
        console.log('text decoded:', text);
    });
	// this line of code creates an another file output.txt and writes the data in sample into the log.
	//writeFileSync("output.txt", sample);
};
