import { tagsTypes } from "../tag-types";
import { baseApi } from "./baseApi";


const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagsTypes.specialties],
    }),
    getAllSpecialties: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [tagsTypes.specialties],
    }),
    deleteSpecialty: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
       
      }),
      invalidatesTags: [tagsTypes.specialties],
    }),
  }),
});

export const { useCreateSpecialtyMutation,useGetAllSpecialtiesQuery,useDeleteSpecialtyMutation } = specialtiesApi;
