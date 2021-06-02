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
                <td>`+ mobiles[i]['quantity'] * Number(mobiles[i]['price'])+`</td>
            </tr>
        `;
        totalCost += mobiles[i]['quantity'] * Number(mobiles[i]['price']);
        var newRow = tableBody.insertRow();
        newRow.innerHTML = myHtmlContent;
    }
    newRow = tableBody.insertRow();
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

    if (validateInput(name, email, address, phone)) {
        var request = new XMLHttpRequest();
        var url = "../../src/controller/OrderHandler.php";
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                var response = this.responseText;
            }
        };
        var totalCost =  Number(document.getElementsByClassName('total-cost')[0].innerHTML);
        var data = {name: name, email: email, address: address, phone: phone, totalCost: totalCost};

        request.send(JSON.stringify(data));
        window.location.href="../../src/controller/OrderHandler.php";
    } else {
        alert("Please fill all the customer info!")
    }
}