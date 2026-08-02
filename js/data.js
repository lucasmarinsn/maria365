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
      text: "Porque tanto amó Dios el mundo que dio a su Hijo unigénito, para que todo el que crea en él no perezca sino que tenga vida eterna.",
      reference: "Juan 3:16"
    },
    reflection: "El amor de Dios es el origen de todo amor verdadero. María, como madre, comprendió profundamente este amor cuando aceptó llevar a su Hijo en su seno. Su sí al ángel fue un acto de amor puro que cambió la historia de la humanidad.",
    prayer: "María, enséñame a amar como Dios ama, con entrega total y sin condiciones. Que tu ejemplo ilumine mi corazón este día."
  },
  {
    day: 2,
    title: "El Magníficat: Un Canto de Amor",
    month: "Febrero",
    verse: {
      text: "Mi alma glorifica al Señor y mi espíritu se alegra en Dios mi Salvador, porque ha mirado la humillación de su esclava.",
      reference: "Lucas 1:46-48"
    },
    reflection: "El Magníficat es el cántico más hermoso de amor y gratitud. María reconoció que todo viene de Dios y su respuesta fue alabanza. Cuando amamos, nuestro corazón también se eleva en acción de gracias.",
    prayer: "Señor, que mi alma te glorifique como María glorificó tu nombre. Llena mi corazón de gratitud y alabanza."
  },
  {
    day: 3,
    title: "El Amor Humilde de María",
    month: "Febrero",
    verse: {
      text: "He aquí la esclava del Señor; hágase en mí según tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "La humildad de María es una manifestación profunda de su amor. No buscó gloria propia, sino que se puso al servicio de Dios. El amor verdadero siempre es humilde y se entrega sin esperar nada a cambio.",
    prayer: "María, dame tu humildad para servir a Dios y a los demás sin buscar reconocimiento. Que mi vida sea un acto de amor silencioso."
  },
  {
    day: 4,
    title: "El Amor en el Silencio",
    month: "Febrero",
    verse: {
      text: "María guardaba todas estas cosas, meditándolas en su corazón.",
      reference: "Lucas 2:19"
    },
    reflection: "María meditaba en silencio los misterios de Dios. El amor también se cultiva en el silencio y la reflexión. En la quietud del corazón, encontramos la presencia de Dios y aprendemos a amar mejor.",
    prayer: "María, ayúdame a encontrar momentos de silencio para meditar el amor de Dios en mi vida. Que tu ejemplo me guíe a la contemplación."
  },
  {
    day: 5,
    title: "La Visitación: Amor que se Comparte",
    month: "Febrero",
    verse: {
      text: "En cuanto Isabel oyó el saludo de María, el hijo saltó en su seno, e Isabel quedó llena del Espíritu Santo.",
      reference: "Lucas 1:41-42"
    },
    reflection: "La Visitación muestra el amor que se comparte con alegría. María no guardó el don de Dios para sí misma, sino que fue a servir a su prima Isabel. El amor verdadero siempre busca bendecir a los demás.",
    prayer: "María, enséñame a compartir tu amor con los que me rodean. Que mi vida sea una visitación de gracia y bendición para otros."
  },
  {
    day: 6,
    title: "El Amor Maternal en Caná",
    month: "Febrero",
    verse: {
      text: "Lo que �‰l les diga, háganlo.",
      reference: "Juan 2:5"
    },
    reflection: "En las bodas de Caná, María actuó con amor maternal al interceder por los novios. Su confianza en Jesús fue total. María siempre nos dirige a su Hijo, porque su amor maternal nos guía hacia �‰l.",
    prayer: "María, intercede por mí ante Jesús como lo hiciste en Caná. Que tu amor maternal me lleve a hacer la voluntad de Dios."
  },
  {
    day: 7,
    title: "El Amor que Persevera",
    month: "Febrero",
    verse: {
      text: "El amor es paciente, es bondadoso; no es envidioso ni vanidoso ni soberbio.",
      reference: "1 Corintios 13:4"
    },
    reflection: "San Pablo describe las cualidades del amor, y María las vivió plenamente. Su paciencia en los momentos difíciles, su bondad con todos, su entrega silenciosa son ejemplo de amor que persevera.",
    prayer: "Señor, que el amor que María vivió se manifieste en mi vida. Dame paciencia, bondad y humildad para amar como ella."
  },
  {
    day: 8,
    title: "El Amor en la Cruz",
    month: "Febrero",
    verse: {
      text: "Junto a la cruz de Jesús estaba su madre.",
      reference: "Juan 19:25"
    },
    reflection: "María permaneció al pie de la Cruz, compartiendo el sufrimiento de su Hijo. Este es el amor más profundo: estar presente en el dolor, sin huir. El amor de María nos enseña a estar junto a los que sufren.",
    prayer: "María, fortalece mi amor para que permanezca fiel en los momentos de prueba. Que nunca abandone a quienes amo en su cruz."
  },
  {
    day: 9,
    title: "El Corazón Traspasado",
    month: "Febrero",
    verse: {
      text: "A ti misma una espada te atravesará el alma.",
      reference: "Lucas 2:35"
    },
    reflection: "Simeón profetizó que el alma de María sería traspasada por una espada. Su sufrimiento fue inmenso, pero su amor nunca se quebró. El amor verdadero acerca el dolor de los hijos como propio.",
    prayer: "María, que tu corazón traspasado interceda por todos los padres y madres que sufren por sus hijos. Consuela a los que lloran."
  },
  {
    day: 10,
    title: "El Amor que Espera",
    month: "Febrero",
    verse: {
      text: "Los que esperan en el Señor renovarán sus fuerzas.",
      reference: "Isaías 40:31"
    },
    reflection: "María esperó con fe la resurrección de su Hijo. La espera amorosa es una forma de fe activa. Cuando amamos, aprendemos a esperar con paciencia la obra de Dios en nuestra vida.",
    prayer: "María, enseñame a esperar con fe y paciencia. Que tu ejemplo me dé fuerzas para confiar en Dios incluso en la oscuridad."
  },
  {
    day: 11,
    title: "El Amor de la Madre de la Iglesia",
    month: "Febrero",
    verse: {
      text: "He aquí a tu madre.",
      reference: "Juan 19:27"
    },
    reflection: "Jesús en la cruz confió a Juan a su madre. Desde ese momento, María es madre de todos los crecientes. Su amor maternal se extiende a toda la humanidad sin distinción.",
    prayer: "María, madre mía, acoge a todos tus hijos en tu amor maternal. Que la Iglesia entera sienta tu cuidado y protección."
  },
  {
    day: 12,
    title: "El Amor en Pentecostés",
    month: "Febrero",
    verse: {
      text: "Todos ellos estaban reunidos en un mismo lugar, cuando de repente vino del cielo un ruido como de un viento recio.",
      reference: "Hechos 2:1-2"
    },
    reflection: "María estuvo presente con los apóstoles esperando el Espíritu Santo. Su amor por la Iglesia naciente fue constante. El amor de María nos une como comunidad en el Espíritu.",
    prayer: "Espíritu Santo, que el amor de María esté presente en nuestra comunidad. Une nuestros corazones en tu fuego divino."
  },
  {
    day: 13,
    title: "El Amor que Consuela",
    month: "Febrero",
    verse: {
      text: "Bienaventurados los que lloran, porque ellos serán consolados.",
      reference: "Mateo 5:4"
    },
    reflection: "María es consuelo de los afligidos porque ella misma conoció el dolor. Su amor maternal consuela como solo una madre puede hacerlo. En la tristeza, María está presente con su amor sanador.",
    prayer: "María, consoladora de los afligidos, acércate a todos los que lloran hoy. Tu amor maternal sana las heridas del corazón."
  },
  {
    day: 14,
    title: "El Amor Más Grande",
    month: "Febrero",
    verse: {
      text: "No hay mayor amor que dar la vida por los amigos.",
      reference: "Juan 15:13"
    },
    reflection: "Jesús dio su vida por amor, y María ofreció su vida en silencio junto a �‰l. El amor más grande es la entrega total. María nos enseña que amar es darse sin medida.",
    prayer: "Señor, que el amor de María me inspire a dar mi vida por los demás. Que nunca sea tacaño en el amor."
  },
  {
    day: 15,
    title: "El Amor Incondicional",
    month: "Febrero",
    verse: {
      text: "El amor no busca su propio interés.",
      reference: "1 Corintios 13:5"
    },
    reflection: "María nunca buscó su propio interés. Su vida fue un don completo para Dios y para los hombres. El amor incondicional no espera reciprocidad, sino que se entrega generosamente.",
    prayer: "María, libérame del amor propio para que pueda amar como tú: sin condiciones, sin exigencias, sin reservas."
  },
  {
    day: 16,
    title: "El Amor que Educa",
    month: "Febrero",
    verse: {
      text: "Y Jesús crecía en sabiduría, en estatura y en gracia ante Dios y ante los hombres.",
      reference: "Lucas 2:52"
    },
    reflection: "María educó a Jesús con amor paciente y sabio. Cada madre y padre es llamado a formar a sus hijos con el mismo cuidado. El amor educador es uno de los más nobles dones.",
    prayer: "María, maestra de Jesús, guía a todos los padres en la educación de sus hijos. Que el amor sea la base de toda enseñanza."
  },
  {
    day: 17,
    title: "El Amor que Protege",
    month: "Febrero",
    verse: {
      text: "Bajo sus alas encontrarás refugio; su fidelidad es escudo y armadura.",
      reference: "Salmo 91:4"
    },
    reflection: "María nos protege con sus alas de amor maternal. Como un pájaro que cobija a sus polluelos, ella nos cubre con su manto. Su protección es un refugio seguro en las tormentas de la vida.",
    prayer: "María, refugio de los pecadores, protégeme bajo tu manto. Que tu amor me guarde de todo mal."
  },
  {
    day: 18,
    title: "El Amor que Perdona",
    month: "Febrero",
    verse: {
      text: "Perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden.",
      reference: "Mateo 6:12"
    },
    reflection: "María perdonó a quienes maltrataron a su Hijo y a quienes la ignoraron. El amor verdadero siempre encuentra la fuerza para perdonar. Perdonar es el acto más difícil y más noble del amor.",
    prayer: "María, que tu corazón purísimo me enseñe a perdonar como Dios perdona. Libérame del rencor y la amargura."
  },
  {
    day: 19,
    title: "El Amor que Sana",
    month: "Febrero",
    verse: {
      text: "�‰l mismo cargó con nuestras enfermedades y sufrió nuestros dolores.",
      reference: "Isaías 53:4"
    },
    reflection: "María fue la primera sanadora porque llevó en su seno al Salvador. Su amor sana heridas físicas y espirituales. En la enfermedad, María nos acompaña con su amor sanador.",
    prayer: "María, salud de los enfermos, toca a todos los que sufren hoy. Que tu amor sea bálsamo para sus heridas."
  },
  {
    day: 20,
    title: "El Amor que Fortalece",
    month: "Febrero",
    verse: {
      text: "Todo lo puedo en Cristo que me fortalece.",
      reference: "Filipenses 4:13"
    },
    reflection: "María recibió la fuerza de Dios para cumplir su misión. El amor de María nos fortalece para llevar nuestras cruces. Cuando amamos, encontramos fuerzas que no sabíamos que teníamos.",
    prayer: "María, fortalece mi debilidad con tu amor maternal. Que en ti encuentre la fuerza para perseverar cada día."
  },
  {
    day: 21,
    title: "El Amor Fiel",
    month: "Febrero",
    verse: {
      text: "El amor es firme como la muerte; las aguas del amor no lo extinguirán.",
      reference: "Cantares 8:6"
    },
    reflection: "El amor de María por Jesús y por nosotros es tan firme como la muerte. Nada pudo extinguir su amor: ni la pobreza, ni el sufrimiento, ni la muerte. Su fidelidad es un ejemplo para todos.",
    prayer: "María, que tu amor fiel me inspire a ser constante en mi fe. Que nunca abandone mi amor por Dios y por los demás."
  },
  {
    day: 22,
    title: "El Amor que Sirve",
    month: "Febrero",
    verse: {
      text: "El Hijo del Hombre no vino a ser servido, sino a servir y a dar su vida en rescate por muchos.",
      reference: "Marcos 10:45"
    },
    reflection: "María sirvió a Isabel en la Visitación, sirvió a Jesús en Nazaret, sirvió a la Iglesia en Pentecostés. El amor siempre se manifiesta en el servicio. Servir es la prueba del amor verdadero.",
    prayer: "María, que tu amor por el servicio me enseñe a entregarme a los demás. Que mi vida sea un servicio de amor."
  },
  {
    day: 23,
    title: "El Amor que Reconcilia",
    month: "Febrero",
    verse: {
      text: "Dios estaba en Cristo reconciliando consigo al mundo.",
      reference: "2 Corintios 5:19"
    },
    reflection: "María es mediadora de gracia porque su amor reconcilia a los hombres con Dios. Ella intercede por nosotros y nos acerca a su Hijo. El amor de María es puente de reconciliación.",
    prayer: "María, puente entre Dios y los hombres, reconcilia mi corazón con el Padre. Que tu amor una lo que el pecado separó."
  },
  {
    day: 24,
    title: "El Amor que Aclara",
    month: "Febrero",
    verse: {
      text: "Tú eres la luz del mundo. No puede ocultarse una ciudad situada en un monto.",
      reference: "Mateo 5:14"
    },
    reflection: "María es estrella de la mañana que ilumina nuestro camino. Su amor aclara la oscuridad de la duda y el miedo. Cuando estamos perdidos, María nos muestra el camino de regreso a Dios.",
    prayer: "María, estrella de la mañana, ilumina mi camino con tu amor. Que tu luz guíe mis pasos hacia Jesús."
  },
  {
    day: 25,
    title: "El Amor que Acompaña",
    month: "Febrero",
    verse: {
      text: "El Señor va delante de ti y estará contigo; no te abandonará ni te desamparará.",
      reference: "Deuteronomio 31:8"
    },
    reflection: "María acompaña a cada hijo suyo en el peregrinar de la vida. No caminamos solos porque ella está a nuestro lado. Su amor maternal es compañía fiel en cada etapa.",
    prayer: "María, compañera fiel del camino, no me dejes solo. Que tu presencia me dé paz y seguridad en cada paso."
  },
  {
    day: 26,
    title: "El Amor que Transforma",
    month: "Febrero",
    verse: {
      text: "No se conformen al mundo actual, sino transformen su mente.",
      reference: "Romanos 12:2"
    },
    reflection: "El amor de María transformó su vida y la de todo el mundo. Quien ama es transformado desde dentro. María nos invita a una conversión del corazón que nace del amor verdadero.",
    prayer: "María, transforma mi corazón con tu amor. Que yo también sea instrumento de conversión para otros."
  },
  {
    day: 27,
    title: "El Amor que No Muere",
    month: "Febrero",
    verse: {
      text: "El amor nunca se acaba.",
      reference: "1 Corintios 13:8"
    },
    reflection: "María fue llevada al cielo porque su amor la hizo digna de la gloria. El amor de María no terminó con su muerte, sino que continúa viviendo y obrando en la tierra. El amor es eterno.",
    prayer: "María, que tu amor eterno me dé la esperanza de la vida definitiva. Que tu ejemplo me prepare para la eternidad."
  },
  {
    day: 28,
    title: "El Amor que Todo lo Vence",
    month: "Febrero",
    verse: {
      text: "En todo esto vencemos a aquel que nos amó.",
      reference: "Romanos 8:37"
    },
    reflection: "María venció con el amor: venció al pecado, al miedo, a la muerte. Su amor por Dios y por los hombres fue más fuerte que cualquier obstáculo. En el amor de María está nuestra victoria.",
    prayer: "María, victoriosa en el amor, que tu amor me dé la victoria sobre el pecado y el miedo. Amén."
  }

, {
    day: 1,
    title: "El Inicio de la Purificación",
    month: "Marzo",
    verse: {
      text: "Purifiquémonos de toda mancha de carne y espíritu, perfeccionando la santificación en el temor de Dios.",
      reference: "2 Corintios 7:1"
    },
    reflection: "Al comenzar este mes de marzo, la Cuaresma nos invita a una limpieza interior profunda. María, que fue concebida sin mancha, nos muestra que la pureza del alma es posible cuando nos entregamos a Dios con corazón sincero.",
    prayer: "María, Madre pura, ayúdame a limpiar mi corazón de toda mancha y a caminar hacia tu Hijo con alma limpia."
  },
  {
    day: 2,
    title: "Corazón Puro ante Dios",
    month: "Marzo",
    verse: {
      text: "Bienaventurados los puros de corazón, porque ellos verán a Dios.",
      reference: "Mateo 5:8"
    },
    reflection: "La pureza del corazón no es solo inocencia, sino integridad en la intención. María guardaba todas las cosas en su corazón puro, meditando en la voluntad de Dios con amor perfecto.",
    prayer: "Señor, concede un corazón puro como el de María, para que pueda contemplar tu rostro con amor."
  },
  {
    day: 3,
    title: "La Presentación en el Templo",
    month: "Marzo",
    verse: {
      text: "Cuando se cumplieron los días de su purificación conforme a la ley de Moisés, llevaron a Jesús a Jerusalén para presentarlo al Señor.",
      reference: "Lucas 2:22"
    },
    reflection: "María cumplió la Ley con humildad y obediencia, presentándose en el Templo para su purificación. En ese momento, el anciano Simeón reconoció en el Niño la salvación prometida.",
    prayer: "María, que tu obediencia al Padre sea ejemplo para mi vida, y que siempre presente mi corazón en el templo de tu Hijo."
  },
  {
    day: 4,
    title: "La Espada del Dolor",
    month: "Marzo",
    verse: {
      text: "A ti misma una espada te atravesará el alma, para que queden al descubierto los pensamientos de muchos corazones.",
      reference: "Lucas 2:35"
    },
    reflection: "Simeón profetizó que una espada atravesaría el alma de María. Este dolor no destruyó su fe, sino que la purificó aún más, preparándola para ser Madre de todos los redimidos.",
    prayer: "Madre de los afligidos, sostén mi alma cuando la espada del dolor me atraviese, para que mi fe salga purificada de la prueba."
  },
  {
    day: 5,
    title: "Creación de un Corazón Limpio",
    month: "Marzo",
    verse: {
      text: "Create en mí, oh Dios, un corazón puro, y renueva en mí un espíritu recto.",
      reference: "Salmo 51:10"
    },
    reflection: "El salmista reconoce que solo Dios puede renovar nuestro corazón. María fue renovada por la gracia del Espíritu Santo, y nosotros también podemos pedir esa misma renovación interior.",
    prayer: "Padre celestial, renueva mi corazón como renovaste el de María, para que sea digno de recibir tu Hijo."
  },
  {
    day: 6,
    title: "El Camino de la Conversión",
    month: "Marzo",
    verse: {
      text: "Arrepentíos y convertíos, para que sean borrados vuestros pecados.",
      reference: "Hechos 3:19"
    },
    reflection: "La conversión es un retorno al Padre, como María siempre estuvo orientada hacia �‰l. Cada día podemos renovar nuestro compromiso de seguir a Cristo con corazón arrepentido.",
    prayer: "María, guíame en el camino de la conversión, para que mi vida sea una constante vuelta a Dios."
  },
  {
    day: 7,
    title: "El Espíritu de Pureza",
    month: "Marzo",
    verse: {
      text: "Y entró en ella el Espíritu Santo, y la sombra del Altísimo cubrió con su poder.",
      reference: "Lucas 1:35"
    },
    reflection: "La pureza de María fue sellada por el Espíritu Santo en la Anunciación. La virtud divina la preservó para ser Madre de Dios, mostrando que la gracia transforma y protege.",
    prayer: "Espíritu Santo, ven sobre mí con tu pureza, para que como María, pueda ser instrumento santo del Señor."
  },
  {
    day: 8,
    title: "La Gracia que Limpia",
    month: "Marzo",
    verse: {
      text: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados y limpiarnos de toda injusticia.",
      reference: "1 Juan 1:9"
    },
    reflection: "Dios siempre está dispuesto a perdonar y limpiar nuestra alma. María, que nunca necesitó perdón, intercede por nosotros para que recibamos la gracia de la purificación.",
    prayer: "María, intercede ante tu Hijo para que me perdone y limpie mi corazón con su sangre preciosa."
  },
  {
    day: 9,
    title: "El Magníficat de la Pureza",
    month: "Marzo",
    verse: {
      text: "Engrandecerá mi alma al Señor; y mi espíritu se alegró en Dios mi Salvador.",
      reference: "Lucas 1:46-47"
    },
    reflection: "El cántico de María revela un alma pura que se regocija en Dios. Su alabanza nace de un corazón libre de egoísmo, completamente entregado a la voluntad divina.",
    prayer: "María, enséñame a alabar a Dios con la pureza de tu corazón, para que mi espíritu se alegre en �‰l."
  },
  {
    day: 10,
    title: "Purificación por la Palabra",
    month: "Marzo",
    verse: {
      text: "Ya vosotros estáis limpios por la palabra que os he hablado.",
      reference: "Juan 15:3"
    },
    reflection: "La Palabra de Dios tiene poder purificador. María meditaba la Palabra en su corazón, y así se mantenía en la pureza que la gracia le había concedido.",
    prayer: "Señor, que tu Palabra me purifique y me transforme, como lo hizo en el corazón de María."
  },
  {
    day: 11,
    title: "La Cuaresma del Corazón",
    month: "Marzo",
    verse: {
      text: "La Cuaresma es un tiempo de gracia y de conversión del corazón.",
      reference: "2 Corintios 6:2"
    },
    reflection: "En la Cuaresma, la Iglesia nos invita a volver al corazón. María vivió en permanente cuaresma interior, preparándose siempre para recibir la voluntad de Dios.",
    prayer: "María, madre de la penitencia amorosa, enséñame a vivir la Cuaresma con el corazón."
  },
  {
    day: 12,
    title: "Agua Viva de Pureza",
    month: "Marzo",
    verse: {
      text: "El que beba del agua que yo le dé, nunca más tendrá sed, sino que el agua que yo le dé será en él una fuente de agua que brote para vida eterna.",
      reference: "Juan 4:14"
    },
    reflection: "Cristo ofrece agua viva que purifica y da vida eterna. María bebió de esta fuente y fue purificada por completo, convertida en templo del Espíritu Santo.",
    prayer: "María, que tu Hijo me dé del agua viva de su gracia, para que mi alma nunca más tenga sed."
  },
  {
    day: 13,
    title: "El Velo de la Pureza",
    month: "Marzo",
    verse: {
      text: "No nos acerquemos con hipocresía, sino con sinceridad de corazón, por la fe, teniendo el corazón purificado de la mala conciencia.",
      reference: "Hebreos 10:22"
    },
    reflection: "María cubrió su pureza con el velo de la humildad. Nunca buscó ser vista, sino que sirvió a Dios en el silencio y la sencillez de su corazón.",
    prayer: "María, que tu humildad me enseñe a cubrir mi pureza con el velo de la sencillez."
  },
  {
    day: 14,
    title: "Limpiando el Interior del Cáliz",
    month: "Marzo",
    verse: {
      text: "Limpiad primero el interior del cáliz y del plato, para que el exterior también quede limpio.",
      reference: "Mateo 23:26"
    },
    reflection: "Jesús nos pide que limpiemos primero el corazón, no solo la apariencia. María vivía desde el interior, y por eso su alma estaba completamente limpia ante Dios.",
    prayer: "Señor, limpia mi corazón por dentro, como lo hiciste en el alma de María."
  },
  {
    day: 15,
    title: "El Espíritu que Santifica",
    month: "Marzo",
    verse: {
      text: "El Espíritu es el que da vida; la carne para nada aprovecha. Las palabras que yo os he hablado son espíritu y son vida.",
      reference: "Juan 6:63"
    },
    reflection: "Solo el Espíritu puede santificar y purificar el alma. María fue santificada por el Espíritu Santo desde su concepción, y nosotros también somos llamados a esa santidad.",
    prayer: "Espíritu de pureza, ven a mi alma y santifícame como santificaste a María."
  },
  {
    day: 16,
    title: "El Bautismo de Conversión",
    month: "Marzo",
    verse: {
      text: "Yo os bautizo con agua para el arrepentimiento; pero el que viene después de mí, os bautizará con el Espíritu Santo y con fuego.",
      reference: "Mateo 3:11"
    },
    reflection: "El bautismo de Juan preparaba la conversión, pero Cristo purifica con fuego del Espíritu. María fue bautizada espiritualmente por la gracia del Espíritu Santo.",
    prayer: "María, que el fuego del Espíritu purifique mi alma en esta Cuaresma."
  },
  {
    day: 17,
    title: "La Pureza de los Ángeles",
    month: "Marzo",
    verse: {
      text: "Y el ángel respondió, diciéndole: El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra.",
      reference: "Lucas 1:35"
    },
    reflection: "El ángel Gabriel anunció a María que el Espíritu la cubriría. Esta protección divina aseguró su pureza para cumplir el plan de salvación.",
    prayer: "María, que la sombra del Altísimo cubra mi vida y me preserve en la pureza."
  },
  {
    day: 18,
    title: "Fuego que Purifica",
    month: "Marzo",
    verse: {
      text: "Porque yo como el fuego, y como la decoccón de la cal, te he reducido.",
      reference: "Malaquías 3:2"
    },
    reflection: "Dios es fuego purificador que quita la escoria. María fue probada por el dolor y salió más pura, como el oro refinado en el fuego.",
    prayer: "Señor, permite que tu fuego purificador me transforme, como lo hizo con María."
  },
  {
    day: 19,
    title: "San José, Guardián de la Pureza",
    month: "Marzo",
    verse: {
      text: "Y despertando José de su sueño, hizo como el ángel del Señor le había mandado, y recibió a su mujer.",
      reference: "Mateo 1:24"
    },
    reflection: "José, guardián de María y del Niño, ejercitó una pureza heroica. Su obediencia y fidelidad protegieron el misterio de la Encarnación.",
    prayer: "San José, que tu pureza y obediencia sean ejemplo para mi vida familiar y espiritual."
  },
  {
    day: 20,
    title: "La Cruz como Instrumento de Purificación",
    month: "Marzo",
    verse: {
      text: "Pero él fue herido por nuestras rebeliones, molido por nuestros pecados; el castigo que nos trae la paz cayó sobre él, y por su llaga fuimos sanados.",
      reference: "Isaías 53:5"
    },
    reflection: "La cruz de Cristo es el instrumento supremo de purificación. María estuvo al pie de la cruz, participando del sufrimiento que redime y purifica a la humanidad.",
    prayer: "María, al pie de la cruz, enséñame aAceptar el sufrimiento como camino de purificación."
  },
  {
    day: 21,
    title: "El Camino Estrecho",
    month: "Marzo",
    verse: {
      text: "Entrad por la puerta estrecha; porque ancha es la puerta, y espacioso el camino que lleva a la perdición, y muchos son los que entran por ella.",
      reference: "Mateo 7:13"
    },
    reflection: "María eligió el camino estrecho de la obediencia y la pureza. Su vida nos recuerda que la santidad requiere esfuerzo y perseverancia.",
    prayer: "María, dame la gracia de caminar por el camino estrecho que lleva a la vida eterna."
  },
  {
    day: 22,
    title: "El Agua y el Espíritu",
    month: "Marzo",
    verse: {
      text: "De cierto, de cierto te digo, que el que no nace del agua y del Espíritu, no puede entrar en el reino de Dios.",
      reference: "Juan 3:5"
    },
    reflection: "El bautismo nos purifica y nos hace hijos de Dios. María fue purificada por el Espíritu Santo, y nosotros somos purificados en el agua bautismal.",
    prayer: "María, que el agua del bautismo renueve mi compromiso de pureza cada día."
  },
  {
    day: 23,
    title: "Perseverar en la Pureza",
    month: "Marzo",
    verse: {
      text: "Porque no nos ha dado Dios espíritu de cobardía, sino de fortaleza, de amor y de prudente dominio propio.",
      reference: "2 Timoteo 1:7"
    },
    reflection: "La pureza requiere fortaleza y dominio propio. María perseveró en la pureza toda su vida, por la gracia del Espíritu Santo que la fortalecía.",
    prayer: "Espíritu Santo, fortalece mi voluntad para perseverar en la pureza, como María lo hizo."
  },
  {
    day: 24,
    title: "La Inmaculada Concepción",
    month: "Marzo",
    verse: {
      text: "Toda llena de gracia, el Señor es contigo; bendita tú entre las mujeres.",
      reference: "Lucas 1:28"
    },
    reflection: "María fue llena de gracia desde su concepción, preservada de toda mancha. Este privilegio nos recuerda que Dios puede hacer en nosotros una obra nueva.",
    prayer: "María Inmaculada, que tu pureza me inspire a vivir sin mancha ante Dios."
  },
  {
    day: 25,
    title: "El Sí de la Pureza",
    month: "Marzo",
    verse: {
      text: "He aquí la sierva del Señor; hágase en mí según tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "El 'fiat' de María fue un acto de pureza absoluta: un corazón sin reservas que se entrega completamente a Dios. En ese momento, la pureza se convirtió en vida.",
    prayer: "María, enséñame a decir 'sí' a Dios con la pureza de tu corazón."
  },
  {
    day: 26,
    title: "Refino de Oro",
    month: "Marzo",
    verse: {
      text: "Porque como el oro y la plata seréis probados en el fuego, así será probada vuestra fe.",
      reference: "1 Pedro 1:7"
    },
    reflection: "La fe se purifica en el fuego de las pruebas. María fue probada por el dolor y la incertidumbre, pero su fe salió más brillante que el oro.",
    prayer: "María, que mi fe sea purificada como el oro en el fuego, para brillar ante Dios."
  },
  {
    day: 27,
    title: "Limpiando los Templos",
    month: "Marzo",
    verse: {
      text: "Y halló en el templo a los que vendían bueyes, ovejas y palomas, y a los mesonistas sentados.",
      reference: "Mateo 21:12"
    },
    reflection: "Jesús purificó el templo porque era casa de oración. María es el templo más puro que Dios habitó, y nosotros también somos llamados a ser templos del Espíritu.",
    prayer: "Señor, purifica mi corazón como templo tuyo, para que sea digno de tu presencia."
  },
  {
    day: 28,
    title: "La Cuaresma como Escuela",
    month: "Marzo",
    verse: {
      text: "Examinaos, para que seáis aprobados. Si sois aprobados, seréis sincereamente puros.",
      reference: "2 Corintios 13:5"
    },
    reflection: "La Cuaresma es una escuela de examen de conciencia. María vivía en permanente examen interior, siempre disponible para la voluntad de Dios.",
    prayer: "María, ayúdame a examinar mi conciencia con honestidad, para que mi vida sea pura."
  },
  {
    day: 29,
    title: "El Camino de la Cruz",
    month: "Marzo",
    verse: {
      text: "Si alguno quiere ir en pos de mí, niéguese a sí mismo, tome su cruz y sígame.",
      reference: "Mateo 16:24"
    },
    reflection: "La Cruz es el camino de purificación que Jesús nos muestra. María siguió a su Hijo hasta el Calvario, participando del misterio pascual.",
    prayer: "María, que tu ejemplo me haga seguir a Cristo en el camino de la cruz."
  },
  {
    day: 30,
    title: "La Resurrección y la Pureza",
    month: "Marzo",
    verse: {
      text: "Porque si hemos sido unidos a él en una semejanza de su muerte, también lo seremos en una semejanza de su resurrección.",
      reference: "Romanos 6:5"
    },
    reflection: "La resurrección de Cristo nos promete una vida nueva, purificada del pecado. María fue la primera en contemplar al Resucitado, testigo de la victoria de la vida sobre la muerte.",
    prayer: "María, que la resurrección de tu Hijo renueve mi vida y la purifique completamente."
  },
  {
    day: 31,
    title: "Llenos de Gracia",
    month: "Marzo",
    verse: {
      text: "Mas la gracia de Dios y el don por la gracia de un solo hombre, Jesucristo, abundó para muchos.",
      reference: "Romanos 5:15"
    },
    reflection: "Al concluir este mes de purificación, agradecemos la gracia que sobreabunda en nosotros. María, llena de gracia, nos asegura que Dios siempre está dispuesto a renovarnos.",
    prayer: "María, Madre de gracia, lléname de las aguas de tu Hijo, para que mi vida sea un testimonio de pureza y amor."
  }

, {
    day: 1,
    title: "El Amanecer de la Esperanza",
    month: "Abril",
    verse: {
      text: "No estéis asustados; buscáis a Jesús, el Nazareno, que fue crucificado. Ha resucitado; no está aquí.",
      reference: "Marcos 16:6"
    },
    reflection: "María Magdalena llegó al sepulcro con el corazón quebrantado, pero encontró un ángel que le anunció la más grande noticia de la historia. La resurrección de Jesús transformó su dolor en una alegría inefable. Hoy, María nos invita a buscar a Cristo resucitado en cada momento de nuestra vida.",
    prayer: "Madre mía, enséñame a buscar a tu Hijo resucitado con la misma fe y dedicación que tuvieron las primeras mujeres en la tumba vacía."
  },
  {
    day: 2,
    title: "María, Testigo de la Esperanza",
    month: "Abril",
    verse: {
      text: "Pero cuando vio a Jesús, se arrodilló ante él y le dijo: Señor, si tú hubieras estado aquí, mi hermano no hubiera muerto.",
      reference: "Juan 11:32"
    },
    reflection: "María experimentó la pérdida más profunda cuando vio a su Hijo morir en la cruz. Sin embargo, su fe nunca se quebrantó. Ella sabía que Dios tenía un plan perfecto, incluso en medio del sufrimiento más grande.",
    prayer: "María, madre de la esperanza, fortalece mi fe cuando el dolor parece superarme, como fortaleció la tuya en la cruz."
  },
  {
    day: 3,
    title: "La Cruz, Árbol de Vida",
    month: "Abril",
    verse: {
      text: "Cristo nos redimió de la maldición de la ley, haciéndose maldición por nosotros â€”porque está escrito: Maldito todo el que es colgado de un maderoâ€”.",
      reference: "Gálatas 3:13"
    },
    reflection: "María permaneció al pie de la cruz, testigo del sacrificio supremo de su Hijo. Lo que parecía el fin más cruel se convirtió en el principio de nuestra salvación. El árbol de la muerte se transformó en el árbol de la vida eterna.",
    prayer: "Señor Jesús, que tu cruz sea para mí fuente de salvación, y que María me ayude a comprender el amor infinito que en ella se derramó."
  },
  {
    day: 4,
    title: "El Silencio de María",
    month: "Abril",
    verse: {
      text: "María guardaba todas estas cosas, meditándolas en su corazón.",
      reference: "Lucas 2:19"
    },
    reflection: "En los días más oscuros después de la crucifixión, María calló y meditó en su corazón. Su silencio no era ausencia de fe, sino una profunda oración que sostenía su esperanza. A veces, el silencio es la oración más poderosa.",
    prayer: "María, que tu ejemplo de silencio orante me enseñe a confiar en Dios cuando las palabras no alcancen para expresar mi dolor."
  },
  {
    day: 5,
    title: "El Pan de Vida Resucitado",
    month: "Abril",
    verse: {
      text: "Yo soy el pan de vida. El que viene a mí no tendrá hambre, y el que cree en mí no tendrá sed jamás.",
      reference: "Juan 6:35"
    },
    reflection: "María conocía las palabras de Jesús sobre el pan de vida porque ella misma fue el primer tabernáculo viviente. En la Eucaristía, su Hijo resucitado sigue dándose a nosotros como alimento para el camino. Cada comunión es un encuentro pascual.",
    prayer: "Madre del Santísimo, prepárame para recibir a tu Hijo en la Eucaristía con el mismo amor con que tú lo recibiste en tu seno."
  },
  {
    day: 6,
    title: "María y la Tumba Vacía",
    month: "Abril",
    verse: {
      text: "Pero él les dijo: Â¿Por qué estáis turbados, y por qué suben estas dudas en vuestro corazón?",
      reference: "Lucas 24:38"
    },
    reflection: "Aunque los Evangelios no mencionan explícitamente a María en la tumba vacía, la tradición nos dice que su corazón de madre buscaba desesperadamente al Hijo que le habían arrebatado. La alegría del encuentro pascual debe haber sido indescriptible para ella.",
    prayer: "Jesús resucitado, que la alegría de encontrar tu tumba vacía llene el corazón de María y el mío de esperanza renovada."
  },
  {
    day: 7,
    title: "La Esperanza que No Decepciona",
    month: "Abril",
    verse: {
      text: "Y la esperanza no avergüenza, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado.",
      reference: "Romanos 5:5"
    },
    reflection: "María esperó con fe inquebrantable la resurrección de su Hijo, aunque las apariencias decían lo contrario. Su esperanza no fue defraudada porque estaba fundada en la fidelidad de Dios. Así también nuestra esperanza cristiana nunca se decepciona.",
    prayer: "María, madre de la esperanza, que tu ejemplo me enseñe a esperar contra toda esperanza, confiando en las promesas de Dios."
  },
  {
    day: 8,
    title: "El Espíritu Santo y María",
    month: "Abril",
    verse: {
      text: "Cuando el Espíritu Santo venga sobre vosotros, recibiréis poder, y seréis mis testigos en Jerusalén, en toda Judea y Samaría, y hasta los confines de la tierra.",
      reference: "Hechos 1:8"
    },
    reflection: "María fue la primera en recibir al Espíritu Santo en la Anunciación y la primera en recibirlo en Pentecostés. Ella es modelo de la vida en el Espíritu que la resurrección hizo posible. El Espíritu que resucitó a Jesús vive en nosotros.",
    prayer: "Espíritu Santo, que descendiste sobre María, renueva en mí el don de la vida nueva que la resurrección de Cristo me ofrece."
  },
  {
    day: 9,
    title: "La Victoria sobre la Muerte",
    month: "Abril",
    verse: {
      text: "Dios es el que nos da la victoria por medio de nuestro Señor Jesucristo.",
      reference: "1 Corintios 15:57"
    },
    reflection: "María contempló la derrota de la muerte cuando su Hijo resucitó glorioso. Ella que había cargado al Redentor del mundo fue testigo de su triunfo definitivo. En Cristo resucitado, la muerte ha perdido su poder definitivamente.",
    prayer: "María, que viviste la victoria de la resurrección, intercede para que yo viva libre del temor a la muerte."
  },
  {
    day: 10,
    title: "María, Madre de los Vivientes",
    month: "Abril",
    verse: {
      text: "Y llamó Adán a su mujer Eva, porque ella fue la madre de todos los vivientes.",
      reference: "Génesis 3:20"
    },
    reflection: "Como Eva fue madre de todos los vivientes según la carne, María es madre de todos los vivientes según el espíritu. La resurrección de Cristo inauguró una nueva creación, y María es la madre de esta nueva humanidad rescatada.",
    prayer: "María, madre de los vivientes, regíname como a hijo/amado hijo tuyo y guíame hacia la vida plena en Cristo resucitado."
  },
  {
    day: 11,
    title: "El Camino de la Cruz al Pascua",
    month: "Abril",
    verse: {
      text: "Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz y sígame.",
      reference: "Mateo 16:24"
    },
    reflection: "María recorrió el camino de la cruz con una fortaleza que solo la fe podía dar. Ella sabe que no hay pascua sin cruz, ni resurrección sin muerte. Cada sufrimiento unido a Cristo se convierte en semilla de vida eterna.",
    prayer: "Madre de la Pascua, ayúdame a cargar mi cruz con la misma dignidad con que tú acompañaste a Jesús en el Calvario."
  },
  {
    day: 12,
    title: "Los Corazones Ardientes",
    month: "Abril",
    verse: {
      text: "Y les dijo: Estas son las palabras que os hablé, estando aún con vosotros: Que era necesario que se cumpliese todo lo que de mí está escrito en la ley de Moisés, en los profetas y en los salmos.",
      reference: "Lucas 24:44"
    },
    reflection: "En el camino de Emaús, los discípulos reconocieron a Jesús en la fracción del pan. María, que conocía las Escrituras en su corazón, sin duda reconoció al Resucitado mucho antes. Su fe profunda le permitió ver a Cristo donde otros solo veían un sepulcro vacío.",
    prayer: "Jesús, que mis ojos se abran como los de María para reconocerte en las Escrituras y en la Eucaristía."
  },
  {
    day: 13,
    title: "La Obediencia de María",
    month: "Abril",
    verse: {
      text: "He aquí la esclava del Señor; hágase en mí según tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "La misma María que dijo 'sí' al Ángel en la Anunciación, dijo 'sí' al plan de Dios en la cruz. Su obediencia no cesó cuando el sufrimiento llegó, sino que se profundizó. La obediencia de María nos enseña que el 'sí' a Dios es para siempre.",
    prayer: "María, enséñame a decir 'sí' a Dios con la misma generosidad con que tú lo hiciste en cada etapa de tu vida."
  },
  {
    day: 14,
    title: "María y los Apóstoles",
    month: "Abril",
    verse: {
      text: "Todos estos perseveraban unánimes en oración, junto con María, la madre de Jesús, y con los hermanos de él.",
      reference: "Hechos 1:14"
    },
    reflection: "Después de la ascensión, María se quedó con los apóstoles preparándose para la venida del Espíritu Santo. Ella era el vínculo vivo entre Jesús y la Iglesia naciente. Su presencia daba fuerza y consuelo a los primeros cristianos.",
    prayer: "María, que estuviste con los apóstoles en Pentecostés, estate conmigo siempre y fortalece mi vida de oración."
  },
  {
    day: 15,
    title: "La Alegría Pascual",
    month: "Abril",
    verse: {
      text: "Os he dicho estas cosas para que mi alegría esté en vosotros, y vuestra alegría sea completa.",
      reference: "Juan 15:11"
    },
    reflection: "María experimentó la alegría más plena cuando vio a su Hijo resucitado. Esa alegría pascual no era una emoción pasajera, sino el fruto de haber confiado en Dios hasta el final. La alegría de la resurrección es el don más hermoso que Cristo nos deja.",
    prayer: "María, lléname de la alegría pascual que tú experimentaste, para que mi vida sea testimonio de la resurrección."
  },
  {
    day: 16,
    title: "El Cuerpo Glorificado",
    month: "Abril",
    verse: {
      text: "Es sembrado un cuerpo corruptible, se levantará en incorrupción; es sembrado en deshonoria, se levantará en gloria; es sembrado en flaqueza, se levantará en potencia.",
      reference: "1 Corintios 15:42-43"
    },
    reflection: "El cuerpo glorificado de Jesús tras la resurrección era real pero transformado. María fue la primera en contemplar este misterio cuando su Hijo se le apareció. El cuerpo humano tiene un destino glorioso que trasciende la muerte.",
    prayer: "Señor, que la esperanza de la resurrección transforme mi visión del cuerpo y me ayude a venerar el templo del Espíritu."
  },
  {
    day: 17,
    title: "María en Pentecostés",
    month: "Abril",
    verse: {
      text: "Y se les aparecieron lenguas repartidas, como de fuego, que se posaron sobre cada uno de ellos.",
      reference: "Hechos 2:3"
    },
    reflection: "María recibió al Espíritu Santo en Pentecostés con la misma fe con que lo había recibido en la Anunciación. El fuego del Espíritu renovó su misión de Madre de la Iglesia. La resurrección y Pentecostés son dos momentos de una misma obra salvadora.",
    prayer: "Espíritu Santo, que descendiste sobre María, enciende en mi corazón el fuego de tu amor y de tu sabiduría."
  },
  {
    day: 18,
    title: "El Perdón de la Resurrección",
    month: "Abril",
    verse: {
      text: "Así está escrito, y así era necesario que el Cristo padeciera y resucitase de los muertos el tercer día, y que se predicase en su nombre el arrepentimiento y el perdón de los pecados.",
      reference: "Lucas 24:46-47"
    },
    reflection: "La resurrección de Jesús trae consigo el don del perdón. María, que vio derramar la sangre de su Hijo por los pecados del mundo, conoce el poder infinito de la misericordia. Cada perdón recibido es una pequeña resurrección en nuestra vida.",
    prayer: "María, madre de la misericordia, obtén para mí el perdón de mis pecados y la gracia de perdonar a quienes me ofenden."
  },
  {
    day: 19,
    title: "La Vida Nueva en Cristo",
    month: "Abril",
    verse: {
      text: "De modo que si alguno está en Cristo, es una nueva creación; lo viejo pasó; mira, todo es nuevo.",
      reference: "2 Corintios 5:17"
    },
    reflection: "La resurrección de Cristo inauguró una nueva creación. María, como nueva Eva, fue la primera en experimentar los frutos de esta vida renovada. Cada día es una oportunidad para comenzar de nuevo en Cristo resucitado.",
    prayer: "María, que fuiste testigo de la nueva creación, ayúdame a dejar atrás lo viejo y caminar en la novedad de vida."
  },
  {
    day: 20,
    title: "María, Estrella de la Mañana",
    month: "Abril",
    verse: {
      text: "Yo soy la raíz y el linaje de David, la estrella resplandeciente de la mañana.",
      reference: "Apocalipsis 22:16"
    },
    reflection: "Como la estrella de la mañana anuncia el amanecer, María anuncia la resurrección de Cristo. Ella fue la primera en creer y la primera en contemplar al Sol de Justicia resucitado. Su fe es un faro que guía a la humanidad hacia la luz de Pascua.",
    prayer: "Estrella de la mañana, María, guía mis pasos hacia Cristo resucitado, que es la luz verdadera del mundo."
  },
  {
    day: 21,
    title: "La Paz del Resucitado",
    month: "Abril",
    verse: {
      text: "La paz os dejo; mi paz os doy; no la doy como la da el mundo. No se turbe vuestro corazón, ni se atemorice.",
      reference: "Juan 14:27"
    },
    reflection: "Jesús resucitado ofreció su paz a los discípulos, y esa misma paz llegó a María. La paz de Cristo no depende de las circunstancias sino de su presencia victoriosa. María vive en esa paz plena que la resurrección garantiza.",
    prayer: "María, que vives en la paz del Resucitado, transmíteme esa paz que ningún mundo puede dar ni quitar."
  },
  {
    day: 22,
    title: "La Esperanza de la Gloria",
    month: "Abril",
    verse: {
      text: "Y si los esperamos, con paciencia la esperamos.",
      reference: "Romanos 8:25"
    },
    reflection: "María esperó la resurrección con una paciencia que solo la fe puede dar. Su esperanza no era pasiva sino activa, sostenida por la oración y la confianza en Dios. La resurrección de Cristo es la garantía de nuestra propia esperanza de gloria.",
    prayer: "María, que esperaste la resurrección con fe inquebrantable, fortalece mi esperanza en las promesas de Dios."
  },
  {
    day: 23,
    title: "María y la Nueva Alianza",
    month: "Abril",
    verse: {
      text: "Porque este es mi sangre de la nueva alianza, que es derramada por muchos para el perdón de los pecados.",
      reference: "Mateo 26:28"
    },
    reflection: "En la cruz, Jesús selló la nueva alianza con su sangre, y María fue testigo de ese momento decisivo. Ella, que había sido la primera tabernáculo de la antigua alianza, ahora contemplaba la inauguración de la alianza definitiva. La resurrección selló esta alianza con el sello de la vida eterna.",
    prayer: "María, madre de la nueva alianza, ayúdame a vivir fielmente los compromisos bautismales que la sangre de Cristo me ha regalado."
  },
  {
    day: 24,
    title: "El Pan de la Resurrección",
    month: "Abril",
    verse: {
      text: "Tomad, comed; esto es mi cuerpo.",
      reference: "Mateo 26:26"
    },
    reflection: "María conocía el significado del pan mejor que nadie, pues su Hijo era el pan vivo bajado del cielo. En la Eucaristía, el pan de la resurrección se hace presente en cada celebración. Cada misa es una pequeño Pascua que nos anticipa el banquete celestial.",
    prayer: "María, que viviste la Eucaristía en su origen, prepárame para recibir a tu Hijo con la reverencia que merece."
  },
  {
    day: 25,
    title: "La Victoria del Amor",
    month: "Abril",
    verse: {
      text: "El amor es fuerte como la muerte; las aguas frías no pueden apagar el amor, ni lo pueden inundar los ríos.",
      reference: "Cantar de los Cantares 8:6"
    },
    reflection: "El amor de María por Jesús fue más fuerte que la muerte, y el amor de Jesús por la humanidad triunfó sobre el sepulcro. La resurrección es la victoria definitiva del amor sobre la muerte. El amor de una madre y el amor del Redentor se encontraron en la cruz y en la tumba vacía.",
    prayer: "María, que tu amor por Jesús fue más fuerte que la muerte, enciende en mi corazón un amor que trascienda toda prueba."
  },
  {
    day: 26,
    title: "María, Modelo de Fe Resucitada",
    month: "Abril",
    verse: {
      text: "Porque andamos por fe, no por vista.",
      reference: "2 Corintios 5:7"
    },
    reflection: "María caminó por fe cuando vio a su Hijo morir en la cruz, y caminó por fe cuando creyó en su resurrección. Su fe no necesitó ver para creer, sino que creyó para ver. María es el modelo supremo de la fe cristiana en la resurrección.",
    prayer: "María, que creíste sin ver, fortalece mi fe para que camine por las promesas de Dios y no por las apariencias del mundo."
  },
  {
    day: 27,
    title: "La Resurrección y la Familia",
    month: "Abril",
    verse: {
      text: "Porque también el Hijo del Hombre vino a salvar lo que se había perdido.",
      reference: "Mateo 18:11"
    },
    reflection: "La resurrección de Jesús tiene un impacto profundo en la familia humana. María, como madre de la familia humana redimida, intercede por todas las familias del mundo. El hogar de Nazaret fue el primer templo de la resurrección, donde la fe se vivía cotidianamente.",
    prayer: "María, madre de la familia humana, bendice las familias del mundo y haz que la esperanza de la resurrección las una en el amor."
  },
  {
    day: 28,
    title: "El Gozo de María",
    month: "Abril",
    verse: {
      text: "Alégrate, llena de gracia, el Señor es contigo; bendita tú eres entre todas las mujeres.",
      reference: "Lucas 1:28"
    },
    reflection: "El saludo del ángel a María contenía una alegría que se cumpliría plenamente en la resurrección. María, llena de gracia, fue la primera en experimentar el gozo de la salvación. Su alegría no era por ella sola, sino por toda la humanidad redimida.",
    prayer: "María, llena de gracia, que tu gozo se derrame en mi corazón como derramaste el don de la vida en el mundo."
  },
  {
    day: 29,
    title: "La Promesa Eterna",
    month: "Abril",
    verse: {
      text: "Porque de tal manera amó Dios al mundo, que dio a su Hijo unigénito, para que todo aquel que en él cree no se pierda, sino que tenga vida eterna.",
      reference: "Juan 3:16"
    },
    reflection: "María recibió en su seno al Hijo único del Padre, y ahora comparte con todos los fieles la vida eterna que él prometió. La resurrección es la garantía de que la vida eterna es real y accesible para todos. María nos guía por el camino que lleva a la vida sin fin.",
    prayer: "María, que custodias la promesa de la vida eterra, guíame fielmente hasta el día en que contemple a tu Hijo cara a cara."
  },
  {
    day: 30,
    title: "María, Puerta del Cielo",
    month: "Abril",
    verse: {
      text: "Yo soy la puerta; si alguno entra por mí, será salvo, y entrará y saldrá, y hallará pastos.",
      reference: "Juan 10:9"
    },
    reflection: "María es la puerta por la que entró el Salvador al mundo, y es también la puerta por la que nosotros entramos en la vida de la resurrección. Ella nos presenta ante su Hijo y nos guía con maternal cuidado. En este último día de abril, renovamos nuestra consagración a ella que nos lleva a Cristo.",
    prayer: "María, puerta del cielo, que la gracia de la resurrección me acompañe siempre y me conduzca a la vida eterna junto a tu Hijo. Amén."
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
    title: "Los Ángeles de Portugal",
    month: "Julio",
    verse: {
      text: "El Señor te guarde; el Señor haga resplandecer su rostro sobre ti y te conceda su paz.",
      reference: "Números 6:24-26"
    },
    reflection: "Antes de que María apareciera en Fátima, fueron tres ángeles quienes prepararon el corazón de losPastores. San Rafael, san Miguel y san Gabriel nos recuerdan que Dios siempre envía mensajeros para guiarnos. Invocemos a los ángeles guardianes para que nos dispongan a recibir las gracias del Cielo.",
    prayer: "Ángeles de Portugal, mensajeros del Altísimo, que preparasteis el corazón de losPastores para recibir a la Virgen, interceded por nosotros para que estemos dispuestos a escuchar el llamado de Dios. Amén."
  },
  {
    day: 2,
    title: "La Primera Aparición",
    month: "Julio",
    verse: {
      text: "Al oír esto, los pastores se apresuraron a ir a Belén y encontraron a María, a José y al niño acostado en el pesebre.",
      reference: "Lucas 2:16"
    },
    reflection: "El 13 de mayo de 1917, la Virgen María se apareció por primera vez a Lucía, Francisco y Jacinta en la Cova da Iria. Como los pastores de Belén, estos niños supieron reconocer la presencia de Dios en lo humilde. María nos llama a todos, sin importar nuestra condición, para recibir su mensaje de amor.",
    prayer: "Virgen de Fátima, que te dignaste aparecer a losPastores más humildes, danos la gracia de reconocerte en las personas sencillas y de responder a tu llamado con fe sencilla y confiada. Amén."
  },
  {
    day: 3,
    title: "Â¿Quién Eres Tú?",
    month: "Julio",
    verse: {
      text: "Entonces la mujer vio que el árbol era bueno para comer, agradable a la vista y útil para alcanzar la sabiduría, tomó de su fruta y comió; también dio a su marido, que estaba con ella, y él comió.",
      reference: "Génesis 3:6"
    },
    reflection: "Cuando losPastores preguntaron \"Â¿Quién eres tú?\", la Virgen respondió: \"Yo soy la Virgen del Rosario\". Este título nos invita a descubrir su identidad a través de la oración. María no busca ser adorada, sino que nos lleve a su Hijo Jesús. En cada misterio del Rosario descubrimos quién es Ella realmente.",
    prayer: "Virgen del Rosario, enséñanos a conocerte a través de la oración y a descubrir en cada misterio el amor de tu Hijo Jesús. Que tu nombre sea siempre en nuestros labios y en nuestros corazones. Amén."
  },
  {
    day: 4,
    title: "El Sacrificio por los Pecadores",
    month: "Julio",
    verse: {
      text: "Porque tanto amó Dios al mundo que dio a su Hijo único, para que todo el que crea en él no se pierda sino que tenga vida eterna.",
      reference: "Juan 3:16"
    },
    reflection: "María pidió a losPastores que ofrecieran sacrificios por la conversión de los pecadores. Este mensaje nos recuerda que el sacrificio unido a Cristo tiene un valor redentor. No se trata de sufrir por sufrir, sino de ofrecer nuestras pruebas por amor, imitando a Jesús en la cruz.",
    prayer: "Señor Jesús, que en la cruz ofreciste tu vida por amor a nosotros, ayúdanos a unir nuestros sufrimientos a los tuyos por la conversión de todos los pecadores del mundo. Amén."
  },
  {
    day: 5,
    title: "El Infierno Existe",
    month: "Julio",
    verse: {
      text: "Y serán echados en la hoguera; allí será el lloro y el rechinar de dientes.",
      reference: "Mateo 13:42"
    },
    reflection: "La Virgen mostró a losPastores una visión del infierno para que comprendieran la gravedad del pecado. Este no es un mensaje de miedo, sino de amor: Dios no quiere que nadie se pierda. La realidad del infierno nos recuerda la urgencia de la conversión y la importancia de vivir según el Evangelio.",
    prayer: "Virgen de Fátima, que con dolor mostraste a losPastores la realidad del infierno, ayúdanos a vivir con la consciencia de que nuestras decisiones eternas son importantes, y a buscar siempre la salvación de todas las almas. Amén."
  },
  {
    day: 6,
    title: "El Corazón Inmaculado de María",
    month: "Julio",
    verse: {
      text: "En el principio era el Verbo, y el Verbo estaba con Dios, y el Verbo era Dios.",
      reference: "Juan 1:1"
    },
    reflection: "La Virgen prometió que al final su Corazón Inmaculado triunfará. Este triunfo no es de poder worldly, sino de amor puro y sin mancha. El Corazón de María fue el templo vivo donde habitó el Verbo de Dios, y su pureza nos recuerda la dignidad de ser hijos de Dios.",
    prayer: "Corazón Inmaculado de María, templo viviente del Verbo, que tu pureza nos recuerde nuestra dignidad de hijos de Dios, y que tu triunfo sea la victoria del amor sobre el odio, de la luz sobre las tinieblas. Amén."
  },
  {
    day: 7,
    title: "La Oración del Rosario",
    month: "Julio",
    verse: {
      text: "Rezo yo al Señor, que es digno de alabanza, y fui salvo de mis enemigos.",
      reference: "Salmo 18:4"
    },
    reflection: "María pidió específicamente que se recitara el Rosario cada día. Esta oración nos permite meditar los misterios de la vida de Jesús y María, y es un arma poderosa contra el mal. En cada Ave María elevamos nuestra voz junto con la de María hacia Dios.",
    prayer: "Virgen del Rosario, que en Fátima nos pediste recitáramos el Rosario cada día, enséñanos a valorar esta oración tan poderosa y a encontrar en ella la fuerza para enfrentar cada día. Amén."
  },
  {
    day: 8,
    title: "Primera Satruday: La Paz",
    month: "Julio",
    verse: {
      text: "Os dejo la paz, os doy mi paz. No os la doy como el mundo la da. No se turbe vuestro corazón ni se acobarde.",
      reference: "Juan 14:27"
    },
    reflection: "La Virgen prometió una paz especial a quien cumpliera con la devoción de los primeros sábados. Esta paz no es ausencia de problemas, sino la serenidad del alma que sabe que está en la gracia de Dios. Es la paz que Cristo nos dejó, una paz que el mundo no puede dar.",
    prayer: "Señor Jesús, que nos dejaste tu paz, concédenos la gracia de vivir en ella cada día, y que la devoción de los primeros sábados nos acerque cada vez más a tu Corazón y al de tu Madre Santísima. Amén."
  },
  {
    day: 9,
    title: "La Comunión Reparadora",
    month: "Julio",
    verse: {
      text: "El que come mi carne y bebe mi sangre tiene vida eterna, y yo lo resucitaré en el último día.",
      reference: "Juan 6:54"
    },
    reflection: "María pidió la Comunión de Reparación los primeros sábados. Esta devoción nos recuerda que la Eucaristía es el alimento de nuestra alma y que podemos ofrecerla por las ofensas a los Corazones de Jesús y María. Cada Comunión reparadora es un acto de amor que consuela a Dios.",
    prayer: "Jesús Eucaristizado, que en la Comunión nos das tu cuerpo y tu sangre para nuestra vida eterna, ayúdanos a ofrecer cada Comunión reparadora por las ofensas a tus Sagrados Corazones y a los de tu Madre Santísima. Amén."
  },
  {
    day: 10,
    title: "Los Tres Pastores",
    month: "Julio",
    verse: {
      text: "Porque donde estén dos o tres reunidos en mi nombre, allí estoy yo en medio de ellos.",
      reference: "Mateo 18:20"
    },
    reflection: "Lucía, Francisco y Jacinta eranPastores humildes que Dios eligió para recibir su mensaje. Su sencillez y pureza de corazón los hicieron receptivos a la gracia. Nos recuerdan que no necesitamos grandes cualidades para ser instrumentos de Dios, solo un corazón disponible y humilde.",
    prayer: "Pastores de Fátima, Lucía, Francisco y Jacinta, que con vuestro ejemplo nos mostráis que la sencillez y la humildad abren las puertas del Cielo, interceded por nosotros para que tengamos corazones puros y disponibles para la voluntad de Dios. Amén."
  },
  {
    day: 11,
    title: "El Sacrificio de Francisco",
    month: "Julio",
    verse: {
      text: "Os he dado ejemplo para que hagáis lo que yo he hecho con vosotros.",
      reference: "Juan 13:15"
    },
    reflection: "Francisco murió joven, a los 10 años, ofreciendo sus sufrimientos por la conversión de los pecadores. Su vida fue un testimonio de amor incondicional a Dios y a la Virgen. Nos enseña que la santidad no depende de la longevidad, sino de la entrega total a la voluntad de Dios.",
    prayer: "San Francisco de Fátima, que con tu vida joven y santa nos muestras que la santidad es posible a cualquier edad, interceded por nosotros para que sepamos ofrecer cada día a Dios con amor, como tú lo hiciste. Amén."
  },
  {
    day: 12,
    title: "La Pureza de Jacinta",
    month: "Julio",
    verse: {
      text: "Bienaventurados los puros de corazón, porque ellos verán a Dios.",
      reference: "Mateo 5:8"
    },
    reflection: "Jacinta fue una mártir de la pureza, murió joven ofreciendo sus sufrimientos por la salvación de las almas. Su corazón puro la hizo digna de recibir mensajes extraordinarios de la Virgen. Nos recuerda que la pureza del corazón es el camino para ver a Dios.",
    prayer: "Santa Jacinta de Fátima, mártir de la pureza, que tu ejemplo nos inspire a mantener nuestro corazón puro y a ofrecer nuestros sufrimientos por la salvación de todas las almas. Amén."
  },
  {
    day: 13,
    title: "La Obediencia al Obispo",
    month: "Julio",
    verse: {
      text: "Obedeced a vuestros superiores y someteos a ellos, porque ellos velan por vuestras almas como quienes han de dar cuentas.",
      reference: "Hebreos 13:17"
    },
    reflection: "Lucía siempre consultó con su confesor y con el obispo sobre lo que debía hacer. Este ejemplo de obediencia eclesial es fundamental para discernir la voluntad de Dios. La verdadera devoción mariana siempre está en comunión con la Iglesia y su magisterio.",
    prayer: "Virgen de Fátima, que siempre guiaste a Lucía a la obediencia eclesial, ayúdanos a ser obedientes a la Iglesia y a nuestros superiores, para que así podamos discernir verdaderamente la voluntad de Dios en nuestras vidas. Amén."
  },
  {
    day: 14,
    title: "El Mensaje de Conversión",
    month: "Julio",
    verse: {
      text: "Arrepentíos y convertíos, para que se borren vuestros pecados.",
      reference: "Hechos 3:19"
    },
    reflection: "El mensaje central de Fátima es la conversión. María nos llama a volver a Dios con todo nuestro corazón, abandonando el pecado y abrazando la vida de gracia. La conversión no es un evento único, sino un camino continuo de regreso al Padre.",
    prayer: "Señor Jesús, que viniste a llamar a los pecadores, danos la gracia de la conversión verdadera, para que cada día volvamos a Ti con todo nuestro corazón y abandonemos todo lo que nos aleja de tu amor. Amén."
  },
  {
    day: 15,
    title: "La Oración por los Pecadores",
    month: "Julio",
    verse: {
      text: "Os digo que en el cielo habrá más alegría por un solo pecador que se convierta que por noventa y nueve justos que no necesiten de conversión.",
      reference: "Lucas 15:7"
    },
    reflection: "María nos pide que oremos por la conversión de los pecadores, porque el Cielo se alegra cuando un alma vuelve a Dios. Esta oración es un acto de caridad que trasciende nuestro egoísmo y nos abre al amor por los demás. Cada oración por un pecador es una obra de misericordia.",
    prayer: "Virgen de Fátima, que con amor maternal nos pides que oremos por los pecadores, enséñanos a tener corazón de madre que suplique por la conversión de todos, especialmente de los más alejados de Dios. Amén."
  },
  {
    day: 16,
    title: "El Poder del Rosario",
    month: "Julio",
    verse: {
      text: "En todo lugar donde yo haga memoria de ti, yo te haré llover bendiciones.",
      reference: "�‰xodo 20:24"
    },
    reflection: "El Rosario es el arma más poderosa que María nos ha dado. En cada misterio meditamos la vida de Jesús y María, y en cada Ave María elevamos nuestra oración al cielo. La Virgen prometió que el Rosario tendrá poder sobre todas las cosas.",
    prayer: "Virgen del Rosario, arma poderosa contra todas las fuerzas del mal, que tu intercesión nos proteja y nos conceda la gracia de recitar el Rosario cada día con fe y devoción. Amén."
  },
  {
    day: 17,
    title: "El Triunfo del Corazón Inmaculado",
    month: "Julio",
    verse: {
      text: "Al final, mi Corazón Inmaculado triunfará.",
      reference: "Fátima - Mensaje de la Virgen"
    },
    reflection: "La Virgen nos promete que al final triunfará su Corazón Inmaculado. Este triunfo no es de poder worldly, sino de amor puro y sin mancla. Es la victoria del bien sobre el mal, de la luz sobre las tinieblas. Nos da esperanza en los momentos más oscuros.",
    prayer: "Corazón Inmaculado de María, que tu triunfo sea la victoria del amor, de la justicia y de la paz en todo el mundo. Confiamos en tu promesa y esperamos con gozo el día en que tu Corazón reine en todos los corazones humanos. Amén."
  },
  {
    day: 18,
    title: "La Penitencia",
    month: "Julio",
    verse: {
      text: "Si alguno quiere ir en pos de mí, niéguese a sí mismo, tome su cruz y sígame.",
      reference: "Mateo 16:24"
    },
    reflection: "María nos pide que hagamos penitencia, no como castigo, sino como camino de amor. La penitencia es unirse al sacrificio de Cristo por la salvación del mundo. Cada pequeño sacrificio ofrecido con amor tiene un valor infinito ante Dios.",
    prayer: "Señor Jesús, que nos invitas a tomar nuestra cruz y seguirte, ayúdanos a ofrecer cada día nuestros sufrimientos y sacrificios por amor a Ti y por la salvación de todas las almas. Amén."
  },
  {
    day: 19,
    title: "La Devoción a los Corazones",
    month: "Julio",
    verse: {
      text: "Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré.",
      reference: "Mateo 11:28"
    },
    reflection: "La devoción a los Sagrados Corazones de Jesús y María es el corazón del mensaje de Fátima. Estos dos corazones unidos en amor nos invitan a descansar en ellos y a encontrar la paz que el mundo no puede dar. Son el refugio seguro en las tormentas de la vida.",
    prayer: "Sagrados Corazones de Jesús y María, refugio seguro de nuestras almas, que vuestra unión de amor nos proteja y nos conceda la gracia de vivir siempre unidos a Dios y a la voluntad divina. Amén."
  },
  {
    day: 20,
    title: "La Gracia de la Conversión",
    month: "Julio",
    verse: {
      text: "No quiero la muerte del pecador, sino que se convierta y viva.",
      reference: "Ezequiel 33:11"
    },
    reflection: "Dios siempre ofrece la oportunidad de convertirse, hasta el último instante de la vida. Esta misericordia infinita nos recuerda que nunca es tarde para volver a Dios. La conversión es un regalo de su gracia que siempre está disponible para quien lo busque con sinceridad.",
    prayer: "Padre Misericordioso, que no quieres la muerte del pecador sino su conversión, danos la gracia de aprovechar cada momento para volver a Ti, y de ser instrumentos de tu misericordia para con los demás. Amén."
  },
  {
    day: 21,
    title: "El Pecado del Mundo",
    month: "Julio",
    verse: {
      text: "El Espíritu es el que da vida; la carne no sirve de nada. Las palabras que yo os he dicho son espíritu y son vida.",
      reference: "Juan 6:63"
    },
    reflection: "María lloró por los pecados del mundo, mostrando su dolor de madre ante la ofensa a Dios. Este llanto nos recuerda que el pecado no solo ofende a Dios, sino que también hiere el corazón de su Madre Santísima. Debemos ser sensibles al mal que nos rodea.",
    prayer: "Virgen de Fátima, que lloraste por los pecados del mundo, enséñanos a lamentar nuestros pecados y a ser sensibles al mal que ofende a Dios y a tu Corazón maternal. Amén."
  },
  {
    day: 22,
    title: "La Paz del Alma",
    month: "Julio",
    verse: {
      text: "Dios no es el Dios del desorden, sino de la paz.",
      reference: "1 Corintios 14:33"
    },
    reflection: "La paz que María promete a los que cumplen con la devoción de los primeros sábados es una paz que sobrepasa todo entendimiento. No es la paz del mundo, que depende de las circunstancias, sino la paz de Dios que habita en el alma que está en gracia.",
    prayer: "Señor de la Paz, que tu paz, que sobrepasa todo entendimiento, guarde nuestros corazones y mentes en Cristo Jesús, y que la devoción de los primeros sábados nos acerque cada vez más a esta paz divina. Amén."
  },
  {
    day: 23,
    title: "El Rosario Cenáculo",
    month: "Julio",
    verse: {
      text: "Permaneced en mí, como yo permanezco en vosotros.",
      reference: "Juan 15:4"
    },
    reflection: "El Rosario es un cenáculo donde permanecemos con María y Jesús, como los apóstoles en el Cenáculo. En cada misterio nos unimos a ellos en oración y meditación. Este cenáculo espiritual nos fortalece para vivir nuestra fe en el mundo.",
    prayer: "Virgen del Cenáculo, que nos reúnes con Jesús en cada misterio del Rosario, ayúdanos a permanecer unidos a �‰l en la oración y en la vida diaria, para que su amor transforme todo nuestro ser. Amén."
  },
  {
    day: 24,
    title: "La Esperanza en Tiempos Oscuros",
    month: "Julio",
    verse: {
      text: "Aunque camine por el valle de sombra de muerte, no temeré mal alguno, porque tú estás conmigo.",
      reference: "Salmo 23:4"
    },
    reflection: "María apareció en un momento de guerra y sufrimiento, trayendo esperanza a un mundo en tinieblas. Su mensaje nos recuerda que incluso en los momentos más oscuros, Dios está presente y María nos guía hacia la luz. La esperanza cristiana no defrauda.",
    prayer: "Virgen de la Esperanza, que apareciste en Fátima trayendo luz a un mundo en tinieblas, fortalece nuestra esperanza en los momentos oscuros de nuestra vida y guíanos siempre hacia la luz de tu Hijo Jesús. Amén."
  },
  {
    day: 25,
    title: "La Caridad hacia los Pecadores",
    month: "Julio",
    verse: {
      text: "Os doy un mandamiento nuevo: os améis los unos a losotros. Como yo os he amado, así también vosotros amaos los unos a losotros.",
      reference: "Juan 13:34"
    },
    reflection: "El amor a los pecadores es esencial en el mensaje de Fátima. No podemos orar por ellos si no los amamos primero. Este amor es el mismo amor de Jesús en la cruz, que perdonó a sus verdugos. Debemos imitar este amor radical que supera todo entendimiento.",
    prayer: "Señor Jesús, que en la cruz perdonaste a tus verdugos, enséñanos a amar a los pecadores como Tú los amas, y a orar por ellos con la misma caridad con la que Tú oraste por nosotros. Amén."
  },
  {
    day: 26,
    title: "La Reconciliación con Dios",
    month: "Julio",
    verse: {
      text: "Si confessamos nuestros pecados, él es fiel y justo para perdonarnos y purificarnos de toda maldad.",
      reference: "1 Juan 1:9"
    },
    reflection: "La reconciliación con Dios se logra principalmente a través del Sacramento de la Reconciliación. María nos invita a acudir con frecuencia a este sacramento de misericordia, donde Dios nos limpia de todo pecado y nos restaura la gracia. Es el camino más seguro para la paz del alma.",
    prayer: "Virgen de Fátima, que nos invitas a la reconciliación con Dios, ayúdanos a acudir con frecuencia al Sacramento de la Reconciliación, donde encontramos el perdón y la paz que nuestro alma necesita. Amén."
  },
  {
    day: 27,
    title: "La Oración en Familia",
    month: "Julio",
    verse: {
      text: "En vuestra casa no se apagará la lámpara ni se secará la mecha del candelero.",
      reference: "2 Reyes 4:33"
    },
    reflection: "María pidió que el Rosario se rezara en familia, porque la familia es la célula fundamental de la Iglesia. La oración en familia fortalece los lazos y protege el hogar de las fuerzas del mal. Un hogar que ora unido es un hogar que florece en la paz de Dios.",
    prayer: "Virgen de Fátima, que nos pides rezar el Rosario en familia, fortalece nuestros hogares con tu presencia y ayúdanos a hacer de nuestros hogares santuarios de oración y amor. Amén."
  },
  {
    day: 28,
    title: "La Pureza de Intención",
    month: "Julio",
    verse: {
      text: "Cuando ores, entra en tu aposento, cierra la puerta y ora a tu Padre que está en lo secreto.",
      reference: "Mateo 6:6"
    },
    reflection: "La oración debe ser hecha con pureza de intención, buscando solo la gloria de Dios y no la aprobación de los hombres. LosPastores oraban con sencillez y sin pretensiones, y por eso la Virgen los eligió. La pureza de intención multiplica el valor de nuestra oración.",
    prayer: "Señor Dios, que conoces los secretos de nuestros corazones, purifica nuestras intenciones en la oración, para que busquemos siempre tu gloria y no la nuestra, como losPastores de Fátima. Amén."
  },
  {
    day: 29,
    title: "La Humildad de los Pastores",
    month: "Julio",
    verse: {
      text: "Si no os convertís y os hacéis como los niños, no entraréis en el Reino de los Cielos.",
      reference: "Mateo 18:3"
    },
    reflection: "La humildad de losPastores fue la clave para recibir el mensaje de Fátima. Como niños, no tenían orgullo ni pretensiones, y por eso pudieron ver a la Virgen y escuchar sus palabras. Jesús nos invita a ser como niños para entrar en el Reino.",
    prayer: "Virgen de Fátima, que losPastores con su humildad nos enseñan que la sencillez abre las puertas del Cielo, danos la gracia de ser humildes como ellos, para que podamos recibir las bendiciones que Dios nos tiene preparadas. Amén."
  },
  {
    day: 30,
    title: "El Martirio de Jacinta",
    month: "Julio",
    verse: {
      text: "Bienaventurados los que son perseguidos por causa de la justicia, porque de ellos es el Reino de los Cielos.",
      reference: "Mateo 5:10"
    },
    reflection: "Jacinta aceptó sus sufrimientos con amor heroico, ofreciéndolos por la conversión de los pecadores. Su martirio no fue de sangre, sino de amor incondicional a Dios. Nos enseña que el sufrimiento ofrecido con amor tiene un poder redentor infinito.",
    prayer: "Santa Jacinta de Fátima, que con amor heroico ofreciste tus sufrimientos por la conversión de los pecadores, interceded por nosotros para que sepamos ofrecer nuestros sufrimientos con el mismo amor y generosidad que tú lo hiciste. Amén."
  },
  {
    day: 31,
    title: "La �šltima Aparición",
    month: "Julio",
    verse: {
      text: "No os turbéis ni os acobardeis. Creed en Dios y creed también en mí.",
      reference: "Juan 14:1"
    },
    reflection: "En la última aparición, la Virgen se reveló como la Inmaculada Concepción y prometió el triunfo de su Corazón. Este mensaje final nos llena de esperanza y nos recuerda que, a pesar de las pruebas, la victoria final será de Dios. Debemos perseverar en la fe hasta el final.",
    prayer: "Inmaculada Concepción, Reina de Fátima, que en tu última aparición nos prometiste el triunfo de tu Corazón, fortalece nuestra fe en los momentos de prueba y ayúdanos a perseverar hasta el final, confiando en la victoria de Dios. Amén."
  }

, {
    day: 1,
    title: "El Umbral de la Gloria",
    month: "Agosto",
    verse: {
      text: "Porque así subirá el que fue llevado en nubes al cielo, para volver a ver la tierra.",
      reference: "Isaías 60:8"
    },
    reflection: "Agosto comienza con el misterio de la Dormición, cuando María, llena de gracia, fue preparada para su tránsito celestial. Su vida terrenal culmina en una jornada hacia la plenitud de la gloria de Dios.",
    prayer: "Santa María, madre del cielo, prepárame para cada día de agosto con tu luz celestial. Amén."
  },
  {
    day: 2,
    title: "La Mujer Vestida de Sol",
    month: "Agosto",
    verse: {
      text: "Apareció en el cielo una gran señal: una mujer vestida de sol, con la luna bajo sus pies y una corona de doce estrellas.",
      reference: "Apocalipsis 12:1"
    },
    reflection: "María es la mujer glorificada que el Apocalipsis nos presenta. Su asunción al cielo es el cumplimiento de esta visión profética, donde la Madre de Dios reina en la gloria celestial.",
    prayer: "María, mujer vestida de sol, intercede por nosotros ante tu Hijo Jesús. Amén."
  },
  {
    day: 3,
    title: "Dormición y Resurrección",
    month: "Agosto",
    verse: {
      text: "Os soy la resurrección y la vida; el que cree en mí, aunque muera, vivirá.",
      reference: "Juan 11:25"
    },
    reflection: "La Dormición de María no es un final, sino un tránsito hacia la vida eterna. Como Jesús prometió, ella experimenta la plenitud de la resurrección en cuerpo y alma.",
    prayer: "Señor Jesús, que la fe de María nos recuerde que la muerte no tiene poder sobre nosotros. Amén."
  },
  {
    day: 4,
    title: "Asunta al Cielo",
    month: "Agosto",
    verse: {
      text: "Y cuando hubo dicho esto, fue elevada a la vista de ellos, y una nube la recogió y desapareció a sus ojos.",
      reference: "Hechos 1:9"
    },
    reflection: "Así como Cristo ascendió al cielo, María fue asunta en cuerpo y alma a la gloria celestial. La tradición nos narra este misterioso y glorioso acontecimiento.",
    prayer: "María asunta al cielo, enséñame a elevar mi corazón hacia Dios cada día. Amén."
  },
  {
    day: 5,
    title: "Corona de Doce Estrellas",
    month: "Agosto",
    verse: {
      text: "Las doce estrellas representan a los doce patriarcas y a los apóstoles, y sobre ellos María reina.",
      reference: "Génesis 37:9"
    },
    reflection: "María lleva una corona de doce estrellas, símbolo de su autoridad como Reina de los cielos. Ella es Madre de la Iglesia y guía a todos sus hijos con amor maternal.",
    prayer: "Reina del cielo y de la tierra, corona mi día con tu bendición. Amén."
  },
  {
    day: 6,
    title: "El Tránsito de la Madre",
    month: "Agosto",
    verse: {
      text: "En Dios está mi salvación y mi gloria; mi refugio seguro es Dios.",
      reference: "Salmo 62:7"
    },
    reflection: "El tránsito de María al cielo fue un acto de amor divino. Ella, que fue refugio seguro de Jesús en la tierra, ahora encuentra su refugio eterno en Dios.",
    prayer: "Dios de amor, recibe a María en tu gloria y danos la gracia de seguirla. Amén."
  },
  {
    day: 7,
    title: "María y el Misterio Pascual",
    month: "Agosto",
    verse: {
      text: "Porque del todo fue hecha semejante a sus hermanos.",
      reference: "Hebreos 2:17"
    },
    reflection: "María participó plenamente del misterio pascual de Cristo. Su Dormición es un preludio de la resurrección que espera a todos los fieles.",
    prayer: "María, compañera en el misterio pascual, fortalece mi fe en la resurrección. Amén."
  },
  {
    day: 8,
    title: "La Tumba Vacía",
    month: "Agosto",
    verse: {
      text: "No está aquí, porque ha resucitado, como dijo.",
      reference: "Mateo 28:6"
    },
    reflection: "Al igual que la tumba de Jesús, la tumba de María fue encontrada vacía. Los apóstoles atestiguaron su glorificación y su asunción a los cielos.",
    prayer: "Cristo resucitado, que la tumba vacía de María nos recuerde la esperanza de la vida eterna. Amén."
  },
  {
    day: 9,
    title: "Mediadora de Gracias",
    month: "Agosto",
    verse: {
      text: "Dichosos los que escuchan la palabra de Dios y la cumplen.",
      reference: "Lucas 11:28"
    },
    reflection: "Desde el cielo, María intercede por nosotros como Mediadora de todas las gracias. Ella nos obtiene del cielo las gracias que necesitamos para caminar en santidad.",
    prayer: "María, mediadora de gracias, intercede por mí ante tu Hijo Jesús. Amén."
  },
  {
    day: 10,
    title: "El Don de la Sabiduría",
    month: "Agosto",
    verse: {
      text: "El principio de la sabiduría es temer al Señor; conocer al Santo es prudencia.",
      reference: "Proverbios 9:10"
    },
    reflection: "María, llena de sabiduría divina, nos enseña a temer al Señor y a caminar en sus caminos. Su asunción es el premio a una vida de fe inquebrantable.",
    prayer: "María, madre de la sabiduría, ilumina mi mente con tu conocimiento divino. Amén."
  },
  {
    day: 11,
    title: "Asunta en Cuerpo y Alma",
    month: "Agosto",
    verse: {
      text: "El cuerpo no es fornicación, sino que es para el Señor, y el Señor para el cuerpo.",
      reference: "1 Corintios 6:13"
    },
    reflection: "La asunción de María en cuerpo y alma es un testimonio de la dignidad del cuerpo humano. Ella fue glorificada completa, como esperamos serlo en la resurrección final.",
    prayer: "Señor, que nuestra cuerpo y alma sean dignos de tu gloria, como el de María. Amén."
  },
  {
    day: 12,
    title: "Reina de los Ángeles",
    month: "Agosto",
    verse: {
      text: "Y se oyeron voces y cantos y truenos de la gran multitud de ángeles.",
      reference: "Apocalipsis 5:11"
    },
    reflection: "Al llegar al cielo, María fue recibida por los coros de ángeles. Ella es la Reina de los ángeles, glorificada en la corte celestial.",
    prayer: "Reina de los ángeles, pide a los ángeles que nos protejan y guíen. Amén."
  },
  {
    day: 13,
    title: "La Gloria de María",
    month: "Agosto",
    verse: {
      text: "Y su brillo es como el resplandor del sol, su belleza como el de la luna.",
      reference: "Cantar de los Cantares 6:10"
    },
    reflection: "La gloria de María supera todo esplendor terrenal. Su belleza refleja la perfección de la gracia divina que la llenó por completo.",
    prayer: "María, reflejo de la gloria de Dios, ilumina mi vida con tu esplendor. Amén."
  },
  {
    day: 14,
    title: "El Camino al Cielo",
    month: "Agosto",
    verse: {
      text: "Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",
      reference: "Juan 14:6"
    },
    reflection: "María nos muestra el camino al cielo: una vida de fe, obediencia y amor. Ella caminó fielmente con Dios y ahora reina en su gloria.",
    prayer: "Jesús, que María nos enseñe a caminar en tu camino hacia el cielo. Amén."
  },
  {
    day: 15,
    title: "Asunción de María - Solemnidad",
    month: "Agosto",
    verse: {
      text: "Porque ha mirado la humildad de su sierva, y desde ahora me llamarán bienaventurada todas las generaciones.",
      reference: "Lucas 1:48"
    },
    reflection: "Hoy celebramos la Asunción de María a los cielos. Ella fue exaltada porque su humildad y obediencia la hicieron digna de la gloria divina.",
    prayer: "Santa María, madre de Dios, que tu asunción nos llene de esperanza y alegría. Â¡Amén!"
  },
  {
    day: 16,
    title: "Después de la Solemnidad",
    month: "Agosto",
    verse: {
      text: "Dichosos los pobres de espíritu, porque de ellos es el reino de los cielos.",
      reference: "Mateo 5:3"
    },
    reflection: "María, la más humilde de las criaturas, fue exaltada en el cielo. Su pobreza de espíritu fue la llave que abrió las puertas de la gloria celestial.",
    prayer: "María, enséñame la humildad que conduce al cielo. Amén."
  },
  {
    day: 17,
    title: "María, Madre de la Iglesia",
    month: "Agosto",
    verse: {
      text: "He aquí tu madre.",
      reference: "Juan 19:27"
    },
    reflection: "Desde el cielo, María continúa siendo Madre de la Iglesia. Ella nos cuida con el mismo amor con que cuidó a Jesús y a los apóstoles.",
    prayer: "María, madre de la Iglesia, cuida a todos tus hijos en este mundo. Amén."
  },
  {
    day: 18,
    title: "La Esperanza de la Gloria",
    month: "Agosto",
    verse: {
      text: "Porque nuestra ciudadanía está en los cielos, de donde también esperamos al Salvador.",
      reference: "Filipenses 3:20"
    },
    reflection: "La asunción de María es una promesa de nuestra propia glorificación. Ella fue la primera en recibir la plenitud de lo que Dios tiene preparado para sus hijos.",
    prayer: "Señor, que la esperanza de la gloria nos mantenga firmes en la fe. Amén."
  },
  {
    day: 19,
    title: "El Cuerpo Glorificado",
    month: "Agosto",
    verse: {
      text: "Se sembrará en corrupción, resucitará en incorrupción; se sembrará en vileza, resucitará en gloria.",
      reference: "1 Corintios 15:42"
    },
    reflection: "María recibió un cuerpo glorificado, libre de toda corrupción. Esto nos recuerda que también nosotros seremos transformados en la resurrección.",
    prayer: "Dios de gloria, que tu resurrección nos dé esperanza de un cuerpo glorificado. Amén."
  },
  {
    day: 20,
    title: "La Estrella de la Mañana",
    month: "Agosto",
    verse: {
      text: "Estrella resplandeciente y luminosa eres tú, oh amada mía.",
      reference: "Cantar de los Cantares 2:5"
    },
    reflection: "María es la Estrella de la Mañana que nos guía hacia Cristo. Su luz celestial ilumina nuestro camino terrenal hacia la eternidad.",
    prayer: "Estrella de la mañana, guía mis pasos hacia tu Hijo Jesús. Amén."
  },
  {
    day: 21,
    title: "La Vida Contemplativa",
    month: "Agosto",
    verse: {
      text: "María se sentó a los pies del Señor para escuchar su palabra.",
      reference: "Lucas 10:39"
    },
    reflection: "La vida de María fue una continua contemplación de Dios. Desde el cielo, ella contempla la faz del Señor y goza de su presencia eterna.",
    prayer: "María, madre contemplativa, enséñame a buscar a Dios en la oración. Amén."
  },
  {
    day: 22,
    title: "El Reino de los Cielos",
    month: "Agosto",
    verse: {
      text: "Arrepentíos, porque el reino de los cielos se ha acercado.",
      reference: "Mateo 4:17"
    },
    reflection: "María entra plenamente en el reino de los cielos. Su asunción es un testimonio de que el reino prometido por Jesús es real y está preparado para sus fieles.",
    prayer: "Jesús, que el reino de los cielos sea nuestra meta suprema. Amén."
  },
  {
    day: 23,
    title: "La Paz Eterna",
    month: "Agosto",
    verse: {
      text: "Os dejo la paz, os doy mi paz; no como el mundo la da, yo os la doy.",
      reference: "Juan 14:27"
    },
    reflection: "María goza de la paz eterna en el cielo. La paz que Cristo prometió se cumple plenamente en la vida celestial de nuestra Madre.",
    prayer: "María, madre de la paz, regálame tu paz en los momentos de prueba. Amén."
  },
  {
    day: 24,
    title: "María y los Santos",
    month: "Agosto",
    verse: {
      text: "Así que nosotros, rodeados de tan grande nube de testigos, despojémonos de todo peso.",
      reference: "Hebreos 12:1"
    },
    reflection: "María reina entre los santos en la gloria celestial. Ella es la primera entre los santos, la más cercana al trono de Dios.",
    prayer: "María, reina de los santos, intercede por nosotros ante tu Hijo. Amén."
  },
  {
    day: 25,
    title: "La Llena de Gracia",
    month: "Agosto",
    verse: {
      text: "Salve, llena de gracia, el Señor es contigo.",
      reference: "Lucas 1:28"
    },
    reflection: "María fue llena de gracia desde su concepción, y ahora esa gracia ha alcanzado su plenitud en la gloria celestial. Ella es el ejemplo supremo de la acción de Dios en una criatura.",
    prayer: "María, llena de gracia, lléname de la gracia de Dios cada día. Amén."
  },
  {
    day: 26,
    title: "La Madre del Divino Pastor",
    month: "Agosto",
    verse: {
      text: "Yo soy el buen pastor; el buen pastor da su vida por las ovejas.",
      reference: "Juan 10:11"
    },
    reflection: "María cuidó de Jesús, el Buen Pastor, y ahora ella misma pastorea a la Iglesia desde el cielo. Su amor maternal no tiene límites.",
    prayer: "María, madre del Buen Pastor, cuida de la Iglesia y de todos sus hijos. Amén."
  },
  {
    day: 27,
    title: "La Victoria sobre la Muerte",
    month: "Agosto",
    verse: {
      text: "Â¡Oh muerte, dónde está tu victoria? Â¡Oh muerte, dónde está tu aguijón?",
      reference: "1 Corintios 15:55"
    },
    reflection: "La Dormición de María es una victoria sobre la muerte. Ella fue liberada de la corrupción mortal y asunta a la vida eterna.",
    prayer: "Cristo vencedor, que la victoria de María sobre la muerte fortalezca nuestra fe. Amén."
  },
  {
    day: 28,
    title: "El Consuelo de la Madre",
    month: "Agosto",
    verse: {
      text: "Como la madre consuela a su hijo, así yo os consolaré.",
      reference: "Isaías 66:13"
    },
    reflection: "María, desde el cielo, consuela a sus hijos con amor de madre. Ella nunca abandona a quienes la invocan.",
    prayer: "María, madre consoladora, sana mis heridas con tu amor maternal. Amén."
  },
  {
    day: 29,
    title: "La Promesa de la Gloria",
    month: "Agosto",
    verse: {
      text: "El que venciere, yo lo haré pilar en el templo de mi Dios.",
      reference: "Apocalipsis 3:12"
    },
    reflection: "María fue fiel hasta el fin y recibió la promesa de la gloria. Ella es pilar en el templo de Dios, testigo de la fidelidad divina.",
    prayer: "Señor, que seamos fieles como María para recibir la gloria prometida. Amén."
  },
  {
    day: 30,
    title: "La Comunión de los Santos",
    month: "Agosto",
    verse: {
      text: "Creo en la comunión de los santos.",
      reference: "Credo Apostólico"
    },
    reflection: "La asunción de María nos recuerda que estamos unidos a los santos del cielo. La comunión de los santos nos permite contar con la intercesión de María y todos los santos.",
    prayer: "María, fortalece nuestra comunión con los santos del cielo. Amén."
  },
  {
    day: 31,
    title: "La �šltima Palabra",
    month: "Agosto",
    verse: {
      text: "He aquí, yo estoy con vosotros todos los días, hasta el fin del mundo.",
      reference: "Mateo 28:20"
    },
    reflection: "María cierra el mes de agosto con su presencia maternal. Aunque fue asunta al cielo, ella sigue con nosotros, intercediendo y guiando a la Iglesia hasta el fin de los tiempos.",
    prayer: "María, madre fiel, quédate conmigo y guía mis pasos en este nuevo mes. Amén."
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
      text: "Bienaventurados los pobres de espíritu, porque de ellos es el Reino de los cielos.",
      reference: "Mateo 5:3"
    },
    reflection: "Hoy celebramos a todos los santos que ya gozan de la presencia de Dios. María, Madre de todos los santos, nos recuerda que cada uno de nosotros está llamado a la santidad, siguiendo su ejemplo de fe y obediencia.",
    prayer: "Madre María, intercede por nosotros ante tu Hijo, para que un día también gocemos de la gloria eterna junto a todos los santos."
  },
  {
    day: 2,
    title: "Los Fieles Difuntos: Oración por los que Partieron",
    month: "Noviembre",
    verse: {
      text: "Yo soy la resurrección y la vida; el que cree en mí vivirá, aunque haya muerto.",
      reference: "Juan 11:25"
    },
    reflection: "La Iglesia nos invita a orar por las almas del purgatorio, que esperan alcanzar la visión de Dios. María, que también sufrió la pérdida de Jesús, comprende nuestro dolor y nos acompaña en la oración por nuestros seres queridos.",
    prayer: "María, Reina de los Cielos, acoge en tu corazón a los fieles difuntos y obtén para ellos el descanso eterno."
  },
  {
    day: 3,
    title: "San Martín de Porres: Humildad y Servicio",
    month: "Noviembre",
    verse: {
      text: "El que quiera ser el primero, que sea el último de todos y el servidor de todos.",
      reference: "Marcos 9:35"
    },
    reflection: "San Martín de Porres nos enseñó que la santidad se encuentra en el servicio humilde a los demás. Como María, que se llamó a sí misma 'sierva del Señor', Martín vivió entregado a los más pobres con amor y dedicación.",
    prayer: "Señor, danos la humildad de San Martín y el corazón servicial de María para reconocer tu rostro en cada hermano necesitado."
  },
  {
    day: 4,
    title: "La Comunión de Santos: Unidos en Cristo",
    month: "Noviembre",
    verse: {
      text: "Pues aunque somos muchos, formamos un solo cuerpo en Cristo, y cada uno es miembro de los demás.",
      reference: "Romanos 12:5"
    },
    reflection: "La comunión de Santos nos recuerda que no estamos solos en nuestro caminar hacia Dios. María, como cabeza de esta comunión después de Cristo, nos une a todos los fieles de la tierra, del purgatorio y del cielo.",
    prayer: "Madre de la Iglesia, fortalece nuestra unión con los santos y ayúdanos a caminar juntos hacia el Reino de Dios."
  },
  {
    day: 5,
    title: "Santa Teresa de Ávila: El Camino de la Oración",
    month: "Noviembre",
    verse: {
      text: "La oración no es más que una conversación íntima de amistad con Dios.",
      reference: "Santa Teresa de Ávila"
    },
    reflection: "Santa Teresa de Jesús nos enseñó que la oración es el camino para encontrarse con Dios. María, que meditaba el corazón de Dios, nos invita a cultivar una vida de oración constante y sincera.",
    prayer: "Santa María, Madre de Dios, enséñanos a orar como Tú lo hiciste, con humildad, amor y confianza en la voluntad del Padre."
  },
  {
    day: 6,
    title: "San Carlos Borromeo: Pastor de Almas",
    month: "Noviembre",
    verse: {
      text: "Pastoread la grey de Dios que os ha sido encomendada, cuidando de ella no por obligación, sino espontáneamente.",
      reference: "1 Pedro 5:2"
    },
    reflection: "San Carlos Borromeo entregó su vida al servicio de las almas con caridad y celo pastoral. María, que también cuidó del pueblo de Dios, nos recuerda la importancia de cuidar a los más vulnerables.",
    prayer: "María, Madre de los pastores, intercede por la Iglesia para que tenga pastores santos que guíen al pueblo fiel."
  },
  {
    day: 7,
    title: "Santos Niños de la Guardia: Inocencia y Fe",
    month: "Noviembre",
    verse: {
      text: "Dejad a los niños venir a mí, porque de ellos es el Reino de los cielos.",
      reference: "Mateo 19:14"
    },
    reflection: "Los Santos Niños de Fátima nos muestran que la santidad no tiene edad. María eligió a unos pastorcitos para transmitir su mensaje de paz, recordándonos que Dios se comunica con los humildes y sencillos.",
    prayer: "María, Estrella de la Evangelización, protege a los niños del mundo y ayúdanos a recibir tu mensaje con corazón puro."
  },
  {
    day: 8,
    title: "Todos los Santos: Ejemplo para la Vida",
    month: "Noviembre",
    verse: {
      text: "Sed imitadores de Dios, como hijos amados.",
      reference: "Efesios 5:1"
    },
    reflection: "Cada santo es un ejemplo de cómo vivir la fe en diferentes circunstancias. María, la Santísima, es el modelo supremo de santidad para todos los tiempos y culturas.",
    prayer: "Madre de todos los santos, inspira en nosotros el deseo de seguir tus huellas y las de los santos hacia la plenitud de la vida en Cristo."
  },
  {
    day: 9,
    title: "Los Santos de las Américas: Fe y Cultura",
    month: "Noviembre",
    verse: {
      text: "En Dios confío, no temeré; Â¿qué me pueden hacer los hombres?",
      reference: "Salmo 56:11"
    },
    reflection: "Los santos de las Américas nos muestran cómo la fe se encarna en diferentes culturas. María, que también vive en múltiples expresiones culturales, nos une a todos en una sola fe.",
    prayer: "María de las Américas, que eres celebrada desde el Río Grande hasta la Patagonia, fortalece nuestra fe y unión como pueblo de Dios."
  },
  {
    day: 10,
    title: "San León Magno: La Defensa de la Fe",
    month: "Noviembre",
    verse: {
      text: "Ama a Dios y harás lo que �‰l quiera.",
      reference: "San Agustín"
    },
    reflection: "San León Magno defendió la fe cristiana con sabiduría y valentía. María, que guardaba todas estas cosas en su corazón, nos enseña a custodiar la fe que hemos recibido.",
    prayer: "María, Sede de la Sabiduría, ilumina a la Iglesia para que mantenga pura la fe transmitida por los Apóstoles y los Santos Padres."
  },
  {
    day: 11,
    title: "San Martín de Tours: La Caridad en Acción",
    month: "Noviembre",
    verse: {
      text: "El que tiene dos tunas, dé al que no tiene; el que tiene comida, haga lo mismo.",
      reference: "Lucas 3:11"
    },
    reflection: "San Martín de Tours compartió su capa con un pobre, cumpliendo así el mandamiento del amor. María, que acogió a Jesús en su vientre, nos invita a acoger a Cristo en los más necesitados.",
    prayer: "Señor, que la caridad de San Martín ilumine nuestro corazón para reconocer a Jesús en cada hermano que sufre."
  },
  {
    day: 12,
    title: "San José: Padre Protector de la Sagrada Familia",
    month: "Noviembre",
    verse: {
      text: "No temas recibir a María tu esposa, porque lo que ha engendrado en ella viene del Espíritu Santo.",
      reference: "Mateo 1:20"
    },
    reflection: "San José nos muestra cómo servir a Dios con obediencia y amor. Junto a María, formaron el hogar perfecto donde creció Jesús, modelo de toda familia cristiana.",
    prayer: "San José, padre putativo de Jesús, intercede por las familias del mundo para que sean santas y vivan en la paz de Cristo."
  },
  {
    day: 13,
    title: "San Cristóbal: El Santo del Camino",
    month: "Noviembre",
    verse: {
      text: "El que quiera ir conmigo, que tome su cruz y me siga.",
      reference: "Mateo 16:24"
    },
    reflection: "San Cristóbal nos protege en los viajes y nos recuerda que Cristo es el camino hacia el Padre. María, que acompañó a Jesús desde Belén hasta el Calvario, nos guía en nuestro peregrinar terrenal.",
    prayer: "María, Estrella del Camino, protégenos en todos nuestros viajes y guíanos siempre hacia tu Hijo Jesús."
  },
  {
    day: 14,
    title: "San Agustín: La Búsqueda de Dios",
    month: "Noviembre",
    verse: {
      text: "Inquieto está nuestro corazón hasta que descanse en Ti.",
      reference: "San Agustín"
    },
    reflection: "San Agustín descubrió que solo Dios puede llenar el corazón humano. María, que encontró la plenitud en Dios, nos invita a buscarlo con el mismo ardor que el obispo de Hipona.",
    prayer: "Madre del Verbo, ayuda a todos los que buscan a Dios a encontrar el descanso en tu Hijo Jesús."
  },
  {
    day: 15,
    title: "Santa Margarita de Cortona: El Amor Misericordioso",
    month: "Noviembre",
    verse: {
      text: "Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia.",
      reference: "Mateo 5:7"
    },
    reflection: "Santa Margarita de Cortona experimentó la misericordia de Dios y la compartió con los demás. María, que es Madre de Misericordia, nos enseña que el amor perdonador es el camino de la salvación.",
    prayer: "María, Madre de Misericordia, que tu corazón compasivo nos inspire a perdonar y ser instrumentos de paz."
  },
  {
    day: 16,
    title: "La Santísima Virgen y los Santos: Intercesión",
    month: "Noviembre",
    verse: {
      text: "Oíd a mi palabra, escuchad mi ruego, prestad oído a mi clamor.",
      reference: "Salmo 17:1"
    },
    reflection: "Los santos interceden por nosotros ante Dios, y María es la intercesora por excelencia. Cuando oramos a los santos, no los adoramos, sino que les pedimos que presenten nuestras súplicas al Señor.",
    prayer: "Santísima María, que tu intercesión poderosa obtenga para nosotros todas las gracias necesarias para vivir y morir en la fe."
  },
  {
    day: 17,
    title: "San Eligio: El Santo de los Artesanos",
    month: "Noviembre",
    verse: {
      text: "Trabajad de buena gana, como para el Señor y no para los hombres.",
      reference: "Colosenses 3:23"
    },
    reflection: "San Eligio dedicó su talento al servicio de Dios y de los demás. María, que trabajó en la crianza de Jesús, santificó el trabajo humano con su ejemplo de dedicación y amor.",
    prayer: "María, que trabajaste humildemente en Nazaret, bendice el trabajo de todos los artesanos y trabajadores."
  },
  {
    day: 18,
    title: "Dedicatoria de las Basílicas de los Santos Apóstoles",
    month: "Noviembre",
    verse: {
      text: "Vosotros sois la luz del mundo; no puede ocultarse una ciudad situada sobre un monto.",
      reference: "Mateo 5:14"
    },
    reflection: "Los apóstoles fueron la base de la Iglesia, y sus tumbas son lugares de peregrinación. María, que estuvo presente con los apóstoles en el Cenáculo, es la Madre que guía a la Iglesia naciente.",
    prayer: "Madre de los apóstoles, que la memoria de sus tumbas nos recuerde el compromiso de ser testigos de Cristo en el mundo."
  },
  {
    day: 19,
    title: "Santa Isabel de Hungría: La Caridad Organizada",
    month: "Noviembre",
    verse: {
      text: "En verdad os digo, cada vez que hicisteis esto a uno de estos mis hermanos más pequeños, lo hicisteis a mí.",
      reference: "Mateo 25:40"
    },
    reflection: "Santa Isabel organizó la caridad para atender a los enfermos y pobres. María, que visitó a Isabel y sirvió a los necesitados, nos inspira a ser manos activas del amor de Cristo.",
    prayer: "Santa María, que tu ejemplo de servicio inspire a las mujeres del mundo a entregar su vida por amor a los demás."
  },
  {
    day: 20,
    title: "San Felicísimo: La Fe en la Persecución",
    month: "Noviembre",
    verse: {
      text: "Si el mundo los persigue, acordaos de que a mí me persiguió primero.",
      reference: "Juan 15:20"
    },
    reflection: "Los mártires como San Felicísimo dieron su vida por la fe sin miedo. María, que estuvo al pie de la Cruz, nos enseña a perseverar en la persecución con fortaleza y esperanza.",
    prayer: "Madre de los mártires, fortalece a los cristianos que sufren persecución en el mundo y mantenlos firmes en la fe."
  },
  {
    day: 21,
    title: "Presentación de la Santísima Virgen: El Templo de Dios",
    month: "Noviembre",
    verse: {
      text: "Mi alma glorifica al Señor y mi espíritu se alegra en Dios mi Salvador.",
      reference: "Lucas 1:46-47"
    },
    reflection: "La Presentación de María en el Templo nos muestra su dedicación total a Dios desde niña. María, ofrecida al Señor, nos invita a consagrar nuestra vida a Dios con alegría y generosidad.",
    prayer: "Santísima María, que tuPresentación sea ejemplo de entrega total a Dios para todos los que te amamos."
  },
  {
    day: 22,
    title: "Santa Cecilia: La Música como Oración",
    month: "Noviembre",
    verse: {
      text: "Cantad al Señor un cántico nuevo, cantad al Señor toda la tierra.",
      reference: "Salmo 96:1"
    },
    reflection: "Santa Cecilia cantaba a Dios mientras su corazón palpita de amor por Cristo. María, que entonó el Magníficat, nos enseña que la música puede ser una expresión privilegiada de la alabanza divina.",
    prayer: "María, que tu cántico de alabanza resuene en nuestros corazones y nos inspire a glorificar a Dios con alegría."
  },
  {
    day: 23,
    title: "San Clemente: La Autoridad Servicial",
    month: "Noviembre",
    verse: {
      text: "El Hijo del Hombre no vino a ser servido, sino a servir y dar su vida en rescate por muchos.",
      reference: "Marcos 10:45"
    },
    reflection: "San Clemente ejerció su autoridad al servicio de la comunidad cristiana. María, que fue Reina sin dejar de ser sierva, nos muestra que el poder verdadero se ejerce sirviendo.",
    prayer: "Madre de la Iglesia, que los líderes de la comunidad cristiana sigan tu ejemplo de servicio humilde y amoroso."
  },
  {
    day: 24,
    title: "San Juan de la Cruz: La Noche Oscura del Alma",
    month: "Noviembre",
    verse: {
      text: "En un noche oscura, con ansias, en amores inflamada, Â¡oh dichosa ventura!, salí sin ser notada, estando ya mi casa sosegada.",
      reference: "San Juan de la Cruz"
    },
    reflection: "San Juan de la Cruz nos enseñó que las pruebas espirituales purifican el alma. María, que también vivió noches oscuras, nos acompaña en nuestra búsqueda de Dios incluso en la oscuridad.",
    prayer: "María, Madre de la Consolación, que tu presencia ilumine las noches oscuras de nuestra vida espiritual."
  },
  {
    day: 25,
    title: "Santa Catalina de Alejandría: La Sabiduría de la Fe",
    month: "Noviembre",
    verse: {
      text: "Dad testimonio con sabiduría ante los gentiles.",
      reference: "Colosenses 4:5"
    },
    reflection: "Santa Catalina defendió la fe con sabiduría y valentía ante los sabios del mundo. María, que meditaba las palabras de Dios, nos invita a conocer y defender nuestra fe con razones.",
    prayer: "María, Sede de la Sabiduría, que tu Hijo nos conceda la sabiduría para defender la fe con amor y respeto."
  },
  {
    day: 26,
    title: "San Leonardo de Noblat: La Liberación de los Cautivos",
    month: "Noviembre",
    verse: {
      text: "El Espíritu del Señor está sobre mí, porque me ha ungido para dar buenas nuevas a los pobres, para proclamar la libertad a los cautivos.",
      reference: "Lucas 4:18"
    },
    reflection: "San Leonardo liberaba a los prisioneros, siguiendo el ejemplo de Cristo. María, que nos libera del pecado con su intercesión, nos recuerda que la verdadera libertad viene de Dios.",
    prayer: "María, que venciste al mal, libera a todos los que sufren cautiverio de cualquier tipo y llévalos a la libertad de los hijos de Dios."
  },
  {
    day: 27,
    title: "Nuestra Señora de la Medalla Milagrosa",
    month: "Noviembre",
    verse: {
      text: "He aquí que el poderoso ha hecho por mí grandes cosas, y su nombre es santo.",
      reference: "Lucas 1:49"
    },
    reflection: "La Medalla Milagrosa es signo de la protección maternal de María sobre sus hijos. Cada vez que la llevamos, recordamos que María nos cubre con su manto y nos intercede ante Dios.",
    prayer: "María de la Medalla Milagrosa, que tu protección nos cubra siempre y que tu intercesión nos obtenga todas las gracias que necesitamos."
  },
  {
    day: 28,
    title: "San Gregorio Taumaturgo: El Poder de la Oración",
    month: "Noviembre",
    verse: {
      text: "En verdad os digo, si tuvieseis fe como un grano de mostaza, diríais a esta montaña: Pásate de aquí a allá, y se pasaría.",
      reference: "Mateo 17:20"
    },
    reflection: "San Gregorio Taumaturgo realizó milagros por el poder de la oración. María, que intercedió en las Bodas de Caná, nos enseña que la fe y la oración pueden cambiar las circunstancias más difíciles.",
    prayer: "Madre de Dios, que tu ejemplo nos enseñe a confiar en el poder de la oración y a pedir siempre lo que es necesario."
  },
  {
    day: 29,
    title: "San Saturnino: El Testimonio Valiente",
    month: "Noviembre",
    verse: {
      text: "No tengáis miedo de los que matan el cuerpo, pero no pueden matar el alma.",
      reference: "Mateo 10:28"
    },
    reflection: "San Saturnino dio su vida antes que renegar de Cristo. María, que permaneció firme al pie de la Cruz, nos fortalece para ser valientes en el testimonio de la fe, sin importar las consecuencias.",
    prayer: "María, Reina de los Mártires, que el ejemplo de San Saturnino nos inspire a dar testimonio de Cristo con valentía y fidelidad."
  },
  {
    day: 30,
    title: "San Andrés: El Primer Llamado",
    month: "Noviembre",
    verse: {
      text: "Jesús, al pasar, vio a Simón y a Andrés, su hermano, echando redes en el mar; eran pescadores. Y les dijo: Venid conmigo, y os haré pescadores de hombres.",
      reference: "Marcos 1:16-17"
    },
    reflection: "San Andrés fue el primero en seguir a Jesús y llamó a su hermano Pedro. María, que acogió el primer llamado de Dios en la Anunciación, nos invita a seguir a Cristo con generosidad y a compartir la fe con otros.",
    prayer: "María, Madre de todos los apóstoles, que el ejemplo de San Andrés nos anime a responder con prontitud al llamado de Cristo y a ser pescadores de hombres."
  }

, {
    day: 1,
    title: "Comienza la Esperanza",
    month: "Diciembre",
    verse: {
      text: "El pueblo que andaba en tinieblas vio una gran luz; los que moraban en tierra de sombra de muerte, luz resplandeció sobre ellos.",
      reference: "Isaías 9:2"
    },
    reflection: "Hoy comenzamos el Adviento, tiempo de espera y preparación para celebrar el nacimiento de Jesús. Como María, que esperó con fe inquebrantable, nosotros también somos llamados a encender la llama de la esperanza en nuestros corazones. El Señor viene a iluminar nuestra oscuridad.",
    prayer: "María, madre de la esperanza, ayúdanos a esperar con fe la venida de tu Hijo. Que esta temporada de Adviento encienda en nosotros el deseo de_preparemos nuestros corazones para recibir al Salvador."
  },
  {
    day: 2,
    title: "La Fe de María",
    month: "Diciembre",
    verse: {
      text: "Entonces María dijo: He aquí la sierva del Señor; hágase en mí según tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "María pronunció el sí más grande de la historia con una fe absoluta. No comprendía todo lo que Dios le proponía, pero confió plenamente en su plan. Su fe nos recuerda que Dios llama a personas sencillas para realizar obras extraordinarias.",
    prayer: "Santa María, fortalece nuestra fe para decir sí a Dios en cada momento. Que como tú, confiemos en sus promesas aun cuando no entendamos sus caminos."
  },
  {
    day: 3,
    title: "El Magnífat de la Gratitud",
    month: "Diciembre",
    verse: {
      text: "Engrandecerá mi alma al Señor, y se gozará mi espíritu en Dios mi Salvador.",
      reference: "Lucas 1:46-47"
    },
    reflection: "El cántico de María, el Magnífat, es un himno de gratitud y alabanza. Ella reconoció las maravillas que Dios había obrado en ella y a través de ella. Hoy somos invitados a alabar a Dios por las bendiciones que hemos recibido en este año.",
    prayer: "María, enséñanos a cantar como tú el Magnífat de la gratitud. Que nuestro corazón se llené de alabanza por todo lo que Dios ha hecho por nosotros."
  },
  {
    day: 4,
    title: "La Visitación: Alegría Compartida",
    month: "Diciembre",
    verse: {
      text: "Y sucedió que, cuando Isabel oyó el saludo de María, el niño saltó en su vientre; e Isabel fue llena del Espíritu Santo.",
      reference: "Lucas 1:41"
    },
    reflection: "María no guardó el don de Dios para sí misma, sino que fue a visitar a su prima Isabel. La alegría de encontrar a Cristo nos impulsa a compartirla con los demás. El Adviento es tiempo de comunión y de visitar a quienes más necesitan.",
    prayer: "Madre de Dios, danos el corazón generoso para compartir la alegría del Evangelio. Ayúdanos a ser instrumentos de tu amor en la visitación a nuestros hermanos."
  },
  {
    day: 5,
    title: "La Justicia de Dios",
    month: "Diciembre",
    verse: {
      text: "Desplegará con fuerza su brazo, y dispersará a los soberbios en los pensamientos de sus corazones.",
      reference: "Lucas 1:51"
    },
    reflection: "En el Magnífat, María proclama la justicia de Dios que derriba a los poderosos y exalta a los humildes. El Mesías que viene trae justicia para los oprimidos. Hoy recordamos que Dios escucha el clamor de los pobres y marginados.",
    prayer: "María, madre de los pobres, intercede por los que sufren injusticia. Que el Salvador que viene traiga paz y justicia a todos los pueblos de la tierra."
  },
  {
    day: 6,
    title: "La Misericordia Divina",
    month: "Diciembre",
    verse: {
      text: "Fez misericordia con los que le temen, de generación en generación.",
      reference: "Lucas 1:50"
    },
    reflection: "La misericordia de Dios se extiende a través de las generaciones, como María nos enseña. Cada Adviento renovamos la confianza en que Dios es Padre misericordioso que nunca abandona a sus hijos. Su amor es eterno y fiel.",
    prayer: "Santa María, que tu Hijo nos conceda una conversión profunda. Confiamos en la misericordia de Dios que nunca tiene fin."
  },
  {
    day: 7,
    title: "Preparando el Camino",
    month: "Diciembre",
    verse: {
      text: "Una voz clama en el desierto: Preparad el camino del Señor, enderezad sus senderos.",
      reference: "Isaías 40:3"
    },
    reflection: "Juan Bautista preparó el camino para Jesús, y nosotros somos llamados a preparar nuestros corazones. El Adviento es un tiempo de purificación y de alejarnos de lo que nos separa de Dios. Maria nos muestra que la humildad abre el camino al Señor.",
    prayer: "María, purifica nuestros corazones para que sean dignos de recibir a tu Hijo. Que cada día de Adviento sea un paso más cerca de Dios."
  },
  {
    day: 8,
    title: "Inmaculada Concepción",
    month: "Diciembre",
    verse: {
      text: "Y el ángel le dijo: No tengas miedo, María, porque has hallado gracia delante de Dios.",
      reference: "Lucas 1:30"
    },
    reflection: "Hoy celebramos la Inmaculada Concepción, cuando Dios preservó a María del pecado original para que fuera digna madre de su Hijo. Ella es el modelo de pureza y santidad a la que todos estamos llamados. La gracia de Dios nos precede y nos transforma.",
    prayer: "Inmaculada Concepción, madre hermosa, intercede por nosotros para que vivamos en la gracia de Dios. Que la pureza de tu corazón inspire la nuestra."
  },
  {
    day: 9,
    title: "El Don de la Sabiduría",
    month: "Diciembre",
    verse: {
      text: "Porque el niño nacido nos es dado, el hijo que se nos ha dado tendrá sobre su hombro el principado; y se llamará Consejero admirable, Dios fuerte, Padre eterno, Príncipe de paz.",
      reference: "Isaías 9:6"
    },
    reflection: "Jesús es la sabiduría de Dios encarnada. María acogió en su seno al Verbo eterno, fuente de toda sabiduría. Durante el Adviento, pedimos la sabiduría para comprender los misterios de la fe y vivir conforme a la voluntad de Dios.",
    prayer: "María, throne de la sabiduría, intercede por nosotros para que recibamos la luz del Espíritu Santo. Que la sabiduría de Cristo ilumine nuestros pensamientos y acciones."
  },
  {
    day: 10,
    title: "La Paz que Cristo Trae",
    month: "Diciembre",
    verse: {
      text: "Os dejo la paz, mi paz os doy; no la doy como la mundo la da. No se turbe vuestro corazón, ni se atemorice.",
      reference: "Juan 14:27"
    },
    reflection: "En medio de la agitación de la preparación navideña, Jesús nos ofrece su paz. Una paz que no depende de las circunstancias sino de su presencia. María vivió esta paz en todo momento, incluso en la cruz.",
    prayer: "María, reina de la paz, regálanos la paz de tu Hijo. Que en esta temporada de Adviento, tu presencia calme nuestras preocupaciones."
  },
  {
    day: 11,
    title: "El Esperar Activo",
    month: "Diciembre",
    verse: {
      text: "Por tanto, estad alerta, porque no sabéis en qué día vuestro Señor vendrá.",
      reference: "Mateo 24:42"
    },
    reflection: "La espera del Adviento no es pasiva sino activa. Como María que se preparó diligentemente, nosotros también debemos trabajar por el Reino de Dios. Cada buen acto, cada oración, es una preparación para la llegada del Salvador.",
    prayer: "Madre del Verbo, enséñanos a esperar activamente la venida de tu Hijo. Que nuestras obras de amor sean preparación para su llegada."
  },
  {
    day: 12,
    title: "La Promesa del Emmanuel",
    month: "Diciembre",
    verse: {
      text: "He aquí, una virgen concebirá y dará a luz un hijo, y llamarán su nombre Emanuel, que traducido es: Dios con nosotros.",
      reference: "Mateo 1:23"
    },
    reflection: "Emanuel significa Dios con nosotros, la promesa más hermosa de la Escritura. María fue el templo viviente donde Dios habitó entre los hombres. Hoy celebramos que Dios no nos dejó solos, sino que vino a vivir con nosotros.",
    prayer: "Santa María, que Dios esté con nosotros en cada momento de nuestras vidas. Gracias por haber sido el sagrado templo de la Encarnación."
  },
  {
    day: 13,
    title: "Lucía: La Luz en la Oscuridad",
    month: "Diciembre",
    verse: {
      text: "Yo soy la luz del mundo; el que me siga no andará en tinieblas, sino que tendrá la luz de la vida.",
      reference: "Juan 8:12"
    },
    reflection: "Santa Lucía nos recuerda que Cristo es la luz que disipa las tinieblas. En los días más cortos del año, su ejemplo nos invita a ser portadores de esa luz. María acogió la Luz del mundo y nos llama a hacer lo mismo.",
    prayer: "Santa Lucía, mártir de la fe, intercede por nosotros para que seamos luz en medio de la oscuridad. Que nuestra fe ilumine el camino de quienes nos rodean."
  },
  {
    day: 14,
    title: "La Encarnación: Dios se Hace Hombre",
    month: "Diciembre",
    verse: {
      text: "Y el Verbo se hizo carne, y habitó entre nosotros, y vimos su gloria, gloria como del unigénito del Padre, lleno de gracia y de verdad.",
      reference: "Juan 1:14"
    },
    reflection: "El misterio de la Encarnación es el centro de nuestra fe: Dios se hizo hombre para salvarnos. María fue el instrumento elegido para este plan eterno. Hoy renovamos la admiración por este amor tan grande que se hace carne.",
    prayer: "María, madre de la Encarnación, ayúdanos a comprender el amor infinito de Dios que se hizo hombre por nosotros. Que esta verdad transforme nuestras vidas."
  },
  {
    day: 15,
    title: "La Fecundidad del Sí",
    month: "Diciembre",
    verse: {
      text: "El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual el Santo que nacerá de ti será llamado Hijo de Dios.",
      reference: "Lucas 1:35"
    },
    reflection: "El sí de María produjo frutos eternos. Cuando decimos sí a Dios, su gracia actúa en nosotros y produce obras maravillosas. El Adviento es tiempo de apertura a la acción de Dios en nuestras vidas.",
    prayer: "María, madre fecunda, ayúdanos a decir sí a Dios con generosidad. Que el Espíritu Santo obre en nosotros y produzca frutos de santidad."
  },
  {
    day: 16,
    title: "La Alegría del Adviento",
    month: "Diciembre",
    verse: {
      text: "Os dice otra vez: Â¡Gozaros con gozo, y alegraros con alegría!",
      reference: "Filipenses 4:4"
    },
    reflection: "La alegría del Adviento no es superficial sino profunda, nacida de la esperanza en la salvación. María fue mujer de alegría porque acogió al Salvador. Nuestra alegría debe ser contagiosa, testimonio vivo de la fe.",
    prayer: "María, causa de nuestra alegría, llena nuestros corazones con la gozo de saber que el Salvador viene. Que nuestra alegría sea testimonio del amor de Dios."
  },
  {
    day: 17,
    title: "Las Letanías de la Esperanza",
    month: "Diciembre",
    verse: {
      text: "Ohæ·±å…¥, profundo de las riquezas de la sabiduría y de la ciencia de Dios! Â¡Qué insondables son sus juicios, e inescrutables sus caminos!",
      reference: "Romanos 11:33"
    },
    reflection: "En las Letanías de Loreto invocamos a María con múltiples títulos. Cada título revela un aspecto de su maternidad y de su intercesión. Durante el Adviento, la liturgia nos invita a profundizar en estos títulos marianos.",
    prayer: "Santa María, Madre de Dios, Ruega por nosotros pobres pecadores, ahora y en la hora de nuestra muerte. Amén."
  },
  {
    day: 18,
    title: "La Preparación del Corazón",
    month: "Diciembre",
    verse: {
      text: "Preparad el camino del Señor, enderezad sus senderos.",
      reference: "Mateu 3:3"
    },
    reflection: "La preparación del Adviento es ante todo interior. María preparó su vientre para ser morada del Verbo, nosotros debemos preparar nuestros corazones. La oración, el ayuno y la caridad son caminos de preparación.",
    prayer: "María, prepara nuestro corazón para recibir a tu Hijo. Que la oración y la penitencia nos dispongan para celebrar dignamente el nacimiento del Salvador."
  },
  {
    day: 19,
    title: "La Genealogía de la Salvación",
    month: "Diciembre",
    verse: {
      text: "Y de Jacob nació José, esposo de María, de la cual nació Jesús, que es llamado Cristo.",
      reference: "Mateo 1:16"
    },
    reflection: "La genealogía de Jesús muestra el plan providencial de Dios a lo largo de la historia. María y José fueron la culminación de siglos de preparación. Dios siempre cumple sus promesas, aunque a veces tardemos en ver su cumplimiento.",
    prayer: "Santa María, agradecemos el plan perfecto de Dios que te eligió para ser madre del Salvador. Que confiemos en su providencia en cada circunstancia de la vida."
  },
  {
    day: 20,
    title: "El Servicio Humilde",
    month: "Diciembre",
    verse: {
      text: "He aquí la sierva del Señor; hágase en mí según tu palabra.",
      reference: "Lucas 1:38"
    },
    reflection: "María se presentó como sierva del Señor, modelo de humildad y servicio. El verdadero poder se encuentra en la humildad, no en la grandeza del mundo. El Adviento nos recuerda que Dios elige lo humilde para confundir a los soberbios.",
    prayer: "María, sierva del Señor, enseñanos la humildad verdadera. Que sirvamos a Dios y a nuestros hermanos con corazón sencillo y generoso."
  },
  {
    day: 21,
    title: "El Solsticio y la Luz Eterna",
    month: "Diciembre",
    verse: {
      text: "La luz resplandecerá sobre ti, y su gloria será vista en ti.",
      reference: "Isaías 60:1"
    },
    reflection: "En el solsticio de invierno, cuando la noche es más larga, celebramos la promesa de la luz eterna. Jesús es la luz que nunca se apaga, que vence las tinieblas del pecado y de la muerte. María fue el alba que anunció la llegada del Sol de Justicia.",
    prayer: "María, estrella de la mañana, ilumina nuestro camino hacia Cristo. Que la luz de tu Hijo disipe toda oscuridad en nuestras vidas."
  },
  {
    day: 22,
    title: "Obediencia y Confianza",
    month: "Diciembre",
    verse: {
      text: "Y bajaron José y María a Belén, y hallaron a María, que había concebido, y dio a luz a su hijo primogénito, y lo envolvió en pañales, y lo acostó en un pesebre.",
      reference: "Lucas 2:6-7"
    },
    reflection: "María y José obedecieron el decreto del emperador sin cuestionar, confiando en la providencia de Dios. A pesar de las dificultades del viaje y del parto, cumplieron su deber con fe inquebrantable. La obediencia a Dios siempre conduce a la plenitud.",
    prayer: "Santa María, ayúdanos a obedecer la voluntad de Dios con confianza. Que como tú, acceptemos los planes divinos aun cuando no los comprendamos."
  },
  {
    day: 23,
    title: "La Vigilia de la Natividad",
    month: "Diciembre",
    verse: {
      text: "Porque hoy os ha nacido en la ciudad de David un Salvador, que es Cristo el Señor.",
      reference: "Lucas 2:11"
    },
    reflection: "En la víspera de la Navidad, el alma se llena de expectativa sagrada. María pasó esta vigilia en silencio y oración, preparándose para el momento más grande de la historia. Nosotros también somos llamados a vigilar y orar.",
    prayer: "María, madre de la Vigilia, mantenemos despiertos en oración esperando la llegada de tu Hijo. Que esta noche santa transforme nuestros corazones."
  },
  {
    day: 24,
    title: "Noche Santa: El Nacimiento del Salvador",
    month: "Diciembre",
    verse: {
      text: "Y la gloria del Señor rodeó a los pastores; y tuvieron gran temor. Entonces el ángel les dijo: No temáis; porque os doy una buena nueva de gran gozo, que será para todo el pueblo: os ha nacido hoy en la ciudad de David un Salvador, que es Cristo el Señor.",
      reference: "Lucas 2:9-11"
    },
    reflection: "Esta noche la noche más hermosa del año, cuando el cielo se abre y Dios se hace niño. María sostiene entre sus brazos al creador del universo, el Verbo eterno que se hace pequeño por amor. El pesebre es el trono del Rey de reyes.",
    prayer: "María, madre del Niño Dios, que esta noche santa renazca en nosotros la fe y la alegría. Adoramos al Salvador que nace para darnos vida eterna."
  },
  {
    day: 25,
    title: "Navidad: El Verbo se Hizo Carne",
    month: "Diciembre",
    verse: {
      text: "Y el Verbo se hizo carne, y habitó entre nosotros, y vimos su gloria, gloria como del unigénito del Padre, lleno de gracia y de verdad.",
      reference: "Juan 1:14"
    },
    reflection: "Hoy celebramos el nacimiento de Jesús, el Verbo eterno que se hizo hombre para salvarnos. María es la madre del Dios hecho niño, privilegio que ningún otro ser humano tuvo. La Navidad es el misterio del amor que se hace pequeño para encontrarse con nosotros.",
    prayer: "Feliz Navidad, María. Gracias por darnos a Jesús. Que el nacimiento del Salvador renueve nuestra fe y nos llene de esperanza y amor."
  },
  {
    day: 26,
    title: "San Esteban: Testigo hasta la Muerte",
    month: "Diciembre",
    verse: {
      text: "Entonces estando llenos del Espíritu Santo, fijando la vista en el cielo, vieron la gloria de Dios, y a Jesús, que estaba a la diestra de Dios.",
      reference: "Hechos 7:55"
    },
    reflection: "San Esteban fue el primer mártir, testigo valiente de la resurrección de Cristo. Como María, dio su vida por amor a Dios. Su ejemplo nos recuerda que la fe verdadera exige valentía y sacrificio.",
    prayer: "San Esteban, primer mártir, intercede por nosotros para que tengamos el valor de testificar la fe. Que como María, seamos valientes en seguir a Cristo."
  },
  {
    day: 27,
    title: "San Juan: El Discípulo Amado",
    month: "Diciembre",
    verse: {
      text: "En el principio era el Verbo, y el Verbo estaba con Dios, y el Verbo era Dios.",
      reference: "Juan 1:1"
    },
    reflection: "San Juan, el discípulo amado, fue testigo privilegiado de la vida de Jesús. Su evangelio comienza con el himno al Verbo eterno que se hizo carne. María fue la primera discípula, la que mejor comprendió el misterio de la Encarnación.",
    prayer: "San Juan, discípulo del amor, intercede por nosotros para que profundicemos en el misterio del Verbo encarnado. Que como María, acerquemos el corazón de Jesús."
  },
  {
    day: 28,
    title: "Los Santos Inocentes: La inocencia Protegida",
    month: "Diciembre",
    verse: {
      text: "Así dice el Señor: Voz se oyó en Ramá, llanto y lamentos grandes; Raquel llora a sus hijos, y no quiere ser consolada, porque ya no existen.",
      reference: "Mateo 2:18"
    },
    reflection: "Los Santos Inocentes son los niños muertos por Herodes. María, que huyó con Jesús a Egipto, conoció el dolor de ver amenazado a su hijo. Hoy oramos por los niños del mundo que sufren violencia e injusticia.",
    prayer: "María, madre protectora de los inocentes, guarda a todos los niños del mundo. Que la inocencia sea respetada y que los pequeños crezcan en la paz del Salvador."
  },
  {
    day: 29,
    title: "La Sagrada Familia",
    month: "Diciembre",
    verse: {
      text: "Y bajó con ellos, y vino a Nazaret, y estaba sujeto a ellos. Y su madre guardaba todas estas cosas en su corazón.",
      reference: "Lucas 2:51"
    },
    reflection: "La Sagrada Familia de Nazaret es modelo de vida cristiana: amor, obediencia, trabajo y oración. María, José y Jesús vivieron en armonía, buscando siempre la voluntad de Dios. Las familias de hoy son llamadas a imitar este ejemplo.",
    prayer: "Santa Familia de Nazaret, bendice a todas las familias del mundo. Que María, José y Jesús sean el modelo de unidad, amor y fe en cada hogar."
  },
  {
    day: 30,
    title: "La Fiesta de María, Madre de Dios",
    month: "Diciembre",
    verse: {
      text: "Pero cuando vino la plenitud de los tiempos, Dios envió a su Hijo, nacido de mujer, nacido bajo la ley, para que redimiese a los que estaban bajo la ley, para que recibiéramos la adopción de hijos.",
      reference: "Gálatas 4:4-5"
    },
    reflection: "Hoy celebramos a María como Madre de Dios, título que le confiere un papel único en la historia de la salvación. Ella nos dio a Jesús, el Redentor del mundo. En ella reconocemos a nuestra madre espiritual que nos guía hacia su Hijo.",
    prayer: "María, Madre de Dios y Madre nuestra, te damos gracias por tu maternidad espiritual. Que este día renueve nuestro amor por ti y por tu Hijo Jesús."
  },
  {
    day: 31,
    title: "Acción de Gracias y Nueva Esperanza",
    month: "Diciembre",
    verse: {
      text: "Porque yo sé los planes que tengo para vosotros, dice el Señor, planes de bienestar y no de mal, para daros un futuro y una esperanza.",
      reference: "Jeremías 29:11"
    },
    reflection: "Al terminar el año, damos gracias a Dios por todas las gracias recibidas. María nos accompanies en este camino de gratitud y nos prepara para un nuevo año de fe. El Adviento nos enseña que siempre hay una nueva esperanza en Dios.",
    prayer: "María, madre de la esperanza, te confiamos el nuevo año que comienza. Que tu bendición nos acompañe y que tu Hijo sea el centro de nuestras vidas."
  }

];

