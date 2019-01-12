import cookiesMiddleware from 'universal-cookie-express';
import { Express } from 'express';
import ServerModule from '@module/module-server-ts';

const beforeware = (app: Express) => {
  app.use(cookiesMiddleware());
};

export default new ServerModule({
  beforeware: [beforeware]
});
