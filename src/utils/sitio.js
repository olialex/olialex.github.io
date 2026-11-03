import avatar from '../assets/blog/img_392.jpg'; // cámbiala por tu foto

export const autor = {
  nombre: 'Tu nombre',
  rol: 'Lead Creator & Editor',
  bio: 'Escribiendo sobre tecnología, desarrollo y diseño web.',
  avatar,
  enlace: { texto: 'Ver Link in Bio →', url: 'https://github.com/olialex' },
};

export const redes = [
  { nombre: 'YouTube', url: 'https://youtube.com/@tucanal' },
  { nombre: 'Instagram', url: 'https://instagram.com/tuusuario' },
  { nombre: 'X', url: 'https://x.com/tuusuario' },
  { nombre: 'GitHub', url: 'https://github.com/olialex' },
  { nombre: 'Telegram', url: 'https://t.me/tucanal' },
];

export const sitio = {
  nombre: 'Mi Blog',
  descripcion: 'Ideas, proyectos e historias interactivas: dibujo, desarrollo web y scrollytelling.',
  imagenCompartir: '/compartir.jpg',

  menu: [
    { href: '/', label: 'Inicio' },
    { href: '/blog', label: 'Entradas' },
  ],

  // Cuántas portadas se muestran en la Home
  limites: { ultimas: 4, sugeridos: 6 },

  textos: {
    ultimas: '📰 Últimas publicaciones',
    sugeridos: '✨ Quizás te pueda interesar',
    verTodas: 'Ver todas →',
    explorarTitulo: 'Explorar todas las entradas',
    explorarSub: 'Busca por tema o etiqueta en el archivo completo',
  },
};