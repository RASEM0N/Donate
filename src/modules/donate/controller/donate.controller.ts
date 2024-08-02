import { Body, Controller, Get, HttpStatus, Post, Redirect, Render } from '@nestjs/common';
import { DonateDto } from '../model/donate.dto';
import { DonateService } from '../api/donate.service';
import { ConfigService } from '@nestjs/config';
import { RedirectResponse } from '@nestjs/core/router/router-response-controller';

@Controller('donate')
export class DonateController {
	constructor(
		private readonly donateService: DonateService,
		private readonly configService: ConfigService,
	) {}

	@Post()
	@Redirect()
	async postDonate(@Body() donateDto: DonateDto): Promise<RedirectResponse> {
		const donate = await this.donateService.create(donateDto.comment);
		const payServiceUrl = this.configService.get<string>('PAYSERVICE_URL');
		return { statusCode: HttpStatus.FOUND, url: payServiceUrl + donate.id };
	}

	@Get()
	@Render('donates')
	async getDonates() {
		const donates = await this.donateService.getAll();
		return { title: 'Donates', donates };
	}
}
