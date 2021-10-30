window.addEventListener('load', function(e){
    
    const formProd = document.querySelector('.form-edit-product')
    const nomProd = document.querySelector('#nombreProducto')
    const descripcionProd = document.querySelector('#descripcionProd')
    const categoriaProd = document.querySelector('#categoriaProd')
    const precioProducto = document.querySelector('#precioProducto')
    const cantidadProducto = document.querySelector('#cantidadProducto')
    const msgError = document.querySelector('div.val-front ul')
    const elementos = [nomProd,descripcionProd,categoriaProd,precioProducto,cantidadProducto]
    
    
    formProd.addEventListener('submit', function(e){
        
        const errors=[]
        
        msgError.innerHTML=''

        elementos.forEach(element => {
            if (element.value == ''){
                errors.push('Debes completar el campo ' + element.name)
            }
            
            if ((element.name == 'nombreProducto') && (element.value.length > 0 && element.value.length < 6)  ){ 
                errors.push('El campo: ' + element.name + ' debe tener al menos 5 caracteres ')
            }

            if ((element.name == 'descripcionProd') && (element.value.length > 0 && element.value.length < 21)  ){ 
                errors.push('El campo: ' + element.name + ' debe tener al menos 20 caracteres ')
            }
        });       
       
        if (errors.length > 0){            
            e.preventDefault()
            errors.forEach(error => {            
                msgError.innerHTML += '<li>'+ error + '</li>'
            });
        } 

    })

   






})