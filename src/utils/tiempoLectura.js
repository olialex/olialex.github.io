export function tiempoLectura(texto = '', palabrasPorMinuto = 200) {
  const limpio = texto
    .replace(/^(import|export)\s.*$/gm, '')   // imports de MDX
    .replace(/```[\s\S]*?```/g, ' ')          // bloques de código
    .replace(/<[^>]+>/g, ' ')                 // etiquetas HTML/JSX
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')    // imágenes
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')  // enlaces: deja solo el texto
    .replace(/[#>*_`~|-]/g, ' ');             // símbolos de Markdown

  const palabras = limpio.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / palabrasPorMinuto));
}

// Usa el valor del encabezado (lectura: 8) y, si no existe, lo calcula
export const minutosDe = (entrada) =>
  entrada.data.lectura ?? tiempoLectura(entrada.body);