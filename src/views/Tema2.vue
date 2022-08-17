<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sostenibilidad

    .row
      .col-md-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-right")
      .col-md-7
        .cajon-b.color-acento-contenido(data-aos="fade-left")
          p.mb-0.mt-4 El concepto de sostenibilidad viene anexo a diferentes épocas, pero también ramas de operatividad como la economía, el ambiente y la sociedad. En ese sentido, el reto de la sostenibilidad está aunado a la actividad antropogénica sistémica en pro de reducir el cambio climático, la escasez de recursos naturales desde una mirada global y desde el desarrollo sostenible tal como se menciona en el objetivo de desarrollo sostenible 11, que busca que las ciudades puedan lograr ser más inclusivas, seguras, resilientes y sostenibles.
        p.mt-4(data-aos="fade-left") La sostenibilidad resulta de entender la manera en que el medio ambiente opera de manera sistémica e interconectada. En ese sentido, se entiende como sostenibilidad la gestión de recursos que permite satisfacer las necesidades actuales sin poner en peligro las generaciones futuras, todo esto en un marco de desarrollo local desde una mirada ecológica, económica y social.
        p.mt-4.parrafo_2_1(data-aos="fade-left" style="position:relative;z-index:1;") Por tal razón, es menester entender que el concepto de sostenibilidad se debe anexar a los ambientes sociales, urbanos, productivos y económicos que resultan de las capacidades locales y del equilibrio entre la población humana y los sistemas ambientales y de producción.

    p.mt-5(data-aos="fade-up") El siguiente recurso educativo le presentará más conceptos de sostenibilidad:

    .mt-4.p-4(style="background-color:#0E8282;")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/pd7gMTiQmU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    .row.mt-5
      .col-md-9(style="place-self:center")
        div.cont_2_1.p-3(style="position:relative;")
          p(data-aos="fade-up" style="position:relative") Con esto, también se pretende que los organismos vivos no solamente seres humanos, sino animales, tengan garantías de vida y desarrollo. En lo que tiene que ver con el desarrollo, las sociedades modernas avanzan hacia la sostenibilidad cuando pueden convivir con diferentes culturas y estas alcanzan el desarrollo humano en tanto tienen recursos, educación y salud, lo que lleva a que la sostenibilidad se dé en un marco de igualdad social.
          .p.mt-4(data-aos="fade-up" style="position:relative") Además, la sostenibilidad debe ser la meta de toda organización económica, porque esto garantiza una producción sostenible y la preservación, ya que los costes ambientales se reducen y contribuyen a la reducción de los gases efecto invernadero, ayudando a combatir el cambio climático y con esto, el calentamiento global.
      .col-md-3(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-left" style="position:relative")

    Separador

    .titulo-segundo
      h2#t_2_1 2.1 Criterios de sostenibilidad

    p(data-aos="fade-up") La manera en que debe operar la sostenibilidad se da bajo criterios ambientales, económicos y sociales, como se evidencia en la figura 1. Para esto, es necesario tener en cuenta que la sostenibilidad funciona de forma reticular, lo cual responde a una relación dialógica entre criterios; sin embargo, cada criterio de sostenibilidad tiene sus propias características a fin de contribuir al cambio social, a una perspectiva global y al desarrollo sostenible.

    .titulo-sexto.color-primario.mt-5(data-aos="fade-up")
      h5 Figura 1
      span Criterios de sostenibilidad

    figure.mt-4
      img(src="@/assets/curso/tema2/3.png" data-aos="zoom-in-up")
    figcaption.mt-3(style="font-weight:500;") Nota. SENA (2022) 

    p.mt-5(data-aos="fade-up") #[strong.p-1(style="background-color:#E8F7FF;") La sostenibilidad ambiental] se logra cuando las organizaciones generan un equilibrio y armonía en el desarrollo de sus actividades con el entorno al cual pertenecen, es decir, logran producir bienes y servicios sin poner en riesgo o amenaza los recursos naturales y logran minimizar los impactos ambientales. Lo anterior, se da en referencia a aspectos bióticos y abióticos en la productividad, fomentando su preservación y el desarrollo del ser humano desde el cuidado del medio ambiente.
    p.mt-4(data-aos="fade-up") Las organizaciones cuentan con diferentes indicadores para evaluar el desarrollo de la sostenibilidad ambiental, entre los que se destacan:

    br
    .cont_3_1.mt-5.pb-5(style="position:relative")
      SlyderF.p-5(columnas="col-lg-4" style="background-color:white;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.15);border-radius:15px;")
        .tarjeta.color-acento-botones.p-0(style="background-color:rgb(155, 203, 203);")
          .row.justify-content-center
            .col-8.ps-2.pe-2.pt-4.pb-4(style="border-top-left-radius:20px;border-top-right-radius:20px;")
              img(src='@/assets/curso/tema2/5.svg' alt='' style="max-width:200px;height:200px;")
          .ps-2.pe-2.pt-4.pb-4(style="background-color:#DFF6F5;border-bottom-left-radius:20px;border-bottom-right-radius:20px;")
            h5.mb-0.text-center Consumo de agua
        .tarjeta.color-acento-botones.p-0(style="background-color:rgb(155, 203, 203);")
          .row.justify-content-center
            .col-8.ps-2.pe-2.pt-4.pb-4(style="border-top-left-radius:20px;border-top-right-radius:20px;")
              img(src='@/assets/curso/tema2/6.svg' alt='' style="max-width:200px;height:200px;")
          .ps-2.pe-2.pt-4.pb-4(style="background-color:#DFF6F5;border-bottom-left-radius:20px;border-bottom-right-radius:20px;")
            h5.mb-0.text-center Consumo energético 
        .tarjeta.color-acento-botones.p-0(style="background-color:rgb(155, 203, 203);")
          .row.justify-content-center
            .col-8.ps-2.pe-2.pt-4.pb-4(style="border-top-left-radius:20px;border-top-right-radius:20px;")
              img(src='@/assets/curso/tema2/7.svg' alt='' style="max-width:200px;height:200px;")
          .ps-2.pe-2.pt-4.pb-4(style="background-color:#DFF6F5;border-bottom-left-radius:20px;border-bottom-right-radius:20px;")
            h5.mb-0.text-center Cantidad de residuos generados
        .tarjeta.color-acento-botones.p-0(style="background-color:rgb(155, 203, 203);")
          .row.justify-content-center
            .col-8.ps-2.pe-2.pt-4.pb-4(style="border-top-left-radius:20px;border-top-right-radius:20px;")
              img(src='@/assets/curso/tema2/8.svg' alt='' style="max-width:200px;height:200px;")
          .ps-2.pe-2.pt-4.pb-4(style="background-color:#DFF6F5;border-bottom-left-radius:20px;border-bottom-right-radius:20px;")
            h5.mb-0.text-center Emisiones de CO#[sub 2]
        .tarjeta.color-acento-botones.p-0(style="background-color:rgb(155, 203, 203);")
          .row.justify-content-center
            .col-8.ps-2.pe-2.pt-4.pb-4(style="border-top-left-radius:20px;border-top-right-radius:20px;")
              img(src='@/assets/curso/tema2/9.svg' alt='' style="max-width:200px;height:200px;")
          .ps-2.pe-2.pt-4.pb-4(style="background-color:#DFF6F5;border-bottom-left-radius:20px;border-bottom-right-radius:20px;")
            h5.mb-0.text-center Calidad del aire
        .tarjeta.color-acento-botones.p-0(style="background-color:rgb(155, 203, 203);")
          .row.justify-content-center
            .col-8.ps-2.pe-2.pt-4.pb-4(style="border-top-left-radius:20px;border-top-right-radius:20px;")
              img(src='@/assets/curso/tema2/10.svg' alt='' style="max-width:200px;height:200px;")
          .ps-2.pe-2.pt-4.pb-4(style="background-color:#DFF6F5;border-bottom-left-radius:20px;border-bottom-right-radius:20px;")
            h5.mb-0.text-center Aguas residuales

    br
    .row.mt-5
      .col-md-4
        figure
          img(src="@/assets/curso/tema2/11.png" data-aos="fade-right")
      .col-md-8
        p.mt-4(data-aos="fade-up") En lo que tiene que ver con la sostenibilidad económica se puede entender que esta busca obtener un crecimiento económico teniendo en cuenta la adecuada optimización de los recursos, lograr generar capital de manera que las actividades de producción de bienes y servicios respondan a procesos sostenibles en el tiempo, materia prima y rentabilidad desde una visión de equidad económica y social, satisfaciendo las necesidades de las generaciones actuales sin poner en riesgo las futuras. 
        p.mt-4(data-aos="fade-up") En lo referente a la sostenibilidad social, esta es conexa a la estabilidad de las poblaciones y de los empleados en cuanto a los valores que tienen los recursos naturales, y el satisfacer sus necesidades desde un patrón de conducta desde la equidad y armonía, es decir, la sostenibilidad social parte de la educación para que las personas puedan vivir en comunidad y promuevan la preservación tanto de la cultura como del medio en el que viven, siendo un elemento fundamental de este criterio la equidad en tres dimensiones, una donde se incluye la población más desfavorecida y vulnerable, como también la participación y liderazgo de las mujeres, otra donde la dimensión de equidad incluye los efectos sobre las próximas generaciones y por último, el análisis de presión ejercida entre países de acuerdo con su nivel de desarrollo.
        p.mt-4(data-aos="fade-up") Es importante que las organizaciones enfoquen este criterio de sostenibilidad analizando las consecuencias que generan en el ámbito social con el desarrollo propio de su actividad, es decir, desde una óptica que incluya la población interna y externa, todos los grupos de interés, como por ejemplo, trabajadores, clientes, proveedores, comunidad local y población en general.

    p.mt-5(data-aos="fade-up") Algunas de las opciones que tienen las organizaciones para analizar y medir el criterio de sostenibilidad social son:

    .row.col-md-10.m-auto.mt-5
      .col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/12.png' alt='')
          .tarjeta.tarjeta--azul.d-flex.justify-content-center.p-4(style="background-color:#CEE6E6;")
            .pb-0.d-flex.justify-content-center.align-items-center
              h5.mb-0.ps-3(data-aos="fade-up") Empleados (diversidad e inclusión)
      .col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/13.png' alt='')
          .tarjeta.tarjeta--azul.d-flex.justify-content-center.p-4(style="background-color:#CEE6E6;")
            .pb-0.d-flex.justify-content-center.align-items-center
              h5.mb-0.ps-3(data-aos="fade-up") Bienestar de los empleados y clientes

    .row.col-md-10.m-auto
      .col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/14.png' alt='')
          .tarjeta.tarjeta--azul.d-flex.justify-content-center.p-4(style="background-color:#CEE6E6;")
            .pb-0.d-flex.justify-content-center.align-items-center
              h5.mb-0.ps-3(data-aos="fade-up") Salud y seguridad de los empleados
      .col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/15.png' alt='')
          .tarjeta.tarjeta--azul.d-flex.justify-content-center.p-4(style="background-color:#CEE6E6;")
            .pb-0.d-flex.justify-content-center.align-items-center
              h5.mb-0.ps-3(data-aos="fade-up") Prácticas laborales

    .row.col-md-10.m-auto
      .col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/16.png' alt='')
          .tarjeta.tarjeta--azul.d-flex.justify-content-center.p-4(style="background-color:#CEE6E6;")
            .pb-0.d-flex.justify-content-center.align-items-center
              h5.mb-0.ps-3(data-aos="fade-up") Relaciones comunitarias
      .col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/17.png' alt='')
          .tarjeta.tarjeta--azul.d-flex.justify-content-center.p-4(style="background-color:#CEE6E6;")
            .pb-0.d-flex.justify-content-center.align-items-center
              h5.mb-0.ps-3(data-aos="fade-up") Seguridad de datos

    Separador

    .titulo-segundo
      h2#t_2_2 2.2. Elementos clave de sostenibilidad en los procesos de la organización    

    p(data-aos="fade-up") El modelo de desarrollo actual se debe considerar obsoleto, debido a que no se puede seguir pensando en un crecimiento ilimitado en un planeta finito, pues el enfoque no solo debe encaminarse hacia un beneficio económico, dejando a un lado los beneficios sociales y ambientales.
    p.mt-4(data-aos="fade-up") Es por ello que hoy en día las organizaciones juegan un papel importante, pues su responsabilidad es mayor frente al reconocimiento de sus impactos y el diseño de estrategias que le permitan hacer frente al gran desafío de lograr un desarrollo sostenible, de tal manera que permitan mejorar las formas de convivir con la sociedad y el medio que las rodea.
    p.mt-4(data-aos="fade-up") Por ende, la implementación de la sostenibilidad en los procesos de la organización está ligada a:

    .row.mt-5
      .col-lg-3.mb-4
        .mb-5.p-3.cont_final_tema2(style="background-color:#0E8282;border-radius:20px;box-shadow:0px 17px 15px rgba(0,0,0,.20);position:relative;height:100%;")
          figure.text-center.mt-4.p-4.col-9.m-auto(style="background-color:#1FA7A7;border-radius:20px;")
            img(src="@/assets/curso/tema2/18.png" data-aos="zoom-in-up" style="display:inline;width:150px;height:150px;")
          p.mt-4(style="color:white;" data-aos="fade-up") #[strong El aprovechamiento óptimo de los recursos, pensando en su cuidado y preservación]
          h1.mb-0.text-end.mt-5(style="color:rgb(236,245,245,0.37);font-size:80px;position:absolute;bottom:0;right:10px" data-aos="fade-up") 01
      .col-lg-3.mb-4
        .mb-5.p-3.cont_final_tema2(style="background-color:#0E8282;border-radius:20px;box-shadow:0px 17px 15px rgba(0,0,0,.20);position:relative;height:100%;")
          figure.text-center.mt-4.p-4.col-9.m-auto(style="background-color:#1FA7A7;border-radius:20px;")
            img(src="@/assets/curso/tema2/19.png" data-aos="zoom-in-up" style="display:inline;width:150px;height:150px;")
          p.mt-4(style="color:white;" data-aos="fade-up") #[strong Desarrollo e implementación de tecnologías innovadoras que creen soluciones sostenibles a nivel económico, social y ambiental.]
          h1.mb-0.text-end.mt-5(style="color:rgb(236,245,245,0.37);font-size:80px;position:absolute;bottom:0;right:10px" data-aos="fade-up") 02
      .col-lg-3.mb-4
        .mb-5.p-3.cont_final_tema2(style="background-color:#0E8282;border-radius:20px;box-shadow:0px 17px 15px rgba(0,0,0,.20);position:relative;height:100%;")
          figure.text-center.mt-4.p-4.col-9.m-auto(style="background-color:#1FA7A7;border-radius:20px;")
            img(src="@/assets/curso/tema2/20.png" data-aos="zoom-in-up" style="display:inline;width:150px;height:150px;")
          p.mt-4(style="color:white;" data-aos="fade-up") #[strong Limitar la utilización de los recursos de tal manera que se utilicen los recursos renovables, sin superar su ritmo de generación y sustituir paulatinamente la utilización de recursos no renovables por recursos renovables.]
          h1.mb-0.text-end.mt-5(style="color:rgb(236,245,245,0.37);font-size:80px;position:absolute;bottom:0;right:10px" data-aos="fade-up") 03
      .col-lg-3.mb-4
        .mb-5.p-3.cont_final_tema2(style="background-color:#0E8282;border-radius:20px;box-shadow:0px 17px 15px rgba(0,0,0,.20);position:relative;height:100%;")
          figure.text-center.mt-4.p-4.col-9.m-auto(style="background-color:#1FA7A7;border-radius:20px;")
            img(src="@/assets/curso/tema2/21.png" data-aos="zoom-in-up" style="display:inline;width:150px;height:150px;")
          p.mt-4(style="color:white;" data-aos="fade-up") #[strong Buscar no solo el crecimiento empresarial, si no también generar un desarrollo que sea sostenible en el tiempo desde el ambiente económico, social y ambiental.]
          h1.mb-0.text-end.mt-5(style="color:rgb(236,245,245,0.37);font-size:80px;position:absolute;bottom:0;right:10px" data-aos="fade-up") 04









</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cajon-b.color-acento-contenido:before
  background-color: #F8EAEA
.cajon-b:before
  right: 35%
  opacity: 1
.parrafo_2_1:before
  position: absolute
  content: ''
  background-color: #F8EAEA
  z-index: -1
  width: 63%
  height: 58%
  right: 0
  bottom: 0
.cont_2_1:after
  content: ''
  position: absolute
  width: 30px
  height: 10px
  background-color: #29C4BB
  left: -2%
  top: -10%
.cont_2_1:before
  content: ''
  position: absolute
  width: 117%
  height: 120%
  left: -2%
  top: -10%
  background-color: #C9F0EE
.cont_3_1:before
  position: absolute
  content: ''
  width: 115%
  height: 110%
  left: -7%
  background: url(../assets/curso/tema2/4.png)
  background-repeat: no-repeat
  background-size: cover
.cont_final_tema2:before
  content: ''
  position: absolute
  width: 40px
  height: 44px
  top: 40px
  left: -15px
  border-radius: 100%
  background-color: white
.cont_final_tema2:hover
  background-color: #29C4C4 !important
  cursor: pointer
.cont_final_tema2:hover p
  color: #12263F !important
.cont_final_tema2:hover figure
  background-color: #0E8282 !important
@media only screen and (max-width: 720px)
  .cont_2_1:before
    width: 100%
</style>
