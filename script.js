var display = document.querySelector("input");
var buttons = document.querySelectorAll("button");
// display.value = 5;
// console.log(buttons)
var BtnArray = Array.from(buttons);
// console.log(BtnArray);
string = '';
BtnArray.forEach(element => {
    element.addEventListener('click',(e) => {
        console.log(e.target.innerHTML);
        
        
        if(e.target.innerHTML == 'AC')
            {
                string = '';
                display.value = string;
            }
            else if(e.target.innerHTML == 'Del'){
                string = string.substring(0,string.length-1);
                display.value = string;
            }
            else if(e.target.innerHTML == '='){
                string = eval(string);
                display.value = string;
            }
            else{
                string+= e.target.innerHTML;
                display.value = string;
            }
        
    })
});