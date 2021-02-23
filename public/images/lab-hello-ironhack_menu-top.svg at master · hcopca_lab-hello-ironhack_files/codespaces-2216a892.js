System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(){"use strict";var t,e,o,s,r,a,i,n,c,d;return{setters:[function(i){t=i.r,e=i.a,o=i._,s=i.t,r=i.c,a=i.o},function(t){i=t.r,n=t.aB,c=t.aC,d=t.p}],execute:function(){t(".js-new-codespace-form",(async function(t,e){const o=t.closest("[data-replace-remote-form-target]"),s=o.querySelector(".js-new-codespace-submit-button");s instanceof HTMLInputElement&&(s.disabled=!0),t.classList.remove("is-error"),t.classList.add("is-loading");try{const t=await e.html();o.replaceWith(t.html)}catch(r){t.classList.remove("is-loading"),t.classList.add("is-error")}}));let l=null;function h(t){if(l=t,null!==t){document.querySelector(".js-codespace-loading-steps").setAttribute("data-current-state",l)}}e(".js-codespace-loading-steps",{constructor:HTMLElement,add:t=>{const e=t.getAttribute("data-current-state");e&&h(e)}}),e(".js-codespace-advance-state",{constructor:HTMLElement,add:t=>{const e=t.getAttribute("data-state");e&&h(e)}});let u=null;function p(t){const e=document.querySelector(".js-workbench-form-container form");e&&t?(!function(t,e){const o=t.querySelector(".js-cascade-token");o&&o.setAttribute("value",e)}(e,t),function(t,e){const o=t.querySelector(".js-partner-info");if(o){let t=o.getAttribute("value");t&&(t=t.replace("%CASCADE_TOKEN_PLACEHOLDER%",e),o.setAttribute("value",t))}}(e,t),i(e)):h("failed")}e(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:i}),e(".js-workbench-form-container",{constructor:HTMLElement,add:e=>{const o=e.querySelector(".js-cascade-token");!function(e,o){if(""!==o.value){const t=e.querySelector("form");i(t)}else{!function(e){t(".js-fetch-cascade-token",(async function(t,e){try{const t=(await e.json()).json;u=t.token}catch(o){}})),i(e)}(document.querySelector(".js-fetch-cascade-token")),function(t,e,o){if(document.querySelector(t)){const t=Date.now(),s=setInterval((()=>{const r=Date.now()-t;if(u||r>=o)return clearInterval(s),void e(u||void 0)}),50)}}(".js-workbench-form-container",p,1e4)}}(e,o)}});let m=class NewCodespaceElement extends HTMLElement{async connectedCallback(){if(this.createCodespaceForm){const t=await n(this.createCodespaceForm,!this.vscsLocationList);this.updatePickableLocations(t)}}async updatePickableLocations(t){if(!t){const e=this.createCodespaceForm.getAttribute("data-codespace-locations-url");if(!e)return;t=await c(e)}const e=t.available;if(this.vscsLocationList){const o=this.vscsLocationList.querySelectorAll(".SelectMenu-item");for(const t of o)e.includes(t.getAttribute("data-location"))?t.removeAttribute("hidden"):t.setAttribute("hidden","hidden");const s=this.createCodespaceForm.querySelector('[name="codespace[location]"]');if(s&&!e.includes(s.value)){s.value=t.current,this.vscsLocationSummary.textContent=this.vscsLocationSummary.getAttribute("data-blank-title");for(const t of o)t.setAttribute("aria-checked","false")}}}vscsTargetUrlUpdated(t){const e=t.currentTarget;this.vscsTargetUrl.value=e.value}};function f(t){const e=t.querySelectorAll(".js-toggle-hidden");for(const s of e)s.hidden=!s.hidden;const o=t.querySelectorAll(".js-toggle-disabled");for(const s of o)s.getAttribute("aria-disabled")?s.removeAttribute("aria-disabled"):s.setAttribute("aria-disabled","true")}o([s],m.prototype,"form",void 0),o([s],m.prototype,"createCodespaceForm",void 0),o([s],m.prototype,"vscsTargetUrl",void 0),o([s],m.prototype,"vscsLocationList",void 0),o([s],m.prototype,"vscsLocationSummary",void 0),m=o([r],m),a("submit",".js-toggle-hidden-codespace-form",(function(t){f(t.currentTarget)})),a("click",".js-create-codespace-with-sku-button",(async function(t){const e=t.currentTarget.closest("[data-target='new-codespace.createCodespaceForm']");await n(e),f(e),e.submit()})),a("submit","form.js-codespaces-delete-form",(async function(t){t.preventDefault();const e=t.currentTarget;try{const t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(t.ok){const o=d(document,await t.text());(function(t){return t.closest("[data-replace-remote-form-target]")})(e).replaceWith(o)}else{if(401!==t.status)throw new Error("Unexpected response: "+t.statusText);e.submit()}}finally{f(e)}})),a("submit","form.js-open-in-vscode-form",(async function(t){t.preventDefault();const e=t.currentTarget,o=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(o.ok){const t=await o.json();window.location.href=t.codespace_url}else if(422===o.status){const t=await o.json(),s=e.querySelector(".open-in-vscode-error");s&&(s.insertAdjacentHTML("afterbegin",t.error),s.hidden=!1)}}));let v=class EditorSelectElement extends HTMLElement{async createCodespace(t){const e=t.currentTarget;t.preventDefault(),await n(e);let o=null;const s=new FormData(e);if("true"===s.get("open_in_vscode"))try{if(o=await fetch(e.action,{method:e.method,body:s,headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}}),o.ok){const t=await o.json();"true"===s.get("open_in_vscode")&&this.showPostLaunch(),window.location.href=t.codespace_url}else if(401===o.status)e.submit();else if(422===o.status){const t=await o.json();this.showCreateError(t.error)}else this.showCreateError()}catch(r){return}finally{this.button.hidden=!1,this.disabledButton.hidden=!0,this.checkbox.hidden=!1}else e.submit()}hideCheckbox(){this.checkbox.hidden=!0}showPostLaunch(){this.form.hidden=!0,this.postLaunch.hidden=!1,this.createError.hidden=!0,f(this.form)}showCreateError(t){this.form.hidden=!0,this.postLaunch.hidden=!0,this.createError.hidden=!1,t?(this.createErrorMessage.textContent=t,this.createErrorMessage.hidden=!1,this.defaultCreateErrorMessage.hidden=!0):(this.createErrorMessage.hidden=!0,this.defaultCreateErrorMessage.hidden=!1)}};o([s],v.prototype,"form",void 0),o([s],v.prototype,"postLaunch",void 0),o([s],v.prototype,"createError",void 0),o([s],v.prototype,"createErrorMessage",void 0),o([s],v.prototype,"defaultCreateErrorMessage",void 0),o([s],v.prototype,"button",void 0),o([s],v.prototype,"disabledButton",void 0),o([s],v.prototype,"checkbox",void 0),v=o([r],v);let y=class ExportBranchElement extends HTMLElement{constructor(){super(...arguments),this.abortPoll=null}connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){var t;null===(t=this.abortPoll)||void 0===t||t.abort()}async exportBranch(t){t.preventDefault();(await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}})).ok&&(this.form.hidden=!0,this.loadingIndicator.hidden=!1,this.startPoll())}async startPoll(){const t=this.getAttribute("data-exported-codespace-url")||"",e=await this.poll(t);if(e)if(e.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{const t=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=t}}async poll(t,e=1e3){var o,s;if(null===(o=this.abortPoll)||void 0===o?void 0:o.signal.aborted)return;const r=await fetch(t,{signal:null===(s=this.abortPoll)||void 0===s?void 0:s.signal});return 202===r.status?(await new Promise((t=>setTimeout(t,e))),this.poll(t,1.5*e)):r}};o([s],y.prototype,"form",void 0),o([s],y.prototype,"loadingIndicator",void 0),o([s],y.prototype,"viewBranchLink",void 0),y=o([r],y);let b=class OptionsPopoverElement extends HTMLElement{reset(t){for(t.preventDefault(),this.dropdownDetails.hidden=!1,this.modalDetails.hidden=!0,this.skuForm.hidden=!1;this.resultMessage.firstChild;)this.resultMessage.removeChild(this.resultMessage.firstChild);this.resultMessage.hidden=!0,this.errorMessage.hidden=!0}showSettingsModal(){this.dropdownDetails.hidden=!0,this.modalDetails.open=!0,this.modalDetails.hidden=!1}async updateSku(){f(this.skuForm);try{const t=await fetch(this.skuForm.action,{method:this.skuForm.method,body:new FormData(this.skuForm),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(t.ok){const e=d(document,await t.text());this.resultMessage.appendChild(e),this.skuForm.hidden=!0,this.resultMessage.hidden=!1}else this.errorMessage.hidden=!1,this.skuForm.hidden=!0}finally{f(this.skuForm)}}};o([s],b.prototype,"dropdownDetails",void 0),o([s],b.prototype,"dropdownMenu",void 0),o([s],b.prototype,"modalDetails",void 0),o([s],b.prototype,"settingsModal",void 0),o([s],b.prototype,"skuForm",void 0),o([s],b.prototype,"resultMessage",void 0),o([s],b.prototype,"errorMessage",void 0),b=o([r],b)}}}));
//# sourceMappingURL=codespaces-cbda1af2.js.map
