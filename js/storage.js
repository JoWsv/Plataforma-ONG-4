// Salva o cadastro no navegador
export function salvarCadastro(dados) {
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  cadastros.push(dados);
  localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

// Lista todos os cadastros
export function listarCadastros() {
  return JSON.parse(localStorage.getItem('cadastros')) || [];
}
