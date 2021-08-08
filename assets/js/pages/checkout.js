var totalCost = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
    var mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
    //console.log(mobiles);
    tableBody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
    
    if(mobiles!= null){
        for (var i = 0; i < mobiles.length; i++) {
            if(mobiles[i].id != -1){
                var myHtmlContent = 
                `
                    <tr>
                        <td><img src=` + mobiles[i]['img'] + `></td>
                        <td>`+ mobiles[i]['name'] +`</td>
                        <td>`+ mobiles[i]['quantity'] +`</td>
                        <td>`+ Number(mobiles[i]['quantity'] * Number(mobiles[i]['price'] * (100 - mobiles[i]['discount'])/100)).toLocaleString('en')+`</td>
                    </tr>
                `;
                totalCost += mobiles[i]['quantity'] * Number(mobiles[i]['price'] * (100 - mobiles[i]['discount'])/100);
                var newRow = tableBody.insertRow();
                newRow.innerHTML = myHtmlContent;
            }
        }
        tableFooter = document.getElementsByClassName('table')[0].getElementsByTagName('tfoot')[0];
        newRow = tableFooter.insertRow();
        newRow.innerHTML = 
        `
                <tr>
                    <td></td>
                    <td></td>
                    <td><strong>Total Cost:</strong></td>
                    <td class="total-cost">`+ Number(totalCost).toLocaleString('en') +`</td>
                </tr>
        `;
    }
    else{
        document.getElementById("place-order-btn").style.display = "none";
        var tableCollection = document.getElementsByClassName('table');
        var tableArray = Array.from(tableCollection);
        for(var i = 0; i<tableArray.length;i++){
            tableArray[i].style.display = "none";
        }
        document.getElementById("table-title").innerText = "Your Cart Is Empty!!!";
    }
});

function validateInput(name, email, address, phone) {
    if (!name || !email || !address || !phone) {
        return false;
    }
    return true;
}

function placeOrder() {
    var mobiles = JSON.parse(sessionStorage.getItem("mobiles"));    
    if (mobiles.length != 0) {
        var name = document.getElementsByClassName('txt-name')[0].value;
        var email = document.getElementsByClassName('txt-email')[0].value;
        var address = document.getElementsByClassName('txt-address')[0].value;
        var phone = document.getElementsByClassName('txt-phone')[0].value;
        var response;

        if (validateInput(name, email, address, phone)) {
            var request = new XMLHttpRequest();
            var url = "../../src/controller/OrderHandler.php";
            request.open("POST", url, true);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.onreadystatechange = function () {
                if (request.readyState === 4 && request.status === 200) {
                    response = request.response;
                    window.location.href="../../src/view/order-confirm.php?id=" + response;
                }
            };
            request.send('name=' + name + '&email=' + email + '&address=' + address + '&phone=' + phone + '&totalCost=' + totalCost + '&type=0');
            
        } else {
            alert("Please fill all the customer info!");
        }
    } else {
        alert("You have no mobile in cart yet! Come back and choose at least one!");
    }
}