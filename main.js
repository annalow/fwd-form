const radio = document.querySelectorAll('[name="vibe"]');
const submitButton = document.querySelector('#button');
const result = document.querySelector('#result');
const radioOptions = document.querySelector('#radio');

radioOptions.addEventListener('click',()=>{
    
    for (var i=0; i<radio.length; i++) {
        const forLabel = radio[i].id;
        const label = document.querySelector('[for="'+forLabel+'"]')
        const img = label.querySelector('img');
        
            if (radio[i].checked){
               //console.log(img); 
                img.style.border = '1vh solid black';
            } else{
                img.style.border = 'none';
            }
        }
})

    


submitButton.addEventListener('click', ()=> {
    //console.log("button clicked");
let style, weight; 

// slider input
const sliderInput = document.querySelector('#slider-input');
const slider = sliderInput.value;
//console.log(sliderInput.value);

if(slider >= 66){
    //light weight and thin
    weight = 'light';
} else if(slider < 66 && slider > 33){
    //normal
    weight = 'normal';
}
else if(slider <= 33){
    //heavy weight & wide
    weight = 'heavy';
}


//radio input
// used http://jennifermadden.com/javascript/loopRadio.html to help
    const radio = document.querySelectorAll('[name="vibe"]');
    //console.log("this is radio: " + radio);

    for (var i=0; i<radio.length; i++) {
        
    //console.log("this is option: "+i);
        if (radio[i].checked){
            style = radio[i].id;
            //console.log(radio[i].id); 
            // console.log(style);
        }

    //setting fontFamily
        if (style == 'sans-serif'){
            //console.log('style if is working')
            result.style.fontFamily = "Palanquin,sans-serif";
            if (weight == 'light'){
                console.log('light weight read');
                result.style.fontWeight = '100';
            } else if (weight == 'normal'){
                result.style.fontWeight = '400';
            } else if (weight == 'heavy'){
                result.style.fontWeight = '700';
            }
        }
        if (style == 'serif'){
            result.style.fontFamily = "BioRhyme,serif";
            if (weight == 'light'){
                result.style.fontWeight = '200';
            } else if (weight == 'normal'){
                result.style.fontWeight = '400';
            } else if (weight == 'heavy'){
                result.style.fontWeight = '700';
            }
        }
        if (style == 'script'){
            result.style.fontFamily = "'Dancing Script', cursive";
            if (weight == 'light'){
                result.style.fontWeight = '100';
            } else if (weight == 'normal'){
                result.style.fontWeight = '500';
            } else if (weight == 'heavy'){
                result.style.fontWeight = '900';
            }
        }
        if (style == 'hand'){
            result.style.fontFamily = "Mali, cursive"; 
            if (weight == 'light'){
                result.style.fontWeight = '200';
            } else if (weight == 'normal'){
                result.style.fontWeight = '400';
            } else if (weight == 'heavy'){
                result.style.fontWeight = '700';
            }
        }
        if (style == 'mono'){
            result.style.fontFamily = "'Source Code Pro', monospace";
            if (weight == 'light'){
                result.style.fontWeight = '200';
            } else if (weight == 'normal'){
                result.style.fontWeight = '400';
            } else if (weight == 'heavy'){
                result.style.fontWeight = '900';
            }
        }

    }



//color input
    const colorInput = document.querySelector('#color-input');
    // const form = document.querySelector('#color-input');
    //turn name element (form) above this color
    //form.style.backgroundColor = colorInput.value;
    console.log(colorInput.value);


//text input
    const textInput = document.querySelector('#text-input');
    console.log(textInput.value);

//hide form
  const form = document.querySelector('form');
  form.style.display = 'none';

//show result
  const resultContainer = document.querySelector('.resultContainer');
  resultContainer.style.display = 'flex';

//modify result based on form
  
  result.innerHTML = textInput.value;

  result.style.color = colorInput.value;
});