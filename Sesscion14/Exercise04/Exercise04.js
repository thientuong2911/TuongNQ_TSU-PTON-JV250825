let original = {
    name: 'Bob',
    age: 30,
};
let copiedObject = Object.assign({}, original);
copiedObject.name = 'Charlie'
console.log(original);
console.log(copiedObject);