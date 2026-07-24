<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Comunicación visual y evaluación de contenidos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 La comunicación digital no depende únicamente de las métricas y los indicadores obtenidos mediante las plataformas de analítica. Los resultados también están influenciados por la forma en que las audiencias perciben los contenidos desde el punto de vista visual.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img1.png', alt='').m-auto
      .bg-1
        .px-5
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img2.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 Cada imagen, color, tipografía, forma o elemento gráfico transmite información que influye en la interpretación del mensaje. Por esta razón, además de analizar indicadores cuantitativos, las organizaciones deben evaluar los aspectos visuales de sus publicaciones para determinar si comunican de manera efectiva los objetivos planteados.
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-10(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl.order-2.order-lg-1.fit___box_container
                    p La comunicación visual estudia cómo los elementos gráficos transmiten mensajes, generan percepciones e influyen en el comportamiento de los usuarios. Un contenido con una adecuada comunicación visual contribuye a:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Captar la atención.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Facilitar la comprensión.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Fortalecer la identidad de marca.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Generar recordación.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Incrementar la interacción.
                  .col-xl-auto.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/temas/t6/img3.jpg', alt='').m-auto
          p.mb-0 Por el contrario, las deficiencias visuales pueden afectar negativamente el desempeño de una estrategia digital.
          Separador
          #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.1 Teoría de la imagen aplicada a redes sociales
          p La teoría de la imagen estudia la manera en que las personas interpretan los mensajes visuales. En las redes sociales, las imágenes suelen constituir el primer elemento que influye en la decisión del usuario de interactuar con una publicación o continuar navegando.
          p.mb-5 Por esta razón, la selección y construcción de las imágenes debe responder a criterios comunicativos y estratégicos. Las principales funciones de la imagen en la comunicación digital son las siguientes.
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-13.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img4.png', alt="" ).m-auto
                  h4.text-center Informativa
                  .caja-12_p
                    p.mb-0.text-center Facilita la transmisión de información mediante recursos como infografías, diagramas y gráficos estadísticos.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-13.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img5.png', alt="" ).m-auto
                  h4.text-center Persuasiva
                  .caja-12_p
                    p.mb-0.text-center Busca influir en las decisiones o comportamientos de los usuarios. Se utiliza en campañas promocionales, publicidad digital y lanzamiento de productos.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-13.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img6.png', alt="" ).m-auto
                  h4.text-center Emocional
                  .caja-12_p
                    p.mb-0.text-center Genera emociones o sentimientos mediante historias inspiradoras, campañas sociales y contenidos institucionales.
      p.mb-5 La percepción de una imagen también depende de diversos elementos visuales.
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Color
              p.mb-0.text-center Genera asociaciones emocionales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Tamaño
              p.mb-0.text-center Define la importancia de los elementos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Ubicación
              p.mb-0.text-center Orienta la atención del usuario.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Contraste
              p.mb-0.text-center Favorece la legibilidad.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Composición
              p.mb-0.text-center Organiza la información visual.
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-5(data-aos="zoom-in")
                h5.mb-0 Ejemplo práctico
                p Dos publicaciones comunican exactamente la misma información.
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 7.
                  span Comparación de las características visuales de dos publicaciones digitales
                .tabla-a(data-aos="zoom-in").mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Publicación
                        th.texto-left Características
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold A
                        td.texto-left Imagen genérica, colores con poco contraste y texto de difícil lectura.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold B
                        td.texto-left Imagen relacionada con el mensaje, adecuada jerarquía visual y diseño organizado.
                p.mb-0 Generalmente, la publicación B obtiene mejores resultados debido a una comunicación visual más efectiva.
      p.mb-0 Cuando una publicación presenta bajo rendimiento, el problema no siempre se relaciona con el contenido escrito. También pueden influir aspectos como el diseño, la imagen utilizada, la composición o la legibilidad.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Semántica y semiótica en contenidos digitales
      p.mb-5 La semántica y la semiótica permiten comprender cómo los usuarios interpretan los mensajes presentes en los contenidos digitales. Aunque ambas disciplinas están relacionadas, cada una estudia aspectos diferentes del proceso comunicativo. Sus principales características son las siguientes: 
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-12.text-white.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img12.png', alt="" ).m-auto
              h4 Semántica
              .caja-12_p
                p.mb-0 Estudia el significado de los mensajes. En comunicación digital, permite analizar si el contenido transmite la idea que la organización desea comunicar. Por ejemplo, el mensaje "#[b Transforma tu futuro profesional]" puede asociarse con crecimiento, aprendizaje y desarrollo personal.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-12.color-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img13.png', alt="" ).m-auto
              h4 Semiótica
              .caja-12_p
                p.mb-0 Estudia los signos y símbolos presentes en la comunicación, como íconos, colores, logotipos, imágenes y otros elementos gráficos que influyen en la interpretación del usuario. Por ejemplo, el color verde suele asociarse con sostenibilidad, naturaleza y bienestar, mientras que el rojo puede relacionarse con urgencia, energía y atención.
      p.mb-0 Para mantener una comunicación coherente, las organizaciones deben procurar que las imágenes, los colores, los símbolos y los mensajes se encuentren alineados con su identidad visual.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Lógica visual y percepción del usuario
      p.mb-5 La lógica visual corresponde a la forma en que se organizan los elementos gráficos para facilitar la comprensión del mensaje. Las personas suelen procesar primero los estímulos visuales y posteriormente el contenido textual; por ello, la organización de la información influye directamente en la efectividad de una publicación. Los principios básicos de la lógica visual pueden sintetizarse de la siguiente manera: 
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-13.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img14.png', alt="" ).m-auto
              h4.text-center Jerarquía
              .caja-12_p
                p.mb-0.text-center Destaca los elementos más importantes, como el título principal, el mensaje secundario y la información complementaria.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-13.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img15.png', alt="" ).m-auto
              h4.text-center Equilibrio
              .caja-12_p
                p.mb-0.text-center Distribuye adecuadamente los elementos dentro de la composición.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-13.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img16.png', alt="" ).m-auto
              h4.text-center Contraste
              .caja-12_p
                p.mb-0.text-center Facilita la diferenciación entre los elementos y mejora la legibilidad.
        .col-xl-3.col-md-9(data-aos="fade-left")
          .caja-13.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img17.png', alt="" ).m-auto
              h4.text-center Proximidad
              .caja-12_p
                p.mb-0.text-center Agrupa los elementos relacionados para favorecer la comprensión.
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p En una publicación promocional el usuario debe identificar rápidamente qué se ofrece, cuál es el beneficio y qué acción debe realizar. Cuando estos elementos no presentan una organización clara, la comprensión del mensaje disminuye. Entre los errores más frecuentes en la organización visual se encuentran:
            .row.justify-content-center.align-items-center
              .col-xl.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Exceso de información.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Uso de múltiples tipografías.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Falta de contraste.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Elementos desordenados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Saturación visual.
              .col-xl-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t6/img18.png', alt='').m-auto
      p.mb-5 Una adecuada lógica visual aporta beneficios como los siguientes.
      .row.justify-content-center.mb-0
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-14.h-100
            h4.mb-0.text-center.caja-14_card Mayor claridad
            .caja-14_p
              p.mb-0.text-center Comprensión rápida del mensaje.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-14.h-100
            h4.mb-0.text-center.caja-14_card Mejor organización
            .caja-14_p
              p.mb-0.text-center Menor confusión durante la lectura.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-14.h-100
            h4.mb-0.text-center.caja-14_card Mayor impacto visual
            .caja-14_p
              p.mb-0.text-center Incremento de la atención.
        .col-xl-3.col-md-9(data-aos="fade-left")
          .caja-14.h-100
            h4.mb-0.text-center.caja-14_card Mejor experiencia
            .caja-14_p
              p.mb-0.text-center Mayor interacción con los contenidos.
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Evaluación estética de publicaciones empresariales
      p.mb-5 La evaluación estética consiste en analizar la calidad visual de los contenidos publicados para determinar si cumplen con los criterios de identidad y comunicación de la organización. Su propósito no es únicamente valorar si una publicación resulta atractiva, sino establecer si comunica adecuadamente los objetivos planteados. Los principales aspectos que deben evaluarse son los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.color-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img19.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Coherencia visual
              p.mb-0.text-center Verificar que la publicación mantenga relación con la identidad de marca.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.color-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img20.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Legibilidad
              p.mb-0.text-center Comprobar que el contenido sea fácil de leer.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.color-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img21.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Calidad gráfica
              p.mb-0.text-center Evaluar imágenes, ilustraciones, iconografía y demás elementos visuales.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-7.color-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img22.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Organización visual
              p.mb-0.text-center Analizar la distribución de la información dentro de la composición.
      p.mb-5 Como apoyo al proceso de evaluación, puede utilizarse la siguiente lista de verificación:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 3.
            span Criterios para evaluar el diseño de una publicación digital
          figure(data-aos="zoom-in").mb-4
            img(src='@/assets/curso/temas/t6/img42.svg', alt='Tabla con criterios para evaluar el diseño de una publicación digital, organizada en las columnas Aspecto, Sí y No, e integrada por los criterios: identidad visual, legibilidad, uso de imágenes apropiadas, equilibrio visual y claridad del mensaje.').m-auto
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img23.png', alt='').m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p Una empresa pública dos versiones de una misma campaña.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Versión 1.] Texto excesivo, colores con poco contraste e imagen genérica.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Versión 2.] Mensaje resumido, diseño organizado, imagen relacionada con el contenido y adecuada jerarquía visual.
            p.mb-0 text
      p.mb-0 La analítica digital permite identificar #[b qué resultados] obtiene una publicación, mientras que la evaluación visual ayuda a comprender #[b por qué] se producen esos resultados. La integración de ambas perspectivas fortalece la toma de decisiones y contribuye a optimizar los contenidos, consolidar la identidad de marca y mejorar el rendimiento de las estrategias digitales.
      Separador
      #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.5 Optimización de contenidos digitales
      p.mb-5 A continuación, se presenta un pódcast sobre la optimización de contenidos digitales, en el que se explica la importancia de utilizar métricas e indicadores para mejorar el desempeño de las estrategias de comunicación y fortalecer la gestión digital mediante un proceso de mejora continua.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t6/img24.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Optimización de contenidos digitales"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t6/img25.png" ).m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t6/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Interpretación de resultados para la mejora
      p.mb-5 La optimización comienza con una adecuada interpretación de los resultados obtenidos mediante las herramientas de analítica digital. El análisis integral de los datos permite identificar qué aspectos funcionan correctamente y cuáles requieren intervención. Los principales aspectos que deben analizarse son los siguientes.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alcance
                  p.mb-0 Permite determinar si los contenidos están llegando a la audiencia esperada. Algunas preguntas orientadoras son: ¿El alcance es suficiente?, ¿se está llegando al público objetivo? y ¿existen oportunidades para ampliar la visibilidad?
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interacción
                  p.mb-0 Permite conocer el nivel de participación generado por la audiencia. Algunas preguntas orientadoras son: ¿Los usuarios comentan?, ¿comparten el contenido? y ¿existe interés real por la publicación?
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conversión
                  p.mb-0 Permite evaluar el cumplimiento de los objetivos propuestos. Algunas preguntas orientadoras son: ¿Los usuarios realizan la acción esperada?, ¿se generan registros? y ¿se producen solicitudes o compras?
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img29.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p Una campaña presenta los siguientes resultados.
            .row.justify-content-center.align-items-center.mb-3
              .col-xl-6.mb-4.mb-lg-0
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 8.
                  span Evaluación de indicadores de una campaña digital
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Indicador
                        th.texto-left Resultado
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Alcance
                        td.texto-left Alto.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Interacciones
                        td.texto-left Bajas.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Conversiones
                        td.texto-left Muy bajas.
              .col-xl-6.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t6/img30.png', alt='').m-auto
            p.mb-0 La información indica que la campaña logra visibilidad, pero no genera suficiente interés ni acciones concretas.
      p.mb-5 Comprender las posibles causas de los resultados obtenidos es fundamental para realizar un análisis objetivo del desempeño de una estrategia digital. Factores como un mensaje poco atractivo, un diseño poco llamativo, un llamado a la acción débil o una segmentación inadecuada pueden afectar el rendimiento de una publicación. Interpretar correctamente esta información permite identificar problemas reales, evitar decisiones basadas en suposiciones, orientar las acciones de mejora y optimizar las estrategias futuras de comunicación digital.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t6/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ajustes según el análisis de la audiencia
      p.mb-5 Las audiencias digitales evolucionan constantemente. Sus intereses, hábitos de consumo y formas de interacción cambian con el tiempo, por lo que las estrategias digitales deben ajustarse de acuerdo con la información obtenida mediante la analítica. Los principales aspectos susceptibles de ajuste son los siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Horarios de publicación
                  p.mb-0 Si las métricas indican que la audiencia interactúa con mayor frecuencia en determinados horarios, la programación de los contenidos puede ajustarse para aprovechar esos momentos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formatos de contenido
                  p.mb-0 El análisis puede revelar cuáles formatos generan mejores resultados. Por ejemplo: imagen (nivel medio), video corto (nivel alto), carrusel (nivel alto) y texto simple (nivel bajo). Esta información facilita priorizar los formatos con mejor rendimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Temáticas
                  p.mb-0 Permite identificar los contenidos más consultados, las publicaciones más compartidas y los mensajes que generan mayor respuesta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentación
                  p.mb-0 Facilita adaptar las estrategias según variables como la edad, la ubicación, los intereses y el comportamiento digital de la audiencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img34.png', alt='' style="max-width: 500px").m-auto
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-5(data-aos="zoom-in")
                h5.mb-0 Ejemplo práctico
                p Una institución educativa identifica los siguientes hallazgos:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Los videos explicativos generan mayor interacción.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Las publicaciones informativas presentan menor alcance.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La audiencia participa con mayor frecuencia durante la noche.
                p.mb-0 Con base en estos resultados, ajusta el formato de los contenidos, los horarios y la frecuencia de publicación.
          p.mb-5 La relación entre los hallazgos y las acciones de mejora puede resumirse de la siguiente manera:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-14.h-100
                h4.mb-0.text-center.caja-14_card Baja interacción
                .caja-14_p
                  p.mb-0.text-center Cambiar el formato.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-14.h-100
                h4.mb-0.text-center.caja-14_card Bajo alcance
                .caja-14_p
                  p.mb-0.text-center Ajustar los horarios de publicación.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-14.h-100
                h4.mb-0.text-center.caja-14_card Pocas conversiones
                .caja-14_p
                  p.mb-0.text-center Mejorar el llamado a la acción (CTA).
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-14.h-100
                h4.mb-0.text-center.caja-14_card Baja permanencia
                .caja-14_p
                  p.mb-0.text-center Optimizar el contenido.
          .row.justify-content-center.mb-5
            .col-xl-8
              .caja-5.color-4(data-aos="zoom-in").mb-3
                p.mb-0 Estos ajustes contribuyen a mejorar la relevancia de los contenidos, aumentar la participación de la audiencia, fortalecer la relación con los usuarios y optimizar los resultados.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t6/img26.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Optimización de publicaciones digitales
          p.mb-5 La optimización de publicaciones consiste en aplicar mejoras específicas a los contenidos para incrementar su efectividad. Estas acciones pueden orientarse a diferentes componentes de la publicación.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img35.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Mensaje").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar la claridad, la brevedad, la relevancia y los llamados a la acción. Por ejemplo, sustituir el mensaje "Tenemos información importante para nuestros usuarios" por "Inscríbete hoy y accede a nuestra capacitación virtual gratuita", ya que comunica con mayor claridad el beneficio y la acción esperada.
            .row(titulo="Diseño visual").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Mejorar las imágenes, ajustar los colores, reorganizar los elementos y aumentar la legibilidad.
            .row(titulo="Formato").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Adaptar el contenido según el desempeño de formatos como videos cortos, carruseles, historias o infografías.
            .row(titulo="Frecuencia de publicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Ajustar la periodicidad para evitar tanto la saturación de la audiencia como la pérdida de visibilidad.
      p.mb-5 Estas acciones permiten mejorar progresivamente el desempeño de las publicaciones y responder de manera más efectiva a las preferencias de la audiencia.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t6/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias para mejorar el rendimiento
      p.mb-5 El rendimiento de las estrategias digitales puede fortalecerse mediante acciones fundamentadas en los resultados del análisis. Cada estrategia debe responder a los problemas identificados durante el proceso de evaluación. Las principales estrategias de optimización son las siguientes: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Incrementar la calidad visual
                  p.mb-0 Utilizar imágenes profesionales, diseños coherentes y elementos visuales atractivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fortalecer los llamados a la acción
                  p.mb-0 Incorporar mensajes claros como: "Regístrate ahora", "Descubre más información", "Solicita asesoría" o "Participa en nuestra actividad".
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mejorar la segmentación
                  p.mb-0 Dirigir los contenidos hacia las audiencias con mayor potencial de respuesta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img38.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aprovechar los contenidos exitosos
                  p.mb-0 Reutilizar, actualizar o adaptar las publicaciones con mejor desempeño a otros formatos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img39.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicar pruebas de optimización
                  p.mb-0 Comparar diferentes versiones de un mismo contenido para identificar la alternativa más efectiva. Por ejemplo, una versión A obtiene 500 interacciones y una versión B alcanza 900, lo que evidencia un mejor desempeño de esta última.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img40.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El proceso de optimización continua consiste en un ciclo sistemático orientado al mejoramiento permanente de las estrategias digitales. Este proceso inicia con la medición de los resultados obtenidos, continúa con el análisis de la información recopilada para identificar fortalezas y aspectos susceptibles de mejora, y permite definir oportunidades de optimización. Posteriormente, se aplican los ajustes necesarios y se evalúan nuevamente los resultados para verificar su impacto. Finalmente, este ciclo se mantiene de forma continua, favoreciendo la actualización constante de las estrategias y el incremento progresivo de su efectividad.
      .row.justify-content-center.mb-0
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            .row.justify-content-center.align-items-center
              .col-xl.mb-4.mb-lg-0
                h5 Ejemplo práctico
                p Una empresa detecta que sus publicaciones presentan un alcance aceptable, baja interacción y pocas conversiones. Después del análisis implementa nuevos diseños, incorpora videos cortos, mejora los llamados a la acción y optimiza los horarios de publicación.
                p.mb-0 Durante el siguiente período, identifica un aumento de la interacción, un incremento de las conversiones y un crecimiento de la audiencia. Estos resultados evidencian cómo la optimización basada en datos fortalece el desempeño de las estrategias digitales y contribuye al cumplimiento de los objetivos organizacionales.
              .col-xl-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t6/img41.png', alt='').m-auto

</template>

<script>
import audio1 from '@/assets/curso/podcast/optimizacion.mp3'
export default {
  name: 'Tema6',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
