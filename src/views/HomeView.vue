<template>
  <div class="container-fluid" id="conta">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://img.freepik.com/foto-gratis/modelo-demostrando-aretes-anillo_7502-7042.jpg?w=740&t=st=1666573624~exp=1666574224~hmac=69dc2ad1bb1795c5060a308fae0934b7b3fedfe5fa89387d36335496bb53f274" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>ARGOAPP</h5>
          <p>SOFTWARE PARA ADMINISTRACION DE JOYERIAS</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://img.freepik.com/foto-gratis/joyas-brillan-anillos-bodas-oro-que-yacen-cuero_8353-763.jpg?w=740&t=st=1666573832~exp=1666574432~hmac=f89116c9e829e30ee81b6dfe851bce84970e3a586d39f0e321a49b6e914d0acf" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>DEMOSTRACION DE PRODUCTOS</h5>
          <p>ESCALABILIDAD</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://img.freepik.com/foto-gratis/joyas-oro-ventana-tienda_1398-4127.jpg?w=740&t=st=1666573857~exp=1666574457~hmac=3bcf6cf7110fe8c5b643f22de12f227eefbd6df8c5d0cea1df03f74e258139b4" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>ACCESO</h5>
          <p>DETALLE DE CADA ASPECTO TOMADO EN CUENTA</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  #conta{
    height: 900px;
  }
  h5,p, span{
    text-shadow: black 0.1em 0.1em 0.2em ;
  }
</style>