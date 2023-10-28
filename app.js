var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var addButton = document.getElementById('addbutton');
var textResultArr = [];
var numbResultArr = [];
function printResult(resultObj) {
    console.log("".concat(resultObj.val, " val is created at  ").concat(resultObj.timeStamp, "  "));
}
function addFirst(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', function (e) {
    e.preventDefault();
    var numb1 = num1.value;
    var numb2 = num2.value;
    var result = (addFirst(+numb1, +numb2));
    var stringResult = addFirst(numb1, numb2);
    numbResultArr.push(result);
    textResultArr.push(stringResult);
    printResult({ val: result, timeStamp: new Date() });
    console.log(numbResultArr, textResultArr);
});
