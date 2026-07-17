<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 En la actualidad, las organizaciones desarrollan gran parte de sus procesos de comunicación, promoción y relacionamiento a través de medios digitales. Las redes sociales, los sitios web y otras plataformas de interacción generan información permanente sobre el comportamiento de los usuarios, lo que permite conocer cómo consumen contenidos, qué temas despiertan mayor interés y cuáles estrategias producen mejores resultados. En este contexto, la analítica digital se convierte en una herramienta fundamental para interpretar los datos y respaldar la toma de decisiones basada en evidencia.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La evaluación de métricas e indicadores permite medir el desempeño de publicaciones, campañas y estrategias de comunicación, comprender el comportamiento de las audiencias e identificar oportunidades de mejora. Complementariamente, el análisis de los aspectos visuales de los contenidos aporta elementos para valorar cómo el diseño, la organización gráfica y los recursos comunicativos influyen en la efectividad de los mensajes y en la interacción de los usuarios.
      .row.align-items-center.mb-0
        .col-xl
          .caja-1(data-aos="fade-right")
            p.mb-0 Este componente formativo desarrolla conocimientos y habilidades para utilizar herramientas de analítica digital, interpretar información estadística, evaluar contenidos desde una perspectiva comunicativa y visual, y formular acciones de optimización sustentadas en los resultados obtenidos. Asimismo, promueve la elaboración de planes de mejoramiento y el uso responsable de los contenidos digitales, de acuerdo con los principios de la propiedad intelectual, con el propósito de fortalecer las estrategias de comunicación en entornos digitales.
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.svg', alt='').m-auto
      
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
