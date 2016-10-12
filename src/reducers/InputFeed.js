export default (state = "", action) => {
    switch (action.type) {
        case "SET_TEXT":
            var output;
            if (action.input === "=") {
                if(state.endsWith("+")||state.endsWith("-")||state.endsWith("*")||state.endsWith("/"))
                {
                    state=state.slice(0,state.length-1);
                }
                output = eval(state);
            } else if (action.input === "C") {
                output = "";
            } else {
                output = state + action.input;
            }
            return output + "";
        default:
            return state;
    }
};
