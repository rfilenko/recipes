import { RECIPES_LIST } from '../../../data/recipes';

export default ({ query: {} }, res) => {
  const filtered = RECIPES_LIST.filter((p) => p.id === id);

  // recipe with id exists
  if (filtered.length > 0) {
    // res.status(200).json(filtered[0]);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(filtered));
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` });
  }
};
