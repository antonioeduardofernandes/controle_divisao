<script>
  import List from "./List.svelte"
</script>

<div class="container">
  <main>
    <h1>Controle da Divisão</h1>
    <List />
  </main>
</div>

<style>
  :global(body) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Saira", sans-serif;
    --accent-color: teal;
  }
  main {
    padding: 1rem;
  }
</style>
