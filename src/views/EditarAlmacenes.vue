<template>
    <br>
   <div class="container">
       <form action="" @submit.prevent="guardarAlmacen()">
           <div class="input-group mb-3">
               <span class="input-group-text" id="basic-addon1">Nombre</span>
               <input type="text" v-model=almacen.nombre class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
           </div>
           <div class="input-group mb-3">
               <span class="input-group-text" id="basic-addon1">Descripcion</span>
               <input type="text" v-model=almacen.descripcion class="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon1">
           </div>
           <div class="input-group mb-3">
               <button class="btn btn-primary" type="submit">Enviar</button>
               <button class="btn btn-secondary" @click="volver()">Cancelar</button>
           </div>
       </form>
   </div>
</template>
<script>
   export default{
       name:'editaralmacen',
       data(){
           return{
               almacen:{
                   id:null,
                   nombre:null,
                   descripcion:null
               }
           }
       },
       methods:{
           getAlmacen(){
               axios({
                   method: 'get',
                   url: "http://localhost:3000/Almacenes/"+this.$route.params.id
               })
               .then(response => {
                   console.log(response)
                   this.almacen=response.data
                   console.log(response);
               })
               .catch(e => console.log(e));
           },
           guardarAlmacen(){
               axios({
                   method: "patch",
                   url: "http://localhost:3000/Almacenes/"+this.$route.params.id,
                   data: this.almacen
               })
               .then(response => {
                   this.$store.state.mensaje = {
                       texto: "El almacen se edito exitosamente",
                       tipo: "exito"
                   };
                   this.$store.dispatch('addMensajeAction');
                   this.$router.push({name: 'almacenesView'});
                   console.log(response)
               })
               .catch(e => console.log(e));
           },
           volver(){
               this.$router.push({name: 'almacenesView'});
           }
       },
       computed:{
       },
       mounted(){
           this.getAlmacen()
       },
       components:{
       }
       }
</script>