import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  );
  createSpecificationService.execute({ name, description });
  console.log('# POST CREATE Specifications');

  return response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
  const specificationsList = specificationsRepository.list();

  console.log('# GET LIST Specifications');

  return response.status(201).send(specificationsList);
});

export { specificationsRoutes };
