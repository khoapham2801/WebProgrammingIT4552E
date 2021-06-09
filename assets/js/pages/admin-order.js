var self = this;

window.onload = function(){
    // var isLogin = 0;
    // isLogin = localStorage.getItem("test");
    // if(isLogin == 0){
    //     location.replace("login.php"); 
    // }
    isLogin = 0;
    localStorage.setItem("test",isLogin);
    console.log(localStorage.getItem("test"));
}
// window.onbeforeunload = function(){
//     isLogin = 0;
//     localStorage.setItem("test",isLogin);
//     console.log(localStorage.getItem("test"));
// }
document.addEventListener("DOMContentLoaded", function(event) { 
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
    for (var i = 0; i < Object.keys(orders).length; i++) {
        var myHtmlContent = 
        `
            <tr>
                <td>`+ (i + 1) + `</td>
                <td>`+ orders[i]['name'] +`</td>
                <td>`+ orders[i]['email'] +`</td>
                <td>`+ orders[i]['phone'] +`</td>
                <td>`+ orders[i]['address'] + `</td>
                <td>`+ orders[i]['date'] + `</td>
                <td>`+ orders[i]['date'] +`</td>
                <td>`+ Number(orders[i]['totalCost']).toLocaleString('en') +`</td>
                <td>
                    <button class="detailbtn btn btn-warning">Detail</button>
                </td>
                <td>
                    <button class="removebtn btn btn-warning">Remove</button>
                </td>
            </tr>
        `;
        var newRow = tableBody.insertRow();
        newRow.innerHTML = myHtmlContent;
    }
}

function onClickDetailBtn(row) {
    window.location.href = "admin-order-detail.php?id=" + orders[row]['id'];
}

function onClickRemoveBtn(row) {
    
}