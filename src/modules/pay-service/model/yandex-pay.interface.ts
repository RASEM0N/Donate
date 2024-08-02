export interface IYandexPay {
	notification_type?: string,
	label?: string;
	operation_id?: string;
	bill_id?: string;
	operation_label?: string;

	// Платеж
	datetime?: string;
	amount?: string;
	withdraw_amount?: string;
	sha1_hash?: string;
	currency?: string;
	codepro?: string; // код протекции
	unaccepted?: string; // платеж не получен

	// ФИО и контакты
	firstname?: string;
	lastname?: string;
	fathersname?: string;
	sender?: string;
	email?: string;
	phone?: string;

	// Адрес
	city?: string;
	street?: string;
	building?: string;
	suite?: string;
	flat?: string;
	zip?: string;

	// Для тестовых транзакций
	test_notification?: string;
}
