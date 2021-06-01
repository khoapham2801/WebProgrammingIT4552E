document.addEventListener("DOMContentLoaded", function(event) { 
    var mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
    tableBody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
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
        var newRow = tableBody.insertRow();
        newRow.innerHTML = myHtmlContent;
    }
});