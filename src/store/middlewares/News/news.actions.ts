import { Dispatch } from "redux";
import fetchApi from "../../../api/createApi";
import { randomIntegersArray } from "../../../utils/randomInteger";
import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
} from "./news.types";

export const getNewsRequest = () => ({
  type: GET_NEWS_REQUEST,
});

interface ActionDispatchType {
  type: string;
  payload?: any;
}

export const getNewsSuccess = (getNewsData: any) => ({
  type: GET_NEWS_SUCCESS,
  payload: getNewsData,
});

export const getNewsFailure = (error: Error) => ({
  type: GET_NEWS_FAILURE,
  payload: error,
});

export const getRandom10News =
  () => async (dispatch: Dispatch<ActionDispatchType>) => {
    dispatch(getNewsRequest());
    await fetchApi("topstories.json")
      .then(async (data) => {
        const indexes = randomIntegersArray(10, 1, data.length);
        return await Promise.allSettled(
          indexes.map(async (index) => {
            return fetchApi(`/item/${data[index]}.json`);
          })
        ).then((data) => {
            return data.map((item: any) => item.value)
        });
      })
      .then(async data => {
          return await Promise.allSettled(data.map(async (item: any) => {
              item.user = await fetchApi(`/user/${item.by}.json`)
              return item
          })).then((data) => {
            return data.map((item: any) => item.value)
        });
      })
      .then((data) => {
        dispatch(getNewsSuccess(data));
      })
      .catch((error) => dispatch(getNewsFailure(error)));
  };
