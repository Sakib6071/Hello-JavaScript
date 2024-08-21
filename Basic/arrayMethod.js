let methodArray=['Messi', 'Gavi', 'Lamin'];
methodArray.push('Pedri');
methodArray.push('Fermin');
console.log(methodArray);

methodArray.pop();
console.log(methodArray);

methodArray.shift();
console.log(methodArray);

methodArray.unshift('Messi');
console.log(methodArray);

console.log(methodArray.indexOf('Gavi'));

methodArray.splice(1,3);
console.log(methodArray);

methodArray.push('Gavi', 'Lamin', 'Pedri');
console.log(methodArray);

methodArray.splice(2);
console.log(methodArray);

const anotherArrayFromSpliceMethod = methodArray.splice(1);
console.log(anotherArrayFromSpliceMethod);
console.log(methodArray);