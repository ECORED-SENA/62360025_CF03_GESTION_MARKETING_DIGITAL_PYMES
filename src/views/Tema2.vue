<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Herramientas de analítica para redes sociales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 La gestión de redes sociales va más allá de la publicación de contenidos. Para evaluar el desempeño de una estrategia digital, las organizaciones necesitan conocer cómo reaccionan los usuarios frente a las publicaciones, qué contenidos generan mejores resultados y cuáles son las características del comportamiento de las audiencias.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Para ello, se utilizan #[b herramientas de analítica digital], plataformas especializadas que recopilan, organizan e interpretan la información generada durante la interacción de los usuarios con los contenidos digitales. La información obtenida facilita la toma de decisiones basada en evidencia, favorece la optimización de campañas y fortalece las estrategias de comunicación. Estas herramientas permiten analizar múltiples variables relacionadas con el rendimiento de las acciones digitales, entre ellas:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alcance
                  p.mb-0 Indica la cantidad de personas que reciben o visualizan el contenido publicado. Esta información permite evaluar la visibilidad de la estrategia digital y determinar si los mensajes están llegando al público objetivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interacción
                  p.mb-0 Mide el nivel de participación de la audiencia mediante acciones como reacciones, comentarios, compartidos, clics o respuestas. Estos datos reflejan el interés que generan los contenidos y el grado de compromiso de los usuarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comportamiento de navegación
                  p.mb-0 Permite conocer cómo los usuarios recorren los contenidos, qué páginas visitan, cuánto tiempo permanecen en ellas y cuáles son los recorridos más frecuentes. Este análisis ayuda a identificar oportunidades para mejorar la experiencia de navegación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ubicación geográfica
                  p.mb-0 Identifica la procedencia de la audiencia según países, regiones o ciudades. Esta información facilita la segmentación del público y la adaptación de los contenidos a las características de cada ubicación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Horarios de actividad
                  p.mb-0 Muestra los momentos del día o los días de la semana en los que la audiencia presenta mayor nivel de actividad e interacción. Esto permite programar las publicaciones en los horarios con mayor probabilidad de alcanzar mejores resultados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Dispositivos utilizados
                  p.mb-0 Informa desde qué equipos acceden los usuarios, como teléfonos móviles, computadores o tabletas. Estos datos ayudan a optimizar el diseño y la presentación de los contenidos para garantizar una adecuada experiencia en cada dispositivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Rutas de acceso
                  p.mb-0 Indica el origen del tráfico hacia los contenidos, como motores de búsqueda, redes sociales, enlaces externos, campañas de correo electrónico o acceso directo. Esta información permite identificar cuáles canales generan mayor número de visitas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conversión de usuarios
                  p.mb-0 Mide el cumplimiento de las acciones esperadas por la organización, como registros, compras, descargas, solicitudes de información o suscripciones. Este indicador permite evaluar el impacto real de la estrategia digital sobre los objetivos planteados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.mb-0
        .col-xl-10
          .caja-8(data-aos="flip-up")
            .row.align-items-center
              .col-xl.col-md-10.order-2.order-lg-1
                p.mb-0 El dominio de estas herramientas constituye una competencia fundamental para los profesionales responsables de gestionar procesos de comunicación digital.
              .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 55px").m-auto
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 #[i Software] especializado para análisis digital
      .row.align-items-center.mb-5
        .col-xl
          p El #[i software] especializado en analítica digital permite monitorear y evaluar el desempeño de publicaciones, campañas y contenidos digitales. Estas herramientas recopilan información de forma automática y la presentan mediante reportes, tablas e indicadores que facilitan el análisis y la toma de decisiones.
          p.mb-0 Su propósito principal consiste en transformar grandes volúmenes de datos en información útil para evaluar el rendimiento de las estrategias digitales. Entre sus principales funciones se encuentran las siguientes:
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img12.svg', alt='').m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Medir el rendimiento de las publicaciones
                  p.mb-0.text-center Evalúa el desempeño de los contenidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Analizar el comportamiento de las audiencias
                  p.mb-0.text-center Identifica patrones de interacción.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Identificar tendencias
                  p.mb-0.text-center Detecta cambios en el comportamiento de los usuarios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Evaluar campañas digitales
                  p.mb-0.text-center Compara resultados con los objetivos establecidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Detectar oportunidades de mejora
                  p.mb-0.text-center Facilita la optimización de las estrategias.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Generar reportes
                  p.mb-0.text-center Consolida la información para apoyar la toma de decisiones.
          p.mb-5 Diversas plataformas incorporan herramientas de analítica con funcionalidades específicas: 
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Meta Business Suite
                      p.mb-0 Permite gestionar y analizar el desempeño de las cuentas de Facebook e Instagram desde una misma plataforma. Proporciona información sobre alcance, interacciones, crecimiento de la audiencia, rendimiento de las publicaciones y resultados de campañas, facilitando la toma de decisiones para optimizar la estrategia digital.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Instagram Insights
                      p.mb-0 Ofrece estadísticas sobre el comportamiento de la audiencia y el rendimiento de publicaciones, historias, videos y #[i reels]. Permite conocer el alcance, las impresiones, las interacciones, el perfil de los seguidores y los horarios de mayor actividad para mejorar la planificación de los contenidos.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 LinkedIn Analytics
                      p.mb-0 Proporciona métricas relacionadas con el desempeño de las publicaciones y la interacción de la audiencia en entornos profesionales. Permite analizar el crecimiento de seguidores, el perfil de los usuarios alcanzados, el nivel de participación y la efectividad de los contenidos orientados al ámbito empresarial.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 YouTube Studio
                      p.mb-0 Facilita el análisis del desempeño de los videos mediante indicadores como visualizaciones, tiempo de reproducción, retención de la audiencia, suscriptores y fuentes de tráfico. Esta información permite identificar qué contenidos generan mejores resultados y optimizar futuras publicaciones.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Google Analytics
                      p.mb-0 Permite realizar el seguimiento del comportamiento de los usuarios en un sitio web mediante información sobre visitas, páginas más consultadas, tiempo de permanencia, dispositivos utilizados, fuentes de tráfico y conversiones. Estos datos contribuyen a evaluar el rendimiento del sitio y fortalecer las estrategias de comunicación y #[i marketing] digital.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            h5.mb-0 Ejemplo práctico
            p Una empresa pública contenido durante un mes en Instagram. Al revisar #[b Instagram Insights] identifica los siguientes resultados:
            .row.justify-content-center.align-items-center.mb-3
              .col-xl.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Alcance: 12.500 personas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Interacciones: 1.200.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Clics en el perfil: 350.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Nuevos seguidores: 180.
              .col-xl-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/t2/img25.png', alt='').m-auto
            p.mb-0 Estos datos permiten identificar qué publicaciones obtuvieron un mejor desempeño y cuáles requieren ajustes para mejorar sus resultados.
      p.mb-5 La utilización de #[i software] especializado aporta beneficios tanto para la gestión de contenidos como para la planificación estratégica: 
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img26.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Mejor toma de decisiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite planificar y ajustar las estrategias digitales con base en información objetiva obtenida a partir de indicadores y métricas. Esto reduce la incertidumbre y facilita la implementación de acciones más acertadas para alcanzar los objetivos organizacionales.
            .row(titulo="Optimización de recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Favorece una inversión más eficiente del tiempo, el presupuesto y los esfuerzos del equipo, al identificar las acciones, contenidos y canales que generan mejores resultados. De esta manera, se incrementa el rendimiento de la estrategia digital.
            .row(titulo="Comprensión de las audiencias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Amplía el conocimiento sobre las características, intereses, preferencias y comportamientos de los usuarios. Esta información permite desarrollar contenidos más relevantes, mejorar la segmentación y fortalecer la relación con la audiencia.
            .row(titulo="Evaluación continua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita el seguimiento permanente de los resultados mediante el análisis constante de métricas e indicadores. Esto permite detectar oportunidades de mejora, realizar ajustes oportunos y fortalecer de forma continua la efectividad de la estrategia digital.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Herramientas analytics de código abierto
      .bg-1
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-2.ajuste-1(data-aos="fade-right")
                p.mb-0 Además de las soluciones comerciales, existen herramientas de código abierto (#[i open source]) que permiten realizar procesos de analítica digital con un alto nivel de flexibilidad. Estas plataformas pueden adaptarse a diferentes necesidades organizacionales y ofrecen un mayor control sobre la gestión de los datos.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img27.png', alt='').m-auto
          p.mb-5 Su adopción ha aumentado debido a ventajas como la reducción de costos, la posibilidad de personalización, el control de la información y la integración con otros sistemas. Las principales características de estas herramientas se resumen a continuación: 
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-7.color-2.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img28.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Código abierto
                  p.mb-0.text-center Posibilidad de adaptación a diferentes necesidades.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-7.color-2.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img29.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Flexibilidad
                  p.mb-0.text-center Configuración personalizada.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-7.color-2.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img30.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Comunidad colaborativa
                  p.mb-0.text-center Actualizaciones permanentes y desarrollo continuo.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-7.color-2.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img31.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Acceso libre
                  p.mb-0.text-center Menor dependencia de proveedores comerciales.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-2.ajuste-2(data-aos="fade-right")
                p.mb-0 Estas soluciones permiten analizar de manera integral el desempeño de los entornos digitales mediante la recopilación y el procesamiento de información relevante. Gracias a ellas es posible monitorear el tráfico web, analizar las rutas de navegación de los usuarios, estudiar su comportamiento durante la interacción con los contenidos, generar reportes estadísticos que faciliten la toma de decisiones e identificar patrones de acceso que contribuyan a optimizar las estrategias de comunicación y mejorar la experiencia de los usuarios.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img32.png', alt='').m-auto
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-8.color-1(data-aos="flip-up")
                .row.align-items-center
                  .col-xl.col-md-10.order-2.order-lg-1
                    h5 Ejemplo práctico
                    p.mb-0 Una institución educativa implementa una plataforma open source para analizar el comportamiento de los visitantes de su portal de formación. Mediante esta herramienta identifica las páginas más consultadas, el tiempo de permanencia, los dispositivos utilizados y la ubicación geográfica de los usuarios.
                  .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/temas/t2/img33.svg', alt='' style="width: 110px").m-auto
      p.mb-5 La información obtenida facilita la optimización de la estructura del sitio web y mejora la experiencia de navegación. La siguiente tabla presenta una comparación general entre el #[i software] comercial y las herramientas de código abierto.
      .row.justify-content-center.mb-0
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Diferencias entre #[i software] comercial y #[i software] de código abierto
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Aspecto
                  th.ajuste-border-tabla.texto-left #[i Software] comercial
                  th.texto-left #[i Open source]
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costo
                  td.ajuste-border-tabla.texto-left Generalmente de pago.
                  td.texto-left Gratuito o de bajo costo.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Personalización
                  td.ajuste-border-tabla.texto-left Limitada.
                  td.texto-left Alta.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Soporte técnico
                  td.ajuste-border-tabla.texto-left Oficial.
                  td.texto-left Comunidad o soporte propio.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Flexibilidad
                  td.ajuste-border-tabla.texto-left Moderada.
                  td.texto-left Alta.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Manuales de uso, seguridad y buenas prácticas
      .row.align-items-center.mb-5
        .col-xl
          p Las herramientas de analítica deben utilizarse de acuerdo con las recomendaciones establecidas por sus desarrolladores. Los manuales de usuario permiten comprender las funcionalidades disponibles, configurar correctamente las plataformas y reducir errores durante los procesos de medición y análisis.
          p.mb-0 El uso adecuado de estos recursos favorece la confiabilidad de la información obtenida y contribuye a una gestión más eficiente de las estrategias digitales. Los manuales de usuario cumplen diversas funciones dentro del proceso de analítica.
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img34.png', alt='').m-auto
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img35.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Conocer las funcionalidades
                  p.mb-0.text-center Facilita el uso adecuado de la herramienta.
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img36.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Configurar correctamente la plataforma
                  p.mb-0.text-center Mejora la calidad de la información recopilada.
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img37.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Interpretar los resultados
                  p.mb-0.text-center Favorece un análisis adecuado de los datos.
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img38.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Solucionar problemas básicos
                  p.mb-0.text-center Reduce interrupciones en el proceso.
            .col-xl-2.col-md-9.mt-4(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img39.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Aplicar actualizaciones
                  p.mb-0.text-center Mantiene la estabilidad y el rendimiento del #[i software].
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-6(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t2/img40.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    p La información recopilada mediante estas plataformas puede contener datos relevantes para la organización, por lo que resulta indispensable aplicar buenas prácticas de seguridad. Entre las principales recomendaciones se encuentran:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Utilizar contraseñas seguras. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Restringir los accesos no autorizados. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Realizar copias de respaldo. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Proteger la información sensible. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Mantener actualizado el #[i software].
          p.mb-5 Además de estas medidas, conviene adoptar prácticas que favorezcan el trabajo cotidiano:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-7.color-2.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img41.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Revisar los manuales oficiales
                  p.mb-0.text-center Reduce el margen de error.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-7.color-2.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img42.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Mantener el software actualizado
                  p.mb-0.text-center Mejora la estabilidad del sistema.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-7.color-2.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img43.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Documentar las configuraciones
                  p.mb-0.text-center Facilita el seguimiento de los procesos.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-7.color-2.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img44.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Aplicar protocolos de seguridad
                  p.mb-0.text-center Protege la información institucional.
          .row.justify-content-center.mb-0
            .col-xl-10
              .caja-8.color-1(data-aos="flip-up")
                .row.align-items-center
                  .col-xl.col-md-10.order-2.order-lg-1
                    h5 Ejemplo práctico
                    p.mb-0 Una empresa configura de forma incorrecta los parámetros de medición de una campaña digital porque no consulta el manual de la herramienta. Como consecuencia, los datos recopilados resultan incompletos, el análisis pierde confiabilidad y las decisiones tomadas pueden ser inadecuadas. Este caso evidencia la importancia de seguir las recomendaciones establecidas para cada plataforma de analítica.
                  .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/temas/t2/img33.svg', alt='' style="width: 110px").m-auto
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Configuración básica para la recolección de datos
      p.mb-5 Antes de iniciar cualquier proceso de análisis es indispensable configurar correctamente las herramientas de medición. Una configuración adecuada garantiza que la información recopilada sea confiable y útil para la evaluación posterior. El proceso de configuración comprende varias etapas que aseguran la calidad de los datos obtenidos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Definición de objetivos
                  p.mb-0 Consiste en establecer con claridad qué se desea medir mediante la herramienta de analítica digital, como el alcance de las publicaciones, el nivel de interacción, las conversiones, las visitas al sitio web o el crecimiento de la audiencia. Definir objetivos facilita la selección de indicadores y orienta el análisis de los resultados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img45.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Selección de métricas
                  p.mb-0 Implica determinar cuáles indicadores serán relevantes para evaluar el desempeño de la estrategia digital, de acuerdo con los objetivos planteados. Entre las métricas más utilizadas se encuentran el alcance, las impresiones, la tasa de interacción, los clics, el tiempo de permanencia, las conversiones y el crecimiento de seguidores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img46.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Configuración de fuentes de datos
                  p.mb-0 Consiste en definir las plataformas y canales desde los cuales se recopilará la información, como Facebook, Instagram, LinkedIn, YouTube, el sitio web, campañas de correo electrónico o plataformas publicitarias. La integración de estas fuentes permite obtener una visión más completa del desempeño de la estrategia digital.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img47.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Validación de registros
                  p.mb-0 Corresponde a verificar que la herramienta capture y registre correctamente la información generada por los usuarios. Este proceso permite garantizar la calidad, precisión y confiabilidad de los datos antes de realizar su análisis y utilizarlos para la toma de decisiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img48.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El proceso general puede resumirse en las siguientes etapas:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img49.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 1
              p.mb-0.text-center Definir objetivos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img50.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 2
              p.mb-0.text-center Seleccionar métricas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img51.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 3
              p.mb-0.text-center Configurar la herramienta.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img52.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 4
              p.mb-0.text-center Verificar la captura de datos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img53.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 5
              p.mb-0.text-center Iniciar el seguimiento.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img54.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Paso 6
              p.mb-0.text-center Analizar los resultados.
          p.mb-5 Una vez configuradas, las herramientas permiten recopilar información relacionada con diferentes variables:
          .row.justify-content-center.mb-0
            .col-xl-10
              .caja-5(data-aos="zoom-in")
                h5.mb-0 Ejemplo práctico
                p Una organización desarrolla una campaña de inscripción para un programa de formación. Gracias a una configuración adecuada de la herramienta de analítica puede identificar:
                .row.justify-content-center.align-items-center.mb-3
                  .col-xl.mb-4.mb-lg-0
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Cuántas personas visualizaron la campaña.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Desde qué ciudad accedieron.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Qué dispositivos utilizaron.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Cuáles fueron los horarios con mayor interacción.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Qué publicación generó el mayor número de registros.
                  .col-xl-auto.col-md-9(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/temas/t2/img55.png', alt='').m-auto
                p.mb-0 Esta información servirá posteriormente para evaluar los resultados y optimizar las estrategias digitales desarrolladas en futuras campañas.

</template>

<script>
export default {
  name: 'Tema2',
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
