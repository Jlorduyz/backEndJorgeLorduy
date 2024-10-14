import "dotenv/config.js";
import "../../config/database.js";
import Cuenta from "../Cuenta.js";

let cuentas = [
  {
    usuario: "juan123",
    contenido: "¡Amo este día soleado! 🌞 #sol #felicidad",
    imagen: "https://example.com/imagen1.jpg",
    fechaPublicacion: new Date(),
    likes: 120,
    comentarios: [
      {
        usuario: "maria_love",
        comentario: "¡Qué lindo día!",
        fechaComentario: new Date(),
      },
      {
        usuario: "pedro",
        comentario: "¡Disfruta!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["sol", "felicidad"],
    esPublico: true,
    numCompartidos: 15,
    seguidores: ["maria_love", "pedro", "laura_fit"],
  },
  {
    usuario: "anna_blogger",
    contenido: "Nuevo artículo en el blog sobre viajes. ¡No se lo pierdan!",
    imagen: "https://example.com/blog-post.jpg",
    fechaPublicacion: new Date(),
    likes: 89,
    comentarios: [
      {
        usuario: "travel_guru",
        comentario: "¡Genial, lo leeré pronto!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["viajes", "blog"],
    esPublico: true,
    numCompartidos: 30,
    seguidores: ["travel_guru", "juan123", "lina_writer"],
  },
  {
    usuario: "gamer_cool",
    contenido: "¡Finalmente logré vencer el jefe final en Dark Souls!",
    imagen: "",
    fechaPublicacion: new Date(),
    likes: 250,
    comentarios: [
      {
        usuario: "game_master",
        comentario: "¡Felicidades, es todo un reto!",
        fechaComentario: new Date(),
      },
      {
        usuario: "anna_blogger",
        comentario: "¡Increíble!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["gaming", "DarkSouls"],
    esPublico: true,
    numCompartidos: 50,
    seguidores: ["game_master", "anna_blogger", "pedro"],
  },
  {
    usuario: "laura_fit",
    contenido: "Hoy tocó entrenamiento de piernas 💪 #fitness #gym",
    imagen: "https://example.com/entrenamiento.jpg",
    fechaPublicacion: new Date(),
    likes: 200,
    comentarios: [
      {
        usuario: "juan123",
        comentario: "¡Gran trabajo!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["fitness", "gym"],
    esPublico: true,
    numCompartidos: 25,
    seguidores: ["juan123", "pedro", "anna_blogger"],
  },
  {
    usuario: "tech_guru",
    contenido: "Revisión completa del nuevo iPhone 15. ¡No te lo pierdas!",
    imagen: "https://example.com/iphone-review.jpg",
    fechaPublicacion: new Date(),
    likes: 320,
    comentarios: [
      {
        usuario: "laura_fit",
        comentario: "Me encanta, ¡quiero uno!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["tecnología", "iphone"],
    esPublico: true,
    numCompartidos: 45,
    seguidores: ["laura_fit", "pedro", "maria_love"],
  },
  {
    usuario: "foodie_life",
    contenido: "Hoy cociné una pasta deliciosa 🍝 #pasta #foodlover",
    imagen: "https://example.com/pasta.jpg",
    fechaPublicacion: new Date(),
    likes: 180,
    comentarios: [
      {
        usuario: "gamer_cool",
        comentario: "¡Se ve deliciosa!",
        fechaComentario: new Date(),
      },
      {
        usuario: "anna_blogger",
        comentario: "¡Quiero probarla!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["pasta", "foodlover"],
    esPublico: true,
    numCompartidos: 20,
    seguidores: ["gamer_cool", "anna_blogger", "laura_fit"],
  },
  {
    usuario: "pedro",
    contenido: "Caminata por el bosque, la naturaleza es increíble 🌲🌿",
    imagen: "https://example.com/naturaleza.jpg",
    fechaPublicacion: new Date(),
    likes: 95,
    comentarios: [
      {
        usuario: "maria_love",
        comentario: "¡Qué paz!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["naturaleza", "aventura"],
    esPublico: true,
    numCompartidos: 12,
    seguidores: ["maria_love", "juan123", "tech_guru"],
  },
  {
    usuario: "maria_love",
    contenido: "Mi nueva planta ha florecido 🌼 #jardinería",
    imagen: "https://example.com/planta.jpg",
    fechaPublicacion: new Date(),
    likes: 75,
    comentarios: [
      {
        usuario: "pedro",
        comentario: "¡Qué bonita!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["jardinería", "plantas"],
    esPublico: true,
    numCompartidos: 8,
    seguidores: ["pedro", "foodie_life", "laura_fit"],
  },
  {
    usuario: "lina_writer",
    contenido: "Acabo de terminar mi nuevo libro, ¡pronto estará disponible!",
    imagen: "https://example.com/libro.jpg",
    fechaPublicacion: new Date(),
    likes: 220,
    comentarios: [
      {
        usuario: "anna_blogger",
        comentario: "¡No puedo esperar a leerlo!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["libros", "escritura"],
    esPublico: true,
    numCompartidos: 35,
    seguidores: ["anna_blogger", "tech_guru", "maria_love"],
  },
  {
    usuario: "travel_guru",
    contenido: "Explorando las montañas de Perú 🏔️ #aventura #viajes",
    imagen: "https://example.com/montanas.jpg",
    fechaPublicacion: new Date(),
    likes: 305,
    comentarios: [
      {
        usuario: "pedro",
        comentario: "¡Qué vista tan hermosa!",
        fechaComentario: new Date(),
      },
      {
        usuario: "gamer_cool",
        comentario: "¡Qué envidia!",
        fechaComentario: new Date(),
      },
    ],
    etiquetas: ["aventura", "viajes"],
    esPublico: true,
    numCompartidos: 60,
    seguidores: ["pedro", "gamer_cool", "anna_blogger"],
  },
];

Cuenta.insertMany(cuentas);
