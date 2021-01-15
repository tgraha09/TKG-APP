import {TKG} from './tkg-templates/tkg';
import $ from "jquery";
import { createElement } from 'react';
var fs = require('fs');


export class TKGHelpers{
    constructor(){
       
        
        
        
    }  

    FileExists(_path){
        return fs.existsSync(_path)
    }

    WriteToFile(){


    }
}