import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
} from "./news.types";

const initialState = {
  loading: false,
  data: [] || {},
  success: "",
  error: "",
};

interface NewsActionTypes {
  type: string;
  payload: any;
}

export default function getNews(state = initialState, action: NewsActionTypes) {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
		case GET_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				error: '',
			}
		case GET_NEWS_FAILURE:
			return {
				...state,
				loading: false,
				data: [],
				error: action.payload
			}
	  default:
			return state
  }
}
