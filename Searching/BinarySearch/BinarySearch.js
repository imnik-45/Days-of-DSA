console.log("welcome in BinarySearch in Javascript");


function binary_Search(items, value){
    let firstIndex  = 0;
    let lastIndex   = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}


const items = [1, 2, 3, 4, 5, 7, 8, 9];

console.log("array elements are= "+items);

let position=binary_Search(items, 9); 
if(position < 0){
    console.log("\nelement is not found.");
}else{
    console.log("\nelement found at:"+(position+1));
}
