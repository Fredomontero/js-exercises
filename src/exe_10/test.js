let regex = /[^A-Za-z0-9(),]/;
let str = "ABCabkjdiusdusd548921()),,,,.";
if(regex.test(str)){
  console.log("Invalid characters");
}else{
  console.log("All characters are valid");
}