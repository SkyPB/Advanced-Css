(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4485],{49706:(e,t,a)=>{"use strict";a.d(t,{"Z":()=>m});var s=a(93491),n=a.n(s),r=a(52689),l=a.n(r),o=a(93981),i=a(30583),u=a.n(i),d=a(14746),p=a(72540),c=a.n(p);class h extends o.Component{constructor(e){super(e),l()(this,"defaultValue",(e=>{const{formattedValue:t,unformattedValue:a,isValid:s}=this.validate(e);return{isValid:s,unformattedValue:a,value:t}})),l()(this,"setClearValueInterval",(()=>{const{clearTimeInMsec:e=NaN}=this.props;if(e>0){const t=setInterval((()=>this.clearValue()),e);this.setState({clearValueIntervalId:t})}})),l()(this,"clearValue",(()=>{const{initialValue:e="",onChange:t,temporarilyDisableClear:a}=this.props;if(!a){this.clearSupportingValues();const{isValid:a,unformattedValue:s,value:n}=this.defaultValue(e);this.state.value!==n&&t?.({isValid:a,unformattedValue:s,value:n}),this.setState({isValid:a,unformattedValue:s,value:n})}})),l()(this,"clearSupportingValues",(()=>{})),l()(this,"onChange",(e=>{const t=e?.target?.value,{unformattedValue:a,formattedValue:s,isValid:n}=this.validate(t);this.props.cursorUpdater?.(e,null!=s?s:""),this.state.value!==s&&this.props.onChange?.({isValid:n,unformattedValue:a,value:s}),this.setState({value:s,unformattedValue:a,isValid:n})})),l()(this,"validate",(e=>{const t=this.props.sanitizer?.(e),a=this.props.formatter?.(null!=t?t:""),s=this.props.validator?.(null!=a?a:"");return{unformattedValue:t,formattedValue:a,isValid:s}})),l()(this,"setValue",(e=>{const{unformattedValue:t,formattedValue:a,isValid:s}=this.validate(e);this.state.value!==a&&this.props.onChange?.({isValid:s,unformattedValue:t,value:a}),this.setState({value:a,unformattedValue:t,isValid:s})})),this.state={clearValueIntervalId:null,...this.defaultValue(e.overrideValue||e.initialValue||"")}}componentDidMount(){(this.props.overrideValue||this.props.initialValue)&&this.props.onChange?.(this.state),this.setClearValueInterval()}componentWillUnmount(){const{clearValueIntervalId:e}=this.state;e&&clearInterval(e)}componentDidUpdate(e){const t=e.overrideValue,a=this.props.overrideValue;a!==t&&this.setValue(null!=a?a:""),!1===e.isFetchingNewCode&&!0===this.props.isFetchingNewCode&&(this.props.resetEntriesAndPosition?.(),this.clearValue())}render(){const{alt:e,autoComplete:t,autoFocus:a,className:s,disabled:n,externalErrorMessage:r,inputMode:l,labelWrap:i,messageWrap:p,name:h,showRequiredIndicator:m,onKeyPress:g,onKeyDown:v,onBlur:f,showError:V,showPopover:x,title:E,validationErrorMessage:I,maxlength:b,pattern:C,type:w,showPasswordToggle:A,placeholder:y,forwardRef:P,onClick:T}=this.props,{value:S,isValid:N}=this.state,M=V&&(!N||!!r),z=N?r:I;return o.createElement(d.ZP,{alt:e,autoComplete:t,autoFocus:a,disabled:n,className:u()(s,c().input),controlStatus:!0,inputMode:l,label:o.createElement("div",{className:c().label},E,m&&o.createElement("span",{className:c().requiredMarker},"*"),x),labelWrap:i,maxlength:b,message:z,messageOnError:!!z,messageWrap:p,name:h,onBlur:f,onChange:this.onChange,pattern:C,onKeyPress:g,onKeyDown:v,status:M?"error":null,type:w,showPasswordToggle:A,value:S,placeholder:y,ref:P,onClick:T})}}l()(h,"defaultProps",{alt:void 0,autoComplete:"off",clearTimeInMsec:0,disabled:!1,maxlength:40,externalErrorMessage:"",initialValue:"",inputMode:void 0,labelWrap:!0,messageWrap:!0,onBlur:()=>{},onChange:()=>{},onKeyPress:()=>{},onKeyDown:()=>{},overrideValue:"",showError:!1,showPopover:!1,showRequiredIndicator:!1,validationErrorMessage:"The input is invalid",pattern:"",temporarilyDisableClear:!1,type:"text",showPasswordToggle:!1,sanitizer:e=>e,formatter:e=>e,validator:()=>!0,cursorUpdater:()=>{},placeholder:""});const m=o.forwardRef(((e,t)=>o.createElement(h,n()({},e,{forwardRef:t}))))},49232:(e,t,a)=>{"use strict";a.d(t,{"g":()=>s});const s={MIN_PASSWORD_LENGTH:8,MAX_PASSWORD_LENGTH:20}},96671:(e,t,a)=>{"use strict";a.d(t,{"V":()=>s,"e":()=>n});const s={rejectAnythingExceptNumbers:/[^0-9]/g,rejectedEmailCharacters:/[^a-zA-Z0-9!#$%&'*+\-=?^_`{|}~.@]/g,get rejectedLast4CardCharacters(){return this.rejectAnythingExceptNumbers},get rejectedLast4PhoneCharacters(){return this.rejectAnythingExceptNumbers},rejectedNameCharacters:/~|`|"|@|#|\$|%|\^|&|\*|\(|\)|\+|=|\[|{|\]|}|\||\\|_|<|,|\.|>|\?|\/|;|:|(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,rejectedPasswordCharacters:/\s+/g,rejectedPhoneCharacters:/[^0-9\-\(\) ]/g,rejectedZipCodeCharacters:/[^0-9A-Z ]/g};function n(e="",t=""){if("string"==typeof e){const a=s[t]||"";return e.replace(a,"")}return""}},77226:(e,t,a)=>{"use strict";a.d(t,{"od":()=>u,"rm":()=>d,"v3":()=>p,"hd":()=>c,"VO":()=>h,"aB":()=>m,"Ps":()=>g,"GJ":()=>v,"py":()=>V,"fs":()=>x,"Uj":()=>E,"Xz":()=>I,"Bw":()=>b,"al":()=>C});var s=a(96671),n=a(64314),r=a.n(n),l=a(28695),o=a.n(l),i=a(49232);function u(e){return/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e?e.toLowerCase():e)}function d(e){return!e.includes(" ")&&!e.includes(",")&&!r()(e,".")&&e.includes(".")&&e.includes("@")}function p(e){return e.length>0&&!/^\s*$/.test(e)}function c(e){return/[0-9]+|[~`!@#$%^&*()\-_+={[}\]|\\:;"'<,>.?/]/g.test(e)}function h(e){return/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(e)}function m(e){return/^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/.test(e)}function g(e){return/^[0-9]+$/.test(e)}function v(e){return e.length>=i.g.MIN_PASSWORD_LENGTH&&e.length<=i.g.MAX_PASSWORD_LENGTH}function f(e,t){return t.length===e}function V(e){return f(4,e)&&g(e)}function x(e){return m(e)}function E(e){return p(e)}function I(e){return v(e)&&c(e)&&h(e)&&function(e){return!s.V.rejectedPasswordCharacters.test(e)}(e)}function b(e){return function(e){return/^[0-9]{5}$/.test(e)}(e)||function(e){return/^[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$/.test(e)}(e)}function C({email:e,suggested:t,empty:a}){return o().run({email:e,domains:["gmail.com","yahoo.com","hotmail.com","aol.com","comcast.net","msn.com","verizon.net","sbcglobal.net","me.com","att.net"],secondLevelDomains:[],topLevelDomains:[],suggested:t,empty:a})}},14746:(e,t,a)=>{"use strict";a.d(t,{"z2":()=>A,"ZP":()=>P});var s=a(52689),n=a.n(s),r=a(30583),l=a.n(r),o=a(49274),i=a.n(o),u=a(24245),d=a.n(u),p=a(87094),c=a.n(p),h=a(93981),m=a(49605),g=a(84763),v=a(84348),f=a(10043),V=a.n(f);const x="horizontal",E="vertical",I="error",b=null,C="success",w=(e,t=(()=>{}),a=(()=>{}))=>s=>{const n=e(s);return!0===n?t():a(),n},A={emailField:w((e=>/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e))),emptyField:w((e=>e.length>0&&!/^\s*$/.test(e))),phoneFieldUS:w((e=>/^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/.test(e))),creditCardUs:w((e=>/^4[0-9]{12}(?:[0-9]{3})?$/.test(e)||/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(e)||/^3[47][0-9]{13}$/.test(e)||/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(e)||/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(e)))};class y extends h.Component{constructor(e,t){super(e,t),n()(this,"handleBlur",(e=>{const{onBlur:t,shouldValidateOnBlur:a}=this.props;a&&this.validateInput(this.inputElement.value),i()(t)&&t(e)})),n()(this,"handleChange",(e=>{const{maxlength:t,onChange:a,shouldValidateOnChange:s,formatter:n}=this.props;this.inputElement.value&&this.inputElement.value.length>t?this.inputElement.value=this.inputElement.value.substring(0,t):(i()(n)&&(this.inputElement.value=n(this.inputElement.value)),this.state.isExternallyControlled||this.setState({value:this.inputElement.value}),s&&this.validateInput(this.inputElement.value),i()(a)&&a(e))})),n()(this,"handleMounted",(e=>{this.inputElement=e})),n()(this,"togglePasswordVisibility",(()=>{this.setState((e=>({passwordToggledToVisible:!e.passwordToggledToVisible})))})),this.state={isExternallyControlled:!d()(e.value),isValid:null===e.validation,messageIndex:0,passwordToggledToVisible:!1,status:e.status,value:e.value||e.defaultValue||""}}UNSAFE_componentWillReceiveProps(e){const{value:t}=e;d()(t)||t===this.state.value||this.setState({isExternallyControlled:!0,value:t})}getConfiguredDataElement(e){const t=this.props["data-element"];return t?`${t}-${e}`:""}focus(){this.inputElement.focus()}isInputValid(e=this.inputElement.value){return this.validateInput(e)}setValidationStatus(e,t){this.setState({status:e?b:I,value:this.inputElement.value,messageIndex:t})}validateInput(e){const{validation:t,shouldUpdateStatusOnValidate:a}=this.props;let s=!0,n=0;if(Array.isArray(t))for(let r=0;r<t.length;r++){if(!(0,t[r])(e)){s=!1,n=r;break}}else null!==t&&(s=t(e));return a&&this.setValidationStatus(s,n),s}renderInput(){const{controlStatus:e,disabled:t,inputId:a,maxlength:s,name:n,onClick:r,onKeyPress:o,onKeyDown:i,showPasswordToggle:u,placeholder:d,type:p,pattern:c,onFocus:f,autoComplete:x,autoFocus:E,inputMode:b}=this.props,{passwordToggledToVisible:w,value:A}=this.state,y=e?this.props.status:this.state.status,P=y===I&&h.createElement(m.Z,{size:"medium",svgPassThrough:{className:V().errorIcon}}),T=y===C&&h.createElement(g.Z,{size:"medium",svgPassThrough:{className:V().successIcon}}),S=u&&h.createElement("div",{className:l()(V().passwordToggle),onClick:this.togglePasswordVisibility},h.createElement(v.Z,{variant:this.context.environment?.isMobileDevice?"medium":"small"},this.state.passwordToggledToVisible?"Hide":"Show"));return h.createElement("div",{className:V().textInputContainer},h.createElement("input",{disabled:t,id:a,maxLength:s,name:n,onKeyPress:o,onKeyDown:i,onFocus:f,onBlur:this.handleBlur,onChange:this.handleChange,placeholder:d,ref:this.handleMounted,type:u&&!w?"password":p,pattern:c,value:A,autoComplete:x,autoFocus:E,"aria-invalid":y===I?"true":"false",inputMode:b,onClick:r}),S,P,T)}renderLabel(){const{label:e,labelWrap:t,optional:a,required:s,isRedesignLabelVariant:n}=this.props,r=s?h.createElement("span",{className:l()(V().required)},"*"):null,o=a&&h.createElement("i",null,"(optional)");return e?n?h.createElement(v.Z,{as:"span",elementPassThrough:{className:l()(V().textInputLabel,V().redesignedLabel,{[V().noWrap]:!t})}},e,o,r):h.createElement("span",{className:l()(V().textInputLabel,{[V().noWrap]:!t})},e,o,r):null}renderTextArea(){const{controlStatus:e,inputId:t,name:a,placeholder:s,rows:n,onFocus:r,autoComplete:l}=this.props,o=(this.getConfiguredDataElement("text-input-multiline"),(e?this.props.status:this.state.status)===I&&h.createElement(m.Z,{svgPassThrough:{className:V().errorIcon}}));return h.createElement("div",{className:V().textInputContainer},h.createElement("textarea",{id:t,name:a,rows:n||5,onFocus:r,onBlur:this.handleBlur,onChange:this.handleChange,placeholder:s,ref:this.handleMounted,value:this.state.value,autoComplete:l}),o)}render(){const{className:e,controlStatus:t,layout:a,message:s,messageOnError:n,messageWrap:r,multiline:o,showPasswordToggle:i}=this.props,u=t?this.props.status:this.state.status,d=u===I?V().errorMessage:V().successMessage,p=l()(V().textInput,e,d,{[V().textInputError]:u===I,[V().textInputHorizontal]:a===x,[V().textInputSuccess]:u===C,[V().textInputShowPasswordToggle]:i});l()("text-input",this.props["data-element"]);return h.createElement(v.Z,{elementPassThrough:{className:p},variant:this.context.environment?.isMobileDevice?"medium":"small",as:"label"},this.renderLabel(),o?this.renderTextArea():this.renderInput(),!n&&s?h.createElement("p",{className:r?null:V().noWrap},s):null,n&&u===I?h.createElement("p",{className:r?null:`${V().noWrap} ${V().errorMessage}`},Array.isArray(s)?s[this.state.messageIndex]:s):null)}}y.contextTypes={environment:c().shape({isMobileDevice:c().bool})},y.defaultProps={autoFocus:!1,labelWrap:!1,layout:E,messageOnError:!1,messageWrap:!1,optional:!1,required:!1,shouldUpdateStatusOnValidate:!0,shouldValidateOnBlur:!1,shouldValidateOnChange:!1,showPasswordToggle:!1,status:null,type:"text",validation:null,isRedesignLabelVariant:!1};const P=y},72540:e=>{e.exports={"input":"A5Ab9","requiredMarker":"x3fIA","disclaimer":"bVGdk","label":"vaxnR","inputBox":"XYgNO","mobileInputBox":"wQdXg","inputEntries":"WbnrE","errorInputBox":"OVeaT","mobileErrorInputBox":"_5Db7R","hiddenInput":"TAQYo"}},10043:e=>{e.exports={"mobile":"only screen and (max-width: 736px)","textInputBorderRadius":"0","textInputBoxSizing":"border-box","textInputDisplay":"block","textInputMarginBottom":"0.3125rem","textInputPadding":"0 0.625rem 0.0625rem 0.625rem","textInputTextAreaPadding":"0.625rem","textInputPaddingMobile":"0 0.9375rem 0.0625rem 0.9375rem","textInputTextAreaPaddingMobile":"0.9375rem","textInputResize":"none","textInputTransition":"border-color 400ms ease-out","textInputVerticalAlign":"middle","textInputWidth":"100%","requiredAsteriskColor":"#c61f5b","textInput":"mRXdL","redesignedLabel":"qvLAQ","textInputHorizontal":"T2GK9","textInputError":"UfHlx","textInputSuccess":"Ar7qX","textInputShowPasswordToggle":"oSszD","textInputLabel":"jfXvu","textInputContainer":"h0Je8","noWrap":"U5o4J","errorMessage":"k3MPb","successMessage":"Ae4rH","errorIcon":"LMALV","successIcon":"X6_vr","required":"rSVWt","passwordToggle":"hXJwy"}}}]);