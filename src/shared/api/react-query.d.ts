import * as ReactQuery from "@tanstack/react-query";

type CustomUseQueryOptions<
  TQueryFn extends (...args: any[]) => Promise<any>,
  TExcludedKeys extends keyof ReactQuery.UseQueryOptions<any, any> = never,
> = Omit<
  ReactQuery.UseQueryOptions<
    Awaited<ReturnType<TQueryFn>>,
    Error,
    Awaited<ReturnType<TQueryFn>>
  >,
  TExcludedKeys
>;

type CustomUseMutationOptions<
  TMutationFn extends (...args: any[]) => Promise<any>,
  TExcludedKeys extends keyof ReactQuery.UseMutationOptions<any, any> = never,
> = Omit<
  ReactQuery.UseMutationOptions<
    Awaited<ReturnType<TMutationFn>>,
    Error,
    Parameters<TMutationFn>[0] extends undefined
      ? void
      : Parameters<TMutationFn>[0]
  >,
  TExcludedKeys
>;
