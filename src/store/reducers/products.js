

const initialState = {
    dataPizza: [],
    dataBeverage: [],
    dataSidedish: [],
    dataDessert: [],
    loading: false
};

const productsReducer = (state = initialState , action) => {
    switch(action.type){
        default: return state;
    }
};

export default productsReducer;