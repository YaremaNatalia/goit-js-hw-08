function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,a,i,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function S(e){return c=e,f=setTimeout(j,t),l?b(e):i}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=a}function j(){var e=g();if(h(e))return T(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,a-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?b(e):(r=o=void 0,i)}function w(){var e=g(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),i}return t=y(t)||0,p(n)&&(l=!!n.leading,a=(s="maxWait"in n)?m(y(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?i:T(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};var b={form:document.querySelector(".feedback-form"),email:document.querySelector('input[name="email"]'),message:document.querySelector('textarea[name="message"]')};const S=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Помилка під час збереження даних в localStorage: ",e.message)}},h=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Помилка під час отримання даних з localStorage: ",e.message)}};let j=h("feedback-form-state")||{};b.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,S("feedback-form-state",j)}),1e3)),b.form.addEventListener("submit",(function(e){""!==b.email.value&""!==b.message.value?(e.preventDefault(),e.currentTarget.reset(),console.log(h("feedback-form-state")),localStorage.removeItem("feedback-form-state"),j={}):alert("Заповніть, будь ласка, всі поля")})),function(){const e=h("feedback-form-state");e&&(b.email.value=e.email||"",b.message.value=e.message||"")}();
//# sourceMappingURL=03-feedback.6531c688.js.map
