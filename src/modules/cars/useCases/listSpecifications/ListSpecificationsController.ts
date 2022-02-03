import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase,
    );

    const specificationsList = await listSpecificationsUseCase.execute();

    console.log('# GET LIST Specifications');

    return response.status(201).send(specificationsList);
  }
}

export { ListSpecificationsController };
