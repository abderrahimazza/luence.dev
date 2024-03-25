
const scriptURL = 'https://script.google.com/macros/s/AKfycbzo-AUD0KRQ3ctJoHJ05WWjijWB1kK2A0IlzBBS-MPcW1nYIIxqnncFN7Djx5KlFJ8O/exec'

const forms = document.querySelectorAll('[name="data_form"]')

forms.forEach(fr => {

    fr.addEventListener('submit', e => {
        e.preventDefault()
        fr.querySelector('button').setAttribute('disabled','disabled')
        fetch(scriptURL, { method: 'POST', body: new FormData(fr)})
           .then(response =>{
               alert("Thank you! your Email is submitted successfully." )
           })
           .then(() => { setTimeout(() => {
               location.reload();
           }, 100); })
           .catch(error => console.error('Error!', error.message))
    })
});