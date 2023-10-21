import{__awaiter as t,__generator as e}from"../node_modules/tslib/tslib.es6.mjs.js";import{openDB as r}from"../node_modules/idb/build/index.js";var n=function(){function n(t){this.database=t}return n.prototype.createObjectStore=function(n,o){return void 0===o&&(o=1),t(this,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),t=this,[4,r(this.database,o,{upgrade:function(t){for(var e=0,r=n;e<r.length;e++){var o=r[e];t.objectStoreNames.contains(o)||t.createObjectStore(o,{autoIncrement:!0,keyPath:"id"})}}})];case 1:return t.db=e.sent(),[2,!0];case 2:return a=e.sent(),console.error("Failed to create object store: ".concat(a)),[2,!1];case 3:return[2]}}))}))},n.prototype.getValue=function(r,n){return t(this,void 0,void 0,(function(){var t,o;return e(this,(function(e){switch(e.label){case 0:if(e.trys.push([0,2,,3]),!this.db)throw new Error("Database is not initialized. Call createObjectStore() first");return t=this.db.transaction(r,"readonly"),[4,t.objectStore(r).get(n)];case 1:return[2,e.sent()];case 2:throw o=e.sent(),console.error("Failed to get value: ".concat(o)),o;case 3:return[2]}}))}))},n.prototype.getAllValue=function(r){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:if(e.trys.push([0,2,,3]),!this.db)throw new Error("Database is not initialized. Call createObjectStore() first");return t=this.db.transaction(r,"readonly"),[4,t.objectStore(r).getAll()];case 1:return[2,e.sent()];case 2:throw n=e.sent(),console.error("Failed to get all values: ".concat(n)),n;case 3:return[2]}}))}))},n.prototype.putValue=function(r,n){return t(this,void 0,void 0,(function(){var t,o;return e(this,(function(e){switch(e.label){case 0:if(e.trys.push([0,2,,3]),!this.db)throw new Error("Database is not initialized. Call createObjectStore() first");return t=this.db.transaction(r,"readwrite"),[4,t.objectStore(r).put(n)];case 1:return[2,e.sent()];case 2:throw o=e.sent(),console.error("Failed to put value: ".concat(o)),o;case 3:return[2]}}))}))},n.prototype.putBulkValue=function(r,n){return t(this,void 0,void 0,(function(){var t,o,a,s,i,c;return e(this,(function(e){switch(e.label){case 0:if(e.trys.push([0,5,,6]),!this.db)throw new Error("Database is not initialized. Call createObjectStore() first");t=this.db.transaction(r,"readwrite"),o=t.objectStore(r),a=0,s=n,e.label=1;case 1:return a<s.length?(i=s[a],[4,o.put(i)]):[3,4];case 2:e.sent(),e.label=3;case 3:return a++,[3,1];case 4:return[2,this.getAllValue(r)];case 5:throw c=e.sent(),console.error("Failed to put bulk values: ".concat(c)),c;case 6:return[2]}}))}))},n.prototype.deleteValue=function(r,n){return t(this,void 0,void 0,(function(){var t,o,a;return e(this,(function(e){switch(e.label){case 0:if(e.trys.push([0,3,,4]),!this.db)throw new Error("Database is not initialized. Call createObjectStore() first");return t=this.db.transaction(r,"readwrite"),[4,(o=t.objectStore(r)).get(n)];case 1:if(!e.sent())throw new Error("Id not found: ".concat(n));return[4,o.delete(n)];case 2:return e.sent(),[2,n];case 3:throw a=e.sent(),console.error("Failed to delete value: ".concat(a)),a;case 4:return[2]}}))}))},n}();export{n as IndexedDB};
