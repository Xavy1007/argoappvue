<template>
    <div v-for="(value, index) in $store.getters.getMensajes">
        <div v-if="value.texto !== null" :class="`alert ${tipoError(value.tipo)}`" role="alert">
            {{value.texto}}
            <i class="fa-regular fa-circle-xmark" @click="quitarmensaje(index)"></i>
        </div>
    </div>
</template>
<script>
    export default{
        name:'AlertApp',
        data(){
            return{
            }
        },
        methods:{
            tipoError(tipo){
                if(tipo==='error'){
                    return 'alert-danger'
                }else{
                    return 'alert-success'
                }

            },
            quitarmensaje(index){
                this.$store.state.delMensajeIndex = index;
                this.$store.dispatch('delMensajeAction')
            }
        },
        computed:{
        },
        mounted(){
        },
        components:{
        }
        }
</script>