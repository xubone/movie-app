import axios from "axios";
import { TApiSearchResult, TApiSingleResult } from "../types/TApiResult";

const apikey = "fad16781";
const baseUrl = `https://omdbapi.com/`;
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export async function SearchMovieResults(searchText: string): Promise<TApiSearchResult> {
  const queryParam = encodeURIComponent(searchText);

  const apiResponse = await instance.get(`?apikey=${apikey}&s=${queryParam}`);
  const result: TApiSearchResult = apiResponse.data;
  return result;
}

export async function GetMovieById(imdbID: string): Promise<TApiSingleResult> {
  const apiResponse = await instance.get(`?apikey=${apikey}&i=${imdbID}`);
  const result: TApiSingleResult = apiResponse.data;
  return result;
}
