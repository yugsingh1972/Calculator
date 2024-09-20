function solve(val){
    var v = document.getElementById('res');
    v.value += val;
}

function Result(){
    var num1 = document.getElementById('res').value;
    try{
        var num2 = eval(num1.replace('x','*'));
        document.getElementById('res').value = num2;
    }
    catch{
        document.getElementById('res').value = 'Error';
    }
}
function Clear(){

    var inp = document.getElementById('res');
    inp.val = '';
    // let inp = document.querySelector("#res");
    // inp.innerHTML = "hello";

}

function back(){
    var ev = document.getElementById("res");
    ev.value = ev.value.slice(0,-1);
}

document.addEventListener('keydown',function(event){
    const key = event.key;
    const validkeys = '0123456789+-*/.%';
    if(validkeys.includes(key)){
        solve(key === '*' ? 'x' : key);
    }
    else if(key === 'Enter'){
        Result();
    }
    else if(key === 'backspace'){
        back();
    }
    else if(key === 'C'){
        Clear();
    }
})