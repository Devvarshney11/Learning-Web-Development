// var arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f'];
// arr.reverse();
// console.log(arr);
let arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
let arr2 = [7, 13, 25, 46, 58, 70, 84];

let i = 0;
let j = 0; 

let l1 = arr1.length;
let l2 = arr2.length;

while(i<l1 && j<l2)
{
    if(arr1[i] === arr2[j])
    {
        console.log("Yes");
        break;
    }
    else if(arr1[i]<arr2[j])
    {
        i++;
    }
    else 
    {
        j++;
    }
}