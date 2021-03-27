// import createSagaMiddleware from "redux-saga";
// import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
// import {InferActionsTypes} from "./store";
// import {SagaIterator} from '@redux-saga/core';
// import {App} from "../feature/App";
//
// export const sagaMiddleware = createSagaMiddleware();
//
//
// type SagaCreatorPayloadType = {
//     action: InferActionsTypes<any>,
//     status?: number
//     apiMethod: (param?: any) => any
// }
//
// export function* SagaCreator( payload: SagaCreatorPayloadType) {
//     console.log(payload)
//     const status = payload.status ? payload.status : 200
//     yield put(App.Actions.setAppStatus({status: "loading"}));
//     try {
//         // @ts-ignore
//         const response = yield call(payload.apiMethod);
//         if (response.status === status) {
//             yield put(App.Actions.setAppStatus({status: "loading"}));
//             console.log(response.data)
//         } else {
//             yield put(App.Actions.setAppStatus({status: "failed"}));
//         }
//     } catch (e) {
//         yield put(App.Actions.setAppStatus({status: "failed"}));
//     }
// }
//
// export const 9=(payload:SagaCreatorPayloadType)=> function* () {
//     yield all([takeLatest(payload, SagaCreator)]);
// };
//
//
// export const rootSaga = function* root() {
//     yield all([fork(searchSagas)]);
// };
export const _saga=null