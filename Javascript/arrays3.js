var arr =  [1, 3, 6, 2, 5, 10];
var part1 = 0;
var part2 = 0;
for (let i=0;i<arr.length;i++)
{
    if(i%2 == 0)
    {
        part1 += arr[i];
    }
    else 
    {
        part2 += arr[i];
    }
}
var result=[part1,part2];
console.log(result);