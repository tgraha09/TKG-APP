import {TKG} from './tkg.js';
import $ from "jquery";
import { createElement } from 'react';


//https://www.youtube.com/watch?v=F36tmlmnYvg&list=PLBsXg60UJjlrI_8w8-_vRl-A1NbfSmE1P&index=1&ab_channel=OnlineTutorials
export class TKGAccordian extends TKG{
    constructor(){
        super(TKG)
        
        
        
    }  

    

    

    connectedCallback() {
        
        this.clickcount = 0
        //console.log('CB');
        this.instance = this
        this.init = false
        this.className = 'tkg-accordian'
        this.class = 'tkg-accordian'
        this.tagNameWhitelist.push('.ta-sub-bttn')
        this.tagNameWhitelist.push('.ta-sub-cont')
        
        var self = this
        document.addEventListener('DOMContentLoaded', function() {
            self.pre = undefined;
            let sub = $(self).find('.ta-sub-ul')
            if(sub != undefined && sub.children != undefined){
                if(sub.children().length > 0){
                    console.log('Has Children');
                    //console.log(self.className);
                    
                    let found_count = 0
                    let children = sub.children()
                    console.log(children);
                    self.savedChildren = []
                    let bttn_count = 0
                    for (let i = 0; i < children.length; i++) {
                        let child = children[i];
                        //console.log();
                        //console.log(child.className);
                        if(child.className == 'ta-sub-cont'){
                            console.log('Saving content');
                            $(child).hide()
                            self.savedChildren.push(child.cloneNode(true))
                            
                            //console.log(child);
                            //$(child.className).remove()
                            child.innerHTML = ''
                        }
                        
                        if(child.className == 'ta-sub-bttn'){
                            bttn_count++
                            child.idx = bttn_count
                            $(child).on("click", function(){
                                let bottom = child.getBoundingClientRect().bottom
                                let left = child.getBoundingClientRect().left
                                let current = this
                                let content = self.savedChildren
                                let fadetime = $(self).css('transition')
                                console.log(fadetime);
                                for(let u = 0; u < content.length; u++){
                                    let saved = content[u]
                                    if(u != (current.idx - 1)){
                                        $(saved).fadeOut(100).remove()
                                    }
                                    if(u == (current.idx - 1)){
                                        
                                        let ul = $(self).find('.ta-sub-ul')
                                        $(saved).appendTo(ul)
                                        //console.log(saved);
                                        if ($(saved).css('display') != 'none'){ //hide
                                            //console.log(bottom);
                                            
                                            $(saved).fadeOut(100)
                                        }
                                        if ($(saved).css('display') == 'none'){ //show 
                                            $(saved).css('top', bottom)
                                            $(saved).css('left', left)
                                            $(saved).fadeIn(100)
                                        }
                                        $('.ta-sub-ul').children('.ta-sub-cont').each(function(i, item){
                                            //console.log(item.className);
                                            if($(item).css('display') == 'none' && item.isEqualNode(saved) == false){
                                                //console.log('delete');
                                                $(item).remove()
                            
                            
                                            }
                                        })
                                    }
                                    
                                    
                                }
                                //let curr_cont = $(current).next('.ta-sub-cont')[0]
                                
                               
                                //$(current).fadeIn(100)
                        });
                        if(child.innerHTML == ''){
                            $(child).remove()    
                        }
    
                        }
                        
    
                    }
                    
                    
                }
            }
            
            
        });
        
    }

    Build(){
       
        let bttn = $(this).children('.ta-sub-bttn')
        if(bttn.length == 0){
            console.log('creating button');
            console.log(bttn);
        }
        this.init = true
        
    }

    PushContent(_content){

        if(_content == undefined){
            //console.log('No Content');
            return
        }
        
        this.content.innerHTML += _content
        
        this.Init()
        //console.log(this.css_width);
        //console.log(this.css_width);
    }

    SetContent(_content){
        //if()
        if(_content == undefined){
            return
            //console.log('No Content');
        }
        this.content.innerHTML = _content
        this.Init()
    }  
    SetLabel(_content){
        //if()
        if(_content == undefined){
            return
            //console.log('No Content');
        }
        //this.bttn.innerHTML = _content
        this.Init()
    }

    Init(){
        //console.log();
        let instance = this;
        
        
    }

    
}




customElements.define('tkg-accordian', TKGAccordian);




