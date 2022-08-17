import { Map as YMap } from 'yjs';
import { Store } from 'redux';
/** @desc Action type that is dispatched when yjs state changes from other peers come in. */
export declare const SET_STATE_FROM_YJS_ACTION = "YJS_INCOMING_CHANGES";
export declare const setStateAction: (newState: unknown) => {
    type: string;
    payload: unknown;
};
export declare const patchStore: (store: Store, rootMap: YMap<unknown>, sliceName: string) => void;
