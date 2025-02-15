import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateMovieDto, MovieResponse } from "./types";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmNzkxY2UyLWQ2M2YtNDU4ZC04MDMyLTljZGExYTI0NDQyZiIsImVtYWlsIjoiZXhhbXBsZUBlbWFpbC5jb20iLCJpYXQiOjE3Mzc4NjA4NjN9.zA_biouyID8_wtAW21AYpj_h7_H3MDHLrFjf4EicljM"; // Considera usar variables de entorno en producción

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    createMovie: builder.mutation<MovieResponse, CreateMovieDto>({
      query: (movieData) => ({
        url: "/movies",
        method: "POST",
        body: movieData,
      }),
    }),
  }),
});

export const { useCreateMovieMutation } = movieApi;
