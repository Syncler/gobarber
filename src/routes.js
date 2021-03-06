import { Router } from 'express';
import User from './app/models/user';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Jacson Syncler',
    email: 'syncler_jssa@yahoo.comb.br',
    password_hash: '123456789',
  });
  return res.json(user);
});

export default routes;
