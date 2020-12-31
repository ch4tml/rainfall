interface StationState {
  station?: Array<string>;
}

const initialState: StationState = {
  station: [],
};

const stationReducer = (
  state: StationState = initialState,
  action: string
): StationState => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default stationReducer;
