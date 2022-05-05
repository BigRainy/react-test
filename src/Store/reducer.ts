const defaultState = {
  num: 1
}

interface IAction {
  type: string;
  value: number;
}

// eslint-disable-next-line
export default (state = defaultState, action: IAction) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "increase":
      newState.num += action.value;
      break;
    default:
      break;
  }
  return newState;
}
