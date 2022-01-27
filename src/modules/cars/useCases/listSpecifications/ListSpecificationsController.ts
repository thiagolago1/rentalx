import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const specificationsList = this.listSpecificationsUseCase.execute();

    console.log('# GET LIST Specifications');

    return response.status(201).send(specificationsList);
  }
}

export { ListSpecificationsController };
