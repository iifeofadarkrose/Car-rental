import { actions } from './slice';


export const fetchData = () => async (dispatch) => {
  try {
    const data = await fetch('');
    const result = await data.json();
    dispatch(actions.someAction(result));
  } catch (error) {
  
    dispatch(actions.errorOccurred(error));
  }
};
