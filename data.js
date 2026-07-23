// CapiMenú — datos semanales. Maple genera una semana nueva cada semana y
// la agrega al FINAL de `weeks`; la app muestra la última. No borrar semanas
// pasadas: son el archivo.
// Regla de porciones: e = ella (~1.750 kcal/día) · h = hijo (porción de niño
// en crecimiento — NUNCA lleva meta calórica y puede repetir; `nutri` solo
// trae los números de ella).
// Restricción dura: SIN VESÍCULA → nada frito, todo horno/plancha/olla,
// grasas medidas. Vetos: pescado fresco y mariscos raros (atún en lata y
// camarones sí). Jurel no. Invierno chileno: zapallo, betarraga, acelga,
// cítricos. Barato por diseño: legumbres 2×/semana, huevo, feria.
// `links: true` solo en categorías de supermercado (deep link Lider.cl).

const CAPI_DATA = {
  recipes: {
    /* ---------- desayunos ---------- */
    "porridge-platano": {
      t: "Avena caliente con plátano", emoji: "🥣", time: "10 min",
      ing: [
        { n: "Avena", e: "½ taza", h: "½ taza" },
        { n: "Leche descremada", e: "200 ml", h: "250 ml" },
        { n: "Plátano en rodajas", e: "½ pieza", h: "½ pieza" },
        { n: "Canela", e: "al gusto", h: "al gusto" },
        { n: "Miel", e: "—", h: "1 cdita" },
      ],
      steps: ["Avena + leche a la olla, fuego medio 5 min revolviendo.", "Servir con plátano y canela encima (miel para él)."],
      nutri: { e: "~330 kcal · 13 g proteína" },
    },
    "huevos-marraqueta": {
      t: "Huevo revuelto con tomate y marraqueta", emoji: "🍳", time: "10 min",
      ing: [
        { n: "Huevos", e: "2 piezas", h: "1–2 piezas" },
        { n: "Tomate picado", e: "½ pieza", h: "½ pieza" },
        { n: "Marraqueta", e: "½ pieza", h: "½ pieza" },
        { n: "Aceite", e: "rocío / 1 cdita para todos", h: "—" },
      ],
      steps: ["Sartén antiadherente con mínimo aceite (la vesícula manda).", "Tomate 1 min, huevos batidos, revolver a fuego suave.", "Servir con la marraqueta — sin mantequilla."],
      nutri: { e: "~360 kcal · 20 g proteína" },
    },
    "yogur-bowl": {
      t: "Bowl de yogur con fruta y avena tostada", emoji: "🍓", time: "5 min",
      ing: [
        { n: "Yogur natural", e: "200 g", h: "150 g" },
        { n: "Fruta de estación picada (kiwi, plátano, manzana)", e: "1 taza", h: "1 taza" },
        { n: "Avena tostada en sartén seco", e: "2 cdas", h: "2 cdas" },
        { n: "Miel", e: "—", h: "1 cdita" },
      ],
      steps: ["Tostar la avena 2 min en sartén seco (huele a galleta).", "Armar: yogur, fruta, avena encima."],
      nutri: { e: "~300 kcal · 16 g proteína" },
    },
    "licuado-platano": {
      t: "Licuado de plátano con avena", emoji: "🥤", time: "5 min",
      ing: [
        { n: "Leche descremada", e: "250 ml", h: "250 ml" },
        { n: "Yogur natural", e: "100 g", h: "100 g" },
        { n: "Plátano", e: "½ pieza", h: "½ pieza" },
        { n: "Avena", e: "3 cdas", h: "2 cdas" },
        { n: "Canela", e: "al gusto", h: "al gusto" },
      ],
      steps: ["Todo a la licuadora, 30–40 segundos.", "Si está espeso, un chorrito de agua fría."],
      nutri: { e: "~340 kcal · 17 g proteína" },
    },

    /* ---------- almuerzos ---------- */
    "tallarines-bolonesa": {
      t: "Tallarines con boloñesa liviana", emoji: "🍝", time: "25 min",
      ing: [
        { n: "Tallarines (pesados en seco)", e: "70 g", h: "80 g" },
        { n: "Carne molida 5% grasa", e: "100 g", h: "80 g" },
        { n: "Salsa de tomate del domingo", e: "1 taza", h: "1 taza" },
        { n: "Zanahoria rallada (va en la salsa)", e: "libre", h: "libre" },
        { n: "Ensalada de lechuga y tomate con limón", e: "libre", h: "libre" },
      ],
      steps: ["Agua a hervir; tallarines según paquete.", "Dorar la carne sin aceite en sartén antiadherente.", "Sumar la salsa del domingo, 5 min a fuego suave.", "Ensalada aliñada con limón y una pizca de sal."],
      nutri: { e: "~600 kcal · 36 g proteína" },
    },
    "porotos-riendas": {
      t: "Porotos con riendas (versión liviana)", emoji: "🍲", time: "25 min",
      ing: [
        { n: "Porotos cocidos del domingo", e: "1 taza", h: "¾ taza" },
        { n: "Fideos (espagueti cortado)", e: "40 g", h: "40 g" },
        { n: "Zapallo en cubos", e: "1 taza", h: "1 taza" },
        { n: "Cebolla + ajo + pimentón (sofrito con 1 cdita de aceite)", e: "base común", h: "—" },
        { n: "Merkén (opcional, cada uno en su plato)", e: "toque", h: "toque" },
      ],
      steps: ["Sofrito suave: cebolla, ajo, pimentón, 1 cdita de aceite.", "Zapallo + porotos + agua o caldo, 10 min.", "Fideos adentro, 8–10 min más hasta que estén.", "Sin longaniza — el sabor lo pone el sofrito (y el merkén de cada uno)."],
      nutri: { e: "~550 kcal · 24 g proteína" },
    },
    "milanesa-horno": {
      t: "Milanesa de pollo AL HORNO con puré", emoji: "🍗", time: "30 min",
      ing: [
        { n: "Pechuga de pollo aplanada", e: "150 g", h: "100 g" },
        { n: "Huevo batido (para apanar, compartido)", e: "1 pieza", h: "—" },
        { n: "Pan rallado", e: "3 cdas", h: "2 cdas" },
        { n: "Papas para puré (con leche descremada, sin mantequilla)", e: "200 g", h: "200 g" },
        { n: "Ensalada de betarraga cocida con limón", e: "1 taza", h: "½ taza" },
      ],
      steps: ["Horno fuerte (220°). Pechuga por huevo y luego pan rallado.", "Bandeja con papel mantequilla, 20–25 min, un volteo a la mitad.", "Puré: papas cocidas + leche caliente + pizca de sal.", "Queda crujiente sin freír — la milanesa de siempre, sin la grasa. 🦫"],
      nutri: { e: "~620 kcal · 45 g proteína" },
    },
    "arroz-pollo": {
      t: "Arroz con pollo y verduras (una olla)", emoji: "🍚", time: "30 min",
      ing: [
        { n: "Trutro deshuesado SIN piel, en cubos", e: "150 g", h: "100 g" },
        { n: "Arroz (pesado en seco)", e: "60 g", h: "60 g" },
        { n: "Zanahoria + choclo + arvejas", e: "1 taza", h: "1 taza" },
        { n: "Cebolla + ajo (sofrito con 1 cdita de aceite)", e: "base común", h: "—" },
      ],
      steps: ["Dorar el pollo con el sofrito.", "Arroz + verduras + 2 partes de agua caliente por 1 de arroz.", "Tapado a fuego bajo 15 min. Reposar 5."],
      nutri: { e: "~610 kcal · 38 g proteína" },
    },
    "hamburguesa-casera": {
      t: "Hamburguesa casera con papas al horno", emoji: "🍔", time: "30 min",
      ing: [
        { n: "Hamburguesa del domingo (carne 5%)", e: "1 de 120 g", h: "1 de 100 g" },
        { n: "Pan de hamburguesa (o marraqueta)", e: "1 pieza", h: "1 pieza" },
        { n: "Papas en gajos al horno (con 1 cdita de aceite entre todos)", e: "150 g", h: "150 g" },
        { n: "Lechuga + tomate + mostaza", e: "libre", h: "libre" },
        { n: "Mayonesa", e: "1 cdita", h: "1 cdita" },
      ],
      steps: ["Papas en gajos al horno 220° unos 25 min (bandeja con papel).", "Hamburguesa a la plancha, 4 min por lado.", "Armar con lechuga, tomate, mostaza — mayo en cdita medida, no a ojo."],
      nutri: { e: "~640 kcal · 34 g proteína" },
    },
    "lentejas-guisadas": {
      t: "Lentejas guisadas con arroz", emoji: "🥘", time: "20 min",
      ing: [
        { n: "Lentejas cocidas del domingo", e: "1 taza", h: "¾ taza" },
        { n: "Arroz (pesado en seco)", e: "40 g", h: "40 g" },
        { n: "Zanahoria + zapallo en cubos", e: "1 taza", h: "1 taza" },
        { n: "Cebolla + ajo (sofrito con 1 cdita de aceite)", e: "base común", h: "—" },
      ],
      steps: ["Sofrito, verduras, lentejas y un poco de caldo: 10 min.", "Arroz aparte (o del día anterior).", "Para él van 👍: si protesta, un huevo duro picado encima ayuda."],
      nutri: { e: "~560 kcal · 27 g proteína" },
    },
    "pizza-casera": {
      t: "Pizza casera del domingo 🎉 (el gusto de la semana)", emoji: "🍕", time: "45 min (domingo)",
      ing: [
        { n: "Masa: harina 2 tazas + levadura + agua tibia", e: "compartida", h: "compartida" },
        { n: "Salsa de tomate del domingo", e: "1 taza", h: "1 taza" },
        { n: "Mozzarella", e: "70 g su lado", h: "70 g su lado" },
        { n: "Jamón de pavo", e: "3 láminas", h: "3 láminas" },
        { n: "Champiñones laminados", e: "su lado", h: "opcional (le gustan 👍)" },
      ],
      steps: ["Masa: mezclar, amasar 5 min, reposar 30 (mientras, la salsa).", "Estirar, salsa, ingredientes por lados, queso medido con pesa.", "Horno a full 10–12 min.", "Ya está contada en la semana: cero culpa, es plan. 🦫🍊"],
      nutri: { e: "~650 kcal · 30 g proteína" },
    },

    /* ---------- ollas grandes (batch: cocinas 1 vez, comes 3 días) ---------- */
    "olla-pollo": {
      t: "Olla grande de pollo con papas y verduras", emoji: "🍲", time: "40 min (una sola vez)",
      ing: [
        { n: "Trutro de pollo deshuesado sin piel, en presas", e: "600 g (toda la olla)", h: "600 g (toda la olla)" },
        { n: "Papas en cubos", e: "6 medianas", h: "6 medianas" },
        { n: "Zapallo en cubos", e: "1 trozo grande", h: "1 trozo grande" },
        { n: "Zanahoria, choclo y arvejas", e: "2 tazas", h: "2 tazas" },
        { n: "Cebolla, ajo y pimentón (sofrito)", e: "1 cda de aceite para toda la olla", h: "1 cda de aceite para toda la olla" },
        { n: "Arroz o fideo cabello de ángel (opcional, al servir)", e: "1 puñado por plato", h: "1 puñado por plato" },
      ],
      steps: [
        "🔁 Esta olla rinde 3 almuerzos (lunes · martes · miércoles). Cantidades para toda la olla, no por plato.",
        "Sofrito suave en la olla grande: cebolla, ajo y pimentón con 1 cda de aceite (una sola, para toda la olla).",
        "Dorar el pollo, sumar zanahoria y agua caliente que cubra. 15 min.",
        "Papas y zapallo, 15 min más hasta que estén blandas. Choclo y arvejas al final.",
        "Reparte en 3 tandas (2 platos cada una): una para hoy, dos a la nevera en cajas tapadas.",
        "Cada día recalientas una tanda en una ollita con un chorrito de agua — nada de microondas. Sabe mejor al 2º día. 🦫",
      ],
      nutri: { e: "~520 kcal · 34 g proteína por plato" },
    },
    "olla-lentejas": {
      t: "Olla grande de lentejas con verduras", emoji: "🥘", time: "35 min (una sola vez)",
      ing: [
        { n: "Lentejas", e: "500 g (toda la olla)", h: "500 g (toda la olla)" },
        { n: "Zanahoria y zapallo en cubos", e: "3 tazas", h: "3 tazas" },
        { n: "Cebolla, ajo y pimentón (sofrito)", e: "1 cda de aceite para toda la olla", h: "1 cda de aceite para toda la olla" },
        { n: "Arroz para acompañar (al servir)", e: "1 puñado por plato", h: "1 puñado por plato" },
        { n: "Huevo duro (opcional, para el hijo)", e: "—", h: "1 encima" },
      ],
      steps: [
        "🔁 Esta olla rinde 3 almuerzos (jueves · viernes · sábado). Cocínala el miércoles en la tarde o el jueves.",
        "Sofrito suave, sumar las lentejas y las verduras, agua o caldo que cubra.",
        "Olla a presión 12–15 min, o normal ~35. Deben quedar cremosas, no secas.",
        "Reparte en 3 tandas a la nevera. Cada día recalientas una en ollita con un chorrito de agua + arroz fresco.",
        "Si al hijo no le convencen, un huevo duro picado encima las salva. 🦫",
      ],
      nutri: { e: "~540 kcal · 26 g proteína por plato" },
    },

    /* ---------- onces ---------- */
    "once-quesillo": {
      t: "Tostadas con quesillo y tomate + té", emoji: "🫖", time: "5 min",
      ing: [
        { n: "Pan integral tostado", e: "2 rebanadas", h: "2 rebanadas" },
        { n: "Quesillo", e: "60 g", h: "50 g" },
        { n: "Tomate en rodajas + orégano", e: "½ pieza", h: "½ pieza" },
        { n: "Té o leche descremada", e: "1 taza", h: "1 taza" },
      ],
      steps: ["Tostar, armar, orégano encima. Listo."],
      nutri: { e: "~350 kcal · 19 g proteína" },
    },
    "once-pavo": {
      t: "Sándwich de pavo con lechuga y tomate", emoji: "🥪", time: "5 min",
      ing: [
        { n: "Marraqueta o pan integral", e: "½ / 2 reb.", h: "½ / 2 reb." },
        { n: "Jamón de pavo", e: "3 láminas", h: "2 láminas" },
        { n: "Lechuga + tomate + mostaza", e: "libre", h: "libre" },
        { n: "Té o leche", e: "1 taza", h: "1 taza" },
      ],
      steps: ["Armar el sándwich; la mostaza reemplaza a la mayo entre semana."],
      nutri: { e: "~370 kcal · 22 g proteína" },
    },
    "once-atun": {
      t: "Tostadas con atún y palta medida", emoji: "🐟", time: "8 min",
      ing: [
        { n: "Pan integral tostado", e: "2 rebanadas", h: "2 rebanadas" },
        { n: "Atún en lata al agua, escurrido", e: "½ lata", h: "½ lata" },
        { n: "Palta", e: "¼ pieza", h: "¼ pieza" },
        { n: "Limón + cilantro picado", e: "al gusto", h: "al gusto" },
      ],
      steps: ["Moler la palta con limón, untar, atún encima.", "La palta va en cuartos medidos — rica pero es grasa, y la vesícula cobra."],
      nutri: { e: "~400 kcal · 26 g proteína" },
    },
    "once-huevo": {
      t: "Marraqueta con huevo duro del domingo", emoji: "🥚", time: "5 min",
      ing: [
        { n: "Marraqueta", e: "½ pieza", h: "½ pieza" },
        { n: "Huevo duro (del batch del domingo)", e: "1 pieza", h: "1 pieza" },
        { n: "Tomate en rodajas", e: "½ pieza", h: "½ pieza" },
        { n: "Té o leche", e: "1 taza", h: "1 taza" },
      ],
      steps: ["Huevo en rodajas sobre la marraqueta, tomate, pizca de sal."],
      nutri: { e: "~370 kcal · 17 g proteína" },
    },
  },

  weeks: [
    {
      id: "s1",
      label: "Semana 1",
      dates: "6–12 jul",
      snack: "Fruta de estación entre comidas: manzana, pera, kiwi, mandarina (1–2 al día). Para él, libre — la fruta nunca se raciona.",
      rules: [
        "Nada frito, nunca — todo horno, plancha u olla (regla de oro sin vesícula).",
        "Palta y mayonesa existen, pero en cucharaditas medidas, no a ojo.",
        "Agua y té como base; bebidas quedan para la pizza del domingo.",
        "Su porción de niño no se restringe: si tiene hambre, repite.",
        "La pizza del domingo ya está contada — es plan, no pecado. 🦫",
      ],
      prep: {
        title: "Prep del domingo (1 hora, olla a presión)",
        items: [
          "Porotos y lentejas en la olla a presión (por separado); la mitad al congelador en cajas.",
          "Salsa de tomate grande (tomate en tarro + cebolla + zanahoria rallada + ajo): mitad boloñesa, mitad pizza.",
          "Formar 4 hamburguesas de carne molida 5% y congelarlas entre láminas de papel.",
          "4 huevos duros para las onces.",
          "Lavar lechuga y cocer betarragas (quedan listas en un pote).",
        ],
      },
      days: [
        { name: "Lunes",     desayuno: "porridge-platano",  almuerzo: "tallarines-bolonesa", once: "once-quesillo" },
        { name: "Martes",    desayuno: "huevos-marraqueta", almuerzo: "porotos-riendas",     once: "once-pavo" },
        { name: "Miércoles", desayuno: "yogur-bowl",        almuerzo: "milanesa-horno",      once: "once-atun" },
        { name: "Jueves",    desayuno: "licuado-platano",   almuerzo: "arroz-pollo",         once: "once-huevo" },
        { name: "Viernes",   desayuno: "porridge-platano",  almuerzo: "hamburguesa-casera",  once: "once-pavo" },
        { name: "Sábado",    desayuno: "huevos-marraqueta", almuerzo: "lentejas-guisadas",   once: "once-atun" },
        { name: "Domingo",   desayuno: "yogur-bowl",        almuerzo: "pizza-casera",        once: "once-huevo" },
      ],
      shopping: [
        {
          cat: "Feria 🍅", links: false,
          items: [
            { n: "Tomates", q: "1 kg" },
            { n: "Lechuga", q: "1 unidad" },
            { n: "Zanahorias", q: "½ kg" },
            { n: "Zapallo", q: "1 trozo grande" },
            { n: "Betarragas", q: "3 unidades" },
            { n: "Cebollas", q: "1 kg" },
            { n: "Pimentón", q: "1 unidad" },
            { n: "Papas", q: "2 kg" },
            { n: "Champiñones", q: "200 g" },
            { n: "Paltas", q: "2 unidades" },
            { n: "Plátanos", q: "6 unidades" },
            { n: "Manzanas y peras", q: "1 kg" },
            { n: "Kiwis y mandarinas", q: "½ kg" },
            { n: "Limones", q: "½ kg" },
            { n: "Cilantro", q: "1 atado chico" },
          ],
        },
        {
          cat: "Súper 🛒", links: true,
          items: [
            { n: "Avena", q: "500 g" },
            { n: "Arroz", q: "1 kg" },
            { n: "Tallarines", q: "400 g" },
            { n: "Porotos secos", q: "500 g" },
            { n: "Lentejas", q: "500 g" },
            { n: "Carne molida 5% grasa", q: "600 g" },
            { n: "Pechuga de pollo", q: "500 g" },
            { n: "Trutro deshuesado", q: "500 g" },
            { n: "Atún en lata al agua", q: "2 latas" },
            { n: "Jamón de pavo", q: "200 g" },
            { n: "Quesillo", q: "2 unidades" },
            { n: "Queso mozzarella", q: "200 g" },
            { n: "Yogur natural", q: "1 kg" },
            { n: "Leche descremada", q: "3 L" },
            { n: "Huevos", q: "12 unidades" },
            { n: "Pan integral", q: "1 bolsa" },
            { n: "Pan rallado", q: "250 g" },
            { n: "Harina", q: "1 kg" },
            { n: "Levadura seca", q: "1 sobre" },
            { n: "Tomates en tarro", q: "2 tarros" },
            { n: "Pasta de tomate", q: "1 caja" },
          ],
        },
        {
          cat: "Almacén / diario 🥖", links: false,
          items: [
            { n: "Marraquetas", q: "al día, ~1 por persona" },
            { n: "Pan de hamburguesa", q: "2 unidades (viernes)" },
          ],
        },
      ],
    },
    {
      id: "s2",
      label: "Semana 2 — a tu ritmo",
      dates: "27 jul – 2 ago",
      snack: "Fruta de estación entre comidas (manzana, pera, kiwi, mandarina). Para él, libre — la fruta nunca se raciona.",
      rules: [
        "El gran cambio: cocinas 2 veces en la semana, no 7. Cada olla rinde 3 almuerzos.",
        "El desayuno ya viene elegido y es rápido (5–10 min): no tienes que pensarlo a las 6 AM y así no te saltas las calorías de la mañana. En turno temprano, el licuado o el yogur se toman casi en la puerta.",
        "La once ya viene puesta; si un día prefieres aprovechar lo que sobró del almuerzo, también vale.",
        "Se recalienta en olla con un chorrito de agua (sin microondas). Sabe mejor al 2º día.",
        "¿Prefieres cocinar UNA sola vez para toda la semana? Haz la olla de pollo más grande y rinde los 6 días — tú mandas.",
        "Nada frito (la vesícula manda), grasas en cucharaditas, y la pizza del domingo es plan, no pecado. 🦫",
      ],
      prep: {
        title: "Cocinas 2 veces, no 7",
        items: [
          "DOMINGO: la olla grande de pollo (rinde lun-mar-mié) + la masa y salsa de la pizza + 4 huevos duros para las onces.",
          "MIÉRCOLES en la tarde (o el jueves): la olla grande de lentejas (rinde jue-vie-sáb).",
          "Reparte cada olla en 3 cajas tapadas apenas se entibie y a la nevera. Cada día solo recalientas.",
          "Ten lechuga lavada, tomate y fruta a mano para las onces y las colaciones.",
          "El resto de la semana NO cocinas almuerzo: solo recalientas. Ese es todo el chiste. 🦫",
        ],
      },
      days: [
        { name: "Lunes",     desayuno: "licuado-platano",  almuerzo: "olla-pollo",    once: "once-quesillo" },
        { name: "Martes",    desayuno: "yogur-bowl",       almuerzo: "olla-pollo",    once: "once-pavo" },
        { name: "Miércoles", desayuno: "porridge-platano", almuerzo: "olla-pollo",    once: "once-atun" },
        { name: "Jueves",    desayuno: "huevos-marraqueta",almuerzo: "olla-lentejas", once: "once-huevo" },
        { name: "Viernes",   desayuno: "licuado-platano",  almuerzo: "olla-lentejas", once: "once-pavo" },
        { name: "Sábado",    desayuno: "yogur-bowl",       almuerzo: "olla-lentejas", once: "once-quesillo" },
        { name: "Domingo",   desayuno: "porridge-platano", almuerzo: "pizza-casera",  once: "once-atun" },
      ],
      shopping: [
        {
          cat: "Feria 🍅", links: false,
          items: [
            { n: "Papas", q: "2 kg" },
            { n: "Zapallo", q: "1 trozo grande" },
            { n: "Zanahorias", q: "1 kg" },
            { n: "Cebollas", q: "1 kg" },
            { n: "Pimentón", q: "2 unidades" },
            { n: "Tomates", q: "1 kg" },
            { n: "Lechuga", q: "1 unidad" },
            { n: "Paltas", q: "2 unidades" },
            { n: "Plátanos", q: "6 unidades" },
            { n: "Manzanas y peras", q: "1 kg" },
            { n: "Kiwis y mandarinas", q: "½ kg" },
            { n: "Limones", q: "½ kg" },
          ],
        },
        {
          cat: "Súper 🛒", links: true,
          items: [
            { n: "Trutro de pollo deshuesado", q: "600 g" },
            { n: "Lentejas", q: "500 g" },
            { n: "Choclo y arvejas congelados", q: "1 bolsa c/u" },
            { n: "Arroz", q: "1 kg" },
            { n: "Avena", q: "500 g" },
            { n: "Yogur natural", q: "1 kg" },
            { n: "Leche descremada", q: "4 L" },
            { n: "Huevos", q: "12 unidades" },
            { n: "Quesillo", q: "2 unidades" },
            { n: "Queso mozzarella", q: "200 g" },
            { n: "Jamón de pavo", q: "200 g" },
            { n: "Atún en lata al agua", q: "2 latas" },
            { n: "Pan integral", q: "1 bolsa" },
            { n: "Harina", q: "1 kg" },
            { n: "Levadura seca", q: "1 sobre" },
            { n: "Tomates en tarro", q: "2 tarros" },
            { n: "Pasta de tomate", q: "1 caja" },
          ],
        },
        {
          cat: "Almacén / diario 🥖", links: false,
          items: [
            { n: "Marraquetas", q: "al día, ~1 por persona" },
          ],
        },
      ],
    },
  ],
};
