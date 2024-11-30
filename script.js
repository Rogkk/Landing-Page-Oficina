function animateProgressBar(entry, observer) {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const percentage = bar.getAttribute('data-percentage'); // Obtém o valor final
      bar.style.width = percentage + '%'; // Define a largura animada
      observer.unobserve(bar); // Para de observar após a animação
    }
  }

  // Configurando Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => animateProgressBar(entry, observer));
  }, { threshold: 0.5 }); // Ativa a animação quando 50% da barra está visível

  // Seleciona todas as barras e inicia o observador
  document.querySelectorAll('.progress').forEach(bar => observer.observe(bar));