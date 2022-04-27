<script>
  import { funcionarios } from "./stores"
  $: filteredList = [...$funcionarios]

  const filter = e => {
    if (e == "matricula") return (filteredList = filteredList.sort((a, b) => a.matricula - b.matricula))
    filteredList = filteredList.sort((a, b) => a[e].localeCompare(b[e]))
  }
</script>

<div class="list">
  <h3>Lista</h3>
  <div class="header">
    <span on:click={() => filter("nome")}>Nome</span>
    <span on:click={() => filter("matricula")}>Matrícula</span>
    <span on:click={() => filter("setor")}>Lotação</span>
    <span on:click={() => filter("funcao")}>Função</span>
    <span on:click={() => filter("admissao")}>Admissão</span>
  </div>
  {#each filteredList as funcionario}
    <div class="item">
      <span class="wrap_text nome">{funcionario.nome}</span>
      <span>{funcionario.matricula}</span>
      <span class="wrap_text ">{funcionario.setor}</span>
      <span class="wrap_text ">{funcionario.funcao}</span>
      <span
        >{`${new Date(funcionario.admissao).getDate()+1}/${new Date(funcionario.admissao).getMonth()+1}/${new Date(
          funcionario.admissao
        ).getFullYear()}`}</span
      >
    </div>
  {/each}
</div>

<style>
  .list {
    display: flex;
    flex-flow: column;
    row-gap: 1rem;
    overflow: scroll;
  }

  .nome {
    font-weight: bold;
  }
  span {
    text-transform: capitalize;
  }

  .header {
    font-weight: bold;
    cursor: pointer;
  }

  .header,
  .item {
    display: grid;
    grid-template-columns: repeat(5, 180px);
    column-gap: 1rem;
  }

  .item:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  .wrap_text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
