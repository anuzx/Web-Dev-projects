let input = document.getElementById('inputBox'); //selects exactly one element by its unique id
let buttons = document.querySelectorAll('button'); //selects all elements that match a css selector

let string = " "; //to store result and show in input

//we want all buttons in our code so we will make array of buttons 

let arr = Array.from(buttons);

//now we can use loop on this 

arr.forEach(button =>{
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }

       else if(e.target.innerHTML == 'π'){
        
        string+='3.14'
        input.value=string;
       }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
else {string += e.target.innerHTML ;
        input.value = string;}
        
    })
})