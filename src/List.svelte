<script>
  let funcionarios = [
    {
      nome: "napoleao bonaparte",
      matricula: 1245487,
      setor: "central de material e esterilização",
      funcao: "agente administrativo",
    },
    {
      nome: "wolfgang amadeus mozart",
      matricula: 1529515,
      setor: "enfermaria 9º andar",
      funcao: "tecnico de enfermagem",
    },
    {
      nome: "ludwig van beethoven",
      matricula: 796512,
      setor: "central de material e esterilização",
      funcao: "agente administrativo",
    },
    {
      nome: "johann sebastian bach",
      matricula: 789745,
      setor: "amulatório infantil",
      funcao: "enfermeiro",
    },
    {
      nome: "josquin desprez",
      matricula: 12152123,
      setor: "hemodinâmica",
      funcao: "aosd",
    },
    {
      nome: "leonardo da vinci",
      matricula: 4189784,
      setor: "centro cirúrgico",
      funcao: "tecnico de enfermagem",
    },
    {
      nome: "michellangelo buonarroti",
      matricula: 5648450,
      setor: "hemodinâmica",
      funcao: "agente administrativo",
    },
    {
      nome: "bill gates",
      matricula: 131212,
      setor: "divisão de enfermagem",
      funcao: "agente administrativo",
    },
  ]
  $: filteredList = [...funcionarios]

  const filter = e => {
    if (e == "matricula") return (filteredList = funcionarios.sort((a, b) => a.matricula - b.matricula))
    filteredList = funcionarios.sort((a, b) => a[e].localeCompare(b[e]))
  }
</script>

 <div class="list">
      <div class="header">
        <span on:click={() => filter("nome")}>Nome</span>
        <span on:click={() => filter("matricula")}>Matrícula</span>
        <span on:click={() => filter("setor")}>Lotação</span>
        <span on:click={() => filter("funcao")}>Função</span>
      </div>
      {#each filteredList as funcionario}
        <div class="item">
          <span class="wrap_text nome">{funcionario.nome}</span>
          <span>{funcionario.matricula}</span>
          <span class="wrap_text ">{funcionario.setor}</span>
          <span class="wrap_text ">{funcionario.funcao}</span>
        </div>
      {/each}
    </div>

<style>
 
  .list {
    display: flex;
    flex-flow: column;
    row-gap: 1rem;
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
    column-gap: 4rem;
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

