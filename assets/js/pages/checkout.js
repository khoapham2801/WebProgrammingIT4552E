document.addEventListener("DOMContentLoaded", function(event) { 
    var mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
    
    tableBody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
    var totalCost = 0;
    for (var i = 0; i < mobiles.length; i++) {
        var myHtmlContent = 
        `
            <tr>
                <td><img src=` + mobiles[i]['img'] + `></td>
                <td>`+ mobiles[i]['name'] +`</td>
                <td>`+ mobiles[i]['quantity'] +`</td>
                <td>`+ Number(mobiles[i]['quantity'] * Number(mobiles[i]['price'])).toLocaleString('en')+`</td>
            </tr>
        `;
        totalCost += mobiles[i]['quantity'] * Number(mobiles[i]['price']);
        var newRow = tableBody.insertRow();
        newRow.innerHTML = myHtmlContent;
    }
    tableFooter = document.getElementsByClassName('table')[0].getElementsByTagName('tfoot')[0];
    newRow = tableFooter.insertRow();
    newRow.innerHTML = 
    `
            <tr>
                <td></td>
                <td></td>
                <td><strong>Total Cost:</strong></td>
                <td class="total-cost">`+ totalCost +`</td>
            </tr>
    `;
});

function validateInput(name, email, address, phone) {
    if (!name || !email || !address || !phone) {
        return false;
    }
    return true;
}

function placeOrder() {
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
        var totalCost =  Number(document.getElementsByClassName('total-cost')[0].innerHTML);
        request.send('name=' + name + '&email=' + email + '&address=' + address + '&phone=' + phone + '&totalCost=' + totalCost);
        
    } else {
        alert("Please fill all the customer info!")
    }
}