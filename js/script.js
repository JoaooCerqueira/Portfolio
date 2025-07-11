
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-section');

    // Esconde todas as secções
    sections.forEach(section => section.classList.add('d-none'));

    // Mostra a secção clicada
    document.getElementById(targetId).classList.remove('d-none');

    // Atualiza estado ativo
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()