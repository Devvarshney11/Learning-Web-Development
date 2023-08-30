const customers_data =
{
    Ben10 : [22, 30, 11, 17, 15, 52, 27, 12],
    Sameer : [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
    Zeeshan : [22, 30, 11, 5, 17, 30, 6, 57]
}
for (let i in customers_data)
{
    var count = 0;
    for(let j in customers_data[i])
    {
        if(customers_data[i][j] >= 20)
        {
            count++;
        }
    }
    if(count>=5)
    {
        console.log("Premium membership for "+i);
    }
}
