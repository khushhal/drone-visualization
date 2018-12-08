import * as actions from "../actions";

const initialState = {
    loading: true,
    metrics: [],
}

const startLoading = (state, action) => {
    return { ...state, loading: true };
};

const metricsReceived = (state, action) => {
    const { data } = action.data;

    return {
        ...state,
        loading: false,
        metrics: data
    };
};

const handlers = {
    [actions.FETCH_METRICS]: startLoading,
    [actions.METRICS_RECEIVED]: metricsReceived,
};

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};
