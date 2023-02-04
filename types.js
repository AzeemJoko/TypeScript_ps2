//Basic Types of typescript
//Boolean
var isDone = false;
console.log("Value assigned to isDone: " + isDone);
//Number
var decimal = 6;
console.log("Value assigned to decimal is: " + decimal);
//String
var fullName = "Azeem Joko";
console.log("Hi my full name is: " + fullName);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Number " + (i + 1) + " is: " + list[i] + ".");
    //enum
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    var colorName = Color[2];
    var c = Color.Green;
    console.log("Enum: Value of colorName is: " + colorName);
    console.log("Enum: Value of c is: " + c);
    console.log("Enum: Name of c is: " + Color[c]);
    //tuple
    var x = void 0;
    x = ["hello", 10];
    console.log("Tuple example: " + x[0].substr(1));
}
