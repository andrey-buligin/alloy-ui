/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.3
build: 3.7.3
*/
YUI.add("button-group",function(e,t){function s(){s.superclass.constructor.apply(this,arguments)}var n="contentBox",r="click",i=e.ButtonCore.CLASS_NAMES;e.ButtonGroup=e.extend(s,e.Widget,{renderUI:function(){this.getButtons().plug(e.Plugin.Button)},bindUI:function(){var t=this,i=t.get(n);i.delegate(r,t._handleClick,e.ButtonGroup.BUTTON_SELECTOR,t)},getButtons:function(){var t=this.get(n);return t.all(e.ButtonGroup.BUTTON_SELECTOR)},getSelectedButtons:function(){var e=this,t=[],n=e.getButtons(),r=s.CLASS_NAMES.SELECTED;return n.each(function(e){e.hasClass(r)&&t.push(e)}),t},getSelectedValues:function(){var t=this,n,r=[],i=t.getSelectedButtons(),o=s.CLASS_NAMES.SELECTED;return e.Array.each(i,function(e){e.hasClass(o)&&(n=e.getContent(),r.push(n))}),r},_handleClick:function(e){var t=this,n=e.target.ancestor("."+s.CLASS_NAMES.BUTTON,!0),r=t.get("type"),i=s.CLASS_NAMES.SELECTED,o=n.hasClass(i),u;r==="checkbox"?(n.toggleClass(i,!o),t.fire("selectionChange",{originEvent:e})):r==="radio"&&(o||(u=t.getButtons(),u.removeClass(i),n.addClass(i),t.fire("selectionChange",{originEvent:e})))}},{NAME:"buttongroup",ATTRS:{type:{writeOnce:"initOnly",value:"radio"}},CLASS_NAMES:i,BUTTON_SELECTOR:"button, input[type=button], input[type=reset], input[type=submit], input[type=radio], input[type=checkbox]"})},"3.7.3",{requires:["button-plugin","cssbutton","widget"]});
