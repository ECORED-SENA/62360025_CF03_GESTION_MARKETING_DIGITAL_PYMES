<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Analítica y mejoramiento de estrategias digitales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar los conceptos clave relacionados con la analítica digital, las métricas e indicadores, el comportamiento de las audiencias, la optimización de contenidos y los planes de mejoramiento en estrategias digitales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de la analítica digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Recopilar, organizar, interpretar y utilizar datos para apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Diseñar logotipos y piezas gráficas para campañas digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Administrar inventarios de productos en plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear sitios web sin realizar mediciones posteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué beneficio ofrece la analítica en redes sociales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar automáticamente el número de seguidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Respaldar la toma de decisiones con datos medibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de planificar campañas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizar el éxito de todas las publicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué representa una métrica en analítica digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un informe de recomendaciones estratégicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un análisis completo de campañas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un dato cuantitativo sobre una acción o comportamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una decisión tomada por el administrador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué caracteriza a un indicador?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un dato aislado de una plataforma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un comentario realizado por un usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es un registro de publicaciones diarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es una medida que interpreta una o varias métricas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es un objetivo de la medición en entornos digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluar el desempeño de los contenidos publicados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar publicaciones con poco alcance.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir las herramientas de análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el uso de redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué elemento debe incluir una estrategia orientada a resultados?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicaciones realizadas sin planificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso exclusivo de una red social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Métricas de seguimiento para evaluar el desempeño.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseños gráficos sin objetivos definidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué información proporcionan las herramientas de analítica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Datos sobre alcance, interacción y comportamiento de usuarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el número de seguidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el presupuesto de publicidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente los comentarios negativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes plataformas permite analizar un sitio web?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instagram Insights.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Meta Business Suite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'YouTube Studio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Google Analytics.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué ventaja ofrecen las herramientas de código abierto?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor flexibilidad y posibilidades de personalización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Licencias de alto costo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo para redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ausencia de reportes estadísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué práctica fortalece la seguridad de las herramientas de analítica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compartir contraseñas con el equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desactivar las actualizaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar las copias de respaldo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar contraseñas seguras y proteger la información.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el primer paso para configurar una herramienta de analítica?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir los objetivos de medición.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear nuevas cuentas digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar campañas anteriores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar contenidos de inmediato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué permite conocer la ubicación geográfica de los usuarios?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tipo de contenido creado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El presupuesto de la campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La procedencia geográfica de la audiencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué factor influye en el consumo de información digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los intereses personales y el tiempo disponible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El tamaño de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El color del logotipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué permite identificar la temporalización?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto de publicidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La calidad del diseño gráfico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de campañas anuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los horarios de mayor actividad e interacción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué mide el alcance de una publicación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de personas únicas que visualizaron el contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número total de impresiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de comentarios recibidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tiempo promedio de navegación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué representa el <i>engagement</i>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo de una campaña digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La frecuencia de publicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El crecimiento financiero de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El nivel de participación e interés de la audiencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué es una conversión en marketing digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La acción específica que se espera del usuario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de seguidores nuevos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de impresiones obtenidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tiempo de permanencia en la plataforma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el primer paso para interpretar indicadores digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comparar resultados entre plataformas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar acciones correctivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar un reporte final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar las métricas relevantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué favorece una comunicación visual efectiva?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una adecuada jerarquía visual y buena legibilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El exceso de texto en la imagen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El uso de múltiples tipografías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La saturación de elementos gráficos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito de un plan de mejoramiento digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar las publicaciones anteriores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar únicamente el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el análisis de métricas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir acciones para corregir debilidades y optimizar resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
