var arr = [4, 3, 2, 1, 0];
var flag = true;

let i = 1;
while (i < arr.length) {
    if (arr[i] <= arr[i - 1]) {
        flag = false;
        break;
    }
    i++;
}
if (flag == false) {
    i = 1;
    flag = true;
    while (i < arr.length) {
        if (arr[i] >= arr[i - 1]) {
            flag = false;
            break;
        }
        i++;
    }
}
if(flag)
{
    console.log("The array is strictly increasing");
}
else 
{
    console.log("Not");
}