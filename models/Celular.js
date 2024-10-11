import { Schema, model } from "mongoose";

let collection = "celulares";

let schema = new Schema(
  {
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    color: { type: String, required: true },
    pantallaPulgadas: { type: Number, required: true },
    tiene5G: { type: Boolean, default: false },
    camaraMP: { type: Number, required: true },
    bateriaMah: { type: Number, required: true },
    esResistenteAgua: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

let Celular = model(collection, schema);

export default Celular;
