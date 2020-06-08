/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){"use strict";a.jqx.jqxWidget("jqxExpander","",{}),a.extend(a.jqx._jqxExpander.prototype,{defineInstance:function(){var b={width:"auto",height:"auto",expanded:!0,expandAnimationDuration:259,collapseAnimationDuration:250,animationType:"slide",toggleMode:"click",showArrow:!0,arrowPosition:"right",headerPosition:"top",disabled:!1,initContent:null,rtl:!1,easing:"easeInOutSine",aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["expanding","expanded","collapsing","collapsed","resize"]};return this===a.jqx._jqxExpander.prototype?b:(a.extend(!0,this,b),b)},createInstance:function(){this._isTouchDevice=a.jqx.mobile.isTouchDevice(),a.jqx.aria(this),this._cachedHTMLStructure=this.host.html(),this._rendered=!1,this.render(),this._rendered=!0},expand:function(){if(!1===this.disabled&&!1===this.expanded&&1==this._expandChecker){var b=this;switch(this._expandChecker=0,this._raiseEvent("0"),this._header.removeClass(this.toThemeProperty("jqx-fill-state-normal")),this._header.addClass(this.toThemeProperty("jqx-fill-state-pressed jqx-expander-header-expanded")),"top"==this.headerPosition?(this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down jqx-icon-arrow-down-hover jqx-icon-arrow-up-hover jqx-icon-arrow-down-selected jqx-expander-arrow-top")),this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded"))):"bottom"==this.headerPosition&&(this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-icon-arrow-down-hover jqx-icon-arrow-up-hover jqx-expander-arrow-bottom")),this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top jqx-expander-arrow-expanded-top"))),this.animationType){case"slide":"top"==this.headerPosition?this._content.slideDown({duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b.expanded=!0,a.jqx.aria(b._header,"aria-expanded",!0),a.jqx.aria(b._content,"aria-hidden",!1),b._raiseEvent("1"),b.initContent&&!1===b._initialized&&(b.initContent(),b._initialized=!0)}}):"bottom"==this.headerPosition&&(this._contentElement.style.display="",this._contentElement.style.height="0px",a.jqx.browser.msie&&a.jqx.browser.version<8&&(this._contentElement.style.display="block"),!0===this._cntntEmpty?this._content.animate({height:0},{duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b.expanded=!0,a.jqx.aria(b._header,"aria-expanded",!0),a.jqx.aria(b._content,"aria-hidden",!1),b._raiseEvent("1"),b.initContent&&!1===b._initialized&&(b.initContent(),b._initialized=!0)}}):this._content.animate({height:this._contentHeight},{duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b.expanded=!0,a.jqx.aria(b._header,"aria-expanded",!0),a.jqx.aria(b._content,"aria-hidden",!1),b._raiseEvent("1"),b.initContent&&!1===b._initialized&&(b.initContent(),b._initialized=!0)}}));break;case"fade":this._content.fadeIn({duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b.expanded=!0,a.jqx.aria(b._header,"aria-expanded",!0),a.jqx.aria(b._content,"aria-hidden",!1),b._raiseEvent("1"),b.initContent&&!1===b._initialized&&(b.initContent(),b._initialized=!0)}});break;case"none":this._contentElement.style.display="",this.expanded=!0,a.jqx.aria(b._header,"aria-expanded",!0),a.jqx.aria(b._content,"aria-hidden",!1),this._raiseEvent("1"),this.initContent&&!1===this._initialized&&(this.initContent(),this._initialized=!0)}}},collapse:function(){if(!1===this.disabled&&!0===this.expanded&&0===this._expandChecker){var b=this;switch(this._expandChecker=1,this._raiseEvent("2"),this._header.removeClass(this.toThemeProperty("jqx-fill-state-pressed jqx-expander-header-expanded")),this._header.addClass(this.toThemeProperty("jqx-fill-state-normal")),"top"==this.headerPosition?(this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded")),this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top")),b._hovered&&this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down-hover"))):"bottom"==this.headerPosition&&(this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down jqx-icon-arrow-down-selected jqx-expander-arrow-top jqx-expander-arrow-expanded-top")),this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-expander-arrow-bottom")),b._hovered&&this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up-hover"))),this.animationType){case"slide":"top"==this.headerPosition?this._content.slideUp({duration:this.collapseAnimationDuration,easing:this.easing,complete:function(){b.expanded=!1,a.jqx.aria(b._header,"aria-expanded",!1),a.jqx.aria(b._content,"aria-hidden",!0),b._raiseEvent("3")}}):"bottom"==this.headerPosition&&this._content.animate({height:0},{duration:this.expandAnimationDuration,easing:this.easing,complete:function(){b._contentElement.style.display="none",b.expanded=!1,a.jqx.aria(b._header,"aria-expanded",!1),a.jqx.aria(b._content,"aria-hidden",!0),b._raiseEvent("3")}});break;case"fade":this._content.fadeOut({duration:this.collapseAnimationDuration,easing:this.easing,complete:function(){b.expanded=!1,a.jqx.aria(b._header,"aria-expanded",!1),a.jqx.aria(b._content,"aria-hidden",!0),b._raiseEvent("3")}});break;case"none":b._contentElement.style.display="none",this.expanded=!1,a.jqx.aria(b._header,"aria-expanded",!1),a.jqx.aria(b._content,"aria-hidden",!0),this._raiseEvent("3")}}},setHeaderContent:function(a){this._headerText.innerHTML=a,this.invalidate()},getHeaderContent:function(){return this._headerText.innerHTML},setContent:function(a){this._content.html(a),this._checkContent(),this.invalidate()},getContent:function(){return this._content.html()},enable:function(){this.disabled=!1,this.refresh(),a.jqx.aria(this,"aria-disabled",!1)},disable:function(){this.disabled=!0,this.refresh(),a.jqx.aria(this,"aria-disabled",!0)},invalidate:function(){a.jqx.isHidden(this.host)||this._setSize()},refresh:function(a){!0!==a&&(this._removeHandlers(),!0===this.showArrow?this._arrowElement.style.display="":this._arrowElement.style.display="none",this._setTheme(),this._setSize(),!1===this.disabled&&this._toggle(),this._keyBoard())},render:function(){var b=this;if(b._rendered)return void b.refresh();this.widgetID=this.element.id;var c=this.host.children();this._headerText=c[0],this._headerElement=document.createElement("div"),this._header=a(this._headerElement),this._contentElement=c[1],this._content=a(this._contentElement),this._content.initAnimate&&this._content.initAnimate(),"top"===this.headerPosition?b.element.insertBefore(b._headerElement,b._headerText):b.element.appendChild(b._headerElement),b._headerElement.appendChild(b._headerText);var d=this._headerText.className;this._headerElement.className=d,this._headerText.className="",this.rtl?this._headerText.className+=" "+b.toThemeProperty("jqx-expander-header-content-rtl"):this._headerText.className+=" "+b.toThemeProperty("jqx-expander-header-content"),b._arrowElement=document.createElement("div"),b._headerElement.appendChild(b._arrowElement),this._arrow=a(b._arrowElement),!0===this.showArrow?b._arrowElement.style.display="":b._arrowElement.style.display="none",null===this._headerElement.getAttribute("tabindex")&&null===this._contentElement.getAttribute("tabindex")&&("top"===b.headerPosition?(this._headerElement.setAttribute("tabindex",1),this._contentElement.setAttribute("tabindex",2)):(this._headerElement.setAttribute("tabindex",2),this._contentElement.setAttribute("tabindex",1))),this._setTheme();try{if(0===this._header.length||0===this._content.length||c.length<2||c.length>2)throw"Invalid jqxExpander structure. Please add only two child div elements to your jqxExpander div that will represent the expander's header and content."}catch(a){throw new Error(a)}this._setSize(),!0===this.expanded?("top"==this.headerPosition?this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded")):"bottom"==this.headerPosition&&this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-icon-arrow-down-selected jqx-expander-arrow-top jqx-expander-arrow-expanded-top")),this.initContent&&this.initContent(),this._initialized=!0,this._expandChecker=0):!1===this.expanded&&(this._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down-selected jqx-icon-arrow-up-selected")),"top"==this.headerPosition?this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top")):"bottom"==this.headerPosition&&this._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-expander-arrow-bottom")),this._initialized=!1,this._expandChecker=1,this._contentElement.style.display="none"),this._checkContent(),!1===this.disabled&&this._toggle(),this._keyBoard(),a.jqx.utilities.resize(this.host,function(){b.invalidate()})},destroy:function(){this.removeHandler(a(window),"resize.expander"+this.widgetID),this.host.remove(),a(this.element).removeData("jqxExpander")},focus:function(){try{!1===this.disabled&&this._headerElement.focus()}catch(a){}},propertiesChangedHandler:function(a,b,c){c.width&&c.height&&2==Object.keys(c).length&&a._setSize()},propertyChangedHandler:function(a,b,c,d){if(!(a.batchUpdate&&a.batchUpdate.width&&a.batchUpdate.height&&2==Object.keys(a.batchUpdate).length))return"width"==b||"height"==b?void a._setSize():void("expanded"==b?!0===d&&!1===c?(this.expanded=!1,this.expand()):!1===d&&!0===c&&(this.expanded=!0,this.collapse()):this.refresh())},_raiseEvent:function(b,c){var d=this.events[b],e=new a.Event(d);e.owner=this,e.args=c;var f;try{f=this.host.trigger(e)}catch(a){}return f},resize:function(a,b){this.width=a,this.height=b,this._setSize()},_setSize:function(){this.element.style.width=this._toPx(this.width),this.element.style.height=this._toPx(this.height),this._headerElement.style.height="auto",this._headerElement.style.minHeight=this._arrowElement.offsetHeight;var a=this.arrowPosition;if(this.rtl)switch(a){case"left":a="right";break;case"right":a="left"}"right"==a?(this._headerText.style.float="left",this._headerText.style.marginLeft="0px",this._arrowElement.style.float="right",this._arrowElement.style.position="relative"):"left"==a&&("auto"==this.width?(this._headerText.style.float="left",this._headerText.style.marginLeft="17px",this._arrowElement.style.float="left",this._arrowElement.style.position="absolute"):(this._headerText.style.float="right",this._headerText.style.marginLeft="0px",this._arrowElement.style.float="left",this._arrowElement.style.position="relative")),this._arrowElement.style.marginTop=this._headerText.offsetHeight/2-this._arrowElement.offsetHeight/2+"px",this._contentElement.style.height="auto";var b=Math.max(0,this._content.height());if("auto"==this.height)this._contentHeight=b;else{var c=Math.round(this.element.offsetHeight)-Math.round(this._header.outerHeight())-1;c<0&&(c=0),this._contentHeight||(this._contentHeight=b),c!=this._contentHeight?(this._contentElement.style.height=this._toPx(c),this._contentHeight=Math.round(this._content.outerHeight())):this._contentElement.style.height=this._toPx(this._contentHeight)}},_toggle:function(){var b=this;if(!1===this._isTouchDevice)switch(this._header.removeClass(this.toThemeProperty("jqx-expander-header-disabled")),this.toggleMode){case"click":this.addHandler(this._header,"click.expander"+this.widgetID,function(){b._animate()});break;case"dblclick":this.addHandler(this._header,"dblclick.expander"+this.widgetID,function(){b._animate()});break;case"none":this._header.addClass(this.toThemeProperty("jqx-expander-header-disabled"))}else{if("none"==this.toggleMode)return;this.addHandler(this._header,a.jqx.mobile.getTouchEventName("touchstart")+"."+this.widgetID,function(){b._animate()})}},_animate:function(){!0===this.expanded?(this.collapse(),this._header.addClass(this.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover")),"top"==this.headerPosition?this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover")):"bottom"==this.headerPosition&&this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-bottom-hover jqx-expander-arrow-up-hover"))):(this.expand(),this._header.removeClass(this.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover")),"top"==this.headerPosition?this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover")):"bottom"==this.headerPosition&&this._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-bottom-hover jqx-expander-arrow-up-hover")))},_removeHandlers:function(){this.removeHandler(this._header,"click.expander"+this.widgetID),this.removeHandler(this._header,"dblclick.expander"+this.widgetID),this.removeHandler(this._header,"mouseenter.expander"+this.widgetID),this.removeHandler(this._header,"mouseleave.expander"+this.widgetID)},_setTheme:function(){var a=this,b="jqx-widget jqx-expander",c="jqx-widget-header jqx-expander-header",d="jqx-widget-content jqx-expander-content";!0===this.rtl&&(b+=" jqx-rtl"),!1===this.disabled?(this._header.removeClass(this.toThemeProperty("jqx-expander-header-disabled")),this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled")),!0===this.expanded?c+=" jqx-fill-state-pressed jqx-expander-header-expanded":(c+=" jqx-fill-state-normal",this._header.removeClass(this.toThemeProperty("jqx-expander-header-expanded"))),this._hovered=!1,a._isTouchDevice||(this.addHandler(this._header,"mouseenter.expander"+this.widgetID,function(){a._hovered=!0,1==a._expandChecker&&(a._header.removeClass(a.toThemeProperty("jqx-fill-state-normal jqx-fill-state-pressed")),a._header.addClass(a.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover")),"top"==a.headerPosition?(a.expanded?a._arrow.addClass(a.toThemeProperty("jqx-icon-arrow-up-hover")):a._arrow.addClass(a.toThemeProperty("jqx-icon-arrow-down-hover")),a._arrow.addClass(a.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"))):"bottom"==a.headerPosition&&(a.expanded&&a._arrow.addClass(a.toThemeProperty("jqx-icon-arrow-down-hover")),a._arrow.addClass(a.toThemeProperty("jqx-expander-arrow-bottom-hover jqx-expander-arrow-up-hover"))))}),this.addHandler(this._header,"mouseleave.expander"+this.widgetID,function(){a._hovered=!1,a._header.removeClass(a.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover")),a._arrow.removeClass(a.toThemeProperty("jqx-icon-arrow-up-hover jqx-icon-arrow-down-hover")),"top"==a.headerPosition?a._arrow.removeClass(a.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover")):"bottom"==a.headerPosition&&a._arrow.removeClass(a.toThemeProperty("jqx-expander-arrow-bottom-hover jqx-expander-arrow-up-hover")),1==a._expandChecker?a._header.addClass(a.toThemeProperty("jqx-fill-state-normal")):a._header.addClass(a.toThemeProperty("jqx-fill-state-pressed"))}))):(b+=" jqx-fill-state-disabled",c+=" jqx-expander-header-disabled"),"top"==this.headerPosition?d+=" jqx-expander-content-bottom":"bottom"==this.headerPosition&&(d+=" jqx-expander-content-top"),this.host.addClass(this.toThemeProperty(b)),this._header.addClass(this.toThemeProperty(c)),this._content.addClass(this.toThemeProperty(d)),this._arrow.addClass(this.toThemeProperty("jqx-expander-arrow"))},_checkContent:function(){this._cntntEmpty=/^\s*$/.test(this._contentElement.innerHTML),!0===this._cntntEmpty?(this._contentElement.style.height="0px",this._content.addClass(this.toThemeProperty("jqx-expander-content-empty"))):("auto"===this.height?this._contentElement.style.height="auto":this._contentElement.style.height=this._contentHeight+"px",this._content.removeClass(this.toThemeProperty("jqx-expander-content-empty")))},_keyBoard:function(){var a=this;this._focus(),this.addHandler(this.host,"keydown.expander"+this.widgetID,function(b){var c=!1;if((!0===a.focusedH||!0===a.focusedC)&&!1===a.disabled){switch(b.keyCode){case 13:case 32:"none"!=a.toggleMode&&(!0===a.focusedH&&a._animate(),c=!0);break;case 38:!0===b.ctrlKey&&!0===a.focusedC&&a._headerElement.focus(),c=!0;break;case 40:!0===b.ctrlKey&&!0===a.focusedH&&a._contentElement.focus(),c=!0}return!0}return c&&b.preventDefault&&b.preventDefault(),!c})},_focus:function(){var b=this;this.addHandler(this._header,"focus.expander"+this.widgetID,function(){b.focusedH=!0,a.jqx.aria(b._header,"aria-selected",!0),b._header.addClass(b.toThemeProperty("jqx-fill-state-focus"))}),this.addHandler(this._header,"blur.expander"+this.widgetID,function(){b.focusedH=!1,a.jqx.aria(b._header,"aria-selected",!1),b._header.removeClass(b.toThemeProperty("jqx-fill-state-focus"))}),this.addHandler(this._headerText,"focus.expander"+this.widgetID,function(){b._headerElement.focus()}),this.addHandler(this._arrow,"focus.expander"+this.widgetID,function(){b._headerElement.focus()}),this.addHandler(this._content,"focus.expander"+this.widgetID,function(){b.focusedC=!0,b._content.addClass(b.toThemeProperty("jqx-fill-state-focus"))}),this.addHandler(this._content,"blur.expander"+this.widgetID,function(){b.focusedC=!1,b._content.removeClass(b.toThemeProperty("jqx-fill-state-focus"))})},_toPx:function(a){return"number"==typeof a?a+"px":a}})}(jqxBaseFramework);

