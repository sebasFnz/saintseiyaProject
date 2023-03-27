<template>
  <router-link :to="{ name: 'characters' }" class="btn btn-outline-info">Volver </router-link>
  <div class="container" >
    <div class="row" >
      <h1><strong>{{character.name}}</strong></h1>
      <br>
      <p>{{character.intro}}</p>
      <br>
      <h3>Apariencia</h3>
      <p>{{character.apperence}}</p>
      <br>
      <h3>Información</h3>
      <div class="row">
        <div class="col-6"></div>

        <div class="col-6 align-self-end">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">Nacimiento: {{character.born}}</li>
            <li class="list-group-item">Genero: {{character.genre}}</li>
            <li class="list-group-item">Edad: {{character.age}} años</li>
            <li class="list-group-item">Altura: {{character.height}} cm</li>
            <li class="list-group-item">Peso: {{character.weight}} kg</li>
            <li class="list-group-item">Lugar de Nacimiento {{character.place_birth}}</li>
            <li class="list-group-item">Armadura: {{character.armor}}</li>
            <li class="list-group-item">Armas: {{character.weapons}}</li>
            <li class="list-group-item" v-for="mbs in character.membership">Afiliacion: {{mbs}}</li>
          </ul>
        </div>
      </div>
      <br>
      <h3>Personalidad</h3>
      <p>{{character.personality}}</p>
      <br>
      <h3>Habilidades</h3>
      <ul>
        <li v-for="value in character.habilities">
          {{ value }}
        </li>
      </ul>
    </div>

  </div>
</template>
<script type="text/javascript">
  export default {
    name:'character',
    data(){
      return{
        character:'',
      }
    },
    methods:{
      async getCharacters(){
        try {
          let a = await fetch(`${import.meta.env.VITE_APP_ROOT_API}/api/v1/getId/${this.$route.params.characterId}`,{
            method:'GET',
            headers:{
              'content-type':'application/json',
            },
          })
          let res = await a.json()
          if (res.success) {
            this.character = res.msg
          }
        } catch (e) {
          console.log(e);
        }
      }
    },
    mounted(){
      this.getCharacters()
    }
  }
</script>
