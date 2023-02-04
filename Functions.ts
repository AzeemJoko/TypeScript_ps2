//Creating a function which accepts a string parameter, and returns a count of the number of characters in that string
function str_len(value:string):number{
    let num: number = value.length;
    return num;
}

//Creating a function which accepts a string parameter, and returns a count of the number of characters in that string, excluding spaces
function str_len_nospaces(value:string):number{
    let num:number = value.replace(/\s+/,"").length;
    return num;
}

console.log("String length with spaces and everything is: "+str_len("Test 1"));
console.log("String length with spaces not included in the count: "+ str_len_nospaces("Test 2"));

//Combine both function created in 1 and 2, into one function which accepts an optional parameter, so character count on input string can include or exclude spaces.
function str_len_both(value:string, spaces?:boolean):number{
  //note ? for optional parameter,
//so will default to false due to
//code in the function, but I could
//change from optional and provide
//a default to the parameter by writing
// the signature as
//function str_len_both(value: string, spaces: boolean=false): number{
    let num:number;
    if (spaces){
        num = value.replace(/\s+/,"").length;
    }else{
        num = value.length;
    }
    return num;
}

console.log("Function combined: String length with spaces and all is: "+str_len_both("test 1",false));
console.log("Function combined: String length with spaces not included in the count: "+str_len_both("test 1", true));
