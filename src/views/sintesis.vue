<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-up") Para que las organizaciones logren una producción sostenible es necesario que evolucionen y cambien la forma como antiguamente se relacionaban con el ambiente y la sociedad, se requiere que apropien y desarrollen una responsabilidad  verdadera y que operen bajo criterios de sostenibilidad económicos, sociales y ambientales, que no se base en una obligación que se debe cumplir sino que se haga de manera consciente, que se logre incorporar en todas y cada una de las etapas y áreas de la organización, incluyendo un factor importante como es el ciclo de vida del producto,  generando beneficios de diferente índole, por ejemplo, de manera directa a la organización relacionados con la adecuada utilización de los recursos y de los gastos operacionales.
    p.mt-4(data-aos="fade-up") También  lograr contribuir al ambiente reduciendo los efectos negativos a causa del desarrollo de producción, empleando menor cantidad de recursos y logrando resultados iguales o superiores, como también aportar a la humanidad brindado bienestar, debido a que se garantiza la gestión de los recursos finitos del planeta a través de una economía responsable.
    p.mt-4(data-aos="fade-up") Además es de resaltar que la producción sostenible está ligada directamente con el consumo responsable, porque a medida y de acuerdo con lo que la sociedad demande las empresas producen. Existen formas de medir el impacto que se genera y una de ellas es mediante las huellas ecológicas de carbono e hídrica.
    p.mt-4(data-aos="fade-up") Así pues, un resumen de lo visto en el presente componente podrá ser visualizado en el siguiente mapa conceptual:


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
