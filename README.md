# CapiMenú 🦫

Menú semanal + recetas + lista de compras para la hermana (Chile) y su hijo.
Fork de [MichiMenú](../michimenu/) — misma arquitectura: PWA estática, vanilla
JS, sin backend, GitHub Pages. Estado en localStorage.

## Diferencias vs MichiMenú

- **Porciones `e`/`h`** (ella/hijo). El hijo (10–11) come lo mismo en porción
  de niño y **nunca lleva meta calórica** — `nutri` solo trae números de ella.
- **Slots chilenos:** desayuno · almuerzo · **once** (no "comida/cena").
- **Compras** separadas Feria 🍅 / Súper 🛒; las categorías con `links: true`
  llevan deep link de búsqueda a **Lider.cl** (patrón por confirmar con su
  primer uso real — ajustar `liderUrl()` en app.js si cambia).
- **Sin precios:** el costo es restricción de diseño (legumbres, jurel, huevo,
  feria de temporada), no un número mostrado.
- **`quiz.html`** — onboarding de una vez: stats + gustos ❤️/👍/🥸/❌ de ella
  y del hijo + cocina + compras; termina en botón compartir (WhatsApp via
  `navigator.share`). Las respuestas alimentan la semana 1.
- **Feedback semanal:** botón 📤 en Antojos arma el resumen de la semana
  (comidas ✅/▫️ + antojos) y lo comparte por WhatsApp → llega a Maple vía
  la novia → siguiente semana ajustada.
- La app sin semanas (`CAPI_DATA.weeks` vacío) muestra onboarding con el link
  al quiz y la advertencia de instalación en iPhone (ella usa iPhone: hay que
  "Agregar a pantalla de inicio" o Safari borra localStorage a los 7 días).

## Ritual semanal

1. Ella manda feedback (botón 📤) → novia lo reenvía → owner lo pega a Maple.
2. Maple genera la semana nueva (gustos + antojos + temporada chilena +
   barato-por-diseño) y la agrega al FINAL de `CAPI_DATA.weeks` en data.js.
3. Owner hace commit + push; la app muestra siempre la última semana.

## Deploy (pendiente, mismo patrón que michimenu)

```powershell
cd projects/capimenu
git init; git add -A; git commit -m "CapiMenú v1"
# crear repo Qimbis/capimenu en GitHub, push, habilitar Pages (main /root)
```
