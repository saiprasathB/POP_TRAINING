function twoNum()
{
    console.log(5+6);
}
twoNum()
// ----------------------------------------------------------------
function threenum(a,b,c)
{
    console.log(a+b+c);
}
threenum(1,2,3)
// ----------------------------------------------------------------
function returnname()
{
    return "SASIKUMAR"
}
console.log(returnname());
// ----------------------------------------------------------------
function returnnamewithsome(name)
{
    str = name + " is good boy" ;
    return str ;
}
res = returnnamewithsome("SASIKUMAR")
console.log(res);

// ----------------// ----------------// ----------------// ----------------// ----------------// ----------------
object = {
    "name" : "sai",
    "age" : "19",
    "hobbie" : "movies",
    "phone" : "realme",
    "laptop" : "macbook"
}

for (i of Object.values(object)) {
    console.log(i);
}
// --------------------------------------------------
let printhello = (name) => "Hello " + name;
console.log(printhello("World"));
