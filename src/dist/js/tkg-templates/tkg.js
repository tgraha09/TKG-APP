import $ from "jquery";


export class TKG extends HTMLElement{
    constructor(){
        super()
        this.getChildren = $(this).children().prevObject[0].children
        //this.GetChildren()
        // Options for the observer (which mutations to observe)
        this.instance = this; 
        
        this.prechildren = []
        this.tagNameWhitelist = []
        this.tickCount = 0
        this.has_prechildren = undefined
        this.RUN = undefined
        this.instance = this
        this.first = 'unset'
        this.css_width = undefined
    } 



    connectedCallback() {
        
    }

    
    WatchDomInsert(callback) {
      let children = []
      

      let storageCount = 0;
      let cc = setInterval(() => {
       
          this.tickcount++
          children = this.children;
          //console.log(children.length);
          if (children.length > 0) {
            
            // console.log('JQ');
            let n_children = [];
            //console.log('Child Present');
            let idx = 0;
            // console.log('LEN');
            // console.log(this.getChildren.length);
            for (let child of this.getChildren) {
              if (child !== undefined) {
                //console.log(this.tagNameWhitelist)
                if (this.ArrayContainsItem(this.tagNameWhitelist, child.tagName) == false) {
                  n_children.push(child)
                  localStorage.setItem(idx + '_pre', child.outerHTML)
                  storageCount++
                  //this.removeChild(child)

                  // console.log(child);
                  idx++
                }
              }
            }
            

            //this.FunctionLoader()
            //this.func()
            //console.log(localStorage.length);
            for (let index = 0; index < localStorage.length; index++) {
                let el = $(localStorage.getItem(index + '_pre'))[0]
                this.prechildren.push(el)
                //console.log(el);
                
            }
            
            
            //console.log(this.prechildren);
            
            this.style.visibility = 'visible'
          }
          if(this.innerHTML == '' || children.length == 0){
            //console.log("Children Stored");
            clearInterval(cc)
            localStorage.clear()
            
            callback(this.prechildren)
            console.log('done');
          }

          


      }, 200);
      
      
    }

    

    IsDescendant(parent, child) {
      var node = child.parentNode;
      while (node != null) {
          if (node == parent) {
              return true;
          }
          node = node.parentNode;
      }
      return false;
    }
    
    

    NumChildrenFound(element, child){
      let amount = 0;
      $(this).children().each(function(i, c){
        console.log(c);
        if(c.isEqualNode(child)){
          amount++
        }
      })
      console.log(amount);
      return amount
    }
    
    PromiseHandler(promise, callback){
      promise.then(function(data){
        callback(data)
      })
    }
    SetObserveCheck(_value ){
      this.check = _value;
     // console.log(this.check);
    }

    GetStyle(element, property){
      if($(element).css(property) != '' || $(element).css(property) != undefined){
        //console.log(element);
        return $(element).css(property)
      }
      
    }

    CheckStyleExists(element, property){
      //console.log($(element).css(property));
      if($(element).css(property) == '' || $(element).css(property) == undefined
      || $(element).css(property) == 'rgba(0, 0, 0, 0)'){
        //console.log('NO STYLE');
        
        return false
      }
      else{
        return true
      }
    }
    ChangeStyle(element, property, value){
      $(element).css(property, value)
    }

    FadeIn(element, time, from, to, callback){
      this.ChangeStyle(element, 'opacity', from + '%')
      let num = from
      let trans = setInterval(() => {
        let val = this.GetStyle(element, 'opacity')
        //console.log('Opacity: '+ val + '%');
        
        //console.log(num);
        
        if(from < to){
          num++
          if(num >= to){
            clearInterval(trans)
            
          }
        }
        if(from > to){
          num--
          if(num <= to){
            clearInterval(trans)
            
          }
        }
        this.ChangeStyle(element, 'opacity', num + '%')
        callback()
      }, time);
    }

    ArrayContainsItem(arr, item) {
      let len = arr.length
      let found = 0;
      for (let i = 0; i < len; i++) {
        if (found == len)
          found++
      }
      if (found == len)
        return true
      return false
    }
    
    Observe(element){
      const config = { attributes: true, childList: true, subtree: true };
      const observer = new MutationObserver(this.CallBackObs);

      // Start observing the target node for configured mutations
      observer.observe(element, config);
      
      //console.log("Observing");
      //console.log(this.check);
      // Later, you can stop observing
      //observer.disconnect();
      return this.check
    }
 

    CreateElement(_ele){
        return document.createElement(_ele)
    }

    GenRandColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    
}
