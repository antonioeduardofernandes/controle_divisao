<script>
  import { funcionarios, setores, funcoes } from "./stores"

  let registro = {
    nome: "",
    matricula: "",
    admissao: "",
    setor: "",
  }

  const formIsEmpty = () => {
    return !Object.values(registro).every(field => field)
  }

  const salvarRegistro = () => {
    // verifica se o formulário está vazio
    // if (formIsEmpty()) {
    //   return alert("É necessário preencher todos os campos do formulário")
    // }
    $funcionarios = [...$funcionarios, registro]
    limparFormulario()
  }

  const limparFormulario = () => (registro = {})
</script>

<div>
  <h3>Novo Registro</h3>

  <!-- FORM START -->
  <div class="form">
    <div>
      <label for="name">Nome</label>
      <input autocomplete="off" id="name" type="text" bind:value={registro.nome} />
    </div>

    <div class="row">
      <!-- Matrícula -->
      <div>
        <label for="matricula">Matrícula</label>
        <input autocomplete="off" id="matricula" type="number" bind:value={registro.matricula} />
      </div>
      <div>
        <!-- Admissão -->
        <label for="admissao">Admissão</label>
        <input id="admissao" type="date" bind:value={registro.admissao} />
      </div>
    </div>
    <!-- Função -->
    <div>
      <label for="funcao">Função</label>
      <select id="funcao" name="" bind:value={registro.funcao}>
        <option value="">Selecione</option>
        {#each $funcoes as funcao}
          <option value={funcao}>{funcao}</option>
        {/each}
      </select>
    </div>
    <!-- Setor -->
    <div>
      <label for="setor">Lotação</label>
      <select id="setor" name="" bind:value={registro.setor}>
        <option value="">Selecione</option>
        {#each $setores as setor}
          <option value={setor}>{setor}</option>
        {/each}
      </select>
    </div>
    <div class="buttons">
      <div class="cancel_button" on:click={limparFormulario}>Cancelar</div>
      <div class="save_button" on:click={salvarRegistro}>Salvar</div>
    </div>
  </div>
  <!-- FORM END -->
</div>

<style>
  .save_button {
    background-color: var(--accent-color);
    color: white;
    padding: 0.2rem 2rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .cancel_button {
    cursor: pointer;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 3rem;
  }

  .form {
    display: flex;
    flex-flow: column;
    row-gap: 1rem;
    width: 400px;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    appearance: none;
  }

  input,
  select {
    outline: none;
    width: 100%;
  }

  input:focus {
    border: 2px solid var(--accent-color);
  }
</style>
