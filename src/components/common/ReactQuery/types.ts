import { UseQueryResult, UseSuspenseQueryResult } from '@tanstack/react-query';

export type ReactQueryProps<T> = {
  queryResult: UseQueryResult<T> | UseSuspenseQueryResult<T>;
  // eslint-disable-next-line no-unused-vars
  render: (data: T) => any;
  renderLoading?: React.ReactNode;
  renderError?: React.ReactNode;
};
