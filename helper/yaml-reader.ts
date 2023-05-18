import fs from "fs";
import yaml from "yaml";
export function readAll() {
    const dir = `/Users/venkata.mantrala/projects/webdriverio/config/`
    const response = loadFilesYaml(dir);
    console.log(response);
}

export function loadFilesYaml(testFolder: string) {
    let variables = {}
    try {
        fs.readdirSync(testFolder).forEach((file) => {
            /* Keep + uncomment and debug later*/
            // console.log(`___________________________ - ${file}`);
            if ((file.toString().includes('yaml') || file.toString().includes('yml')) && !file.toString().includes('.ts')) {
                variables = {...variables, ...yaml.parse(fs.readFileSync(testFolder + file, { encoding: 'utf-8' }))};
            }
        });
    } catch (e) {
        throw new Error(`Yaml files did not load: ${e}`);
    }
    return variables;
}

readAll();