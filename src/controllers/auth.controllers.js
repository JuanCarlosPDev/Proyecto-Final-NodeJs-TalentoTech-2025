import { generateToken } from "../auth/generatetoken.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (email === "test@gmail.com" && password === "123456") {
    const user = { email: email, id: "123" };
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({
      error: result.error,
      message: "Fallo de autenticación: Credenciales inválidas",
    });
  }
};
