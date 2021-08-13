var self = this;
var pre_name;
var mobileArr = [];
function changeMobileObjectToArray(){
    for(var i = 0; i< Object.keys(mobiles).length;i++){
        mobileArr.push(mobiles[i]);
    }
}

window.onload = function(){
    // isLogin = 0;
    // localStorage.setItem("test",isLogin);
    // console.log(localStorage.getItem("test"));
}

document.addEventListener("DOMContentLoaded", function(event) { 
    self.changeMobileObjectToArray();
    self.renderData();
    self.rowClick();
});
// console.log(mobiles);
//console.log(mobileArr);

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
                if (cIndex == 12) {
                    onClickEditBtn(rIndex - 1);
                }
                if (cIndex == 13) {
                    onClickRemoveBtn(rIndex - 1);
                }
            };
        }
    }
}

function renderData() {
    tableBody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
    for (var i = 0; i < mobileArr.length; i++) {
        var myHtmlContent = 
        `
            <tr>
                <td>` + (i + 1) + `</td>
                <td><img src=` + mobileArr[i]['img'] + `></td>
                <td>`+ mobileArr[i]['name'] +`</td>
                <td>`+ mobileArr[i]['platform'] +`</td>
                <td>`+ mobileArr[i]['chip'] +`</td>
                <td>`+ mobileArr[i]['rear_camera'] + `</td>
                <td>`+ mobileArr[i]['front_camera'] + `</td>
                <td>`+ mobileArr[i]['memory'] +`</td>
                <td>`+ mobileArr[i]['price'] +`</td>
                <td>`+ mobileArr[i]['screen'] + `</td>
                <td>`+ mobileArr[i]['discount'] +`</td>
                <td>
                    <button class="editbtn btn btn-warning">Edit</button>
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

const editPopUp = Modal({
    element: document.querySelector('.edit-popup-wrapper'),
});

editPopUp.shit.show = false;

function editPopUpBody($type) {
    editPopUp.shit.body = `
    <div class="d-flex flex-column justify-space-between" style="height: 100vh;">
        <div class="d-flex justify-center align-center" style="height:5rem;border-bottom: 1px solid #eee;">
            <span style="font-size:large"><strong>` + $type + `</strong></span>
        </div>
        <div class="flex-1 pt-5 pb-5" style="padding-bottom: 10px; padding-top: 20px">
            <div class="edit-popup-wrapper">
                <div class="custom-edit-field">
                    <label>Image link</label>
                    <input class="txt-img" type="text" placeholder="tgdd.com.vn/iphone">
                </div>
                <div class="custom-edit-field">
                    <label>Brand Name</label>
                    <input class="txt-brand" type="text" placeholder="0">
                </div>  
                <div class="custom-edit-field">
                    <label>Product Name</label>
                    <input class="txt-name" type="text" placeholder="Iphone 12 Pro Max">
                </div>
                <div class="custom-edit-field">
                    <label>Platform</label>
                    <input class="txt-platform" type="text" placeholder="Ios 13" >
                </div>
                <div class="custom-edit-field">
                    <label>Chip</label>
                    <input class="txt-chip" type="text" placeholder="Apple A14 Bionic">
                </div>   
                <div class="custom-edit-field">
                    <label>Rear Camera</label>
                    <input class="txt-rear-camera" type="text" placeholder="12MP">
                </div>  
                <div class="custom-edit-field">
                    <label>Front Camera</label>
                    <input class="txt-front-camera" type="text" placeholder="12MP">
                </div>  
                <div class="custom-edit-field">
                    <label>Memory Specs</label>
                    <input class="txt-memory" type="text" placeholder="512G">
                </div>        
                <div class="custom-edit-field">
                    <label>Price</label>
                    <input class="txt-price" type="text" placeholder="40000000">
                </div>  
                <div class="custom-edit-field">
                    <label>Screen</label>
                    <input class="txt-screen" type="text" placeholder='6.8"'>
                </div>  
                <div class="custom-edit-field">
                    <label>Discount</label>
                    <input class="txt-discount" type="text" placeholder="0">
                </div>  
            </div>
        </div>
        <div class="d-flex justify-center align-center mb-1" style="height:5rem;border-top: 1px solid #eee;">
            <a class="apply-edit-btn btn btn-warning w-100" style="line-height:2" onclick="OnClickApplyBtn()"><strong>Apply</strong></a>
        </div>

    </div>
    `;
}


const onClickAddBtn = ()=>{
    self.editPopUpBody("ADD");
    editPopUp.shit.show = true;
}

const onClickEditBtn = (row)=>{
    self.editPopUpBody("EDIT");
    document.getElementsByClassName('txt-img')[0].value = mobileArr[row]['img'];
    document.getElementsByClassName('txt-brand')[0].value = self.getBrandNameById(mobileArr[row]['brandId']);
    document.getElementsByClassName('txt-name')[0].value = mobileArr[row]['name'];
    document.getElementsByClassName('txt-platform')[0].value = mobileArr[row]['platform'];
    document.getElementsByClassName('txt-chip')[0].value = mobileArr[row]['chip'];
    document.getElementsByClassName('txt-rear-camera')[0].value = mobileArr[row]['rear_camera'];
    document.getElementsByClassName('txt-front-camera')[0].value = mobileArr[row]['front_camera'];
    document.getElementsByClassName('txt-memory')[0].value = mobileArr[row]['memory'];
    document.getElementsByClassName('txt-price')[0].value = mobileArr[row]['price'];
    document.getElementsByClassName('txt-screen')[0].value = mobileArr[row]['screen'];
    document.getElementsByClassName('txt-discount')[0].value = mobileArr[row]['discount'];

    pre_name = mobileArr[row]['name'];
    editPopUp.shit.show = true;
}

const onClickRemoveBtn = (row)=>{
    var name = mobileArr[row]['name'];
    var mobileId = findMobileIdByName(name);
    
    var request = new XMLHttpRequest();
    var url = "../../src/handler/MobileHandler.php";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var response = request.response;
        }
    };
    
    request.send('mobileId=' + mobileId + '&type=' + 0);
    document.getElementsByClassName('table')[0].deleteRow(row + 1);

    //TODO: DELETE the removed mobile from mobiles
    mobileArr.splice(row,1);
}

const OnClickApplyBtn = ()=>{
    var img = document.getElementsByClassName('txt-img')[0].value;
    var brand = document.getElementsByClassName('txt-brand')[0].value;
    var brandId = findBrandIdByBrandName(brand);
    var name = document.getElementsByClassName('txt-name')[0].value;
    var platform = document.getElementsByClassName('txt-platform')[0].value;
    var chip = document.getElementsByClassName('txt-chip')[0].value;
    var rearCamera = document.getElementsByClassName('txt-rear-camera')[0].value;
    var frontCamera = document.getElementsByClassName('txt-front-camera')[0].value;
    var memory = document.getElementsByClassName('txt-memory')[0].value;
    var price = document.getElementsByClassName('txt-price')[0].value;
    var screen = document.getElementsByClassName('txt-screen')[0].value;
    var discount = document.getElementsByClassName('txt-discount')[0].value;
    var mobileId = findMobileIdByName(pre_name);
    var type;

    if (mobileId == -1) {
        type = 2;
    } else {
        type = 1;
    }
    var request = new XMLHttpRequest();
    var url = "../../src/handler/MobileHandler.php";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var response = request.response;
        }
    };
    
    request.send('img=' + img + '&name=' + name + '&platform=' + platform + '&chip=' + chip + '&rearCamera=' + rearCamera
    + '&frontCamera=' + frontCamera + '&memory=' + memory + '&price=' + price + '&screen=' + screen 
    + '&discount=' + discount + '&brandId=' + brandId  + '&mobileId=' + mobileId + '&type=' + type);

    alert("Successfully Update DB!");
    self.renderData();
}

function findMobileIdByName(name) {
    for (var i = 0; i < mobileArr.length; i++) 
    if (mobileArr[i]['name'] == name) {
        return mobileArr[i]['id'];
    }
    return -1;
}

function findBrandIdByBrandName(brand) {
    for (var i = 0; i < Object.keys(brands).length; i++) 
    if (brands[i]['name'] == brand) {
        return brands[i]['id'];
    }
}

function getBrandNameById(id) {
    for (var i = 0; i < Object.keys(brands).length; i++) 
    if (brands[i]['id'] == id) {
        return brands[i]['name'];
    }
}

function OnClickDetail(){
    window.location.href="../../src/view/admin-order-detail.php"
}
