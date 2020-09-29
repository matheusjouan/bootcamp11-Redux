## 📔 Sobre

Aplicação simples para testar e aplicar os conceitos do Redux/Redux Saga. Trata-se de uma aplicação que irá lista uma lista de produtos no qual podemos adicionar no carrinho de compras.
Será verificado em uma API fake o estoque, caso o mesmo não tiver disponível, irá retornar uma mensagem de erro.

---

## :rocket: Tecnologias Utilizadas

- 💻 Frontend (Web):
  - ReacJS;
  - TypeScript;
  - Redux/Redux Saga;
  - JSON Server;
  - Axios.
  
- 📔 Padronização de Código:
  - ESLint
  - Prettier
  - EditorConfig
  
  ---
  
## 👨‍💻️ Como Usar  :

```shell
$ git clone https://github.com/matheusjouan/bootcamp11-Redux.git
$ cd bootcamp11-Redux
$ yarn install
```

### Iniciando o Servidor API Fake (localhost:3333)
```shell
$ yarn json-server server.json -p 3333 -w 
```

### Iniciando a Aplicação Web (localhost:3000)
```shell
$ yarn start
```
