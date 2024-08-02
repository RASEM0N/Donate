export const PROVIDERS = {
	db: 'orm_sequelize',
	repositories: {
		message: 'entity_message',
		donate: 'entity_donate',
	},
};

export const WITHOUT_ACTION = 0;
export const WITH_ACTION = 1;
export const PERFORM_ACTION = 2;
export const DONE_ACTION = 3;
