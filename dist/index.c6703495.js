const tblStudent = document.getElementById("tbl-student");
const btnNew = document.getElementById("btn-new");
const btnSave = document.getElementById("btn-save");
const btnClear = document.getElementById("btn-clear");
const txtId = document.getElementById("txt-id");
const txtName = document.getElementById("txt-name");
const txtConatct = document.getElementById("txt-contact");
const txtAddress = document.getElementById("txt-address");
btnNew.addEventListener("click", ()=>{
    [
        txtId,
        txtName,
        txtConatct,
        txtAddress
    ].forEach((ctrl)=>ctrl.disabled = false);
    txtId.value = generateNewStudentId();
    txtName.focus();
});
function generateNewStudentId() {
    return "S001";
}

//# sourceMappingURL=index.c6703495.js.map
