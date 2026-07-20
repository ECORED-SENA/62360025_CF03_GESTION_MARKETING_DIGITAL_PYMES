export default {
  global: {
    Name: 'Analítica y mejoramiento de estrategias digitales',
    Description:
      'Este componente desarrolla conocimientos y habilidades para analizar métricas e indicadores en redes sociales, interpretar el comportamiento de las audiencias, utilizar herramientas de analítica digital y establecer planes de mejoramiento orientados a optimizar el desempeño de las estrategias de comunicación y contenidos digitales empresariales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Analítica digital y medición de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia de la analítica en redes sociales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos básicos de métricas e indicadores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Objetivos de medición en entornos digitales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Relación entre estrategia y resultados',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de analítica para redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<em>Software</em> especializado para análisis digital',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas <em>analytics</em> de código abierto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Manuales de uso, seguridad y buenas prácticas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Configuración básica para la recolección de datos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comportamiento de audiencias digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Consumo de información en medios digitales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis de comportamiento de usuarios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Geolocalización y segmentación de audiencias',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Temporalización, dispositivos y hábitos de interacción ',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Métricas e indicadores en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Alcance, impresiones y visualizaciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Interacciones y <em>engagement</em>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Conversiones y acciones del usuario',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Interpretación de indicadores digitales',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Recolección y análisis de estadísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Técnicas de recolección de datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Organización de la información estadística',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Identificación de tendencias y campañas digitales',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Elaboración de reportes de resultados',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Comunicación visual y evaluación de contenidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Teoría de la imagen aplicada a redes sociales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Semántica y semiótica en contenidos digitales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Lógica visual y percepción del usuario',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Evaluación estética de publicaciones empresariales',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Optimización de contenidos digitales',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Planes de mejoramiento y propiedad intelectual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Construcción de planes de mejoramiento digital',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Mejora de piezas gráficas para atraer clientes',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Derechos de autor y uso de contenidos digitales',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Seguimiento y mejora continua',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
    {
      termino: 'Analítica digital',
      significado:
        'Recopila y analiza datos de productos de múltiples fuentes digitales para fundamentar las estrategias de producto y marketing. Empresas como Amazon y Netflix han utilizado la analítica digital para impulsar nuevas funciones personalizadas en sus productos. Sin embargo, organizaciones de todos los tamaños pueden emplear la analítica de datos para mejorar la toma de decisiones, reducir la pérdida de clientes, realizar experimentos y aumentar el valor de los clientes existentes. La analítica web, el marketing digital y la analítica de productos forman parte de la analítica digital.',
    },
    {
      termino: 'Audiencias digitales',
      significado:
        'Se refieren al conjunto específico de personas o grupos a quienes una marca dirige sus mensajes. Este concepto va más allá de un público general, ya que implica conocer las características demográficas, los intereses, los comportamientos y las necesidades particulares de los destinatarios.',
    },
    {
      termino: 'Métrica',
      significado:
        'Expresa con valores numéricos el rendimiento de una campaña, una estrategia o el área de marketing en general. Es necesario utilizar varias métricas para obtener resultados específicos y mejorar aspectos como la adquisición de clientes y la interacción con los prospectos.',
    },
    {
      termino: 'Plan de marketing',
      significado:
        'Es un documento estratégico que define los objetivos comerciales de una empresa y las acciones específicas para alcanzarlos. Funciona como una hoja de ruta que conecta la estrategia con la ejecución, estableciendo plazos, recursos y métricas de éxito.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camacho, K. (2026, 24 de marzo). Qué son las audiencias en marketing + ejemplos reales. DesignPlus.',
      link: 'https://designplus.co/blog/marketing-digital/que-son-audiencias-marketing/',
    },
    {
      referencia:
        'Leung, A. X. (2022, 26 de enero). ¿Qué es la analítica digital? Definición, ejemplos y herramientas. Amplitude.',
      link: 'https://amplitude.com/blog/digital-analytics',
    },
    {
      referencia:
        'MacNeil, C. (2026, 9 de abril). Plan de marketing: qué es y cómo hacerlo en 9 pasos. Asana.',
      link: 'https://asana.com/es/resources/marketing-plan',
    },
    {
      referencia:
        'Santos, D. (2025, 9 de septiembre). Las 26 métricas de marketing digital para medir tus resultados. HubSpot.',
      link: 'https://blog.hubspot.es/marketing/metricas-para-medir-resultados-de-marketing#que-es',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sanchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
