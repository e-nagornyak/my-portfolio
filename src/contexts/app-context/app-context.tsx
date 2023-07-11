import React, {createContext, FC, ReactNode, useCallback, useReducer} from "react";

type AppContextType = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const AppContext = createContext<AppContextType>(
  null as any
);

export enum APP_ACTION_TYPE {
  SET_LOADING
}

export type AppAction = {
  type: APP_ACTION_TYPE.SET_LOADING;
  payload: { loading: boolean };
}
type AppState = { loading: boolean }

const InitialState: AppState = {
  loading: true
}

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case APP_ACTION_TYPE.SET_LOADING:
      return  {...state, loading: action.payload.loading }
    default:
      return state
  }
}

export const AppContextProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, InitialState);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({type: APP_ACTION_TYPE.SET_LOADING, payload: {loading}})
  }, [dispatch])

  return (
    <AppContext.Provider
      value={{...state, setLoading}}
    >
      {children}
    </AppContext.Provider>
  );
};
