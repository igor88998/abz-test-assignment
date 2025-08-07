export enum QueryKeys {
	USERS = "users",
	POSITIONS = "positions",
	TOKEN = "token",
}

export const UsersQueryKeys = {
	LIST: ["users", "list"],
	BY_PAGE: (page: number, count: number) => ["users", "list", page, count],
};

export const PositionsQueryKeys = {
	LIST: ["positions", "list"],
};

export const TokenQueryKeys = {
	GET: ["token", "get"],
};
