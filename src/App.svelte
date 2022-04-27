<script>
  import Form from "./Form.svelte"
  import List from "./List.svelte"
</script>

<div class="container">
  <main>
    <h1>Controle da Divisão</h1>
    <div class="content">
      <Form />
      <List />
    </div>
  </main>
</div>

<style>
  :global(body) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Saira", sans-serif;
    font-size: 14px;
    --accent-color: teal;
  }
  main {
    padding: 1rem;
    display: flex;
    flex-flow: column;
    overflow: hidden ;
  }

  .content {
    display: flex;
    column-gap: 3rem;
  }
</style>
