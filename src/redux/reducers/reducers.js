import JobList from '../../api/jobListing';
import {
  SET_JOB_LIST,
  SET_JOB_TOTAL_COUNT,
  SET_JOB_OFFSET,
} from '../actions';

export const initialState = {
  jobList: [],
  totalCount: 0,
  limit: 10,
  offset: 0,
};
export function fetchJobList() {
  return async (dispatch, getState) => {
    const { limit, offset } = getState().listStore;
    try {
      const json =await JobList(limit, offset);
      console.log("json",json);
      const updatedJobList = json.jdList.map(job => {
        return  {...job,jobCompany:job.companyName,companyImage:job.logoUrl};
      });
      console.log("updatedJobList",updatedJobList)
      dispatch({ type: SET_JOB_LIST, payload: updatedJobList });
      dispatch({ type: SET_JOB_TOTAL_COUNT, payload: json.totalCount });
      dispatch({ type: SET_JOB_OFFSET, payload: offset + limit });
    } catch (error) {
      console.error(error);
    }
  };
}



const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOB_LIST:
      return {
        ...state,
        jobList: [...state.jobList, ...action.payload],
      };
    case SET_JOB_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case SET_JOB_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    default:
      return state;
  }
};

export default listReducer;
