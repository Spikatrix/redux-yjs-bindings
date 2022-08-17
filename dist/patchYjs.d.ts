import { Map as YMap } from 'yjs';
/**
 * @desc Takes a rootMap that holds the values at the given sliceName. Then compares the old and new state to find the difference and apply that to the slice in the rootMap.
 * @param rootMap The yMap that holds the values to all slices.
 * @param sliceName Property name that contains the values on the rootMap.
 * @param a The old value.
 * @param b The new value.
 * */
export declare const patchYjs: (rootMap: YMap<unknown>, sliceName: string, a: unknown, b: unknown) => void;
