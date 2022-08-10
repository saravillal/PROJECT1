window.addEventListener('load', () => {
    const form = document.querySelector('#formulario')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        const nameValor = name.value.trim()
        const emailValor = email.value.trim()
        const messageValor = message.value.trim()

        if (!nameValor) {
            validaFalla(name, 'Campo vacío')
        } else {
            validaOk(name)
        }

        if (!emailValor) {
            validaFalla(email, 'Campo vacio')
        } else if (!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        } else {
            validaOk(email)
        }


        if (!messageValor) {
            validaFalla(message, 'Campo vacío')
        } else {
            validaOk(message)
        }

    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'

    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(email);
    }

})








