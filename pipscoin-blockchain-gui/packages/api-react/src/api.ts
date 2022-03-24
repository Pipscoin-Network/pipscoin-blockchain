import { createApi } from '@reduxjs/toolkit/query/react';
import pipscoinLazyBaseQuery from './pipscoinLazyBaseQuery';

export const baseQuery = pipscoinLazyBaseQuery({});

export default createApi({
  reducerPath: 'pipscoinApi',
  baseQuery,
  endpoints: () => ({}),
});
