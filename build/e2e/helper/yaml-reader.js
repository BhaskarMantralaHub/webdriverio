"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFilesYaml = exports.readAll = void 0;
const fs_1 = __importDefault(require("fs"));
const yaml_1 = __importDefault(require("yaml"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function readAll() {
    const dir = `/Users/venkata.mantrala/projects/webdriverio/config/`;
    const response = loadFilesYaml(dir);
    console.log(process.env.MODULE);
    console.log(response);
}
exports.readAll = readAll;
function loadFilesYaml(testFolder) {
    let variables = {};
    let moduleConfigFile = undefined;
    try {
        fs_1.default.readdirSync(testFolder).forEach((file) => {
            /* Keep + uncomment and debug later*/
            // console.log(`___________________________ - ${file}`);
            if ((file.toString().includes('yaml') || file.toString().includes('yml')) && !file.toString().includes('.ts')) {
                if (file.includes(process.env.MODULE || 'UNDEFINED'))
                    moduleConfigFile = file;
                variables = Object.assign(Object.assign({}, variables), yaml_1.default.parse(fs_1.default.readFileSync(testFolder + file, { encoding: 'utf-8' })));
            }
        });
    }
    catch (e) {
        throw new Error(`Yaml files did not load: ${e}`);
    }
    if (process.env.MODULE != undefined && moduleConfigFile) {
        console.log('Loading module config file');
        variables = Object.assign(Object.assign({}, variables), yaml_1.default.parse(fs_1.default.readFileSync(testFolder + moduleConfigFile, { encoding: 'utf-8' })));
    }
    return variables;
}
exports.loadFilesYaml = loadFilesYaml;
readAll();
