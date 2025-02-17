// callback function
function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
}   
function callback() {
    console.log('I am callback function');
}
greet('Amit', callback);
// Output:
