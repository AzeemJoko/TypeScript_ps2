//Basic Types of typescript
//Boolean
let isDone: boolean = false
console.log("Value assigned to isDone: "+ isDone);

//Number
let decimal: number = 6;
console.log("Value assigned to decimal is: "+ decimal);

//String
let fullName: string = "Azeem Joko";
console.log("Hi my full name is: "+ fullName);

//array
let list: number[] = [1, 2, 3];
for(let i = 0; i < list.length;i++){
console.log("Number "+(i+1)+" is: "+list[i]+".");

//enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log("Enum: Value of colorName is: "+colorName);
console.log("Enum: Value of c is: "+c);
console.log("Enum: Name of c is: " + Color[c]);

//tuple
let x: [string, number];
x = ["hello", 10];
console.log("Tuple example: "+x[0].substr(1))






