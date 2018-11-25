// let form = document.getElementById('contact-form')
// let role = document.querySelector("contact-role")
// let searching = document.querySelector("contact-searching")

// console.log(form)
// console.log(role)
// console.log(searching)

// if (!name.value || !email.value || !message.value){
//     console.log('false') 
// } else{
//     $.ajax
//     method: 'POST'
//     url: '//formspree.io/roldan21@gmail.com'
//     data: $('#contact-form').serialize()
//     datatype: 'json'
//   e.preventDefault()
//   console.log('true')
//   $(this).get(0).reset()
// }

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

instance.getSelectedValues();