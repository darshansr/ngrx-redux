import { Action, createReducer, on } from '@ngrx/store';
import { ZipcodeActionTypes, ZipcodeActions } from '../actions/zipcode.actions';


export const zipCodesFeatureKey = 'zipCodes';

export interface ZipcodeState {
  zipcodes: Array<String>
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

export function zipcodeReducer(state = initialState, action: ZipcodeActions): ZipcodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode:
      return { ...state, zipcodes: [...state.zipcodes, action.zipcode] }
    case ZipcodeActionTypes.RemoveZipcode:
      return { ...state, zipcodes: state.zipcodes.filter(item => item !== action.zipcode) }
  }
  return state;
}