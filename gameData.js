// Generador de Conciencia - Game Data
// All buildings, upgrades, and game mechanics

const GAME_DATA = {
  version: "1.0.0",
  
  // 20 Custom Buildings (with Cookie Clicker prices and CPS)
  buildings: [
    {
      id: 0,
      name: "Nexo Neural",
      description: "Un pequeño dispositivo cuántico que expande tu consciencia",
      price: 15,
      cps: 0.1,
      icon: "⚛️",
      quantity: 0
    },
    {
      id: 1,
      name: "Reactor Cerebral",
      description: "Una máquina que amplifica los impulsos neuronales",
      price: 100,
      cps: 1,
      icon: "🧠",
      quantity: 0
    },
    {
      id: 2,
      name: "Torre Sincrónica",
      description: "Sincroniza tu consciencia con el universo",
      price: 1100,
      cps: 8,
      icon: "🗼",
      quantity: 0
    },
    {
      id: 3,
      name: "Fábrica Etérea",
      description: "Produce energía cuántica de otra dimensión",
      price: 12000,
      cps: 47,
      icon: "🏭",
      quantity: 0
    },
    {
      id: 4,
      name: "Mina Cósmica",
      description: "Extrae consciencia pura del espacio sideral",
      price: 130000,
      cps: 260,
      icon: "⛏️",
      quantity: 0
    },
    {
      id: 5,
      name: "Refinería Lumínica",
      description: "Refina la energía del espacio-tiempo",
      price: 1400000,
      cps: 1400,
      icon: "💡",
      quantity: 0
    },
    {
      id: 6,
      name: "Laboratorio Dimensional",
      description: "Experimenta con realidades alternativas",
      price: 20000000,
      cps: 7800,
      icon: "🔬",
      quantity: 0
    },
    {
      id: 7,
      name: "Portal Estelar",
      description: "Abre portales a civilizaciones avanzadas",
      price: 330000000,
      cps: 44000,
      icon: "🌀",
      quantity: 0
    },
    {
      id: 8,
      name: "Colisionador Cósmico",
      description: "Colisiona partículas de consciencia pura",
      price: 5100000000,
      cps: 260000,
      icon: "⚡",
      quantity: 0
    },
    {
      id: 9,
      name: "Nexo Galáxico",
      description: "Conecta con la consciencia universal",
      price: 75000000000,
      cps: 1600000,
      icon: "🌌",
      quantity: 0
    },
    {
      id: 10,
      name: "Máquina Primes",
      description: "Aprovecha los números primos del universo",
      price: 1000000000000,
      cps: 10000000,
      icon: "🔢",
      quantity: 0
    },
    {
      id: 11,
      name: "Flujo Cibernauta",
      description: "Interfaz directa con la red global de consciencia",
      price: 14000000000000,
      cps: 65000000,
      icon: "💻",
      quantity: 0
    },
    {
      id: 12,
      name: "Esfera Omnisciente",
      description: "Una esfera que contiene todo el conocimiento",
      price: 170000000000000,
      cps: 430000000,
      icon: "🔮",
      quantity: 0
    },
    {
      id: 13,
      name: "Templo Atómico",
      description: "Templo donde átomos adquieren consciencia",
      price: 2100000000000000,
      cps: 2900000000,
      icon: "🏛️",
      quantity: 0
    },
    {
      id: 14,
      name: "Bastión Infinito",
      description: "Una estructura que existe en infinitas dimensiones",
      price: 26000000000000000,
      cps: 21000000000,
      icon: "🏰",
      quantity: 0
    },
    {
      id: 15,
      name: "Ciudadela Cuántica",
      description: "Una ciudad donde reinan las leyes cuánticas",
      price: 310000000000000000,
      cps: 150000000000,
      icon: "🏙️",
      quantity: 0
    },
    {
      id: 16,
      name: "Supernova Artificial",
      description: "Una estrella sintética que genera energía infinita",
      price: 3700000000000000000,
      cps: 1100000000000,
      icon: "⭐",
      quantity: 0
    },
    {
      id: 17,
      name: "Nodo Absoluto",
      description: "El punto central de toda la consciencia",
      price: 44000000000000000000,
      cps: 8300000000000,
      icon: "✦",
      quantity: 0
    },
    {
      id: 18,
      name: "Realidad Artificial",
      description: "Un universo construido con consciencia pura",
      price: 520000000000000000000,
      cps: 64000000000000,
      icon: "🎮",
      quantity: 0
    },
    {
      id: 19,
      name: "Singularidad Consciente",
      description: "El punto donde toda consciencia converge",
      price: 6300000000000000000000,
      cps: 430000000000000,
      icon: "🌠",
      quantity: 0
    }
  ],

  researchUnlocks: [
    {
      id: 0,
      name: "Expansión Neuronal",
      description: "Expande tu red neuronal para procesar más consciencia",
      duration: 900,
      unlocks: "upgrade_neural_1",
      unlockName: "Aumentador Neuronal",
      unlockEffect: "+5% CPS de todos los edificios",
      purchased: false,
      progress: 0
    },
    {
      id: 1,
      name: "Algoritmo Evolutivo",
      description: "Un algoritmo que evoluciona la consciencia automáticamente",
      duration: 900,
      unlocks: "upgrade_evolution_1",
      unlockName: "Evolución Consciente",
      unlockEffect: "+10% velocidad de generación",
      purchased: false,
      progress: 0
    },
    {
      id: 2,
      name: "Amplificador Cuántico",
      description: "Amplifica los efectos cuánticos en tu consciencia",
      duration: 900,
      unlocks: "upgrade_quantum_1",
      unlockName: "Efecto Túnel",
      unlockEffect: "+20% CPS de edificios costosos",
      purchased: false,
      progress: 0
    },
    {
      id: 3,
      name: "Resonancia Dimensional",
      description: "Sincroniza con dimensiones paralelas productivas",
      duration: 900,
      unlocks: "upgrade_dimension_1",
      unlockName: "Puerta Dimensional",
      unlockEffect: "Gana +15% CPS por cada edificio diferente poseído",
      purchased: false,
      progress: 0
    },
    {
      id: 4,
      name: "Investigación del Juego",
      description: "Descubre la verdadera naturaleza del Juego",
      duration: 1800,
      unlocks: "building_game",
      unlockName: "El Juego",
      unlockEffect: "Generador único: 42.5 Qa/s base",
      purchased: false,
      progress: 0
    }
  ]
}