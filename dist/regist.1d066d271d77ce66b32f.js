!function(e){function t(t){for(var r,u,a=t[0],i=t[1],c=t[2],p=0,f=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);f.length;)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={4:0},l=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var s=i;l.push([15,0]),n()}({15:function(e,t,n){(function(e){console.log("Regist has attached");var t=document.querySelectorAll('input[type="password"]');e(t).on("click",(function(){e("#spnPasswHelp").html("Пароль допускает строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 знаков."),e("#spnPasswHelp").removeClass("text-info")})),document.getElementById("btn1").addEventListener("click",(function(){t.item(0).value!==t.item(1).value&&(e("#spnPasswHelp").html("Пароли не совпадают."),e("#spnPasswHelp").addClass("text-info"),t.forEach((function(e){e.value=""})),t.item(0).focus())}))}).call(this,n(0))}});
//# sourceMappingURL=regist.1d066d271d77ce66b32f.js.map