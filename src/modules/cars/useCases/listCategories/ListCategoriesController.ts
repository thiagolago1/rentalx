import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const categoriesList = await listCategoriesUseCase.execute();

    console.log('# GET LIST CATEGORIES');

    return response.status(201).send(categoriesList);
  }
}

export { ListCategoriesController };
