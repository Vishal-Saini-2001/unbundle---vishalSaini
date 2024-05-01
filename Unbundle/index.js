var total = 0;
var totalProducts = 0;

function addProduct(mrp,add,remove){
    if(totalProducts == 8){
        alert("8 Products already added!")
    }
    else
    {
        total += mrp;
        totalProducts++;
        document.getElementById(add).style.display = "none"
        document.getElementById(remove).style.display = "block"
        document.getElementById("total").innerHTML = "Total: ₹"+total 
        document.getElementById("totalProducts").innerHTML = "Total Products:"+totalProducts 
        if(total>0)document.getElementById("not-added").style.display = "none"
    }
}


function removeProduct(mrp,remove,add){
    total -= mrp;
    totalProducts--;
    document.getElementById("totalProducts").innerHTML = "Total Products:"+totalProducts 
    document.getElementById(add).style.display = "block"
    document.getElementById(remove).style.display = "none"
    document.getElementById("total").innerHTML = "Total: ₹"+total 
    if(total==0)
    {
        document.getElementById("not-added").style.display = "block";
        document.getElementById("total").style.display = "none"
    }
}

function decrease(id){
    let quantity = parseInt(document.getElementById(id).innerHTML);
    if(quantity>1)quantity--;
    document.getElementById(id).innerHTML = quantity
}

function increase(id){
    let quantity = parseInt(document.getElementById(id).innerHTML);
    if(quantity<5)quantity++;
    document.getElementById(id).innerHTML = quantity
}