import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categoriesList = this.listCategoriesUseCase.execute();

    console.log('# GET LIST CATEGORIES');

    return response.status(201).send(categoriesList);
  }
}

export { ListCategoriesController };
