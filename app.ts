const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addButton = document.getElementById('addbutton')!

const textResultArr:string[] = []
const numbResultArr: number[] = []
type numbORstring = number | string;   // type alias  
type ResultObj = { val: number; timeStamp:Date} // type alias
interface objtypeForPrint {
    val: number;
    timeStamp: Date;
}
function printResult(resultObj: objtypeForPrint) {
    console.log(`${resultObj.val} val is created at  ${resultObj.timeStamp}  `)
}


function addFirst(num1: numbORstring, num2: numbORstring) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2
    }
    return +num1 + +num2
}

addButton?.addEventListener('click', (e) => {
    e.preventDefault()
    let numb1 = num1.value;
    let numb2 = num2.value;
    const result = (addFirst(+numb1, +numb2)) 
    const stringResult = addFirst(numb1, numb2);
    numbResultArr.push(result as number );
    textResultArr.push(stringResult as string)
    printResult({ val: result as number, timeStamp: new Date() })
    console.log(numbResultArr,textResultArr)
})


