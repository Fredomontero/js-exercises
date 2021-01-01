console.log("Testing...");

myArray = ["cero", "uno", "dos"];
myArray.myMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // imprime "cero,uno,dos"
myArray.myMethod(1); // imprime "uno"
setTimeout(myArray.myMethod, 1000); // imprime "[object Window]" después de 1 segundo
setTimeout(myArray.myMethod, 1500, "1"); // imprime "undefined" después de 1.5 segundos
// intentemos pasar el objeto 'this'
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // mismo error