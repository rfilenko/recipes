import { RECIPES_LIST } from 'data/RECIPES';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(RECIPES_LIST));
};
