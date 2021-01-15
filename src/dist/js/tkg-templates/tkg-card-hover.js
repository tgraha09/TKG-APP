import {TKG} from './tkg.js';
import $ from "jquery";


//https://www.youtube.com/watch?v=F36tmlmnYvg&list=PLBsXg60UJjlrI_8w8-_vRl-A1NbfSmE1P&index=1&ab_channel=OnlineTutorials
export class TKGHoverCard extends TKG{
    constructor(){
        super(TKG)

        //console.log('CONST');
        
        let children = []
        this.instance = this
        let instance = this.instance
        this.WatchDomInsert(function (params) {
            if(params != undefined){
                //console.log('Moving Children');
                instance.BuildCard()
                params.forEach(element => {
                    //console.log(element);
                    //this.PushContent(element)
                    instance.PushContent(element.outerHTML)
                });
            }
            else{
                instance.BuildCard()
            }
            
        })
        
        //console.log(this.prechildren);
        


        //this.Update()
    } 

    

    

    connectedCallback() {
        
        
        //console.log('CB');
        
        this.init = false
        this.className = 'container'
        this.style.visibility = 'hidden'
        this.card = this.CreateElement('div')
        this.card.className = 'card'

        this.content = this.CreateElement('div')
        this.content.className = 'content'

        this.tagNameWhitelist.push('container')
        this.tagNameWhitelist.push('card')
        this.tagNameWhitelist.push('content')
        
    }

    BuildCard(){
        console.log('BUILDING');
        let bkgcolor = this.style.backgroundColor
        let color =  this.style.color
        console.log(bkgcolor);
        console.log(color);
        if(color == undefined){
            console.log('GEN COLOR');
            console.log(this.cardColor);
            this.cardColor = this.GenRandCardColor(); 
            document.documentElement.style.setProperty('--clr', this.cardColor)
            $(this).css('color', 'unset')
        }
        else{
            console.log('CPY COLOR');
            console.log(color);
            document.documentElement.style.setProperty('--clr', color)
            $(this).css('color', 'unset')
        }
        if(bkgcolor == undefined){
            console.log('GEN BKGCOLOR');
           // console.log(bkgcolor);
            this.bkgColor = this.GenRandCardColor(); 
            $(this).css('background-color', this.bkgColor)
            document.documentElement.style.setProperty('--bkgrndC', this.bkgColor)
           // $(this).css('background-color', 'unset')
            
        }
        else{
            console.log('CPY BKGCOLOR');
            //console.log(bkgcolor);
            $(this).css('background-color', bkgcolor)
            document.documentElement.style.setProperty('--bkgrndC', bkgcolor)
           // $(this).css('background-color', 'unset')
        }
        /*
        if(bkgcolor == undefined){
            console.log('GEN BKGCOLOR');
            console.log(this.cardColor);
            this.cardColor = GenRandCardColor(); 
            this.card.style.setProperty('--bkgrndC', this.cardColor)
           // $(this).css('background-color', 'unset')
            
        }
        else{
            console.log('CPY BKGCOLOR');
            console.log(bkgcolor);
            this.card.style.setProperty('--bkgrndC', bkgcolor)
           // $(this).css('background-color', 'unset')
        }*/
        this.card.innerHTML = this.content.outerHTML
        this.innerHTML = this.card.outerHTML
        this.init = true
        
    }

    PushContent(_content){

        if(this.content == undefined){
            //console.log('No Content');
            
        }
        
        this.content.innerHTML += _content
        this.card.innerHTML = this.content.outerHTML
        //this.card.style.width = this.css_width
        //this.content.style.width = this.css_width
        this.innerHTML = this.card.outerHTML
        //this.style.width = this.css_width

        this.css_width = $(this.card).css('width', 'initial')
        if($(this).css('padding') != ''){
            let padding = $(this).css('padding')
            console.log(padding);
            document.documentElement.style.setProperty('--contpad', padding);
            $(this).css('padding', '0')
           // $(this).css('padding', 'unset')
            //$(this.card).css('padding', padding)
            //this.card.style.padding = padding
            //$(this).css('padding')
            //$(this).css('padding') = ''
            //console.log(padding);
        }
        //console.log(this.css_width);
        //console.log(this.css_width);
    }

    SetContent(_content){
        //if()
        if(this.content == undefined){
            //console.log('No Content');
        }
        this.content.innerHTML = _content
        this.card.innerHTML = this.content.outerHTML
        this.innerHTML = this.card.outerHTML  
    }  
}


customElements.define('tkg-card-hover', TKGHoverCard);

