// Exporta cada pieza de piezas.html a PNG en export/.  Uso: node exportar.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 2000 } });
  await p.goto('file://' + path.join(__dirname, 'piezas.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(500);
  const nombres = { perfil: 'foto-de-perfil-logo', 'perfil-foto': 'foto-de-perfil', 'perfil-marca': 'foto-de-perfil-opcion', 'd-sabores': 'destacada-sabores', 'd-encargos': 'destacada-encargos',
    'd-envios': 'destacada-envios', 'd-pagos': 'destacada-pagos', 'd-clientes': 'destacada-clientes',
    'p-hola': 'post-1-presentacion', 'p-sabores': 'post-2-sabores', 'o-foto': 'post-3-como-encargar' };
  for (const [id, n] of Object.entries(nombres))
    await p.locator('#' + id).screenshot({ path: path.join(__dirname, 'export', n + '.png') });
  // Primer post: carrusel de 5 placas, en el orden en que se suben
  const carrusel = ['f-portada', 'f-todos', 'p-sabores', 'o-foto', 'c-cierre'];
  for (const [i, id] of carrusel.entries())
    await p.locator('#' + id).screenshot({ path: path.join(__dirname, 'export', 'primer-post', (i + 1) + '.png') });
  // Historias para las destacadas
  for (const [id, n] of [['h-pagos', 'medios-de-pago'], ['h-envios', 'envios'], ['h-encargos', 'encargos'], ['h-sabores', 'productos-budines'], ['h-chips', 'productos-chips'], ['h-limon', 'productos-limon']])
    await p.locator('#' + id).screenshot({ path: path.join(__dirname, 'export', 'destacadas', n + '.png') });
  console.log('fuentes:', await p.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').length));
  await b.close();
})();
