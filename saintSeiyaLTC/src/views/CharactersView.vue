<template>
  <router-link :to="{ name: 'home' }" class="btn btn-outline-info">Volver </router-link>
  <div class="container" >
    <h1><strong>Personajes</strong> </h1>
    <br>
    <div class="row" >
      <div class="col-4" v-for="(value, key) in characters">
        <div class="card">
          <div class="card-body">
            <p class="text-center"><strong>{{value.name}}</strong></p>
          </div>
          <div class="card-footer">
             <router-link :to="{ name: 'character', params: {characterId:value._id} }">Detalles</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'characters',
    data(){
      return{
        characters:[]
      }
    },
    methods:{
      async getCharacters(){
        try {
          let a = await fetch(`${import.meta.env.VITE_APP_ROOT_API}/api/v1/getAll`,{
            method:'GET',
            headers:{
              'content-type':'application/json',
            },
          })
          let res = await a.json()
          if (res.success) {
            this.characters = res.msg
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
