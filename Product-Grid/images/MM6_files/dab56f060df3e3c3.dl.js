(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3639],{53639:(e,t,i)=>{"use strict";i.d(t,{"Z":()=>B});var s=i(93491),l=i.n(s),n=i(52689),o=i.n(n),r=i(67882),a=i.n(r),h=i(82157),c=i(67546),d=i.n(c),m=i(48941),E=i(30583),u=i.n(E),p=i(53629),b=i.n(p),S=i(51925);const g=i.n(S)()((function(){return"scrollingElement"in document?document.scrollingElement:document.documentElement.scrollTop>0?document.documentElement:document.body.scrollTop>0?document.body:(document.documentElement.scrollTop=1,1===document.documentElement.scrollTop?(document.documentElement.scrollTop=0,document.documentElement):document.body)}));var x=i(21588),f=i(37491),y=i(87094),k=i.n(y),P=i(93981),T=i(99055),v=i(14090),F=i.n(v);class I extends(F()){constructor(e){super(e),o()(this,"pausePeekaboo",(()=>{this.items.forEach((e=>e.pausePeekaboo()))})),o()(this,"resumePeekaboo",(()=>{this.items.forEach((e=>e.resumePeekaboo()))})),this.items=[]}add(e){this.items.push(e)}remove(e){this.items.splice(this.items.indexOf(e),1)}}const w=I;class U extends P.Component{constructor(e){super(e),this.i=0,this.id=e.id,this.getUniqueId=this.getUniqueId.bind(this)}getChildContext(){const{props:{id:e,isFixedElementVisible:t,pausePeekaboo:i,resumePeekaboo:s},getUniqueId:l}=this;return{stickyElement:{id:e,isFixedElementVisible:t,isWithinFixedPositionElement:!0,pausePeekaboo:i,resumePeekaboo:s,getUniqueId:l}}}getUniqueId(){return`${this.id}-${this.i++}`}render(){return this.props.isMounted?this.props.children:null}}o()(U,"childContextTypes",{stickyElement:k().shape({id:k().string,isFixedElementVisible:k().bool,isWithinFixedPositionElement:k().bool,pausePeekaboo:k().func,resumePeekaboo:k().func,getUniqueId:k().func})});const C=U;var H=i(86240),L=i.n(H),A=i(79112);const D={};class V extends P.Component{constructor(e,t){super(e,t),o()(this,"fixedElementAnimate",((e,t=200)=>{const{onPeekabooAnimationInEnd:i,onPeekabooAnimationInStart:s,onPeekabooAnimationOutEnd:l,onPeekabooAnimationOutStart:n}=this.props,o=0===e?0:1;(0!==e||0!==this.animationState&&1!==this.animationState)&&(2!==e||2!==this.animationState&&3!==this.animationState)&&(this.animationState=e,this.animation&&this.animation.stop(),0===e&&s?s():n&&n(),this.animation=(0,h.Z)(this.percentAnimatedIn,o,t,h.U.Swing,(e=>{this.percentAnimatedIn=e,this.fixedElementTransformTop=-this.elementHeight*e,this.stickyElementCollection.emit("change")}),(()=>{this.percentAnimatedIn=o,this.fixedElementTransformTop=-this.elementHeight*o,this.animationState=0===e?1:3,0===e&&i?i():l&&l(),this.stickyElementCollection.emit("change")})))})),o()(this,"pausePeekaboo",(()=>{this.animation&&this.animation.stop(),++this.peekabooPauses})),o()(this,"resumePeekaboo",(()=>{--this.peekabooPauses,this.peekabooPauses=this.peekabooPauses<0?0:this.peekabooPauses,this.setPositions({forceUpdate:!0,includeElement:!0,includeScroll:!0})})),o()(this,"handleFixedElementMounted",(e=>{this.fixedElement=e,this.props.peekaboo&&this.fixedElement&&(this.fixedElementTransformTop=-this.elementHeight)})),o()(this,"handleFixedElementScrollbarMounted",(e=>{this.fixedElementScrollbar=e,e&&e.addEventListener("scroll",this.handleFixedElementScrollbarScroll)})),o()(this,"handleFixedElementScrollbarScroll",b()((()=>{!this.isSettingScroll&&this.isFixedElementVisible&&this.fixedElementScrollbar&&this.staticElementScrollbar&&(this.isSettingScroll=!0,this.staticElementScrollbar.scrollTop=this.fixedElementScrollbar.scrollTop,this.isSettingScroll=!1)}),500)),o()(this,"setIsAboveFocusedLayer",(()=>{this.isAboveFocusedLayer=this.layerElement.current&&this.layerPlane>=this.props.layerContext.focusedLayer.plane})),o()(this,"handleScrollbarResize",(()=>{this.setPositions({includeElement:!0,includeScroll:!0})})),o()(this,"handleStaticElementMounted",(e=>{this.staticElement=e})),o()(this,"handleStaticElementScrollbarMounted",(e=>{this.staticElementScrollbar=e,e&&e.addEventListener("scroll",this.handleStaticElementScrollbarScroll)})),o()(this,"handleStaticElementScrollbarScroll",b()((()=>{!this.isSettingScroll&&!this.isFixedElementVisible&&this.fixedElementScrollbar&&this.staticElementScrollbar&&(this.isSettingScroll=!0,this.fixedElementScrollbar.scrollTop=this.staticElementScrollbar.scrollTop,this.isSettingScroll=!1)}),500)),o()(this,"handleStickyEventEmitterChange",(()=>{this.setPositions({forceUpdate:!0})})),o()(this,"handleWindowResize",(()=>{this.setPositions({includeElement:!0,includeScroll:!0})})),o()(this,"handleWindowScroll",(()=>{const{layerContext:{focusedLayer:e,prevFocusedLayer:t},stickToBottom:i}=this.props;i&&e.id!==t.id||this.setPositions({includeScroll:!0})})),o()(this,"handleWindowScrollDebounced",b()((()=>{this.fixedElement&&(this.fixedElement.className=this.getFixedElementClassName()),this.staticElement&&(this.staticElement.className=this.getStaticElementClassName()),this.setPositions({includeScroll:!0,includeElement:!0})}),100)),this.animationState=3,this.fixedElementTransformTop=0,this.id=t.container.getUniqueId("sticky"),this.maxHeight=9999,this.peekabooPauses=0,this.percentAnimatedIn=1,this.i=0,this.getUniqueId=this.getUniqueId.bind(this),this.layerElement=P.createRef(),this.element=P.createRef(),this.layerPlane=4+e.layerPlane}getChildContext(){const{id:e,isFixedElementVisible:t,pausePeekaboo:i,resumePeekaboo:s,getUniqueId:l}=this;return{stickyElement:{id:e,isFixedElementVisible:t,pausePeekaboo:i,resumePeekaboo:s,getUniqueId:l}}}componentDidMount(){this.element.current&&(this.parentElement=this.element.current.parentNode,this.setPositions({forceUpdate:!0,includeElement:!0,includeScroll:!0})),this.layerElement.current&&(D[this.layerPlane]||(D[this.layerPlane]=new w),this.stickyElementCollection=D[this.layerPlane],this.stickyElementCollection.on("change",this.handleStickyEventEmitterChange),this.stickyElementCollection.add(this)),i.g.setTimeout((()=>{this.isAboveFocusedLayer=!0,this.mounted=!0,i.g.addEventListener("resize",this.handleWindowResize),i.g.addEventListener("scroll",this.handleWindowScroll),i.g.addEventListener("scroll",this.handleWindowScrollDebounced),this.forceUpdate()}))}componentDidUpdate(e){return e.disabled&&!this.props.disabled&&this.setPositions({forceUpdate:!0,includeElement:!0,includeScroll:!0}),e.layerPlane!==this.props.layerPlane&&(this.layerPlane=this.props.layerPlane,this.setPositions({forceUpdate:!0,includeElement:!0,includeScroll:!0})),e.layerContext.focusedLayer.id!==this.props.layerContext.focusedLayer.id&&this.setIsAboveFocusedLayer(),null}componentWillUnmount(){i.g.removeEventListener("resize",this.handleWindowResize),i.g.removeEventListener("scroll",this.handleWindowScroll),i.g.removeEventListener("scroll",this.handleWindowScrollDebounced),this.fixedElementScrollbar&&this.fixedElementScrollbar.removeEventListener("scroll",this.handleFixedElementScrollbarScroll),this.staticElementScrollbar&&this.staticElementScrollbar.removeEventListener("scroll",this.handleStaticElementScrollbarScroll),this.stickyElementCollection.removeListener("change",this.handleStickyEventEmitterChange),this.stickyElementCollection.remove(this),0===this.stickyElementCollection.items.length&&delete D[this.layerPlane],i.g.clearInterval(this.refreshInterval)}disable(){this.disabled||(this.disabled=!0,this.setPositions({forceUpdate:!0,includeElement:!0,includeScroll:!0}))}enable(){this.disabled&&(this.disabled=!1,this.setPositions({forceUpdate:!0,includeElement:!0,includeScroll:!0}))}getElementStyle(){return{overflow:this.isFixedElementVisible?"hidden":"visible"}}getUniqueId(){return`${this.id}-${this.i++}`}getFixedElementClassName(){const{disableHiddenElementAnimations:e,className:t}=this.props,i=e&&!this.isFixedElementVisible?L().disableHiddenElementAnimations:"",s=t?t+"FixedElement":"";let l=L().stickyElementFixed;return this.props.peekaboo&&(l=L().peekabooElementFixed),this.props.stickToBottom&&(l=L().stickToBottomFixed),u()(l,i,s)}getFixedElementStyle(){const{elementWidth:e,fixedElementTransformLeft:t,fixedElementTransformTop:i,isFixedElementVisible:s,mounted:l,previouslyStuckElementsHeight:n,props:{peekaboo:o,stickToBottom:r}}=this;let a=o?n+i:n;r&&(a=0);const h=s?t:-e-100;return l?{[this.props.transform]:`translate3d(${h}px, ${a}px, 0)`,width:`${e}px`}:{}}getFixedElementTabIndex(){return this.isFixedElementVisible?null:-1}getIsPeekabooPaused(){return 0!==this.peekabooPauses}getScrollbarProps(e){const{includeScrollbarOverflowIndicators:t,includeScrollbarPadding:i,overflow:s}=this.props;return{disabled:!0===s,includeOverflowIndicators:t,includePadding:i,maxHeight:this.maxHeight<0?0:this.maxHeight,onResize:this.handleScrollbarResize,preventScrollPropagation:!0,ref:0===e?this.handleFixedElementScrollbarMounted:this.handleStaticElementScrollbarMounted}}getStaticElementClassName(){const{disableHiddenElementAnimations:e,className:t}=this.props,i=e&&this.isFixedElementVisible?L().disableHiddenElementAnimations:"",s=t?t+"StaticElement":"";return u()(L().staticElement,i,s)}getStaticElementStyle(){const{elementLeft:e,elementWidth:t,isFixedElementVisible:i,mounted:s}=this;return s?{[this.props.transform]:i?`translate3d(-${e+t+100}px, 0, 0)`:"translate3d(0, 0, 0)"}:{}}getStaticElementTabIndex(){return this.isFixedElementVisible?-1:null}setPositions(e={}){if(this.isFullScreenOverlayVisible)return;const{disabled:t,lowerAllowance:s,overflow:l,peekaboo:n,peekabooThreshold:o,upperAllowance:r,isUserScrolling:a}=this.props,{forceUpdate:h=!1,includeElement:c=!1,includeScroll:m=!1}=e;let E=this.elementWidth,u=this.isFixedElementVisible,p=9999;if(this.disabled||t)return this.isFixedElementVisible=!1,void((h||u!==this.isFixedElementVisible)&&(this.element.current&&d()(this.element.current.style,this.getElementStyle()),this.fixedElement&&d()(this.fixedElement.style,this.getFixedElementStyle()),this.staticElement&&d()(this.staticElement.style,this.getStaticElementStyle())));if(!this.isAboveFocusedLayer)return;if(m){const{scrollTop:e=0}=this,t=g();this.isScrollingDown=t.scrollTop>e,this.isScrollingUp=t.scrollTop<e,this.scrollLeft=t.scrollLeft||0,this.scrollTop=t.scrollTop||0,this.scrollTopChange=e-this.scrollTop}if(c&&this.element.current){const e=this.element.current.getBoundingClientRect();this.elementHeight=parseInt(e.bottom-e.top),this.elementLeft=parseInt(e.left+this.scrollLeft),this.elementTop=parseInt(e.top+this.scrollTop),E=parseInt(e.right-e.left),this.globalHeight=i.g.innerHeight;const t=this.parentElement.getBoundingClientRect();this.parentElementBottom=parseInt(t.bottom+this.scrollTop),this.parentElementHeight=parseInt(t.bottom-t.top)}const b=this.elementTop-this.scrollTop,S=this.elementLeft-this.scrollLeft,x=this.stickyElementCollection.items.reduce(((e,t)=>{const i=t.elementTop<this.elementTop?(t.props.overflow?t.elementHeight:Math.min(t.parentElementHeight,t.maxHeight))+t.props.upperAllowance+t.props.lowerAllowance+t.fixedElementTransformTop:0;return isNaN(i)?e:e+i}),0)+r;if(!l){const e=this.elementTop-this.scrollTop-x,t=e<0?0:e,i=this.globalHeight-x-s-t,l=this.parentElementBottom-this.scrollTop-x-s;p=Math.min(this.parentElementHeight,i,l),p=p<0?0:p}if(n){if(this.getIsPeekabooPaused())return;const{scrollDownDistance:e=0,scrollUpDistance:i=0}=this;this.scrollDownDistance=e+this.scrollTopChange,this.scrollDownDistance=this.scrollDownDistance>0?0:this.scrollDownDistance,a&&(this.scrollUpDistance=i+this.scrollTopChange,this.scrollUpDistance=this.scrollUpDistance<0?0:this.scrollUpDistance),this.scrollDownDistance<-(this.elementHeight+o)&&this.scrollUpDistance>o&&(this.scrollDownDistance=0,this.scrollUpDistance=0),this.isPeekabooThresholdMet=this.scrollUpDistance>o,0!==this.animationState&&1!==this.animationState&&b<-(this.elementHeight+o)&&this.isScrollingUp&&this.isPeekabooThresholdMet?this.fixedElementAnimate(0):2!==this.animationState&&3!==this.animationState&&this.isScrollingDown&&b<-this.elementHeight&&this.fixedElementAnimate(2),u=!this.disabled&&!t&&(3!==this.animationState&&b<x||b+this.elementHeight<x)&&this.elementHeight+this.fixedElementTransformTop<this.elementHeight-b}else u=b<x;const f=u!==this.isFixedElementVisible;if(n&&!u&&f&&this.fixedElementAnimate(2,0),h||E!==this.elementWidth||f||x!==this.previouslyStuckElementsHeight){if(this.elementWidth=E,this.fixedElementTransformLeft=S,this.isFixedElementVisible=u,this.previouslyStuckElementsHeight=x,this.fixedElement&&(d()(this.fixedElement.style,this.getFixedElementStyle()),h||f)){const e=this.getFixedElementTabIndex();null===e?this.fixedElement.removeAttribute("tabIndex"):this.fixedElement.tabIndex=e}if(this.staticElement&&(h||f)){const e=this.getStaticElementTabIndex();d()(this.staticElement.style,this.getStaticElementStyle()),null===e?this.staticElement.removeAttribute("tabIndex"):this.staticElement.tabIndex=e}this.element.current&&(h||f)&&d()(this.element.current.style,this.getElementStyle())}p!==this.maxHeight&&this.fixedElementScrollbar&&this.staticElementScrollbar&&(this.maxHeight=p,this.fixedElementScrollbar.update({maxHeight:p}),this.staticElementScrollbar.update({maxHeight:p}))}render(){const{children:e,includeBlur:t,placeholder:i,overrideWithBlur:s}=this.props;return P.createElement("div",{className:L().stickyElement,ref:this.element,style:this.getElementStyle()},P.createElement(x.Z,{plane:this.layerPlane,position:"absolute",ref:this.layerElement,shouldFixWhenBelowFocusedLayer:!1},P.createElement("div",{className:L().stickyElementFixedWrapper},P.createElement("div",{className:this.getFixedElementClassName(),ref:this.handleFixedElementMounted,style:this.getFixedElementStyle(),tabIndex:this.getFixedElementTabIndex()},P.createElement(C,{id:this.id,isFixedElementVisible:this.isFixedElementVisible,isMounted:this.mounted,pausePeekaboo:this.pausePeekaboo,resumePeekaboo:this.resumePeekaboo},P.createElement(m.Z,{overrideWithBlur:s,includeBlur:t},P.createElement(T.Z,this.getScrollbarProps(0),e)))))),P.createElement("div",{className:this.getStaticElementClassName(),ref:this.handleStaticElementMounted,style:this.getStaticElementStyle(),tabIndex:this.getStaticElementTabIndex()},P.createElement(T.Z,this.getScrollbarProps(1),i||e)))}}o()(V,"childContextTypes",{stickyElement:k().shape({id:k().string,isFixedElementVisible:k().bool,pausePeekaboo:k().func,resumePeekaboo:k().func,getUniqueId:k().func})}),o()(V,"contextTypes",{container:k().shape({getUniqueId:k().func})}),o()(V,"defaultProps",{layerPlane:0,disabled:!1,disableHiddenElementAnimations:!0,includeBlur:!0,includeScrollbarOverflowIndicators:!1,includeScrollbarPadding:!1,lowerAllowance:0,overflow:!0,peekaboo:!1,peekabooThreshold:200,upperAllowance:0,overrideWithBlur:!1,stickToBottom:!1});const W=(0,A.$j)((e=>({isUserScrolling:a()(e,["scroll","isUserScrolling"]),transform:a()(e,["environment","transform"])})))(V),B=P.memo((e=>P.createElement(f.V6.Consumer,null,(t=>P.createElement(W,l()({layerContext:t},e))))))},86240:e=>{e.exports={"stickyElement":"z1HwB","stickyElementFixedWrapper":"kaRoh","stickToBottomFixed":"z6Xm8","stickyElementFixed":"PKuPr","peekabooElementFixed":"LsEvw","staticElement":"gvw6H","disableHiddenElementAnimations":"EvP_J"}}}]);