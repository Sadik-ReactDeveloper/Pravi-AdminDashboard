(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[11],{894:function(t,e,n){"use strict";n.d(e,"a",(function(){return W})),n.d(e,"b",(function(){return J})),n.d(e,"c",(function(){return z})),n.d(e,"d",(function(){return K})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return ct}));var o=n(6),s=n(7),i=n(19),a=n(1),r=n.n(a),l=n(2),u=n.n(l),c=n(5),p=n.n(c),d=n(33),f=n.n(d),h=!1,g=r.a.createContext(null),m=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var s,i=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?i?(s="exited",o.appearStatus="entering"):s="entered":s=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",o.state={status:s},o.nextCallback=null,o}Object(i.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!==typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),"entering"===e){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:f.a.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,s=this.props.nodeRef?[o]:[f.a.findDOMNode(this),o],i=s[0],a=s[1],r=this.getTimeouts(),l=o?r.appear:r.enter;!t&&!n||h?this.safeSetState({status:"entered"},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:"entering"},(function(){e.props.onEntering(i,a),e.onTransitionEnd(l,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(i,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:f.a.findDOMNode(this);e&&!h?(this.props.onExit(o),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:f.a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=s[0],a=s[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(s.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(g.Provider,{value:null},"function"===typeof n?n(t,o):r.a.cloneElement(r.a.Children.only(n),o))},e}(r.a.Component);function b(){}m.contextType=g,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},m.UNMOUNTED="unmounted",m.EXITED="exited",m.ENTERING="entering",m.ENTERED="entered",m.EXITING="exiting";var y=m,E=n(16);function v(t,e){var n=Object.create(null);return t&&a.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&Object(a.isValidElement)(t)?e(t):t}(t)})),n}function T(t,e,n){return null!=n[e]?n[e]:t.props[e]}function O(t,e,n){var o=v(t.children),s=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var o,s=Object.create(null),i=[];for(var a in t)a in e?i.length&&(s[a]=i,i=[]):i.push(a);var r={};for(var l in e){if(s[l])for(o=0;o<s[l].length;o++){var u=s[l][o];r[s[l][o]]=n(u)}r[l]=n(l)}for(o=0;o<i.length;o++)r[i[o]]=n(i[o]);return r}(e,o);return Object.keys(s).forEach((function(i){var r=s[i];if(Object(a.isValidElement)(r)){var l=i in e,u=i in o,c=e[i],p=Object(a.isValidElement)(c)&&!c.props.in;!u||l&&!p?u||!l||p?u&&l&&Object(a.isValidElement)(c)&&(s[i]=Object(a.cloneElement)(r,{onExited:n.bind(null,r),in:c.props.in,exit:T(r,"exit",t),enter:T(r,"enter",t)})):s[i]=Object(a.cloneElement)(r,{in:!1}):s[i]=Object(a.cloneElement)(r,{onExited:n.bind(null,r),in:!0,exit:T(r,"exit",t),enter:T(r,"enter",t)})}})),s}var x=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},C=function(t){function e(e,n){var o,s=(o=t.call(this,e,n)||this).handleExited.bind(Object(E.a)(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,o,s=e.children,i=e.handleExited;return{children:e.firstRender?(n=t,o=i,v(n.children,(function(t){return Object(a.cloneElement)(t,{onExited:o.bind(null,t),in:!0,appear:T(t,"appear",n),enter:T(t,"enter",n),exit:T(t,"exit",n)})}))):O(t,s,i),firstRender:!1}},n.handleExited=function(t,e){var n=v(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=Object(o.a)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,o=Object(s.a)(t,["component","childFactory"]),i=this.state.contextValue,a=x(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===e?r.a.createElement(g.Provider,{value:i},a):r.a.createElement(g.Provider,{value:i},r.a.createElement(e,o,a))},e}(r.a.Component);C.propTypes={},C.defaultProps={component:"div",childFactory:function(t){return t}};var N=C,D={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},j={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},k=0,R=1,S=2,_=3,L=4,P=function(){};function I(t){return"number"===typeof t&&!isNaN(t)&&t>0}function w(t){return Object.keys(t).map((function(e){return t[e]}))}var F=!("undefined"===typeof window||!window.document||!window.document.createElement);var M,B=((M=function(t,e,n){var o=t[e];return!1===o||I(o)?null:new Error(n+" expect "+e+" \n      to be a valid Number > 0 or equal to false. "+o+" given.")}).isRequired=function(t,e,n){if("undefined"===typeof t[e])return new Error("The prop "+e+" is marked as required in \n      "+n+", but its value is undefined.");M(t,e,n)},M),q={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t){return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];this.list.has(t)&&this.list.get(t).forEach((function(n){var s=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(s)}))}};function A(t){var e=t.enter,n=t.exit,i=t.duration,a=void 0===i?750:i,l=t.appendPosition,u=void 0!==l&&l;return function(t){var i,l,c=t.children,p=t.position,d=t.preventExitTransition,f=Object(s.a)(t,["children","position","preventExitTransition"]),h=u?e+"--"+p:e,g=u?n+"--"+p:n;Array.isArray(a)&&2===a.length?(i=a[0],l=a[1]):i=l=a;return r.a.createElement(y,Object(o.a)({},f,{timeout:d?0:{enter:i,exit:l},onEnter:function(t){t.classList.add(h),t.style.animationFillMode="forwards",t.style.animationDuration=.001*i+"s"},onEntered:function(t){t.classList.remove(h),t.style.cssText=""},onExit:d?P:function(t){t.classList.add(g),t.style.animationFillMode="forwards",t.style.animationDuration=.001*l+"s"}}),c)}}function H(t){var e,n,s=t.delay,i=t.isRunning,a=t.closeToast,l=t.type,u=t.hide,c=t.className,d=t.style,f=t.controlledProgress,h=t.progress,g=t.rtl,m=Object(o.a)({},d,{animationDuration:s+"ms",animationPlayState:i?"running":"paused",opacity:u?0:1,transform:f?"scaleX("+h+")":null}),b=p()("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+l,((e={})["Toastify__progress-bar--rtl"]=g,e),c),y=((n={})[f&&h>=1?"onTransitionEnd":"onAnimationEnd"]=f&&h<1?null:a,n);return r.a.createElement("div",Object(o.a)({className:b,style:m},y))}function U(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function X(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}H.propTypes={delay:B.isRequired,isRunning:u.a.bool.isRequired,closeToast:u.a.func.isRequired,rtl:u.a.bool.isRequired,type:u.a.string,hide:u.a.bool,className:u.a.oneOfType([u.a.string,u.a.object]),progress:u.a.number,controlledProgress:u.a.bool},H.defaultProps={type:j.DEFAULT,hide:!1};var V=F&&/(msie|trident)/i.test(navigator.userAgent),G=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).state={isRunning:!0,preventExitTransition:!1},e.flag={canCloseOnClick:!0,canDrag:!1},e.drag={start:0,x:0,y:0,deltaX:0,removalDistance:0},e.boundingRect=null,e.ref=null,e.pauseToast=function(){e.props.autoClose&&e.setState({isRunning:!1})},e.playToast=function(){e.props.autoClose&&e.setState({isRunning:!0})},e.onDragStart=function(t){e.flag.canCloseOnClick=!0,e.flag.canDrag=!0,e.boundingRect=e.ref.getBoundingClientRect(),e.ref.style.transition="",e.drag.start=e.drag.x=U(t.nativeEvent),e.drag.removalDistance=e.ref.offsetWidth*(e.props.draggablePercent/100)},e.onDragMove=function(t){e.flag.canDrag&&(e.state.isRunning&&e.pauseToast(),e.drag.x=U(t),e.drag.deltaX=e.drag.x-e.drag.start,e.drag.y=X(t),e.drag.start!==e.drag.x&&(e.flag.canCloseOnClick=!1),e.ref.style.transform="translateX("+e.drag.deltaX+"px)",e.ref.style.opacity=1-Math.abs(e.drag.deltaX/e.drag.removalDistance))},e.onDragEnd=function(t){if(e.flag.canDrag){if(e.flag.canDrag=!1,Math.abs(e.drag.deltaX)>e.drag.removalDistance)return void e.setState({preventExitTransition:!0},e.props.closeToast);e.ref.style.transition="transform 0.2s, opacity 0.2s",e.ref.style.transform="translateX(0)",e.ref.style.opacity=1}},e.onDragTransitionEnd=function(){if(e.boundingRect){var t=e.boundingRect,n=t.top,o=t.bottom,s=t.left,i=t.right;e.props.pauseOnHover&&e.drag.x>=s&&e.drag.x<=i&&e.drag.y>=n&&e.drag.y<=o?e.pauseToast():e.playToast()}},e.onExitTransitionEnd=function(){if(V)e.props.onExited();else{var t=e.ref.scrollHeight,n=e.ref.style;requestAnimationFrame((function(){n.minHeight="initial",n.height=t+"px",n.transition="all 0.4s ",requestAnimationFrame((function(){n.height=0,n.padding=0,n.margin=0})),setTimeout((function(){return e.props.onExited()}),400)}))}},e}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onOpen(this.props.children.props),this.props.draggable&&this.bindDragEvents(),this.props.pauseOnFocusLoss&&this.bindFocusEvents()},n.componentDidUpdate=function(t){t.draggable!==this.props.draggable&&(this.props.draggable?this.bindDragEvents():this.unbindDragEvents()),t.pauseOnFocusLoss!==this.props.pauseOnFocusLoss&&(this.props.pauseOnFocusLoss?this.bindFocusEvents():this.unbindFocusEvents())},n.componentWillUnmount=function(){this.props.onClose(this.props.children.props),this.props.draggable&&this.unbindDragEvents(),this.props.pauseOnFocusLoss&&this.unbindFocusEvents()},n.bindFocusEvents=function(){window.addEventListener("focus",this.playToast),window.addEventListener("blur",this.pauseToast)},n.unbindFocusEvents=function(){window.removeEventListener("focus",this.playToast),window.removeEventListener("blur",this.pauseToast)},n.bindDragEvents=function(){document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove),document.addEventListener("touchend",this.onDragEnd)},n.unbindDragEvents=function(){document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd)},n.render=function(){var t,e=this,n=this.props,s=n.closeButton,i=n.children,a=n.autoClose,l=n.pauseOnHover,u=n.onClick,c=n.closeOnClick,d=n.type,f=n.hideProgressBar,h=n.closeToast,g=n.transition,m=n.position,b=n.className,y=n.bodyClassName,E=n.progressClassName,v=n.progressStyle,T=n.updateId,O=n.role,x=n.progress,C=n.rtl,N={className:p()("Toastify__toast","Toastify__toast--"+d,(t={},t["Toastify__toast--rtl"]=C,t),b)};a&&l&&(N.onMouseEnter=this.pauseToast,N.onMouseLeave=this.playToast),c&&(N.onClick=function(t){u&&u(t),e.flag.canCloseOnClick&&h()});var D=parseFloat(x)===x;return r.a.createElement(g,{in:this.props.in,appear:!0,onExited:this.onExitTransitionEnd,position:m,preventExitTransition:this.state.preventExitTransition},r.a.createElement("div",Object(o.a)({onClick:u},N,{ref:function(t){return e.ref=t},onMouseDown:this.onDragStart,onTouchStart:this.onDragStart,onMouseUp:this.onDragTransitionEnd,onTouchEnd:this.onDragTransitionEnd}),r.a.createElement("div",Object(o.a)({},this.props.in&&{role:O},{className:p()("Toastify__toast-body",y)}),i),s&&s,(a||D)&&r.a.createElement(H,Object(o.a)({},T&&!D?{key:"pb-"+T}:{},{rtl:C,delay:a,isRunning:this.state.isRunning,closeToast:h,hide:f,type:d,style:v,className:E,controlledProgress:D,progress:x}))))},e}(a.Component);function Q(t){var e=t.closeToast,n=t.type,o=t.ariaLabel;return r.a.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},"\u2716\ufe0e")}G.propTypes={closeButton:u.a.oneOfType([u.a.node,u.a.bool]).isRequired,autoClose:B.isRequired,children:u.a.node.isRequired,closeToast:u.a.func.isRequired,position:u.a.oneOf(w(D)).isRequired,pauseOnHover:u.a.bool.isRequired,pauseOnFocusLoss:u.a.bool.isRequired,closeOnClick:u.a.bool.isRequired,transition:u.a.func.isRequired,rtl:u.a.bool.isRequired,hideProgressBar:u.a.bool.isRequired,draggable:u.a.bool.isRequired,draggablePercent:u.a.number.isRequired,in:u.a.bool,onExited:u.a.func,onOpen:u.a.func,onClose:u.a.func,type:u.a.oneOf(w(j)),className:u.a.oneOfType([u.a.string,u.a.object]),bodyClassName:u.a.oneOfType([u.a.string,u.a.object]),progressClassName:u.a.oneOfType([u.a.string,u.a.object]),progressStyle:u.a.object,progress:u.a.number,updateId:u.a.oneOfType([u.a.string,u.a.number]),ariaLabel:u.a.string,containerId:u.a.oneOfType([u.a.string,u.a.number]),role:u.a.string},G.defaultProps={type:j.DEFAULT,in:!0,onOpen:P,onClose:P,className:null,bodyClassName:null,progressClassName:null,updateId:null},Q.propTypes={closeToast:u.a.func,arialLabel:u.a.string},Q.defaultProps={ariaLabel:"close"};var W=A({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),z=A({enter:"Toastify__slide-enter",exit:"Toastify__slide-exit",duration:[450,750],appendPosition:!0}),Y=A({enter:"Toastify__zoom-enter",exit:"Toastify__zoom-exit"}),J=A({enter:"Toastify__flip-enter",exit:"Toastify__flip-exit"}),K=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).state={toast:[]},e.toastKey=1,e.collection={},e.isToastActive=function(t){return-1!==e.state.toast.indexOf(t)},e}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;q.cancelEmit(_).on(k,(function(e,n){return t.ref?t.buildToast(e,n):null})).on(R,(function(e){return t.ref?null==e?t.clear():t.removeToast(e):null})).emit(S,this)},n.componentWillUnmount=function(){q.emit(_,this)},n.removeToast=function(t){this.setState({toast:this.state.toast.filter((function(e){return e!==t}))},this.dispatchChange)},n.dispatchChange=function(){q.emit(L,this.state.toast.length,this.props.containerId)},n.makeCloseButton=function(t,e,n){var o=this,s=this.props.closeButton;return Object(a.isValidElement)(t)||!1===t?s=t:!0===t&&(s=this.props.closeButton&&"boolean"!==typeof this.props.closeButton?this.props.closeButton:r.a.createElement(Q,null)),!1!==s&&Object(a.cloneElement)(s,{closeToast:function(){return o.removeToast(e)},type:n})},n.getAutoCloseDelay=function(t){return!1===t||I(t)?t:this.props.autoClose},n.canBeRendered=function(t){return Object(a.isValidElement)(t)||"string"===typeof t||"number"===typeof t||"function"===typeof t},n.parseClassName=function(t){return"string"===typeof t?t:null!==t&&"object"===typeof t&&"toString"in t?t.toString():null},n.belongToContainer=function(t){return t.containerId===this.props.containerId},n.buildToast=function(t,e){var n=this,o=e.delay,i=Object(s.a)(e,["delay"]);if(!this.canBeRendered(t))throw new Error("The element you provided cannot be rendered. You provided an element of type "+typeof t);var r=i.toastId,l=i.updateId;if(!(this.props.enableMultiContainer&&!this.belongToContainer(i)||this.isToastActive(r)&&null==l)){var u=function(){return n.removeToast(r)},c={id:r,key:i.key||this.toastKey++,type:i.type,closeToast:u,updateId:i.updateId,rtl:this.props.rtl,position:i.position||this.props.position,transition:i.transition||this.props.transition,className:this.parseClassName(i.className||this.props.toastClassName),bodyClassName:this.parseClassName(i.bodyClassName||this.props.bodyClassName),onClick:i.onClick||this.props.onClick,closeButton:this.makeCloseButton(i.closeButton,r,i.type),pauseOnHover:"boolean"===typeof i.pauseOnHover?i.pauseOnHover:this.props.pauseOnHover,pauseOnFocusLoss:"boolean"===typeof i.pauseOnFocusLoss?i.pauseOnFocusLoss:this.props.pauseOnFocusLoss,draggable:"boolean"===typeof i.draggable?i.draggable:this.props.draggable,draggablePercent:"number"!==typeof i.draggablePercent||isNaN(i.draggablePercent)?this.props.draggablePercent:i.draggablePercent,closeOnClick:"boolean"===typeof i.closeOnClick?i.closeOnClick:this.props.closeOnClick,progressClassName:this.parseClassName(i.progressClassName||this.props.progressClassName),progressStyle:this.props.progressStyle,autoClose:this.getAutoCloseDelay(i.autoClose),hideProgressBar:"boolean"===typeof i.hideProgressBar?i.hideProgressBar:this.props.hideProgressBar,progress:parseFloat(i.progress),role:"string"===typeof i.role?i.role:this.props.role};"function"===typeof i.onOpen&&(c.onOpen=i.onOpen),"function"===typeof i.onClose&&(c.onClose=i.onClose),Object(a.isValidElement)(t)&&"string"!==typeof t.type&&"number"!==typeof t.type?t=Object(a.cloneElement)(t,{closeToast:u}):"function"===typeof t&&(t=t({closeToast:u})),I(o)?setTimeout((function(){n.appendToast(c,t,i.staleToastId)}),o):this.appendToast(c,t,i.staleToastId)}},n.appendToast=function(t,e,n){var s,i=t.id,a=t.updateId;this.collection=Object(o.a)({},this.collection,((s={})[i]={options:t,content:e,position:t.position},s)),this.setState({toast:(a?[].concat(this.state.toast):[].concat(this.state.toast,[i])).filter((function(t){return t!==n}))},this.dispatchChange)},n.clear=function(){this.setState({toast:[]})},n.renderToast=function(){var t=this,e={},n=this.props,s=n.className,i=n.style;return(n.newestOnTop?Object.keys(this.collection).reverse():Object.keys(this.collection)).forEach((function(n){var s=t.collection[n],i=s.position,a=s.options,l=s.content;e[i]||(e[i]=[]),-1!==t.state.toast.indexOf(a.id)?e[i].push(r.a.createElement(G,Object(o.a)({},a,{isDocumentHidden:t.state.isDocumentHidden,key:"toast-"+a.key}),l)):(e[i].push(null),delete t.collection[n])})),Object.keys(e).map((function(n){var a,l=1===e[n].length&&null===e[n][0],u={className:p()("Toastify__toast-container","Toastify__toast-container--"+n,(a={},a["Toastify__toast-container--rtl"]=t.props.rtl,a),t.parseClassName(s)),style:l?Object(o.a)({},i,{pointerEvents:"none"}):Object(o.a)({},i)};return r.a.createElement(N,Object(o.a)({},u,{key:"container-"+n}),e[n])}))},n.render=function(){var t=this;return r.a.createElement("div",{ref:function(e){return t.ref=e},className:"Toastify"},this.renderToast())},e}(a.Component);K.propTypes={position:u.a.oneOf(w(D)),autoClose:B,closeButton:u.a.oneOfType([u.a.node,u.a.bool]),hideProgressBar:u.a.bool,pauseOnHover:u.a.bool,closeOnClick:u.a.bool,newestOnTop:u.a.bool,className:u.a.oneOfType([u.a.string,u.a.object]),style:u.a.object,toastClassName:u.a.oneOfType([u.a.string,u.a.object]),bodyClassName:u.a.oneOfType([u.a.string,u.a.object]),progressClassName:u.a.oneOfType([u.a.string,u.a.object]),progressStyle:u.a.object,transition:u.a.func,rtl:u.a.bool,draggable:u.a.bool,draggablePercent:u.a.number,pauseOnFocusLoss:u.a.bool,enableMultiContainer:u.a.bool,containerId:u.a.oneOfType([u.a.string,u.a.number]),role:u.a.string,onClick:u.a.func},K.defaultProps={position:D.TOP_RIGHT,transition:W,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:r.a.createElement(Q,null),pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,className:null,style:null,toastClassName:null,bodyClassName:null,progressClassName:null,progressStyle:null,role:"alert"};var Z=new Map,$=null,tt=null,et={},nt=[],ot=!1;function st(){return Z.size>0}function it(t,e){var n=function(t){return st()?t?Z.get(t):Z.get($):null}(e.containerId);if(!n)return null;var o=n.collection[t];return"undefined"===typeof o?null:o}function at(t,e){return Object(o.a)({},t,{type:e,toastId:lt(t)})}function rt(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function lt(t){return t&&("string"===typeof t.toastId||"number"===typeof t.toastId&&!isNaN(t.toastId))?t.toastId:rt()}function ut(t,e){return st()?q.emit(k,t,e):(nt.push({action:k,content:t,options:e}),ot&&F&&(ot=!1,tt=document.createElement("div"),document.body.appendChild(tt),Object(d.render)(r.a.createElement(K,et),tt))),e.toastId}var ct=function(t,e){return ut(t,at(e,e&&e.type||j.DEFAULT))},pt=function(t){j[t]!==j.DEFAULT&&(ct[j[t].toLowerCase()]=function(e,n){return ut(e,at(n,n&&n.type||j[t]))})};for(var dt in j)pt(dt);ct.warn=ct.warning,ct.dismiss=function(t){return void 0===t&&(t=null),st()&&q.emit(R,t)},ct.isActive=function(t){var e=!1;return Z.size>0&&Z.forEach((function(n){n.isToastActive(t)&&(e=!0)})),e},ct.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=it(t,e);if(n){var s=n.options,i=n.content,a=Object(o.a)({},s,{},e,{toastId:e.toastId||t});e.toastId&&e.toastId!==t?a.staleToastId=t:a.updateId=rt();var r="undefined"!==typeof a.render?a.render:i;delete a.render,ut(r,a)}}),0)},ct.done=function(t){ct.update(t,{progress:1})},ct.onChange=function(t){"function"===typeof t&&q.on(L,t)},ct.configure=function(t){ot=!0,et=t},ct.POSITION=D,ct.TYPE=j,q.on(S,(function(t){$=t.props.containerId||t,Z.set($,t),nt.forEach((function(t){q.emit(t.action,t.content,t.options)})),nt=[]})).on(_,(function(t){t?Z.delete(t.props.containerId||t):Z.clear(),0===Z.size&&q.off(k).off(R),F&&tt&&document.body.removeChild(tt)}))},922:function(t,e,n){}}]);
//# sourceMappingURL=11.05042b4e.chunk.js.map