let runningTotal = 0;
let buffer = "0";
let previousOperator;


const screen = document.querySelector('.screen');
///this fucniton recognizes is this a number or a symbol.
function buttonClick(value)  {
    if( isNaN(value))
    {
        // this is a number...u can uase a typeof  parseInt(value) to find its type
          handleSymbol(value);
    }
    else
    {
        //this is a number
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    
    switch(symbol)
    {
        case 'C':
        buffer = '0';
        runningTotal = 0;
        break;
        case '=':
        if(previousOperator === null)
        {
            // need to numbers to do math
            return;
        }
        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer =runningTotal;
        runningTotal =0;
        break;
        case '+':
        case '-':
        case '×':
        case '÷':          
        handleMath(symbol);
        break;

    }   
}
function handleMath(symbol)
{
    
   if(buffer === '0'){
       return;
   }
   const intbuffer = parseInt(buffer);/////alternative const intbuffer=+buffer
    console.log('intbuffer',intbuffer);
   if(runningTotal === 0)
   {
       runningTotal = intbuffer;
   }
   else{
           flushOperation(intbuffer);


   }

   previousOperator = symbol;

   buffer = '0'

 }
 function  flushOperation(intbuffer){
     if(previousOperator === '+')
     {
         runningTotal += intbuffer;
     }
     else if(previousOperator === '-')
     {
         runningTotal -= intbuffer;
     }
     else if (previousOperator === '×')
     {
         runningTotal *= intbuffer;
     }
     else{
         runningTotal /= intbuffer;

     }
     console.log("running total",runningTotal)
 }
///numbed handling
function handleNumber(numberString){
if(buffer === "0")
  {
    buffer = numberString;
 }
else{
    buffer += numberString; 
  }
  

}
/// this is a fuciton of a pressed button
function init()
{
document.querySelector('.calc-buttons')
.addEventListener('click' ,function(event){
buttonClick(event.target.innerText);

})

}
init();