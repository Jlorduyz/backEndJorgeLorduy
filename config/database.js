import mongoose from "mongoose";

let url = process.env.URI_MONGO;

console.log(url);

// mongoose
//   .connect(url)
//   .then(() => console.log("database connected"))
//   .catch((error) => console.log(error));

async function connectBaseDeDatos() {
  try {
    await mongoose.connect(process.env.URI_MONGO);
  } catch (error) {
    console.log(error);
  }
}

connectBaseDeDatos();
