import { Action, createReducer, on } from '@ngrx/store';


export const zipCodesFeatureKey = 'zipCodes';

export interface State {
  zipcode:Array<String>
}

export const initialState: State = {
zipcode:[]
};


export const reducer = createReducer(
  initialState,

);

