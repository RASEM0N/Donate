import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS, WITH_ACTION } from '@/core/constants';
import { Donate } from '@/modules/donate/model/donate.entity';

@Injectable()
export class DonateService {
	constructor(
		@Inject(PROVIDERS.repositories.donate) private readonly donateRepository: typeof Donate,
	) {}

	getAll(): Promise<Donate[]> {
		return this.donateRepository.findAll();
	}

	findById(id: number): Promise<Donate> {
		return this.donateRepository.findOne({
			where: { id },
			order: [['createdAt', 'DESC']],
		});
	}

	create(comment: string): Promise<Donate> {
		return this.donateRepository.create({
			comment,
			done: false,
			action_state: WITH_ACTION,
		});
	}

	commit(donate: Donate, amount: number): Promise<Donate> {
		donate.done = true;
		donate.amount = amount;
		return donate.save();
	}
}
