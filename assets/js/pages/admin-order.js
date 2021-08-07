var self = this;
var orderArr = [];

window.onload = function(){
    // isLogin = 0;
    // localStorage.setItem("test",isLogin);
    // console.log(localStorage.getItem("test"));
}

document.addEventListener("DOMContentLoaded", function(event) { 
    self.changeOrderObjToArray();
    self.renderData();
    self.rowClick();
});

function rowClick() {
    var table = document.getElementsByClassName('table')[0], rIndex, cIndex;
            
    // table rows
    for(var i = 1; i < table.rows.length; i++)
    {
        // row cells
        for(var j = 0; j < table.rows[i].cells.length; j++)
        {
            table.rows[i].cells[j].onclick = function()
            {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex + 1;
                if (cIndex == 9) {
                    self.onClickDetailBtn(rIndex - 1);
                }
                if (cIndex == 10) {
                    self.onClickRemoveBtn(rIndex - 1);
                }
            };
        }
    }
}

function renderData() {
    tableBody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
    
    for (var i = 0; i < orderArr.length; i++) {
        var myHtmlContent = 
        `
            <tr>
                <td>`+ (i + 1) + `</td>
                <td>`+ orderArr[i]['name'] +`</td>
                <td>`+ orderArr[i]['email'] +`</td>
                <td>`+ orderArr[i]['phone'] +`</td>
                <td>`+ orderArr[i]['address'] + `</td>
                <td>`+ orderArr[i]['date'] + `</td>
                <td>`+ orderArr[i]['date'] +`</td>
                <td>`+ Number(orderArr[i]['totalCost']).toLocaleString('en') +`</td>
                <td style="padding-right: 0px;">
                    <button class="detailbtn btn btn-warning">Detail</button>
                </td>
                <td style="padding-right: 0px;">
                    <button class="removebtn btn btn-warning">Cancel</button>
                </td>
            </tr>
        `;
        var newRow = tableBody.insertRow();
        newRow.innerHTML = myHtmlContent;
    }
}

function onClickDetailBtn(row) {
    window.location.href = "admin-order-detail.php?id=" + orderArr[row]['id'];
}

function onClickRemoveBtn(row) {
    var orderId = orderArr[row]['id'];
    
    var request = new XMLHttpRequest();
    var url = "../../src/controller/OrderHandler.php";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var response = request.response;
        }
    };
    
    request.send('orderId=' + orderId + '&type=1');
    document.getElementsByClassName('table')[0].deleteRow(row + 1);
    orderArr.splice(row, 1);
    //self.renderData();
}

function changeOrderObjToArray() {
    for (var i = 0; i < Object.keys(orders).length; i++) {
        orderArr.push(orders[i]);
    }
}