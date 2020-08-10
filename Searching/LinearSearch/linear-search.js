console.log("welcome to Linear Search In JavaScript..");

let array=[];
let item=0;

function linear(array,item){

    for(let i=0;i<array.length;i++){
        if(array[i] === item){
            return i;
        }
    }
    return null;

}

const result=linear([2,10,3,4,5],11);


if(result === null){
    console.log("element is not found.");
}else{
    console.log("element found at:"+(result+1));
}

