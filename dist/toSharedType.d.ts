import { Map as YMap, Array as YArray } from 'yjs';
/** @desc Recursively transforms arrays and maps into their respective Yjs class. */
export declare const toSharedType: <Value = unknown>(val: Value) => YMap<unknown> | Value | YArray<unknown>;
