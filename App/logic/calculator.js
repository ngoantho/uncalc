export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: "0",
};

function handleNumber(value, { currentValue, ...state }) {
  if (currentValue === "0") {
    return {
      currentValue: `${value}`,
      ...state,
    };
  }

  return {
    currentValue: `${currentValue}${value}`,
    ...state,
  };
}

function handleEqual(state) {
  const { currentValue, previousValue, operator } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const reset = {
    operator: null,
    previousValue: "0",
  };

  if (operator === "*") {
    return {
      currentValue: previous * current,
      ...reset,
    };
  }

  if (operator === "/") {
    return {
      currentValue: previous / current,
      ...reset,
    };
  }

  if (operator === "+") {
    return {
      currentValue: previous + current,
      ...reset,
    };
  }

  if (operator === "-") {
    return {
      currentValue: previous - current,
      ...reset,
    };
  }

  return state;
}

export default function calculator(state, action) {
  switch (action.type) {
    case "number":
      return handleNumber(action.value, state);
    case "operator":
      return {
        operator: action.value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    default:
      return state;
  }
}
