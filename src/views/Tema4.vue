<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Métricas e indicadores en redes sociales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 Las redes sociales generan una gran cantidad de información relacionada con el comportamiento de los usuarios y el desempeño de los contenidos publicados. Esta información se expresa mediante métricas e indicadores que permiten evaluar si las estrategias digitales están alcanzando los resultados esperados.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='').m-auto
      .bg-1
        .px-5
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 Como se explicó en el capítulo anterior, las #[b métricas] corresponden a datos obtenidos directamente de las plataformas, mientras que los #[b indicadores] permiten interpretar esos datos para evaluar el rendimiento de las acciones desarrolladas. En este apartado se profundiza en las métricas más utilizadas para analizar el desempeño de los contenidos en redes sociales. 
          .row.justify-content-center.mb-0
            .col-xl-10
              .caja-10(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl.order-2.order-lg-1.fit___box_container
                    p El análisis de métricas e indicadores permite:
                    ul.fa-ul.estilo___ul.mb-3
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Evaluar campañas digitales.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Identificar fortalezas y oportunidades de mejora.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Optimizar los recursos.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Comprender el comportamiento de la audiencia.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Mejorar el rendimiento de las publicaciones.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Fortalecer la toma de decisiones.
                    p.mb-0 La importancia de cada métrica depende de los objetivos definidos para la estrategia o campaña digital.
                  .col-xl-auto.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/temas/t4/img3.jpg', alt='').m-auto
          Separador
          #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.1 Alcance, impresiones y visualizaciones
          p.mb-5 Uno de los primeros aspectos que se analiza en una estrategia digital es la capacidad que tiene un contenido para llegar a la audiencia. Para ello, las plataformas utilizan diferentes métricas relacionadas con la exposición de las publicaciones. Las principales características de estas métricas se presentan a continuación.
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t4/img4.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Alcance").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Corresponde a la cantidad de personas únicas que visualizaron una publicación. Cada usuario se contabiliza una sola vez, independientemente del número de ocasiones en que acceda al contenido. #[b Ejemplo:] si una publicación es vista por los usuarios A, B y C, el alcance corresponde a #[b tres personas alcanzadas].
                .row(titulo="Impresiones").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Representan el número total de veces que un contenido fue mostrado en pantalla. Un mismo usuario puede generar varias impresiones. #[i Ejemplo:] si el usuario A visualiza el contenido tres veces, el usuario B dos veces y el usuario C una vez, el total será de #[i seis impresiones].
                .row(titulo="Visualizaciones").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Se utilizan principalmente para contenidos audiovisuales y permiten conocer cuántas veces un video fue reproducido. Dependiendo de la plataforma, una visualización puede registrarse después de algunos segundos de reproducción.
      .row.justify-content-center.mb-0
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p Una empresa publica un video promocional y obtiene los siguientes resultados:
            .row.justify-content-center.align-items-center
              .col-xl.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Alcance: 8.000 personas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Impresiones: 12.500.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Visualizaciones: 5.200.
                p Estos resultados permiten concluir que:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | El contenido fue mostrado varias veces a algunos usuarios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Una parte importante de la audiencia reprodujo el video.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La campaña logró una exposición considerable.
              .col-xl-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t4/img5.png', alt='').m-auto
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Interacciones y #[i engagement]
      p.mb-5 Además de conocer el alcance de una publicación, resulta fundamental analizar la forma en que los usuarios interactúan con ella. Las interacciones reflejan el nivel de participación de la audiencia, mientras que el #[i engagement] permite evaluar el grado de conexión que esta mantiene con los contenidos de una organización. La información relacionada con estos indicadores puede organizarse de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-12.text-white.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img6.png', alt="" ).m-auto
              h4 Interacciones
              .caja-12_p
                p.mb-0 Corresponden a las acciones realizadas por los usuarios sobre un contenido, como #[b Me gusta], comentarios, contenidos compartidos, elementos guardados, respuestas, clics y otras reacciones. Una publicación con un alto número de interacciones suele indicar que el contenido despertó interés o resultó relevante para la audiencia.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-12.color-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img7.png', alt="" ).m-auto
              h4 #[i Engagement]
              .caja-12_p
                p.mb-0 Representa el nivel de participación, interés, fidelización y respuesta que mantiene la audiencia frente a los contenidos de una organización. Es uno de los indicadores más utilizados para evaluar el desempeño de las estrategias en redes sociales.
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            .row.justify-content-center.align-items-center
              .col-xl.mb-4.mb-lg-0
                h5.mb-0 Ejemplo práctico
                p Dos publicaciones presentan los siguientes resultados:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Publicación A.] Alcance: 10.000 personas. Interacciones: 150. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Publicación B.] Alcance: 4.000 personas. Interacciones: 600.
                p.mb-0 Aunque la publicación A alcanzó un mayor número de personas, la publicación B generó una participación significativamente superior. Por esta razón, puede considerarse más efectiva en términos de #[i engagement].
              .col-xl-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t4/img8.png', alt='').m-auto
      .bg-1
        .px-5
          p.mb-0 Entre los principales factores que influyen en este indicador se encuentran la relevancia del contenido publicado, la calidad visual de las piezas gráficas, la claridad del mensaje transmitido, el horario en que se realiza la publicación, el nivel de interés que el tema genera en la audiencia y el formato utilizado, como imágenes, videos, carruseles o historias. La combinación adecuada de estos elementos contribuye a incrementar la visibilidad, la interacción y el alcance de los contenidos en los medios digitales.
          Separador
          #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.3 Conversiones y acciones del usuario
          p.mb-5 Las conversiones corresponden a las acciones específicas que una organización espera que realicen los usuarios después de interactuar con un contenido. Estas acciones se encuentran alineadas con los objetivos estratégicos definidos para la campaña. Los principales aspectos relacionados con las conversiones son los siguientes: 
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-13.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img9.png', alt="" ).m-auto
                  h4.text-center Ejemplos de conversiones
                  .caja-12_p
                    p.mb-0 Registro a un evento, descarga de un documento, compra de un producto, diligenciamiento de un formulario, solicitud de información y suscripción a un boletín.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-13.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img10.png', alt="" ).m-auto
                  h4.text-center Interacción y conversión
                  .caja-12_p
                    p.mb-0 Mientras la interacción evidencia la participación del usuario, la conversión refleja el cumplimiento del objetivo esperado. Por ejemplo: #[b me gusta seguido de un registro, comentario que conduce a una compra y contenido compartido que genera una solicitud de servicio.]
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-13.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img11.png', alt="" ).m-auto
                  h4.text-center Embudo básico de conversión
                  .caja-12_p
                    p.mb-0 El recorrido del usuario puede representarse mediante la siguiente secuencia: #[b visualización, seguida de la interacción, posteriormente el clic y, finalmente, la conversión]. Cada etapa permite identificar oportunidades de optimización.
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-5(data-aos="zoom-in")
                .row.justify-content-center.align-items-center
                  .col-xl.mb-4.mb-lg-0
                    h5.mb-0 Ejemplo práctico
                    p Una publicación promocional obtiene los siguientes resultados:
                    ul.fa-ul.estilo___ul.mb-3
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | 20.000 visualizaciones.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | 800 clics.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | 150 registros.
                    p.mb-0 Estos resultados indican que muchas personas visualizaron el contenido, una parte manifestó interés mediante los clics y 150 usuarios completaron la acción esperada.
                  .col-xl-auto.col-md-9(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/temas/t4/img12.png', alt='').m-auto
      p.mb-0 Las conversiones permiten evaluar si una estrategia está generando resultados concretos y no únicamente visibilidad.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Interpretación de indicadores digitales
      p.mb-5 La recopilación de métricas solo adquiere valor cuando la información se interpreta correctamente. Interpretar indicadores implica analizar los datos para identificar patrones, tendencias y oportunidades de mejora que apoyen la toma de decisiones. Los principales aspectos que deben analizarse se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comparación histórica
                  p.mb-0 Permite evaluar la evolución de los resultados a lo largo del tiempo. #[b Ejemplo:] enero: 500 interacciones; febrero: 750; marzo: 1.000. Esta evolución evidencia una tendencia positiva de crecimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comparación entre contenidos
                  p.mb-0 Facilita identificar cuáles publicaciones obtienen un mejor desempeño y cuáles requieren optimización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comparación entre plataformas
                  p.mb-0 Permite establecer diferencias entre redes sociales. Por ejemplo: Instagram: 2.000 interacciones; Facebook: 900; LinkedIn: 400. Esta información ayuda a priorizar recursos según el comportamiento de cada plataforma.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Durante el proceso de interpretación conviene evitar los siguientes errores:
      .row.justify-content-center.mb-5
        .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-9.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img16.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Analizar una sola métrica de forma aislada.
        .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-9.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img17.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Comparar datos sin contexto.
        .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-9.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img18.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Ignorar los objetivos de la campaña.
        .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-9.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img19.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Interpretar resultados sin un período de referencia.
        .col-xl-2.col-md-9.mt-4(data-aos="zoom-in")
          .caja-9.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img20.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Tomar decisiones con información incompleta.
      p.mb-5 El proceso recomendado para interpretar indicadores comprende las siguientes etapas:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img21.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 1
              p.mb-0.text-center Identificar las métricas relevantes.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img22.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 2
              p.mb-0.text-center Comparar los resultados con los objetivos establecidos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img23.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 3
              p.mb-0.text-center Detectar tendencias y patrones.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img24.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 4
              p.mb-0.text-center Identificar fortalezas y oportunidades de mejora.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 5
              p.mb-0.text-center Proponer acciones correctivas o de optimización.
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-5(data-aos="zoom-in")
                .row.justify-content-center.align-items-center
                  .col-xl.mb-4.mb-lg-0
                    h5.mb-0 Ejemplo práctico
                    p Una campaña presenta los siguientes resultados:
                    ul.fa-ul.estilo___ul.mb-3
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Alcance alto
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Interacciones bajas
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Conversiones mínimas
                    p.mb-0 La información indica que la campaña logró visibilidad, pero no despertó suficiente interés para motivar acciones concretas por parte de la audiencia.
                  .col-xl-auto.col-md-9(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/temas/t4/img26.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img27.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Para mejorar el desempeño de este indicador, es recomendable implementar acciones orientadas a optimizar la calidad de los contenidos y su impacto en la audiencia. Entre ellas se encuentran fortalecer el mensaje para hacerlo más claro y atractivo, ajustar el diseño con el fin de mejorar la presentación visual, modificar el llamado a la acción para incentivar una mayor participación de los usuarios y optimizar la segmentación para dirigir las publicaciones al público más pertinente. Estas acciones contribuyen a incrementar la interacción, el alcance y la efectividad de la estrategia de comunicación digital.
      p.mb-0 La interpretación adecuada de métricas e indicadores permite transformar los datos generados por las redes sociales en información estratégica para evaluar resultados, fortalecer la toma de decisiones y optimizar continuamente las acciones digitales.

</template>

<script>
export default {
  name: 'Tema4',
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
