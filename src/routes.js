import { Router } from 'express';

const routes = new Router();

// Configurar rotas aqui:
routes.get('/', (req, res) => {
  return res.json({ hello: 'Hello World do Nodejs' });
});

// exportar rotas para o app.js
export default routes;
