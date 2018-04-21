import { 
  put, 
  call, 
  cancelled, 
} from 'redux-saga/effects';
import { 
  startSubmit,
  stopSubmit,
  setSubmitSucceeded,
  setSubmitFailed,
} from 'redux-form';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_CANCEL,
} from '../../actions';

/**
 * Fetch Saga creator
 * @param {function} APIManager - function that perform API fetch calls
 */
const createFetchSaga = (APIManager) => {
  /**
   * Fetch saga to be run on a fetch action
   * @param {object} action - fetch action that triggered the saga
   */
  function* fetchSaga(action) {
    const { 
      type, 
      payload, 
      meta: {
        APIBaseUrl,
        resource,
        requestType,
        csrfToken, 
        formName, 
        ...meta
      }
    } = action;
    
    /* Request dispatchs */
    yield [
      put({ type: FETCH_REQUEST }), // general request dispatch coming with every fetch action
      put({ 
        type: `${type}_REQUEST`, 
        payload, 
        meta : {
          date: Date.now(),
          ...meta,   
        }, 
      }), // relative request dispatch for this particular fetch action
      formName ? put(startSubmit(formName)) : undefined, // dispatch redux-form START_SUBMIT action
    ];

    let sagaTerminated; // will hold a boolean value indicating wheter the saga has terminated or not
    try {
      /* Run the API call (this call is blocking) */      
      const response = yield call(
        APIManager, 
        requestType, 
        APIBaseUrl,
        resource, 
        {
          data: payload, 
          csrfToken
        }
      );

      /* Indicates that the saga terminated */    
      sagaTerminated = true;       
      
      /* Success dispatch */
      yield [
        formName ? put(stopSubmit(formName)) : undefined, // dispatch redux-form STOP_SUBMIT action
        formName ? put(setSubmitSucceeded(formName)) : undefined, // dispatch redux-form SET_SUBMIT_SUCCEEDED action
        put({ type: FETCH_SUCCESS }), // general success dispatch coming with every fetch action
        put({
          type: `${type}_SUCCESS`,
          payload: response.data,
          meta: {
            resource, 
            payload,
            date: Date.now(),            
            csrfToken: response.csrfToken,
            ...meta,
          },
        }),// relative success dispatch for this particular fetch action
      ]; 
    } catch(error) {
      /* Indicates that the saga terminated */     
      sagaTerminated = true;                          
      
      /* Failure dispatch */
      yield [
        formName ? put(stopSubmit(
          formName, 
          error && error.message ? error.message.errors : undefined
        )) : undefined, // dispatch redux-form STOP_SUBMIT action
        formName ? put(setSubmitFailed(
          formName, 
          error && error.message && error.message.errors ? Object.keys(error.message.errors) : undefined
        )) : undefined, // dispatch redux-form SET_SUBMIT_FAILED action
        put({
          type: FETCH_FAILURE, 
          payload: error,
          error: true,
        }), // general failure dispatch coming with every fetch action
        put({
          type: `${type}_FAILURE`,
          payload: error,
          error: true,
          meta: {
            resource, 
            payload,
            date: Date.now(),
            csrfToken: error.message && error.message.csrfToken,
            ...meta, 
          },
        }), // relative failure dispatch for this particular fetch action
      ];
    } finally {
      /* In case the saga is cancelled before terminating  */                        
      if (!sagaTerminated) {
        if (yield cancelled()) {
          yield [
            formName ? put(stopSubmit(formName )) : undefined, 
            put({ type: FETCH_CANCEL }),
            put({
              type: `${type}_CANCEL`,
              meta: {
                resource, 
                payload, 
                ...meta, 
              },
            }),
          ];
        }
      }
    }
  };

  return fetchSaga;
};

export default createFetchSaga;