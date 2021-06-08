self = this;

document.addEventListener("DOMContentLoaded", function(event) { 
    self.renderOrderTable();
    self.renderBillDetail();
});

function renderOrderTable() {
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
                <td class="total-cost">`+ Number(totalCost).toLocaleString('en') +`</td>
            </tr>
    `;
    sessionStorage.clear();
}

function renderBillDetail() {
    document.getElementsByClassName('txt-order-no')[0].innerHTML = "LKK" + orderObj['id'];
    document.getElementsByClassName('txt-name')[0].innerHTML = orderObj['name'];
    document.getElementsByClassName('txt-email')[0].innerHTML = orderObj['email'];
    document.getElementsByClassName('txt-address')[0].innerHTML = orderObj['address'];
    document.getElementsByClassName('txt-phone')[0].innerHTML = orderObj['phone'];
    document.getElementsByClassName('txt-date-order')[0].innerHTML = orderObj['date'];
    document.getElementsByClassName('txt-date-receive')[0].innerHTML = orderObj['date'];
}