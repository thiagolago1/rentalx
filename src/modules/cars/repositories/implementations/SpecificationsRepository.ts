import { Specification } from '../../model/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  // Somente esta classe pode chamar esse construtor
  private constructor() {
    this.specifications = [];
  }

  // Criar ou repassar a instância já existente
  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    console.log('#', SpecificationsRepository.INSTANCE);
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );
    return specification;
  }
}

export { SpecificationsRepository };
