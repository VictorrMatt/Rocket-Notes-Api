const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

/* Este código é um módulo Node.js que configura o multer, 
que é uma biblioteca Node.js usada para processar uploads de arquivos. 
Ele define algumas configurações relacionadas ao armazenamento de 
arquivos temporários e ao destino final para os uploads.

  Este módulo exporta as constantes TMP_FOLDER, UPLOADS_FOLDER e 
MULTER para que possam ser usadas em outras partes do projeto, 
principalmente ao configurar o middleware de upload de arquivos com o 
multer. Isso permite que a aplicação especifique onde os arquivos 
temporários e os arquivos finais devem ser armazenados.
 */
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
};
