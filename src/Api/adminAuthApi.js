import { apiSlice } from "./apiSlice";

export const adminAuthApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (credentials) => ({
        url: "/admins/login", // ✅ matches backend
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginAdminMutation } = adminAuthApi;
