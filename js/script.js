// Seleciona os links e secções
const links = document.querySelectorAll('.nav-link[data-section]');
const sections = document.querySelectorAll('.content-section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('data-section');
    if (!targetId) return;
    e.preventDefault();

    // Esconde todas as secções
    sections.forEach(section => section.classList.add('d-none'));

    // Mostra a secção clicada
    document.getElementById(targetId).classList.remove('d-none');
    
    //scrool up 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Remove classe de todos
    links.forEach(l => l.classList.remove('active'));

    // Adiciona ao clicado
    link.classList.add('active');
  });
});


// Validações do formulário
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




// Tema claro e escuro
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const moonSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
</svg>
`;

const sunSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>
`;

function updateIcon() {
  if (document.body.classList.contains('light-theme')) {
    themeIcon.innerHTML = moonSVG; // icon da Lua
  } else {
    themeIcon.innerHTML = sunSVG; // icon do Sol
  }
}

// Event listener
toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('light-theme');  // altera entre os temas
  updateIcon();   // atualiza o icon
});

// Atualiza ícone no início ao carregar a página
updateIcon();







  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/20d01dbf8312cca1ba656ee668424377", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        form.classList.remove('was-validated');
        successMessage.style.display = 'block';
      } else {
        alert("Erro ao enviar o formulário.");
      }
    } catch (error) {
      alert("Erro de rede ao tentar enviar.");
    }
  });

