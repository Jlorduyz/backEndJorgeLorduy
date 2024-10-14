import User from "../../models/User.js";

let allUser = async (req, res) => {
  // definimos la ruta de la peticion y tambien define el tipo de peticion
  try {
    let all = await User.find(); // busca el modelo creado en mongoose en la base de datos
    return res.status(200).json({
      response: all, // response el status de la solicitus y 'all' lo que fue pedido
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};
let userByRole = async (req, res) => {
  // definimos la ruta de la peticion y tambien define el tipo de peticion
  try {
    let rolequery = req.params.x;
    let all = await User.find({ role: rolequery }); // busca el modelo creado en mongoose en la base de datos
    return res.status(200).json({
      response: all, // response el status de la solicitus y 'all' lo que fue pedido
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

export { allUser, userByRole };
