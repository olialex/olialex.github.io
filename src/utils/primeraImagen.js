const imagenes = import.meta.glob('/src/assets/blog/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export function primeraImagen(body = '') {
  const match = body.match(/!\[[^\]]*\]\(([^)\s]+)/);
  if (!match) return null;

  const nombre = decodeURIComponent(match[1].split('/').pop());
  const key = Object.keys(imagenes).find((k) => k.endsWith('/' + nombre));

  return key ? imagenes[key].default : null;
}