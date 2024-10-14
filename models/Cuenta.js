import { Schema, model } from "mongoose";

let collection = "cuentas";

let schema = new Schema(
  {
    usuario: { type: String, required: true },
    contenido: { type: String, required: true },
    imagen: { type: String },
    fechaPublicacion: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    comentarios: [
      {
        usuario: { type: String, required: true },
        comentario: { type: String, required: true },
        fechaComentario: { type: Date, default: Date.now },
      },
    ],
    etiquetas: [String],
    esPublico: { type: Boolean, default: true },
    numCompartidos: { type: Number, default: 0 },
    seguidores: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

let Cuenta = model(collection, schema);

export default Cuenta;
