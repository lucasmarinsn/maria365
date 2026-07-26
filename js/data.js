const devotionalData = [
  {
    day: 1,
    title: "María, Estrella del Año Nuevo",
    month: "Enero",
    verse: { text: "Porque yo sé los planes que tengo para vosotros, dice el Señor, planes de bienestar y no de mal, para daros un futuro y una esperanza.", reference: "Jeremías 29:11" },
    reflection: "Al comenzar un nuevo año, María nos guía hacia Dios con su ejemplo de fe. Ella confió en los planes de Dios desde el primer momento de su vida.",
    prayer: "María, estrella del nuevo año, guía mis pasos en este camino que comienza."
  },
  {
    day: 2,
    title: "María, Madre de la Luz",
    month: "Enero",
    verse: { text: "En ti había un rayo de la luz eterna, y el Verbo era la luz verdadera que alumbra a todo hombre.", reference: "Juan 1:9" },
    reflection: "María es la Madre de la Luz porque dio a luz al Sol de Justicia. En el inicio del año, ella nos invita a caminar en la luz de Cristo.",
    prayer: "María, madre de la luz verdadera, ilumina mi camino en este nuevo año."
  },
  {
    day: 3,
    title: "María y las Apariciones Marianas",
    month: "Enero",
    verse: { text: "El ángel del Señor acampó alrededor de los que le temen, y los defendió.", reference: "Salmo 34:7" },
    reflection: "A lo largo de la historia, María se ha manifestado a los fieles en diversas apariciones milagrosas. Desde Guadalupe hasta Lourdes, ella ha venido a confirmar nuestra fe.",
    prayer: "Santa María, que tus apariciones nos recuerden tu presencia maternal."
  },
  {
    day: 4,
    title: "María, Guía de los Pueblos",
    month: "Enero",
    verse: { text: "Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.", reference: "Juan 14:6" },
    reflection: "María, como Madre de la Iglesia, guía a los pueblos hacia su Hijo. Ella fue la primera en seguir a Jesús y sigue guiando a la humanidad.",
    prayer: "María, guía de los pueblos, intercede por las naciones del mundo."
  },
  {
    day: 5,
    title: "El Silencio Nazareno",
    month: "Enero",
    verse: { text: "María guardaba todas estas cosas, meditándolas en su corazón.", reference: "Lucas 2:19" },
    reflection: "En Nazaret, María vivió treinta años en silencio y oración junto a Jesús y José. Este silencio fecundo nos enseña que la santidad se cultiva en la quietud del corazón.",
    prayer: "María, madre del silencio orante, enséñame a valorar la quietud del corazón."
  },
  {
    day: 6,
    title: "Epifanía y María",
    month: "Enero",
    verse: { text: "Nacido ya en Belén de Judá en los días del rey Herodes, vinieron del Oriente magos a Jerusalén.", reference: "Mateo 2:1-2" },
    reflection: "Los Magos de Oriente reconocieron en el Niño Jesús al Salvador del mundo. María, que custodiaba al Niño, fue testigo de la adoración de los pueblos.",
    prayer: "María, que junto a ti adoramos al Niño Dios, ayúdanos a seguir la estrella de la fe."
  },
  {
    day: 7,
    title: "María y la Oración del Año Nuevo",
    month: "Enero",
    verse: { text: "La oración constante del justo puede mucho en su eficacia.", reference: "Santiago 5:16" },
    reflection: "María fue una mujer de oración constante. Desde el Magníficat hasta el Cenáculo, su vida fue un continuo elevar su corazón a Dios.",
    prayer: "María, maestra de oración, ayúdame a comenzar este año con un compromiso firme de oración."
  },
  {
    day: 8,
    title: "María, Refugio de los Pobres",
    month: "Enero",
    verse: { text: "Bienaventurados los pobres de espíritu, porque de ellos es el reino de los cielos.", reference: "Mateo 5:3" },
    reflection: "María, que nació en una familia humilde, comprende el corazón de los pobres. Ella es refugio de los necesitados y abogada de los desvalidos.",
    prayer: "María, madre de los pobres, abre mi corazón para reconocer a Cristo en los más necesitados."
  },
  {
    day: 9,
    title: "La Virgen de Guadalupe",
    month: "Enero",
    verse: { text: "He aquí que el poderoso ha hecho por mí grandes cosas, y su nombre es santo.", reference: "Lucas 1:49" },
    reflection: "En América Latina, María se ha manifestado con rostro indígena en Guadalupe, mostrando su amor por todos los pueblos. Ella es Madre de todos.",
    prayer: "Nuestra Señora de Guadalupe, madre de los pueblos americanos, intercede por todos tus hijos."
  },
  {
    day: 10,
    title: "María, Sede de la Sabiduría",
    month: "Enero",
    verse: { text: "Encontré a la sabiduría más preciosa que el oro.", reference: "Proverbios 3:14" },
    reflection: "María acogió en su seno a la Sabiduría eterna, el Verbo de Dios. Ella es Sede de la Sabiduría porque en su seno habitó quien sustenta el universo.",
    prayer: "María, sede de la sabiduría divina, concede que busquemos la sabiduría que viene de Dios."
  },
  {
    day: 11,
    title: "María, Madre del Amor Hermoso",
    month: "Enero",
    verse: { text: "El amor es fuerte como la muerte; las aguas frías no pueden apagar el amor.", reference: "Cantar de los Cantares 8:6" },
    reflection: "María es Madre del Amor Hermoso porque dio a luz al Amor mismo. Su corazón maternal es el modelo de todo amor verdadero.",
    prayer: "María, madre del amor hermoso, enséñame a amar como Tú amas."
  },
  {
    day: 12,
    title: "El Nombre de María",
    month: "Enero",
    verse: { text: "No se hallará en la boca de los fieles el nombre de María sin que inmediatamente se una a él la idea de salud.", reference: "San Bernardo" },
    reflection: "El nombre de María es poderoso ante Dios. Invocarlo con fe es abrir las puertas de la gracia. En el nombre de María encontramos todo bien.",
    prayer: "María, dulce nombre que trae salvación, que tu nombre siempre esté en mis labios y en mi corazón."
  },
  {
    day: 13,
    title: "María, Templo del Espíritu Santo",
    month: "Enero",
    verse: { text: "¿No sabéis que vuestro cuerpo es templo del Espíritu Santo que mora en vosotros?", reference: "1 Corintios 6:19" },
    reflection: "María fue el templo más puro que el Espíritu Santo habitó. En ella, Dios se hizo presente sin sombra de pecado.",
    prayer: "Espíritu Santo, que moraste en María como en tu trono más puro, santifica mi cuerpo y mi alma."
  },
  {
    day: 14,
    title: "María, Modelo de Obediencia",
    month: "Enero",
    verse: { text: "He aquí la sierva del Señor; hágase en mí según tu palabra.", reference: "Lucas 1:38" },
    reflection: "El fiat de María fue el acto de obediencia más grande de la historia. Ella dijo sí a Dios sin reservas, confiando plenamente en su plan.",
    prayer: "María, modelo de obediencia, enséñame a decir sí a Dios en cada momento."
  },
  {
    day: 15,
    title: "María, Mediadora de Gracias",
    month: "Enero",
    verse: { text: "Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.", reference: "1 Timoteo 2:5" },
    reflection: "María es mediadora de todas las gracias porque fue el puente por el que Dios vino al mundo. Ella nos presenta ante su Hijo.",
    prayer: "María, mediadora de gracias, intercede ante tu Hijo por todos tus hijos."
  },
  {
    day: 16,
    title: "La Aparición de Lourdes",
    month: "Enero",
    verse: { text: "El que beba del agua que yo le dé, nunca más tendrá sed.", reference: "Juan 4:14" },
    reflection: "En Lourdes, María se apareció junto a la fuente de agua viva, recordándonos que solo Cristo sacia la sed del alma.",
    prayer: "Virgen de Lourdes, que de tu apparición brotó agua sanadora, cura las heridas de mi alma."
  },
  {
    day: 17,
    title: "María y la Santidad Cotidiana",
    month: "Enero",
    verse: { text: "Sed santos, porque yo soy santo.", reference: "1 Pedro 1:16" },
    reflection: "María nos muestra que la santidad se alcanza en la vida cotidiana, en las pequeñas tareas del hogar y del trabajo.",
    prayer: "María, que santificaste los momentos cotidianos, ayúdame a santificar cada día con amor."
  },
  {
    day: 18,
    title: "María, Madre de la Unidad",
    month: "Enero",
    verse: { text: "Que todos sean uno, como tú, Padre, estás en mí y yo en ti.", reference: "Juan 17:21" },
    reflection: "María es madre de todos los creyentes, y su amor une a la Iglesia entera. Ella estuvo presente con los apóstoles en el Cenáculo.",
    prayer: "María, madre de la unidad, une a todos los cristianos en la fe y en el amor."
  },
  {
    day: 19,
    title: "La Pureza de María",
    month: "Enero",
    verse: { text: "Bienaventurados los puros de corazón, porque ellos verán a Dios.", reference: "Mateo 5:8" },
    reflection: "María fue pura de corazón en toda su vida. Su pureza no fue solo física, sino de intención y de amor.",
    prayer: "María, madre de la pureza, purifica mi corazón de toda mancha."
  },
  {
    day: 20,
    title: "María, Consoladora de los Afligidos",
    month: "Enero",
    verse: { text: "Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré.", reference: "Mateo 11:28" },
    reflection: "María conoce el sufrimiento porque ella misma lloró al pie de la cruz. Por eso puede consolar a los afligidos con un amor de madre.",
    prayer: "María, consoladora de los afligidos, acércate a todos los que lloran hoy."
  },
  {
    day: 21,
    title: "La Aparición de Fátima",
    month: "Enero",
    verse: { text: "Arrepentíos y convertíos, para que sean borrados vuestros pecados.", reference: "Hechos 3:19" },
    reflection: "En Fátima, María vino a pedirnos la oración y la penitencia por la conversión del mundo. Su mensaje es urgente y actual.",
    prayer: "Virgen de Fátima, que tu mensaje de conversión resuene en mi corazón."
  },
  {
    day: 22,
    title: "María, Auxilio de los Cristianos",
    month: "Enero",
    verse: { text: "El Señor es mi fortaleza y mi escudo; en él confía mi corazón.", reference: "Salmo 28:7" },
    reflection: "María es Auxilio de los Cristianos porque nos protege en las batallas espirituales. Ella venció al mal y nos ayuda a vencer también.",
    prayer: "María, auxilio de los cristianos, protégeme en las batallas de la vida."
  },
  {
    day: 23,
    title: "María, Madre de la Esperanza",
    month: "Enero",
    verse: { text: "Los que esperan en el Señor renovarán sus fuerzas.", reference: "Isaías 40:31" },
    reflection: "María esperó con fe la resurrección de su Hijo, y su esperanza nunca fue defraudada. Ella es madre de la esperanza.",
    prayer: "María, madre de la esperanza, fortalece mi esperanza cuando la desesperación me aceche."
  },
  {
    day: 24,
    title: "María y la Familia",
    month: "Enero",
    verse: { text: "El que haga la voluntad de Dios, ese es mi hermano y mi hermana y mi madre.", reference: "Marcos 3:35" },
    reflection: "María vivió en la Sagrada Familia de Nazaret, modelo de toda familia cristiana. Ella nos enseña que la familia es lugar de amor y oración.",
    prayer: "Santa Familia de Nazaret, bendice las familias del mundo."
  },
  {
    day: 25,
    title: "La Aparición de Knock",
    month: "Enero",
    verse: { text: "Dichosos los que no han visto y han creído.", reference: "Juan 20:29" },
    reflection: "En Knock, María apareció en silencio, sin pronunciar palabra. La fe no necesita palabras, sino un corazón dispuesto a escuchar a Dios.",
    prayer: "Virgen de Knock, madre del silencio elocuente, enséñame a escuchar la voz de Dios."
  },
  {
    day: 26,
    title: "María, Estrella de la Evangelización",
    month: "Enero",
    verse: { text: "Id por todo el mundo y haced discípulos a todas las naciones.", reference: "Mateo 28:19" },
    reflection: "María fue la primera evangelizadora porque llevó a Jesús al mundo. Ella nos acompaña en la misión de evangelizar.",
    prayer: "María, estrella de la evangelización, ilumina mi camino misionero."
  },
  {
    day: 27,
    title: "María y la Reconciliación",
    month: "Enero",
    verse: { text: "Dios estaba en Cristo reconciliando consigo al mundo.", reference: "2 Corintios 5:19" },
    reflection: "María es modelo de reconciliación porque siempre estuvo unida a la voluntad de Dios. Ella nos ayuda a reconciliarnos con Dios y con los hermanos.",
    prayer: "María, madre de la reconciliación, ayúdame a perdonar y a buscar la paz."
  },
  {
    day: 28,
    title: "María, Madre de los Sacerdotes",
    month: "Enero",
    verse: { text: "El que quiera ser el primero, que sea el último de todos y el servidor de todos.", reference: "Marcos 9:35" },
    reflection: "María es madre de los sacerdotes porque los prepara para servir a Dios y al pueblo. Ella intercede por ellos y les da la gracia de ser pastores santos.",
    prayer: "María, madre de los sacerdotes, santifica a todos los presbíteros del mundo."
  },
  {
    day: 29,
    title: "María, Modelo de Fe",
    month: "Enero",
    verse: { text: "Porque andamos por fe, no por vista.", reference: "2 Corintios 5:7" },
    reflection: "María caminó por fe cuando no comprendía los planes de Dios. Su fe no se basó en ver, sino en confiar en la palabra de Dios.",
    prayer: "María, modelo de fe, fortalece mi fe para que camine por las promesas de Dios."
  },
  {
    day: 30,
    title: "María y la Penitencia Amorosa",
    month: "Enero",
    verse: { text: "Si alguno quiere ir en pos de mí, niéguese a sí mismo, tome su cruz y sígame.", reference: "Mateo 16:24" },
    reflection: "María vivió la penitencia con amor, ofreciendo sus sufrimientos por la salvación del mundo. La verdadera penitencia es un acto de amor.",
    prayer: "María, madre de la penitencia amorosa, ayúdame a ofrecer mis sufrimientos por amor a Dios."
  },
  {
    day: 31,
    title: "María, Mediadora de Todas las Gracias",
    month: "Enero",
    verse: { text: "No nos dejéis caer en la tentación, sino libradnos del mal.", reference: "Mateo 6:13" },
    reflection: "María es la Mediadora de todas las gracias porque todas las gracias pasan por sus manos maternales. Ella obtiene del cielo lo que necesitamos.",
    prayer: "María, mediadora de todas las gracias, obtén para mí todo lo que necesito para mi salvación."
  }

, {
    day: 1,
    title: "El Amor que Todo lo Cambia",
    month: "Febrero",
    verse: {
      text: "Porque tanto amÃ³ Dios el mundo que dio a su Hijo unigÃ©nito, para que todo el que crea en Ã©l no perezca sino que tenga vida eterna.",
      reference: "Juan 3:16"
    },
    reflection: "El amor de Dios es el origen de todo amor verdadero. MarÃ­a, como madre, comprendiÃ³ profundamente este amor cuando aceptÃ³ llevar a su Hijo en su seno. Su sÃ­ al Ã¡ngel fue un acto de amor puro que cambiÃ³ la historia de la humanidad.",
    prayer: "MarÃ­a, ensÃ©Ã±ame a amar como Dios ama, con entrega total y sin condiciones. Que tu ejemplo ilumine mi corazÃ³n este dÃ­a."
  },
  {
    day: 2,
    title: "El MagnÃ­ficat: Un Canto de Amor",
    month: "Febrero",
    verse: {
      text: "Mi alma glorifica al SeÃ±or y mi espÃ­ritu se alegra en Dios mi Salvador, porque ha mirado la humillaciÃ³n de su esclava.",
      reference: "Lucas 1:46-48"
    },
    reflection: "El MagnÃ­ficat es el cÃ¡ntico mÃ¡s hermoso de amor y gratitud. MarÃ­a reconociÃ³ que todo viene de Dios y su respuesta fue alabanza. Cuando amamos, nuestro corazÃ³n tambiÃ©n se eleva en acciÃ³n de gracias.",
    prayer: "SeÃ±or, que mi alma te glorifique como MarÃ­a glorificÃ³ tu nombre. Llena mi corazÃ³n de gratitud y alabanza."
  },
  {
    day: 3,
    title: "El Amor Humilde de MarÃ­a",
    month: "Febrero",
    verse: {
      text: "He aquÃ­ la esclava del SeÃ±or; hÃ¡gase en mÃ­ segÃºn tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "La humildad de MarÃ­a es una manifestaciÃ³n profunda de su amor. No buscÃ³ gloria propia, sino que se puso al servicio de Dios. El amor verdadero siempre es humilde y se entrega sin esperar nada a cambio.",
    prayer: "MarÃ­a, dame tu humildad para servir a Dios y a los demÃ¡s sin buscar reconocimiento. Que mi vida sea un acto de amor silencioso."
  },
  {
    day: 4,
    title: "El Amor en el Silencio",
    month: "Febrero",
    verse: {
      text: "MarÃ­a guardaba todas estas cosas, meditÃ¡ndolas en su corazÃ³n.",
      reference: "Lucas 2:19"
    },
    reflection: "MarÃ­a meditaba en silencio los misterios de Dios. El amor tambiÃ©n se cultiva en el silencio y la reflexiÃ³n. En la quietud del corazÃ³n, encontramos la presencia de Dios y aprendemos a amar mejor.",
    prayer: "MarÃ­a, ayÃºdame a encontrar momentos de silencio para meditar el amor de Dios en mi vida. Que tu ejemplo me guÃ­e a la contemplaciÃ³n."
  },
  {
    day: 5,
    title: "La VisitaciÃ³n: Amor que se Comparte",
    month: "Febrero",
    verse: {
      text: "En cuanto Isabel oyÃ³ el saludo de MarÃ­a, el hijo saltÃ³ en su seno, e Isabel quedÃ³ llena del EspÃ­ritu Santo.",
      reference: "Lucas 1:41-42"
    },
    reflection: "La VisitaciÃ³n muestra el amor que se comparte con alegrÃ­a. MarÃ­a no guardÃ³ el don de Dios para sÃ­ misma, sino que fue a servir a su prima Isabel. El amor verdadero siempre busca bendecir a los demÃ¡s.",
    prayer: "MarÃ­a, ensÃ©Ã±ame a compartir tu amor con los que me rodean. Que mi vida sea una visitaciÃ³n de gracia y bendiciÃ³n para otros."
  },
  {
    day: 6,
    title: "El Amor Maternal en CanÃ¡",
    month: "Febrero",
    verse: {
      text: "Lo que Ã‰l les diga, hÃ¡ganlo.",
      reference: "Juan 2:5"
    },
    reflection: "En las bodas de CanÃ¡, MarÃ­a actuÃ³ con amor maternal al interceder por los novios. Su confianza en JesÃºs fue total. MarÃ­a siempre nos dirige a su Hijo, porque su amor maternal nos guÃ­a hacia Ã‰l.",
    prayer: "MarÃ­a, intercede por mÃ­ ante JesÃºs como lo hiciste en CanÃ¡. Que tu amor maternal me lleve a hacer la voluntad de Dios."
  },
  {
    day: 7,
    title: "El Amor que Persevera",
    month: "Febrero",
    verse: {
      text: "El amor es paciente, es bondadoso; no es envidioso ni vanidoso ni soberbio.",
      reference: "1 Corintios 13:4"
    },
    reflection: "San Pablo describe las cualidades del amor, y MarÃ­a las viviÃ³ plenamente. Su paciencia en los momentos difÃ­ciles, su bondad con todos, su entrega silenciosa son ejemplo de amor que persevera.",
    prayer: "SeÃ±or, que el amor que MarÃ­a viviÃ³ se manifieste en mi vida. Dame paciencia, bondad y humildad para amar como ella."
  },
  {
    day: 8,
    title: "El Amor en la Cruz",
    month: "Febrero",
    verse: {
      text: "Junto a la cruz de JesÃºs estaba su madre.",
      reference: "Juan 19:25"
    },
    reflection: "MarÃ­a permaneciÃ³ al pie de la Cruz, compartiendo el sufrimiento de su Hijo. Este es el amor mÃ¡s profundo: estar presente en el dolor, sin huir. El amor de MarÃ­a nos enseÃ±a a estar junto a los que sufren.",
    prayer: "MarÃ­a, fortalece mi amor para que permanezca fiel en los momentos de prueba. Que nunca abandone a quienes amo en su cruz."
  },
  {
    day: 9,
    title: "El CorazÃ³n Traspasado",
    month: "Febrero",
    verse: {
      text: "A ti misma una espada te atravesarÃ¡ el alma.",
      reference: "Lucas 2:35"
    },
    reflection: "SimeÃ³n profetizÃ³ que el alma de MarÃ­a serÃ­a traspasada por una espada. Su sufrimiento fue inmenso, pero su amor nunca se quebrÃ³. El amor verdadero acerca el dolor de los hijos como propio.",
    prayer: "MarÃ­a, que tu corazÃ³n traspasado interceda por todos los padres y madres que sufren por sus hijos. Consuela a los que lloran."
  },
  {
    day: 10,
    title: "El Amor que Espera",
    month: "Febrero",
    verse: {
      text: "Los que esperan en el SeÃ±or renovarÃ¡n sus fuerzas.",
      reference: "IsaÃ­as 40:31"
    },
    reflection: "MarÃ­a esperÃ³ con fe la resurrecciÃ³n de su Hijo. La espera amorosa es una forma de fe activa. Cuando amamos, aprendemos a esperar con paciencia la obra de Dios en nuestra vida.",
    prayer: "MarÃ­a, enseÃ±ame a esperar con fe y paciencia. Que tu ejemplo me dÃ© fuerzas para confiar en Dios incluso en la oscuridad."
  },
  {
    day: 11,
    title: "El Amor de la Madre de la Iglesia",
    month: "Febrero",
    verse: {
      text: "He aquÃ­ a tu madre.",
      reference: "Juan 19:27"
    },
    reflection: "JesÃºs en la cruz confiÃ³ a Juan a su madre. Desde ese momento, MarÃ­a es madre de todos los crecientes. Su amor maternal se extiende a toda la humanidad sin distinciÃ³n.",
    prayer: "MarÃ­a, madre mÃ­a, acoge a todos tus hijos en tu amor maternal. Que la Iglesia entera sienta tu cuidado y protecciÃ³n."
  },
  {
    day: 12,
    title: "El Amor en PentecostÃ©s",
    month: "Febrero",
    verse: {
      text: "Todos ellos estaban reunidos en un mismo lugar, cuando de repente vino del cielo un ruido como de un viento recio.",
      reference: "Hechos 2:1-2"
    },
    reflection: "MarÃ­a estuvo presente con los apÃ³stoles esperando el EspÃ­ritu Santo. Su amor por la Iglesia naciente fue constante. El amor de MarÃ­a nos une como comunidad en el EspÃ­ritu.",
    prayer: "EspÃ­ritu Santo, que el amor de MarÃ­a estÃ© presente en nuestra comunidad. Une nuestros corazones en tu fuego divino."
  },
  {
    day: 13,
    title: "El Amor que Consuela",
    month: "Febrero",
    verse: {
      text: "Bienaventurados los que lloran, porque ellos serÃ¡n consolados.",
      reference: "Mateo 5:4"
    },
    reflection: "MarÃ­a es consuelo de los afligidos porque ella misma conociÃ³ el dolor. Su amor maternal consuela como solo una madre puede hacerlo. En la tristeza, MarÃ­a estÃ¡ presente con su amor sanador.",
    prayer: "MarÃ­a, consoladora de los afligidos, acÃ©rcate a todos los que lloran hoy. Tu amor maternal sana las heridas del corazÃ³n."
  },
  {
    day: 14,
    title: "El Amor MÃ¡s Grande",
    month: "Febrero",
    verse: {
      text: "No hay mayor amor que dar la vida por los amigos.",
      reference: "Juan 15:13"
    },
    reflection: "JesÃºs dio su vida por amor, y MarÃ­a ofreciÃ³ su vida en silencio junto a Ã‰l. El amor mÃ¡s grande es la entrega total. MarÃ­a nos enseÃ±a que amar es darse sin medida.",
    prayer: "SeÃ±or, que el amor de MarÃ­a me inspire a dar mi vida por los demÃ¡s. Que nunca sea tacaÃ±o en el amor."
  },
  {
    day: 15,
    title: "El Amor Incondicional",
    month: "Febrero",
    verse: {
      text: "El amor no busca su propio interÃ©s.",
      reference: "1 Corintios 13:5"
    },
    reflection: "MarÃ­a nunca buscÃ³ su propio interÃ©s. Su vida fue un don completo para Dios y para los hombres. El amor incondicional no espera reciprocidad, sino que se entrega generosamente.",
    prayer: "MarÃ­a, libÃ©rame del amor propio para que pueda amar como tÃº: sin condiciones, sin exigencias, sin reservas."
  },
  {
    day: 16,
    title: "El Amor que Educa",
    month: "Febrero",
    verse: {
      text: "Y JesÃºs crecÃ­a en sabidurÃ­a, en estatura y en gracia ante Dios y ante los hombres.",
      reference: "Lucas 2:52"
    },
    reflection: "MarÃ­a educÃ³ a JesÃºs con amor paciente y sabio. Cada madre y padre es llamado a formar a sus hijos con el mismo cuidado. El amor educador es uno de los mÃ¡s nobles dones.",
    prayer: "MarÃ­a, maestra de JesÃºs, guÃ­a a todos los padres en la educaciÃ³n de sus hijos. Que el amor sea la base de toda enseÃ±anza."
  },
  {
    day: 17,
    title: "El Amor que Protege",
    month: "Febrero",
    verse: {
      text: "Bajo sus alas encontrarÃ¡s refugio; su fidelidad es escudo y armadura.",
      reference: "Salmo 91:4"
    },
    reflection: "MarÃ­a nos protege con sus alas de amor maternal. Como un pÃ¡jaro que cobija a sus polluelos, ella nos cubre con su manto. Su protecciÃ³n es un refugio seguro en las tormentas de la vida.",
    prayer: "MarÃ­a, refugio de los pecadores, protÃ©geme bajo tu manto. Que tu amor me guarde de todo mal."
  },
  {
    day: 18,
    title: "El Amor que Perdona",
    month: "Febrero",
    verse: {
      text: "Perdona nuestras ofensas, como tambiÃ©n nosotros perdonamos a los que nos ofenden.",
      reference: "Mateo 6:12"
    },
    reflection: "MarÃ­a perdonÃ³ a quienes maltrataron a su Hijo y a quienes la ignoraron. El amor verdadero siempre encuentra la fuerza para perdonar. Perdonar es el acto mÃ¡s difÃ­cil y mÃ¡s noble del amor.",
    prayer: "MarÃ­a, que tu corazÃ³n purÃ­simo me enseÃ±e a perdonar como Dios perdona. LibÃ©rame del rencor y la amargura."
  },
  {
    day: 19,
    title: "El Amor que Sana",
    month: "Febrero",
    verse: {
      text: "Ã‰l mismo cargÃ³ con nuestras enfermedades y sufriÃ³ nuestros dolores.",
      reference: "IsaÃ­as 53:4"
    },
    reflection: "MarÃ­a fue la primera sanadora porque llevÃ³ en su seno al Salvador. Su amor sana heridas fÃ­sicas y espirituales. En la enfermedad, MarÃ­a nos acompaÃ±a con su amor sanador.",
    prayer: "MarÃ­a, salud de los enfermos, toca a todos los que sufren hoy. Que tu amor sea bÃ¡lsamo para sus heridas."
  },
  {
    day: 20,
    title: "El Amor que Fortalece",
    month: "Febrero",
    verse: {
      text: "Todo lo puedo en Cristo que me fortalece.",
      reference: "Filipenses 4:13"
    },
    reflection: "MarÃ­a recibiÃ³ la fuerza de Dios para cumplir su misiÃ³n. El amor de MarÃ­a nos fortalece para llevar nuestras cruces. Cuando amamos, encontramos fuerzas que no sabÃ­amos que tenÃ­amos.",
    prayer: "MarÃ­a, fortalece mi debilidad con tu amor maternal. Que en ti encuentre la fuerza para perseverar cada dÃ­a."
  },
  {
    day: 21,
    title: "El Amor Fiel",
    month: "Febrero",
    verse: {
      text: "El amor es firme como la muerte; las aguas del amor no lo extinguirÃ¡n.",
      reference: "Cantares 8:6"
    },
    reflection: "El amor de MarÃ­a por JesÃºs y por nosotros es tan firme como la muerte. Nada pudo extinguir su amor: ni la pobreza, ni el sufrimiento, ni la muerte. Su fidelidad es un ejemplo para todos.",
    prayer: "MarÃ­a, que tu amor fiel me inspire a ser constante en mi fe. Que nunca abandone mi amor por Dios y por los demÃ¡s."
  },
  {
    day: 22,
    title: "El Amor que Sirve",
    month: "Febrero",
    verse: {
      text: "El Hijo del Hombre no vino a ser servido, sino a servir y a dar su vida en rescate por muchos.",
      reference: "Marcos 10:45"
    },
    reflection: "MarÃ­a sirviÃ³ a Isabel en la VisitaciÃ³n, sirviÃ³ a JesÃºs en Nazaret, sirviÃ³ a la Iglesia en PentecostÃ©s. El amor siempre se manifiesta en el servicio. Servir es la prueba del amor verdadero.",
    prayer: "MarÃ­a, que tu amor por el servicio me enseÃ±e a entregarme a los demÃ¡s. Que mi vida sea un servicio de amor."
  },
  {
    day: 23,
    title: "El Amor que Reconcilia",
    month: "Febrero",
    verse: {
      text: "Dios estaba en Cristo reconciliando consigo al mundo.",
      reference: "2 Corintios 5:19"
    },
    reflection: "MarÃ­a es mediadora de gracia porque su amor reconcilia a los hombres con Dios. Ella intercede por nosotros y nos acerca a su Hijo. El amor de MarÃ­a es puente de reconciliaciÃ³n.",
    prayer: "MarÃ­a, puente entre Dios y los hombres, reconcilia mi corazÃ³n con el Padre. Que tu amor una lo que el pecado separÃ³."
  },
  {
    day: 24,
    title: "El Amor que Aclara",
    month: "Febrero",
    verse: {
      text: "TÃº eres la luz del mundo. No puede ocultarse una ciudad situada en un monto.",
      reference: "Mateo 5:14"
    },
    reflection: "MarÃ­a es estrella de la maÃ±ana que ilumina nuestro camino. Su amor aclara la oscuridad de la duda y el miedo. Cuando estamos perdidos, MarÃ­a nos muestra el camino de regreso a Dios.",
    prayer: "MarÃ­a, estrella de la maÃ±ana, ilumina mi camino con tu amor. Que tu luz guÃ­e mis pasos hacia JesÃºs."
  },
  {
    day: 25,
    title: "El Amor que AcompaÃ±a",
    month: "Febrero",
    verse: {
      text: "El SeÃ±or va delante de ti y estarÃ¡ contigo; no te abandonarÃ¡ ni te desampararÃ¡.",
      reference: "Deuteronomio 31:8"
    },
    reflection: "MarÃ­a acompaÃ±a a cada hijo suyo en el peregrinar de la vida. No caminamos solos porque ella estÃ¡ a nuestro lado. Su amor maternal es compaÃ±Ã­a fiel en cada etapa.",
    prayer: "MarÃ­a, compaÃ±era fiel del camino, no me dejes solo. Que tu presencia me dÃ© paz y seguridad en cada paso."
  },
  {
    day: 26,
    title: "El Amor que Transforma",
    month: "Febrero",
    verse: {
      text: "No se conformen al mundo actual, sino transformen su mente.",
      reference: "Romanos 12:2"
    },
    reflection: "El amor de MarÃ­a transformÃ³ su vida y la de todo el mundo. Quien ama es transformado desde dentro. MarÃ­a nos invita a una conversiÃ³n del corazÃ³n que nace del amor verdadero.",
    prayer: "MarÃ­a, transforma mi corazÃ³n con tu amor. Que yo tambiÃ©n sea instrumento de conversiÃ³n para otros."
  },
  {
    day: 27,
    title: "El Amor que No Muere",
    month: "Febrero",
    verse: {
      text: "El amor nunca se acaba.",
      reference: "1 Corintios 13:8"
    },
    reflection: "MarÃ­a fue llevada al cielo porque su amor la hizo digna de la gloria. El amor de MarÃ­a no terminÃ³ con su muerte, sino que continÃºa viviendo y obrando en la tierra. El amor es eterno.",
    prayer: "MarÃ­a, que tu amor eterno me dÃ© la esperanza de la vida definitiva. Que tu ejemplo me prepare para la eternidad."
  },
  {
    day: 28,
    title: "El Amor que Todo lo Vence",
    month: "Febrero",
    verse: {
      text: "En todo esto vencemos a aquel que nos amÃ³.",
      reference: "Romanos 8:37"
    },
    reflection: "MarÃ­a venciÃ³ con el amor: venciÃ³ al pecado, al miedo, a la muerte. Su amor por Dios y por los hombres fue mÃ¡s fuerte que cualquier obstÃ¡culo. En el amor de MarÃ­a estÃ¡ nuestra victoria.",
    prayer: "MarÃ­a, victoriosa en el amor, que tu amor me dÃ© la victoria sobre el pecado y el miedo. AmÃ©n."
  }

, {
    day: 1,
    title: "El Inicio de la PurificaciÃ³n",
    month: "Marzo",
    verse: {
      text: "PurifiquÃ©monos de toda mancha de carne y espÃ­ritu, perfeccionando la santificaciÃ³n en el temor de Dios.",
      reference: "2 Corintios 7:1"
    },
    reflection: "Al comenzar este mes de marzo, la Cuaresma nos invita a una limpieza interior profunda. MarÃ­a, que fue concebida sin mancha, nos muestra que la pureza del alma es posible cuando nos entregamos a Dios con corazÃ³n sincero.",
    prayer: "MarÃ­a, Madre pura, ayÃºdame a limpiar mi corazÃ³n de toda mancha y a caminar hacia tu Hijo con alma limpia."
  },
  {
    day: 2,
    title: "CorazÃ³n Puro ante Dios",
    month: "Marzo",
    verse: {
      text: "Bienaventurados los puros de corazÃ³n, porque ellos verÃ¡n a Dios.",
      reference: "Mateo 5:8"
    },
    reflection: "La pureza del corazÃ³n no es solo inocencia, sino integridad en la intenciÃ³n. MarÃ­a guardaba todas las cosas en su corazÃ³n puro, meditando en la voluntad de Dios con amor perfecto.",
    prayer: "SeÃ±or, concede un corazÃ³n puro como el de MarÃ­a, para que pueda contemplar tu rostro con amor."
  },
  {
    day: 3,
    title: "La PresentaciÃ³n en el Templo",
    month: "Marzo",
    verse: {
      text: "Cuando se cumplieron los dÃ­as de su purificaciÃ³n conforme a la ley de MoisÃ©s, llevaron a JesÃºs a JerusalÃ©n para presentarlo al SeÃ±or.",
      reference: "Lucas 2:22"
    },
    reflection: "MarÃ­a cumpliÃ³ la Ley con humildad y obediencia, presentÃ¡ndose en el Templo para su purificaciÃ³n. En ese momento, el anciano SimeÃ³n reconociÃ³ en el NiÃ±o la salvaciÃ³n prometida.",
    prayer: "MarÃ­a, que tu obediencia al Padre sea ejemplo para mi vida, y que siempre presente mi corazÃ³n en el templo de tu Hijo."
  },
  {
    day: 4,
    title: "La Espada del Dolor",
    month: "Marzo",
    verse: {
      text: "A ti misma una espada te atravesarÃ¡ el alma, para que queden al descubierto los pensamientos de muchos corazones.",
      reference: "Lucas 2:35"
    },
    reflection: "SimeÃ³n profetizÃ³ que una espada atravesarÃ­a el alma de MarÃ­a. Este dolor no destruyÃ³ su fe, sino que la purificÃ³ aÃºn mÃ¡s, preparÃ¡ndola para ser Madre de todos los redimidos.",
    prayer: "Madre de los afligidos, sostÃ©n mi alma cuando la espada del dolor me atraviese, para que mi fe salga purificada de la prueba."
  },
  {
    day: 5,
    title: "CreaciÃ³n de un CorazÃ³n Limpio",
    month: "Marzo",
    verse: {
      text: "Create en mÃ­, oh Dios, un corazÃ³n puro, y renueva en mÃ­ un espÃ­ritu recto.",
      reference: "Salmo 51:10"
    },
    reflection: "El salmista reconoce que solo Dios puede renovar nuestro corazÃ³n. MarÃ­a fue renovada por la gracia del EspÃ­ritu Santo, y nosotros tambiÃ©n podemos pedir esa misma renovaciÃ³n interior.",
    prayer: "Padre celestial, renueva mi corazÃ³n como renovaste el de MarÃ­a, para que sea digno de recibir tu Hijo."
  },
  {
    day: 6,
    title: "El Camino de la ConversiÃ³n",
    month: "Marzo",
    verse: {
      text: "ArrepentÃ­os y convertÃ­os, para que sean borrados vuestros pecados.",
      reference: "Hechos 3:19"
    },
    reflection: "La conversiÃ³n es un retorno al Padre, como MarÃ­a siempre estuvo orientada hacia Ã‰l. Cada dÃ­a podemos renovar nuestro compromiso de seguir a Cristo con corazÃ³n arrepentido.",
    prayer: "MarÃ­a, guÃ­ame en el camino de la conversiÃ³n, para que mi vida sea una constante vuelta a Dios."
  },
  {
    day: 7,
    title: "El EspÃ­ritu de Pureza",
    month: "Marzo",
    verse: {
      text: "Y entrÃ³ en ella el EspÃ­ritu Santo, y la sombra del AltÃ­simo cubriÃ³ con su poder.",
      reference: "Lucas 1:35"
    },
    reflection: "La pureza de MarÃ­a fue sellada por el EspÃ­ritu Santo en la AnunciaciÃ³n. La virtud divina la preservÃ³ para ser Madre de Dios, mostrando que la gracia transforma y protege.",
    prayer: "EspÃ­ritu Santo, ven sobre mÃ­ con tu pureza, para que como MarÃ­a, pueda ser instrumento santo del SeÃ±or."
  },
  {
    day: 8,
    title: "La Gracia que Limpia",
    month: "Marzo",
    verse: {
      text: "Si confesamos nuestros pecados, Ã©l es fiel y justo para perdonar nuestros pecados y limpiarnos de toda injusticia.",
      reference: "1 Juan 1:9"
    },
    reflection: "Dios siempre estÃ¡ dispuesto a perdonar y limpiar nuestra alma. MarÃ­a, que nunca necesitÃ³ perdÃ³n, intercede por nosotros para que recibamos la gracia de la purificaciÃ³n.",
    prayer: "MarÃ­a, intercede ante tu Hijo para que me perdone y limpie mi corazÃ³n con su sangre preciosa."
  },
  {
    day: 9,
    title: "El MagnÃ­ficat de la Pureza",
    month: "Marzo",
    verse: {
      text: "EngrandecerÃ¡ mi alma al SeÃ±or; y mi espÃ­ritu se alegrÃ³ en Dios mi Salvador.",
      reference: "Lucas 1:46-47"
    },
    reflection: "El cÃ¡ntico de MarÃ­a revela un alma pura que se regocija en Dios. Su alabanza nace de un corazÃ³n libre de egoÃ­smo, completamente entregado a la voluntad divina.",
    prayer: "MarÃ­a, ensÃ©Ã±ame a alabar a Dios con la pureza de tu corazÃ³n, para que mi espÃ­ritu se alegre en Ã‰l."
  },
  {
    day: 10,
    title: "PurificaciÃ³n por la Palabra",
    month: "Marzo",
    verse: {
      text: "Ya vosotros estÃ¡is limpios por la palabra que os he hablado.",
      reference: "Juan 15:3"
    },
    reflection: "La Palabra de Dios tiene poder purificador. MarÃ­a meditaba la Palabra en su corazÃ³n, y asÃ­ se mantenÃ­a en la pureza que la gracia le habÃ­a concedido.",
    prayer: "SeÃ±or, que tu Palabra me purifique y me transforme, como lo hizo en el corazÃ³n de MarÃ­a."
  },
  {
    day: 11,
    title: "La Cuaresma del CorazÃ³n",
    month: "Marzo",
    verse: {
      text: "La Cuaresma es un tiempo de gracia y de conversiÃ³n del corazÃ³n.",
      reference: "2 Corintios 6:2"
    },
    reflection: "En la Cuaresma, la Iglesia nos invita a volver al corazÃ³n. MarÃ­a viviÃ³ en permanente cuaresma interior, preparÃ¡ndose siempre para recibir la voluntad de Dios.",
    prayer: "MarÃ­a, madre de la penitencia amorosa, ensÃ©Ã±ame a vivir la Cuaresma con el corazÃ³n."
  },
  {
    day: 12,
    title: "Agua Viva de Pureza",
    month: "Marzo",
    verse: {
      text: "El que beba del agua que yo le dÃ©, nunca mÃ¡s tendrÃ¡ sed, sino que el agua que yo le dÃ© serÃ¡ en Ã©l una fuente de agua que brote para vida eterna.",
      reference: "Juan 4:14"
    },
    reflection: "Cristo ofrece agua viva que purifica y da vida eterna. MarÃ­a bebiÃ³ de esta fuente y fue purificada por completo, convertida en templo del EspÃ­ritu Santo.",
    prayer: "MarÃ­a, que tu Hijo me dÃ© del agua viva de su gracia, para que mi alma nunca mÃ¡s tenga sed."
  },
  {
    day: 13,
    title: "El Velo de la Pureza",
    month: "Marzo",
    verse: {
      text: "No nos acerquemos con hipocresÃ­a, sino con sinceridad de corazÃ³n, por la fe, teniendo el corazÃ³n purificado de la mala conciencia.",
      reference: "Hebreos 10:22"
    },
    reflection: "MarÃ­a cubriÃ³ su pureza con el velo de la humildad. Nunca buscÃ³ ser vista, sino que sirviÃ³ a Dios en el silencio y la sencillez de su corazÃ³n.",
    prayer: "MarÃ­a, que tu humildad me enseÃ±e a cubrir mi pureza con el velo de la sencillez."
  },
  {
    day: 14,
    title: "Limpiando el Interior del CÃ¡liz",
    month: "Marzo",
    verse: {
      text: "Limpiad primero el interior del cÃ¡liz y del plato, para que el exterior tambiÃ©n quede limpio.",
      reference: "Mateo 23:26"
    },
    reflection: "JesÃºs nos pide que limpiemos primero el corazÃ³n, no solo la apariencia. MarÃ­a vivÃ­a desde el interior, y por eso su alma estaba completamente limpia ante Dios.",
    prayer: "SeÃ±or, limpia mi corazÃ³n por dentro, como lo hiciste en el alma de MarÃ­a."
  },
  {
    day: 15,
    title: "El EspÃ­ritu que Santifica",
    month: "Marzo",
    verse: {
      text: "El EspÃ­ritu es el que da vida; la carne para nada aprovecha. Las palabras que yo os he hablado son espÃ­ritu y son vida.",
      reference: "Juan 6:63"
    },
    reflection: "Solo el EspÃ­ritu puede santificar y purificar el alma. MarÃ­a fue santificada por el EspÃ­ritu Santo desde su concepciÃ³n, y nosotros tambiÃ©n somos llamados a esa santidad.",
    prayer: "EspÃ­ritu de pureza, ven a mi alma y santifÃ­came como santificaste a MarÃ­a."
  },
  {
    day: 16,
    title: "El Bautismo de ConversiÃ³n",
    month: "Marzo",
    verse: {
      text: "Yo os bautizo con agua para el arrepentimiento; pero el que viene despuÃ©s de mÃ­, os bautizarÃ¡ con el EspÃ­ritu Santo y con fuego.",
      reference: "Mateo 3:11"
    },
    reflection: "El bautismo de Juan preparaba la conversiÃ³n, pero Cristo purifica con fuego del EspÃ­ritu. MarÃ­a fue bautizada espiritualmente por la gracia del EspÃ­ritu Santo.",
    prayer: "MarÃ­a, que el fuego del EspÃ­ritu purifique mi alma en esta Cuaresma."
  },
  {
    day: 17,
    title: "La Pureza de los Ãngeles",
    month: "Marzo",
    verse: {
      text: "Y el Ã¡ngel respondiÃ³, diciÃ©ndole: El EspÃ­ritu Santo vendrÃ¡ sobre ti, y el poder del AltÃ­simo te cubrirÃ¡ con su sombra.",
      reference: "Lucas 1:35"
    },
    reflection: "El Ã¡ngel Gabriel anunciÃ³ a MarÃ­a que el EspÃ­ritu la cubrirÃ­a. Esta protecciÃ³n divina asegurÃ³ su pureza para cumplir el plan de salvaciÃ³n.",
    prayer: "MarÃ­a, que la sombra del AltÃ­simo cubra mi vida y me preserve en la pureza."
  },
  {
    day: 18,
    title: "Fuego que Purifica",
    month: "Marzo",
    verse: {
      text: "Porque yo como el fuego, y como la decoccÃ³n de la cal, te he reducido.",
      reference: "MalaquÃ­as 3:2"
    },
    reflection: "Dios es fuego purificador que quita la escoria. MarÃ­a fue probada por el dolor y saliÃ³ mÃ¡s pura, como el oro refinado en el fuego.",
    prayer: "SeÃ±or, permite que tu fuego purificador me transforme, como lo hizo con MarÃ­a."
  },
  {
    day: 19,
    title: "San JosÃ©, GuardiÃ¡n de la Pureza",
    month: "Marzo",
    verse: {
      text: "Y despertando JosÃ© de su sueÃ±o, hizo como el Ã¡ngel del SeÃ±or le habÃ­a mandado, y recibiÃ³ a su mujer.",
      reference: "Mateo 1:24"
    },
    reflection: "JosÃ©, guardiÃ¡n de MarÃ­a y del NiÃ±o, ejercitÃ³ una pureza heroica. Su obediencia y fidelidad protegieron el misterio de la EncarnaciÃ³n.",
    prayer: "San JosÃ©, que tu pureza y obediencia sean ejemplo para mi vida familiar y espiritual."
  },
  {
    day: 20,
    title: "La Cruz como Instrumento de PurificaciÃ³n",
    month: "Marzo",
    verse: {
      text: "Pero Ã©l fue herido por nuestras rebeliones, molido por nuestros pecados; el castigo que nos trae la paz cayÃ³ sobre Ã©l, y por su llaga fuimos sanados.",
      reference: "IsaÃ­as 53:5"
    },
    reflection: "La cruz de Cristo es el instrumento supremo de purificaciÃ³n. MarÃ­a estuvo al pie de la cruz, participando del sufrimiento que redime y purifica a la humanidad.",
    prayer: "MarÃ­a, al pie de la cruz, ensÃ©Ã±ame aAceptar el sufrimiento como camino de purificaciÃ³n."
  },
  {
    day: 21,
    title: "El Camino Estrecho",
    month: "Marzo",
    verse: {
      text: "Entrad por la puerta estrecha; porque ancha es la puerta, y espacioso el camino que lleva a la perdiciÃ³n, y muchos son los que entran por ella.",
      reference: "Mateo 7:13"
    },
    reflection: "MarÃ­a eligiÃ³ el camino estrecho de la obediencia y la pureza. Su vida nos recuerda que la santidad requiere esfuerzo y perseverancia.",
    prayer: "MarÃ­a, dame la gracia de caminar por el camino estrecho que lleva a la vida eterna."
  },
  {
    day: 22,
    title: "El Agua y el EspÃ­ritu",
    month: "Marzo",
    verse: {
      text: "De cierto, de cierto te digo, que el que no nace del agua y del EspÃ­ritu, no puede entrar en el reino de Dios.",
      reference: "Juan 3:5"
    },
    reflection: "El bautismo nos purifica y nos hace hijos de Dios. MarÃ­a fue purificada por el EspÃ­ritu Santo, y nosotros somos purificados en el agua bautismal.",
    prayer: "MarÃ­a, que el agua del bautismo renueve mi compromiso de pureza cada dÃ­a."
  },
  {
    day: 23,
    title: "Perseverar en la Pureza",
    month: "Marzo",
    verse: {
      text: "Porque no nos ha dado Dios espÃ­ritu de cobardÃ­a, sino de fortaleza, de amor y de prudente dominio propio.",
      reference: "2 Timoteo 1:7"
    },
    reflection: "La pureza requiere fortaleza y dominio propio. MarÃ­a perseverÃ³ en la pureza toda su vida, por la gracia del EspÃ­ritu Santo que la fortalecÃ­a.",
    prayer: "EspÃ­ritu Santo, fortalece mi voluntad para perseverar en la pureza, como MarÃ­a lo hizo."
  },
  {
    day: 24,
    title: "La Inmaculada ConcepciÃ³n",
    month: "Marzo",
    verse: {
      text: "Toda llena de gracia, el SeÃ±or es contigo; bendita tÃº entre las mujeres.",
      reference: "Lucas 1:28"
    },
    reflection: "MarÃ­a fue llena de gracia desde su concepciÃ³n, preservada de toda mancha. Este privilegio nos recuerda que Dios puede hacer en nosotros una obra nueva.",
    prayer: "MarÃ­a Inmaculada, que tu pureza me inspire a vivir sin mancha ante Dios."
  },
  {
    day: 25,
    title: "El SÃ­ de la Pureza",
    month: "Marzo",
    verse: {
      text: "He aquÃ­ la sierva del SeÃ±or; hÃ¡gase en mÃ­ segÃºn tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "El 'fiat' de MarÃ­a fue un acto de pureza absoluta: un corazÃ³n sin reservas que se entrega completamente a Dios. En ese momento, la pureza se convirtiÃ³ en vida.",
    prayer: "MarÃ­a, ensÃ©Ã±ame a decir 'sÃ­' a Dios con la pureza de tu corazÃ³n."
  },
  {
    day: 26,
    title: "Refino de Oro",
    month: "Marzo",
    verse: {
      text: "Porque como el oro y la plata serÃ©is probados en el fuego, asÃ­ serÃ¡ probada vuestra fe.",
      reference: "1 Pedro 1:7"
    },
    reflection: "La fe se purifica en el fuego de las pruebas. MarÃ­a fue probada por el dolor y la incertidumbre, pero su fe saliÃ³ mÃ¡s brillante que el oro.",
    prayer: "MarÃ­a, que mi fe sea purificada como el oro en el fuego, para brillar ante Dios."
  },
  {
    day: 27,
    title: "Limpiando los Templos",
    month: "Marzo",
    verse: {
      text: "Y hallÃ³ en el templo a los que vendÃ­an bueyes, ovejas y palomas, y a los mesonistas sentados.",
      reference: "Mateo 21:12"
    },
    reflection: "JesÃºs purificÃ³ el templo porque era casa de oraciÃ³n. MarÃ­a es el templo mÃ¡s puro que Dios habitÃ³, y nosotros tambiÃ©n somos llamados a ser templos del EspÃ­ritu.",
    prayer: "SeÃ±or, purifica mi corazÃ³n como templo tuyo, para que sea digno de tu presencia."
  },
  {
    day: 28,
    title: "La Cuaresma como Escuela",
    month: "Marzo",
    verse: {
      text: "Examinaos, para que seÃ¡is aprobados. Si sois aprobados, serÃ©is sincereamente puros.",
      reference: "2 Corintios 13:5"
    },
    reflection: "La Cuaresma es una escuela de examen de conciencia. MarÃ­a vivÃ­a en permanente examen interior, siempre disponible para la voluntad de Dios.",
    prayer: "MarÃ­a, ayÃºdame a examinar mi conciencia con honestidad, para que mi vida sea pura."
  },
  {
    day: 29,
    title: "El Camino de la Cruz",
    month: "Marzo",
    verse: {
      text: "Si alguno quiere ir en pos de mÃ­, niÃ©guese a sÃ­ mismo, tome su cruz y sÃ­game.",
      reference: "Mateo 16:24"
    },
    reflection: "La Cruz es el camino de purificaciÃ³n que JesÃºs nos muestra. MarÃ­a siguiÃ³ a su Hijo hasta el Calvario, participando del misterio pascual.",
    prayer: "MarÃ­a, que tu ejemplo me haga seguir a Cristo en el camino de la cruz."
  },
  {
    day: 30,
    title: "La ResurrecciÃ³n y la Pureza",
    month: "Marzo",
    verse: {
      text: "Porque si hemos sido unidos a Ã©l en una semejanza de su muerte, tambiÃ©n lo seremos en una semejanza de su resurrecciÃ³n.",
      reference: "Romanos 6:5"
    },
    reflection: "La resurrecciÃ³n de Cristo nos promete una vida nueva, purificada del pecado. MarÃ­a fue la primera en contemplar al Resucitado, testigo de la victoria de la vida sobre la muerte.",
    prayer: "MarÃ­a, que la resurrecciÃ³n de tu Hijo renueve mi vida y la purifique completamente."
  },
  {
    day: 31,
    title: "Llenos de Gracia",
    month: "Marzo",
    verse: {
      text: "Mas la gracia de Dios y el don por la gracia de un solo hombre, Jesucristo, abundÃ³ para muchos.",
      reference: "Romanos 5:15"
    },
    reflection: "Al concluir este mes de purificaciÃ³n, agradecemos la gracia que sobreabunda en nosotros. MarÃ­a, llena de gracia, nos asegura que Dios siempre estÃ¡ dispuesto a renovarnos.",
    prayer: "MarÃ­a, Madre de gracia, llÃ©name de las aguas de tu Hijo, para que mi vida sea un testimonio de pureza y amor."
  }

, {
    day: 1,
    title: "El Amanecer de la Esperanza",
    month: "Abril",
    verse: {
      text: "No estÃ©is asustados; buscÃ¡is a JesÃºs, el Nazareno, que fue crucificado. Ha resucitado; no estÃ¡ aquÃ­.",
      reference: "Marcos 16:6"
    },
    reflection: "MarÃ­a Magdalena llegÃ³ al sepulcro con el corazÃ³n quebrantado, pero encontrÃ³ un Ã¡ngel que le anunciÃ³ la mÃ¡s grande noticia de la historia. La resurrecciÃ³n de JesÃºs transformÃ³ su dolor en una alegrÃ­a inefable. Hoy, MarÃ­a nos invita a buscar a Cristo resucitado en cada momento de nuestra vida.",
    prayer: "Madre mÃ­a, ensÃ©Ã±ame a buscar a tu Hijo resucitado con la misma fe y dedicaciÃ³n que tuvieron las primeras mujeres en la tumba vacÃ­a."
  },
  {
    day: 2,
    title: "MarÃ­a, Testigo de la Esperanza",
    month: "Abril",
    verse: {
      text: "Pero cuando vio a JesÃºs, se arrodillÃ³ ante Ã©l y le dijo: SeÃ±or, si tÃº hubieras estado aquÃ­, mi hermano no hubiera muerto.",
      reference: "Juan 11:32"
    },
    reflection: "MarÃ­a experimentÃ³ la pÃ©rdida mÃ¡s profunda cuando vio a su Hijo morir en la cruz. Sin embargo, su fe nunca se quebrantÃ³. Ella sabÃ­a que Dios tenÃ­a un plan perfecto, incluso en medio del sufrimiento mÃ¡s grande.",
    prayer: "MarÃ­a, madre de la esperanza, fortalece mi fe cuando el dolor parece superarme, como fortaleciÃ³ la tuya en la cruz."
  },
  {
    day: 3,
    title: "La Cruz, Ãrbol de Vida",
    month: "Abril",
    verse: {
      text: "Cristo nos redimiÃ³ de la maldiciÃ³n de la ley, haciÃ©ndose maldiciÃ³n por nosotros â€”porque estÃ¡ escrito: Maldito todo el que es colgado de un maderoâ€”.",
      reference: "GÃ¡latas 3:13"
    },
    reflection: "MarÃ­a permaneciÃ³ al pie de la cruz, testigo del sacrificio supremo de su Hijo. Lo que parecÃ­a el fin mÃ¡s cruel se convirtiÃ³ en el principio de nuestra salvaciÃ³n. El Ã¡rbol de la muerte se transformÃ³ en el Ã¡rbol de la vida eterna.",
    prayer: "SeÃ±or JesÃºs, que tu cruz sea para mÃ­ fuente de salvaciÃ³n, y que MarÃ­a me ayude a comprender el amor infinito que en ella se derramÃ³."
  },
  {
    day: 4,
    title: "El Silencio de MarÃ­a",
    month: "Abril",
    verse: {
      text: "MarÃ­a guardaba todas estas cosas, meditÃ¡ndolas en su corazÃ³n.",
      reference: "Lucas 2:19"
    },
    reflection: "En los dÃ­as mÃ¡s oscuros despuÃ©s de la crucifixiÃ³n, MarÃ­a callÃ³ y meditÃ³ en su corazÃ³n. Su silencio no era ausencia de fe, sino una profunda oraciÃ³n que sostenÃ­a su esperanza. A veces, el silencio es la oraciÃ³n mÃ¡s poderosa.",
    prayer: "MarÃ­a, que tu ejemplo de silencio orante me enseÃ±e a confiar en Dios cuando las palabras no alcancen para expresar mi dolor."
  },
  {
    day: 5,
    title: "El Pan de Vida Resucitado",
    month: "Abril",
    verse: {
      text: "Yo soy el pan de vida. El que viene a mÃ­ no tendrÃ¡ hambre, y el que cree en mÃ­ no tendrÃ¡ sed jamÃ¡s.",
      reference: "Juan 6:35"
    },
    reflection: "MarÃ­a conocÃ­a las palabras de JesÃºs sobre el pan de vida porque ella misma fue el primer tabernÃ¡culo viviente. En la EucaristÃ­a, su Hijo resucitado sigue dÃ¡ndose a nosotros como alimento para el camino. Cada comuniÃ³n es un encuentro pascual.",
    prayer: "Madre del SantÃ­simo, prepÃ¡rame para recibir a tu Hijo en la EucaristÃ­a con el mismo amor con que tÃº lo recibiste en tu seno."
  },
  {
    day: 6,
    title: "MarÃ­a y la Tumba VacÃ­a",
    month: "Abril",
    verse: {
      text: "Pero Ã©l les dijo: Â¿Por quÃ© estÃ¡is turbados, y por quÃ© suben estas dudas en vuestro corazÃ³n?",
      reference: "Lucas 24:38"
    },
    reflection: "Aunque los Evangelios no mencionan explÃ­citamente a MarÃ­a en la tumba vacÃ­a, la tradiciÃ³n nos dice que su corazÃ³n de madre buscaba desesperadamente al Hijo que le habÃ­an arrebatado. La alegrÃ­a del encuentro pascual debe haber sido indescriptible para ella.",
    prayer: "JesÃºs resucitado, que la alegrÃ­a de encontrar tu tumba vacÃ­a llene el corazÃ³n de MarÃ­a y el mÃ­o de esperanza renovada."
  },
  {
    day: 7,
    title: "La Esperanza que No Decepciona",
    month: "Abril",
    verse: {
      text: "Y la esperanza no avergÃ¼enza, porque el amor de Dios ha sido derramado en nuestros corazones por el EspÃ­ritu Santo que nos fue dado.",
      reference: "Romanos 5:5"
    },
    reflection: "MarÃ­a esperÃ³ con fe inquebrantable la resurrecciÃ³n de su Hijo, aunque las apariencias decÃ­an lo contrario. Su esperanza no fue defraudada porque estaba fundada en la fidelidad de Dios. AsÃ­ tambiÃ©n nuestra esperanza cristiana nunca se decepciona.",
    prayer: "MarÃ­a, madre de la esperanza, que tu ejemplo me enseÃ±e a esperar contra toda esperanza, confiando en las promesas de Dios."
  },
  {
    day: 8,
    title: "El EspÃ­ritu Santo y MarÃ­a",
    month: "Abril",
    verse: {
      text: "Cuando el EspÃ­ritu Santo venga sobre vosotros, recibirÃ©is poder, y serÃ©is mis testigos en JerusalÃ©n, en toda Judea y SamarÃ­a, y hasta los confines de la tierra.",
      reference: "Hechos 1:8"
    },
    reflection: "MarÃ­a fue la primera en recibir al EspÃ­ritu Santo en la AnunciaciÃ³n y la primera en recibirlo en PentecostÃ©s. Ella es modelo de la vida en el EspÃ­ritu que la resurrecciÃ³n hizo posible. El EspÃ­ritu que resucitÃ³ a JesÃºs vive en nosotros.",
    prayer: "EspÃ­ritu Santo, que descendiste sobre MarÃ­a, renueva en mÃ­ el don de la vida nueva que la resurrecciÃ³n de Cristo me ofrece."
  },
  {
    day: 9,
    title: "La Victoria sobre la Muerte",
    month: "Abril",
    verse: {
      text: "Dios es el que nos da la victoria por medio de nuestro SeÃ±or Jesucristo.",
      reference: "1 Corintios 15:57"
    },
    reflection: "MarÃ­a contemplÃ³ la derrota de la muerte cuando su Hijo resucitÃ³ glorioso. Ella que habÃ­a cargado al Redentor del mundo fue testigo de su triunfo definitivo. En Cristo resucitado, la muerte ha perdido su poder definitivamente.",
    prayer: "MarÃ­a, que viviste la victoria de la resurrecciÃ³n, intercede para que yo viva libre del temor a la muerte."
  },
  {
    day: 10,
    title: "MarÃ­a, Madre de los Vivientes",
    month: "Abril",
    verse: {
      text: "Y llamÃ³ AdÃ¡n a su mujer Eva, porque ella fue la madre de todos los vivientes.",
      reference: "GÃ©nesis 3:20"
    },
    reflection: "Como Eva fue madre de todos los vivientes segÃºn la carne, MarÃ­a es madre de todos los vivientes segÃºn el espÃ­ritu. La resurrecciÃ³n de Cristo inaugurÃ³ una nueva creaciÃ³n, y MarÃ­a es la madre de esta nueva humanidad rescatada.",
    prayer: "MarÃ­a, madre de los vivientes, regÃ­name como a hijo/amado hijo tuyo y guÃ­ame hacia la vida plena en Cristo resucitado."
  },
  {
    day: 11,
    title: "El Camino de la Cruz al Pascua",
    month: "Abril",
    verse: {
      text: "Si alguno quiere venir en pos de mÃ­, niÃ©guese a sÃ­ mismo, tome su cruz y sÃ­game.",
      reference: "Mateo 16:24"
    },
    reflection: "MarÃ­a recorriÃ³ el camino de la cruz con una fortaleza que solo la fe podÃ­a dar. Ella sabe que no hay pascua sin cruz, ni resurrecciÃ³n sin muerte. Cada sufrimiento unido a Cristo se convierte en semilla de vida eterna.",
    prayer: "Madre de la Pascua, ayÃºdame a cargar mi cruz con la misma dignidad con que tÃº acompaÃ±aste a JesÃºs en el Calvario."
  },
  {
    day: 12,
    title: "Los Corazones Ardientes",
    month: "Abril",
    verse: {
      text: "Y les dijo: Estas son las palabras que os hablÃ©, estando aÃºn con vosotros: Que era necesario que se cumpliese todo lo que de mÃ­ estÃ¡ escrito en la ley de MoisÃ©s, en los profetas y en los salmos.",
      reference: "Lucas 24:44"
    },
    reflection: "En el camino de EmaÃºs, los discÃ­pulos reconocieron a JesÃºs en la fracciÃ³n del pan. MarÃ­a, que conocÃ­a las Escrituras en su corazÃ³n, sin duda reconociÃ³ al Resucitado mucho antes. Su fe profunda le permitiÃ³ ver a Cristo donde otros solo veÃ­an un sepulcro vacÃ­o.",
    prayer: "JesÃºs, que mis ojos se abran como los de MarÃ­a para reconocerte en las Escrituras y en la EucaristÃ­a."
  },
  {
    day: 13,
    title: "La Obediencia de MarÃ­a",
    month: "Abril",
    verse: {
      text: "He aquÃ­ la esclava del SeÃ±or; hÃ¡gase en mÃ­ segÃºn tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "La misma MarÃ­a que dijo 'sÃ­' al Ãngel en la AnunciaciÃ³n, dijo 'sÃ­' al plan de Dios en la cruz. Su obediencia no cesÃ³ cuando el sufrimiento llegÃ³, sino que se profundizÃ³. La obediencia de MarÃ­a nos enseÃ±a que el 'sÃ­' a Dios es para siempre.",
    prayer: "MarÃ­a, ensÃ©Ã±ame a decir 'sÃ­' a Dios con la misma generosidad con que tÃº lo hiciste en cada etapa de tu vida."
  },
  {
    day: 14,
    title: "MarÃ­a y los ApÃ³stoles",
    month: "Abril",
    verse: {
      text: "Todos estos perseveraban unÃ¡nimes en oraciÃ³n, junto con MarÃ­a, la madre de JesÃºs, y con los hermanos de Ã©l.",
      reference: "Hechos 1:14"
    },
    reflection: "DespuÃ©s de la ascensiÃ³n, MarÃ­a se quedÃ³ con los apÃ³stoles preparÃ¡ndose para la venida del EspÃ­ritu Santo. Ella era el vÃ­nculo vivo entre JesÃºs y la Iglesia naciente. Su presencia daba fuerza y consuelo a los primeros cristianos.",
    prayer: "MarÃ­a, que estuviste con los apÃ³stoles en PentecostÃ©s, estate conmigo siempre y fortalece mi vida de oraciÃ³n."
  },
  {
    day: 15,
    title: "La AlegrÃ­a Pascual",
    month: "Abril",
    verse: {
      text: "Os he dicho estas cosas para que mi alegrÃ­a estÃ© en vosotros, y vuestra alegrÃ­a sea completa.",
      reference: "Juan 15:11"
    },
    reflection: "MarÃ­a experimentÃ³ la alegrÃ­a mÃ¡s plena cuando vio a su Hijo resucitado. Esa alegrÃ­a pascual no era una emociÃ³n pasajera, sino el fruto de haber confiado en Dios hasta el final. La alegrÃ­a de la resurrecciÃ³n es el don mÃ¡s hermoso que Cristo nos deja.",
    prayer: "MarÃ­a, llÃ©name de la alegrÃ­a pascual que tÃº experimentaste, para que mi vida sea testimonio de la resurrecciÃ³n."
  },
  {
    day: 16,
    title: "El Cuerpo Glorificado",
    month: "Abril",
    verse: {
      text: "Es sembrado un cuerpo corruptible, se levantarÃ¡ en incorrupciÃ³n; es sembrado en deshonoria, se levantarÃ¡ en gloria; es sembrado en flaqueza, se levantarÃ¡ en potencia.",
      reference: "1 Corintios 15:42-43"
    },
    reflection: "El cuerpo glorificado de JesÃºs tras la resurrecciÃ³n era real pero transformado. MarÃ­a fue la primera en contemplar este misterio cuando su Hijo se le apareciÃ³. El cuerpo humano tiene un destino glorioso que trasciende la muerte.",
    prayer: "SeÃ±or, que la esperanza de la resurrecciÃ³n transforme mi visiÃ³n del cuerpo y me ayude a venerar el templo del EspÃ­ritu."
  },
  {
    day: 17,
    title: "MarÃ­a en PentecostÃ©s",
    month: "Abril",
    verse: {
      text: "Y se les aparecieron lenguas repartidas, como de fuego, que se posaron sobre cada uno de ellos.",
      reference: "Hechos 2:3"
    },
    reflection: "MarÃ­a recibiÃ³ al EspÃ­ritu Santo en PentecostÃ©s con la misma fe con que lo habÃ­a recibido en la AnunciaciÃ³n. El fuego del EspÃ­ritu renovÃ³ su misiÃ³n de Madre de la Iglesia. La resurrecciÃ³n y PentecostÃ©s son dos momentos de una misma obra salvadora.",
    prayer: "EspÃ­ritu Santo, que descendiste sobre MarÃ­a, enciende en mi corazÃ³n el fuego de tu amor y de tu sabidurÃ­a."
  },
  {
    day: 18,
    title: "El PerdÃ³n de la ResurrecciÃ³n",
    month: "Abril",
    verse: {
      text: "AsÃ­ estÃ¡ escrito, y asÃ­ era necesario que el Cristo padeciera y resucitase de los muertos el tercer dÃ­a, y que se predicase en su nombre el arrepentimiento y el perdÃ³n de los pecados.",
      reference: "Lucas 24:46-47"
    },
    reflection: "La resurrecciÃ³n de JesÃºs trae consigo el don del perdÃ³n. MarÃ­a, que vio derramar la sangre de su Hijo por los pecados del mundo, conoce el poder infinito de la misericordia. Cada perdÃ³n recibido es una pequeÃ±a resurrecciÃ³n en nuestra vida.",
    prayer: "MarÃ­a, madre de la misericordia, obtÃ©n para mÃ­ el perdÃ³n de mis pecados y la gracia de perdonar a quienes me ofenden."
  },
  {
    day: 19,
    title: "La Vida Nueva en Cristo",
    month: "Abril",
    verse: {
      text: "De modo que si alguno estÃ¡ en Cristo, es una nueva creaciÃ³n; lo viejo pasÃ³; mira, todo es nuevo.",
      reference: "2 Corintios 5:17"
    },
    reflection: "La resurrecciÃ³n de Cristo inaugurÃ³ una nueva creaciÃ³n. MarÃ­a, como nueva Eva, fue la primera en experimentar los frutos de esta vida renovada. Cada dÃ­a es una oportunidad para comenzar de nuevo en Cristo resucitado.",
    prayer: "MarÃ­a, que fuiste testigo de la nueva creaciÃ³n, ayÃºdame a dejar atrÃ¡s lo viejo y caminar en la novedad de vida."
  },
  {
    day: 20,
    title: "MarÃ­a, Estrella de la MaÃ±ana",
    month: "Abril",
    verse: {
      text: "Yo soy la raÃ­z y el linaje de David, la estrella resplandeciente de la maÃ±ana.",
      reference: "Apocalipsis 22:16"
    },
    reflection: "Como la estrella de la maÃ±ana anuncia el amanecer, MarÃ­a anuncia la resurrecciÃ³n de Cristo. Ella fue la primera en creer y la primera en contemplar al Sol de Justicia resucitado. Su fe es un faro que guÃ­a a la humanidad hacia la luz de Pascua.",
    prayer: "Estrella de la maÃ±ana, MarÃ­a, guÃ­a mis pasos hacia Cristo resucitado, que es la luz verdadera del mundo."
  },
  {
    day: 21,
    title: "La Paz del Resucitado",
    month: "Abril",
    verse: {
      text: "La paz os dejo; mi paz os doy; no la doy como la da el mundo. No se turbe vuestro corazÃ³n, ni se atemorice.",
      reference: "Juan 14:27"
    },
    reflection: "JesÃºs resucitado ofreciÃ³ su paz a los discÃ­pulos, y esa misma paz llegÃ³ a MarÃ­a. La paz de Cristo no depende de las circunstancias sino de su presencia victoriosa. MarÃ­a vive en esa paz plena que la resurrecciÃ³n garantiza.",
    prayer: "MarÃ­a, que vives en la paz del Resucitado, transmÃ­teme esa paz que ningÃºn mundo puede dar ni quitar."
  },
  {
    day: 22,
    title: "La Esperanza de la Gloria",
    month: "Abril",
    verse: {
      text: "Y si los esperamos, con paciencia la esperamos.",
      reference: "Romanos 8:25"
    },
    reflection: "MarÃ­a esperÃ³ la resurrecciÃ³n con una paciencia que solo la fe puede dar. Su esperanza no era pasiva sino activa, sostenida por la oraciÃ³n y la confianza en Dios. La resurrecciÃ³n de Cristo es la garantÃ­a de nuestra propia esperanza de gloria.",
    prayer: "MarÃ­a, que esperaste la resurrecciÃ³n con fe inquebrantable, fortalece mi esperanza en las promesas de Dios."
  },
  {
    day: 23,
    title: "MarÃ­a y la Nueva Alianza",
    month: "Abril",
    verse: {
      text: "Porque este es mi sangre de la nueva alianza, que es derramada por muchos para el perdÃ³n de los pecados.",
      reference: "Mateo 26:28"
    },
    reflection: "En la cruz, JesÃºs sellÃ³ la nueva alianza con su sangre, y MarÃ­a fue testigo de ese momento decisivo. Ella, que habÃ­a sido la primera tabernÃ¡culo de la antigua alianza, ahora contemplaba la inauguraciÃ³n de la alianza definitiva. La resurrecciÃ³n sellÃ³ esta alianza con el sello de la vida eterna.",
    prayer: "MarÃ­a, madre de la nueva alianza, ayÃºdame a vivir fielmente los compromisos bautismales que la sangre de Cristo me ha regalado."
  },
  {
    day: 24,
    title: "El Pan de la ResurrecciÃ³n",
    month: "Abril",
    verse: {
      text: "Tomad, comed; esto es mi cuerpo.",
      reference: "Mateo 26:26"
    },
    reflection: "MarÃ­a conocÃ­a el significado del pan mejor que nadie, pues su Hijo era el pan vivo bajado del cielo. En la EucaristÃ­a, el pan de la resurrecciÃ³n se hace presente en cada celebraciÃ³n. Cada misa es una pequeÃ±o Pascua que nos anticipa el banquete celestial.",
    prayer: "MarÃ­a, que viviste la EucaristÃ­a en su origen, prepÃ¡rame para recibir a tu Hijo con la reverencia que merece."
  },
  {
    day: 25,
    title: "La Victoria del Amor",
    month: "Abril",
    verse: {
      text: "El amor es fuerte como la muerte; las aguas frÃ­as no pueden apagar el amor, ni lo pueden inundar los rÃ­os.",
      reference: "Cantar de los Cantares 8:6"
    },
    reflection: "El amor de MarÃ­a por JesÃºs fue mÃ¡s fuerte que la muerte, y el amor de JesÃºs por la humanidad triunfÃ³ sobre el sepulcro. La resurrecciÃ³n es la victoria definitiva del amor sobre la muerte. El amor de una madre y el amor del Redentor se encontraron en la cruz y en la tumba vacÃ­a.",
    prayer: "MarÃ­a, que tu amor por JesÃºs fue mÃ¡s fuerte que la muerte, enciende en mi corazÃ³n un amor que trascienda toda prueba."
  },
  {
    day: 26,
    title: "MarÃ­a, Modelo de Fe Resucitada",
    month: "Abril",
    verse: {
      text: "Porque andamos por fe, no por vista.",
      reference: "2 Corintios 5:7"
    },
    reflection: "MarÃ­a caminÃ³ por fe cuando vio a su Hijo morir en la cruz, y caminÃ³ por fe cuando creyÃ³ en su resurrecciÃ³n. Su fe no necesitÃ³ ver para creer, sino que creyÃ³ para ver. MarÃ­a es el modelo supremo de la fe cristiana en la resurrecciÃ³n.",
    prayer: "MarÃ­a, que creÃ­ste sin ver, fortalece mi fe para que camine por las promesas de Dios y no por las apariencias del mundo."
  },
  {
    day: 27,
    title: "La ResurrecciÃ³n y la Familia",
    month: "Abril",
    verse: {
      text: "Porque tambiÃ©n el Hijo del Hombre vino a salvar lo que se habÃ­a perdido.",
      reference: "Mateo 18:11"
    },
    reflection: "La resurrecciÃ³n de JesÃºs tiene un impacto profundo en la familia humana. MarÃ­a, como madre de la familia humana redimida, intercede por todas las familias del mundo. El hogar de Nazaret fue el primer templo de la resurrecciÃ³n, donde la fe se vivÃ­a cotidianamente.",
    prayer: "MarÃ­a, madre de la familia humana, bendice las familias del mundo y haz que la esperanza de la resurrecciÃ³n las una en el amor."
  },
  {
    day: 28,
    title: "El Gozo de MarÃ­a",
    month: "Abril",
    verse: {
      text: "AlÃ©grate, llena de gracia, el SeÃ±or es contigo; bendita tÃº eres entre todas las mujeres.",
      reference: "Lucas 1:28"
    },
    reflection: "El saludo del Ã¡ngel a MarÃ­a contenÃ­a una alegrÃ­a que se cumplirÃ­a plenamente en la resurrecciÃ³n. MarÃ­a, llena de gracia, fue la primera en experimentar el gozo de la salvaciÃ³n. Su alegrÃ­a no era por ella sola, sino por toda la humanidad redimida.",
    prayer: "MarÃ­a, llena de gracia, que tu gozo se derrame en mi corazÃ³n como derramaste el don de la vida en el mundo."
  },
  {
    day: 29,
    title: "La Promesa Eterna",
    month: "Abril",
    verse: {
      text: "Porque de tal manera amÃ³ Dios al mundo, que dio a su Hijo unigÃ©nito, para que todo aquel que en Ã©l cree no se pierda, sino que tenga vida eterna.",
      reference: "Juan 3:16"
    },
    reflection: "MarÃ­a recibiÃ³ en su seno al Hijo Ãºnico del Padre, y ahora comparte con todos los fieles la vida eterna que Ã©l prometiÃ³. La resurrecciÃ³n es la garantÃ­a de que la vida eterna es real y accesible para todos. MarÃ­a nos guÃ­a por el camino que lleva a la vida sin fin.",
    prayer: "MarÃ­a, que custodias la promesa de la vida eterra, guÃ­ame fielmente hasta el dÃ­a en que contemple a tu Hijo cara a cara."
  },
  {
    day: 30,
    title: "MarÃ­a, Puerta del Cielo",
    month: "Abril",
    verse: {
      text: "Yo soy la puerta; si alguno entra por mÃ­, serÃ¡ salvo, y entrarÃ¡ y saldrÃ¡, y hallarÃ¡ pastos.",
      reference: "Juan 10:9"
    },
    reflection: "MarÃ­a es la puerta por la que entrÃ³ el Salvador al mundo, y es tambiÃ©n la puerta por la que nosotros entramos en la vida de la resurrecciÃ³n. Ella nos presenta ante su Hijo y nos guÃ­a con maternal cuidado. En este Ãºltimo dÃ­a de abril, renovamos nuestra consagraciÃ³n a ella que nos lleva a Cristo.",
    prayer: "MarÃ­a, puerta del cielo, que la gracia de la resurrecciÃ³n me acompaÃ±e siempre y me conduzca a la vida eterna junto a tu Hijo. AmÃ©n."
  }

,   {
    day: 1,
    title: "María, Reina de Mayo",
    month: "Mayo",
    verse: { text: "Y apareció en el cielo una gran señal: una mujer vestida de sol, con la luna bajo sus pies, y una corona de doce estrellas en su cabeza.", reference: "Apocalipsis 12:1" },
    reflection: "Mayo es el mes dedicado a María Reina. Ella lleva una corona de estrellas porque fue exaltada sobre todas las criaturas. Su reinado no es de poder worldly, sino de amor y de servicio.",
    prayer: "María, Reina de los cielos y de la tierra, reina en mi corazón y gobierna mi vida con tu amor maternal."
  },
  {
    day: 2,
    title: "La Reina que Sirve",
    month: "Mayo",
    verse: { text: "El Hijo del Hombre no vino a ser servido, sino a servir y a dar su vida en rescate por muchos.", reference: "Marcos 10:45" },
    reflection: "María es Reina porque sirve. Su reinado se ejerce en el amor y en la entrega. Como Jesús, ella vino a servir, no a ser servida.",
    prayer: "María, reina servicial, enséñame a reinar sirviendo, a ser grande siendo humilde."
  },
  {
    day: 3,
    title: "La Coronación de María",
    month: "Mayo",
    verse: { text: "Porque ha mirado la humildad de su sierva, y desde ahora me llamarán bienaventurada todas las generaciones.", reference: "Lucas 1:48" },
    reflection: "Dios coronó a María como Reina porque su humildad la hizo digna de la gloria. La corona de María es el fruto de una vida entera de obediencia y amor.",
    prayer: "María, coronada de gloria, intercede por nosotros para que un día también participemos de la corona de vida eterna."
  },
  {
    day: 4,
    title: "María, Reina de los Ángeles",
    month: "Mayo",
    verse: { text: "Y se oyeron voces y cantos y truenos de la gran multitud de ángeles.", reference: "Apocalipsis 5:11" },
    reflection: "María es Reina de los ángeles porque fue la criatura más excelsa que Dios creó. Los ángeles la sirven y la adoran como Madre del Rey de reyes.",
    prayer: "Reina de los ángeles, pide a los ángeles guardianes que nos protejan y nos guíen cada día."
  },
  {
    day: 5,
    title: "María, Reina de los Patriarcas",
    month: "Mayo",
    verse: { text: "Y de Jacob nació José, esposo de María, de la cual nació Jesús, que es llamado Cristo.", reference: "Mateo 1:16" },
    reflection: "María es Reina de los patriarcas porque fue la culminación de la historia de salvación del Antiguo Testamento. En ella se cumplieron todas las promesas.",
    prayer: "María, que en ti se cumplen las promesas de Dios, ayúdanos a confiar en su fidelidad."
  },
  {
    day: 6,
    title: "María, Reina de los Profetas",
    month: "Mayo",
    verse: { text: "Porque yo sé los planes que tengo para vosotros, dice el Señor, planes de bienestar y no de mal.", reference: "Jeremías 29:11" },
    reflection: "Los profetas anunciaron la venida del Mesías, y María fue la que lo recibió en su seno. Ella es Reina de los profetas porque en su cuerpo se hizo realidad lo que ellos anunciaron.",
    prayer: "María, reina de los profetas, que las palabras de los profetas se cumplan en mi vida."
  },
  {
    day: 7,
    title: "María, Reina de los Mártires",
    month: "Mayo",
    verse: { text: "No temáis a los que matan el cuerpo, pero no pueden matar el alma.", reference: "Mateo 10:28" },
    reflection: "María es Reina de los mártires porque sufrió el martirio del alma al pie de la cruz. Ella vio morir a su Hijo y permaneció fiel.",
    prayer: "María, reina de los mártires, fortalece a los que sufren por la fe y dan su vida por Cristo."
  },
  {
    day: 8,
    title: "María, Reina de los Confesores",
    month: "Mayo",
    verse: { text: "Dad testimonio con sabiduría ante los gentiles.", reference: "Colosenses 4:5" },
    reflection: "María es Reina de los confesores porque confessó la fe ante el mundo con su vida y su ejemplo. Ella nunca tuvo miedo de declarar que era sierva del Señor.",
    prayer: "María, reina de los confesores, fortalece mi testimonio de fe ante el mundo."
  },
  {
    day: 9,
    title: "María, Reina de las Vírgenes",
    month: "Mayo",
    verse: { text: "He aquí la sierva del Señor; hágase en mí según tu palabra.", reference: "Lucas 1:38" },
    reflection: "María es Reina de las vírgenes porque conservó su virginidad con un amor más fuerte que la carne. Su pureza fue un don que ofreció a Dios.",
    prayer: "María, reina de las vírgenes, guarda mi pureza y mi fidelidad a Dios."
  },
  {
    day: 10,
    title: "María, Reina de las Madres",
    month: "Mayo",
    verse: { text: "Y Jesús crecía en sabiduría, en estatura y en gracia ante Dios y ante los hombres.", reference: "Lucas 2:52" },
    reflection: "María es Reina de las madres porque educó a Jesús con amor perfecto. Cada madre puede encontrar en ella el modelo de maternidad más alto.",
    prayer: "María, reina de las madres, bendice a todas las madres del mundo y guíalas en la educación de sus hijos."
  },
  {
    day: 11,
    title: "María, Reina de la Familia",
    month: "Mayo",
    verse: { text: "En vuestra casa no se apagará la lámpara ni se secará la mecha del candelero.", reference: "2 Reyes 4:33" },
    reflection: "María es Reina de la familia porque formó la Sagrada Familia de Nazaret. Ella nos enseña que la familia es el sanctuario donde se aprende a amar.",
    prayer: "Santa Familia de Nazaret, María, José y Jesús, reina en cada familia del mundo."
  },
  {
    day: 12,
    title: "María, Reina de la Paz",
    month: "Mayo",
    verse: { text: "La paz os dejo; mi paz os doy; no la doy como la da el mundo.", reference: "Juan 14:27" },
    reflection: "María es Reina de la paz porque su presencia trae la paz del corazón. Ella estuvo presente en Pentecostés, donde el Espíritu Santo trajo la paz.",
    prayer: "María, reina de la paz, trae la paz a mi corazón, a mi familia y a todo el mundo."
  },
  {
    day: 13,
    title: "María, Reina de la Misericordia",
    month: "Mayo",
    verse: { text: "Fez misericordia con los que le temen, de generación en generación.", reference: "Lucas 1:50" },
    reflection: "María es Reina de la misericordia porque su corazón maternal se compadece de todos los que sufren. Ella es la madre que nunca cierra su corazón.",
    prayer: "María, reina de la misericordia, abre tu corazón maternal a todas las necesidades del mundo."
  },
  {
    day: 14,
    title: "María, Reina de los Apóstoles",
    month: "Mayo",
    verse: { text: "Todos estos perseveraban unánimes en oración, junto con María, la madre de Jesús.", reference: "Hechos 1:14" },
    reflection: "María es Reina de los apóstoles porque estuvo con ellos en el Cenáculo esperando el Espíritu Santo. Ella formó a los primeros misioneros.",
    prayer: "María, reina de los apóstoles, intercede por todos los misioneros de la Iglesia."
  },
  {
    day: 15,
    title: "María, Reina de los Doctores",
    month: "Mayo",
    verse: { text: "Porque el Espíritu Santo os enseñará todo, y os recordará todo lo que yo os he dicho.", reference: "Juan 14:26" },
    reflection: "María es Reina de los doctores porque meditaba la Palabra de Dios en su corazón y la custodiaba con amor. Ella es maestra de fe.",
    prayer: "María, reina de los doctores, ilumina la mente de los teólogos y de todos los que estudian la fe."
  },
  {
    day: 16,
    title: "María, Reina de los Santos",
    month: "Mayo",
    verse: { text: "Así que nosotros, rodeados de tan grande nube de testigos, despojémonos de todo peso.", reference: "Hebreos 12:1" },
    reflection: "María es Reina de los santos porque fue la más santa de todos los seres humanos. Ella es el modelo supremo de santidad.",
    prayer: "María, reina de los santos, intercede por nosotros para que un día seamos dignos de la compañía de los santos."
  },
  {
    day: 17,
    title: "María, Reina de los Pobres",
    month: "Mayo",
    verse: { text: "Bienaventurados los pobres de espíritu, porque de ellos es el reino de los cielos.", reference: "Mateo 5:3" },
    reflection: "María es Reina de los pobres porque ella misma fue pobre en la tierra. Ella comprende el sufrimiento de los necesitados.",
    prayer: "María, reina de los pobres, cuida de todos los que sufren la pobreza material y espiritual."
  },
  {
    day: 18,
    title: "María, Reina de los Enfermos",
    month: "Mayo",
    verse: { text: "Él mismo cargó con nuestras enfermedades y sufrió nuestros dolores.", reference: "Isaías 53:4" },
    reflection: "María es Reina de los enfermos porque acompañó a Jesús en su pasión y conoce el sufrimiento del cuerpo.",
    prayer: "María, reina de los enfermos, sana a todos los que sufren y dales la fuerza para llevar su cruz."
  },
  {
    day: 19,
    title: "María, Reina de los Pecadores",
    month: "Mayo",
    verse: { text: "No he venido a llamar a los justos, sino a los pecadores al arrepentimiento.", reference: "Marcos 2:17" },
    reflection: "María es Reina de los pecadores porque ella es la madre de la misericordia que nunca abandona a los que han caído.",
    prayer: "María, reina de los pecadores, intercede por todos los que han perdido el camino de Dios."
  },
  {
    day: 20,
    title: "María, Reina de Todos",
    month: "Mayo",
    verse: { text: "Dios la exaltó a la derecha, y le dio un nombre que es sobre todo nombre.", reference: "Filipenses 2:9" },
    reflection: "María es Reina de todas las cosas porque Dios la exaltó sobre toda criatura. Su reinado abarca el cielo y la tierra.",
    prayer: "María, reina de todas las cosas, que tu reinado se extienda a todos los corazones."
  },
  {
    day: 21,
    title: "La Reina del Rosario",
    month: "Mayo",
    verse: { text: "Y en su casa no se apagará la lámpara.", reference: "2 Reyes 4:33" },
    reflection: "María es Reina del Rosario porque esta oración es su cetro de amor. En cada misterio ella reina sobre nosotros guiándonos hacia Jesús.",
    prayer: "María, reina del Rosario, enséñanos a valorar esta oración tan poderosa."
  },
  {
    day: 22,
    title: "La Reina y el Sagrado Corazón",
    month: "Mayo",
    verse: { text: "Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré.", reference: "Mateo 11:28" },
    reflection: "María reina junto al Sagrado Corazón de Jesús. Ella es el trono vivo donde se asienta el amor divino.",
    prayer: "Sagrados Corazones de Jesús y María, que vuestro amor reine en nuestros corazones."
  },
  {
    day: 23,
    title: "La Reina de la Evangelización",
    month: "Mayo",
    verse: { text: "Id por todo el mundo y haced discípulos a todas las naciones.", reference: "Mateo 28:19" },
    reflection: "María es Reina de la evangelización porque fue la primera en llevar a Jesús al mundo. Ella nos acompaña en la misión de evangelizar.",
    prayer: "María, reina de la evangelización, ilumina la labor misionera de la Iglesia."
  },
  {
    day: 24,
    title: "María Reina y la Justicia",
    month: "Mayo",
    verse: { text: "Desplegará con fuerza su brazo, y dispersará a los soberbios en los pensamientos de sus corazones.", reference: "Lucas 1:51" },
    reflection: "El reinado de María trae justicia al mundo porque ella exalta a los humildes y derriba a los poderosos.",
    prayer: "María, reina de la justicia, que tu reinado traiga equidad y dignidad a todos los pueblos."
  },
  {
    day: 25,
    title: "La Reina de la Gracia",
    month: "Mayo",
    verse: { text: "Toda llena de gracia, el Señor es contigo.", reference: "Lucas 1:28" },
    reflection: "María es Reina de la gracia porque toda la gracia de Dios pasa por sus manos. Ella distribuye las gracias del cielo con generosidad maternal.",
    prayer: "María, reina de la gracia, derrama sobre nosotros las gracias que necesitamos."
  },
  {
    day: 26,
    title: "María Reina y la Oración",
    month: "Mayo",
    verse: { text: "Permaneced en mí, como yo permanezco en vosotros.", reference: "Juan 15:4" },
    reflection: "María reina desde la oración. Su trono es el corazón que dialoga con Dios. Ella nos enseña que la verdadera realeza se ejerce desde la contemplación.",
    prayer: "María, reina de la oración, enséñame a permanecer en Jesús como Tú permaneces en Él."
  },
  {
    day: 27,
    title: "La Reina de la Humildad",
    month: "Mayo",
    verse: { text: "Quien se humilla será exaltado.", reference: "Mateo 23:12" },
    reflection: "María es Reina porque fue la más humilde. Su exaltación fue el fruto de su humildad profunda.",
    prayer: "María, reina de la humildad, enséñame a ser humilde para que Dios me exalte."
  },
  {
    day: 28,
    title: "María Reina y la Esperanza",
    month: "Mayo",
    verse: { text: "Los que esperan en el Señor renovarán sus fuerzas.", reference: "Isaías 40:31" },
    reflection: "María es Reina de la esperanza porque nunca perdió la confianza en Dios. Su reinado nos asegura que siempre hay esperanza.",
    prayer: "María, reina de la esperanza, fortalece mi esperanza y la de todos los que sufren."
  },
  {
    day: 29,
    title: "La Reina del Cielo",
    month: "Mayo",
    verse: { text: "En la casa de mi Padre hay muchas moradas; si no fuera así, os lo habría dicho.", reference: "Juan 14:2" },
    reflection: "María es Reina del Cielo porque fue asunta en cuerpo y alma a la gloria celestial. Desde allí ella reina y nos prepara un lugar.",
    prayer: "María, reina del cielo, prepara para nosotros la morada eterna junto a tu Hijo."
  },
  {
    day: 30,
    title: "María Reina y el Reino",
    month: "Mayo",
    verse: { text: "Venga tu reino, hágase tu voluntad así en la tierra como en el cielo.", reference: "Mateo 6:10" },
    reflection: "María es la primera en experimentar el Reino de Dios porque en ella ya se cumplió la voluntad divina.",
    prayer: "María, reina del Reino, que el reino de Dios se extienda por toda la tierra."
  },
  {
    day: 31,
    title: "María, Reina por los Siglos",
    month: "Mayo",
    verse: { text: "Su dominio es un dominio eterno, que no pasará, y su reino no será destruido.", reference: "Daniel 7:14" },
    reflection: "Al concluir el mes de mayo, celebramos que el reinado de María es eterno. Ella reinará por los siglos de los siglos junto a su Hijo.",
    prayer: "María, reina por los siglos, que tu reinado eterno nos dé la certeza de la salvación."
  }

,   {
    day: 1,
    title: "El Sagrado Corazón de Jesús",
    month: "Junio",
    verse: { text: "El que come mi carne y bebe mi sangre tiene vida eterna, y yo lo resucitaré en el último día.", reference: "Juan 6:54" },
    reflection: "Junio comienza con la devoción al Sagrado Corazón de Jesús, que es el centro de todo amor divino. María fue el primer tabernáculo de ese Corazón sagrado.",
    prayer: "Sagrado Corazón de Jesús, que en María encontraste el primer templo de tu amor, accepta nuestro corazón como ofrenda."
  },
  {
    day: 2,
    title: "El Corazón Inmaculado de María",
    month: "Junio",
    verse: { text: "Y a ti misma una espada te atravesará el alma.", reference: "Lucas 2:35" },
    reflection: "El Corazón Inmaculado de María es el templo donde habitó el Verbo de Dios. Su corazón fue traspasado por el dolor, pero nunca perdió su pureza.",
    prayer: "Corazón Inmaculado de María, templo viviente del Verbo, que tu pureza nos inspire a cuidar nuestro corazón."
  },
  {
    day: 3,
    title: "Dos Corazones, Un Solo Amor",
    month: "Junio",
    verse: { text: "Permaneced en mí, como yo permanezco en vosotros.", reference: "Juan 15:4" },
    reflection: "Los Sagrados Corazones de Jesús y María laten al unísono por amor a la humanidad. Su unión es el modelo de todo amor verdadero.",
    prayer: "Sagrados Corazones de Jesús y María, unid nuestros corazones al vuestro para que vivamos en amor perfecto."
  },
  {
    day: 4,
    title: "El Corazón que Late por Amor",
    month: "Junio",
    verse: { text: "Porque tanto amó Dios el mundo que dio a su Hijo unigénito.", reference: "Juan 3:16" },
    reflection: "El Corazón de Jesús late con un amor infinito por cada persona humana. María comprendió este amor como nadie.",
    prayer: "Sagrado Corazón de Jesús, que tu amor latiente transforme mi corazón y me haga capaz de amar como Tú amas."
  },
  {
    day: 5,
    title: "La Devoción al Corazón de Jesús",
    month: "Junio",
    verse: { text: "Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré.", reference: "Mateo 11:28" },
    reflection: "La devoción al Sagrado Corazón nos recuerda que Jesús nos ama con un amor personal y constante. María fue la primera en experimentar este amor.",
    prayer: "Sagrado Corazón de Jesús, que tu amor sea mi descanso y mi fortaleza cada día."
  },
  {
    day: 6,
    title: "El Corazón Traspasado de María",
    month: "Junio",
    verse: { text: "He aquí tu madre.", reference: "Juan 19:27" },
    reflection: "El Corazón de María fue traspasado por una espada de dolor al pie de la cruz. Sin embargo, ese corazón herido se convirtió en fuente de gracia.",
    prayer: "María, con el corazón traspasado, intercede por todos los que sufren y por todos los que han perdido la paz."
  },
  {
    day: 7,
    title: "El Corazón Eucarístico",
    month: "Junio",
    verse: { text: "Tomad, comed; esto es mi cuerpo.", reference: "Mateo 26:26" },
    reflection: "El Sagrado Corazón de Jesús se hace presente en la Eucaristía para alimentarnos y fortalecernos. María nos enseña a recibir a Cristo con reverencia.",
    prayer: "Jesús Eucaristizado, que tu Corazón nos reciba en cada comunión con amor de Padre."
  },
  {
    day: 8,
    title: "Los Dos Corazones en la Cruz",
    month: "Junio",
    verse: { text: "Junto a la cruz de Jesús estaba su madre.", reference: "Juan 19:25" },
    reflection: "En la cruz, los dos Corazones se encontraron en el amor supremo. Jesús y María ofrecieron juntos la redención del mundo.",
    prayer: "Sagrados Corazones de Jesús y María, que el sacrificio de la cruz nos recuerde el amor que no tiene límites."
  },
  {
    day: 9,
    title: "El Corazón de María, Refugio",
    month: "Junio",
    verse: { text: "Bajo sus alas encontrarás refugio.", reference: "Salmo 91:4" },
    reflection: "El Corazón de María es refugio seguro para los pecadores. Ella nunca cierra su corazón a quienes buscan perdón y consuelo.",
    prayer: "María, tu Corazón es mi refugio, acógeme cuando el mundo me persiga."
  },
  {
    day: 10,
    title: "El Corazón de Jesús, Rey",
    month: "Junio",
    verse: { text: "El Hijo del Hombre no vino a ser servido, sino a servir.", reference: "Marcos 10:45" },
    reflection: "Jesús es Rey porque su Corazón es puro y generoso. Su reinado es de amor y de servicio. María reconoció este reinado en la Anunciación.",
    prayer: "Sagrado Corazón de Jesús, Rey de reyes, reina en mi corazón y gobierna mi vida."
  },
  {
    day: 11,
    title: "La Fiesta del Sagrado Corazón",
    month: "Junio",
    verse: { text: "El amor es paciente, es bondadoso; no es envidioso ni vanidoso ni soberbio.", reference: "1 Corintios 13:4" },
    reflection: "Hoy celebramos la fiesta del Sagrado Corazón, que es la fiesta del amor de Dios por los hombres. María nos enseña a corresponder a este amor.",
    prayer: "Sagrado Corazón de Jesús, en tu fiesta te ofrecemos nuestro amor imperfecto para que lo transformes con tu gracia."
  },
  {
    day: 12,
    title: "La Consagración al Corazón",
    month: "Junio",
    verse: { text: "No os conforméis al mundo actual, sino transformen su mente.", reference: "Romanos 12:2" },
    reflection: "La consagración al Sagrado Corazón es entregarle nuestra vida para que Él la transforme. María fue la primera consagrada al Corazón de Jesús.",
    prayer: "Sagrado Corazón de Jesús, te consagro mi vida y todo lo que soy para que seas Tú quien viva en mí."
  },
  {
    day: 13,
    title: "El Corazón y la Oración",
    month: "Junio",
    verse: { text: "La oración constante del justo puede mucho en su eficacia.", reference: "Santiago 5:16" },
    reflection: "La oración es el lenguaje del corazón que habla con Dios. María oraba constantemente con su corazón puro.",
    prayer: "Sagrado Corazón de Jesús, enséñame a orar con el corazón, como María lo hacía."
  },
  {
    day: 14,
    title: "El Corazón y la Eucaristía",
    month: "Junio",
    verse: { text: "El que come mi carne y bebe mi sangre tiene vida eterna.", reference: "Juan 6:54" },
    reflection: "En la Eucaristía, el Corazón de Jesús se entrega completamente a nosotros. María, que fue el primer tabernáculo, nos enseña a adorar este misterio.",
    prayer: "Jesús Eucaristizado, que cada comunión sea un encuentro de amor entre tu Corazón y el mío."
  },
  {
    day: 15,
    title: "El Corazón de María, Mediadora",
    month: "Junio",
    verse: { text: "No hay mejor intercesora que una madre ante su hijo.", reference: "Reflexión mariana" },
    reflection: "El Corazón de María media ante el Corazón de Jesús por nosotros. Ella es la puente de amor que une al Cielo con la tierra.",
    prayer: "María, Corazón mediador, presenta nuestras súplicas ante tu Hijo."
  },
  {
    day: 16,
    title: "El Corazón de Jesús y la Misericordia",
    month: "Junio",
    verse: { text: "Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia.", reference: "Mateo 5:7" },
    reflection: "El Sagrado Corazón de Jesús es fuente de misericordia infinita. María, que vivió esta misericordia, nos invita a ser misericordiosos.",
    prayer: "Sagrado Corazón de Jesús, que tu misericordia nos perdone y nos haga instrumentos de tu amor."
  },
  {
    day: 17,
    title: "Los Dos Corazones y los Pecadores",
    month: "Junio",
    verse: { text: "No he venido a llamar a los justos, sino a los pecadores al arrepentimiento.", reference: "Marcos 2:17" },
    reflection: "Los Corazones de Jesús y María laten con más fuerza por los pecadores que se alejan de Dios. Ellos nunca se cansan de buscar al hijo pródigo.",
    prayer: "Sagrados Corazones, que vuestro amor atraiga a todos los pecadores de vuelta al camino de la salvación."
  },
  {
    day: 18,
    title: "El Corazón de María y la Pureza",
    month: "Junio",
    verse: { text: "Bienaventurados los puros de corazón, porque ellos verán a Dios.", reference: "Mateo 5:8" },
    reflection: "El Corazón de María es puro y sin mancha. Su pureza es el modelo al que todos debemos aspirar.",
    prayer: "María, Corazón puro, purifica mi corazón para que pueda ver a Dios."
  },
  {
    day: 19,
    title: "El Corazón de Jesús y los Niños",
    month: "Junio",
    verse: { text: "Dejad a los niños venir a mí, porque de ellos es el Reino de los cielos.", reference: "Mateo 19:14" },
    reflection: "El Corazón de Jesús ama a los niños con predilección. María también protege a los más pequeños con su amor maternal.",
    prayer: "Sagrado Corazón, bendice a todos los niños del mundo y protege su inocencia."
  },
  {
    day: 20,
    title: "El Corazón y el Perdón",
    month: "Junio",
    verse: { text: "Perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden.", reference: "Mateo 6:12" },
    reflection: "El Corazón de Jesús nos pide que perdonemos como Él nos perdonó. María perdonó a quienes crucificaron a su Hijo.",
    prayer: "Sagrado Corazón, enséñame a perdonar desde el corazón, como Tú y María lo hicieron."
  },
  {
    day: 21,
    title: "Los Dos Corazones y la Iglesia",
    month: "Junio",
    verse: { text: "He aquí a tu madre.", reference: "Juan 19:27" },
    reflection: "Los Corazones de Jesús y María son el corazón de la Iglesia. Ella nos une como comunidad de fe.",
    prayer: "Sagrados Corazones, bendecid a la Iglesia entera y haced que sea fiel a su misión."
  },
  {
    day: 22,
    title: "El Corazón de María y los Sacerdotes",
    month: "Junio",
    verse: { text: "Pastoread la grey de Dios que os ha sido encomendada.", reference: "1 Pedro 5:2" },
    reflection: "María ama a los sacerdotes porque son los ministros del Corazón de Jesús. Ella intercede por ellos y los protege.",
    prayer: "María, Corazón maternal, santifica a los sacerdotes y haz que sean fieles ministros del Sagrado Corazón."
  },
  {
    day: 23,
    title: "El Corazón de Jesús, Refugio",
    month: "Junio",
    verse: { text: "Venid a mí todos los que estáis cansados y agobiados.", reference: "Mateo 11:28" },
    reflection: "El Corazón de Jesús es refugio de los cansados y agobiados. María nos invita a acudir a Él con confianza.",
    prayer: "Sagrado Corazón de Jesús, refugio de mis cansancios, descansa en ti mi corazón."
  },
  {
    day: 24,
    title: "Los Dos Corazones y la Paz",
    month: "Junio",
    verse: { text: "La paz os dejo; mi paz os doy.", reference: "Juan 14:27" },
    reflection: "Los Corazones de Jesús y María son fuente de paz verdadera. Solo en ellos encontramos la paz que el mundo no puede dar.",
    prayer: "Sagrados Corazones, dadnos la vuestra paz para que vivamos en serenidad y en amor."
  },
  {
    day: 25,
    title: "El Corazón de Jesús y el Amor",
    month: "Junio",
    verse: { text: "Os doy un mandamiento nuevo: os améis los unos a los otros.", reference: "Juan 13:34" },
    reflection: "El Corazón de Jesús es la fuente de todo amor verdadero. María nos enseña a vivir este mandamiento con entrega.",
    prayer: "Sagrado Corazón, enciende en mi corazón el fuego de tu amor para que ame a los demás."
  },
  {
    day: 26,
    title: "Los Dos Corazones en Pentecostés",
    month: "Junio",
    verse: { text: "Y se les aparecieron lenguas repartidas, como de fuego.", reference: "Hechos 2:3" },
    reflection: "En Pentecostés, los Corazones de Jesús y María se unieron para enviar al Espíritu Santo sobre la Iglesia.",
    prayer: "Espíritu Santo, que descendiste sobre María y los apóstoles, enciende en nuestros corazones el fuego del amor divino."
  },
  {
    day: 27,
    title: "El Corazón de María y la Familia",
    month: "Junio",
    verse: { text: "Y bajó con ellos, y vino a Nazaret, y estaba sujeto a ellos.", reference: "Lucas 2:51" },
    reflection: "El Corazón de María cuida de la familia humana como cuidó de la Sagrada Familia. Ella nos enseña a vivir en armonía.",
    prayer: "María, Corazón de la familia, bendice nuestros hogares y haz que sean lugares de amor y de paz."
  },
  {
    day: 28,
    title: "El Corazón de Jesús y la Justicia",
    month: "Junio",
    verse: { text: "Buscad primero el reino de Dios y su justicia.", reference: "Mateo 6:33" },
    reflection: "El Corazón de Jesús es justo y misericordioso. María nos invita a buscar la justicia de Dios con humildad.",
    prayer: "Sagrado Corazón, que tu justicia reine en el mundo y que María nos guíe hacia ella."
  },
  {
    day: 29,
    title: "El Corazón de María y los Santos",
    month: "Junio",
    verse: { text: "Así que nosotros, rodeados de tan grande nube de testigos.", reference: "Hebreos 12:1" },
    reflection: "Los santos son fruto de los Corazones de Jesús y María. Ellos nos muestran que la santidad es posible para todos.",
    prayer: "María, Corazón de los santos, intercede por nosotros para que sigamos sus huellas."
  },
  {
    day: 30,
    title: "Los Dos Corazones y la Eternidad",
    month: "Junio",
    verse: { text: "Yo soy la resurrección y la vida; el que cree en mí vivirá.", reference: "Juan 11:25" },
    reflection: "Los Corazones de Jesús y María nos abren las puertas de la eternidad. Su amor nos garantiza la vida eterna.",
    prayer: "Sagrados Corazones, que vuestro amor nos conduzca a la vida eterna donde reinaremos juntos."
  }

, {
    day: 1,
    title: "Los Ãngeles de Portugal",
    month: "Julio",
    verse: {
      text: "El SeÃ±or te guarde; el SeÃ±or haga resplandecer su rostro sobre ti y te conceda su paz.",
      reference: "NÃºmeros 6:24-26"
    },
    reflection: "Antes de que MarÃ­a apareciera en FÃ¡tima, fueron tres Ã¡ngeles quienes prepararon el corazÃ³n de losPastores. San Rafael, san Miguel y san Gabriel nos recuerdan que Dios siempre envÃ­a mensajeros para guiarnos. Invocemos a los Ã¡ngeles guardianes para que nos dispongan a recibir las gracias del Cielo.",
    prayer: "Ãngeles de Portugal, mensajeros del AltÃ­simo, que preparasteis el corazÃ³n de losPastores para recibir a la Virgen, interceded por nosotros para que estemos dispuestos a escuchar el llamado de Dios. AmÃ©n."
  },
  {
    day: 2,
    title: "La Primera ApariciÃ³n",
    month: "Julio",
    verse: {
      text: "Al oÃ­r esto, los pastores se apresuraron a ir a BelÃ©n y encontraron a MarÃ­a, a JosÃ© y al niÃ±o acostado en el pesebre.",
      reference: "Lucas 2:16"
    },
    reflection: "El 13 de mayo de 1917, la Virgen MarÃ­a se apareciÃ³ por primera vez a LucÃ­a, Francisco y Jacinta en la Cova da Iria. Como los pastores de BelÃ©n, estos niÃ±os supieron reconocer la presencia de Dios en lo humilde. MarÃ­a nos llama a todos, sin importar nuestra condiciÃ³n, para recibir su mensaje de amor.",
    prayer: "Virgen de FÃ¡tima, que te dignaste aparecer a losPastores mÃ¡s humildes, danos la gracia de reconocerte en las personas sencillas y de responder a tu llamado con fe sencilla y confiada. AmÃ©n."
  },
  {
    day: 3,
    title: "Â¿QuiÃ©n Eres TÃº?",
    month: "Julio",
    verse: {
      text: "Entonces la mujer vio que el Ã¡rbol era bueno para comer, agradable a la vista y Ãºtil para alcanzar la sabidurÃ­a, tomÃ³ de su fruta y comiÃ³; tambiÃ©n dio a su marido, que estaba con ella, y Ã©l comiÃ³.",
      reference: "GÃ©nesis 3:6"
    },
    reflection: "Cuando losPastores preguntaron \"Â¿QuiÃ©n eres tÃº?\", la Virgen respondiÃ³: \"Yo soy la Virgen del Rosario\". Este tÃ­tulo nos invita a descubrir su identidad a travÃ©s de la oraciÃ³n. MarÃ­a no busca ser adorada, sino que nos lleve a su Hijo JesÃºs. En cada misterio del Rosario descubrimos quiÃ©n es Ella realmente.",
    prayer: "Virgen del Rosario, ensÃ©Ã±anos a conocerte a travÃ©s de la oraciÃ³n y a descubrir en cada misterio el amor de tu Hijo JesÃºs. Que tu nombre sea siempre en nuestros labios y en nuestros corazones. AmÃ©n."
  },
  {
    day: 4,
    title: "El Sacrificio por los Pecadores",
    month: "Julio",
    verse: {
      text: "Porque tanto amÃ³ Dios al mundo que dio a su Hijo Ãºnico, para que todo el que crea en Ã©l no se pierda sino que tenga vida eterna.",
      reference: "Juan 3:16"
    },
    reflection: "MarÃ­a pidiÃ³ a losPastores que ofrecieran sacrificios por la conversiÃ³n de los pecadores. Este mensaje nos recuerda que el sacrificio unido a Cristo tiene un valor redentor. No se trata de sufrir por sufrir, sino de ofrecer nuestras pruebas por amor, imitando a JesÃºs en la cruz.",
    prayer: "SeÃ±or JesÃºs, que en la cruz ofreciste tu vida por amor a nosotros, ayÃºdanos a unir nuestros sufrimientos a los tuyos por la conversiÃ³n de todos los pecadores del mundo. AmÃ©n."
  },
  {
    day: 5,
    title: "El Infierno Existe",
    month: "Julio",
    verse: {
      text: "Y serÃ¡n echados en la hoguera; allÃ­ serÃ¡ el lloro y el rechinar de dientes.",
      reference: "Mateo 13:42"
    },
    reflection: "La Virgen mostrÃ³ a losPastores una visiÃ³n del infierno para que comprendieran la gravedad del pecado. Este no es un mensaje de miedo, sino de amor: Dios no quiere que nadie se pierda. La realidad del infierno nos recuerda la urgencia de la conversiÃ³n y la importancia de vivir segÃºn el Evangelio.",
    prayer: "Virgen de FÃ¡tima, que con dolor mostraste a losPastores la realidad del infierno, ayÃºdanos a vivir con la consciencia de que nuestras decisiones eternas son importantes, y a buscar siempre la salvaciÃ³n de todas las almas. AmÃ©n."
  },
  {
    day: 6,
    title: "El CorazÃ³n Inmaculado de MarÃ­a",
    month: "Julio",
    verse: {
      text: "En el principio era el Verbo, y el Verbo estaba con Dios, y el Verbo era Dios.",
      reference: "Juan 1:1"
    },
    reflection: "La Virgen prometiÃ³ que al final su CorazÃ³n Inmaculado triunfarÃ¡. Este triunfo no es de poder worldly, sino de amor puro y sin mancha. El CorazÃ³n de MarÃ­a fue el templo vivo donde habitÃ³ el Verbo de Dios, y su pureza nos recuerda la dignidad de ser hijos de Dios.",
    prayer: "CorazÃ³n Inmaculado de MarÃ­a, templo viviente del Verbo, que tu pureza nos recuerde nuestra dignidad de hijos de Dios, y que tu triunfo sea la victoria del amor sobre el odio, de la luz sobre las tinieblas. AmÃ©n."
  },
  {
    day: 7,
    title: "La OraciÃ³n del Rosario",
    month: "Julio",
    verse: {
      text: "Rezo yo al SeÃ±or, que es digno de alabanza, y fui salvo de mis enemigos.",
      reference: "Salmo 18:4"
    },
    reflection: "MarÃ­a pidiÃ³ especÃ­ficamente que se recitara el Rosario cada dÃ­a. Esta oraciÃ³n nos permite meditar los misterios de la vida de JesÃºs y MarÃ­a, y es un arma poderosa contra el mal. En cada Ave MarÃ­a elevamos nuestra voz junto con la de MarÃ­a hacia Dios.",
    prayer: "Virgen del Rosario, que en FÃ¡tima nos pediste recitÃ¡ramos el Rosario cada dÃ­a, ensÃ©Ã±anos a valorar esta oraciÃ³n tan poderosa y a encontrar en ella la fuerza para enfrentar cada dÃ­a. AmÃ©n."
  },
  {
    day: 8,
    title: "Primera Satruday: La Paz",
    month: "Julio",
    verse: {
      text: "Os dejo la paz, os doy mi paz. No os la doy como el mundo la da. No se turbe vuestro corazÃ³n ni se acobarde.",
      reference: "Juan 14:27"
    },
    reflection: "La Virgen prometiÃ³ una paz especial a quien cumpliera con la devociÃ³n de los primeros sÃ¡bados. Esta paz no es ausencia de problemas, sino la serenidad del alma que sabe que estÃ¡ en la gracia de Dios. Es la paz que Cristo nos dejÃ³, una paz que el mundo no puede dar.",
    prayer: "SeÃ±or JesÃºs, que nos dejaste tu paz, concÃ©denos la gracia de vivir en ella cada dÃ­a, y que la devociÃ³n de los primeros sÃ¡bados nos acerque cada vez mÃ¡s a tu CorazÃ³n y al de tu Madre SantÃ­sima. AmÃ©n."
  },
  {
    day: 9,
    title: "La ComuniÃ³n Reparadora",
    month: "Julio",
    verse: {
      text: "El que come mi carne y bebe mi sangre tiene vida eterna, y yo lo resucitarÃ© en el Ãºltimo dÃ­a.",
      reference: "Juan 6:54"
    },
    reflection: "MarÃ­a pidiÃ³ la ComuniÃ³n de ReparaciÃ³n los primeros sÃ¡bados. Esta devociÃ³n nos recuerda que la EucaristÃ­a es el alimento de nuestra alma y que podemos ofrecerla por las ofensas a los Corazones de JesÃºs y MarÃ­a. Cada ComuniÃ³n reparadora es un acto de amor que consuela a Dios.",
    prayer: "JesÃºs Eucaristizado, que en la ComuniÃ³n nos das tu cuerpo y tu sangre para nuestra vida eterna, ayÃºdanos a ofrecer cada ComuniÃ³n reparadora por las ofensas a tus Sagrados Corazones y a los de tu Madre SantÃ­sima. AmÃ©n."
  },
  {
    day: 10,
    title: "Los Tres Pastores",
    month: "Julio",
    verse: {
      text: "Porque donde estÃ©n dos o tres reunidos en mi nombre, allÃ­ estoy yo en medio de ellos.",
      reference: "Mateo 18:20"
    },
    reflection: "LucÃ­a, Francisco y Jacinta eranPastores humildes que Dios eligiÃ³ para recibir su mensaje. Su sencillez y pureza de corazÃ³n los hicieron receptivos a la gracia. Nos recuerdan que no necesitamos grandes cualidades para ser instrumentos de Dios, solo un corazÃ³n disponible y humilde.",
    prayer: "Pastores de FÃ¡tima, LucÃ­a, Francisco y Jacinta, que con vuestro ejemplo nos mostrÃ¡is que la sencillez y la humildad abren las puertas del Cielo, interceded por nosotros para que tengamos corazones puros y disponibles para la voluntad de Dios. AmÃ©n."
  },
  {
    day: 11,
    title: "El Sacrificio de Francisco",
    month: "Julio",
    verse: {
      text: "Os he dado ejemplo para que hagÃ¡is lo que yo he hecho con vosotros.",
      reference: "Juan 13:15"
    },
    reflection: "Francisco muriÃ³ joven, a los 10 aÃ±os, ofreciendo sus sufrimientos por la conversiÃ³n de los pecadores. Su vida fue un testimonio de amor incondicional a Dios y a la Virgen. Nos enseÃ±a que la santidad no depende de la longevidad, sino de la entrega total a la voluntad de Dios.",
    prayer: "San Francisco de FÃ¡tima, que con tu vida joven y santa nos muestras que la santidad es posible a cualquier edad, interceded por nosotros para que sepamos ofrecer cada dÃ­a a Dios con amor, como tÃº lo hiciste. AmÃ©n."
  },
  {
    day: 12,
    title: "La Pureza de Jacinta",
    month: "Julio",
    verse: {
      text: "Bienaventurados los puros de corazÃ³n, porque ellos verÃ¡n a Dios.",
      reference: "Mateo 5:8"
    },
    reflection: "Jacinta fue una mÃ¡rtir de la pureza, muriÃ³ joven ofreciendo sus sufrimientos por la salvaciÃ³n de las almas. Su corazÃ³n puro la hizo digna de recibir mensajes extraordinarios de la Virgen. Nos recuerda que la pureza del corazÃ³n es el camino para ver a Dios.",
    prayer: "Santa Jacinta de FÃ¡tima, mÃ¡rtir de la pureza, que tu ejemplo nos inspire a mantener nuestro corazÃ³n puro y a ofrecer nuestros sufrimientos por la salvaciÃ³n de todas las almas. AmÃ©n."
  },
  {
    day: 13,
    title: "La Obediencia al Obispo",
    month: "Julio",
    verse: {
      text: "Obedeced a vuestros superiores y someteos a ellos, porque ellos velan por vuestras almas como quienes han de dar cuentas.",
      reference: "Hebreos 13:17"
    },
    reflection: "LucÃ­a siempre consultÃ³ con su confesor y con el obispo sobre lo que debÃ­a hacer. Este ejemplo de obediencia eclesial es fundamental para discernir la voluntad de Dios. La verdadera devociÃ³n mariana siempre estÃ¡ en comuniÃ³n con la Iglesia y su magisterio.",
    prayer: "Virgen de FÃ¡tima, que siempre guiaste a LucÃ­a a la obediencia eclesial, ayÃºdanos a ser obedientes a la Iglesia y a nuestros superiores, para que asÃ­ podamos discernir verdaderamente la voluntad de Dios en nuestras vidas. AmÃ©n."
  },
  {
    day: 14,
    title: "El Mensaje de ConversiÃ³n",
    month: "Julio",
    verse: {
      text: "ArrepentÃ­os y convertÃ­os, para que se borren vuestros pecados.",
      reference: "Hechos 3:19"
    },
    reflection: "El mensaje central de FÃ¡tima es la conversiÃ³n. MarÃ­a nos llama a volver a Dios con todo nuestro corazÃ³n, abandonando el pecado y abrazando la vida de gracia. La conversiÃ³n no es un evento Ãºnico, sino un camino continuo de regreso al Padre.",
    prayer: "SeÃ±or JesÃºs, que viniste a llamar a los pecadores, danos la gracia de la conversiÃ³n verdadera, para que cada dÃ­a volvamos a Ti con todo nuestro corazÃ³n y abandonemos todo lo que nos aleja de tu amor. AmÃ©n."
  },
  {
    day: 15,
    title: "La OraciÃ³n por los Pecadores",
    month: "Julio",
    verse: {
      text: "Os digo que en el cielo habrÃ¡ mÃ¡s alegrÃ­a por un solo pecador que se convierta que por noventa y nueve justos que no necesiten de conversiÃ³n.",
      reference: "Lucas 15:7"
    },
    reflection: "MarÃ­a nos pide que oremos por la conversiÃ³n de los pecadores, porque el Cielo se alegra cuando un alma vuelve a Dios. Esta oraciÃ³n es un acto de caridad que trasciende nuestro egoÃ­smo y nos abre al amor por los demÃ¡s. Cada oraciÃ³n por un pecador es una obra de misericordia.",
    prayer: "Virgen de FÃ¡tima, que con amor maternal nos pides que oremos por los pecadores, ensÃ©Ã±anos a tener corazÃ³n de madre que suplique por la conversiÃ³n de todos, especialmente de los mÃ¡s alejados de Dios. AmÃ©n."
  },
  {
    day: 16,
    title: "El Poder del Rosario",
    month: "Julio",
    verse: {
      text: "En todo lugar donde yo haga memoria de ti, yo te harÃ© llover bendiciones.",
      reference: "Ã‰xodo 20:24"
    },
    reflection: "El Rosario es el arma mÃ¡s poderosa que MarÃ­a nos ha dado. En cada misterio meditamos la vida de JesÃºs y MarÃ­a, y en cada Ave MarÃ­a elevamos nuestra oraciÃ³n al cielo. La Virgen prometiÃ³ que el Rosario tendrÃ¡ poder sobre todas las cosas.",
    prayer: "Virgen del Rosario, arma poderosa contra todas las fuerzas del mal, que tu intercesiÃ³n nos proteja y nos conceda la gracia de recitar el Rosario cada dÃ­a con fe y devociÃ³n. AmÃ©n."
  },
  {
    day: 17,
    title: "El Triunfo del CorazÃ³n Inmaculado",
    month: "Julio",
    verse: {
      text: "Al final, mi CorazÃ³n Inmaculado triunfarÃ¡.",
      reference: "FÃ¡tima - Mensaje de la Virgen"
    },
    reflection: "La Virgen nos promete que al final triunfarÃ¡ su CorazÃ³n Inmaculado. Este triunfo no es de poder worldly, sino de amor puro y sin mancla. Es la victoria del bien sobre el mal, de la luz sobre las tinieblas. Nos da esperanza en los momentos mÃ¡s oscuros.",
    prayer: "CorazÃ³n Inmaculado de MarÃ­a, que tu triunfo sea la victoria del amor, de la justicia y de la paz en todo el mundo. Confiamos en tu promesa y esperamos con gozo el dÃ­a en que tu CorazÃ³n reine en todos los corazones humanos. AmÃ©n."
  },
  {
    day: 18,
    title: "La Penitencia",
    month: "Julio",
    verse: {
      text: "Si alguno quiere ir en pos de mÃ­, niÃ©guese a sÃ­ mismo, tome su cruz y sÃ­game.",
      reference: "Mateo 16:24"
    },
    reflection: "MarÃ­a nos pide que hagamos penitencia, no como castigo, sino como camino de amor. La penitencia es unirse al sacrificio de Cristo por la salvaciÃ³n del mundo. Cada pequeÃ±o sacrificio ofrecido con amor tiene un valor infinito ante Dios.",
    prayer: "SeÃ±or JesÃºs, que nos invitas a tomar nuestra cruz y seguirte, ayÃºdanos a ofrecer cada dÃ­a nuestros sufrimientos y sacrificios por amor a Ti y por la salvaciÃ³n de todas las almas. AmÃ©n."
  },
  {
    day: 19,
    title: "La DevociÃ³n a los Corazones",
    month: "Julio",
    verse: {
      text: "Venid a mÃ­ todos los que estÃ¡is cansados y agobiados, y yo os aliviarÃ©.",
      reference: "Mateo 11:28"
    },
    reflection: "La devociÃ³n a los Sagrados Corazones de JesÃºs y MarÃ­a es el corazÃ³n del mensaje de FÃ¡tima. Estos dos corazones unidos en amor nos invitan a descansar en ellos y a encontrar la paz que el mundo no puede dar. Son el refugio seguro en las tormentas de la vida.",
    prayer: "Sagrados Corazones de JesÃºs y MarÃ­a, refugio seguro de nuestras almas, que vuestra uniÃ³n de amor nos proteja y nos conceda la gracia de vivir siempre unidos a Dios y a la voluntad divina. AmÃ©n."
  },
  {
    day: 20,
    title: "La Gracia de la ConversiÃ³n",
    month: "Julio",
    verse: {
      text: "No quiero la muerte del pecador, sino que se convierta y viva.",
      reference: "Ezequiel 33:11"
    },
    reflection: "Dios siempre ofrece la oportunidad de convertirse, hasta el Ãºltimo instante de la vida. Esta misericordia infinita nos recuerda que nunca es tarde para volver a Dios. La conversiÃ³n es un regalo de su gracia que siempre estÃ¡ disponible para quien lo busque con sinceridad.",
    prayer: "Padre Misericordioso, que no quieres la muerte del pecador sino su conversiÃ³n, danos la gracia de aprovechar cada momento para volver a Ti, y de ser instrumentos de tu misericordia para con los demÃ¡s. AmÃ©n."
  },
  {
    day: 21,
    title: "El Pecado del Mundo",
    month: "Julio",
    verse: {
      text: "El EspÃ­ritu es el que da vida; la carne no sirve de nada. Las palabras que yo os he dicho son espÃ­ritu y son vida.",
      reference: "Juan 6:63"
    },
    reflection: "MarÃ­a llorÃ³ por los pecados del mundo, mostrando su dolor de madre ante la ofensa a Dios. Este llanto nos recuerda que el pecado no solo ofende a Dios, sino que tambiÃ©n hiere el corazÃ³n de su Madre SantÃ­sima. Debemos ser sensibles al mal que nos rodea.",
    prayer: "Virgen de FÃ¡tima, que lloraste por los pecados del mundo, ensÃ©Ã±anos a lamentar nuestros pecados y a ser sensibles al mal que ofende a Dios y a tu CorazÃ³n maternal. AmÃ©n."
  },
  {
    day: 22,
    title: "La Paz del Alma",
    month: "Julio",
    verse: {
      text: "Dios no es el Dios del desorden, sino de la paz.",
      reference: "1 Corintios 14:33"
    },
    reflection: "La paz que MarÃ­a promete a los que cumplen con la devociÃ³n de los primeros sÃ¡bados es una paz que sobrepasa todo entendimiento. No es la paz del mundo, que depende de las circunstancias, sino la paz de Dios que habita en el alma que estÃ¡ en gracia.",
    prayer: "SeÃ±or de la Paz, que tu paz, que sobrepasa todo entendimiento, guarde nuestros corazones y mentes en Cristo JesÃºs, y que la devociÃ³n de los primeros sÃ¡bados nos acerque cada vez mÃ¡s a esta paz divina. AmÃ©n."
  },
  {
    day: 23,
    title: "El Rosario CenÃ¡culo",
    month: "Julio",
    verse: {
      text: "Permaneced en mÃ­, como yo permanezco en vosotros.",
      reference: "Juan 15:4"
    },
    reflection: "El Rosario es un cenÃ¡culo donde permanecemos con MarÃ­a y JesÃºs, como los apÃ³stoles en el CenÃ¡culo. En cada misterio nos unimos a ellos en oraciÃ³n y meditaciÃ³n. Este cenÃ¡culo espiritual nos fortalece para vivir nuestra fe en el mundo.",
    prayer: "Virgen del CenÃ¡culo, que nos reÃºnes con JesÃºs en cada misterio del Rosario, ayÃºdanos a permanecer unidos a Ã‰l en la oraciÃ³n y en la vida diaria, para que su amor transforme todo nuestro ser. AmÃ©n."
  },
  {
    day: 24,
    title: "La Esperanza en Tiempos Oscuros",
    month: "Julio",
    verse: {
      text: "Aunque camine por el valle de sombra de muerte, no temerÃ© mal alguno, porque tÃº estÃ¡s conmigo.",
      reference: "Salmo 23:4"
    },
    reflection: "MarÃ­a apareciÃ³ en un momento de guerra y sufrimiento, trayendo esperanza a un mundo en tinieblas. Su mensaje nos recuerda que incluso en los momentos mÃ¡s oscuros, Dios estÃ¡ presente y MarÃ­a nos guÃ­a hacia la luz. La esperanza cristiana no defrauda.",
    prayer: "Virgen de la Esperanza, que apareciste en FÃ¡tima trayendo luz a un mundo en tinieblas, fortalece nuestra esperanza en los momentos oscuros de nuestra vida y guÃ­anos siempre hacia la luz de tu Hijo JesÃºs. AmÃ©n."
  },
  {
    day: 25,
    title: "La Caridad hacia los Pecadores",
    month: "Julio",
    verse: {
      text: "Os doy un mandamiento nuevo: os amÃ©is los unos a losotros. Como yo os he amado, asÃ­ tambiÃ©n vosotros amaos los unos a losotros.",
      reference: "Juan 13:34"
    },
    reflection: "El amor a los pecadores es esencial en el mensaje de FÃ¡tima. No podemos orar por ellos si no los amamos primero. Este amor es el mismo amor de JesÃºs en la cruz, que perdonÃ³ a sus verdugos. Debemos imitar este amor radical que supera todo entendimiento.",
    prayer: "SeÃ±or JesÃºs, que en la cruz perdonaste a tus verdugos, ensÃ©Ã±anos a amar a los pecadores como TÃº los amas, y a orar por ellos con la misma caridad con la que TÃº oraste por nosotros. AmÃ©n."
  },
  {
    day: 26,
    title: "La ReconciliaciÃ³n con Dios",
    month: "Julio",
    verse: {
      text: "Si confessamos nuestros pecados, Ã©l es fiel y justo para perdonarnos y purificarnos de toda maldad.",
      reference: "1 Juan 1:9"
    },
    reflection: "La reconciliaciÃ³n con Dios se logra principalmente a travÃ©s del Sacramento de la ReconciliaciÃ³n. MarÃ­a nos invita a acudir con frecuencia a este sacramento de misericordia, donde Dios nos limpia de todo pecado y nos restaura la gracia. Es el camino mÃ¡s seguro para la paz del alma.",
    prayer: "Virgen de FÃ¡tima, que nos invitas a la reconciliaciÃ³n con Dios, ayÃºdanos a acudir con frecuencia al Sacramento de la ReconciliaciÃ³n, donde encontramos el perdÃ³n y la paz que nuestro alma necesita. AmÃ©n."
  },
  {
    day: 27,
    title: "La OraciÃ³n en Familia",
    month: "Julio",
    verse: {
      text: "En vuestra casa no se apagarÃ¡ la lÃ¡mpara ni se secarÃ¡ la mecha del candelero.",
      reference: "2 Reyes 4:33"
    },
    reflection: "MarÃ­a pidiÃ³ que el Rosario se rezara en familia, porque la familia es la cÃ©lula fundamental de la Iglesia. La oraciÃ³n en familia fortalece los lazos y protege el hogar de las fuerzas del mal. Un hogar que ora unido es un hogar que florece en la paz de Dios.",
    prayer: "Virgen de FÃ¡tima, que nos pides rezar el Rosario en familia, fortalece nuestros hogares con tu presencia y ayÃºdanos a hacer de nuestros hogares santuarios de oraciÃ³n y amor. AmÃ©n."
  },
  {
    day: 28,
    title: "La Pureza de IntenciÃ³n",
    month: "Julio",
    verse: {
      text: "Cuando ores, entra en tu aposento, cierra la puerta y ora a tu Padre que estÃ¡ en lo secreto.",
      reference: "Mateo 6:6"
    },
    reflection: "La oraciÃ³n debe ser hecha con pureza de intenciÃ³n, buscando solo la gloria de Dios y no la aprobaciÃ³n de los hombres. LosPastores oraban con sencillez y sin pretensiones, y por eso la Virgen los eligiÃ³. La pureza de intenciÃ³n multiplica el valor de nuestra oraciÃ³n.",
    prayer: "SeÃ±or Dios, que conoces los secretos de nuestros corazones, purifica nuestras intenciones en la oraciÃ³n, para que busquemos siempre tu gloria y no la nuestra, como losPastores de FÃ¡tima. AmÃ©n."
  },
  {
    day: 29,
    title: "La Humildad de los Pastores",
    month: "Julio",
    verse: {
      text: "Si no os convertÃ­s y os hacÃ©is como los niÃ±os, no entrarÃ©is en el Reino de los Cielos.",
      reference: "Mateo 18:3"
    },
    reflection: "La humildad de losPastores fue la clave para recibir el mensaje de FÃ¡tima. Como niÃ±os, no tenÃ­an orgullo ni pretensiones, y por eso pudieron ver a la Virgen y escuchar sus palabras. JesÃºs nos invita a ser como niÃ±os para entrar en el Reino.",
    prayer: "Virgen de FÃ¡tima, que losPastores con su humildad nos enseÃ±an que la sencillez abre las puertas del Cielo, danos la gracia de ser humildes como ellos, para que podamos recibir las bendiciones que Dios nos tiene preparadas. AmÃ©n."
  },
  {
    day: 30,
    title: "El Martirio de Jacinta",
    month: "Julio",
    verse: {
      text: "Bienaventurados los que son perseguidos por causa de la justicia, porque de ellos es el Reino de los Cielos.",
      reference: "Mateo 5:10"
    },
    reflection: "Jacinta aceptÃ³ sus sufrimientos con amor heroico, ofreciÃ©ndolos por la conversiÃ³n de los pecadores. Su martirio no fue de sangre, sino de amor incondicional a Dios. Nos enseÃ±a que el sufrimiento ofrecido con amor tiene un poder redentor infinito.",
    prayer: "Santa Jacinta de FÃ¡tima, que con amor heroico ofreciste tus sufrimientos por la conversiÃ³n de los pecadores, interceded por nosotros para que sepamos ofrecer nuestros sufrimientos con el mismo amor y generosidad que tÃº lo hiciste. AmÃ©n."
  },
  {
    day: 31,
    title: "La Ãšltima ApariciÃ³n",
    month: "Julio",
    verse: {
      text: "No os turbÃ©is ni os acobardeis. Creed en Dios y creed tambiÃ©n en mÃ­.",
      reference: "Juan 14:1"
    },
    reflection: "En la Ãºltima apariciÃ³n, la Virgen se revelÃ³ como la Inmaculada ConcepciÃ³n y prometiÃ³ el triunfo de su CorazÃ³n. Este mensaje final nos llena de esperanza y nos recuerda que, a pesar de las pruebas, la victoria final serÃ¡ de Dios. Debemos perseverar en la fe hasta el final.",
    prayer: "Inmaculada ConcepciÃ³n, Reina de FÃ¡tima, que en tu Ãºltima apariciÃ³n nos prometiste el triunfo de tu CorazÃ³n, fortalece nuestra fe en los momentos de prueba y ayÃºdanos a perseverar hasta el final, confiando en la victoria de Dios. AmÃ©n."
  }

, {
    day: 1,
    title: "El Umbral de la Gloria",
    month: "Agosto",
    verse: {
      text: "Porque asÃ­ subirÃ¡ el que fue llevado en nubes al cielo, para volver a ver la tierra.",
      reference: "IsaÃ­as 60:8"
    },
    reflection: "Agosto comienza con el misterio de la DormiciÃ³n, cuando MarÃ­a, llena de gracia, fue preparada para su trÃ¡nsito celestial. Su vida terrenal culmina en una jornada hacia la plenitud de la gloria de Dios.",
    prayer: "Santa MarÃ­a, madre del cielo, prepÃ¡rame para cada dÃ­a de agosto con tu luz celestial. AmÃ©n."
  },
  {
    day: 2,
    title: "La Mujer Vestida de Sol",
    month: "Agosto",
    verse: {
      text: "ApareciÃ³ en el cielo una gran seÃ±al: una mujer vestida de sol, con la luna bajo sus pies y una corona de doce estrellas.",
      reference: "Apocalipsis 12:1"
    },
    reflection: "MarÃ­a es la mujer glorificada que el Apocalipsis nos presenta. Su asunciÃ³n al cielo es el cumplimiento de esta visiÃ³n profÃ©tica, donde la Madre de Dios reina en la gloria celestial.",
    prayer: "MarÃ­a, mujer vestida de sol, intercede por nosotros ante tu Hijo JesÃºs. AmÃ©n."
  },
  {
    day: 3,
    title: "DormiciÃ³n y ResurrecciÃ³n",
    month: "Agosto",
    verse: {
      text: "Os soy la resurrecciÃ³n y la vida; el que cree en mÃ­, aunque muera, vivirÃ¡.",
      reference: "Juan 11:25"
    },
    reflection: "La DormiciÃ³n de MarÃ­a no es un final, sino un trÃ¡nsito hacia la vida eterna. Como JesÃºs prometiÃ³, ella experimenta la plenitud de la resurrecciÃ³n en cuerpo y alma.",
    prayer: "SeÃ±or JesÃºs, que la fe de MarÃ­a nos recuerde que la muerte no tiene poder sobre nosotros. AmÃ©n."
  },
  {
    day: 4,
    title: "Asunta al Cielo",
    month: "Agosto",
    verse: {
      text: "Y cuando hubo dicho esto, fue elevada a la vista de ellos, y una nube la recogiÃ³ y desapareciÃ³ a sus ojos.",
      reference: "Hechos 1:9"
    },
    reflection: "AsÃ­ como Cristo ascendiÃ³ al cielo, MarÃ­a fue asunta en cuerpo y alma a la gloria celestial. La tradiciÃ³n nos narra este misterioso y glorioso acontecimiento.",
    prayer: "MarÃ­a asunta al cielo, ensÃ©Ã±ame a elevar mi corazÃ³n hacia Dios cada dÃ­a. AmÃ©n."
  },
  {
    day: 5,
    title: "Corona de Doce Estrellas",
    month: "Agosto",
    verse: {
      text: "Las doce estrellas representan a los doce patriarcas y a los apÃ³stoles, y sobre ellos MarÃ­a reina.",
      reference: "GÃ©nesis 37:9"
    },
    reflection: "MarÃ­a lleva una corona de doce estrellas, sÃ­mbolo de su autoridad como Reina de los cielos. Ella es Madre de la Iglesia y guÃ­a a todos sus hijos con amor maternal.",
    prayer: "Reina del cielo y de la tierra, corona mi dÃ­a con tu bendiciÃ³n. AmÃ©n."
  },
  {
    day: 6,
    title: "El TrÃ¡nsito de la Madre",
    month: "Agosto",
    verse: {
      text: "En Dios estÃ¡ mi salvaciÃ³n y mi gloria; mi refugio seguro es Dios.",
      reference: "Salmo 62:7"
    },
    reflection: "El trÃ¡nsito de MarÃ­a al cielo fue un acto de amor divino. Ella, que fue refugio seguro de JesÃºs en la tierra, ahora encuentra su refugio eterno en Dios.",
    prayer: "Dios de amor, recibe a MarÃ­a en tu gloria y danos la gracia de seguirla. AmÃ©n."
  },
  {
    day: 7,
    title: "MarÃ­a y el Misterio Pascual",
    month: "Agosto",
    verse: {
      text: "Porque del todo fue hecha semejante a sus hermanos.",
      reference: "Hebreos 2:17"
    },
    reflection: "MarÃ­a participÃ³ plenamente del misterio pascual de Cristo. Su DormiciÃ³n es un preludio de la resurrecciÃ³n que espera a todos los fieles.",
    prayer: "MarÃ­a, compaÃ±era en el misterio pascual, fortalece mi fe en la resurrecciÃ³n. AmÃ©n."
  },
  {
    day: 8,
    title: "La Tumba VacÃ­a",
    month: "Agosto",
    verse: {
      text: "No estÃ¡ aquÃ­, porque ha resucitado, como dijo.",
      reference: "Mateo 28:6"
    },
    reflection: "Al igual que la tumba de JesÃºs, la tumba de MarÃ­a fue encontrada vacÃ­a. Los apÃ³stoles atestiguaron su glorificaciÃ³n y su asunciÃ³n a los cielos.",
    prayer: "Cristo resucitado, que la tumba vacÃ­a de MarÃ­a nos recuerde la esperanza de la vida eterna. AmÃ©n."
  },
  {
    day: 9,
    title: "Mediadora de Gracias",
    month: "Agosto",
    verse: {
      text: "Dichosos los que escuchan la palabra de Dios y la cumplen.",
      reference: "Lucas 11:28"
    },
    reflection: "Desde el cielo, MarÃ­a intercede por nosotros como Mediadora de todas las gracias. Ella nos obtiene del cielo las gracias que necesitamos para caminar en santidad.",
    prayer: "MarÃ­a, mediadora de gracias, intercede por mÃ­ ante tu Hijo JesÃºs. AmÃ©n."
  },
  {
    day: 10,
    title: "El Don de la SabidurÃ­a",
    month: "Agosto",
    verse: {
      text: "El principio de la sabidurÃ­a es temer al SeÃ±or; conocer al Santo es prudencia.",
      reference: "Proverbios 9:10"
    },
    reflection: "MarÃ­a, llena de sabidurÃ­a divina, nos enseÃ±a a temer al SeÃ±or y a caminar en sus caminos. Su asunciÃ³n es el premio a una vida de fe inquebrantable.",
    prayer: "MarÃ­a, madre de la sabidurÃ­a, ilumina mi mente con tu conocimiento divino. AmÃ©n."
  },
  {
    day: 11,
    title: "Asunta en Cuerpo y Alma",
    month: "Agosto",
    verse: {
      text: "El cuerpo no es fornicaciÃ³n, sino que es para el SeÃ±or, y el SeÃ±or para el cuerpo.",
      reference: "1 Corintios 6:13"
    },
    reflection: "La asunciÃ³n de MarÃ­a en cuerpo y alma es un testimonio de la dignidad del cuerpo humano. Ella fue glorificada completa, como esperamos serlo en la resurrecciÃ³n final.",
    prayer: "SeÃ±or, que nuestra cuerpo y alma sean dignos de tu gloria, como el de MarÃ­a. AmÃ©n."
  },
  {
    day: 12,
    title: "Reina de los Ãngeles",
    month: "Agosto",
    verse: {
      text: "Y se oyeron voces y cantos y truenos de la gran multitud de Ã¡ngeles.",
      reference: "Apocalipsis 5:11"
    },
    reflection: "Al llegar al cielo, MarÃ­a fue recibida por los coros de Ã¡ngeles. Ella es la Reina de los Ã¡ngeles, glorificada en la corte celestial.",
    prayer: "Reina de los Ã¡ngeles, pide a los Ã¡ngeles que nos protejan y guÃ­en. AmÃ©n."
  },
  {
    day: 13,
    title: "La Gloria de MarÃ­a",
    month: "Agosto",
    verse: {
      text: "Y su brillo es como el resplandor del sol, su belleza como el de la luna.",
      reference: "Cantar de los Cantares 6:10"
    },
    reflection: "La gloria de MarÃ­a supera todo esplendor terrenal. Su belleza refleja la perfecciÃ³n de la gracia divina que la llenÃ³ por completo.",
    prayer: "MarÃ­a, reflejo de la gloria de Dios, ilumina mi vida con tu esplendor. AmÃ©n."
  },
  {
    day: 14,
    title: "El Camino al Cielo",
    month: "Agosto",
    verse: {
      text: "Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mÃ­.",
      reference: "Juan 14:6"
    },
    reflection: "MarÃ­a nos muestra el camino al cielo: una vida de fe, obediencia y amor. Ella caminÃ³ fielmente con Dios y ahora reina en su gloria.",
    prayer: "JesÃºs, que MarÃ­a nos enseÃ±e a caminar en tu camino hacia el cielo. AmÃ©n."
  },
  {
    day: 15,
    title: "AsunciÃ³n de MarÃ­a - Solemnidad",
    month: "Agosto",
    verse: {
      text: "Porque ha mirado la humildad de su sierva, y desde ahora me llamarÃ¡n bienaventurada todas las generaciones.",
      reference: "Lucas 1:48"
    },
    reflection: "Hoy celebramos la AsunciÃ³n de MarÃ­a a los cielos. Ella fue exaltada porque su humildad y obediencia la hicieron digna de la gloria divina.",
    prayer: "Santa MarÃ­a, madre de Dios, que tu asunciÃ³n nos llene de esperanza y alegrÃ­a. Â¡AmÃ©n!"
  },
  {
    day: 16,
    title: "DespuÃ©s de la Solemnidad",
    month: "Agosto",
    verse: {
      text: "Dichosos los pobres de espÃ­ritu, porque de ellos es el reino de los cielos.",
      reference: "Mateo 5:3"
    },
    reflection: "MarÃ­a, la mÃ¡s humilde de las criaturas, fue exaltada en el cielo. Su pobreza de espÃ­ritu fue la llave que abriÃ³ las puertas de la gloria celestial.",
    prayer: "MarÃ­a, ensÃ©Ã±ame la humildad que conduce al cielo. AmÃ©n."
  },
  {
    day: 17,
    title: "MarÃ­a, Madre de la Iglesia",
    month: "Agosto",
    verse: {
      text: "He aquÃ­ tu madre.",
      reference: "Juan 19:27"
    },
    reflection: "Desde el cielo, MarÃ­a continÃºa siendo Madre de la Iglesia. Ella nos cuida con el mismo amor con que cuidÃ³ a JesÃºs y a los apÃ³stoles.",
    prayer: "MarÃ­a, madre de la Iglesia, cuida a todos tus hijos en este mundo. AmÃ©n."
  },
  {
    day: 18,
    title: "La Esperanza de la Gloria",
    month: "Agosto",
    verse: {
      text: "Porque nuestra ciudadanÃ­a estÃ¡ en los cielos, de donde tambiÃ©n esperamos al Salvador.",
      reference: "Filipenses 3:20"
    },
    reflection: "La asunciÃ³n de MarÃ­a es una promesa de nuestra propia glorificaciÃ³n. Ella fue la primera en recibir la plenitud de lo que Dios tiene preparado para sus hijos.",
    prayer: "SeÃ±or, que la esperanza de la gloria nos mantenga firmes en la fe. AmÃ©n."
  },
  {
    day: 19,
    title: "El Cuerpo Glorificado",
    month: "Agosto",
    verse: {
      text: "Se sembrarÃ¡ en corrupciÃ³n, resucitarÃ¡ en incorrupciÃ³n; se sembrarÃ¡ en vileza, resucitarÃ¡ en gloria.",
      reference: "1 Corintios 15:42"
    },
    reflection: "MarÃ­a recibiÃ³ un cuerpo glorificado, libre de toda corrupciÃ³n. Esto nos recuerda que tambiÃ©n nosotros seremos transformados en la resurrecciÃ³n.",
    prayer: "Dios de gloria, que tu resurrecciÃ³n nos dÃ© esperanza de un cuerpo glorificado. AmÃ©n."
  },
  {
    day: 20,
    title: "La Estrella de la MaÃ±ana",
    month: "Agosto",
    verse: {
      text: "Estrella resplandeciente y luminosa eres tÃº, oh amada mÃ­a.",
      reference: "Cantar de los Cantares 2:5"
    },
    reflection: "MarÃ­a es la Estrella de la MaÃ±ana que nos guÃ­a hacia Cristo. Su luz celestial ilumina nuestro camino terrenal hacia la eternidad.",
    prayer: "Estrella de la maÃ±ana, guÃ­a mis pasos hacia tu Hijo JesÃºs. AmÃ©n."
  },
  {
    day: 21,
    title: "La Vida Contemplativa",
    month: "Agosto",
    verse: {
      text: "MarÃ­a se sentÃ³ a los pies del SeÃ±or para escuchar su palabra.",
      reference: "Lucas 10:39"
    },
    reflection: "La vida de MarÃ­a fue una continua contemplaciÃ³n de Dios. Desde el cielo, ella contempla la faz del SeÃ±or y goza de su presencia eterna.",
    prayer: "MarÃ­a, madre contemplativa, ensÃ©Ã±ame a buscar a Dios en la oraciÃ³n. AmÃ©n."
  },
  {
    day: 22,
    title: "El Reino de los Cielos",
    month: "Agosto",
    verse: {
      text: "ArrepentÃ­os, porque el reino de los cielos se ha acercado.",
      reference: "Mateo 4:17"
    },
    reflection: "MarÃ­a entra plenamente en el reino de los cielos. Su asunciÃ³n es un testimonio de que el reino prometido por JesÃºs es real y estÃ¡ preparado para sus fieles.",
    prayer: "JesÃºs, que el reino de los cielos sea nuestra meta suprema. AmÃ©n."
  },
  {
    day: 23,
    title: "La Paz Eterna",
    month: "Agosto",
    verse: {
      text: "Os dejo la paz, os doy mi paz; no como el mundo la da, yo os la doy.",
      reference: "Juan 14:27"
    },
    reflection: "MarÃ­a goza de la paz eterna en el cielo. La paz que Cristo prometiÃ³ se cumple plenamente en la vida celestial de nuestra Madre.",
    prayer: "MarÃ­a, madre de la paz, regÃ¡lame tu paz en los momentos de prueba. AmÃ©n."
  },
  {
    day: 24,
    title: "MarÃ­a y los Santos",
    month: "Agosto",
    verse: {
      text: "AsÃ­ que nosotros, rodeados de tan grande nube de testigos, despojÃ©monos de todo peso.",
      reference: "Hebreos 12:1"
    },
    reflection: "MarÃ­a reina entre los santos en la gloria celestial. Ella es la primera entre los santos, la mÃ¡s cercana al trono de Dios.",
    prayer: "MarÃ­a, reina de los santos, intercede por nosotros ante tu Hijo. AmÃ©n."
  },
  {
    day: 25,
    title: "La Llena de Gracia",
    month: "Agosto",
    verse: {
      text: "Salve, llena de gracia, el SeÃ±or es contigo.",
      reference: "Lucas 1:28"
    },
    reflection: "MarÃ­a fue llena de gracia desde su concepciÃ³n, y ahora esa gracia ha alcanzado su plenitud en la gloria celestial. Ella es el ejemplo supremo de la acciÃ³n de Dios en una criatura.",
    prayer: "MarÃ­a, llena de gracia, llÃ©name de la gracia de Dios cada dÃ­a. AmÃ©n."
  },
  {
    day: 26,
    title: "La Madre del Divino Pastor",
    month: "Agosto",
    verse: {
      text: "Yo soy el buen pastor; el buen pastor da su vida por las ovejas.",
      reference: "Juan 10:11"
    },
    reflection: "MarÃ­a cuidÃ³ de JesÃºs, el Buen Pastor, y ahora ella misma pastorea a la Iglesia desde el cielo. Su amor maternal no tiene lÃ­mites.",
    prayer: "MarÃ­a, madre del Buen Pastor, cuida de la Iglesia y de todos sus hijos. AmÃ©n."
  },
  {
    day: 27,
    title: "La Victoria sobre la Muerte",
    month: "Agosto",
    verse: {
      text: "Â¡Oh muerte, dÃ³nde estÃ¡ tu victoria? Â¡Oh muerte, dÃ³nde estÃ¡ tu aguijÃ³n?",
      reference: "1 Corintios 15:55"
    },
    reflection: "La DormiciÃ³n de MarÃ­a es una victoria sobre la muerte. Ella fue liberada de la corrupciÃ³n mortal y asunta a la vida eterna.",
    prayer: "Cristo vencedor, que la victoria de MarÃ­a sobre la muerte fortalezca nuestra fe. AmÃ©n."
  },
  {
    day: 28,
    title: "El Consuelo de la Madre",
    month: "Agosto",
    verse: {
      text: "Como la madre consuela a su hijo, asÃ­ yo os consolarÃ©.",
      reference: "IsaÃ­as 66:13"
    },
    reflection: "MarÃ­a, desde el cielo, consuela a sus hijos con amor de madre. Ella nunca abandona a quienes la invocan.",
    prayer: "MarÃ­a, madre consoladora, sana mis heridas con tu amor maternal. AmÃ©n."
  },
  {
    day: 29,
    title: "La Promesa de la Gloria",
    month: "Agosto",
    verse: {
      text: "El que venciere, yo lo harÃ© pilar en el templo de mi Dios.",
      reference: "Apocalipsis 3:12"
    },
    reflection: "MarÃ­a fue fiel hasta el fin y recibiÃ³ la promesa de la gloria. Ella es pilar en el templo de Dios, testigo de la fidelidad divina.",
    prayer: "SeÃ±or, que seamos fieles como MarÃ­a para recibir la gloria prometida. AmÃ©n."
  },
  {
    day: 30,
    title: "La ComuniÃ³n de los Santos",
    month: "Agosto",
    verse: {
      text: "Creo en la comuniÃ³n de los santos.",
      reference: "Credo ApostÃ³lico"
    },
    reflection: "La asunciÃ³n de MarÃ­a nos recuerda que estamos unidos a los santos del cielo. La comuniÃ³n de los santos nos permite contar con la intercesiÃ³n de MarÃ­a y todos los santos.",
    prayer: "MarÃ­a, fortalece nuestra comuniÃ³n con los santos del cielo. AmÃ©n."
  },
  {
    day: 31,
    title: "La Ãšltima Palabra",
    month: "Agosto",
    verse: {
      text: "He aquÃ­, yo estoy con vosotros todos los dÃ­as, hasta el fin del mundo.",
      reference: "Mateo 28:20"
    },
    reflection: "MarÃ­a cierra el mes de agosto con su presencia maternal. Aunque fue asunta al cielo, ella sigue con nosotros, intercediendo y guiando a la Iglesia hasta el fin de los tiempos.",
    prayer: "MarÃ­a, madre fiel, quÃ©date conmigo y guÃ­a mis pasos en este nuevo mes. AmÃ©n."
  }

,   {
    day: 1,
    title: "El Primer Gozo: La Anunciación",
    month: "Septiembre",
    verse: { text: "Alégrate, llena de gracia, el Señor es contigo; bendita tú entre las mujeres.", reference: "Lucas 1:28" },
    reflection: "El primer gozo de María fue la Anunciación, cuando el ángel Gabriel le anunció que sería Madre de Dios. Este gozo es el inicio de nuestra salvación.",
    prayer: "María, que el gozo de la Anunciación llene mi corazón de alegría por la llegada del Salvador."
  },
  {
    day: 2,
    title: "El Segundo Gozo: La Visitación",
    month: "Septiembre",
    verse: { text: "En cuanto Isabel oyó el saludo de María, el hijo saltó en su seno.", reference: "Lucas 1:41" },
    reflection: "El segundo gozo fue la Visitación, cuando María visitó a Isabel y el niño Juan saltó de alegría en su vientre. El gozo de encontrar a Cristo se comparte.",
    prayer: "María, enséñame a compartir el gozo del Evangelio con los que me rodean."
  },
  {
    day: 3,
    title: "El Tercer Gozo: El Nacimiento de Jesús",
    month: "Septiembre",
    verse: { text: "Os doy una buena nueva de gran gozo: os ha nacido hoy en la ciudad de David un Salvador.", reference: "Lucas 2:10" },
    reflection: "El tercer gozo fue el nacimiento de Jesús en Belén. María sostuvo entre sus brazos al Redentor del mundo. La alegría de ver a Dios hecho niño fue indescriptible.",
    prayer: "María, madre del Niño Dios, que el gozo de tu Hijo naciente llene mi vida de esperanza."
  },
  {
    day: 4,
    title: "El Cuarto Gozo: La Adoración de los Pastores",
    month: "Septiembre",
    verse: { text: "Los pastores fueron apresuradamente y encontraron a María, a José y al niño acostado en el pesebre.", reference: "Lucas 2:16" },
    reflection: "El cuarto gozo fue ver a los pastores adorar al Niño Dios. María vio cómo los humildes reconocían al Salvador. El gozo se multiplica cuando se comparte.",
    prayer: "María, que el gozo de los pastores me enseñe a adorar a tu Hijo con sencillez."
  },
  {
    day: 5,
    title: "El Quinto Gozo: La Adoración de los Magos",
    month: "Septiembre",
    verse: { text: "Entrando en la casa, vieron al niño con María su madre, y postrándose lo adoraron.", reference: "Mateo 2:11" },
    reflection: "El quinto gozo fue la adoración de los Magos, que trajieron sus dones al Niño Rey. María vio cómo los pueblos venían de lejos a reconocer a Cristo.",
    prayer: "María, que los Magos me enseñen a buscar a Cristo con perseverancia y a ofrecerle lo mejor de mi vida."
  },
  {
    day: 6,
    title: "El Sexto Gozo: La Presentación en el Templo",
    month: "Septiembre",
    verse: { text: "Cuando se cumplieron los días de su purificación, llevaron a Jesús a Jerusalén para presentarlo al Señor.", reference: "Lucas 2:22" },
    reflection: "El sexto gozo fue la Presentación en el Templo, donde Simeón reconoció al Salvador. María experimentó el gozo de presentar a Dios al mundo.",
    prayer: "María, que el gozo de presentar a Jesús en el Templo me inspire a ofrecer mi vida a Dios cada día."
  },
  {
    day: 7,
    title: "El Séptimo Gozo: El Niño Jesús en el Templo",
    month: "Septiembre",
    verse: { text: "Lo buscaban entre los parientes y conocidos, y al no encontrarlo, se volvieron a Jerusalén buscándolo.", reference: "Lucas 2:44-45" },
    reflection: "El séptimo gozo fue encontrar a Jesús en el Templo, donde enseñaba a los doctores. Aunque fue un momento de angustia, el encuentro llenó de gozo el corazón de María.",
    prayer: "María, que el gozo de encontrar a Jesús en el Templo me enseñe a buscarlo siempre, especialmente en la oración y la Eucaristía."
  },
  {
    day: 8,
    title: "Los Siete Gozos de María",
    month: "Septiembre",
    verse: { text: "Alégrate, llena de gracia, el Señor es contigo.", reference: "Lucas 1:28" },
    reflection: "Los siete gozos de María son un camino de alegría espiritual que nos invita a contemplar los momentos más felices de su vida junto a Jesús.",
    prayer: "María, que los siete gozos de tu vida me llenen de alegría y me acerquen a tu Hijo."
  },
  {
    day: 9,
    title: "El Gozo de la Anunciación Profundizado",
    month: "Septiembre",
    verse: { text: "He aquí la sierva del Señor; hágase en mí según tu palabra.", reference: "Lucas 1:38" },
    reflection: "En la Anunciación, María recibió el gozo más grande: ser Madre de Dios. Su fiat fue un acto de fe absoluta que cambió la historia de la humanidad.",
    prayer: "María, que tu fiat me enseñe a decir sí a Dios con fe y generosidad."
  },
  {
    day: 10,
    title: "El Gozo de la Visitación Profundizado",
    month: "Septiembre",
    verse: { text: "Mi alma glorifica al Señor y mi espíritu se alegra en Dios mi Salvador.", reference: "Lucas 1:46-47" },
    reflection: "En la Visitación, María entonó el Magníficat, el cántico más hermoso de alabanza. Su gozo fue compartido con Isabel y con el niño Juan.",
    prayer: "María, enséñame a cantar como tú el Magníficat de la gratitud."
  },
  {
    day: 11,
    title: "El Gozo del Nacimiento Profundizado",
    month: "Septiembre",
    verse: { text: "María dio a luz a su hijo primogénito, y lo envolvió en pañales, y lo acostó en un pesebre.", reference: "Lucas 2:7" },
    reflection: "El nacimiento de Jesús fue el gozo más profundo de María. Ella sostuvo al creador del universo entre sus brazos, el Verbo eterno hecho niño.",
    prayer: "María, que el gozo de tu maternidad divina renueve mi amor por Jesús."
  },
  {
    day: 12,
    title: "El Gozo de la Adoración Profundizado",
    month: "Septiembre",
    verse: { text: "Los pastores volvieron glorificando y alabando a Dios por todo lo que habían oído y visto.", reference: "Lucas 2:20" },
    reflection: "Los pastores adoraron al Niño con sencillez y fe. María vio cómo los humildes reconocían en el pesebre al Rey de reyes.",
    prayer: "María, que la adoración de los pastores me enseñe a reconocer a Jesús en los más pequeños."
  },
  {
    day: 13,
    title: "El Gozo de los Magos Profundizado",
    month: "Septiembre",
    verse: { text: "Y abriendo sus cofres, le ofrecieron dones: oro, incienso y mirra.", reference: "Mateo 2:11" },
    reflection: "Los Magos ofrecieron a Jesús los mejores tesoros del mundo. María contempló cómo los reyes se postraban ante el Niño Dios.",
    prayer: "María, que los dones de los Magos me inspiren a ofrecer a Jesús lo mejor de mi vida."
  },
  {
    day: 14,
    title: "La Exaltación de la Cruz",
    month: "Septiembre",
    verse: { text: "Y cuando yo sea levantado de la tierra, a todos atraeré a mí mismo.", reference: "Juan 12:32" },
    reflection: "Hoy celebramos la Exaltación de la Santa Cruz. María estuvo al pie de la cruz, testigo del amor supremo de Jesús por la humanidad.",
    prayer: "María, que la cruz de tu Hijo sea para mí fuente de salvación y de esperanza."
  },
  {
    day: 15,
    title: "María, Madre de los Siete Gozos",
    month: "Septiembre",
    verse: { text: "Bendita tú entre las mujeres, y bendito el fruto de tu vientre.", reference: "Lucas 1:42" },
    reflection: "María es Madre de los Siete Gozos porque vivió cada momento de su vida con alegría y entrega a Dios. Ella nos enseña que la verdadera alegría viene de la fe.",
    prayer: "María, madre de los siete gozos, llena mi vida de alegría espiritual."
  },
  {
    day: 16,
    title: "El Gozo en medio del Dolor",
    month: "Septiembre",
    verse: { text: "Los que sembraban con lágrimas cosecharán con cánticos de alegría.", reference: "Salmo 126:5" },
    reflection: "María experimentó gozo y dolor en su vida. Los siete gozos incluyen momentos de prueba, pero siempre hubo fe y esperanza.",
    prayer: "María, que en medio de mis dolores encuentre el gozo de saber que Dios está conmigo."
  },
  {
    day: 17,
    title: "El Gozo de la Resurrección",
    month: "Septiembre",
    verse: { text: "No está aquí, porque ha resucitado, como dijo.", reference: "Mateo 28:6" },
    reflection: "El gozo más grande de María fue ver a su Hijo resucitado. La resurrección fue la victoria definitiva sobre la muerte y el pecado.",
    prayer: "María, que el gozo de la resurrección llene mi vida de esperanza."
  },
  {
    day: 18,
    title: "El Gozo de Pentecostés",
    month: "Septiembre",
    verse: { text: "Y se les aparecieron lenguas repartidas, como de fuego, que se posaron sobre cada uno de ellos.", reference: "Hechos 2:3" },
    reflection: "En Pentecostés, María recibió al Espíritu Santo junto a los apóstoles. El fuego del Espíritu trajo gozo y fuerza a la Iglesia naciente.",
    prayer: "Espíritu Santo, que descendiste sobre María, renueva en mí el gozo de la fe."
  },
  {
    day: 19,
    title: "El Gozo de la Asunción",
    month: "Septiembre",
    verse: { text: "Porque ha mirado la humildad de su sierva, y desde ahora me llamarán bienaventurada todas las generaciones.", reference: "Lucas 1:48" },
    reflection: "La Asunción de María fue el gozo definitivo: ella fue llevada al cielo en cuerpo y alma. Su vida terrenal culminó en la plenitud de la gloria.",
    prayer: "María, asunta al cielo, que tu gozo celestial nos dé la esperanza de la eternidad."
  },
  {
    day: 20,
    title: "El Gozo de la Coronación",
    month: "Septiembre",
    verse: { text: "Apareció en el cielo una gran señal: una mujer vestida de sol, con la luna bajo sus pies, y una corona de doce estrellas.", reference: "Apocalipsis 12:1" },
    reflection: "María fue coronada Reina de los cielos y de la tierra. Su corona es el fruto de una vida entera de fe, amor y obediencia.",
    prayer: "María, coronada de gloria, que tu gozo de Reina llene mi corazón de esperanza."
  },
  {
    day: 21,
    title: "El Gozo de la Intercesión",
    month: "Septiembre",
    verse: { text: "Oíd a mi palabra, escuchad mi ruego, prestad oído a mi clamor.", reference: "Salmo 17:1" },
    reflection: "María goza en el cielo intercediendo por nosotros. Ella presenta nuestras súplicas ante Dios y obtiene las gracias que necesitamos.",
    prayer: "María, que tu intercesión me acerque cada día más a Dios."
  },
  {
    day: 22,
    title: "El Gozo de la Comunión de los Santos",
    month: "Septiembre",
    verse: { text: "Creo en la comunión de los santos.", reference: "Credo Apostólico" },
    reflection: "La comunión de los santos nos une a María y a todos los santos del cielo. Este gozo nos recuerda que no estamos solos en nuestro caminar hacia Dios.",
    prayer: "María, fortalece nuestra comunión con los santos del cielo."
  },
  {
    day: 23,
    title: "El Gozo de la Oración",
    month: "Septiembre",
    verse: { text: "La oración constante del justo puede mucho en su eficacia.", reference: "Santiago 5:16" },
    reflection: "María encontró gozo en la oración. Desde el Magníficat hasta el Cenáculo, su vida fue un continuo diálogo con Dios.",
    prayer: "María, maestra de oración, enséñame a encontrar gozo en la oración."
  },
  {
    day: 24,
    title: "El Gozo del Servicio",
    month: "Septiembre",
    verse: { text: "El Hijo del Hombre no vino a ser servido, sino a servir.", reference: "Marcos 10:45" },
    reflection: "María encontró gozo en servir a los demás. Desde la Visitación hasta el Cenáculo, ella siempre estuvo disponible para los que necesitaban su ayuda.",
    prayer: "María, que el servicio a los demás sea fuente de gozo en mi vida."
  },
  {
    day: 25,
    title: "El Gozo de la Pureza",
    month: "Septiembre",
    verse: { text: "Bienaventurados los puros de corazón, porque ellos verán a Dios.", reference: "Mateo 5:8" },
    reflection: "María fue pura de corazón y por eso vio a Dios cara a cara. La pureza es camino de gozo porque nos acerca a Dios.",
    prayer: "María, madre de la pureza, que la pureza de mi corazón sea fuente de gozo."
  },
  {
    day: 26,
    title: "El Gozo de la Fe",
    month: "Septiembre",
    verse: { text: "Bienaventurados los que no han visto y han creído.", reference: "Juan 20:29" },
    reflection: "María creyó sin ver para creer. Su fe fue la fuente de su gozo más profundo. La fe nos permite ver a Dios donde otros solo ven oscuridad.",
    prayer: "María, que tu fe me enseñe a creer sin ver y a encontrar gozo en la presencia de Dios."
  },
  {
    day: 27,
    title: "El Gozo de la Esperanza",
    month: "Septiembre",
    verse: { text: "Los que esperan en el Señor renovarán sus fuerzas.", reference: "Isaías 40:31" },
    reflection: "María esperó con fe la resurrección de su Hijo. La esperanza es fuente de gozo porque nos asegura que Dios siempre cumple sus promesas.",
    prayer: "María, madre de la esperanza, que la esperanza en Dios sea fuente de gozo en mi vida."
  },
  {
    day: 28,
    title: "El Gozo del Amor",
    month: "Septiembre",
    verse: { text: "El amor es paciente, es bondadoso; no es envidioso ni vanidoso ni soberbio.", reference: "1 Corintios 13:4" },
    reflection: "María amó a Dios y a los hombres con un amor puro y total. El amor es la fuente de todo gozo verdadero.",
    prayer: "María, que tu amor me enseñe a amar como Dios ama y a encontrar gozo en el amor."
  },
  {
    day: 29,
    title: "El Gozo de la Eternidad",
    month: "Septiembre",
    verse: { text: "Yo soy la resurrección y la vida; el que cree en mí vivirá.", reference: "Juan 11:25" },
    reflection: "El gozo definitivo de María es la eternidad con Dios. Ella nos promete que si la seguimos, llegaremos a la plenitud del gozo celestial.",
    prayer: "María, que el gozo de la eternidad sea mi meta suprema y mi esperanza más firme."
  },
  {
    day: 30,
    title: "Los Siete Gozos: Un Camino de Alegría",
    month: "Septiembre",
    verse: { text: "Os he dicho estas cosas para que mi alegría esté en vosotros, y vuestra alegría sea completa.", reference: "Juan 15:11" },
    reflection: "Al concluir este mes, recordamos que los siete gozos de María son un camino de alegría espiritual que nos acerca a Cristo. Cada gozo es una invitación a vivir la fe con alegría.",
    prayer: "María, que los siete gozos de tu vida sean mi guía en el camino de la alegría espiritual."
  }

,   {
    day: 1,
    title: "El Rosario: Oración de María",
    month: "Octubre",
    verse: { text: "Rezo yo al Señor, que es digno de alabanza, y fui salvo de mis enemigos.", reference: "Salmo 18:4" },
    reflection: "Octubre es el mes del Rosario. Esta oración es el cetro de amor de María, el arma más poderosa contra el mal. En cada Ave María elevamos nuestra voz junto con la de María.",
    prayer: "María, reina del Rosario, enséñame a valorar esta oración tan poderosa y a encontrar en ella la fuerza espiritual."
  },
  {
    day: 2,
    title: "Los Misterios Gozosos",
    month: "Octubre",
    verse: { text: "Alégrate, llena de gracia, el Señor es contigo.", reference: "Lucas 1:28" },
    reflection: "Los misterios gozosos nos invitan a contemplar los primeros momentos de la vida de Jesús y María. Son una escuela de fe y de alegría espiritual.",
    prayer: "María, que los misterios gozosos me llenen de alegría por la venida de tu Hijo al mundo."
  },
  {
    day: 3,
    title: "La Anunciación en el Rosario",
    month: "Octubre",
    verse: { text: "He aquí la sierva del Señor; hágase en mí según tu palabra.", reference: "Lucas 1:38" },
    reflection: "En el primer misterio gozoso contemplamos la Anunciación. María nos enseña a decir sí a Dios con fe y generosidad.",
    prayer: "María, que el misterio de la Anunciación me enseñe a acoger la voluntad de Dios en mi vida."
  },
  {
    day: 4,
    title: "La Visitación en el Rosario",
    month: "Octubre",
    verse: { text: "En cuanto Isabel oyó el saludo de María, el hijo saltó en su seno.", reference: "Lucas 1:41" },
    reflection: "En el segundo misterio gozoso contemplamos la Visitación. María nos enseña a compartir el gozo del Evangelio con los demás.",
    prayer: "María, que el misterio de la Visitación me inspire a servir a los demás con amor."
  },
  {
    day: 5,
    title: "El Nacimiento de Jesús en el Rosario",
    month: "Octubre",
    verse: { text: "Os doy una buena nueva de gran gozo: os ha nacido hoy un Salvador.", reference: "Lucas 2:10" },
    reflection: "En el tercer misterio gozoso contemplamos el Nacimiento de Jesús. María nos enseña la humildad de Dios que se hace niño por amor.",
    prayer: "María, que el misterio del Nacimiento renueve mi amor por Jesús."
  },
  {
    day: 6,
    title: "La Presentación en el Templo en el Rosario",
    month: "Octubre",
    verse: { text: "Cuando se cumplieron los días de su purificación, llevaron a Jesús a Jerusalén.", reference: "Lucas 2:22" },
    reflection: "En el cuarto misterio gozoso contemplamos la Presentación en el Templo. María nos enseña a ofrecer nuestra vida a Dios.",
    prayer: "María, que el misterio de la Presentación me inspire a ofrecer mi vida a Dios cada día."
  },
  {
    day: 7,
    title: "El Encuentro en el Templo en el Rosario",
    month: "Octubre",
    verse: { text: "Lo buscaban entre los parientes y conocidos, y al no encontrarlo, se volvieron a Jerusalén.", reference: "Lucas 2:44-45" },
    reflection: "En el quinto misterio gozoso contemplamos a Jesús entre los doctores. María nos enseña a buscar a Jesús con perseverancia.",
    prayer: "María, que el misterio del Encuentro en el Templo me enseñe a buscar a Cristo en la oración y la Eucaristía."
  },
  {
    day: 8,
    title: "Los Misterios Dolorosos",
    month: "Octubre",
    verse: { text: "Junto a la cruz de Jesús estaba su madre.", reference: "Juan 19:25" },
    reflection: "Los misterios dolorosos nos invitan a contemplar el sufrimiento de Jesús y de María. Son una escuela de entrega y de amor en la cruz.",
    prayer: "María, que los misterios dolorosos me enseñen a unir mis sufrimientos a los de tu Hijo."
  },
  {
    day: 9,
    title: "La Oración del Huerto en el Rosario",
    month: "Octubre",
    verse: { text: "Padre mío, si es posible, pase de mí este cáliz; pero no se haga mi voluntad, sino la tuya.", reference: "Mateo 26:39" },
    reflection: "En el primer misterio doloroso contemplamos la oración de Jesús en el Huerto. María también oraba en silencio, sosteniendo a su Hijo con su amor.",
    prayer: "María, que el misterio del Huerto me enseñe a aceptar la voluntad de Dios."
  },
  {
    day: 10,
    title: "La Flagelación en el Rosario",
    month: "Octubre",
    verse: { text: "Entonces Pilato tomó a Jesús y lo mandó azotar.", reference: "Juan 19:1" },
    reflection: "En el segundo misterio doloroso contemplamos la Flagelación de Jesús. María sufrió en silencio el dolor de su Hijo.",
    prayer: "María, que el misterio de la Flagelación me enseñ a ofrecer mis sufrimientos por amor."
  },
  {
    day: 11,
    title: "La Coronación de Espinas en el Rosario",
    month: "Octubre",
    verse: { text: "Los soldados trenzaron una corona de espinas y se la pusieron en su cabeza.", reference: "Juan 19:2" },
    reflection: "En el tercer misterio doloroso contemplamos la Coronación de Espinas. Jesús fue insultado y María sufrió con él cada burla.",
    prayer: "María, que el misterio de la Coronación de Espinas me enseñ a soportar las burlas por la fe."
  },
  {
    day: 12,
    title: "La Cruz a Cuestas en el Rosario",
    month: "Octubre",
    verse: { text: "Y cargando con su cruz, salió hacia el lugar que llaman Calvario.", reference: "Juan 19:17" },
    reflection: "En el cuarto misterio doloroso contemplamos a Jesús cargando la cruz. María lo acompañó en silencio, compartiendo su dolor de madre.",
    prayer: "María, que el misterio de la Cruz a Cuestas me enseñe a llevar mi cruz con amor."
  },
  {
    day: 13,
    title: "La Crucifixión en el Rosario",
    month: "Octubre",
    verse: { text: "Junto a la cruz de Jesús estaba su madre.", reference: "Juan 19:25" },
    reflection: "En el quinto misterio doloroso contemplamos la Crucifixión de Jesús. María estuvo al pie de la cruz, testigo del amor supremo.",
    prayer: "María, que el misterio de la Crucifixión me enseñ a amar como Jesús nos amó."
  },
  {
    day: 14,
    title: "Los Misterios Gloriosos",
    month: "Octubre",
    verse: { text: "No está aquí, porque ha resucitado, como dijo.", reference: "Mateo 28:6" },
    reflection: "Los misterios gloriosos nos invitan a contemplar la gloria de Jesús y de María. Son una escuela de esperanza y de alegría por la salvación.",
    prayer: "María, que los misterios gloriosos me llenen de esperanza en la resurrección."
  },
  {
    day: 15,
    title: "La Resurrección en el Rosario",
    month: "Octubre",
    verse: { text: "No está aquí, porque ha resucitado, como dijo.", reference: "Mateo 28:6" },
    reflection: "En el primer misterio glorioso contemplamos la Resurrección de Jesús. María fue la primera en creer y la primera en contemplar al Resucitado.",
    prayer: "María, que el misterio de la Resurrección llene mi vida de esperanza."
  },
  {
    day: 16,
    title: "La Ascensión en el Rosario",
    month: "Octubre",
    verse: { text: "Y cuando los bendecía, se alejó de ellos y fue elevado al cielo.", reference: "Lucas 24:51" },
    reflection: "En el segundo misterio glorioso contemplamos la Ascensión de Jesús. María contempló cómo su Hijo subía al cielo para preparar un lugar para nosotros.",
    prayer: "María, que el misterio de la Ascensión me recuerde que nuestra patria es el cielo."
  },
  {
    day: 17,
    title: "La Venida del Espíritu Santo en el Rosario",
    month: "Octubre",
    verse: { text: "Y se les aparecieron lenguas repartidas, como de fuego.", reference: "Hechos 2:3" },
    reflection: "En el tercer misterio glorioso contemplamos Pentecostés. María recibió al Espíritu Santo y fue Madre de la Iglesia naciente.",
    prayer: "Espíritu Santo, que descendiste sobre María, renueva en mí el don de la vida nueva."
  },
  {
    day: 18,
    title: "La Asunción en el Rosario",
    month: "Octubre",
    verse: { text: "Porque ha mirado la humildad de su sierva, y desde ahora me llamarán bienaventurada todas las generaciones.", reference: "Lucas 1:48" },
    reflection: "En el cuarto misterio glorioso contemplamos la Asunción de María. Ella fue llevada al cielo en cuerpo y alma como premio a su fidelidad.",
    prayer: "María, asunta al cielo, que tu Asunción me dé la esperanza de la eternidad."
  },
  {
    day: 19,
    title: "La Coronación de María en el Rosario",
    month: "Octubre",
    verse: { text: "Apareció en el cielo una gran señal: una mujer vestida de sol, con la luna bajo sus pies, y una corona de doce estrellas.", reference: "Apocalipsis 12:1" },
    reflection: "En el quinto misterio glorioso contemplamos la Coronación de María como Reina. Ella fue exaltada sobre todas las criaturas.",
    prayer: "María, coronada de gloria, que tu coronación me recuerde que también estamos llamados a la gloria."
  },
  {
    day: 20,
    title: "El Rosario: Arma Poderosa",
    month: "Octubre",
    verse: { text: "En todo lugar donde yo haga memoria de ti, yo te haré llover bendiciones.", reference: "Éxodo 20:24" },
    reflection: "El Rosario es el arma más poderosa que María nos ha dado. En cada misterio meditamos la vida de Jesús y María, y en cada Ave María elevamos nuestra oración al cielo.",
    prayer: "Virgen del Rosario, arma poderosa contra todas las fuerzas del mal, que tu intercesión nos proteja."
  },
  {
    day: 21,
    title: "El Rosario en Familia",
    month: "Octubre",
    verse: { text: "En vuestra casa no se apagará la lámpara ni se secará la mecha del candelero.", reference: "2 Reyes 4:33" },
    reflection: "María pidió que el Rosario se rezara en familia, porque la familia es la célula fundamental de la Iglesia. La oración en familia fortalece los lazos.",
    prayer: "María, que nos pides rezar el Rosario en familia, fortalece nuestros hogares con tu presencia."
  },
  {
    day: 22,
    title: "El Rosario como Meditación",
    month: "Octubre",
    verse: { text: "María guardaba todas estas cosas, meditándolas en su corazón.", reference: "Lucas 2:19" },
    reflection: "El Rosario es una meditación de la vida de Jesús y María. Como María, meditamos los misterios de nuestra fe en silencio y en oración.",
    prayer: "María, que el Rosario sea mi medio de meditación de los misterios de la fe."
  },
  {
    day: 23,
    title: "El Rosario y la Conversión",
    month: "Octubre",
    verse: { text: "Arrepentíos y convertíos, para que sean borrados vuestros pecados.", reference: "Hechos 3:19" },
    reflection: "El Rosario es instrumento de conversión. En cada misterio nos convertimos a Dios y renovamos nuestro compromiso de seguir a Cristo.",
    prayer: "María, que el Rosario sea instrumento de conversión en mi vida y en la del mundo."
  },
  {
    day: 24,
    title: "El Rosario y la Paz",
    month: "Octubre",
    verse: { text: "La paz os dejo; mi paz os doy.", reference: "Juan 14:27" },
    reflection: "El Rosario trae la paz al corazón y al mundo. María prometió en Fátima que el Rosario traería la paz si se rezaba con fe.",
    prayer: "María, reina de la paz, que el Rosario traiga la paz a mi corazón y al mundo entero."
  },
  {
    day: 25,
    title: "El Rosario y la Protección",
    month: "Octubre",
    verse: { text: "Bajo sus alas encontrarás refugio; su fidelidad es escudo y armadura.", reference: "Salmo 91:4" },
    reflection: "El Rosario es un escudo de protección contra el mal. María protege a quienes lo rezan con fe y devoción.",
    prayer: "María, que el Rosario sea mi escudo de protección contra todo mal."
  },
  {
    day: 26,
    title: "El Rosario y la Eucaristía",
    month: "Octubre",
    verse: { text: "El que come mi carne y bebe mi sangre tiene vida eterna.", reference: "Juan 6:54" },
    reflection: "El Rosario nos prepara para recibir a Cristo en la Eucaristía. Cada misterio nos acerca al corazón de Jesús y nos dispone a recibirlo.",
    prayer: "María, que el Rosario me prepare para recibir a tu Hijo en la Eucaristía."
  },
  {
    day: 27,
    title: "El Rosario y la Misericordia",
    month: "Octubre",
    verse: { text: "Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia.", reference: "Mateo 5:7" },
    reflection: "El Rosario es una oración de misericordia. En cada misterio contemplamos el amor misericordioso de Dios por los hombres.",
    prayer: "María, que el Rosario me enseñ a ser misericordioso como Dios lo es conmigo."
  },
  {
    day: 28,
    title: "El Rosario y la Santa Muerte",
    month: "Octubre",
    verse: { text: "Los que sembraban con lágrimas cosecharán con cánticos de alegría.", reference: "Salmo 126:5" },
    reflection: "María pidió que se rezara el Rosario para obtener una buena muerte. Esta devoción nos prepara para el último paso hacia la eternidad.",
    prayer: "María, que el Rosario me prepare para una buena muerte y me acompañe en el último paso."
  },
  {
    day: 29,
    title: "El Rosario y los Santos",
    month: "Octubre",
    verse: { text: "Así que nosotros, rodeados de tan grande nube de testigos.", reference: "Hebreos 12:1" },
    reflection: "Los santos son fruto del Rosario y de la devoción mariana. Ellos nos muestran que la santidad es posible para todos.",
    prayer: "María, que el Rosario me acerque a los santos y me inspire a seguir sus huellas."
  },
  {
    day: 30,
    title: "El Rosario y la Evangelización",
    month: "Octubre",
    verse: { text: "Id por todo el mundo y haced discípulos a todas las naciones.", reference: "Mateo 28:19" },
    reflection: "El Rosario es instrumento de evangelización. En cada misterio proclamamos las grandes obras de Dios y las compartimos con el mundo.",
    prayer: "María, que el Rosario sea instrumento de evangelización en mis manos."
  },
  {
    day: 31,
    title: "El Rosario: Un Camino de Santidad",
    month: "Octubre",
    verse: { text: "Sed santos, porque yo soy santo.", reference: "1 Pedro 1:16" },
    reflection: "Al concluir el mes del Rosario, recordamos que esta oración es un camino de santidad. Cada misterio nos acerca a Dios y nos transforma en Cristo.",
    prayer: "María, que el Rosario sea mi camino de santidad y me acerque cada día más a tu Hijo."
  }

, {
    day: 1,
    title: "Todos los Santos: La Gloria de los Elegidos",
    month: "Noviembre",
    verse: {
      text: "Bienaventurados los pobres de espÃ­ritu, porque de ellos es el Reino de los cielos.",
      reference: "Mateo 5:3"
    },
    reflection: "Hoy celebramos a todos los santos que ya gozan de la presencia de Dios. MarÃ­a, Madre de todos los santos, nos recuerda que cada uno de nosotros estÃ¡ llamado a la santidad, siguiendo su ejemplo de fe y obediencia.",
    prayer: "Madre MarÃ­a, intercede por nosotros ante tu Hijo, para que un dÃ­a tambiÃ©n gocemos de la gloria eterna junto a todos los santos."
  },
  {
    day: 2,
    title: "Los Fieles Difuntos: OraciÃ³n por los que Partieron",
    month: "Noviembre",
    verse: {
      text: "Yo soy la resurrecciÃ³n y la vida; el que cree en mÃ­ vivirÃ¡, aunque haya muerto.",
      reference: "Juan 11:25"
    },
    reflection: "La Iglesia nos invita a orar por las almas del purgatorio, que esperan alcanzar la visiÃ³n de Dios. MarÃ­a, que tambiÃ©n sufriÃ³ la pÃ©rdida de JesÃºs, comprende nuestro dolor y nos acompaÃ±a en la oraciÃ³n por nuestros seres queridos.",
    prayer: "MarÃ­a, Reina de los Cielos, acoge en tu corazÃ³n a los fieles difuntos y obtÃ©n para ellos el descanso eterno."
  },
  {
    day: 3,
    title: "San MartÃ­n de Porres: Humildad y Servicio",
    month: "Noviembre",
    verse: {
      text: "El que quiera ser el primero, que sea el Ãºltimo de todos y el servidor de todos.",
      reference: "Marcos 9:35"
    },
    reflection: "San MartÃ­n de Porres nos enseÃ±Ã³ que la santidad se encuentra en el servicio humilde a los demÃ¡s. Como MarÃ­a, que se llamÃ³ a sÃ­ misma 'sierva del SeÃ±or', MartÃ­n viviÃ³ entregado a los mÃ¡s pobres con amor y dedicaciÃ³n.",
    prayer: "SeÃ±or, danos la humildad de San MartÃ­n y el corazÃ³n servicial de MarÃ­a para reconocer tu rostro en cada hermano necesitado."
  },
  {
    day: 4,
    title: "La ComuniÃ³n de Santos: Unidos en Cristo",
    month: "Noviembre",
    verse: {
      text: "Pues aunque somos muchos, formamos un solo cuerpo en Cristo, y cada uno es miembro de los demÃ¡s.",
      reference: "Romanos 12:5"
    },
    reflection: "La comuniÃ³n de Santos nos recuerda que no estamos solos en nuestro caminar hacia Dios. MarÃ­a, como cabeza de esta comuniÃ³n despuÃ©s de Cristo, nos une a todos los fieles de la tierra, del purgatorio y del cielo.",
    prayer: "Madre de la Iglesia, fortalece nuestra uniÃ³n con los santos y ayÃºdanos a caminar juntos hacia el Reino de Dios."
  },
  {
    day: 5,
    title: "Santa Teresa de Ãvila: El Camino de la OraciÃ³n",
    month: "Noviembre",
    verse: {
      text: "La oraciÃ³n no es mÃ¡s que una conversaciÃ³n Ã­ntima de amistad con Dios.",
      reference: "Santa Teresa de Ãvila"
    },
    reflection: "Santa Teresa de JesÃºs nos enseÃ±Ã³ que la oraciÃ³n es el camino para encontrarse con Dios. MarÃ­a, que meditaba el corazÃ³n de Dios, nos invita a cultivar una vida de oraciÃ³n constante y sincera.",
    prayer: "Santa MarÃ­a, Madre de Dios, ensÃ©Ã±anos a orar como TÃº lo hiciste, con humildad, amor y confianza en la voluntad del Padre."
  },
  {
    day: 6,
    title: "San Carlos Borromeo: Pastor de Almas",
    month: "Noviembre",
    verse: {
      text: "Pastoread la grey de Dios que os ha sido encomendada, cuidando de ella no por obligaciÃ³n, sino espontÃ¡neamente.",
      reference: "1 Pedro 5:2"
    },
    reflection: "San Carlos Borromeo entregÃ³ su vida al servicio de las almas con caridad y celo pastoral. MarÃ­a, que tambiÃ©n cuidÃ³ del pueblo de Dios, nos recuerda la importancia de cuidar a los mÃ¡s vulnerables.",
    prayer: "MarÃ­a, Madre de los pastores, intercede por la Iglesia para que tenga pastores santos que guÃ­en al pueblo fiel."
  },
  {
    day: 7,
    title: "Santos NiÃ±os de la Guardia: Inocencia y Fe",
    month: "Noviembre",
    verse: {
      text: "Dejad a los niÃ±os venir a mÃ­, porque de ellos es el Reino de los cielos.",
      reference: "Mateo 19:14"
    },
    reflection: "Los Santos NiÃ±os de FÃ¡tima nos muestran que la santidad no tiene edad. MarÃ­a eligiÃ³ a unos pastorcitos para transmitir su mensaje de paz, recordÃ¡ndonos que Dios se comunica con los humildes y sencillos.",
    prayer: "MarÃ­a, Estrella de la EvangelizaciÃ³n, protege a los niÃ±os del mundo y ayÃºdanos a recibir tu mensaje con corazÃ³n puro."
  },
  {
    day: 8,
    title: "Todos los Santos: Ejemplo para la Vida",
    month: "Noviembre",
    verse: {
      text: "Sed imitadores de Dios, como hijos amados.",
      reference: "Efesios 5:1"
    },
    reflection: "Cada santo es un ejemplo de cÃ³mo vivir la fe en diferentes circunstancias. MarÃ­a, la SantÃ­sima, es el modelo supremo de santidad para todos los tiempos y culturas.",
    prayer: "Madre de todos los santos, inspira en nosotros el deseo de seguir tus huellas y las de los santos hacia la plenitud de la vida en Cristo."
  },
  {
    day: 9,
    title: "Los Santos de las AmÃ©ricas: Fe y Cultura",
    month: "Noviembre",
    verse: {
      text: "En Dios confÃ­o, no temerÃ©; Â¿quÃ© me pueden hacer los hombres?",
      reference: "Salmo 56:11"
    },
    reflection: "Los santos de las AmÃ©ricas nos muestran cÃ³mo la fe se encarna en diferentes culturas. MarÃ­a, que tambiÃ©n vive en mÃºltiples expresiones culturales, nos une a todos en una sola fe.",
    prayer: "MarÃ­a de las AmÃ©ricas, que eres celebrada desde el RÃ­o Grande hasta la Patagonia, fortalece nuestra fe y uniÃ³n como pueblo de Dios."
  },
  {
    day: 10,
    title: "San LeÃ³n Magno: La Defensa de la Fe",
    month: "Noviembre",
    verse: {
      text: "Ama a Dios y harÃ¡s lo que Ã‰l quiera.",
      reference: "San AgustÃ­n"
    },
    reflection: "San LeÃ³n Magno defendiÃ³ la fe cristiana con sabidurÃ­a y valentÃ­a. MarÃ­a, que guardaba todas estas cosas en su corazÃ³n, nos enseÃ±a a custodiar la fe que hemos recibido.",
    prayer: "MarÃ­a, Sede de la SabidurÃ­a, ilumina a la Iglesia para que mantenga pura la fe transmitida por los ApÃ³stoles y los Santos Padres."
  },
  {
    day: 11,
    title: "San MartÃ­n de Tours: La Caridad en AcciÃ³n",
    month: "Noviembre",
    verse: {
      text: "El que tiene dos tunas, dÃ© al que no tiene; el que tiene comida, haga lo mismo.",
      reference: "Lucas 3:11"
    },
    reflection: "San MartÃ­n de Tours compartiÃ³ su capa con un pobre, cumpliendo asÃ­ el mandamiento del amor. MarÃ­a, que acogiÃ³ a JesÃºs en su vientre, nos invita a acoger a Cristo en los mÃ¡s necesitados.",
    prayer: "SeÃ±or, que la caridad de San MartÃ­n ilumine nuestro corazÃ³n para reconocer a JesÃºs en cada hermano que sufre."
  },
  {
    day: 12,
    title: "San JosÃ©: Padre Protector de la Sagrada Familia",
    month: "Noviembre",
    verse: {
      text: "No temas recibir a MarÃ­a tu esposa, porque lo que ha engendrado en ella viene del EspÃ­ritu Santo.",
      reference: "Mateo 1:20"
    },
    reflection: "San JosÃ© nos muestra cÃ³mo servir a Dios con obediencia y amor. Junto a MarÃ­a, formaron el hogar perfecto donde creciÃ³ JesÃºs, modelo de toda familia cristiana.",
    prayer: "San JosÃ©, padre putativo de JesÃºs, intercede por las familias del mundo para que sean santas y vivan en la paz de Cristo."
  },
  {
    day: 13,
    title: "San CristÃ³bal: El Santo del Camino",
    month: "Noviembre",
    verse: {
      text: "El que quiera ir conmigo, que tome su cruz y me siga.",
      reference: "Mateo 16:24"
    },
    reflection: "San CristÃ³bal nos protege en los viajes y nos recuerda que Cristo es el camino hacia el Padre. MarÃ­a, que acompaÃ±Ã³ a JesÃºs desde BelÃ©n hasta el Calvario, nos guÃ­a en nuestro peregrinar terrenal.",
    prayer: "MarÃ­a, Estrella del Camino, protÃ©genos en todos nuestros viajes y guÃ­anos siempre hacia tu Hijo JesÃºs."
  },
  {
    day: 14,
    title: "San AgustÃ­n: La BÃºsqueda de Dios",
    month: "Noviembre",
    verse: {
      text: "Inquieto estÃ¡ nuestro corazÃ³n hasta que descanse en Ti.",
      reference: "San AgustÃ­n"
    },
    reflection: "San AgustÃ­n descubriÃ³ que solo Dios puede llenar el corazÃ³n humano. MarÃ­a, que encontrÃ³ la plenitud en Dios, nos invita a buscarlo con el mismo ardor que el obispo de Hipona.",
    prayer: "Madre del Verbo, ayuda a todos los que buscan a Dios a encontrar el descanso en tu Hijo JesÃºs."
  },
  {
    day: 15,
    title: "Santa Margarita de Cortona: El Amor Misericordioso",
    month: "Noviembre",
    verse: {
      text: "Bienaventurados los misericordiosos, porque ellos alcanzarÃ¡n misericordia.",
      reference: "Mateo 5:7"
    },
    reflection: "Santa Margarita de Cortona experimentÃ³ la misericordia de Dios y la compartiÃ³ con los demÃ¡s. MarÃ­a, que es Madre de Misericordia, nos enseÃ±a que el amor perdonador es el camino de la salvaciÃ³n.",
    prayer: "MarÃ­a, Madre de Misericordia, que tu corazÃ³n compasivo nos inspire a perdonar y ser instrumentos de paz."
  },
  {
    day: 16,
    title: "La SantÃ­sima Virgen y los Santos: IntercesiÃ³n",
    month: "Noviembre",
    verse: {
      text: "OÃ­d a mi palabra, escuchad mi ruego, prestad oÃ­do a mi clamor.",
      reference: "Salmo 17:1"
    },
    reflection: "Los santos interceden por nosotros ante Dios, y MarÃ­a es la intercesora por excelencia. Cuando oramos a los santos, no los adoramos, sino que les pedimos que presenten nuestras sÃºplicas al SeÃ±or.",
    prayer: "SantÃ­sima MarÃ­a, que tu intercesiÃ³n poderosa obtenga para nosotros todas las gracias necesarias para vivir y morir en la fe."
  },
  {
    day: 17,
    title: "San Eligio: El Santo de los Artesanos",
    month: "Noviembre",
    verse: {
      text: "Trabajad de buena gana, como para el SeÃ±or y no para los hombres.",
      reference: "Colosenses 3:23"
    },
    reflection: "San Eligio dedicÃ³ su talento al servicio de Dios y de los demÃ¡s. MarÃ­a, que trabajÃ³ en la crianza de JesÃºs, santificÃ³ el trabajo humano con su ejemplo de dedicaciÃ³n y amor.",
    prayer: "MarÃ­a, que trabajaste humildemente en Nazaret, bendice el trabajo de todos los artesanos y trabajadores."
  },
  {
    day: 18,
    title: "Dedicatoria de las BasÃ­licas de los Santos ApÃ³stoles",
    month: "Noviembre",
    verse: {
      text: "Vosotros sois la luz del mundo; no puede ocultarse una ciudad situada sobre un monto.",
      reference: "Mateo 5:14"
    },
    reflection: "Los apÃ³stoles fueron la base de la Iglesia, y sus tumbas son lugares de peregrinaciÃ³n. MarÃ­a, que estuvo presente con los apÃ³stoles en el CenÃ¡culo, es la Madre que guÃ­a a la Iglesia naciente.",
    prayer: "Madre de los apÃ³stoles, que la memoria de sus tumbas nos recuerde el compromiso de ser testigos de Cristo en el mundo."
  },
  {
    day: 19,
    title: "Santa Isabel de HungrÃ­a: La Caridad Organizada",
    month: "Noviembre",
    verse: {
      text: "En verdad os digo, cada vez que hicisteis esto a uno de estos mis hermanos mÃ¡s pequeÃ±os, lo hicisteis a mÃ­.",
      reference: "Mateo 25:40"
    },
    reflection: "Santa Isabel organizÃ³ la caridad para atender a los enfermos y pobres. MarÃ­a, que visitÃ³ a Isabel y sirviÃ³ a los necesitados, nos inspira a ser manos activas del amor de Cristo.",
    prayer: "Santa MarÃ­a, que tu ejemplo de servicio inspire a las mujeres del mundo a entregar su vida por amor a los demÃ¡s."
  },
  {
    day: 20,
    title: "San FelicÃ­simo: La Fe en la PersecuciÃ³n",
    month: "Noviembre",
    verse: {
      text: "Si el mundo los persigue, acordaos de que a mÃ­ me persiguiÃ³ primero.",
      reference: "Juan 15:20"
    },
    reflection: "Los mÃ¡rtires como San FelicÃ­simo dieron su vida por la fe sin miedo. MarÃ­a, que estuvo al pie de la Cruz, nos enseÃ±a a perseverar en la persecuciÃ³n con fortaleza y esperanza.",
    prayer: "Madre de los mÃ¡rtires, fortalece a los cristianos que sufren persecuciÃ³n en el mundo y mantenlos firmes en la fe."
  },
  {
    day: 21,
    title: "PresentaciÃ³n de la SantÃ­sima Virgen: El Templo de Dios",
    month: "Noviembre",
    verse: {
      text: "Mi alma glorifica al SeÃ±or y mi espÃ­ritu se alegra en Dios mi Salvador.",
      reference: "Lucas 1:46-47"
    },
    reflection: "La PresentaciÃ³n de MarÃ­a en el Templo nos muestra su dedicaciÃ³n total a Dios desde niÃ±a. MarÃ­a, ofrecida al SeÃ±or, nos invita a consagrar nuestra vida a Dios con alegrÃ­a y generosidad.",
    prayer: "SantÃ­sima MarÃ­a, que tuPresentaciÃ³n sea ejemplo de entrega total a Dios para todos los que te amamos."
  },
  {
    day: 22,
    title: "Santa Cecilia: La MÃºsica como OraciÃ³n",
    month: "Noviembre",
    verse: {
      text: "Cantad al SeÃ±or un cÃ¡ntico nuevo, cantad al SeÃ±or toda la tierra.",
      reference: "Salmo 96:1"
    },
    reflection: "Santa Cecilia cantaba a Dios mientras su corazÃ³n palpita de amor por Cristo. MarÃ­a, que entonÃ³ el MagnÃ­ficat, nos enseÃ±a que la mÃºsica puede ser una expresiÃ³n privilegiada de la alabanza divina.",
    prayer: "MarÃ­a, que tu cÃ¡ntico de alabanza resuene en nuestros corazones y nos inspire a glorificar a Dios con alegrÃ­a."
  },
  {
    day: 23,
    title: "San Clemente: La Autoridad Servicial",
    month: "Noviembre",
    verse: {
      text: "El Hijo del Hombre no vino a ser servido, sino a servir y dar su vida en rescate por muchos.",
      reference: "Marcos 10:45"
    },
    reflection: "San Clemente ejerciÃ³ su autoridad al servicio de la comunidad cristiana. MarÃ­a, que fue Reina sin dejar de ser sierva, nos muestra que el poder verdadero se ejerce sirviendo.",
    prayer: "Madre de la Iglesia, que los lÃ­deres de la comunidad cristiana sigan tu ejemplo de servicio humilde y amoroso."
  },
  {
    day: 24,
    title: "San Juan de la Cruz: La Noche Oscura del Alma",
    month: "Noviembre",
    verse: {
      text: "En un noche oscura, con ansias, en amores inflamada, Â¡oh dichosa ventura!, salÃ­ sin ser notada, estando ya mi casa sosegada.",
      reference: "San Juan de la Cruz"
    },
    reflection: "San Juan de la Cruz nos enseÃ±Ã³ que las pruebas espirituales purifican el alma. MarÃ­a, que tambiÃ©n viviÃ³ noches oscuras, nos acompaÃ±a en nuestra bÃºsqueda de Dios incluso en la oscuridad.",
    prayer: "MarÃ­a, Madre de la ConsolaciÃ³n, que tu presencia ilumine las noches oscuras de nuestra vida espiritual."
  },
  {
    day: 25,
    title: "Santa Catalina de AlejandrÃ­a: La SabidurÃ­a de la Fe",
    month: "Noviembre",
    verse: {
      text: "Dad testimonio con sabidurÃ­a ante los gentiles.",
      reference: "Colosenses 4:5"
    },
    reflection: "Santa Catalina defendiÃ³ la fe con sabidurÃ­a y valentÃ­a ante los sabios del mundo. MarÃ­a, que meditaba las palabras de Dios, nos invita a conocer y defender nuestra fe con razones.",
    prayer: "MarÃ­a, Sede de la SabidurÃ­a, que tu Hijo nos conceda la sabidurÃ­a para defender la fe con amor y respeto."
  },
  {
    day: 26,
    title: "San Leonardo de Noblat: La LiberaciÃ³n de los Cautivos",
    month: "Noviembre",
    verse: {
      text: "El EspÃ­ritu del SeÃ±or estÃ¡ sobre mÃ­, porque me ha ungido para dar buenas nuevas a los pobres, para proclamar la libertad a los cautivos.",
      reference: "Lucas 4:18"
    },
    reflection: "San Leonardo liberaba a los prisioneros, siguiendo el ejemplo de Cristo. MarÃ­a, que nos libera del pecado con su intercesiÃ³n, nos recuerda que la verdadera libertad viene de Dios.",
    prayer: "MarÃ­a, que venciste al mal, libera a todos los que sufren cautiverio de cualquier tipo y llÃ©valos a la libertad de los hijos de Dios."
  },
  {
    day: 27,
    title: "Nuestra SeÃ±ora de la Medalla Milagrosa",
    month: "Noviembre",
    verse: {
      text: "He aquÃ­ que el poderoso ha hecho por mÃ­ grandes cosas, y su nombre es santo.",
      reference: "Lucas 1:49"
    },
    reflection: "La Medalla Milagrosa es signo de la protecciÃ³n maternal de MarÃ­a sobre sus hijos. Cada vez que la llevamos, recordamos que MarÃ­a nos cubre con su manto y nos intercede ante Dios.",
    prayer: "MarÃ­a de la Medalla Milagrosa, que tu protecciÃ³n nos cubra siempre y que tu intercesiÃ³n nos obtenga todas las gracias que necesitamos."
  },
  {
    day: 28,
    title: "San Gregorio Taumaturgo: El Poder de la OraciÃ³n",
    month: "Noviembre",
    verse: {
      text: "En verdad os digo, si tuvieseis fe como un grano de mostaza, dirÃ­ais a esta montaÃ±a: PÃ¡sate de aquÃ­ a allÃ¡, y se pasarÃ­a.",
      reference: "Mateo 17:20"
    },
    reflection: "San Gregorio Taumaturgo realizÃ³ milagros por el poder de la oraciÃ³n. MarÃ­a, que intercediÃ³ en las Bodas de CanÃ¡, nos enseÃ±a que la fe y la oraciÃ³n pueden cambiar las circunstancias mÃ¡s difÃ­ciles.",
    prayer: "Madre de Dios, que tu ejemplo nos enseÃ±e a confiar en el poder de la oraciÃ³n y a pedir siempre lo que es necesario."
  },
  {
    day: 29,
    title: "San Saturnino: El Testimonio Valiente",
    month: "Noviembre",
    verse: {
      text: "No tengÃ¡is miedo de los que matan el cuerpo, pero no pueden matar el alma.",
      reference: "Mateo 10:28"
    },
    reflection: "San Saturnino dio su vida antes que renegar de Cristo. MarÃ­a, que permaneciÃ³ firme al pie de la Cruz, nos fortalece para ser valientes en el testimonio de la fe, sin importar las consecuencias.",
    prayer: "MarÃ­a, Reina de los MÃ¡rtires, que el ejemplo de San Saturnino nos inspire a dar testimonio de Cristo con valentÃ­a y fidelidad."
  },
  {
    day: 30,
    title: "San AndrÃ©s: El Primer Llamado",
    month: "Noviembre",
    verse: {
      text: "JesÃºs, al pasar, vio a SimÃ³n y a AndrÃ©s, su hermano, echando redes en el mar; eran pescadores. Y les dijo: Venid conmigo, y os harÃ© pescadores de hombres.",
      reference: "Marcos 1:16-17"
    },
    reflection: "San AndrÃ©s fue el primero en seguir a JesÃºs y llamÃ³ a su hermano Pedro. MarÃ­a, que acogiÃ³ el primer llamado de Dios en la AnunciaciÃ³n, nos invita a seguir a Cristo con generosidad y a compartir la fe con otros.",
    prayer: "MarÃ­a, Madre de todos los apÃ³stoles, que el ejemplo de San AndrÃ©s nos anime a responder con prontitud al llamado de Cristo y a ser pescadores de hombres."
  }

, {
    day: 1,
    title: "Comienza la Esperanza",
    month: "Diciembre",
    verse: {
      text: "El pueblo que andaba en tinieblas vio una gran luz; los que moraban en tierra de sombra de muerte, luz resplandeciÃ³ sobre ellos.",
      reference: "IsaÃ­as 9:2"
    },
    reflection: "Hoy comenzamos el Adviento, tiempo de espera y preparaciÃ³n para celebrar el nacimiento de JesÃºs. Como MarÃ­a, que esperÃ³ con fe inquebrantable, nosotros tambiÃ©n somos llamados a encender la llama de la esperanza en nuestros corazones. El SeÃ±or viene a iluminar nuestra oscuridad.",
    prayer: "MarÃ­a, madre de la esperanza, ayÃºdanos a esperar con fe la venida de tu Hijo. Que esta temporada de Adviento encienda en nosotros el deseo de_preparemos nuestros corazones para recibir al Salvador."
  },
  {
    day: 2,
    title: "La Fe de MarÃ­a",
    month: "Diciembre",
    verse: {
      text: "Entonces MarÃ­a dijo: He aquÃ­ la sierva del SeÃ±or; hÃ¡gase en mÃ­ segÃºn tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "MarÃ­a pronunciÃ³ el sÃ­ mÃ¡s grande de la historia con una fe absoluta. No comprendÃ­a todo lo que Dios le proponÃ­a, pero confiÃ³ plenamente en su plan. Su fe nos recuerda que Dios llama a personas sencillas para realizar obras extraordinarias.",
    prayer: "Santa MarÃ­a, fortalece nuestra fe para decir sÃ­ a Dios en cada momento. Que como tÃº, confiemos en sus promesas aun cuando no entendamos sus caminos."
  },
  {
    day: 3,
    title: "El MagnÃ­fat de la Gratitud",
    month: "Diciembre",
    verse: {
      text: "EngrandecerÃ¡ mi alma al SeÃ±or, y se gozarÃ¡ mi espÃ­ritu en Dios mi Salvador.",
      reference: "Lucas 1:46-47"
    },
    reflection: "El cÃ¡ntico de MarÃ­a, el MagnÃ­fat, es un himno de gratitud y alabanza. Ella reconociÃ³ las maravillas que Dios habÃ­a obrado en ella y a travÃ©s de ella. Hoy somos invitados a alabar a Dios por las bendiciones que hemos recibido en este aÃ±o.",
    prayer: "MarÃ­a, ensÃ©Ã±anos a cantar como tÃº el MagnÃ­fat de la gratitud. Que nuestro corazÃ³n se llenÃ© de alabanza por todo lo que Dios ha hecho por nosotros."
  },
  {
    day: 4,
    title: "La VisitaciÃ³n: AlegrÃ­a Compartida",
    month: "Diciembre",
    verse: {
      text: "Y sucediÃ³ que, cuando Isabel oyÃ³ el saludo de MarÃ­a, el niÃ±o saltÃ³ en su vientre; e Isabel fue llena del EspÃ­ritu Santo.",
      reference: "Lucas 1:41"
    },
    reflection: "MarÃ­a no guardÃ³ el don de Dios para sÃ­ misma, sino que fue a visitar a su prima Isabel. La alegrÃ­a de encontrar a Cristo nos impulsa a compartirla con los demÃ¡s. El Adviento es tiempo de comuniÃ³n y de visitar a quienes mÃ¡s necesitan.",
    prayer: "Madre de Dios, danos el corazÃ³n generoso para compartir la alegrÃ­a del Evangelio. AyÃºdanos a ser instrumentos de tu amor en la visitaciÃ³n a nuestros hermanos."
  },
  {
    day: 5,
    title: "La Justicia de Dios",
    month: "Diciembre",
    verse: {
      text: "DesplegarÃ¡ con fuerza su brazo, y dispersarÃ¡ a los soberbios en los pensamientos de sus corazones.",
      reference: "Lucas 1:51"
    },
    reflection: "En el MagnÃ­fat, MarÃ­a proclama la justicia de Dios que derriba a los poderosos y exalta a los humildes. El MesÃ­as que viene trae justicia para los oprimidos. Hoy recordamos que Dios escucha el clamor de los pobres y marginados.",
    prayer: "MarÃ­a, madre de los pobres, intercede por los que sufren injusticia. Que el Salvador que viene traiga paz y justicia a todos los pueblos de la tierra."
  },
  {
    day: 6,
    title: "La Misericordia Divina",
    month: "Diciembre",
    verse: {
      text: "Fez misericordia con los que le temen, de generaciÃ³n en generaciÃ³n.",
      reference: "Lucas 1:50"
    },
    reflection: "La misericordia de Dios se extiende a travÃ©s de las generaciones, como MarÃ­a nos enseÃ±a. Cada Adviento renovamos la confianza en que Dios es Padre misericordioso que nunca abandona a sus hijos. Su amor es eterno y fiel.",
    prayer: "Santa MarÃ­a, que tu Hijo nos conceda una conversiÃ³n profunda. Confiamos en la misericordia de Dios que nunca tiene fin."
  },
  {
    day: 7,
    title: "Preparando el Camino",
    month: "Diciembre",
    verse: {
      text: "Una voz clama en el desierto: Preparad el camino del SeÃ±or, enderezad sus senderos.",
      reference: "IsaÃ­as 40:3"
    },
    reflection: "Juan Bautista preparÃ³ el camino para JesÃºs, y nosotros somos llamados a preparar nuestros corazones. El Adviento es un tiempo de purificaciÃ³n y de alejarnos de lo que nos separa de Dios. Maria nos muestra que la humildad abre el camino al SeÃ±or.",
    prayer: "MarÃ­a, purifica nuestros corazones para que sean dignos de recibir a tu Hijo. Que cada dÃ­a de Adviento sea un paso mÃ¡s cerca de Dios."
  },
  {
    day: 8,
    title: "Inmaculada ConcepciÃ³n",
    month: "Diciembre",
    verse: {
      text: "Y el Ã¡ngel le dijo: No tengas miedo, MarÃ­a, porque has hallado gracia delante de Dios.",
      reference: "Lucas 1:30"
    },
    reflection: "Hoy celebramos la Inmaculada ConcepciÃ³n, cuando Dios preservÃ³ a MarÃ­a del pecado original para que fuera digna madre de su Hijo. Ella es el modelo de pureza y santidad a la que todos estamos llamados. La gracia de Dios nos precede y nos transforma.",
    prayer: "Inmaculada ConcepciÃ³n, madre hermosa, intercede por nosotros para que vivamos en la gracia de Dios. Que la pureza de tu corazÃ³n inspire la nuestra."
  },
  {
    day: 9,
    title: "El Don de la SabidurÃ­a",
    month: "Diciembre",
    verse: {
      text: "Porque el niÃ±o nacido nos es dado, el hijo que se nos ha dado tendrÃ¡ sobre su hombro el principado; y se llamarÃ¡ Consejero admirable, Dios fuerte, Padre eterno, PrÃ­ncipe de paz.",
      reference: "IsaÃ­as 9:6"
    },
    reflection: "JesÃºs es la sabidurÃ­a de Dios encarnada. MarÃ­a acogiÃ³ en su seno al Verbo eterno, fuente de toda sabidurÃ­a. Durante el Adviento, pedimos la sabidurÃ­a para comprender los misterios de la fe y vivir conforme a la voluntad de Dios.",
    prayer: "MarÃ­a, throne de la sabidurÃ­a, intercede por nosotros para que recibamos la luz del EspÃ­ritu Santo. Que la sabidurÃ­a de Cristo ilumine nuestros pensamientos y acciones."
  },
  {
    day: 10,
    title: "La Paz que Cristo Trae",
    month: "Diciembre",
    verse: {
      text: "Os dejo la paz, mi paz os doy; no la doy como la mundo la da. No se turbe vuestro corazÃ³n, ni se atemorice.",
      reference: "Juan 14:27"
    },
    reflection: "En medio de la agitaciÃ³n de la preparaciÃ³n navideÃ±a, JesÃºs nos ofrece su paz. Una paz que no depende de las circunstancias sino de su presencia. MarÃ­a viviÃ³ esta paz en todo momento, incluso en la cruz.",
    prayer: "MarÃ­a, reina de la paz, regÃ¡lanos la paz de tu Hijo. Que en esta temporada de Adviento, tu presencia calme nuestras preocupaciones."
  },
  {
    day: 11,
    title: "El Esperar Activo",
    month: "Diciembre",
    verse: {
      text: "Por tanto, estad alerta, porque no sabÃ©is en quÃ© dÃ­a vuestro SeÃ±or vendrÃ¡.",
      reference: "Mateo 24:42"
    },
    reflection: "La espera del Adviento no es pasiva sino activa. Como MarÃ­a que se preparÃ³ diligentemente, nosotros tambiÃ©n debemos trabajar por el Reino de Dios. Cada buen acto, cada oraciÃ³n, es una preparaciÃ³n para la llegada del Salvador.",
    prayer: "Madre del Verbo, ensÃ©Ã±anos a esperar activamente la venida de tu Hijo. Que nuestras obras de amor sean preparaciÃ³n para su llegada."
  },
  {
    day: 12,
    title: "La Promesa del Emmanuel",
    month: "Diciembre",
    verse: {
      text: "He aquÃ­, una virgen concebirÃ¡ y darÃ¡ a luz un hijo, y llamarÃ¡n su nombre Emanuel, que traducido es: Dios con nosotros.",
      reference: "Mateo 1:23"
    },
    reflection: "Emanuel significa Dios con nosotros, la promesa mÃ¡s hermosa de la Escritura. MarÃ­a fue el templo viviente donde Dios habitÃ³ entre los hombres. Hoy celebramos que Dios no nos dejÃ³ solos, sino que vino a vivir con nosotros.",
    prayer: "Santa MarÃ­a, que Dios estÃ© con nosotros en cada momento de nuestras vidas. Gracias por haber sido el sagrado templo de la EncarnaciÃ³n."
  },
  {
    day: 13,
    title: "LucÃ­a: La Luz en la Oscuridad",
    month: "Diciembre",
    verse: {
      text: "Yo soy la luz del mundo; el que me siga no andarÃ¡ en tinieblas, sino que tendrÃ¡ la luz de la vida.",
      reference: "Juan 8:12"
    },
    reflection: "Santa LucÃ­a nos recuerda que Cristo es la luz que disipa las tinieblas. En los dÃ­as mÃ¡s cortos del aÃ±o, su ejemplo nos invita a ser portadores de esa luz. MarÃ­a acogiÃ³ la Luz del mundo y nos llama a hacer lo mismo.",
    prayer: "Santa LucÃ­a, mÃ¡rtir de la fe, intercede por nosotros para que seamos luz en medio de la oscuridad. Que nuestra fe ilumine el camino de quienes nos rodean."
  },
  {
    day: 14,
    title: "La EncarnaciÃ³n: Dios se Hace Hombre",
    month: "Diciembre",
    verse: {
      text: "Y el Verbo se hizo carne, y habitÃ³ entre nosotros, y vimos su gloria, gloria como del unigÃ©nito del Padre, lleno de gracia y de verdad.",
      reference: "Juan 1:14"
    },
    reflection: "El misterio de la EncarnaciÃ³n es el centro de nuestra fe: Dios se hizo hombre para salvarnos. MarÃ­a fue el instrumento elegido para este plan eterno. Hoy renovamos la admiraciÃ³n por este amor tan grande que se hace carne.",
    prayer: "MarÃ­a, madre de la EncarnaciÃ³n, ayÃºdanos a comprender el amor infinito de Dios que se hizo hombre por nosotros. Que esta verdad transforme nuestras vidas."
  },
  {
    day: 15,
    title: "La Fecundidad del SÃ­",
    month: "Diciembre",
    verse: {
      text: "El EspÃ­ritu Santo vendrÃ¡ sobre ti, y el poder del AltÃ­simo te cubrirÃ¡ con su sombra; por lo cual el Santo que nacerÃ¡ de ti serÃ¡ llamado Hijo de Dios.",
      reference: "Lucas 1:35"
    },
    reflection: "El sÃ­ de MarÃ­a produjo frutos eternos. Cuando decimos sÃ­ a Dios, su gracia actÃºa en nosotros y produce obras maravillosas. El Adviento es tiempo de apertura a la acciÃ³n de Dios en nuestras vidas.",
    prayer: "MarÃ­a, madre fecunda, ayÃºdanos a decir sÃ­ a Dios con generosidad. Que el EspÃ­ritu Santo obre en nosotros y produzca frutos de santidad."
  },
  {
    day: 16,
    title: "La AlegrÃ­a del Adviento",
    month: "Diciembre",
    verse: {
      text: "Os dice otra vez: Â¡Gozaros con gozo, y alegraros con alegrÃ­a!",
      reference: "Filipenses 4:4"
    },
    reflection: "La alegrÃ­a del Adviento no es superficial sino profunda, nacida de la esperanza en la salvaciÃ³n. MarÃ­a fue mujer de alegrÃ­a porque acogiÃ³ al Salvador. Nuestra alegrÃ­a debe ser contagiosa, testimonio vivo de la fe.",
    prayer: "MarÃ­a, causa de nuestra alegrÃ­a, llena nuestros corazones con la gozo de saber que el Salvador viene. Que nuestra alegrÃ­a sea testimonio del amor de Dios."
  },
  {
    day: 17,
    title: "Las LetanÃ­as de la Esperanza",
    month: "Diciembre",
    verse: {
      text: "Ohæ·±å…¥, profundo de las riquezas de la sabidurÃ­a y de la ciencia de Dios! Â¡QuÃ© insondables son sus juicios, e inescrutables sus caminos!",
      reference: "Romanos 11:33"
    },
    reflection: "En las LetanÃ­as de Loreto invocamos a MarÃ­a con mÃºltiples tÃ­tulos. Cada tÃ­tulo revela un aspecto de su maternidad y de su intercesiÃ³n. Durante el Adviento, la liturgia nos invita a profundizar en estos tÃ­tulos marianos.",
    prayer: "Santa MarÃ­a, Madre de Dios, Ruega por nosotros pobres pecadores, ahora y en la hora de nuestra muerte. AmÃ©n."
  },
  {
    day: 18,
    title: "La PreparaciÃ³n del CorazÃ³n",
    month: "Diciembre",
    verse: {
      text: "Preparad el camino del SeÃ±or, enderezad sus senderos.",
      reference: "Mateu 3:3"
    },
    reflection: "La preparaciÃ³n del Adviento es ante todo interior. MarÃ­a preparÃ³ su vientre para ser morada del Verbo, nosotros debemos preparar nuestros corazones. La oraciÃ³n, el ayuno y la caridad son caminos de preparaciÃ³n.",
    prayer: "MarÃ­a, prepara nuestro corazÃ³n para recibir a tu Hijo. Que la oraciÃ³n y la penitencia nos dispongan para celebrar dignamente el nacimiento del Salvador."
  },
  {
    day: 19,
    title: "La GenealogÃ­a de la SalvaciÃ³n",
    month: "Diciembre",
    verse: {
      text: "Y de Jacob naciÃ³ JosÃ©, esposo de MarÃ­a, de la cual naciÃ³ JesÃºs, que es llamado Cristo.",
      reference: "Mateo 1:16"
    },
    reflection: "La genealogÃ­a de JesÃºs muestra el plan providencial de Dios a lo largo de la historia. MarÃ­a y JosÃ© fueron la culminaciÃ³n de siglos de preparaciÃ³n. Dios siempre cumple sus promesas, aunque a veces tardemos en ver su cumplimiento.",
    prayer: "Santa MarÃ­a, agradecemos el plan perfecto de Dios que te eligiÃ³ para ser madre del Salvador. Que confiemos en su providencia en cada circunstancia de la vida."
  },
  {
    day: 20,
    title: "El Servicio Humilde",
    month: "Diciembre",
    verse: {
      text: "He aquÃ­ la sierva del SeÃ±or; hÃ¡gase en mÃ­ segÃºn tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "MarÃ­a se presentÃ³ como sierva del SeÃ±or, modelo de humildad y servicio. El verdadero poder se encuentra en la humildad, no en la grandeza del mundo. El Adviento nos recuerda que Dios elige lo humilde para confundir a los soberbios.",
    prayer: "MarÃ­a, sierva del SeÃ±or, enseÃ±anos la humildad verdadera. Que sirvamos a Dios y a nuestros hermanos con corazÃ³n sencillo y generoso."
  },
  {
    day: 21,
    title: "El Solsticio y la Luz Eterna",
    month: "Diciembre",
    verse: {
      text: "La luz resplandecerÃ¡ sobre ti, y su gloria serÃ¡ vista en ti.",
      reference: "IsaÃ­as 60:1"
    },
    reflection: "En el solsticio de invierno, cuando la noche es mÃ¡s larga, celebramos la promesa de la luz eterna. JesÃºs es la luz que nunca se apaga, que vence las tinieblas del pecado y de la muerte. MarÃ­a fue el alba que anunciÃ³ la llegada del Sol de Justicia.",
    prayer: "MarÃ­a, estrella de la maÃ±ana, ilumina nuestro camino hacia Cristo. Que la luz de tu Hijo disipe toda oscuridad en nuestras vidas."
  },
  {
    day: 22,
    title: "Obediencia y Confianza",
    month: "Diciembre",
    verse: {
      text: "Y bajaron JosÃ© y MarÃ­a a BelÃ©n, y hallaron a MarÃ­a, que habÃ­a concebido, y dio a luz a su hijo primogÃ©nito, y lo envolviÃ³ en paÃ±ales, y lo acostÃ³ en un pesebre.",
      reference: "Lucas 2:6-7"
    },
    reflection: "MarÃ­a y JosÃ© obedecieron el decreto del emperador sin cuestionar, confiando en la providencia de Dios. A pesar de las dificultades del viaje y del parto, cumplieron su deber con fe inquebrantable. La obediencia a Dios siempre conduce a la plenitud.",
    prayer: "Santa MarÃ­a, ayÃºdanos a obedecer la voluntad de Dios con confianza. Que como tÃº, acceptemos los planes divinos aun cuando no los comprendamos."
  },
  {
    day: 23,
    title: "La Vigilia de la Natividad",
    month: "Diciembre",
    verse: {
      text: "Porque hoy os ha nacido en la ciudad de David un Salvador, que es Cristo el SeÃ±or.",
      reference: "Lucas 2:11"
    },
    reflection: "En la vÃ­spera de la Navidad, el alma se llena de expectativa sagrada. MarÃ­a pasÃ³ esta vigilia en silencio y oraciÃ³n, preparÃ¡ndose para el momento mÃ¡s grande de la historia. Nosotros tambiÃ©n somos llamados a vigilar y orar.",
    prayer: "MarÃ­a, madre de la Vigilia, mantenemos despiertos en oraciÃ³n esperando la llegada de tu Hijo. Que esta noche santa transforme nuestros corazones."
  },
  {
    day: 24,
    title: "Noche Santa: El Nacimiento del Salvador",
    month: "Diciembre",
    verse: {
      text: "Y la gloria del SeÃ±or rodeÃ³ a los pastores; y tuvieron gran temor. Entonces el Ã¡ngel les dijo: No temÃ¡is; porque os doy una buena nueva de gran gozo, que serÃ¡ para todo el pueblo: os ha nacido hoy en la ciudad de David un Salvador, que es Cristo el SeÃ±or.",
      reference: "Lucas 2:9-11"
    },
    reflection: "Esta noche la noche mÃ¡s hermosa del aÃ±o, cuando el cielo se abre y Dios se hace niÃ±o. MarÃ­a sostiene entre sus brazos al creador del universo, el Verbo eterno que se hace pequeÃ±o por amor. El pesebre es el trono del Rey de reyes.",
    prayer: "MarÃ­a, madre del NiÃ±o Dios, que esta noche santa renazca en nosotros la fe y la alegrÃ­a. Adoramos al Salvador que nace para darnos vida eterna."
  },
  {
    day: 25,
    title: "Navidad: El Verbo se Hizo Carne",
    month: "Diciembre",
    verse: {
      text: "Y el Verbo se hizo carne, y habitÃ³ entre nosotros, y vimos su gloria, gloria como del unigÃ©nito del Padre, lleno de gracia y de verdad.",
      reference: "Juan 1:14"
    },
    reflection: "Hoy celebramos el nacimiento de JesÃºs, el Verbo eterno que se hizo hombre para salvarnos. MarÃ­a es la madre del Dios hecho niÃ±o, privilegio que ningÃºn otro ser humano tuvo. La Navidad es el misterio del amor que se hace pequeÃ±o para encontrarse con nosotros.",
    prayer: "Feliz Navidad, MarÃ­a. Gracias por darnos a JesÃºs. Que el nacimiento del Salvador renueve nuestra fe y nos llene de esperanza y amor."
  },
  {
    day: 26,
    title: "San Esteban: Testigo hasta la Muerte",
    month: "Diciembre",
    verse: {
      text: "Entonces estando llenos del EspÃ­ritu Santo, fijando la vista en el cielo, vieron la gloria de Dios, y a JesÃºs, que estaba a la diestra de Dios.",
      reference: "Hechos 7:55"
    },
    reflection: "San Esteban fue el primer mÃ¡rtir, testigo valiente de la resurrecciÃ³n de Cristo. Como MarÃ­a, dio su vida por amor a Dios. Su ejemplo nos recuerda que la fe verdadera exige valentÃ­a y sacrificio.",
    prayer: "San Esteban, primer mÃ¡rtir, intercede por nosotros para que tengamos el valor de testificar la fe. Que como MarÃ­a, seamos valientes en seguir a Cristo."
  },
  {
    day: 27,
    title: "San Juan: El DiscÃ­pulo Amado",
    month: "Diciembre",
    verse: {
      text: "En el principio era el Verbo, y el Verbo estaba con Dios, y el Verbo era Dios.",
      reference: "Juan 1:1"
    },
    reflection: "San Juan, el discÃ­pulo amado, fue testigo privilegiado de la vida de JesÃºs. Su evangelio comienza con el himno al Verbo eterno que se hizo carne. MarÃ­a fue la primera discÃ­pula, la que mejor comprendiÃ³ el misterio de la EncarnaciÃ³n.",
    prayer: "San Juan, discÃ­pulo del amor, intercede por nosotros para que profundicemos en el misterio del Verbo encarnado. Que como MarÃ­a, acerquemos el corazÃ³n de JesÃºs."
  },
  {
    day: 28,
    title: "Los Santos Inocentes: La inocencia Protegida",
    month: "Diciembre",
    verse: {
      text: "AsÃ­ dice el SeÃ±or: Voz se oyÃ³ en RamÃ¡, llanto y lamentos grandes; Raquel llora a sus hijos, y no quiere ser consolada, porque ya no existen.",
      reference: "Mateo 2:18"
    },
    reflection: "Los Santos Inocentes son los niÃ±os muertos por Herodes. MarÃ­a, que huyÃ³ con JesÃºs a Egipto, conociÃ³ el dolor de ver amenazado a su hijo. Hoy oramos por los niÃ±os del mundo que sufren violencia e injusticia.",
    prayer: "MarÃ­a, madre protectora de los inocentes, guarda a todos los niÃ±os del mundo. Que la inocencia sea respetada y que los pequeÃ±os crezcan en la paz del Salvador."
  },
  {
    day: 29,
    title: "La Sagrada Familia",
    month: "Diciembre",
    verse: {
      text: "Y bajÃ³ con ellos, y vino a Nazaret, y estaba sujeto a ellos. Y su madre guardaba todas estas cosas en su corazÃ³n.",
      reference: "Lucas 2:51"
    },
    reflection: "La Sagrada Familia de Nazaret es modelo de vida cristiana: amor, obediencia, trabajo y oraciÃ³n. MarÃ­a, JosÃ© y JesÃºs vivieron en armonÃ­a, buscando siempre la voluntad de Dios. Las familias de hoy son llamadas a imitar este ejemplo.",
    prayer: "Santa Familia de Nazaret, bendice a todas las familias del mundo. Que MarÃ­a, JosÃ© y JesÃºs sean el modelo de unidad, amor y fe en cada hogar."
  },
  {
    day: 30,
    title: "La Fiesta de MarÃ­a, Madre de Dios",
    month: "Diciembre",
    verse: {
      text: "Pero cuando vino la plenitud de los tiempos, Dios enviÃ³ a su Hijo, nacido de mujer, nacido bajo la ley, para que redimiese a los que estaban bajo la ley, para que recibiÃ©ramos la adopciÃ³n de hijos.",
      reference: "GÃ¡latas 4:4-5"
    },
    reflection: "Hoy celebramos a MarÃ­a como Madre de Dios, tÃ­tulo que le confiere un papel Ãºnico en la historia de la salvaciÃ³n. Ella nos dio a JesÃºs, el Redentor del mundo. En ella reconocemos a nuestra madre espiritual que nos guÃ­a hacia su Hijo.",
    prayer: "MarÃ­a, Madre de Dios y Madre nuestra, te damos gracias por tu maternidad espiritual. Que este dÃ­a renueve nuestro amor por ti y por tu Hijo JesÃºs."
  },
  {
    day: 31,
    title: "AcciÃ³n de Gracias y Nueva Esperanza",
    month: "Diciembre",
    verse: {
      text: "Porque yo sÃ© los planes que tengo para vosotros, dice el SeÃ±or, planes de bienestar y no de mal, para daros un futuro y una esperanza.",
      reference: "JeremÃ­as 29:11"
    },
    reflection: "Al terminar el aÃ±o, damos gracias a Dios por todas las gracias recibidas. MarÃ­a nos accompanies en este camino de gratitud y nos prepara para un nuevo aÃ±o de fe. El Adviento nos enseÃ±a que siempre hay una nueva esperanza en Dios.",
    prayer: "MarÃ­a, madre de la esperanza, te confiamos el nuevo aÃ±o que comienza. Que tu bendiciÃ³n nos acompaÃ±e y que tu Hijo sea el centro de nuestras vidas."
  }

];

