
const editPopUp = Modal({
    element: document.querySelector('.edit-popup-wrapper'),
});
editPopUp.shit.show =false;
editPopUp.shit.body = `
<div class="d-flex flex-column justify-space-between" style="height: 100vh;">
    <div class="d-flex justify-center align-center" style="height:5rem;border-bottom: 1px solid #eee;">
        <span style="font-size:large"><strong>EDIT & ADD</strong></span>
    </div>
    <div class="flex-1 pt-5 pb-5" style="padding-bottom: 10px; padding-top: 20px">
        <div class="edit-popup-wrapper">
            <div class="custom-edit-field">
                <label>Product Name</label>
                <input type="text" placeholder="Iphone 12 Pro Max">
            </div>
            <div class="custom-edit-field">
                <label>Platform</label>
                <input type="text" placeholder="Ios 13" >
            </div>
            <div class="custom-edit-field">
                <label>Chip</label>
                <input type="text" placeholder="Apple A14 Bionic">
            </div>   
            <div class="custom-edit-field">
                <label>Rear Camera</label>
                <input type="text" placeholder="12MP">
            </div>  
            <div class="custom-edit-field">
                <label>Front Camera</label>
                <input type="text" placeholder="12MP">
            </div>  
            <div class="custom-edit-field">
                <label>Memory Specs</label>
                <input type="text" placeholder="512G">
            </div>        
            <div class="custom-edit-field">
                <label>Price</label>
                <input type="text" placeholder="40,000,000">
            </div>  
            <div class="custom-edit-field">
                <label>Screen</label>
                <input type="text" placeholder='6.8"'>
            </div>  
            <div class="custom-edit-field">
                <label>Discount</label>
                <input type="text" placeholder="0">
            </div>  
        </div>
    </div>
    <div class="d-flex justify-center align-center mb-1" style="height:5rem;border-top: 1px solid #eee;">
        <a class="apply-edit-btn btn btn-warning w-100" style="line-height:2" onclick="OnClickApplyAdd()"><strong>Add</strong></a>
        <a class="apply-edit-btn btn btn-warning w-100" style="line-height:2" onclick="OnClickApplyEdit()"><strong>Edit</strong></a>
    </div>

</div>
`;
const OnClickEditBtn = ()=>{
    editPopUp.shit.show = true;
}

const OnClickApplyEdit = ()=>{
    alert("Successfully Updated!");
}
