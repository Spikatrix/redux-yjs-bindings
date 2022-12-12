import { Doc as YDoc } from 'yjs';
import { Reducer, Store } from 'redux';
export { SET_STATE_FROM_YJS_ACTION } from './patchRedux';
/** @desc This is the name of the yMap that is used on the yDoc that passed to the setup function. Can be used to persist the values on a server. */
export declare const ROOT_MAP_NAME = "__ReduxYjsBindingsRootMap";
/**
 * @desc Initialises the bindings and registers listeners on yjs and teh redux store.
 * @param yDoc The y-document that is used to sync with other peers.
 * @param store The redux store containing the values that should be synced.
 * @param sliceName The name of the redux-subtree (slice) that contains the values.
 * */
export declare const bind: <S extends { [P in keyof S]: S[P]; }, K extends keyof S & string>(yDoc: YDoc, store: Store<S, import("redux").AnyAction>, sliceName: K) => () => void;
/** @desc This is a utility function to enhance an existing reducer to react to the actions dispatched that are meant to set the state of the redux slice on incoming changes from yjs. */
export declare const enhanceReducer: <S>(currentReducer: Reducer<S, import("redux").AnyAction>) => Reducer<S, import("redux").AnyAction>;
