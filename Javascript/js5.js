var numberOfItemPurchased = 11;
var discount = 0.1;
var price;
if(numberOfItemPurchased*100>=1000)
{
    price = numberOfItemPurchased*100-numberOfItemPurchased*100*discount;
}
else
{
    price = numberOfItemPurchased*100;
}
console.log(price);