<template>
     <br>
    <div class="container">
        <form action="" @submit.prevent="guardarCategoria()">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Nombre</span>
                <input type="text" v-model=categoria.nombre class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Descripcion</span>
                <input type="text" v-model=categoria.descripcion class="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon1">
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
        name:'editarcategoria',
        data(){
            return{
                categoria:{
                    id:null,
                    nombre:null,
                    descripcion:null
                }
            }
        },
        methods:{
            getCategoria(){
                
                axios({
                    method: 'get',
                    url: "http://localhost:3000/Categorias/"+this.$route.params.id
                })
                .then(response => {
                    console.log(response)
                    this.categoria=response.data
                    console.log(response);
                })
                .catch(e => console.log(e));
            },
            guardarCategoria(){
                axios({
                    method: "patch",
                    url: "http://localhost:3000/Categorias/"+this.$route.params.id,
                    data: this.categoria
                })
                .then(response => {
                    this.$store.state.mensaje = {
                        texto: "La Categoria se edito exitosamente",
                        tipo: "exito"
                    };
                    this.$store.dispatch('addMensajeAction');
                    this.$router.push({name: 'categoriasView'});
                    console.log(response)
                })
                .catch(e => console.log(e));
            },
            volver(){
                this.$router.push({name: 'categoriasView'});
            }
        },
        computed:{
        },
        mounted(){
            this.getCategoria()
        },
        components:{
        }
        }
</script>