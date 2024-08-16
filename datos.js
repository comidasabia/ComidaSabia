const descripcionInfo = `Programación para entregar hasta el 06 de Agosto
6 menús $27.000,00 - (sería cada uno $4.500,00) - envío gratis.
1 menú o más cada uno $5.000,00 - envió a consultar.`;

const opciones = [
  { 
    id: 'opcion1',
    grupo: 1, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'OMELETT CON VERDURA', 
    descripcion: 'Omelett de 3 huevo, con sofrito de verduras y 4 quesos, acompañado de tortilla de papas.', 
  },
  { 
    id: 'opcion2',
    grupo: 1, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'OMELETT CON PAPA', 
    descripcion: 'Omelett de 3 huevos, con sofrito de verduras y 4 quesos, acompañado de \ntortilla de verduras. (zapallitos, cebollas, zanahorias, morrón).', 
  },
  { 
    id: 'opcion4',
    grupo: 2, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'ESCALOPE DE TERNERA', 
    descripcion: 'Carne de ternera, macerada y recubierta por masa, acompañada de papas al natural, con lluvia de perejil.', 
  },
  { 
    id: 'opcion5',
    grupo: 2, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'ESCALOPE DE BERENJENA', 
    descripcion: 'Berenjenas macerada y recubierta en masa, acompañado de verduras grilladas.', 
  },
    { 
    id: 'opcion6',
    grupo: 3, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'CANELONES', 
    descripcion: 'Con carne de ternera, con salsa bolognesa. (carne de ternera picada. Tomate, cebolla, ajo y vino tinto).', 
  },
  { 
    id: 'opcion7',
    grupo: 3, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'CANELONES DE POLLO', 
    descripcion: 'Con carne de pollo y verduras, acompañado de salsa bechamel.', 
  },
  {
    id: 'opcion23',
    grupo: 3,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'CANELONES DE CARNE', 
    descripcion: 'Con carne de ternera, con salsa bolognesa. (carne de ternera picada. Tomate, cebolla, ajo y vino tinto).', 
  },
  { 
    id: 'opcion9',
    grupo: 5, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'RISOTTO CON ALBÓNDIGAS', 
    descripcion: 'Arroz doble carolina, sellado en aceite de oliva e hidratado con caldo de verduras y 4 quesos, \ncon albóndigas (carne de ternera picada, con cebolla y morrón y salsa de tomate).', 
  },
    { 
    id: 'opcion10',
    grupo: 5, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'RISOTTO CON POLLO', 
    descripcion: 'Arroz doble carolina, sellado en aceite de oliva, e hidratado con caldo de verdura y salsa de puerro, con pata de pollo grillado.', 
  },
    { 
    id: 'opcion11',
    grupo: 6, 
    visible: true,
    imgSrc: 'https://imgur.com/vZuoTLR.jpeg', 
    nombre: 'ROULET DE POLLO', 
    descripcion: 'Pechuga de pollo enrollada, rellena de con jamón, queso, zanahoria, morrón y huevo duro; \n acompañado de ensalada con verduras de estación.', 
  },
    { 
    id: 'opcion12',
    grupo: 6, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'CUARTO DE POLLO', 
    descripcion: 'Cuarto de pollo de 3 huevos, con sofrito de verduras y 4 quesos, acompañado de \ntortilla de verduras. (zapallitos, cebollas, zanahorias, morrón).', 
  },
    { 
    id: 'opcion13',
    grupo: 7, 
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'ZAPALLITOS RELLENOS', 
    descripcion: 'Relleno con carne de ternera molida, cebolla, moron, y queso, con salsa bolognesa. (carne de ternera picada. Tomate, cebolla, ajo y vino tinto).', 
  },
  {
    id: 'opcion14',
    grupo: 7,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'PASTAS FRESCAS', 
    descripcion: 'Pastas caseras tallarín, en sémola y huevo; con salsa bolognesa (carne picada, cebolla, tomate, ajo y vino tinto).', 
  },
  {
    id: 'opcion15',
    grupo: 8,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'ARROZ PRIMAVERA', 
    descripcion: 'Arroz blanco, lentejas, arvejas, apio, cebolla morada, tomate, manzana verde, ralladura de limón.', 
  },
  {
    id: 'opcion22',
    grupo: 8,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'ARROZ CON POLLO', 
    descripcion: 'Cuarto trasero de pollo, sofrito de vegetales, papas, zahoria, y arroz amarillo.', 
  },
  {
    id: 'opcion16',
    grupo: 8,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'BOMELETT', 
    descripcion: 'Omelette de 3 huevos, con sofrito de verduras y 4 quesos, acompañado de tortilla de verduras. (zapallitos, cebollas, zanahorias, morrón).', 
  },
  {
    id: 'opcion17',
    grupo: 9,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'MALFATTIS', 
    descripcion: 'Espinaca, sofritos, ricota, salsa blanca y sémola, con salsa bolognesa. (carne de ternera picada. Tomate, cebolla, ajo y vino tinto).', 
  },
  {
    id: 'opcion18',
    grupo: 10,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'MILANESA DE TERNERA', 
    descripcion: 'Carne de ternera, macerada y empanada, acompañada de papas al natural, con lluvia de perejil.', 
  },
  {
    id: 'opcion19',
    grupo: 10,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'MILANESA DE TERNERA A LA NAPOLITANA', 
    descripcion: 'Carne de ternera, macerada empanada, cubierta con salsa, jamón y queso y orégano espolvoreado, acompañada de arroz graneado.', 
  },
  {
    id: 'opcion21',
    grupo: 11,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'GUISO DE LENTEJAS', 
    descripcion: 'Lentejas, sofrito, papas, zanahorias, mondongo, pechito de cerdo y salchicha parrillera.', 
  },
  {
    id: 'opcion26',
    grupo: 11,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'BASTONES DE ATUN', 
    descripcion: 'Lomito de atún, macerado y empanado en masa, acompañado de verduras grilladas.', 
  },
  {
    id: 'opcion24',
    grupo: 13,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'VERDURAS A LA CREMA', 
    descripcion: 'Verduras cocinadas al natural, (papas, calabacín, cebolla, zapallitos), con baño de crema y queso gratinado.', 
  },
  {
    id: 'opcion25',
    grupo: 14,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'COSTELETA DE CERDO', 
    descripcion: 'Costeletas de cerdo, al grill, acompañado con batata, papas y calabaza al natural.', 
  },
  {
    id: 'opcion27',
    grupo: 14,
    visible: true,
    imgSrc: 'https://imgur.com/O4c8z0E.jpeg', 
    nombre: 'HAMBURGUESA', 
    descripcion: 'Hamburguesas de carne vacuna y cerdo, con aro de cebolla relleno y ensalada mixta.', 
  },
  {
    id: 'opcion28',
    grupo: 15,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'TIRABUZON CREMOSO', 
    descripcion: 'Tirabuzones clásicos, con salsa cremosa de pollo.', 
  },
  {
    id: 'opcion29',
    grupo: 15,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'MILANESA DE BERENJENA', 
    descripcion: 'Milanesas de berenjenas, maceradas y empanadas, acompañado de ensalada mixta.', 
  },
  {
    id: 'opcion30',
    grupo: 16,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'BIFES DE HIGADO A LO CRIOLLO', 
    descripcion: 'Bifes de hígado de ternera, con salsa criolla de diferentes tipos de cebollas, pimientos, ajos y vino blanco, acompañado de puré.', 
  },
  {
    id: 'opcion31',
    grupo: 16,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'CUARTO DE POLLO TRASERO A LO CRIOLLO', 
    descripcion: 'Cuarto de pollo trasero, con salsa criolla de diferentes tipos de cebollas, pimientos, ajos y vino blanco, acompañado de arroz.', 
  },
  {
    id: 'opcion32',
    grupo: 16,
    visible: true,
    imgSrc: 'https://imgur.com/UFptdrw.jpeg', 
    nombre: 'BIFES A LA CRIOLLA', 
    descripcion: 'Bifes de ternera con salsa, papas y huevo.', 
  },
  {
    id: 'opcion33',
    grupo: 16,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'ARROZ CON ALBONDIGA', 
    descripcion: 'Arroz graneado con albóndigas y salsa filetto.', 
  },
  {
    id: 'opcion34',
    grupo: 16,
    visible: true,
    imgSrc: 'https://imgur.com/D6A0aDU.jpeg', 
    nombre: 'MILANESA DE TERNERA CON PURÉ', 
    descripcion: 'Milanesa de carne de ternera, macerada y empanada, acompañada de puré.', 
  },
  {
    id: 'opcion35',
    grupo: 8,
    visible: true,
    imgSrc: 'https://imgur.com/uE1pYxW.jpeg', 
    nombre: 'TRASERO DE POLLO', 
    descripcion: 'Cuarto de trasero, con salsa de cebollas, morrón, pimiento y vino blanco, con arroz graneado.', 
  },
  {
    id: 'opcion36',
    grupo: 8,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'MERLUZA', 
    descripcion: 'Merluza con roquefort a la crema, acompañado con puré de zanahorias.', 
  },
    {
    id: 'opcion37',
    grupo: 8,
    visible: true,
    imgSrc: 'https://imgur.com/KGThXfV.jpeg', 
    nombre: 'SORRENTINOS', 
    descripcion: 'Sorrentinos en masa de sémola, de jamón y queso, con salsa bolognesa (carne de ternera, verduras y vino tinto).', 
  },
  {
    id: 'opcion38',
    grupo: 8,
    visible: true,
    imgSrc: 'https://imgur.com/OMgayky.jpeg', 
    nombre: 'ESCALOPE DE TERNERA CON PURÉ', 
    descripcion: 'Escalope de carne de ternera, macerada y pasada por masa, acompañada con puré.', 
  },
];



