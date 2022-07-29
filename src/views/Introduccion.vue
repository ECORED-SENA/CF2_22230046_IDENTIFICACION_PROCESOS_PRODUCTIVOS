<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") Se da la bienvenida al componente formativo denominado “Procesos productivos sostenibles”, que hace parte del programa de formación complementaria “Identificación de procesos productivos con criterios de sostenibilidad”. A continuación se invita a observar el siguiente video. 
    
    .p-4.mt-5(style="background-color:#0E8282;")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/f9EEsVVGzA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
