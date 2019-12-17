import express from 'express';
import routes from './routes';

class App {
  constructor() {
    // Roda sempre que o App inicio
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Congiuração para usar JSON
    this.server.use(express.json());
  }

  routes() {
    // Importar de routes.js
    this.server.use(routes);
  }
}

// Exportar instancia para server.js
export default new App().server;
