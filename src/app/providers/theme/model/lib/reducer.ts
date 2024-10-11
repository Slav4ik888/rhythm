import { UIConfigProviderState } from '../types';



interface Action {
  type: "SET_MODE"
  value: any
}


export function reducer(state: UIConfigProviderState, action: Action) {
  switch (action.type) {
    case "SET_MODE": {
      return { ...state, mode: action.value };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
