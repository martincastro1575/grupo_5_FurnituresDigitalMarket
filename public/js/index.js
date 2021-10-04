function show (event){
    console.log(event.target.id)
    let modalDelete = document.getElementById('modal-delete');
     modalDelete.classList.add('show')
    let link = document.getElementById('test')
    link.action = "/user/delete/" + event.target.id
}

function hideModal() {
    let modalDelete = document.getElementById('modal-delete');
    modalDelete.classList.remove('show')
}