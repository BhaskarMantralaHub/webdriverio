import fs from "fs";
import yaml from "yaml";
import dotenv from "dotenv"

dotenv.config();
export function readAll() {
    const dir = `/Users/venkata.mantrala/projects/webdriverio/config/`
    const response = loadFilesYaml(dir);
    console.log(process.env.MODULE)
    console.log(response);
}

export function loadFilesYaml(testFolder: string) {
    let variables = {}
    let moduleConfigFile = undefined;
    try {
        fs.readdirSync(testFolder).forEach((file) => {
            /* Keep + uncomment and debug later*/
            // console.log(`___________________________ - ${file}`);
            if ((file.toString().includes('yaml') || file.toString().includes('yml')) && !file.toString().includes('.ts')) {
                if (file.includes(process.env.MODULE || 'UNDEFINED')) moduleConfigFile = file;
                variables = {...variables, ...yaml.parse(fs.readFileSync(testFolder + file, { encoding: 'utf-8' }))};
            }
        });
    } catch (e) {
        throw new Error(`Yaml files did not load: ${e}`);
    }
    if (process.env.MODULE != undefined && moduleConfigFile) {
        console.log('Loading module config file');
        variables = {...variables, ...yaml.parse(fs.readFileSync(testFolder + moduleConfigFile, { encoding: 'utf-8' }))}
    }
    return variables;
}

readAll();