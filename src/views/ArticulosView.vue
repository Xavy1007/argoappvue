<template>
    <br/>
    <div class="container">
        <form action="" @submit.prevent="agregarArticulo()">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Nombre</span>
                <input type="text" v-model=articulo.nombre class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
                <span class="input-group-text" id="basic-addon1">Descripcion</span>
                <input type="text" v-model=articulo.descripcion class="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon1">
            
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text " id="basic-addon1">Imagen</span>
                <input type="text" v-model=articulo.imagen class="form-control" placeholder="URL imagen" aria-label="Descripcion" aria-describedby="basic-addon1">
                <span class="input-group-text">Categorias:</span>
                <select class="form-select" aria-label="Default select example" v-model=articulo.idcategoria>
                    <option :value=c.id v-for="c in categorias" >{{c.nombre}}</option>
                </select>
                <span class="input-group-text" id="basic-addon1">Precio</span>
                <input type="text" v-model=articulo.precio class="form-control" placeholder="Precio" aria-label="Descripcion" aria-describedby="basic-addon1">
                <button class="btn btn-primary" type="submit">Guardar</button>
                <button class="btn btn-danger" type="reset">Cancelar</button>            

            </div>
            
            
        </form>   
        <h5>Buscador</h5>
        <form action="">
        <div class="input-group mb-3">
            <input type="text" v-model="navegador" class="form-control" placeholder="Buscar tareas" @input.prevent="getArticulos()" >
            <button class="btn btn-outline-secondary" @click.prevent="getArticulos()">Buscar</button>
        </div>
       </form> 
    <div class="row">
        <div class="card" style="width: 18rem;margin: 10px;" v-for="at in articulos">
            <img :src=at.imagen class="card-img-top" :alt=at.nombre style="height: 200px; width: 100%;">
            <div class="card-body">
                <h5 class="card-title"><strong>{{at.nombre}}</strong></h5>
                <p class="card-text">{{at.descripcion}}</p>
                <p class="card-text">Precio :{{at.precio}}Bs.</p>
                <p v-for="c in categorias">
                   <h4> <span class="badge rounded-pill text-bg-success" v-if="c.id == at.idcategoria">{{c.nombre}}</span></h4>
                </p>
                
                    <span class="btn btn-primary">
                        <i class="fa-regular fa-pen-to-square" @click="acciones('editar',at.id)"></i> </span>
                        &ensp;
                    <span class="btn btn-secondary"><i class="fa-solid fa-trash" @click="acciones('eliminar',at.id)"></i></span>
                
            </div>
        </div>
    </div>            
    </div>
</template>
<script>
    export default{
        name:'ArticulosView',
        data(){
            return{
                navegador:'',
                idcat:0,
                articulo:{
                    id:null,
                    nombre:null,
                    descripcion:null,
                    precio:0,
                    imagen:null,
                    idcategoria:0,
                },
                articulos:[],
                categorias:[]
            }
        },
        methods:{
            getArticulos(){
                axios({
                    method: 'get',
                    url: 'http://localhost:3000/Articulos/?q='+this.navegador
                    
                })
                .then(response => {
                    console.log(response);
                    this.articulos= response.data
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
            agregarArticulo(){
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/Articulos',
                        data: this.articulo
                    })
                    .then(response => {
                        this.articulo.nombre=null;
                        this.articulo.descripcion=null;
                        this.articulo.idcategoria=0;
                        this.articulo.precio=0;

                        this.getArticulos();
                        console.log(response);

                    })
                    .catch(e => console.log(e));
            },
            acciones(accion, id_articulo){
                if(accion==='editar'){
                    this.$router.push({ name: 'editararticulo', params: { id: id_articulo } });
                }else{
                    if(confirm("Esta seguro de Eliminar el articulo?")){
                      axios({
                        method: 'delete',
                        url: "http://localhost:3000/Articulos/"+id_articulo
                        
                      })
                      .then(response => {
                        
                        this.$store.state.mensaje = {
                                texto: "El articulo se elimino exitosamente",
                                tipo: "error"
                            };
                            this.$store.dispatch('addMensajeAction');
                            this.getArticulos(),    
                            
                        console.log(response);
                      })
                      .catch(e => console.log(e));  
                    }
                }
                
                
            }
        },
        computed:{
        },
        mounted(){
            this.getArticulos(),
            this.getCategorias()
        },
        components:{
        }
        }
</script>