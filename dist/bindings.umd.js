!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("yjs"),require("recursive-diff")):"function"==typeof define&&define.amd?define(["exports","yjs","recursive-diff"],t):t((e||self).reduxYjsBindings={},e.yjs,e.recursiveDiff)}(this,function(e,t,n){var r,i="YJS_INCOMING_CHANGES",o=function(e){return"[object Object]"===Object.prototype.toString.call(e)},a=function(e){return Array.isArray(e)},f=function(e){return"string"==typeof e||e instanceof String},c=function(e){return Number.isInteger(e)},s=function e(n){if(a(n)){var r=new t.Array,i=n.map(function(t){return e(t)});return r.push(i),r}if(o(n)){var f=new t.Map;return Object.entries(n).forEach(function(t){f.set(t[0],e(t[1]))}),f}return n};!function(e){e.Add="add",e.Update="update",e.Delete="delete"}(r||(r={}));var u=function e(n,i,o,a){if(0===o.length)throw new Error("Cannot traverse 0 length path.");if(1===o.length)!function(e,n,i,o){if(n===r.Add||n===r.Update){var a=s(o);if(e instanceof t.Array&&c(i))n===r.Update&&e.delete(i),e.insert(i,[a]);else{if(!(e instanceof t.Map&&f(i)))throw new Error("Unsupported YAbstractType or property type did not match.");e.set(i,a)}}else if(n===r.Delete)if(e instanceof t.Array&&c(i)){var u=(p=e.length-1,(d=i)<0?0:d>p?p:d);e.delete(u)}else{if(!(e instanceof t.Map&&f(i)))throw new Error("Unsupported YAbstractType or property type did not match.");e.delete(i)}var d,p}(n,i,o[0],a);else{var u=o[0],d=o.slice(1);if(n instanceof t.Array){if(!c(u))throw new Error("States diverged.");var p=n.get(u);if(!(p instanceof t.Map||p instanceof t.Array))throw new Error("States diverged.");e(p,i,d,a)}else if(n instanceof t.Map){if(!f(u))throw new Error("States diverged.");var l=n.get(u);if(!(l instanceof t.Map||l instanceof t.Array))throw new Error("States diverged.");e(l,i,d,a)}else console.warn("Encountered unsupported yType. Received:",n)}},d=function(e,t,r,i){n.getDiff(r,i).forEach(function(n){var r=n.val;u(e,n.op,[t].concat(n.path||[]),r)})},p="__ReduxYjsBindingsRootMap";e.ROOT_MAP_NAME=p,e.SET_STATE_FROM_YJS_ACTION=i,e.bind=function(e,n,r){var f=e.getMap(p),c=n.getState()[r];o(c)&&t.transact(e,function(){f.set(r,s({})),d(f,r,{},c)}),a(c)&&t.transact(e,function(){f.set(r,s([])),d(f,r,[],c)});var u=!1,l=!1,y=n.getState()[r];n.subscribe(function(){var i=y;y=n.getState()[r],l||(u=!0,t.transact(e,function(){d(f,r,i,y)}),u=!1)}),f.observeDeep(function(){u||(l=!0,function(e,t,n){var r;e.dispatch((r=t.toJSON()[n],{type:i,payload:r}))}(n,f,r),l=!1)})},e.enhanceReducer=function(e){return function(t,n){return(null==n?void 0:n.type)===i?void 0===n.payload?t:n.payload:e(t,n)}}});
//# sourceMappingURL=bindings.umd.js.map
