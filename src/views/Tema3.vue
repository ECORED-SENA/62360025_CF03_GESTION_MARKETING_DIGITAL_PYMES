<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Comportamiento de audiencias digitales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 Las audiencias digitales están conformadas por los usuarios que interactúan con los contenidos publicados en las diferentes plataformas digitales. Cada acción realizada por estos usuarios genera información que permite comprender sus hábitos, preferencias y formas de consumo de información.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Analizar el comportamiento de las audiencias facilita la toma de decisiones relacionadas con los contenidos, los horarios de publicación, los canales de comunicación y las estrategias implementadas. Para ello, las herramientas de analítica digital recopilan información relevante sobre diferentes variables del comportamiento de los usuarios. Entre las principales variables analizadas se encuentran las siguientes:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Intereses de los usuarios
                  p.mb-0.text-center Temáticas y contenidos de mayor afinidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Frecuencia de interacción
                  p.mb-0.text-center Nivel de participación de la audiencia.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Horarios de conexión
                  p.mb-0.text-center Momentos de mayor actividad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ubicación geográfica
                  p.mb-0.text-center Procedencia de los usuarios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Dispositivos utilizados
                  p.mb-0.text-center Equipos desde los cuales acceden a los contenidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Preferencias de navegación
                  p.mb-0.text-center Formatos y recorridos de consulta.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Rutas de acceso
                  p.mb-0.text-center Origen del tráfico hacia los contenidos.
          p.mb-0 La información recopilada permite construir estrategias digitales fundamentadas en datos y comprender con mayor precisión el comportamiento de las audiencias.
          Separador
          #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.1 Consumo de información en medios digitales
      .row.align-items-center.mb-5
        .col-xl
          p El consumo de información digital hace referencia a la forma en que las personas acceden, consultan, interpretan y utilizan los contenidos disponibles en internet y en las redes sociales. Cada usuario desarrolla hábitos particulares que influyen directamente en el rendimiento de las publicaciones.
          p.mb-0 Comprender estos hábitos permite adaptar los contenidos a las necesidades reales de la audiencia y fortalecer la efectividad de las estrategias digitales. Los principales factores que influyen en el consumo de información son los siguientes: 
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img11.png', alt='').m-auto
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Intereses personales
                  p.mb-0 Los usuarios suelen interactuar con contenidos relacionados con educación, entretenimiento, tecnología, negocios, salud y deporte. Las publicaciones alineadas con estos intereses tienen una mayor probabilidad de generar interacción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tiempo disponible
                  p.mb-0 La disponibilidad de tiempo influye en las preferencias de consumo de contenido. Con poco tiempo se prefieren videos cortos e historias; con un tiempo moderado, carruseles e infografías; y con mayor disponibilidad, artículos y videos de mayor duración.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Facilidad de acceso
                  p.mb-0 Los contenidos que cargan rápidamente, cuentan con un diseño adaptable, presentan mensajes claros y ofrecen una navegación sencilla; proporcionan una mejor experiencia al usuario y favorecen la interacción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p Una organización publica dos contenidos sobre un mismo tema.
            .row.justify-content-center.align-items-center.mb-3
              .col-xl.mb-4.mb-lg-0
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 3.
                  span Diferencias entre contenido textual y contenido visual
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Contenido A
                        th.texto-left Contenido B
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Texto extenso
                        td.texto-left Infografía
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Sin elementos visuales
                        td.texto-left Mensajes resumidos
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold - 
                        td.texto-left Diseño visual atractivo
              .col-xl-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t3/img15.png', alt='').m-auto
            p.mb-0 Generalmente, el contenido B obtiene mayores niveles de interacción porque facilita el consumo de la información.
      p.mb-0 Comprender cómo consume información la audiencia permite diseñar estrategias de comunicación más efectivas y adaptadas a sus preferencias. Al analizar sus hábitos de consumo es posible mejorar los formatos de publicación, optimizar los contenidos para hacerlos más relevantes, incrementar la interacción con los usuarios y fortalecer el alcance de las acciones de comunicación digital.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Análisis de comportamiento de usuarios
      p.mb-5 A continuación, se presenta un video sobre el análisis del comportamiento de los usuarios, en el que se explican los principales indicadores de analítica digital y su utilidad para interpretar las interacciones, comprender las preferencias de la audiencia y optimizar la experiencia de navegación.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/NHPBQvN2vNk?si=AYx0ybTRgkqO-cTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Análisis del comportamiento de los usuarios en entornos digitales
      .row.justify-content-center.mb-0
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p Una empresa identifica que una publicación presenta los siguientes resultados:
            .row.justify-content-center.align-items-center.mb-3
              .col-xl.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Muchas visualizaciones.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pocos comentarios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pocos clics.
              .col-xl-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t3/img16.png', alt='').m-auto
            p.mb-0 Estos resultados pueden indicar que el contenido logró captar la atención de los usuarios, pero no generó suficiente interés para motivar una interacción más activa.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Geolocalización y segmentación de audiencias
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-10(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl.order-2.order-lg-1.fit___box_container
                    p La geolocalización permite identificar la ubicación geográfica desde la cual los usuarios acceden a los contenidos digitales. Esta información facilita la adaptación de las estrategias de comunicación según las características regionales y las particularidades de cada audiencia. Las herramientas de analítica permiten obtener información como:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Países.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Departamentos.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Ciudades.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Regiones.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Zonas con mayor nivel de interacción.
                  .col-xl-auto.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/temas/t3/img17.jpg', alt='').m-auto
          p.mb-5 La información geográfica tiene diferentes aplicaciones dentro de una estrategia digital:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-11.text-white.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img18.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Adaptación de contenidos
                  p.mb-0.text-center Permite incorporar referencias locales, ajustar horarios y adaptar campañas según la región.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-11.color-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img19.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Segmentación de campañas
                  p.mb-0.text-center Facilita dirigir los contenidos a públicos específicos de acuerdo con su ubicación geográfica.
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-5(data-aos="zoom-in")
                h5.mb-0 Ejemplo práctico
                p Una institución educativa analiza la distribución geográfica de su audiencia y obtiene los siguientes resultados.
                .row.justify-content-center.align-items-center.mb-3
                  .col-xl.mb-4.mb-lg-0
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Bogotá: 40 %.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Medellín: 25 %.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Cali: 15 %.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Otras ciudades: 20 %.
                  .col-xl-auto.col-md-9(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/temas/t3/img20.png', alt='').m-auto
                p.mb-0 Con esta información puede fortalecer las campañas en las ciudades con mayor potencial de crecimiento y optimizar la distribución de los recursos.
      p.mb-5 Entre los principales beneficios de la geolocalización se encuentran:
      .row.justify-content-center.mb-0
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.color-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img21.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Mejor segmentación.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.color-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img22.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Optimización de campañas.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.color-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img23.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Comunicación más relevante.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-7.color-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img24.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Mejor aprovechamiento de los recursos.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Temporalización, dispositivos y hábitos de interacción
      p.mb-5 Además de conocer quiénes conforman la audiencia, resulta importante comprender cuándo interactúan, desde qué dispositivos acceden a los contenidos y cuáles son sus hábitos de participación. Estas variables permiten optimizar la programación y el diseño de las publicaciones.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Temporalización")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t3/img25.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Temporalización
              p Permite identificar los momentos en los que la audiencia presenta mayor actividad. La información obtenida incluye:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Días con mayor actividad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Horarios con mayor interacción.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Períodos de baja actividad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Tendencias de consumo.
              h5 Ejemplo de resultados:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | 8:00 a. m.: nivel medio.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | 12:00 m.: nivel alto.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | 3:00 p. m.: nivel bajo.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | 8:00 p. m.: nivel muy alto.
              p.mb-0 Esta información facilita programar las publicaciones en los horarios con mayor probabilidad de interacción.
        .py-3.py-md-4(titulo="Dispositivos utilizados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t3/img26.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Dispositivos utilizados
              p Permite identificar desde qué equipos acceden los usuarios a los contenidos. Los dispositivos más frecuentes son:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Teléfonos móviles.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Computadores portátiles.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Computadores de escritorio.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Tabletas.
              p.mb-0 Su análisis permite optimizar los formatos, mejorar la experiencia del usuario, adaptar los diseños y fortalecer la accesibilidad.
        .py-3.py-md-4(titulo="Hábitos de interacción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t3/img27.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Hábitos de interacción
              p Permite comprender la forma en que los usuarios responden a los contenidos publicados. Algunos comportamientos frecuentes son:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Preferencia por videos cortos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mayor participación en encuestas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Interacción principalmente durante la noche.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Consulta de contenidos desde dispositivos móviles.
              p.mb-0 Esta información facilita adaptar las estrategias de comunicación a las preferencias de la audiencia.
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p Una organización analiza el comportamiento de su audiencia durante un trimestre y obtiene los siguientes hallazgos:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El 82 % de los usuarios accede desde teléfonos móviles.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El mayor nivel de interacción ocurre entre las 7:00 p. m. y las 9:00 p. m.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Los videos generan más participación que las imágenes estáticas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Las ciudades principales concentran el mayor volumen de usuarios.
            p.mb-0 A partir de estos resultados, la organización puede ajustar los formatos, los horarios de publicación y la segmentación de sus contenidos para incrementar la efectividad de su estrategia digital.
      .caja-8.color-4(data-aos="flip-up")
        .row.align-items-center
          .col-xl.col-md-10.order-2.order-lg-1
            p.mb-0 Comprender el comportamiento de las audiencias digitales permite interpretar adecuadamente la información obtenida mediante las herramientas de analítica, identificar patrones de consumo y optimizar las estrategias de comunicación de acuerdo con las características reales de los usuarios.
          .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t3/img28.svg', alt='' style="width: 72px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
