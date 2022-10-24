<template>

    <div class="container-fluid">
      <a class="navbar-brand" href="/">ARGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/articulos">Articulos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/categorias">Categorias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/almacenes">Almacenes</a>
          </li>
      </ul>
      
      </div>
    </div>
  
  </template>
  <script>
    
      export default{
          name:'menuapp',
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
          }
          }
  </script>