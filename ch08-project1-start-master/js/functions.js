/* define functions here */


function calculateTotal(quantity,price)

{

    //return multiplication of quantity into price

    return quantity*price;

}

//function to output cart row

function outputCartRow(file,title,quantity,price,total)

{

    //create row

    document.write("<tr><td><img src='"+file+"'></td><td>"+title+"</td><td>"+quantity+"</td><td>$"+price.toFixed(2)+"</td><td>$"+total.toFixed(2)+"</td></tr>");

}
        
