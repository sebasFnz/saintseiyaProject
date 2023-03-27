<template>

  <div class="container">
    <img src="@/assets/The-lost-canvas-logo.jpg" class="rounded mx-auto d-block" alt="...">
    <div class="row">

    <h2 class="text-center">
      Saint Seiya: The Lost Canvas - El mito de Hades
    </h2>
    <br><br>
    <p class="lead">
      Es un manga spin-off escrito e ilustrado por Shiori Teshirogi, y que está basado en el manga original de Saint Seiya escrito y dibujado por Masami Kurumada; es contada como una versión alternativa
      centrada en historias relacionados con los Caballeros Dorados antes y después de la Guerra Santa del siglo XVIII
    </p>
  </div>
  <div class="d-grid gap-2 col-4 mx-auto">
    <router-link :to="{ name: 'characters',  }" class="btn btn-info">Personajes</router-link>
  </div>

  </div>

</template>
