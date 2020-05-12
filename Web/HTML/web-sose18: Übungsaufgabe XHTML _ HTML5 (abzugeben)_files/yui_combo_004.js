YUI.add("moodle-core-event",function(e,t){var n="moodle-core-event";M.core=M.core||{},M.core.event=M.core.event||{FILTER_CONTENT_UPDATED:"filter-content-updated",EDITOR_CONTENT_RESTORED:"editor-content-restored"},M.core.globalEvents=M.core.globalEvents||{FORM_ERROR:"form_error",BLOCK_CONTENT_UPDATED:"block_content_updated"};var r={emitFacade:!0,defaultFn:function(e){},preventedFn:function(e){},stoppedFn:function(e){}},i;for(i in M.core.event)M.core.event.hasOwnProperty(i)&&e.getEvent(M.core.event[i])===null&&e.publish(M.core.event[i],r);for(i in M.core.globalEvents)M.core.globalEvents.hasOwnProperty(i)&&e.Global.getEvent(M.core.globalEvents[i])===null&&e.Global.publish(M.core.globalEvents[i],e.merge(r,{broadcast:!0}))},"@VERSION@",{requires:["event-custom"]});
YUI.add("moodle-core-widget-focusafterclose",function(e,t){function r(){e.after(this._bindUIFocusAfterHide,this,"bindUI"),this.get("rendered")&&this._bindUIFocusAfterHide()}var n='input:not([type="hidden"]), a[href], button, textarea, select, [tabindex], [contenteditable="true"]';r.ATTRS={focusOnPreviousTargetAfterHide:{value:!1},focusAfterHide:{value:null,type:e.Node}},r.prototype={_uiHandlesFocusAfterHide:[],_showFocusAfterHide:null,_previousTargetFocusAfterHide:null,initializer:function(){this.get("focusOnPreviousTargetAfterHide")&&this.show&&(this._showFocusAfterHide=this.show,this.show=function(e){this._showFocusAfterHide.apply(this,arguments),this._previousTargetFocusAfterHide=null,e&&e.currentTarget&&(this._previousTargetFocusAfterHide=e.currentTarget)})},destructor:function(){(new e.EventHandle(this.uiHandleFocusAfterHide)).detach()},_bindUIFocusAfterHide:function(){(new e.EventHandle(this.uiHandleFocusAfterHide)).detach(),this.uiHandleFocusAfterHide=[this.after("visibleChange",this._afterHostVisibleChangeFocusAfterHide)]},_afterHostVisibleChangeFocusAfterHide:function(){this.get("visible")||this._attemptFocus(this._previousTargetFocusAfterHide)||this._attemptFocus(this.get("focusAfterHide"))},_attemptFocus:function(t){var r=e.one(t);if(r){r=r.ancestor(n,!0);if(r)return r.focus(),!0}return!1}};var i=e.namespace("M.core");i.WidgetFocusAfterHide=r},"@VERSION@",{requires:["base-build","widget"]});
/*
YUI 3.17.2 (build 9c3c78e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("plugin",function(e,t){function n(t){!this.hasImpl||!this.hasImpl(e.Plugin.Base)?n.superclass.constructor.apply(this,arguments):n.prototype.initializer.apply(this,arguments)}n.ATTRS={host:{writeOnce:!0}},n.NAME="plugin",n.NS="plugin",e.extend(n,e.Base,{_handles:null,initializer:function(e){this._handles=[]},destructor:function(){if(this._handles)for(var e=0,t=this._handles.length;e<t;e++)this._handles[e].detach()},doBefore:function(e,t,n){var r=this.get("host"),i;return e in r?i=this.beforeHostMethod(e,t,n):r.on&&(i=this.onHostEvent(e,t,n)),i},doAfter:function(e,t,n){var r=this.get("host"),i;return e in r?i=this.afterHostMethod(e,t,n):r.after&&(i=this.afterHostEvent(e,t,n)),i},onHostEvent:function(e,t,n){var r=this.get("host").on(e,t,n||this);return this._handles.push(r),r},onceHostEvent:function(e,t,n){var r=this.get("host").once(e,t,n||this);return this._handles.push(r),r},afterHostEvent:function(e,t,n){var r=this.get("host").after(e,t,n||this);return this._handles.push(r),r},onceAfterHostEvent:function(e,t,n){var r=this.get("host").onceAfter(e,t,n||this);return this._handles.push(r),r},beforeHostMethod:function(t,n,r){var i=e.Do.before(n,this.get("host"),t,r||this);return this._handles.push(i),i},afterHostMethod:function(t,n,r){var i=e.Do.after(n,this.get("host"),t,r||this);return this._handles.push(i),i},toString:function(){return this.constructor.NAME+"["+this.constructor.NS+"]"}}),e.namespace("Plugin").Base=n},"3.17.2",{requires:["base-base"]});
YUI.add("moodle-core-lockscroll",function(e,t){e.namespace("M.core").LockScroll=e.Base.create("lockScroll",e.Plugin.Base,[],{_enabled:!1,destructor:function(){this.disableScrollLock()},enableScrollLock:function(t){if(this.isActive())return;if(!this.shouldLockScroll(t))return;this._enabled=!0;var n=e.one(e.config.doc.body),r=n.getComputedStyle("width");n.addClass("lockscroll");var i=parseInt(n.getAttribute("data-activeScrollLocks"),10)||0,s=i+1;return n.setAttribute("data-activeScrollLocks",s),i===0&&n.setStyle("maxWidth",r),this},shouldLockScroll:function(t){var n=this.get("host").get("boundingBox").get("region").height,r=e.config.win.innerHeight||e.config.doc.documentElement.clientHeight||0;return!t&&n>r-10?!1:!0},updateScrollLock:function(e){return this.shouldLockScroll(e)?this.enableScrollLock(e):this.disableScrollLock(!0),this},disableScrollLock:function(t){if(this.isActive()){this._enabled=!1;var n=e.one(e.config.doc.body),r=parseInt(n.getAttribute("data-activeScrollLocks"),10)||1,i=r-1;if(t||r===1)n.removeClass("lockscroll"),n.setStyle("maxWidth",null);n.setAttribute("data-activeScrollLocks",r-1)}return this},isActive:function(){return this._enabled}},{NS:"lockScroll",ATTRS:{}})},"@VERSION@",{requires:["plugin","base-build"]});
YUI.add("moodle-core-notification-dialogue",function(e,t){var n,r,i,s,o,u,a;n="moodle-dialogue",r="notificationBase",i="yesLabel",s="noLabel",o="title",u="question",a={BASE:"moodle-dialogue-base",WRAP:"moodle-dialogue-wrap",HEADER:"moodle-dialogue-hd",BODY:"moodle-dialogue-bd",CONTENT:"moodle-dialogue-content",FOOTER:"moodle-dialogue-ft",HIDDEN:"hidden",LIGHTBOX:"moodle-dialogue-lightbox"},M.core=M.core||{};var f="Moodle dialogue",l,c=n+"-fullscreen",h=n+"-hidden",p=" [role=dialog]",d="[role=menubar]",v=".",m="moodle-has-zindex",g='input:not([type="hidden"]), a[href], button, textarea, select, [tabindex]';l=function(t){var n="moodle-dialogue-"+e.stamp(this);t.notificationBase=e.Node.create('<div class="'+a.BASE+'">').append(e.Node.create('<div id="'+n+'" role="dialog" '+'aria-labelledby="'+n+'-header-text" class="'+a.WRAP+'"></div>').append(e.Node.create('<div id="'+n+'-header-text" class="'+a.HEADER+' yui3-widget-hd"></div>')).append(e.Node.create('<div class="'+a.BODY+' yui3-widget-bd"></div>')).append(e.Node.create('<div class="'+a.FOOTER+' yui3-widget-ft"></div>'))),e.one(document.body).append(t.notificationBase),t.srcNode="#"+n,delete t.buttons,l.superclass.constructor.apply(this,[t])},e.extend(l,e.Panel,{_resizeevent:null,_orientationevent:null,_calculatedzindex:!1,_originalPosition:null,_hiddenSiblings:null,initializer:function(){var t;this.get("closeButton")!==!1&&this.get("buttons").header[0].setAttribute("title",this.get("closeButtonTitle")),this._hiddenSiblings=[],this.get("render")&&this.render(),this.after("visibleChange",this.visibilityChanged,this),this.get("center")&&this.centerDialogue(),this.get("modal")&&(this.get(r).set("aria-hidden","true"),this.plug(e.M.core.LockScroll)),t=this.get("boundingBox"),t.addClass(m),e.Array.each(this.get("extraClasses"),t.addClass,t),this.get("visible")&&this.applyZIndex(),this.on("maskShow",this.applyZIndex),this.on("maskShow",function(){var t=e.one(e.config.win),n=this.get("boundingBox");this.get("center")||(this._originalPosition=n.getXY()),n.getStyle("position")!=="fixed"&&n.setStyles({top:t.get("scrollTop"),left:t.get("scrollLeft")})},this);var n=this.get("notificationBase"),i=this.get("additionalBaseClass");i!==""&&n.addClass(i),this.after("destroyedChange",function(){this.get(r).remove(!0)},this)},applyZIndex:function(){var t=1,n=1,r=this.get("boundingBox"),i=this.get("maskNode"),s=this.get("zIndex");s!==0&&!this._calculatedzindex?r.setStyle("zIndex",s):(e.all(p+", "+d+", "+v+m).each(function(e){var n=this.findZIndex(e);n>t&&(t=n)},this),n=(t+1).toString(),r.setStyle("zIndex",n),this.set("zIndex",n),this.get("modal")&&(i.setStyle("zIndex",n),e.UA.ie&&e.UA.compareVersions(e.UA.ie,9)<0&&setTimeout(function(){i.setStyle("position","static"),setTimeout(function(){i.setStyle("position","fixed")},0)},0)),this._calculatedzindex=!0)},findZIndex:function(e){var t=e.getStyle("zIndex")||e.ancestor().getStyle("zIndex");return t?parseInt(t,10):0},visibilityChanged:function(t){var n,r;t.attrName==="visible"&&(this.get("maskNode").addClass(a.LIGHTBOX),t.prevVal&&!t.newVal&&(r=this.get("boundingBox"),this._resizeevent&&(this._resizeevent.detach(),this._resizeevent=null),this._orientationevent&&(this._orientationevent.detach(),this._orientationevent=null),r.detach("key",this.keyDelegation),this.get("modal")&&this.setAccessibilityHidden()),!t.prevVal&&t.newVal&&(this.applyZIndex(),this.makeResponsive(),this.shouldResizeFullscreen()||this.get("draggable")&&(n="#"+this.get("id")+" ."+a.HEADER,this.plug(e.Plugin.Drag,{handles:[n]}),e.one(n).setStyle("cursor","move")),this.keyDelegation(),this.get("modal")&&this.setAccessibilityVisible()),this.get("center")&&!t.prevVal&&t.newVal&&this.centerDialogue())},makeResponsive:function(){var e=this.get("boundingBox");this.shouldResizeFullscreen()?(e.addClass(c),e.setStyles({left:null,top:null,width:null,height:null,right:null,bottom:null})):this.get("responsive")&&e.removeClass(c).setStyles({width:this.get("width"),height:this.get("height")}),this.lockScroll&&this.lockScroll.updateScrollLock(this.shouldResizeFullscreen())},centerDialogue:function(){var t=this.get("boundingBox"),n=t.hasClass(h),r,i;if(this.shouldResizeFullscreen())return;n&&t.setStyle("top","-1000px").removeClass(h),r=Math.max(Math.round((t.get("winWidth")-t.get("offsetWidth"))/2),15),i=Math.max(Math.round((t.get("winHeight")-t.get("offsetHeight"))/2),15)+e.one(window).get("scrollTop"),t.setStyles({left:r,top:i}),n&&t.addClass(h),this.makeResponsive()},shouldResizeFullscreen:function(){return window===window.parent&&this.get("responsive")&&Math.floor(e.one(document.body).get("winWidth"))<this.get("responsiveWidth")},show:function(){var e=null,t=this.headerNode,n=this.bodyNode,r=this.get("focusOnShowSelector"),i=null;return e=l.superclass.show.call(this),!this.get("center")&&this._originalPosition&&this.get("boundingBox").setXY(this._originalPosition),r!==null&&(i=this.get("boundingBox").one(r)),i||(t&&t!==""?i=t:n&&n!==""&&(i=n)),i&&i.focus(),e},hide:function(e){if(e&&e.type==="key"&&e.keyCode===27&&!this.get("focused"))return;return this.lockScroll&&this.lockScroll.disableScrollLock(),l.superclass.hide.call(this,arguments)},keyDelegation:function(){var e=this.get("boundingBox");e.delegate("key",function(e){var t=e.target,n="forward";e.shiftKey&&(n="backward"),this.trapFocus(t,n)&&e.preventDefault()},"down:9",g,this)},trapFocus:function(e,t){var n=this.get("boundingBox"),r=n.one(g),i=n.all(g).pop();if(e===i&&t==="forward")return r.focus();if(e===r&&t==="backward")return i.focus()},setAccessibilityVisible:function(){var t=this.get(r);e.one(document.body).get("children").each(function(e){if(e!==t){var n=e.get("aria-hidden");n!=="true"&&(e.setData("previous-aria-hidden",n),this._hiddenSiblings.push(e),e.set("aria-hidden","true"))}},this),t.set("aria-hidden","false")},setAccessibilityHidden:function(){var t=this.get(r);t.set("aria-hidden","true"),e.Array.each(this._hiddenSiblings,function(e){var t=e.getData("previous-aria-hidden");t===null?e.removeAttribute
("aria-hidden"):e.set("aria-hidden",t)}),this._hiddenSiblings=[]}},{NAME:f,CSS_PREFIX:n,ATTRS:{additionalBaseClass:{value:""},notificationBase:{},lightbox:{lazyAdd:!1,setter:function(e){this.set("modal",e)}},closeButton:{validator:e.Lang.isBoolean,value:!0},closeButtonTitle:{validator:e.Lang.isString,value:M.util.get_string("closebuttontitle","moodle")},center:{validator:e.Lang.isBoolean,value:!0},draggable:{validator:e.Lang.isBoolean,value:!1},COUNT:{writeOnce:!0,valueFn:function(){return e.stamp(this)}},responsive:{validator:e.Lang.isBoolean,value:!0},responsiveWidth:{value:768},focusOnShowSelector:{value:null}}}),e.Base.modifyAttrs(l,{width:{value:"400px",setter:function(e){return e==="auto"?"":e}},visible:{value:!1},centered:{setter:function(e){return e&&this.set("center",!0),!1}},render:{value:!0,writeOnce:!0},extraClasses:{value:[]},id:{writeOnce:!0,valueFn:function(){var t="moodle-dialogue-"+e.stamp(this);return t}},buttons:{getter:e.WidgetButtons.prototype._getButtons,setter:e.WidgetButtons.prototype._setButtons,valueFn:function(){return this.get("closeButton")===!1?null:[{section:e.WidgetStdMod.HEADER,classNames:"closebutton",action:function(){this.hide()}}]}}}),e.Base.mix(l,[e.M.core.WidgetFocusAfterHide]),M.core.dialogue=l;var y=function(){y.superclass.constructor.apply(this,arguments)};e.extend(y,M.core.dialogue,{initializer:function(){this.show()}},{NAME:"Moodle information dialogue",CSS_PREFIX:n}),e.Base.modifyAttrs(y,{modal:{validator:e.Lang.isBoolean,value:!0}}),M.core.notification=M.core.notification||{},M.core.notification.info=y},"@VERSION@",{requires:["base","node","panel","escape","event-key","dd-plugin","moodle-core-widget-focusafterclose","moodle-core-lockscroll"]});
YUI.add("moodle-core-notification-alert",function(e,t){var n,r,i,s,o,u,a;n="moodle-dialogue",r="notificationBase",i="yesLabel",s="noLabel",o="title",u="question",a={BASE:"moodle-dialogue-base",WRAP:"moodle-dialogue-wrap",HEADER:"moodle-dialogue-hd",BODY:"moodle-dialogue-bd",CONTENT:"moodle-dialogue-content",FOOTER:"moodle-dialogue-ft",HIDDEN:"hidden",LIGHTBOX:"moodle-dialogue-lightbox"},M.core=M.core||{};var f="Moodle alert",l;l=function(e){e.closeButton=!1,l.superclass.constructor.apply(this,[e])},e.extend(l,M.core.notification.info,{_closeEvents:null,initializer:function(){this._closeEvents=[],this.publish("complete");var t=e.Node.create('<input type="button" class="btn btn-primary" id="id_yuialertconfirm-'+this.get("COUNT")+'"'+'value="'+this.get(i)+'" />'),n=e.Node.create('<div class="confirmation-dialogue"></div>').append(e.Node.create('<div class="confirmation-message">'+this.get("message")+"</div>")).append(e.Node.create('<div class="confirmation-buttons text-xs-right"></div>').append(t));this.get(r).addClass("moodle-dialogue-confirm"),this.setStdModContent(e.WidgetStdMod.BODY,n,e.WidgetStdMod.REPLACE),this.setStdModContent(e.WidgetStdMod.HEADER,'<h1 id="moodle-dialogue-'+this.get("COUNT")+'-header-text">'+this.get(o)+"</h1>",e.WidgetStdMod.REPLACE),this._closeEvents.push(e.on("key",this.submit,window,"down:13",this),t.on("click",this.submit,this));var s=this.get("boundingBox").one(".closebutton");s&&this._closeEvents.push(s.on("click",this.submit,this))},submit:function(){(new e.EventHandle(this._closeEvents)).detach(),this.fire("complete"),this.hide(),this.destroy()}},{NAME:f,CSS_PREFIX:n,ATTRS:{title:{validator:e.Lang.isString,value:"Alert"},message:{validator:e.Lang.isString,value:"Confirm"},yesLabel:{validator:e.Lang.isString,setter:function(e){return e||(e="Ok"),e},value:"Ok"}}}),M.core.alert=l},"@VERSION@",{requires:["moodle-core-notification-dialogue"]});
YUI.add("moodle-core-notification-exception",function(e,t){var n,r,i,s,o,u,a;n="moodle-dialogue",r="notificationBase",i="yesLabel",s="noLabel",o="title",u="question",a={BASE:"moodle-dialogue-base",WRAP:"moodle-dialogue-wrap",HEADER:"moodle-dialogue-hd",BODY:"moodle-dialogue-bd",CONTENT:"moodle-dialogue-content",FOOTER:"moodle-dialogue-ft",HIDDEN:"hidden",LIGHTBOX:"moodle-dialogue-lightbox"},M.core=M.core||{};var f="Moodle exception",l;l=function(t){var n=e.mix({},t);n.width=n.width||M.cfg.developerdebug?Math.floor(e.one(document.body).get("winWidth")/3)+"px":null,n.closeButton=!0;var r=["message","name","fileName","lineNumber","stack"];e.Array.each(r,function(e){n[e]=t[e]}),l.superclass.constructor.apply(this,[n])},e.extend(l,M.core.notification.info,{_hideTimeout:null,_keypress:null,initializer:function(t){var n,i=this,s=this.get("hideTimeoutDelay");this.get(r).addClass("moodle-dialogue-exception"),this.setStdModContent(e.WidgetStdMod.HEADER,'<h1 id="moodle-dialogue-'+t.COUNT+'-header-text">'+e.Escape.html(t.name)+"</h1>",e.WidgetStdMod.REPLACE),n=e.Node.create('<div class="moodle-exception" data-rel="fatalerror"></div>').append(e.Node.create('<div class="moodle-exception-message">'+e.Escape.html(this.get("message"))+"</div>")).append(e.Node.create('<div class="moodle-exception-param hidden param-filename"><label>File:</label> '+e.Escape.html(this.get("fileName"))+"</div>")).append(e.Node.create('<div class="moodle-exception-param hidden param-linenumber"><label>Line:</label> '+e.Escape.html(this.get("lineNumber"))+"</div>")).append(e.Node.create('<div class="moodle-exception-param hidden param-stacktrace"><label>Stack trace:</label> <pre>'+this.get("stack")+"</pre></div>")),M.cfg.developerdebug&&n.all(".moodle-exception-param").removeClass("hidden"),this.setStdModContent(e.WidgetStdMod.BODY,n,e.WidgetStdMod.REPLACE),s&&(this._hideTimeout=setTimeout(function(){i.hide()},s)),this.after("visibleChange",this.visibilityChanged,this),this._keypress=e.on("key",this.hide,window,"down:13,27",this),this.centerDialogue()},visibilityChanged:function(e){if(e.attrName==="visible"&&e.prevVal&&!e.newVal){this._keypress&&this._keypress.detach();var t=this;setTimeout(function(){t.destroy()},1e3)}}},{NAME:f,CSS_PREFIX:n,ATTRS:{message:{value:""},name:{value:""},fileName:{value:""},lineNumber:{value:""},stack:{setter:function(t){var n=e.Escape.html(t).split("\n"),r=new RegExp("^(.+)@("+M.cfg.wwwroot+")?(.{0,75}).*:(\\d+)$"),i;for(i in n)n[i]=n[i].replace(r,"<div class='stacktrace-line'>ln: $4</div><div class='stacktrace-file'>$3</div><div class='stacktrace-call'>$1</div>");return n.join("\n")},value:""},hideTimeoutDelay:{validator:e.Lang.isNumber,value:null}}}),M.core.exception=l},"@VERSION@",{requires:["moodle-core-notification-dialogue"]});
YUI.add("moodle-core-notification-ajaxexception",function(e,t){var n,r,i,s,o,u,a;n="moodle-dialogue",r="notificationBase",i="yesLabel",s="noLabel",o="title",u="question",a={BASE:"moodle-dialogue-base",WRAP:"moodle-dialogue-wrap",HEADER:"moodle-dialogue-hd",BODY:"moodle-dialogue-bd",CONTENT:"moodle-dialogue-content",FOOTER:"moodle-dialogue-ft",HIDDEN:"hidden",LIGHTBOX:"moodle-dialogue-lightbox"},M.core=M.core||{};var f="Moodle AJAX exception",l;l=function(e){e.name=e.name||"Error",e.closeButton=!0,l.superclass.constructor.apply(this,[e])},e.extend(l,M.core.notification.info,{_keypress:null,initializer:function(t){var n,i=this,s=this.get("hideTimeoutDelay");this.get(r).addClass("moodle-dialogue-exception"),this.setStdModContent(e.WidgetStdMod.HEADER,'<h1 id="moodle-dialogue-'+this.get("COUNT")+'-header-text">'+e.Escape.html(t.name)+"</h1>",e.WidgetStdMod.REPLACE),n=e.Node.create('<div class="moodle-ajaxexception" data-rel="fatalerror"></div>').append(e.Node.create('<div class="moodle-exception-message">'+e.Escape.html(this.get("error"))+"</div>")).append(e.Node.create('<div class="moodle-exception-param hidden param-debuginfo"><label>URL:</label> '+this.get("reproductionlink")+"</div>")).append(e.Node.create('<div class="moodle-exception-param hidden param-debuginfo"><label>Debug info:</label> '+e.Escape.html(this.get("debuginfo"))+"</div>")).append(e.Node.create('<div class="moodle-exception-param hidden param-stacktrace"><label>Stack trace:</label> <pre>'+e.Escape.html(this.get("stacktrace"))+"</pre></div>")),M.cfg.developerdebug&&n.all(".moodle-exception-param").removeClass("hidden"),this.setStdModContent(e.WidgetStdMod.BODY,n,e.WidgetStdMod.REPLACE),s&&(this._hideTimeout=setTimeout(function(){i.hide()},s)),this.after("visibleChange",this.visibilityChanged,this),this._keypress=e.on("key",this.hide,window,"down:13, 27",this),this.centerDialogue()},visibilityChanged:function(e){if(e.attrName==="visible"&&e.prevVal&&!e.newVal){var t=this;this._keypress.detach(),setTimeout(function(){t.destroy()},1e3)}}},{NAME:f,CSS_PREFIX:n,ATTRS:{error:{validator:e.Lang.isString,value:M.util.get_string("unknownerror","moodle")},debuginfo:{value:null},stacktrace:{value:null},reproductionlink:{setter:function(t){return t!==null&&(t=e.Escape.html(t),t='<a href="'+t+'">'+t.replace(M.cfg.wwwroot,"")+"</a>"),t},value:null},hideTimeoutDelay:{validator:e.Lang.isNumber,value:null}}}),M.core.ajaxException=l},"@VERSION@",{requires:["moodle-core-notification-dialogue"]});
YUI.add("moodle-filter_glossary-autolinker",function(e,t){var n="Glossary filter autolinker",r="width",i="height",s="menubar",o="location",u="scrollbars",a="resizable",f="toolbar",l="status",c="directories",h="fullscreen",p="dependent",d;d=function(){d.superclass.constructor.apply(this,arguments)},e.extend(d,e.Base,{overlay:null,alertpanels:{},initializer:function(){var t=this;require(["core/event"],function(n){e.delegate("click",function(r){r.preventDefault();var i="",s=e.Node.create('<div id="glossaryfilteroverlayprogress"></div>'),o=new e.Overlay({headerContent:i,bodyContent:s}),u,a;window.require(["core/templates"],function(e){e.renderPix("i/loading","core").then(function(e){s.append(e)})}),t.overlay=o,o.render(e.one(document.body)),u=this.getAttribute("href").replace("showentry.php","showentry_ajax.php"),a={method:"get",context:t,on:{success:function(e,t){this.display_callback(t.responseText,n)},failure:function(e,t){var n=t.statusText;M.cfg.developerdebug&&(t.statusText+=" ("+u+")"),new M.core.exception({message:n})}}},e.io(u,a)},e.one(document.body),"a.glossary.autolink.concept")})},display_callback:function(t,n){var r,i,s,o,u,a;try{r=e.JSON.parse(t);if(r.success){this.overlay.hide();for(i in r.entries)u=r.entries[i].definition+r.entries[i].attachments,s=new M.core.alert({title:r.entries[i].concept,draggable:!0,message:u,modal:!1,yesLabel:M.util.get_string("ok","moodle")}),n.notifyFilterContentUpdated(s.get("boundingBox").getDOMNode()),e.Node.one("#id_yuialertconfirm-"+s.get("COUNT")).focus(),o="#moodle-dialogue-"+s.get("COUNT"),s.on("complete",this._deletealertpanel,this,o),e.Object.isEmpty(this.alertpanels)||(a=this._getLatestWindowPosition(),e.Node.one(o).setXY([a[0]+10,a[1]+10])),this.alertpanels[o]=e.Node.one(o).getXY();return!0}r.error&&new M.core.ajaxException(r)}catch(f){new M.core.exception(f)}return!1},_getLatestWindowPosition:function(){var t=[0,0];return e.Object.each(this.alertpanels,function(e){e[0]>t[0]&&(t=e)}),t},_deletealertpanel:function(e,t){delete this.alertpanels[t]}},{NAME:n,ATTRS:{url:{validator:e.Lang.isString,value:M.cfg.wwwroot+"/mod/glossary/showentry.php"},name:{validator:e.Lang.isString,value:"glossaryconcept"},options:{getter:function(){return{width:this.get(r),height:this.get(i),menubar:this.get(s),location:this.get(o),scrollbars:this.get(u),resizable:this.get(a),toolbar:this.get(f),status:this.get(l),directories:this.get(c),fullscreen:this.get(h),dependent:this.get(p)}},readOnly:!0},width:{value:600},height:{value:450},menubar:{value:!1},location:{value:!1},scrollbars:{value:!0},resizable:{value:!0},toolbar:{value:!0},status:{value:!0},directories:{value:!1},fullscreen:{value:!1},dependent:{value:!0}}}),M.filter_glossary=M.filter_glossary||{},M.filter_glossary.init_filter_autolinking=function(e){return new d(e)}},"@VERSION@",{requires:["base","node","io-base","json-parse","event-delegate","overlay","moodle-core-event","moodle-core-notification-alert","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]});
