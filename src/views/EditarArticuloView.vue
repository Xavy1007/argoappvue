<template>
    <br/>
    <div class="container">
        <img :src=articulo.imagen class="rounded-circle" style="height: 200px; width: 200px;margin-left: 40%;"/>
        <form action="" @submit.prevent="guardar()">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Nombre</span>
                <input type="text" v-model=articulo.nombre class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Descripcion</span>
                <input type="text" v-model=articulo.descripcion class="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon1">
            
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Precio</span>
                <input type="text" v-model=articulo.precio class="form-control" placeholder="Precio" aria-label="Descripcion" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Imagen</span>
                <input type="text" v-model=articulo.imagen class="form-control" placeholder="URL imagen" aria-label="Descripcion" aria-describedby="basic-addon1">
            </div>
            <div class="input-group">
                <span class="input-group-text">Categorias:</span>
                <select class="form-select" aria-label="Default select example" v-model=articulo.idcategoria>
                    <option :value=c.id v-for="c in categorias" >{{c.nombre}}</option>
                </select>
            </div>
            <div class="input-group">
                <button class="btn btn-primary" type="submit">Enviar</button>
                <button class="btn btn-danger" @click="volver()">Cancelar</button>
            </div>
        </form> 
    </div>
</template>
<script>
    
    export default{
        name:'editarArticulo',
        data(){
            return{
                articulo:{
                    id:null,
                    nombre:null,
                    descripcion:null,
                    precio:0,
                    imagen:null,
                    idcategoria:0,
                },
                categorias:[]
            }
        },
        methods:{
            getArticulo(){
                axios({
                    method: 'get',
                    url: "http://localhost:3000/Articulos/"+this.$route.params.id
                    
                })
                .then(response => {
                    this.articulo=response.data
                    console.log(response);
                })
                .catch(e => console.log(e));
            },
            guardar(){
                axios({
                    method: "patch",
                    url: "http://localhost:3000/Articulos/"+this.$route.params.id,
                    data: this.articulo
            })
            .then(response => {
                
                this.$store.state.mensaje = {
                    texto: "El articulo se edito exitosamente",
                    tipo: "exito"
                };
                this.$store.dispatch('addMensajeAction');
                this.$router.push({name: 'articulos'});
                console.log(response)
            })
            .catch(e => console.log(e));
            },
            getCategorias(){
                axios({
                    method: 'get',
                    url: "http://localhost:3000/Categorias"
                })
                .then(response => {
                    this.categorias=response.data
                    console.log(response);
                })
                .catch(e => console.log(e));
            },
            volver(){
                this.$router.push({name: 'articulos'});
            }
        },
        computed:{
        },
        mounted(){
            this.getArticulo(),
            this.getCategorias()
        },
        components:{
            
        }
        }
</script>
<style scoped>
   
</style>