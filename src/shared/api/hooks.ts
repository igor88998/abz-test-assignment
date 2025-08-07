import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, getPositions, signUp, getUser } from "./users";
import { UsersQueryKeys, PositionsQueryKeys } from "./queryKeys";
import type {
	CustomUseQueryOptions,
	CustomUseMutationOptions,
} from "./react-query";

export const useUsers = (
	{ page = 1, count = 6 }: { page?: number; count?: number } = {},
	options?: CustomUseQueryOptions<typeof getUsers, "queryKey" | "queryFn">
) => {
	return useQuery({
		queryKey: UsersQueryKeys.BY_PAGE(page, count),
		queryFn: () => getUsers({ page, count }),
		refetchOnWindowFocus: true,
		staleTime: 5 * 60 * 1000,
		...options,
	});
};

export const useUser = (
	id: number,
	options?: CustomUseQueryOptions<typeof getUser, "queryKey" | "queryFn">
) => {
	return useQuery({
		queryKey: [...UsersQueryKeys.LIST, "user", id],
		queryFn: () => getUser(id),
		refetchOnWindowFocus: true,
		staleTime: 5 * 60 * 1000,
		enabled: !!id,
		...options,
	});
};

export const usePositions = (
	options?: CustomUseQueryOptions<typeof getPositions, "queryKey" | "queryFn">
) => {
	return useQuery({
		queryKey: PositionsQueryKeys.LIST,
		queryFn: getPositions,
		refetchOnWindowFocus: true,
		staleTime: 10 * 60 * 1000,
		...options,
	});
};

export const useSignUp = (
	options?: CustomUseMutationOptions<typeof signUp>
) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: signUp,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [UsersQueryKeys.LIST[0]] });
		},
		...options,
	});
};
