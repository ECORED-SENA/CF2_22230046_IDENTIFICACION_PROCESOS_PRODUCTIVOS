export default {
  global: {
    componenteFormativo: 'Procesos Productivos Sostenibles',
    descripcionCurso:
      'En este componente formativo se abordan temas que le permitirán comprender de forma general, el ciclo de vida de un producto y la importancia de implementar la sostenibilidad en los procesos productivos de una organización',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producción sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Beneficios en la producción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Huellas (ecológica, carbono, hídrica)',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Criterios de sostenibilidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Elementos clave de sostenibilidad en los procesos de la organización',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ciclo de vida del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Etapas del ciclo de vida',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Beneficios del ciclo de vida',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Castrillón, M. & Mares, A. (2014). Revisión sobre la sostenibilidad empresarial. Revista de estudios avanzados de liderazgo, 1(3), p. 52-77.',
      link: '',
    },
    {
      referencia:
        'Frohmann, A. & Olmos, X. (2013). Huella de carbono, exportaciones y estrategias empresariales frente al cambio climático. Naciones Unidas CEPAL.',
      link: '',
    },
    {
      referencia:
        'Magnaghi, A. (2011). El proyecto local: hacia una consciencia del lugar. Universitat Politècnica de Catalunya. ',
      link: '',
    },
    {
      referencia:
        'Olivera, A., Cristóbal, S. y Saizar, C. (2016). Análisis del ciclo de vida ambiental, económico y social, una herramienta para la evaluación de impactos  y soporte  para la toma de decisiones. INNOTEC Gestión. ',
      link: 'https://catalogo.latu.org.uy/opac_css/doc_num.php?explnum_id=2238',
    },
    {
      referencia:
        'Ordoñez, M. & Meneses, L. (2015). Criterios e indicadores de sostenibilidad en el subsector VI. Ciencia e Ingeniería Neogranadina, 25(2), p. 81-98.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2017). ONU Medio ambiente, abogando el consumo y la producción sostenible. ONU.',
      link: '',
    },
    {
      referencia:
        'Sánchez, E. (2015). Ciclo de vida de producto. Modelos y utilidad para el marketing. Anuario del Centro de la Universidad Nacional de Educación a Distancia en Calatayud.',
      link: '',
    },
    {
      referencia:
        'Schneider, H. & Samaniego, J. (2009). La huella del carbono en la producción, distribución y consumo de bienes y servicios. Comisión Económica para América Latina y el Caribe - CEPAL.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo de vida',
      significado:
        'Periodo de tiempo en el cual un producto produce ventas y utilidades hasta su retiro del mercado.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Desarrollo que satisface las necesidades actuales de las personas sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas.',
    },
    {
      termino: 'Huella ecológica',
      significado:
        'ndicador ambiental de carácter integrador del impacto que ejerce una cierta comunidad humana, país, región o ciudad sobre su entorno; consideran tanto los recursos necesarios como los residuos generados para el mantenimiento del modelo de producción y consumo de la comunidad.',
    },
    {
      termino: 'Producción',
      significado:
        'Elaboración de bienes y servicios en unas condiciones prefijadas.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Características del desarrollo que aseguran satisfacer las necesidades de las generaciones presentes, sin comprometer las necesidades de las generaciones futuras.',
    },
  ],
  complementario: [
    {
      tema: 'Ciclo de vida del producto',
      referencia:
        'Economía desde casa. (2020). Ciclo de vida de un producto [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/r3OD49_m7Ls',
    },
    {
      tema: 'Ciclo de vida del producto',
      referencia:
        'Olivera, A. Cristobal, S. Saizar, C. (2016). Análisis del ciclo de vida ambiental, económico y social, una herramienta para la evaluación de impactos  y soporte  para la toma de decisiones. INNOTEC Gestión.',
      tipo: 'Artículo',
      link: 'https://catalogo.latu.org.uy/opac_css/doc_num.php?explnum_id=2238',
    },
    {
      tema: 'Sostenibilidad',
      referencia:
        'Archel, P. (2003). Las memorias de sostenibilidad de la Global Reporting Initiative. Universidad Pública de Navarra.',
      tipo: 'Memorias',
      link:
        'https://academica-e.unavarra.es/bitstream/handle/2454/23826/ArchelMemoriaSostenibilidad.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Sostenibilidad',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible – Colombia. (2015). Aprendamos sobre negocios verdes y sostenibles [video].  YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rfD-UKuod18',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Julieth Núñez Ortegón',
        cargo: 'Experta temática',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Yisela Andrea Vidales Vásquez',
        cargo: 'Experta temática',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo Garcí',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
