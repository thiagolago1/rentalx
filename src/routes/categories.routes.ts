import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });
  console.log('# POST CREATE CATEGORIES');

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categoriesList = categoriesRepository.list();

  console.log('# GET LIST CATEGORIES');

  return response.status(201).send(categoriesList);
});

export { categoriesRoutes };
