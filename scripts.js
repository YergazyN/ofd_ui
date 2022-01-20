
// Input label animation

const inputs = document.querySelectorAll('.form-input');

const labels = document.querySelectorAll('.input-label');

for(let i = 0; i < labels.length; i++){

    const label = labels[i];

    label.onclick = function(){
        this.parentNode.getElementsByClassName('form-input')[0].focus();
    }
}

for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];    
    
    element.onfocus = function(){        
        this.parentNode.getElementsByClassName('input-label')[0].style = "top: 8px";
                        
    }

    element.onblur = function(){
        this.parentNode.getElementsByClassName('input-label')[0].style = "top: 20px";
        if(this.value.length > 0){
            this.parentNode.getElementsByClassName('input-label')[0].style = "top: 8px";
        }
    }
}

// Input label animation