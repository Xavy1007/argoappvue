<template>
    <br>
    <div class="container">
        <form action="" @submit.prevent="agregarAlmacen()">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Nombre</span>
                <input type="text" v-model=almacen.nombre class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
                <span class="input-group-text" id="basic-addon1">Descripcion</span>
                <input type="text" v-model=almacen.descripcion class="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon1">
                <button class="btn btn-primary" type="submit">Enviar</button>
                <button class="btn btn-secondary" type="reset">Cancelar</button>
            </div>
        </form>
        <h5>Buscador</h5>
        <form action="">
        <div class="input-group mb-3">
            <input type="text" v-model="navegador" class="form-control" placeholder="Buscar Almacenes" @input.prevent="getAlmacenes()" >
            <button class="btn btn-outline-secondary" @click.prevent="getAlmacenes()">Buscar</button>
        </div>
       </form> 

    
    <table class="table table-dark table-hover">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">descripcion</th>
        <th scope="col">Acciones</th>
    </tr>
    </thead>
    <tbody>
        <tr v-for="art in almacenes">
            <th scope="row">{{art.id}}</th>
            <td>{{art.nombre}}</td>
            <td>{{art.descripcion}}</td>
            <td>
                <span class="btn btn-primary"><i class="fa-regular fa-pen-to-square" @click="acciones('editar', art.id,art.nombre)"></i> </span>
                &ensp;
                <span class="btn btn-secondary"><i class="fa-solid fa-trash" @click="acciones('eliminar', art.id,art.nombre)"></i></span>
            </td>
        </tr>
   
    </tbody>
</table>
    </div>
</template>
<script>
    export default{
        name:'almacenesview',
        data(){
            return{
                navegador:'',
                almacen:{
                   id:null,
                   nombre:null,
                   descripcion:null
               },
                almacenes:[]
            }
        },
        methods:{
            getAlmacenes(){
                axios({
                    method: 'get',
                    url: "http://localhost:3000/Almacenes/?q="+this.navegador
                })
                .then(response => {
                    this.almacenes=response.data
                    console.log(response);
                })
                .catch(e => console.log(e));
            },
            agregarAlmacen(){
                axios({
                    method: 'post',
                    url: "http://localhost:3000/Almacenes/",
                    data: this.almacen
                })
                .then(response => {
                    this.almacen.nombre=null;
                    this.almacen.descripcion=null;
                    this.getAlmacenes();
                    console.log(response);
                })
                .catch(e => console.log(e));
            }, 
            acciones(accion, idc, nombre){
                if(accion==='editar'){
                    
                    this.$router.push({ name: 'editaralmacenes', params: { id: idc } });
                }else{
                    if(confirm("Desea Eliminar el Almacen"+nombre)){
                        axios({
                        method: 'delete',
                        url: "http://localhost:3000/Almacenes/"+idc
                        })
                        .then(response => {
                            this.getAlmacenes();
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
            this.getAlmacenes()
        },
        components:{
        }
        }
</script>
