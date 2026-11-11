# Instagram de Miguitas · estado

Cuenta: **@_miguitass** · Budines caseros · San Martín, Mendoza.
Última actualización: 11/11/2026.

## Decisiones tomadas

- **La marca vieja está descartada.** La de la rama `claude/happy-heisenberg-ab24ai`
  (mascota del budincito, menta y coral, letra Pacifico, "budines · cookies · y más")
  no se usa más. No tomar nada de ahí.
- **Identidad actual:**
  - Letra de títulos y logo: **Bricolage Grotesque** (800), siempre en **minúscula** para el nombre: "miguitas".
  - Letra de textos: **DM Sans**.
  - Colores: mandarina `#E8673C`, cacao `#2B1D16`, crema `#FAF3E8`, limón `#F4CF4A`, chips `#ECD9B8`, chocolate `#4A2C20`.
- **Estilo que le gusta:** foto real del producto como protagonista. Las placas y las historias van
  con **foto real de fondo** (oscurecida o difuminada), no con fondos de color lisos.
- **Lo que no le gusta:** letra demasiado grande, fotos sobresaturadas o, al revés, apagadas,
  y diseños que "se ven muy IA" (por ejemplo, círculos numerados 1-2-3).
- Referencias que eligió: `alba.crumble`, `_budine`, `maby.cake`.

## Datos del negocio

- **Sabores (en este orden):**
  - Limón: glaseado, con ralladura.
  - Chocolate: de cacao, con chips de chocolate.
  - Naranja: glaseada, con ralladura.
  - Chips: de vainilla, con chips de chocolate.
- Todos de **500 g**.
- **Pagos:** efectivo o transferencia. **Sin seña**: se paga al entregar o antes. El alias se pasa por WhatsApp.
- **Entregas:** los fines de semana. Encargos por WhatsApp (link en el perfil).
- **WhatsApp:** 2634 36-9364 · link: `https://wa.me/5492634369364`
- Más adelante quizás sume cookies. Por eso la historia de productos se titula "Budines".

## Qué está listo (en `instagram/export/`)

| Pieza | Archivo | Estado |
| --- | --- | --- |
| Foto de perfil | `foto-de-perfil.png` | **Puesta.** Foto del limón, "miguitas / todo casero" en crema, aro crema |
| Portadas de destacadas | `destacada-*.png` | **Puestas** |
| Primer post (carrusel de 5) | `primer-post/1.png` … `5.png` | Listo para publicar |
| Historia Medios de pago | `destacadas/medios-de-pago.png` | Lista |
| Historia Envíos | `destacadas/envios.png` | Lista (título "Entregas") |
| Historia Encargos | `destacadas/encargos.png` | Lista |
| Historias Productos | `destacadas/productos-budines.png`, `productos-chips.png`, `productos-limon.png` | Listas, subir en ese orden |
| Historia "Este finde hay budines" (14 y 15/11) | `historias/encargos-finde-14-15-nov.png` | Lista. Agregarle el sticker de link a WhatsApp al subirla |
| Guía de marca | `guia.html` (publicada en https://claude.ai/artifact/5tr1MbokDAvhRK6Z3uziQC) | Al día salvo esta tabla |

Primer post, placa por placa:

1. "Somos Miguitas." sobre la foto del limón cortado en la tabla (sin el logo chico arriba).
2. "Todo casero." sobre los dos budines de chips vistos de arriba.
3. Budines con los 4 sabores en franjas de color con dibujos y el sello "500 g".
4. "¿Cómo encargo?" sobre la foto del limón en la mano, oscurecida, con los pasos en renglones.
5. "Encargá el tuyo." sobre el budín de chips cortado, oscurecido, con el botón "Link en el perfil".

Descripción del primer post:

```
Somos Miguitas 👋
Hacemos budines caseros en San Martín, Mendoza, y los horneamos por encargo para que te lleguen frescos.

Limón, chocolate, naranja y chips, todos de 500 g.
Encargá durante la semana y te lo entregamos el finde.

Deslizá para ver los sabores y cómo pedir el tuyo 👉
¿Cuál probarías primero? Contanos en los comentarios.

Encargos por WhatsApp, link en el perfil.

#budinescaseros #budines #sanmartinmendoza #mendoza #meriendas #hechoencasa
```

## Pendiente

- Publicar el primer post.
- Fotos de **naranja** y **chocolate**, para sumar sus historias a Productos.
- Cambiar el nombre del perfil a "Miguitas | Budines caseros", la bio y el link a `https://wa.me/5492634369364?text=Hola%20Miguitas!%20Quiero%20encargar%20budines`
  (están propuestos en la guía; en la última captura seguían sin cambiar).
- Confirmar qué días exactos se entrega (la historia dice sábado y domingo), las zonas y si el envío tiene costo.
- Destacada "Clientes": cuando haya historias de pedidos entregados.

## Cómo regenerar las piezas

Todo sale de `instagram/piezas.html` (cada pieza es un `div` con `id`). Las fotos están en `instagram/fotos/`.

```
cd instagram
node exportar.js     # exporta a 2x en export/
python3 achicar.py   # las lleva a 1080 px con buen remuestreo
```

Al subir, activar en Instagram: Configuración → Uso de datos y calidad multimedia → "Subir con la máxima calidad".
