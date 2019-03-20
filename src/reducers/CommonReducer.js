const initialState = null;

class CRUDReducer {
    constructor(name, types){
        this.name = name;
        this.type = types;
    }
    checkState = (state, action, type) => {
        switch (action.type) {
            case type:
                debugger
                if (action.payload.status === 200) {
                    return action.payload.data.data;
                }
                return {
                   ...state
                }
            default:
                return state;
        }
    }
    addReducer = (state = initialState, action) => {
        return this.checkState(state, action, this.type[0])
    }
    listReducer = (state = initialState, action) => {
        return this.checkState(state, action, this.type[1])
    }
    updateReducer = (state = initialState, action) => {
        return this.checkState(state, action, this.type[2])
    }
    deleteReducer = (state = initialState, action) => {
        return this.checkState(state, action, this.type[3])
    }
}

export default CRUDReducer;