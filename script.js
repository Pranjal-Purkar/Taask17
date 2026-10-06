var box=document.getElementById("output-box");
const divideNumbers=(a,b)=>{
return new Promise((resolve,reject)=>{
if(b===0){
reject("Division by zero is not allowed.");
}else{
resolve(a/b);
}
});
};
function runCase(num1,num2,exampleNumber){
console.log("Example "+exampleNumber);
console.log("Dividing "+num1+" by "+num2+"...");
box.innerHTML+="<b>Example "+exampleNumber+"</b><br>• Dividing "+num1+" by "+num2+"...<br>";
divideNumbers(num1,num2)
.then((res)=>{
console.log("Result: "+res);
box.innerHTML+="• Result: "+res+"<br><br>";
})
.catch((err)=>{
console.log("Error: "+err);
box.innerHTML+="• Error: "+err+"<br><br>";
});
}
runCase(10,2,1);
runCase(10,0,2);
runCase(20,4,3);
runCase(15,0,4);
runCase(50,5,5);