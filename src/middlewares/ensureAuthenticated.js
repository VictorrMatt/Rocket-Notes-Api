const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

/* esse middleware é usado para garantir que as rotas protegidas exijam \
um token JWT válido no cabeçalho de autorização da solicitação. 
Caso contrário, ele retorna um erro de autenticação. Caso o token seja 
válido, o ID do usuário é disponibilizado na propriedade req.user para 
uso nas rotas subsequentes. */
function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token não informado", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);
    req.user = {
      id: Number(user_id),
    };
    return next();
  } catch {
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;
