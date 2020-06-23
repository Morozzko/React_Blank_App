import SimpleReducer, {
    InitialStateType, ActionsType
} from './simple-reducer'

const state: InitialStateType = {
    isFetching: true
}

test("ADD_TASK should add task", () => {
    const action: ActionsType = {
        type: "IS-FETCHING",
        isFetching: false
    }
    const endState = SimpleReducer(state, action)
    expect(endState).toStrictEqual({
            isFetching: false
        }
    )
})