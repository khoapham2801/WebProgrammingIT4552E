self = this;
var totalCost = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
    self.renderOrderTable();
    self.renderBillDetail();
    self.createOrderDetail();
});

function deleteFirstColumn() {
    // Getting the table
    var tble = document.getElementsByClassName('table')[0].cloneNode(true);

    // Getting the rows in table.
    var row = tble.rows;  

    // Removing the column at index(1).  
    var i = 0; 
    for (var j = 0; j < row.length; j++) {
        // Deleting the ith cell of each row.
        row[j].deleteCell(i);
    }
    return tble.outerHTML;
}

function renderOrderTable() {
    var mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
    
    tableBody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
    
    for (var i = 0; i < mobiles.length; i++) {
        //console.log(mobiles[i].id);
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

function renderBillDetail() {
    document.getElementsByClassName('txt-order-no')[0].innerHTML = "LKK" + orderObj['id'];
    document.getElementsByClassName('txt-name')[0].innerHTML = orderObj['name'];
    document.getElementsByClassName('txt-email')[0].innerHTML = orderObj['email'];
    document.getElementsByClassName('txt-address')[0].innerHTML = orderObj['address'];
    document.getElementsByClassName('txt-phone')[0].innerHTML = orderObj['phone'];
    document.getElementsByClassName('txt-date-order')[0].innerHTML = orderObj['date'];
    document.getElementsByClassName('txt-date-receive')[0].innerHTML = orderObj['date'];
}

function callHttpRequest(orderId, mobileId, quantity, tableInfo, email) {
    var response;
    var request = new XMLHttpRequest();
    var url = "../../src/handler/OrderDetailHandler.php";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            response = request.response;
        }
    };
    request.send('orderId=' + orderId + '&mobileId=' + mobileId + '&quantity=' + quantity + '&tableInfo=' + tableInfo + '&email=' + email);
}

function createOrderDetail() {
    var mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
    
    for (var i = 0; i < mobiles.length; i++) 
    if (mobiles[i]['id'] != -1) {
        self.callHttpRequest(Number(orderObj['id']), mobiles[i]['id'], mobiles[i]['quantity'], "", "");
    }

    sessionStorage.clear();
}

function OnClickConfirmOrderDtl(){
    var tableInfo = self.deleteFirstColumn();
    var email = orderObj['email'];

    var response;
    var request = new XMLHttpRequest();
    var url = "../../src/handler/OrderDetailHandler.php";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            response = request.response;
            window.location.href="index.php";
        }
    };
    request.send('orderId=' + -1 + '&mobileId=' + -1 + '&quantity=' + -1 + '&tableInfo=' + tableInfo + '&email=' + email);
    
}