import {TKG} from './tkg.js';
import $ from "jquery";


//https://www.youtube.com/watch?v=F36tmlmnYvg&list=PLBsXg60UJjlrI_8w8-_vRl-A1NbfSmE1P&index=1&ab_channel=OnlineTutorials
export class TKGPager extends TKG{
    constructor(){
        super(TKG)

        //console.log('CONST');
        
        let children = []
        this.instance = this
        let instance = this.instance
        this.WatchDomInsert(function (params) {
            if(params != undefined){
                //console.log('Moving Children');
                instance.BuildPager()
                params.forEach(element => {
                    //console.log(element);
                    //this.PushContent(element)
                    if(instance.bttn.innerHTML == ''){
                        //console.log('No LABEL');
                        instance.SetLabel(element.outerHTML)
                    }
                    else{
                        //console.log('Has Label');
                        instance.PushContent(element.outerHTML)
                    }
                    
                });
            }
            else{
                instance.BuildPager()
            }
            
        })
        
        this.clickcount = 0;
        //let controller = document.getElementsByClassName('tkg-controller').item(0)
        //console.log(controller);
        
        
        //console.log(this.prechildren);
        


        //this.Update()
    } 

    

    

    connectedCallback() {
        
        this.clickcount = 0
        //console.log('CB');
        this.instance = this
        this.init = false
        this.className = 'tkg-pager'
        this.style.visibility = 'hidden'
        this.controller = this.CreateElement('tkg-controller')
        this.controller.className = 'tkg-controller'
        this.page = this.CreateElement('tkg-page')
        this.page.className = 'tkg-page'
        this.bttn = this.CreateElement('div')
        this.bttn.className = 'tkg-pg-bttn'
        this.content = this.CreateElement('tkg-pg-content')
        this.content.className = 'tkg-pg-content'
        this.content.canHide = false;
        this.tagNameWhitelist.push('tkg-controller')
        this.tagNameWhitelist.push('tkg-page')
        this.tagNameWhitelist.push('tkg-pg-bttn')
        this.tagNameWhitelist.push('tkg-pg-content')
        //this.tagNameWhitelist.push('div')
    }

    BuildPager(){
       // console.log(this.CheckStyleExists(this, 'background-color'));
        if(this.CheckStyleExists(this, 'background-color') == false){
            
            let col = this.GenRandColor()
           
            //this.ChangeStyle(this.pager, 'background-color', col)
            //this.ChangeStyle(this.content, 'background-color', col)
            //this.ChangeStyle(this, 'color', '');
        }
        

        
        //this.Update()
        this.init = true
        
    }

    PushContent(_content){

        if(_content == undefined){
            //console.log('No Content');
            return
        }
        
        this.content.innerHTML += _content
        

        this.css_width = $(this.card).css('width', 'initial')
        if($(this).css('padding') != ''){
            let padding = $(this).css('padding')
            //console.log(padding);
            document.documentElement.style.setProperty('--contpad', padding);
            $(this).css('padding', '0')
           
        }
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
        this.bttn.innerHTML = _content
        this.Init()
    }

    Init(){
        //console.log();
        let instance = this;
        let pagers = document.getElementsByTagName('tkg-pager')
        
        for (let i = 0; i < pagers.length; i++) {
            pagers[i].count = i
            if(i == 0){
                let pager = pagers[i];

               // console.log($(pager).css('height'));
                this.marg = '0px'
                if($(pager).css('margin') != '0px'){
                    this.marg = $(pager).css('margin')
                }
                //$(pager).css('margin', 0)
                let controllers = document.getElementsByClassName('tkg-controller')
                if(controllers.length == 0){
                    //console.log('No Controller');
                    $(this.controller).appendTo(pager)
                    //console.log($(pager).css('height'));
                }
                else if(controllers.length > 0){
                    //console.log('Controller Found');
                    let ctrl = controllers[0]
                    $(this.page).appendTo(ctrl)
                    

                    let main = $(ctrl).parent('.tkg-pager')[0]
                    let bk = $(main).css('background-color')
                    $(main).css('background-color', 'unset')
                    //console.log(bk);
                    if(bk != '' || bk != undefined || 
                    bk != 'unset' || bk != 'rgb(0, 0, 0)'){
                        //$(this.bttn).css('background-color', bk)
                    }
                    


                    $(this.bttn).appendTo(this.page)
                    $(this.content).hide().appendTo(this.page)
                   // console.log($('.tkg-pager').css('width'));
                    
                    this.page.onclick = (e) =>{
                        let bttns = document.getElementsByClassName('tkg-pg-bttn')
                        for (let x = 0; x < bttns.length; x++) {
                            let bt = bttns[x];
                            let c = bt.nextSibling
                            let last_bttn = bttns[bttns.length-1]
                            //let pg = ctrl
                            //console.log();
                            if ($(bt).is(':hover') == true) {
                              // console.log(this.marg);
                                
                                //console.log(c.textContent);
                                if($(c).css('display') == 'none'){
                                    //console.log('HIDDEN');
                                    let h = parseFloat($(bt).css('height')) + 
                                    (2*parseFloat($(bt).css('margin')))
                                    let mar = (2*parseFloat($(bt).css('margin')))
                                    let mar_raw = $('.tkg-pager').css('margin')
                                    //console.log(mar_raw);
                                    var top = bt.getBoundingClientRect().bottom
                                    let w = parseFloat($(bt).css('width')) * bttns.length
                                    //let d_w = ctrl.getBoundingClientRect().left 
                                    let left = ctrl.getBoundingClientRect().left
                                    let right = ctrl.getBoundingClientRect().right
                                    let bot = ctrl.getBoundingClientRect().bottom
                                    console.log($(bt).css('height'));
                                    
                                    $(c).css('margin-top', 0)
                                    //$(c).css('margin-left', mar_raw)
                                    //$(c).css('margin-right', mar_raw)
                                    //$(c).css('margin-bottom', mar_raw)
                                    $(c).css('top', $(bt).css('height'))
                                    //console.log(ctrl);
                                    $(c).css('left', -left)
                                    $(c).css('width', $(ctrl).css('width'))
                                    $(c).css('bottom', bot)
                                   // $('').css('margin')
                                    $(c).fadeIn(100)
                                }
                                else{
                                   // console.log('SHOWN');
                                    $(c).fadeOut(100)
                                }
                                
                            }else{
                                $(c).fadeOut(100)
                            }
                        }
                        
                    }
                    //console.log(ctrl);
                }
               
                
            }
            
        }
        
        
        if(this.count != 0){
        
           this.remove()
           
        }
    }

    

    
}


customElements.define('tkg-pager', TKGPager);




