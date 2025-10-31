import { salvarCadastro } from './storage.js';

// Inicializa a validação e o salvamento do formulário
export function initFormValidation() {
  const form = document.querySelector('#cadastro-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (validarFormulario(form)) {
      const dados = Object.fromEntries(new FormData(form));
      salvarCadastro(dados);
      alert('✅ Cadastro realizado com sucesso!');
      form.reset();
    }
  });
}

// Função de validação
export function validarFormulario(form) {
  let valido = true;
  const campos = form.querySelectorAll('input[required], textarea[required]');
  
  campos.forEach(campo => {
    if (!campo.value.trim()) {
      campo.style.border = '2px solid red';
      valido = false;
    } else {
      campo.style.border = '2px solid green';
    }
  });

  if (!valido) {
    alert('⚠️ Por favor, preencha todos os campos obrigatórios!');
  }

  return valido;
}
