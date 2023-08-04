import { sign } from "jsonwebtoken";

interface TTokenObject {
  token: string;
}

const login = (userId: string): TTokenObject => {
  const token = sign({}, String(process.env.SECRET_KEY), {
    expiresIn: "24h",
    subject: String(userId),
  });

  const tokenObject: TTokenObject = {
    token: token,
  };

  return tokenObject;
};

export default login;
