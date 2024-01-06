import * as ts from "typescript";
import {Project} from "ts-morph";

const project = new Project({
    compilerOptions:{
        target: ts.ScriptTarget.ES2015,
        module: ts.ModuleKind.CommonJS,
    }
})

export default project;