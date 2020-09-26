let num1=null,num2=null,opp1=null,opp2=null;
const calculate=(num1,num2,opp)=>{
    switch (opp) {
        case "+":
            return (num1 + num2);
        case "-":
            return (num1 - num2);
        case "*":
            return (num1 * num2);
        case "/":
            return (num1 / num2);
        default:
            break;
    }
}
function disable_true(){
    document.querySelector(".plus").disabled="true";
    document.querySelector(".minus").disabled="true";
    document.querySelector(".mult").disabled="true";
    document.querySelector(".divide").disabled="true";
}
function disable_false(){
    document.querySelector(".plus").disabled="false";
    document.querySelector(".minus").disabled="false";
    document.querySelector(".mult").disabled="false";
    document.querySelector(".divide").disabled="false";
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
        document.querySelector(".screen2").innerText+= e.innerText;
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
                case "/":
                    four_operations("/")
                break;
                case "=":
                    if(!isNaN(num1)){
                        document.querySelector(".screen2").innerText = calculate(num1,num2,opp1);
                        opp1=null;
                        opp2=null;
                    }
                    document.querySelector(".screen1").innerText = " ";
                    break;
                case "DEL":
                    document.querySelector(".screen2").innerText = " ";
                    break;
                case "AC":
                    document.querySelector(".screen1").innerText = " ";
                    document.querySelector(".screen2").innerText = " ";
                    break;
                default:
                    break;
            } 
        }  
    })
})
