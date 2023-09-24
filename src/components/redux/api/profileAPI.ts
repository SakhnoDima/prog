import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../core/api/realworld-base-query";
import { GetProfileInDTO } from "../dto/profile";

interface IProfileParams {
  userName: string;
}

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<GetProfileInDTO, IProfileParams>({
      query: ({ userName }) => ({
        url: `/profiles/${userName}`,
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
