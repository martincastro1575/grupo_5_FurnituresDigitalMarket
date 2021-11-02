function show (event){
    let modalDelete = document.getElementById('modal-delete');
     modalDelete.classList.add('show')
    let link = document.getElementById('test')
    link.action = "/user/delete/" + event.target.id
}

function hideModal() {
    let modalDelete = document.getElementById('modal-delete');
    modalDelete.classList.remove('show')
}

function onInputPassword(event){
    document.getElementById('back-error').innerHTML = ''
    const  rules = [{
        message: '8 Caracteres',
        regex: /.{8,}/,
      }, {
        message: '1 Minúscula',
        regex: /[a-z]{1,}/,
      }, {
        message: '1 Mayúscula',
        regex: /[A-Z]{1,}/,
      }, {
        message: '1 Número',
        regex: /[0-9]{1,}/,
      }, {
        message: '1 Caracter especial',
        regex: /[^a-zA-Z0-9]{1,}/,
      }]
      
    const filterMsg = rules.filter(rule => !rule.regex.test(event.target.value))
    let descriptionPass = '<p>La contraseña debe tener:</p>'

    if(filterMsg.length > 0){
        for(msg of filterMsg){
            descriptionPass += `${msg.message} </br>`
        }   
        document.getElementById('password-error').innerHTML = descriptionPass
    }else{
        document.getElementById('password-error').innerHTML = ''
    }
    
}