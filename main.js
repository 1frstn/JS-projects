const calculator=(()=>{
    const sum=(a,b)=> a+b
    const sub =(a,b) => a-b 
    const mul =(a,b) => a*b 
    const div =(a,b) => a/b 
    return {
        sum,
        sub,
        mul,
        div
    }
})();

console.log(calculator.sum(4,5));