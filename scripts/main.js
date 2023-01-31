"use strict";function _instanceof(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}function _classCallCheck(e,t){if(!_instanceof(e,t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _classPrivateFieldGet(e,t){var o=t.get(e);if(!o)throw new TypeError("attempted to get private field on non-instance");return o.get?o.get.call(e):o.value}var _codes=new WeakMap,Set=function(){function e(){_classCallCheck(this,e),_codes.set(this,{writable:!0,value:{waves:'<div class="getSVG-parent-top"><svg data-SVG="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none"><path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="SVGcolor"></path></svg></div>',curve:'<div class="getSVG-parent-top"><svg data-SVG="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none"><path  d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="SVGcolor"></path></svg></div>',triangle:'<div class="getSVG-parent-top"><svg data-SVG="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none"><path  d="M1200 0L0 0 598.97 114.72 1200 0z" class="SVGcolor"></path></svg></div>',tilt:'<div class="getSVG-parent-top"><svg data-SVG="Layer 1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path  d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="SVGcolor"></path></svg></div>',arrow:'<div class="getSVG-parent-top"><svg data-SVG="Layer 1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path  d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="SVGcolor"></path></svg></div>'}})}return _createClass(e,[{key:"changeShapes",value:function(e,t){var o;switch(e.value){case"waves":o=_classPrivateFieldGet(this,_codes).waves;break;case"curve":o=_classPrivateFieldGet(this,_codes).curve;break;case"triangle":o=_classPrivateFieldGet(this,_codes).triangle;break;case"tilt":o=_classPrivateFieldGet(this,_codes).tilt;break;case"arrow":o=_classPrivateFieldGet(this,_codes).arrow}t.innerHTML="",t.innerHTML=o}}]),e}(),Change=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"reset",value:function(e,t,o,n,a){e.value="#FE36AA",e.focus(),t.checked=!1,o.checked=!1,n.style.width="15px",a.style.width="100px"}},{key:"changeColor",value:function(e,t){var o=e.value;t.style.fill=o}},{key:"changePosition",value:function(e,t,o){o?e.checked?t.style.transform=" rotateY(180deg) rotateZ(180deg)":t.style.transform="rotateY(180deg) rotateZ(0deg)":e.checked?t.style.transform="rotateZ(180deg)":t.style.transform="rotateZ(0deg)"}},{key:"changeInvert",value:function(e,t,o){o?e.checked?t.style.transform="rotateZ(180deg) rotateY(180deg)":t.style.transform="rotateZ(180deg) rotateZ(0deg)":e.checked?t.style.transform="rotateY(180deg)":t.style.transform="rotateZ(0deg)"}},{key:"changeWidth",value:function(e,t){var o,n=(n=e.style.width).replace("px","");400<(n=Number(n))||(o="".concat(n+100,"%"),t.style.width=o)}},{key:"changeHeight",value:function(e,t){var o,n=(n=e.style.width).replace("px","");n=Number(n),600<(n*=1.5)||(o="".concat(n,"px"),t.style.height=o)}}]),e}(),Get=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"nodeToStr",value:function(e){return"undefined"!=typeof XMLSerializer?(new XMLSerializer).serializeToString(e):e.xml?e.xml:void 0}},{key:"showModal",value:function(e){var t=new tingle.modal({footer:!0,stickyFooter:!1,closeMethods:["overlay","button","escape"],closeLabel:"Close",cssClass:["custom-class-1","custom-class-2"],beforeClose:function(){return!0},onClose:function(){t.destroy()}}),o=this.nodeToStr(e);t.setContent('<div class="modalCodes"><h3 class="spColor">Html</h3><button class="modalCopyBtn" id="copyHtml">Copy</button></div><br><textarea class="showCodes"  id="htmlCodes" disabled>'.concat(o,'</textarea><div class="modalCodes mt-4"><h3 class="spColor">Css</h3><button class="modalCopyBtn" id="copyCss">Copy</button></div><br><textarea class="showCodes" disabled id="cssCodes">').concat("\n.getSVG-parent-top {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    overflow: hidden;\n    line-height: 0;\n}\n\n.getSVG-parent-top svg {\n    position: relative;\n    display: block;\n    width: calc(100% + 1.3px);\n    height: 200px;\n}\n\n.getSVG-parent-top  .SVGcolor {\n    fill: #FFFFFF;\n}","</textarea>")),t.setFooterContent('<div class="center-align"><button class="modalDownloadBtn"><a  download="getSvg.ir.svg" href="#">download SvgFile</a></button></div>'),t.open(),document.querySelector("#copyHtml").addEventListener("click",function(){var e=document.querySelector("#htmlCodes"),t=document.querySelector("#copyHtml");get.copy(e,t)}),document.querySelector("#copyCss").addEventListener("click",function(){var e=document.querySelector("#cssCodes"),t=document.querySelector("#copyCss");get.copy(e,t)});var n=document.querySelector("#liveOutput svg");n.style.overflow="hidden";var a=this.nodeToStr(n),r=document.querySelector(".modalDownloadBtn a"),c=new Blob(["".concat(a)]);r.href=URL.createObjectURL(c)}},{key:"copy",value:function(e,t){e.disabled=!1,e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),e.disabled=!0,t.innerHTML="&#10004",setTimeout(function(){t.innerHTML="Copy"},1e3)}}]),e}(),shape=document.querySelector("#slct"),parentShape=document.querySelector("#liveOutput"),set=new Set;shape.addEventListener("change",function(){set.changeShapes(shape,parentShape),change.reset(colorPicker,changeInvert,changePosition,width,height)});var change=new Change,colorPicker=document.querySelector("#colorPickerPerson");colorPicker.addEventListener("change",function(){var e=document.querySelector("#liveOutput path");change.changeColor(colorPicker,e)});var changePosition=document.querySelector("#check2");changePosition.addEventListener("change",function(){var e=document.querySelector("#liveOutput svg");change.changePosition(changePosition,e,changeInvert.checked)});var changeInvert=document.querySelector("#check");changeInvert.addEventListener("change",function(){var e=document.querySelector("#liveOutput svg");change.changeInvert(changeInvert,e,changePosition.checked)});var width=document.querySelector("#changeWidth"),observer=new MutationObserver(function(e){var t=document.querySelector("#liveOutput svg");change.changeWidth(width,t)});observer.observe(width,{attributes:!0});var height=document.querySelector("#changeHeight"),observer2=new MutationObserver(function(e){var t=document.querySelector("#liveOutput svg");change.changeHeight(height,t)});observer2.observe(height,{attributes:!0});var get=new Get,outPutBtn=document.querySelector("#downloadIcon");outPutBtn.addEventListener("click",function(){var e=document.querySelector("#liveOutput div");get.showModal(e)});