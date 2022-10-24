<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <app-menu></app-menu>
    
  </nav>
  <app-alert></app-alert>
  <router-view/>
</template>
<script>
    import AppMenu from '@/components/MenuApp.vue';
    import AppAlert from '@/components/AlertApp.vue';
    export default{
        name:'app',
        data(){
            return{
            }
        },
        methods:{
        },
        computed:{
        },
        mounted(){
        },
        components:{
          AppMenu,
          AppAlert
          
        }
        }
</script>



<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
