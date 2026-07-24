<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Recolección y análisis de estadísticas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 Las estrategias digitales generan de manera permanente información relacionada con el desempeño de las publicaciones, las campañas y el comportamiento de las audiencias. Sin embargo, los datos por sí solos no generan valor si no se recopilan, organizan e interpretan de forma adecuada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='').m-auto
      .bg-1
        .px-5
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img2.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 La recolección y el análisis de estadísticas consisten en obtener información procedente de diferentes plataformas digitales, estructurarla e interpretarla para apoyar la toma de decisiones. Este proceso transforma datos dispersos en información útil para evaluar resultados y fortalecer la mejora continua de las estrategias de comunicación digital. Responder preguntas como las siguientes facilita orientar el proceso de análisis:
          .row.justify-content-center.mb-0
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué publicaciones generan mejores resultados?
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué campañas tienen mayor efectividad?
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué contenidos requieren ajustes?
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué segmentos de audiencia responden mejor?
            .col-xl-2.col-md-9(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué acciones deben fortalecerse?
          Separador
          #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.1 Técnicas de recolección de datos
          p.mb-5 La recolección de datos corresponde al proceso mediante el cual se obtiene información proveniente de plataformas digitales, herramientas de analítica y sistemas de monitoreo. La calidad del análisis depende directamente de la calidad de los datos recopilados. Las organizaciones pueden obtener información desde diferentes fuentes y mediante distintos métodos de recolección: 
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Redes sociales
                      p Permiten recopilar información relacionada con: 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Alcance.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Interacción.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Crecimiento de la audiencia.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Visualizaciones.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Clics.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Plataformas web
                      p Facilitan analizar aspectos como:
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Visitas.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Navegación.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Tiempo de permanencia.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Páginas consultadas.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Campañas digitales
                      p Permiten recopilar información sobre:
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Conversiones.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Registros.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Respuestas.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | Comportamiento de los usuarios.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Recolección automática
                      p.mb-0 La información es generada directamente por herramientas de analítica, como Meta Business Suite, Instagram Insights o Google Analytics.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Recolección manual
                      p.mb-0 Consiste en registrar periódicamente información para realizar seguimiento. Por ejemplo: seguidores, alcance e interacciones.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-5(data-aos="zoom-in")
                h5.mb-0 Ejemplo práctico
                p Una empresa desea evaluar el desempeño mensual de su cuenta de Instagram. Durante cuatro semanas registra la siguiente información.
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 4.
                  span Resultados semanales de alcance e interacción 
                .tabla-a(data-aos="zoom-in").mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Semana
                        th.texto-left Descripción
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold 1
                        td.texto-left Alcance: 4.500. Interacciones: 300.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold 2
                        td.texto-left Alcance: 5.200. Interacciones: 380.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold 3
                        td.texto-left Alcance: 6.000. Interacciones: 450.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold 4
                        td.texto-left Alcance: 6.500. Interacciones: 520.
                p.mb-0 Estos registros permiten identificar tendencias y realizar análisis posteriores sobre el comportamiento de la audiencia.
          p.mb-5 Para garantizar la calidad de la información recopilada, se recomienda:
          .row.justify-content-center.mb-0
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t5/img8.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Definir objetivos de medición.
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t5/img9.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Recopilar datos de forma periódica.
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t5/img10.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Utilizar fuentes confiables.
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t5/img11.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Mantener registros organizados.
            .col-xl-2.col-md-9.mt-4(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t5/img12.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Verificar la consistencia de la información.
          Separador
          #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.2 Organización de la información estadística
          p.mb-5 Una vez recopilados los datos, es necesario organizarlos para facilitar su interpretación. Una estructura adecuada favorece la identificación de patrones, agiliza el análisis y mejora la toma de decisiones. Cuando la información se encuentra dispersa, aumenta el riesgo de errores, se dificulta el análisis y se retrasa la interpretación de los resultados. La organización de la información puede realizarse mediante diferentes herramientas y criterios:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t5/img13.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Herramientas utilizadas").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Excel para consolidar información; Google Sheets para el trabajo colaborativo; #[i dashboards] para el seguimiento de indicadores y software de #[i analytics] para generar reportes automáticos.
                .row(titulo="Clasificación por tiempo").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Diario, semanal, mensual o trimestral.
                .row(titulo="Clasificación por plataforma").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Facebook, Instagram, LinkedIn, YouTube o sitio web.
                .row(titulo="Clasificación por indicador").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Alcance, interacción, conversiones o crecimiento.
      .row.justify-content-center.mb-0
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p La siguiente información permite comparar el desempeño de diferentes plataformas.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Comparación de indicadores de rendimiento por plataforma digital
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Plataforma
                    th.texto-left Descripción
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Instagram
                    td.texto-left Alcance: 15.000. Interacciones: 1.500. Conversiones: 180.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Facebook
                    td.texto-left Alcance: 10.000. Interacciones: 700. Conversiones: 90.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold LinkedIn
                    td.texto-left Alcance: 5.000. Interacciones: 400. Conversiones: 60.
            p.mb-0 La organización de la información facilita realizar comparaciones rápidas e identificar oportunidades de mejora.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Identificación de tendencias y campañas digitales
      p.mb-5 Una tendencia corresponde a un comportamiento que se mantiene o se repite durante un período determinado. Su análisis permite identificar patrones de evolución en el desempeño de los contenidos y las campañas digitales, anticipar cambios en el comportamiento de las audiencias, optimizar las estrategias de comunicación y fortalecer la toma de decisiones. Para ello, es posible analizar variables como el crecimiento de la audiencia, la evolución de las interacciones, el rendimiento de las campañas, los formatos de contenido preferidos y el comportamiento de la audiencia a lo largo del tiempo.
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in").mb-3
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Tendencia positiva
            figure(data-aos="zoom-in").mb-4
              img(src='@/assets/curso/temas/t5/img14.png', alt='Gráfico de líneas sobre el crecimiento de la participación de la audiencia que presenta el número de interacciones por mes entre enero y abril, con valores de 800, 1.000, 1.300 y 1.700, y una tendencia ascendente sostenida. ').m-auto
            p.mb-0 Los resultados evidencian un crecimiento sostenido de la participación de la audiencia, lo que sugiere que los contenidos y las estrategias implementadas están generando mayor interés e interacción. Esta tendencia indica un desempeño favorable que conviene mantener y fortalecer.
          .caja-5(data-aos="zoom-in").mb-3
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Tendencia negativa
            figure(data-aos="zoom-in").mb-4
              img(src='@/assets/curso/temas/t5/img15.png', alt='Gráfico de líneas sobre la disminución de la visibilidad que presenta el alcance mensual entre enero y abril, con valores de 15.000, 13.000, 11.000 y 9.000, y una tendencia descendente progresiva. ').m-auto
            p.mb-0 Los resultados muestran una disminución progresiva de la visibilidad de los contenidos, lo que puede estar asociado con factores como cambios en el comportamiento de la audiencia, menor frecuencia de publicación o una estrategia de difusión poco efectiva. Esta tendencia requiere analizar sus causas y realizar ajustes para recuperar el alcance.
          .caja-5.color-4(data-aos="zoom-in").mb-3
            p.mb-0 Permite comparar indicadores como alcance, interacción, conversiones, costo y retorno esperado para determinar cuál campaña obtuvo mejores resultados.
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p Al comparar dos campañas se obtienen los siguientes resultados:
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Comparación del rendimiento de campañas digitales
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Campaña
                    th.texto-left Descripción
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold A
                    td.texto-left Alcance: 20.000. Interacciones: 1.200. Conversiones: 150.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold B
                    td.texto-left Alcance: 15.000. Interacciones: 1.800. Conversiones: 280.
            p.mb-0 Aunque la campaña A alcanzó un mayor número de personas, la campaña B obtuvo mejores resultados en participación y conversiones.
      p El análisis de tendencias permite:
      .row.justify-content-center.mb-0
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .p-4
              p.mb-0.text-center.text-weight-bold Fortalecer los contenidos exitosos.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .p-4
              p.mb-0.text-center.text-weight-bold Corregir estrategias poco efectivas.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .p-4
              p.mb-0.text-center.text-weight-bold Optimizar los recursos.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-4.h-100
            .p-4
              p.mb-0.text-center.text-weight-bold Mejorar los resultados futuros.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Elaboración de reportes de resultados
      p.mb-5 Los reportes permiten organizar y comunicar la información analizada para facilitar la toma de decisiones. Un reporte transforma datos complejos en información comprensible para directivos, equipos de comunicación y responsables de campañas digitales. Los principales elementos que conforman un reporte se presentan a continuación: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Objetivos
                  p.mb-0 Resumir los resultados, facilitar su interpretación, comunicar los hallazgos, apoyar la toma de decisiones y documentar el desempeño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estructura
                  p Incluye el objetivo del análisis, los datos recopilados, los resultados obtenidos, la interpretación y las recomendaciones.
                  h5 Ejemplo de resultados
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Alcance total: 50.000
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Interacciones: 4.500
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Conversiones: 620
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Nuevos seguidores: 1.200
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Hallazgos
                  p.mb-0 Crecimiento positivo de la audiencia, incremento de la interacción y mejor desempeño de los contenidos audiovisuales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recomendaciones
                  p.mb-0 Aumentar la producción de video, fortalecer las publicaciones en horario nocturno y optimizar los llamados a la acción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img19.png', alt='' style="max-width: 500px").m-auto
      .bg-carrusel-1
        .px-5
          p.mb-5 Para elaborar reportes de calidad, es importante seleccionar información relevante y presentarla de manera clara, organizada y fácil de interpretar. Asimismo, se recomienda incluir figuras, gráficos o tablas únicamente cuando aporten valor al análisis y faciliten la comprensión de los resultados, evitar el exceso de información que pueda dificultar la lectura y formular recomendaciones concretas que orienten la toma de decisiones y la mejora continua de las estrategias implementadas. El proceso de análisis estadístico comprende las siguientes etapas:
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img20.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 1
              p.mb-0.text-center Recolectar los datos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img21.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 2
              p.mb-0.text-center Organizar la información.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img22.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 3
              p.mb-0.text-center Analizar las tendencias.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img23.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 4
              p.mb-0.text-center Elaborar los reportes.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img24.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 5
              p.mb-0.text-center Identificar oportunidades de mejora.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 6
              p.mb-0.text-center Implementar acciones correctivas.
          p.mb-0 La recolección y el análisis de estadísticas constituyen una etapa fundamental de la analítica digital, ya que permiten convertir los datos en conocimiento útil para evaluar estrategias, comprender el comportamiento de las audiencias y optimizar continuamente las acciones desarrolladas en los entornos digitales.

</template>

<script>
export default {
  name: 'Tema5',
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
