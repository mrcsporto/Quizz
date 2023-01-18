let user = {}

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJSON = Object.fromEntries(formData);

    user.name = formDataJSON.name
    user.cpf = formDataJSON.cpf
    user.phone = formDataJSON.phone
    user.profession = formDataJSON.profession
    user.lgpd = formDataJSON.lgpd

    console.log(user)
    isEmpty(user)
    return user
}

const form = document.getElementById('contactForm')
form.addEventListener('submit', handleSubmit)

function isEmpty(user) {
    console.log(Object.keys(user).length > 0)
}



