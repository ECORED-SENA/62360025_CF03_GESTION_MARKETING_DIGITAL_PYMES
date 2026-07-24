<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Analítica digital y medición de resultados
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-1(data-aos="fade-right")
            p.mb-0 La presencia de las organizaciones en entornos digitales genera una gran cantidad de información relacionada con el comportamiento de los usuarios. Cada publicación, campaña o contenido compartido en redes sociales produce datos que permiten comprender cómo interactúan las audiencias, qué contenidos generan mayor interés y cuáles requieren ajustes para mejorar su desempeño.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La #[b analítica digital] es el proceso mediante el cual se recopilan, organizan, interpretan y utilizan datos provenientes de plataformas digitales con el propósito de evaluar resultados y apoyar la toma de decisiones. Gracias a este proceso, las organizaciones comprenden con mayor precisión el impacto de sus estrategias de comunicación y optimizan sus acciones para alcanzar los objetivos establecidos.
      .bg-1
        .px-5
          .row.justify-content-center.align-items-center
            .col-xl.mb-4.mb-lg-0
              .caja-3.ajuste-2(data-aos="fade-right")
                p.mb-0 Actualmente, las redes sociales incorporan herramientas que permiten medir diferentes aspectos relacionados con el rendimiento de las publicaciones. Los datos obtenidos constituyen una fuente valiosa de información para identificar oportunidades de mejora, fortalecer la relación con la audiencia y aumentar la efectividad de las estrategias digitales.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.jpg', alt='').m-auto
            .col-xl
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t1/img4.svg', alt='' style="width: 70px")
              p.mb-0 La medición de resultados no debe entenderse únicamente como el registro de cifras o estadísticas. Su verdadero valor radica en la capacidad de interpretar la información obtenida y convertirla en acciones que contribuyan al fortalecimiento de la comunicación empresarial y al logro de los objetivos organizacionales.
          Separador
          #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.1 Importancia de la analítica en redes sociales
          p Las redes sociales se han consolidado como uno de los principales canales de comunicación entre las organizaciones y sus públicos. Cada interacción realizada por los usuarios aporta información sobre sus intereses, comportamientos y percepciones frente a los contenidos publicados.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-2.ajuste-2(data-aos="fade-right")
                p.mb-0 La analítica digital transforma esas interacciones en información útil para identificar qué acciones producen los mejores resultados y cuáles requieren ajustes. Sin procesos de medición, una organización puede publicar contenidos de manera constante sin conocer si realmente contribuyen al cumplimiento de sus objetivos. En cambio, el análisis sistemático de los datos permite identificar fortalezas, detectar oportunidades de mejora y fundamentar las decisiones estratégicas. Entre los principales beneficios de la analítica en redes sociales se encuentran los siguientes:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img5.png', alt='').m-auto
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img6.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Conocer el alcance de las publicaciones").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite identificar cuántas personas reciben los contenidos y qué tan visible es la marca, campaña o mensaje en los canales digitales. Este dato ayuda a evaluar si la publicación está llegando al público esperado o si es necesario ajustar horarios, formatos, etiquetas o canales de difusión.
                .row(titulo="Identificar los contenidos con mejor desempeño").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Facilita reconocer cuáles publicaciones generan mayor interacción, interés o respuesta por parte de la audiencia. A partir de esta información, se pueden fortalecer los formatos, temas y estilos comunicativos que mejor funcionan.
                .row(titulo="Comprender el comportamiento de la audiencia").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Favorece el análisis de intereses, hábitos, preferencias y formas de interacción de los usuarios. Esto permite crear contenidos más pertinentes, cercanos y ajustados a las necesidades reales del público objetivo.
                .row(titulo="Optimizar recursos y esfuerzos de comunicación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Orienta el uso del tiempo, presupuesto y trabajo del equipo hacia las acciones que generan mejores resultados. De esta manera, se evita invertir esfuerzos en contenidos o canales con bajo impacto.
                .row(titulo="Respaldar la toma de decisiones con datos").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Reduce la dependencia de suposiciones o percepciones subjetivas, ya que las decisiones se basan en información medible. Esto permite planear, ajustar y justificar las estrategias digitales con mayor claridad.
                .row(titulo="Mejorar la efectividad de las campañas digitales").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Contribuye al fortalecimiento continuo de las estrategias de comunicación, porque permite revisar resultados, corregir errores y aplicar mejoras en futuras campañas para lograr mayor alcance, interacción y cumplimiento de objetivos.
      p.mb-5 El siguiente ejemplo permite comprender la importancia del análisis de resultados.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.color-1.ajuste-3(data-aos="fade-right")
            h5.mb-0 Ejemplo práctico
            p Una empresa desarrolla dos campañas promocionales durante el mismo mes.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Resultados de alcance e interacción de dos campañas digitales 
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Campaña
                    th.ajuste-border-tabla.texto-left Visualizaciones
                    th.texto-left Interacciones
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Primera
                    td.ajuste-border-tabla.texto-left 2.000
                    td.texto-left 50
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Segunda
                    td.ajuste-border-tabla.texto-left 1.500
                    td.texto-left 300
            p.mb-0 Aunque la primera campaña alcanzó un mayor número de visualizaciones, la segunda generó una participación significativamente superior. Este resultado permite identificar que una mayor exposición no siempre implica un mejor desempeño. La analítica facilita profundizar en las causas de este comportamiento y utilizar esa información para fortalecer futuras campañas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img7.png', alt='').m-auto
      .bg-1
        .px-5
          p.mb-5 La información obtenida mediante herramientas de analítica también orienta la toma de decisiones estratégicas. A partir de los datos recopilados es posible responder preguntas como:
          .row.justify-content-center.mb-5
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué publicaciones generan mayor interés?
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Cuáles son los horarios con mejores resultados?
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué formatos prefieren las audiencias?
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué campañas producen un mayor impacto?
            .col-xl-2.col-md-9(data-aos="zoom-in")
              .caja-4.h-100
                .p-4
                  p.mb-0.text-center.text-weight-bold ¿Qué contenidos requieren optimización?
          p.mb-0 Responder estas preguntas fortalece la planeación, mejora el rendimiento de las estrategias digitales y facilita la toma de decisiones fundamentadas en evidencia.
          Separador
          #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.2 Conceptos básicos de métricas e indicadores
          .row.align-items-center.mb-5
            .col-xl
              p Para interpretar correctamente el desempeño de una estrategia digital, es necesario comprender dos conceptos fundamentales en los procesos de medición: #[b métricas] e #[b indicadores]. Aunque ambos están relacionados y con frecuencia se utilizan como sinónimos, cumplen funciones diferentes dentro del análisis de resultados.
              p.mb-0 Las métricas proporcionan datos cuantitativos sobre el comportamiento de los usuarios, mientras que los indicadores permiten interpretar esos datos para evaluar el cumplimiento de los objetivos definidos.
            .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img8.svg', alt='').m-auto
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="¿Qué es una métrica?")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt="" ).m-auto
                .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 ¿Qué es una métrica?
                  p Una #[b métrica] es un dato cuantitativo que mide una acción o un comportamiento específico dentro de una plataforma digital. Estos datos se obtienen directamente de las herramientas de analítica y constituyen la base para realizar evaluaciones posteriores.
                  h5 Algunos ejemplos de métricas son:
                  ul.fa-ul.estilo___ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Número de visualizaciones.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Cantidad de clics.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Comentarios recibidos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Veces que un contenido fue compartido.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Reproducciones de video.
                  p.mb-0 Las métricas describen hechos concretos, pero por sí solas no permiten determinar si los resultados obtenidos son favorables o desfavorables.
            .py-3.py-md-4(titulo="¿Qué es un indicador?")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt="" ).m-auto
                .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 ¿Qué es un indicador?
                  p Un #[b indicador] es una medida construida a partir de una o varias métricas para evaluar el desempeño de una estrategia, campaña o actividad. Entre los indicadores más utilizados se encuentran:
                  ul.fa-ul.estilo___ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Tasa de interacción.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Porcentaje de conversión.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Crecimiento de la audiencia.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Nivel de participación.
                  p.mb-0 Los indicadores facilitan la interpretación de la información y constituyen un apoyo para la toma de decisiones estratégicas.
      p.mb-0 Comprender esta diferencia evita interpretar los datos de manera aislada. Por ejemplo, una organización puede identificar que una publicación obtuvo #[b 5.000 visualizaciones], lo cual corresponde a una métrica. Sin embargo, para establecer si ese resultado fue satisfactorio, será necesario analizar indicadores relacionados con los objetivos de la campaña, como la tasa de interacción o el porcentaje de conversión.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Objetivos de medición en entornos digitales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La medición de resultados solo genera valor cuando responde a objetivos previamente definidos. Recopilar información sin un propósito claro puede producir grandes volúmenes de datos que dificultan el análisis y aportan poco a la toma de decisiones.
          .caja-2(data-aos="fade-right")
            p.mb-0 Los objetivos de medición permiten establecer qué información debe recopilarse, cómo será analizada y de qué manera contribuirá al mejoramiento de la estrategia digital. Entre los principales objetivos de medición se encuentran los siguientes:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img11.png', alt='').m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Evaluar el desempeño de los contenidos
                  p.mb-0.text-center Identificar las publicaciones con mayor alcance, interacción o efectividad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comprender el comportamiento de la audiencia
                  p.mb-0.text-center Analizar intereses, hábitos de consumo, horarios de actividad y preferencias de contenido.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Medir el impacto de las campañas
                  p.mb-0.text-center Determinar si las acciones implementadas producen los resultados esperados.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Optimizar las estrategias digitales
                  p.mb-0.text-center Utilizar la información recopilada para realizar ajustes y mejorar el desempeño futuro.
          p.mb-5 El siguiente ejemplo evidencia la importancia de establecer objetivos antes de iniciar una campaña.
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-5(data-aos="zoom-in")
                h5.mb-0 Ejemplo práctico
                p Una organización desarrolla una campaña de promoción para un programa de formación y define previamente los siguientes objetivos de medición:
                .row.justify-content-center.align-items-center.mb-3
                  .col-xl.mb-4.mb-lg-0
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Alcanzar 10.000 personas.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Generar 500 interacciones.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Obtener 100 registros.
                  .col-xl-auto.col-md-9(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/temas/t1/img17.png', alt='').m-auto
                p.mb-0 Al finalizar la campaña, estos objetivos servirán como referencia para comparar los resultados obtenidos y determinar el nivel de cumplimiento alcanzado.
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .caja-6(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t1/img18.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    p Trabajar con objetivos claramente definidos ofrece múltiples ventajas:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Facilita el análisis de la información.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Mejora la interpretación de los resultados.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Permite identificar oportunidades de mejora.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Fortalece la toma de decisiones basada en evidencia.
          Separador
          #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.4 Relación entre estrategia y resultados
          p Toda estrategia digital se diseña para alcanzar un propósito específico. Sin embargo, únicamente el análisis de los resultados permite establecer si las acciones implementadas contribuyeron al cumplimiento de los objetivos propuestos.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-2.ajuste-2(data-aos="fade-right")
                p.mb-0 Por esta razón, una estrategia efectiva incorpora mecanismos de seguimiento y evaluación desde su etapa de planificación, lo que facilita realizar ajustes oportunos cuando los resultados no corresponden con lo esperado. Una estrategia orientada a resultados integra, como mínimo, los siguientes elementos:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img19.png', alt='').m-auto
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Objetivos definidos
                      p.mb-0 Establecer con claridad los resultados que se esperan alcanzar mediante la estrategia digital. Esto permite orientar las acciones, priorizar los esfuerzos y evaluar posteriormente si las metas propuestas fueron cumplidas.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Audiencia identificada
                      p.mb-0 Determinar las características, necesidades, intereses y comportamientos del público objetivo para diseñar contenidos y acciones de comunicación más pertinentes y aumentar la probabilidad de interacción.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Contenidos pertinentes
                      p.mb-0 Elaborar información útil, relevante y alineada con los intereses de la audiencia y los objetivos de la organización. Esto favorece el compromiso de los usuarios y fortalece el posicionamiento de la estrategia digital.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img22.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Canales seleccionados
                      p.mb-0 Utilizar las plataformas digitales más adecuadas según el perfil de la audiencia y el tipo de contenido que se desea difundir. Una correcta selección de los canales incrementa el alcance y la efectividad de la comunicación.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img23.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Métricas de seguimiento
                      p.mb-0 Medir el desempeño de las acciones implementadas mediante indicadores como alcance, interacción, clics, conversiones o crecimiento de la audiencia. Estos datos permiten evaluar el cumplimiento de los objetivos establecidos.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img24.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Evaluación continua
                      p.mb-0 Analizar de manera periódica los resultados obtenidos para identificar fortalezas, detectar oportunidades de mejora y realizar ajustes que optimicen el desempeño de la estrategia digital.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img25.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5 Ejemplo práctico
            p Una empresa desea incrementar la participación de sus seguidores. Para lograrlo, implementa publicaciones interactivas, encuestas, preguntas abiertas y contenido audiovisual.
            p Posteriormente, analiza indicadores relacionados con los comentarios, las reacciones, los contenidos compartidos y las respuestas obtenidas. La comparación entre las acciones desarrolladas y los resultados alcanzados permite establecer si la estrategia produjo el efecto esperado o si requiere ajustes. La relación entre estrategia y resultados puede entenderse como un proceso de mejora continua:
            .row.justify-content-center.align-items-center.mb-3
              .col-xl.mb-4.mb-lg-0
                ol.lista-ol--cuadro.mb-0
                  li
                    .lista-ol--cuadro__vineta
                      span A
                    | 
                    p.mb-0 Planificar la estrategia.
                  li 
                    .lista-ol--cuadro__vineta
                      span B
                    | 
                    p.mb-0 Publicar los contenidos.
                  li 
                    .lista-ol--cuadro__vineta
                      span C
                    | 
                    p.mb-0 Medir los resultados.
                  li 
                    .lista-ol--cuadro__vineta
                      span D
                    | 
                    p.mb-0 Analizar la información recopilada.
                  li 
                    .lista-ol--cuadro__vineta
                      span E
                    | 
                    p.mb-0 Implementar acciones de mejora.
                  li 
                    .lista-ol--cuadro__vineta
                      span F
                    | 
                    p.mb-0 Volver a medir para evaluar los cambios.
              .col-xl-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t1/img26.png', alt='').m-auto
      p.mb-5 Las acciones implementadas en una estrategia digital influyen directamente en los resultados obtenidos. Algunos ejemplos son los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img27.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Publicar videos cortos
              p.mb-0.text-center Favorece un mayor alcance. 
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img28.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Realizar encuestas
              p.mb-0.text-center Incrementa la interacción con la audiencia. 
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img29.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Publicar en horarios estratégicos
              p.mb-0.text-center Aumenta las visualizaciones de los contenidos. 
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img30.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Optimizar los mensajes
              p.mb-0.text-center Fortalece la participación de la audiencia.
      p.mb-0 Comprender la relación entre estrategia y resultados permite transformar los datos obtenidos en información útil para optimizar las acciones digitales, mejorar el desempeño de las publicaciones y fortalecer el cumplimiento de los objetivos organizacionales.

</template>

<script>
export default {
  name: 'Tema1',
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
