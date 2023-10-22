const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

/* Esse código implementa uma classe chamada DiskStorage 
que é responsável por salvar e excluir arquivos em um sistema 
de armazenamento em disco local. A classe utiliza o módulo fs 
(File System) do Node.js para realizar operações de leitura e gravação 
de arquivos no sistema de arquivos do servidor */
class DiskStorage {
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    );

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);
    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

/* Essa classe DiskStorage é útil para aplicações que precisam salvar 
arquivos no servidor, como uploads de imagens, documentos, ou outros 
tipos de arquivos. O método saveFile lida com a movimentação de arquivos 
da pasta temporária (onde os arquivos são inicialmente carregados) para a 
pasta de destino final, enquanto o método deleteFile permite a exclusão 
de arquivos anteriormente salvos.
 */
module.exports = DiskStorage;
