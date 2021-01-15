import {TKG} from './tkg.js';
import $ from "jquery";

export class TKGButton extends TKG{
    constructor(){
        super(TKG)
        //console.log('CHILD - Button');
        //this.BuildButton()
        //this.Update()
        //this.clickcount = 0;
        //console.log('CONST');
        
        let children = []
        this.instance = this
        let instance = this.instance
        this.WatchDomInsert(function (params) {
            if(params != undefined && instance.init == false){
                //console.log('Moving Children');
                let outer = ''
                instance.BuildButton()
                //instance.BuildCard()
                params.forEach(element => {
                   // console.log(element);
                    outer += element.outerHTML
                    //this.PushContent(element)
                    //instance.PushContent(element.outerHTML)
                });

                instance.SetLabel(outer)
                //console.log(outer);
            }
            else if(params == undefined && instance.init == false){
                //console.log('Normal Build');
                //instance.BuildButton()
                //instance.BuildCard()
            }
            
        })
        
    } 
    
    connectedCallback() {

        this.bttn = document.createElement('tkg-sub-bttn')
        this.bttn.className = 'tkg-sub-bttn'
        this.label = document.createElement('tkg-sub-bttn-label')
        this.label.className = 'tkg-sub-bttn-label'

        this.init = false
        this.style.visibility = 'hidden'

        this.tagNameWhitelist.push('tkg-bttn')
        this.tagNameWhitelist.push('tkg-sub-bttn-label')
        this.tagNameWhitelist.push('tkg-sub-bttn')
        
    }

    BuildButton(){
        
        
        let bttn = this.bttn
        //bttn.innerHTML = this.label.outerHTML
        this.innerHTML = bttn.outerHTML

        this.init = true
        this.style.visibility = 'visible'
    }

    

    Update(){
        let bttn = this.bttn
       // bttn.innerHTML = this.label.outerHTML
        this.style.width = bttn.style.width
        this.style.height = bttn.style.height
        this.innerHTML = bttn.outerHTML
        this.style.visibility = 'visible'
    }

    SetLabel(_label) {
        if(_label == undefined){
            //console.log('No Label');
            return
        }
        //console.log(typeof _label);
        //console.log(_label);
        if(this.bttn == undefined){
            //console.log('No Button');
        }
        else{
            this.bttn.innerHTML = _label
            this.Update()
        }
        //\
    }

    
    
}
customElements.define('tkg-bttn', TKGButton);