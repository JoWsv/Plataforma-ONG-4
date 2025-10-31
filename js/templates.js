export const templates = {
  home: `
    <section>
      <h2>Conheça a ONG Águas Vivas</h2>
      <h4>Proteger os oceanos é a nossa missão!</h4>
      <p>Somos uma organização dedicada à conservação e proteção dos ecossistemas marinhos e da vida que habita os oceanos.</p>
      <p>Trabalhamos na preservação de recifes de corais, reabilitação de animais marinhos e conscientização ambiental.</p>
      <img src="imagens/OceanoELitoral.jpg" alt="Peixes tropicais em recife de coral">
    </section>

    <section>
      <fieldset>
        <h3>Missão</h3>
        <p>Proteger e conservar os ecossistemas marinhos e a biodiversidade dos oceanos, promovendo sustentabilidade e respeito à vida marinha.</p>
      </fieldset>

      <fieldset>
        <h3>Visão</h3>
        <p>Ser referência nacional na defesa dos oceanos, inspirando uma sociedade consciente e engajada na preservação dos ambientes aquáticos.</p>
      </fieldset>

      <fieldset>
        <h3>Valores</h3>
        <p>Sustentabilidade, Respeito, Ética, Inovação, Colaboração, Transparência.</p>
      </fieldset>
    </section>

    <section>
      <h3>Faça a Diferença!!</h3>
      <p>Seu apoio é fundamental para continuarmos nosso trabalho em prol da vida marinha.</p>
      <a href="#/doacoes" class="botao">Doar Agora</a>
    </section>
  `,

  projetos: `
    <h1>Projetos da ONG Águas Vivas</h1>
    <section>
      <h2>Projeto Recifes Vivos</h2>
      <img src="imagens/CoraisEPeixes.jpg" alt="Recife de coral saudável">
      <p>Monitoramento e restauração de recifes de corais ameaçados.</p>
    </section>

    <section>
      <h2>Projeto Vida Marinha</h2>
      <img src="imagens/CoralEPeixe.jpg" alt="Peixe no meio do coral">
      <p>Resgate e reabilitação de animais marinhos e campanhas educativas.</p>
    </section>

    <section>
      <h2>Projeto Limpeza Costeira</h2>
      <img src="imagens/PraiaLixo.jpg" alt="Lixo na praia">
      <p>Mutirões de limpeza em praias para reduzir a poluição marinha.</p>
    </section>

    <aside>
      <h3>Participe como voluntário</h3>
      <p>Quer ajudar a proteger nossos oceanos? Junte-se a nós!</p>
      <a href="#/cadastro" class="botao">Inscreva-se</a>
    </aside>
  `,

  cadastro: `
    <h1>Cadastro de Voluntário</h1>
    <form id="formCadastro">
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label>Nome Completo:</label>
        <input type="text" id="nome" name="nome" data-validate="required|min:3" placeholder="Seu nome completo">

        <label>Email:</label>
        <input type="email" id="email" name="email" data-validate="required|email" placeholder="seu@email.com">

        <label>CPF:</label>
        <input type="text" id="cpf" name="cpf" data-validate="required|min:11" placeholder="000.000.000-00">

        <label>Telefone:</label>
        <input type="text" id="telefone" name="telefone" data-validate="required|min:10" placeholder="(00) 00000-0000">

        <label>Mensagem:</label>
        <textarea id="mensagem" name="mensagem" data-validate="required|min:10" placeholder="Fale um pouco sobre você"></textarea>

        <button type="submit" class="botao">Enviar Cadastro</button>
      </fieldset>

      <div id="form-status"></div>
    </form>
  `,

  doacoes: `
    <h1>Doações - Águas Vivas</h1>
    <section>
      <h2>Por que doar?</h2>
      <p>Doar é essencial para financiar projetos de proteção dos oceanos e resgate da vida marinha.</p>
      <img src="imagens/donate.png" alt="Mãos doando dinheiro" width="300">
    </section>

    <form id="formDoacao">
      <fieldset>
        <legend>Dados do Doador</legend>

        <label>Nome Completo:</label>
        <input type="text" id="doador" name="doador" data-validate="required|min:3">

        <label>E-mail:</label>
        <input type="email" id="emailDoacao" name="emailDoacao" data-validate="required|email">

        <label>Valor da Doação (R$):</label>
        <input type="number" id="valor" name="valor" data-validate="required|min:1" min="1">

        <button type="submit" class="botao">Doar Agora</button>
      </fieldset>

      <div id="form-status"></div>
    </form>
  `,

  notFound: `
    <section><h2>Página não encontrada</h2></section>
  `
};
