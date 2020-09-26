let num1=null,num2=null,opp1=null,opp2=null,equal=0,flow=0;
const calculate=(num1,num2,opp)=>{
    switch (opp) {
        case "+":
            return (num1 + num2);
        case "-":
            return (num1 - num2);
        case "*":
            return (num1 * num2);
        case "÷":
            return (num1 / num2);
        default:
            break;
    }
}
function four_operations(operator){
    if(isNaN(num1)){
        opp1=operator;
        document.querySelector(".screen1").innerText=num2+operator;
    }else{
        opp2=operator
        document.querySelector(".screen1").innerText = calculate(num1,num2,opp1)+opp2;
        opp1=opp2;
    }
    document.querySelector(".screen2").innerText = " ";
}
document.querySelectorAll(".number").forEach(e=>{
    e.addEventListener("click",()=>{
        console.log(opp2);
        //reset to screen2 after equal
        if(equal==1) 
        {   
            document.querySelector(".screen2").innerText=" ";
            document.querySelector(".screen2").innerText+= e.innerText;
            equal=0;
        }else
        document.querySelector(".screen2").innerText+= e.innerText;
        flow=(document.querySelector(".screen2").innerText).length;
        if(flow>17){
        document.querySelector(".screen2").style.fontSize="20px";
        }else document.querySelector(".screen2").style.fontSize="40px";
        if(flow>70){  // musst be fixed
             alert("Ama yeter artık zorlama!!! :)) Bu kısım diğer versiyonda düzeltilecektir.");
        }
    })
})
document.querySelectorAll(".operator").forEach(e=>{
    e.addEventListener("click",()=>{
        num1 = parseFloat(document.querySelector(".screen1").innerText);
        num2 = parseFloat(document.querySelector(".screen2").innerText);
        if(!isNaN(num2)){
            switch (e.innerText) {
                case "+":
                    four_operations("+")
                break;
                case "-":
                    four_operations("-")
                break;
                case "*":
                    four_operations("*")
                break;
                case "÷":
                    four_operations("÷")
                break;
                case "=":
                    if(!isNaN(num1)){
                        document.querySelector(".screen2").innerText = calculate(num1,num2,opp1);
                        opp1=null;
                        opp2=null;
                        equal=1;
                    }
                    document.querySelector(".screen1").innerText = " ";
                    break;
                case "DEL":
                    document.querySelector(".screen2").innerText = " ";
                    break;
                default:
                    break;
            } 
        }
        if(e.innerText=="AC"){
            document.querySelector(".screen1").innerText = " ";
            document.querySelector(".screen2").innerText = " ";
        }                 
    })
})
