(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7022],{64013:(e,t,n)=>{"use strict";n.d(t,{"Z":()=>i});const i={FADE_IN:"fade-in",SLIDE_PARTIAL_DOWN:"slide-partial-down",SLIDE_PARTIAL_LEFT:"slide-partial-left",SLIDE_PARTIAL_RIGHT:"slide-partial-right",SLIDE_PARTIAL_UP:"slide-partial-up",SLIDE_UP:"slide-up"}},20391:(e,t,n)=>{"use strict";n.d(t,{"Z":()=>O});var i=n(52689),a=n.n(i),r=n(67882),s=n.n(r),l=n(42456),o=n(64013),c=n(30583),d=n.n(c),u=n(31212),m=n(87094),h=n.n(m),p=n(93981),E=n(79112),f=n(53639),S=n(66206),I=n.n(S),L=n(35919),y=n.n(L),P=n(37491);const g="IN",_="IN_COMPLETE",A="OUT",C="OUT_COMPLETE";class D extends p.PureComponent{getChildContext(){return{block:{columns:this.props.columns}}}constructor(e){super(e),a()(this,"focusLayer",(()=>this.context.focusLayer({layerId:this.layerRef.current.id,plane:this.plane}))),a()(this,"unFocusFocusedLayer",(()=>{null!==this.layerRef.current&&this.context.unFocusFocusedLayer({layerId:this.layerRef.current.id})})),a()(this,"isFocused",(()=>!!this.layerRef.current&&this.context.focusedLayer.id===this.layerRef.current.id)),a()(this,"transitionInEnd",(e=>{const{animation:t,transformStyleProperty:n}=e;this.fixedHeaderPlaceholderElement.current&&Object.assign(this.fixedHeaderPlaceholderElement.current.style,{[n]:"translateY(0)"}),this.contentElement.current&&t===o.Z.SLIDE_UP&&(this.contentElement.current.style[n]="none"),this.innerElement.current&&t===o.Z.SLIDE_UP&&(this.innerElement.current.style.top="auto"),this.setState((e=>e.transitionState===C?{}:{transitionState:_}))})),a()(this,"transitionOutEnd",(()=>{this.setState({transitionState:C})})),a()(this,"transitionOutStart",(e=>{const{animation:t,transformStyleProperty:n}=e,i=(document.scrollingElement||document.documentElement).scrollTop,a=this.fixedHeaderElement.current&&this.fixedHeaderElement.current.getBoundingClientRect().top+i;this.fixedHeaderPlaceholderElement.current&&Object.assign(this.fixedHeaderPlaceholderElement.current.style,{[n]:`translateY(${a||0}px)`}),this.contentElement.current&&t===o.Z.SLIDE_UP&&Object.assign(this.contentElement.current.style,{[n]:`translateY(-${i}px)`}),this.innerElement.current&&t===o.Z.SLIDE_UP&&Object.assign(this.innerElement.current.style,{top:`${i}px`})})),a()(this,"handleContentTap",(e=>{"function"==typeof this.props.onContentTap&&this.props.onContentTap(e)})),a()(this,"handleContentMouseDown",(()=>{this.isMouseDownOnContent=!0})),a()(this,"handleContentMouseUp",(()=>{this.isMouseDownOnContent=!1})),a()(this,"handleContentOuterTap",(e=>{if(this.isMouseDownOnContent)return void(this.isMouseDownOnContent=!1);const{onChange:t}=this.props,{transitionState:n}=this.state;n===_&&t({visible:!1})})),a()(this,"handleTransitionEnd",(e=>{const{animation:t,onTransitionInEnd:n,onTransitionOutEnd:i}=this.props,{transitionState:a}=this.state,{propertyName:r,target:s}=e;if(t===o.Z.SLIDE_UP){if(s!==this.innerElement.current||-1===r.indexOf("transform"))return}else if(t===o.Z.SLIDE_PARTIAL_UP||t===o.Z.SLIDE_PARTIAL_DOWN){if(s!==this.slidePartialUpInnerElement.current)return}else if(a===g)switch(t){case o.Z.FADE_IN:if(s!==this.innerElement.current||"opacity"!==r)return;break;case o.Z.SLIDE_PARTIAL_LEFT:case o.Z.SLIDE_PARTIAL_RIGHT:if(s!==this.innerElement.current||-1===r.indexOf("transform"))return;break;default:if(s.className!==I().background)return}else if(s.className!==I().background)return;a===g?(this.transitionInEnd(this.props),"function"==typeof n&&n()):a===A&&(this.transitionOutEnd(this.props),"function"==typeof i&&i())})),this.layerRef=p.createRef({}),this.innerElement=p.createRef({}),this.contentElement=p.createRef(),this.fixedHeaderPlaceholderElement=p.createRef(),this.fixedHeaderElement=p.createRef(),this.slidePartialUpInnerElement=p.createRef(),this.stickyElement=null,this.isMouseDownOnContent=!1,this.state={isIOSScrolling:!1,transitionState:C}}componentDidMount(){const{isBlurAnimationCapable:e,animation:t,includeBlur:n,visible:i,setBlurAction:a}=this.props;i&&this.layerRef.current.id&&(this.focusLayer(),this.setState({transitionState:g}),t!==o.Z.SLIDE_UP&&e&&n&&a({blurLength:5}))}componentDidUpdate(e,t){const{isBlurAnimationCapable:i,visible:a,animation:r,includeBlur:s,setBlurAction:l,onLayerFocused:c}=this.props,{transitionState:d}=this.state;if(a&&!e.visible){if(this.focusLayer(),this.state.transitionState===_)return n.g.cancelAnimationFrame(this.animationOutAnimationFrame);this.setState({transitionState:g}),r!==o.Z.SLIDE_UP&&i&&s&&l({blurLength:5})}else e.visible&&!a?(this.unFocusFocusedLayer(),this.transitionOutStart(this.props),this.animationOutAnimationFrame=d!==_?n.g.requestAnimationFrame((()=>{r!==o.Z.SLIDE_UP&&i&&s&&l({blurLength:0}),this.setState({transitionState:C})})):n.g.requestAnimationFrame((()=>{r!==o.Z.SLIDE_UP&&i&&s&&l({blurLength:0}),this.setState({transitionState:A})}))):a&&this.context.focusedLayer.id!==this.layerRef.current.id&&this.layerRef.current.id&&this.state.transitionState===C&&(this.focusLayer(),this.setState({transitionState:g}),r!==o.Z.SLIDE_UP&&i&&s&&l({blurLength:5}));d===g&&t.transitionState!==g&&this.isFocused()&&"function"==typeof c&&c()}componentWillUnmount(){const{isBlurAnimationCapable:e,animation:t,includeBlur:n,setBlurAction:i}=this.props;this.unFocusFocusedLayer(),this.isFocused()&&t!==o.Z.SLIDE_UP&&e&&n&&i({blurLength:0})}render(){const{props:{animation:e,children:t,className:n,innerClassName:i,fixedHeader:a,highOpacity:r,includeBackground:s,includeBlur:l,maxWidth:c,whiteBackground:m,width:h,isBlurAnimationCapable:E,isChildOfRootEl:S,columns:L,plane:P},state:{isIOSScrolling:D,transitionState:O}}=this;this.plane=e===o.Z.SLIDE_PARTIAL_DOWN||e===o.Z.SLIDE_PARTIAL_LEFT||e===o.Z.SLIDE_PARTIAL_RIGHT||e===o.Z.SLIDE_PARTIAL_UP?9:10;const v="string"==typeof h,b="string"==typeof c,T=!isNaN(L)&&!(v||b);return p.createElement(p.Fragment,null,p.createElement(u.Z,{plane:P||this.plane,ref:this.layerRef,isChildOfRootEl:S},p.createElement("div",{className:d()(I().fullScreenOverlay,n,{[I().animationInStart]:O===g,[I().animationInEnd]:O===_,[I().animationOutStart]:O===A,[I().animationOutEnd]:O===C,[I().custom]:e===o.Z.CUSTOM,[I().fadeIn]:e===o.Z.FADE_IN,[I().fullScreenOverlayWithWidth]:v||b,[I().fullScreenOverlayWithBlur]:E&&l&&!r,[I().fullScreenOverlayWhiteBackground]:m,[I().iOSScrolling]:D,[I().slidePartialDown]:e===o.Z.SLIDE_PARTIAL_DOWN,[I().slidePartialLeft]:e===o.Z.SLIDE_PARTIAL_LEFT,[I().slidePartialRight]:e===o.Z.SLIDE_PARTIAL_RIGHT,[I().slidePartialUp]:e===o.Z.SLIDE_PARTIAL_UP,[I().slideUp]:e===o.Z.SLIDE_UP})},p.createElement("div",{className:I().positionedElement,onTransitionEnd:this.handleTransitionEnd},s&&p.createElement("div",{className:I().background}),p.createElement("div",{className:d()({[y().overlayContainer]:T})},p.createElement("div",{className:d()(I().inner,{[y().grid]:T},i),ref:this.innerElement,style:{...v&&{width:h},...b&&{maxWidth:c}}},p.createElement("div",{className:d()(!T&&y().block,{[y()["span"+L]]:T,[y().gutter]:T})},p.createElement("div",{className:I().hiddenBackground,onClick:this.handleContentOuterTap}),p.createElement("div",{className:I().content,onClick:this.handleContentTap,onMouseDown:this.handleContentMouseDown,onMouseUp:this.handleContentMouseUp,ref:this.contentElement},a?p.createElement(f.Z,{layerPlane:this.isFocused()?this.plane+1:5,disabled:O!==_,includeBlur:!1,placeholder:p.createElement("div",{ref:this.fixedHeaderPlaceholderElement},a)},p.createElement("div",{ref:this.fixedHeaderElement},a)):null,e!==o.Z.SLIDE_PARTIAL_UP&&e!==o.Z.SLIDE_PARTIAL_DOWN?t:null))))))),e===o.Z.SLIDE_PARTIAL_UP||e===o.Z.SLIDE_PARTIAL_DOWN?p.createElement(u.Z,{plane:this.plane+1,position:"fixed",style:{bottom:e===o.Z.SLIDE_PARTIAL_UP?0:"auto",top:e===o.Z.SLIDE_PARTIAL_UP?"auto":0,width:"100%"}},p.createElement("div",{className:d()({[I().slidePartialUpInner]:e===o.Z.SLIDE_PARTIAL_UP,[I().slidePartialDownInner]:e===o.Z.SLIDE_PARTIAL_DOWN,[I().animationInStart]:O===g,[I().animationInEnd]:O===_,[I().animationOutStart]:O===A,[I().animationOutEnd]:O===C}),onAnimationEnd:this.handleTransitionEnd,ref:this.slidePartialUpInnerElement},t)):null)}}a()(D,"childContextTypes",{block:h().shape({columns:h().number})}),a()(D,"defaultProps",{animation:o.Z.FADE_IN,includeBackground:!0,includeBlur:!0,visible:!1,whiteBackground:!1,isChildOfRootEl:!1}),a()(D,"contextType",P.V6);const O=(0,E.$j)((e=>({isBlurAnimationCapable:s()(e,["environment","isBlurAnimationCapable"]),isXXSmallToXSmall:s()(e,["environment","viewport","isXXSmallToXSmall"]),transformStyleProperty:s()(e,["environment","transformStyleProperty"])})),(e=>({setBlurAction:t=>e((0,l.QJ)(t))})))(D)},27022:(e,t,n)=>{"use strict";n.d(t,{"Z":()=>S});var i=n(67882),a=n.n(i),r=n(30299),s=n.n(r),l=n(30583),o=n.n(l),c=n(93981),d=n(79112),u=n(69263),m=n(20391),h=n(83819),p=n.n(h);const E=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","*[tabindex]","*[contenteditable]"],f=c.memo((e=>{const{children:t,className:n,columns:i,enablePropogationOnContentClick:a,fullScreen:r,hideClose:l,disableOutsideClickClose:d,disableEscapeKeyClose:h,hidePadding:f,hideModal:S,maxWidth:I,theme:L,visible:y,width:P,isXXSmallToXSmall:g,onTransitionInEnd:_,onTransitionOutEnd:A,verticalCenter:C,modalClassName:D,overlayInnerClassName:O,plane:v}=e,[b,T]=(0,c.useState)(!1),[R,x]=(0,c.useState)(!1),[U,Z]=(0,c.useState)({...p(),...e.styles}),N=(0,c.useRef)(),k=(0,c.useRef)(),w=(0,c.useRef)(null);return(0,c.useEffect)((()=>{y&&!R&&(x(!0),Z({...p(),...U})),y&&R&&!b&&T(!0),!y&&R&&b&&T(!1)}),[b,R,U,y]),(0,c.useEffect)((()=>{function e(e){const t=e.shiftKey;if(N.current&&N.current.querySelectorAll&&(w.current=N.current.querySelectorAll(E.join(","))),h||27!==e.keyCode){if(9===e.keyCode){if(!w.current)return void e.preventDefault();t?e.target===w.current[0]&&setTimeout((()=>{w.current[w.current.length-1].focus()}),0):e.target===w.current[w.current.length-1]&&setTimeout((()=>{w.current[0].focus()}),0)}}else S({triggeredBy:"modalEscapeKey"})}return R&&document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[h,S,R]),R?c.createElement(m.Z,{animation:"fade-in",className:o()(n,U.overlay,{[U.isVisible]:y}),innerClassName:O,columns:isNaN(i)?r?void 0:g?4:8:i,enablePropogationOnContentClick:a,includeBlur:!r,highOpacity:d||h,maxWidth:I,onChange:d?s():function(e){e.visible||S({triggeredBy:"modalBackground"})},onTransitionInEnd:function(){k.current=document.activeElement,N.current.focus(),"function"==typeof _&&_()},onTransitionOutEnd:function(){k.current&&"function"==typeof k.current.focus&&function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(k.current)&&k.current.focus(),x(!1),"function"==typeof A&&A()},visible:b,whiteBackground:r,width:P,plane:v},c.createElement("div",{role:"dialog","aria-modal":"true","aria-label":"Modal",className:o()(D,U.modal,{[U[L]]:L,[U.inGrid]:!(P||I||r),[p().fullScreen]:r,[U.padding]:!f,[U.alignCenter]:C,[U.transparent]:d||h}),ref:N,tabIndex:"-1"},c.createElement("div",{id:"dialog-description"},t,!l&&c.createElement("a",{className:U.close,href:"#close-modal",onClick:function(e){e.preventDefault(),S({triggeredBy:"modalCloseButton"})},"aria-label":"click to close modal"},c.createElement(u.Z,{size:"large",svgPassThrough:{className:U.closeIcon}}))))):null}));f.displayName="Modal",f.defaultProps={fullScreen:!1,hideClose:!1,hidePadding:!1,disableEscapeKeyClose:!1,disableOutsideClickClose:!1,enablePropogationOnContentClick:!1,verticalCenter:!1,styles:{}};const S=(0,d.$j)((e=>({isXXSmallToXSmall:a()(e,["environment","viewport","isXXSmallToXSmall"])})))(f)},66206:e=>{e.exports={"easing-bounce-in":"cubic-bezier(0.225, 1.405, 0, 1.005)","partial-overlay-content-background":"rgba(255, 255, 255, 0.83)","desktop":"only screen and (min-width: 736.1px)","fullScreenOverlay":"mXFlY","background":"cejCm","hiddenBackground":"AEu4v","fullScreenOverlayWithBlur":"sLVPP","fullScreenOverlayWhiteBackground":"_l9v1","animationOutEnd":"pYdYP","content":"ApM_X","positionedElement":"_5M7Mt","inner":"kCULj","iOSScrolling":"ACSCt","fullScreenOverlayWithWidth":"KXfwV","custom":"zGvdP","animationInStart":"SkyOG","animationInEnd":"JO4A_","animationOutStart":"XvDxV","fadeIn":"EumAF zGvdP","slidePartial":"OD7CJ zGvdP","slidePartialDown":"a6w1l zGvdP","slidePartialDownInner":"JzIVg","slide-down-in":"bpZg1","slide-down-out":"ZpTLL","slidePartialLeft":"vt2Fi OD7CJ zGvdP","slidePartialRight":"_iML2 OD7CJ zGvdP","slidePartialUp":"lHws2 zGvdP","slidePartialUpInner":"goDoO","slide-in":"NvC_f","slide-out":"RFl9j","slideUp":"fSKAT"}},35919:e=>{e.exports={"mobile":"only screen and (max-width: 736px)","desktop":"only screen and (min-width: 736.1px)","columnGap":"20px","overlayContainer":"hGvPy","grid":"cU2zs","block":"v6QRR","span1":"ZSmku","span2":"Kujcp","span3":"el3M6","span4":"hyAdg","span5":"Nvnkr","span6":"rTOYc","span7":"Jnzpm","span8":"VrzbK","span9":"BaLoV","span10":"Cgtyp","span11":"YVvJS","span12":"DIssu"}},83819:e=>{e.exports={"mobile":"only screen and (max-width: 736px)","desktop":"only screen and (min-width: 736.1px)","clearfix":"UJm2N","visuallyHidden":"OfW5X","large-modal-padding":"39px","small-modal-padding":"20px","in-grid-margin":"calc(-1 * 39px)","overlay":"UVi3l","modal":"VGsKY UJm2N","fullScreen":"xCECl","close":"lOgsI","closeIcon":"JSA05","transparent":"qnQ87","padding":"uU9gY","inGrid":"eQC6D","alignCenter":"zKbgw"}}}]);