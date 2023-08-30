const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null,94];
var result = [];
for (let i = 0;i<arr.length;i++)
{
    if(arr[i] == NaN ||  arr[i] == 0 || arr[i] == false || arr[i] == '' || arr[i] == undefined || arr[i] == null)
    {
        continue;
    }
    result.push(arr[i]);
}
console.log(result);