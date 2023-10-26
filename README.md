# 🚀RocketNotes (Pc Only)
![image](https://github.com/VictorrMatt/Rocket-Notes-Api/assets/98140122/f5cf99d6-6ef2-4db9-844a-49308728bda8)

### 🔨Visão Geral

*"RocketNotes" é uma aplicação web que permite aos usuários gerenciar suas notas e links úteis de forma eficiente. A aplicação possui uma interface de usuário intuitiva e recursos essenciais para criação, edição e exclusão de notas, pesquisa de notas com base em tags e títulos, além de recursos de perfil de usuário e autenticação.*

## Back-End
A aplicação requer um back-end para fornecer as seguintes funcionalidades essenciais:

- ``Autenticação``: *O back-end deve oferecer autenticação de usuário, permitindo que os usuários façam login com segurança e mantenham sessões ativas.*
- ``Gestão de Usuários``: *O back-end deve permitir o cadastro e atualização de informações de usuário, como nome, e-mail, senha e imagem de perfil.*
- ``Gestão de Notas``: *Deve ser possível criar, editar, visualizar e excluir notas. As notas podem incluir títulos, descrições, links e tags.*
- ``Pesquisa de Notas``: *Os usuários devem ser capazes de pesquisar notas com base em títulos e tags.*
- ``Segurança``: *Deve haver medidas de segurança, como a geração e validação de tokens JWT (JSON Web Tokens) para proteger as rotas e dados sensíveis.*

## 🔐Requisições:
### Sessions:
*POST / Create (Criação de um novo token Jwt que será necessário para as requisições):*  
``{
  "email": "seu_email",
  "password": "sua_senha"
}``

### Users:  
*PATCH / Avatar:*  
``Recebe a imagem do avatar que será salva no banco``

*POST / Create (Criação de usuários):*  
``{
  "name": "seu_nome",
  "email": "seu_email",
  "password": "sua_senha"
}``

*PUT / Update (Atualiza dados do usuário):*  
``{
  "name": "novo_nome",
  "email": "novo_email",
  "password": "nova_senha",
  "old_password": "senha_antiga"
}``

### Notes:  
*GET / Index (Retorna notas referentes a title e tags):*  
``Queries: Title e Tags.``

*DELETE / Delete (Deleta uma nota):*  
``Recebe o ID da nota por meio do route params.``

*GET / Read (Retorna a nota e as suas tags):*  
``Recebe o ID da nota por meio do route params.``

*POST / Create (Cria uma nova nota):*  
``{
  "title": "jegarne",
  "description": "Massa",
  "rating": 6,
  "tags": ["Pamonha", "raimundo"]
}``

### Tags:  
*GET / Index:*  
``Retorna as tags que foram criadas nas notas pelo usuário.``

### Files:  
*GET / ? (Recebe o nome da imagem cadastrada no banco e a retorna):*  
``Recebe o nome da imagem por meio do route params.``

## ✔️Tecnologias Utilizadas:

### Back-End (Tecnologias comuns em projetos Node.js):

- ``Node.js``: *Plataforma de execução JavaScript.*
- ``Express``: *Framework Node.js para criação de APIs RESTful.*
- ``Banco de Dados (não especificado)``: *Para armazenar informações de usuários e notas.*
- ``JWT (JSON Web Tokens)``: *Para autenticação e segurança.*
- ``Multer``: *Biblioteca para manipular uploads de arquivos, como imagens de perfil.*
- ``Cors``: *Utilizado para habilitar as requisições entre origens (CORS) no servidor.*

### 📝Resumo 
*"RocketNotes" é uma aplicação completa de gerenciamento de notas e links úteis que se baseia na tecnologia React no front-end e requer um back-end com funcionalidades de autenticação, gestão de usuários e notas, segurança e banco de dados. O projeto é uma solução eficaz para ajudar os usuários a organizar suas notas de maneira prática e eficiente.*

Para acessar o site do "Rocket Notes", você pode [clicar aqui](https://rocketnootes.netlify.app/).

## 🤝Desenvolvedores
<table align="center">
  
  <tr>
    <td align="center">
      <a href="https://github.com/victorrmatt">
        <img src="https://github.com/victorrmatt.png" width="100px;" alt="Foto do Victor Mateus no GitHub"/><br>
        <sub>
        </sub>
        <p align="center">
          <a href="https://www.linkedin.com/in/victor-mateus/" alt="LinkedIn">
          <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=#"/></a>
          <a href="https://api.whatsapp.com/send?phone=5587988278980&text=Olá%20Tudo%20Bem?%0DVenho%20pelo%20GitHub." alt="WhatsApp">
          <img src="https://img.shields.io/badge/-WhatsApp-25d366?style=flat-square&labelColor=25d366&logo=whatsapp&logoColor=white&link=#"/></a>
        </p>
      </a>
    </td>
    <td>
      <img width="300" src="https://i2.wp.com/allhtaccess.info/wp-content/uploads/2018/03/programming.gif?fit=1281%2C716&ssl=1" />
    </td>
  </tr>
</table>

<p align="center">
  <img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>
