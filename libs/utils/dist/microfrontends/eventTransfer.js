var t=function(t){var a=t.data,e=t.name,n=t.debug,c="object"==typeof e?"".concat(e.mfName,"-").concat(e.tag?"".concat(e.tag,"-"):"").concat(e.eventName):e,o=new CustomEvent(c,{detail:{data:a}});dispatchEvent(o),n&&console.log("Event type:",c,"\nevent.detail.data: ",a)};export{t as eventTransfer};