self = this;
var totalCost = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
    self.renderOrderTable();
    self.renderBillDetail();
});

function renderOrderTable() {
    var mobiles = [];
    for (var i = 0; i < Object.keys(orderDetailObj).length; i++) {
        console.log(self.getMobileById(orderDetailObj[i]['mobileId']));
        // mobiles.push(self.getMobileById(orderDetailObj[i]['mobileId']));
    }

    // for (var i = 0; i < mobiles.length; i++) {
    //     mobiles[i]['quantity'] = orderDetailObj[i]['quantity'];
    // }
    
    // tableBody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
    
    // for (var i = 0; i < mobiles.length; i++) {
    //     if(mobiles[i].id != -1){
    //         var myHtmlContent = 
    //         `
    //             <tr>
    //                 <td><img src=` + mobiles[i]['img'] + `></td>
    //                 <td>`+ mobiles[i]['name'] +`</td>
    //                 <td>`+ mobiles[i]['quantity'] +`</td>
    //                 <td>`+ Number(mobiles[i]['quantity'] * Number(mobiles[i]['price'])).toLocaleString('en')+`</td>
    //             </tr>
    //         `;
    //         totalCost += mobiles[i]['quantity'] * Number(mobiles[i]['price']);
    //         var newRow = tableBody.insertRow();
    //         newRow.innerHTML = myHtmlContent;
    //     }
    // }

    // tableFooter = document.getElementsByClassName('table')[0].getElementsByTagName('tfoot')[0];
    // newRow = tableFooter.insertRow();
    // newRow.innerHTML = 
    // `
    //         <tr>
    //             <td></td>
    //             <td></td>
    //             <td><strong>Total Cost:</strong></td>
    //             <td class="total-cost">`+ Number(totalCost).toLocaleString('en') +`</td>
    //         </tr>
    // `;
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

function getMobileById(mobileId) {
    var response;
    var request = new XMLHttpRequest();
    var url = "../../src/controller/MobileOrderDetailHandler.php";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            response = request.response;
            console.log(response);
            return response;
        }
    };
    request.send('mobileId=' + mobileId);
}
