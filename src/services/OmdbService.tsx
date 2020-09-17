import axios from "axios";
import { TApiSearchResult, TApiSingleResult } from "../types/TApiResult";

const apikey = "fad16781";
const baseUrl = `https://omdbapi.com/`;
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

async function GetApiResult<T>(apiType: string, queryParam: string): Promise<T> {
  const apiResponse = await instance.get(`?apikey=${apikey}&${apiType}=${queryParam}`);
  const result: T = apiResponse.data;
  return result;
}

export const SearchMovieResults = (searchText: string) =>
  GetApiResult<TApiSearchResult>("s", searchText);

export const GetMovieById = (movieId: string) => GetApiResult<TApiSingleResult>("i", movieId);
