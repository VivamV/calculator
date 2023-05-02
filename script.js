let userinput=document.getElementById('inputfield');
let allbuttons=document.querySelectorAll('button');
let arr1=Array.from(allbuttons);
let ansstore="";

arr1.forEach(button => {
    // adding event listener
button.addEventListener('click',(e) => {  

    if(e.target.innerHTML=='=')
    {ansstore=eval(ansstore);
    userinput.value=ansstore;
    }
    else if(e.target.innerHTML=='DEL')
    {
     ansstore=ansstore.substring(0,ansstore.length-1);  //trimming from initial value to second last value
     userinput.value=ansstore;
    }
    else if(e.target.innerHTML=='AC')
    {ansstore="";
     userinput.value=ansstore;
    }
   
    else
    {ansstore+=e.target.innerHTML;
    userinput.value=ansstore;
    }
})
})
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})