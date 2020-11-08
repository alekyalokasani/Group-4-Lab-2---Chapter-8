/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

//declaring variable to store subTotal

var subTotal=0;

for(var i=0;i<3;i++)

{

    //calculate total

    var total=calculateTotal(quantities[i],prices[i]);

    //call function outputCartRow()

    outputCartRow(filenames[i],titles[i],quantities[i],prices[i],total);

    subTotal+=total;//add total into subTotal

}

//calculate tax

var tax=subTotal*0.10;

//declaring variable to store shipping amount

var shippingAmount=0;

//checking subTotal

if(subTotal<=1000)

{

    shippingAmount=40;//set shipping amount

}

//calculate grand total

var grandTotal=subTotal+tax+shippingAmount;

//display subtotal in the row

document.write("<tr class='totals'><td colspan='4'>Subtotal</td><td>$"+subTotal.toFixed(2)+"</td></tr>");

//display tax in the row

document.write("<tr class='totals'><td colspan='4'>Tax</td><td>$"+(tax).toFixed(2)+"</td></tr>");

//display Shipping in the row

document.write("<tr class='totals'><td colspan='4'>Shipping</td><td>$"+shippingAmount.toFixed(2)+"</td></tr>");

//display Grand Total in the row

document.write("<tr class='totals focus'><td colspan='4'>Grand Total</td><td>$"+grandTotal.toFixed(2)+"</td></tr>");

