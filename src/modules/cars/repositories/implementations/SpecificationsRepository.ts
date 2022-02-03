import { getRepository, Repository } from 'typeorm';

import { Specification } from '../../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  // private specifications: Specification[];
  private repository: Repository<Specification>;

  // private static INSTANCE: SpecificationsRepository;

  // Somente esta classe pode chamar esse construtor
  constructor() {
    this.repository = getRepository(Specification);
  }

  // Criar ou repassar a instância já existente
  // public static getInstance(): SpecificationsRepository {
  //   if (!SpecificationsRepository.INSTANCE) {
  //     SpecificationsRepository.INSTANCE = new SpecificationsRepository();
  //   }

  //   return SpecificationsRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    // Select * from categories where name = "name" limit 1
    const specification = await this.repository.findOne({ name });
    return specification;
  }
}

export { SpecificationsRepository };
