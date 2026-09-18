/** Modelo de categorización de retos: cadena de valor de Porter. */
export interface Actividad { cod: string; nombre: string; alcance: string; dolores: string[] }

export const PRIMARIAS: Actividad[] = [
  { cod: "P1", nombre: "Logística de entrada", alcance: "Recepción, almacenamiento y control de insumos",
    dolores: ["Inventario que no coincide con el consumo real", "Materia prima fuera de especificación", "Sobrecostos por compras de emergencia"] },
  { cod: "P2", nombre: "Operaciones", alcance: "Producción, ensamble, mantenimiento y calidad",
    dolores: ["Paradas de máquina sin causa registrada", "Defectos detectados al final de la línea", "Parámetros que dependen de una persona"] },
  { cod: "P3", nombre: "Logística de salida", alcance: "Almacenamiento, despacho y distribución",
    dolores: ["Congestión de patio y tiempos de espera", "Entregas incompletas o fuera de ventana", "Costo logístico sin trazabilidad"] },
  { cod: "P4", nombre: "Marketing y ventas", alcance: "Canales, precio, promoción y fuerza comercial",
    dolores: ["Pronóstico basado en el año anterior", "Quiebres de stock en referencias nuevas", "Clientes que se pierden sin causa documentada"] },
  { cod: "P5", nombre: "Servicio", alcance: "Posventa, instalación, soporte y garantías",
    dolores: ["Reclamos repetidos sin causa raíz", "Tiempos de respuesta que erosionan la reputación", "Garantías que cuestan más que el margen"] },
];

export const APOYO: Actividad[] = [
  { cod: "A1", nombre: "Infraestructura y finanzas", alcance: "Administración, planeación, contabilidad y legal",
    dolores: ["Cierres contables lentos y con reprocesos", "Indicadores que llegan tarde", "Costos indirectos que nadie explica"] },
  { cod: "A2", nombre: "Talento humano", alcance: "Selección, formación, seguridad y retención",
    dolores: ["Rotación alta en cargos críticos", "Conocimiento que se va con la persona", "Curva de aprendizaje sin estándar"] },
  { cod: "A3", nombre: "Desarrollo tecnológico", alcance: "I+D, diseño, automatización y sistemas",
    dolores: ["Datos de planta que no llegan a decisión", "Automatización aplazada por falta de caso", "Desarrollos imposibles de mantener"] },
  { cod: "A4", nombre: "Abastecimiento", alcance: "Compras, proveedores y contratación",
    dolores: ["Dependencia de proveedor único", "Variabilidad de calidad entre lotes", "Negociación sin datos de desempeño"] },
];

export const BLOQUES: Record<string, string> = {
  A: "Identidad y acceso", B: "Diagnóstico y problemas", C: "Diseño y publicación de retos",
  D: "Descubrimiento y comunidad", E: "Soluciones y selección", F: "Equipo y proyecto",
  G: "Contribuciones y propiedad intelectual", H: "Prototipado y validación",
  I: "Mercado y comercialización", J: "Pagos y regalías", K: "Inversión y fondos",
  L: "Gobierno y administración", M: "Analítica e inteligencia artificial",
  N: "Cadena de valor y diagnóstico empresarial", "Ñ": "Semilleros escolares",
  O: "Economía del token Nexon",
};

export const SOLUCIONES = [
  ["Prototipo funcional", "Demuestra que la solución opera en condiciones reales"],
  ["Investigación aplicada", "Estudio con método, datos y conclusiones sobre la causa"],
  ["Desarrollo tecnológico", "Software, dispositivo o automatización lista para probar"],
  ["Patente de invención", "Solución novedosa con altura inventiva y aplicación industrial"],
  ["Modelo de utilidad", "Mejora funcional sobre un objeto existente"],
  ["Diseño industrial", "Forma o configuración nueva de un producto"],
  ["Artículo científico", "Publicación revisada que documenta el hallazgo"],
  ["Innovación de proceso", "Cambio en el modo de producir: costo, tiempo o calidad"],
  ["Innovación de producto", "Bien o servicio nuevo o sustancialmente mejorado"],
  ["Empresa de base tecnológica", "Emprendimiento que escala la solución"],
];

export const CIRCUITO = [
  ["01", "Reto", "La empresa publica un problema real de su cadena de valor"],
  ["02", "Solución", "El semillero escolar postula, investiga y construye"],
  ["03", "Adopción", "La empresa valida la evidencia y adopta la solución"],
  ["04", "Pago", "La empresa paga por el valor que recibe"],
  ["05", "Token", "El pago capitaliza la reserva del Nexon"],
  ["06", "Redención", "El estudiante canjea por alimentos, ropa, servicios y equipos"],
];

export const REDENCION = [
  ["Alimentos", "Canasta familiar en comercios aliados"],
  ["Vestido y calzado", "Uniformes, ropa y zapatos"],
  ["Servicios públicos", "Agua, energía y gas del hogar"],
  ["Internet y datos", "Conectividad para estudiar en casa"],
  ["Equipos", "Computador, tableta, herramientas"],
  ["Útiles y materiales", "Insumos escolares y de laboratorio"],
];

export const RUTAS = [
  ["Ruta 1", "Científicos", "Pregunta e hipótesis · Experimentación · Divulgación", "1.000"],
  ["Ruta 2", "Desarrolladores", "Plano y materiales · Prototipo funcional · Prueba de campo", "1.000"],
  ["Ruta 3", "Emprendedores", "Cliente y producto · Lote de prueba · Venta validada", "1.000"],
];
