// CapiMenú — datos semanales. Maple genera una semana nueva cada semana y
// la agrega al FINAL de `weeks`; la app muestra la última. No borrar semanas
// pasadas: son el archivo.
// Regla de porciones: e = ella · h = hijo (porción de niño en crecimiento —
// el hijo NUNCA lleva meta calórica; `nutri` solo trae los números de ella).
// Costo: sin precios en la app — el menú se diseña barato (legumbres, jurel,
// huevo, feria de temporada) y la lista del súper se separa Feria / Súper.
// Las categorías de shopping llevan `links: true` solo si son de supermercado
// (deep link a Lider.cl); la feria no lleva links.

const CAPI_DATA = {
  recipes: {},
  weeks: [],
};
