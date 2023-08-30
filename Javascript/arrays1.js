const arr =  ['asdf', 'sd', 'something','right','position'];

var longestStr= arr[0];
var len = arr[0].length;

for(let i = 0;i<arr.length;i++)
{
    if(arr[i].length>len)
    {
        longestStr = arr[i];
        len = arr[i].length;
    }
}
console.log("Longest String in array : "+longestStr);