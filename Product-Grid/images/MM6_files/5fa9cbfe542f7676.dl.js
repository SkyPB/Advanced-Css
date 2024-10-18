"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[201],{17364:(e,r,t)=>{t.d(r,{"Q":()=>p,"C":()=>d});var o=t(2284),n=t(13186),s=t.n(n),a=t(37693),i=t.n(a);const c={failedToGetForterToken:function(){},failedToCheckForterTokenExists:function(){}};function p(e,r=c,t){try{const n=new o.Z({isProd:e});n.loadFromBrowser();const a=n.getData().forterToken;return i()(a)?(r.hasEmptyForterToken(t),""):s()(a,"_")[0]}catch(n){return r.failedToGetForterToken(n,t),""}}function d(e,r=c,t={}){try{return p(e,r,t).length>0}catch(o){return r.failedToCheckForterTokenExists(o),!1}}},97856:(e,r,t)=>{t.d(r,{"ab":()=>s,"o1":()=>p,"$w":()=>v,"kF":()=>g,"n4":()=>I,"BQ":()=>k,"Y5":()=>y});var o=t(19865);const n="engagement/myaccounts/clear_code_and_verifier",s=(0,o.Z)(n),a="engagement/myaccounts/create_account",i=a+"_success",c=a+"_error",p=(0,o.Z)(a),d="engagement/myaccounts/create_account/load_initial_state",g=(0,o.Z)(d),h="engagement/myaccounts/create_account/pre_authorize",l=h+"_success",u=h+"_error",I=(0,o.Z)(h),S=(0,o.Z)(l),m=(0,o.Z)(u),f="engagement/myaccounts/create_account/forter_check_log",v=(0,o.Z)(f),w="engagement/myaccounts/create_account/send_analytics_log",k=(0,o.Z)(w),T="engagement/create-account/analytics_log/send_business_event_log",y=(0,o.Z)(T);var _=t(67882),A=t.n(_);const N=JSON.parse('{"engagement/myaccounts/create_account_error":{"AnniversaryCreateAccount":{"action_name":"create_account","category":"sign_in","tag_id":"MYACCTS4-55-08","label":"failure"},"default":{"action_name":"create_account","category":"sign_in","tag_id":"NA","label":"failure"}},"engagement/myaccounts/create_account_success":{"AnniversaryCreateAccount":{"action_name":"create_account","category":"sign_in","tag_id":"MYACCTS4-55-08","label":"success"},"default":{"action_name":"create_account","category":"sign_in","tag_id":"NA","label":"success"}}}');var C=t(95550),E=t(67546),D=t.n(E),b=t(57969),P=t(46186),B=t.n(P);const F={[n]:e=>B()({},e,{code:null,fetchPreAuthorizeFailed:!1,verifier:null})},Z={[h]:e=>B()({},e,{fetchingPreAuthorize:!0}),[l]:(e,r)=>{const{code:t,verifier:o}=r.payload;return B()({},e,{fetchingPreAuthorize:!1,fetchPreAuthorizeFailed:!1,code:t,verifier:o})},[u]:e=>B()({},e,{code:null,fetchingPreAuthorize:!1,fetchPreAuthorizeFailed:!0,verifier:null})},x={code:null,fetchingPreAuthorize:!1,fetchPreAuthorizeFailed:!1,logging:{team:"",view:""},redirectOnSuspectedAttack:!0,verifier:null},O={[d]:(e,r)=>{const{redirectOnSuspectedAttack:t=!0,team:o="",view:n=""}=r.payload;return B()({},x,{logging:{team:o,view:n},redirectOnSuspectedAttack:t})}},R=D()(F,Z),M=D()(),U=D()(R,M,O),z=(0,b.Z)(U,x);C.u.add({createAccount:z});class j{constructor({logger:e,nordSessionId:r,view:t}){this.logger=e,this.nordSessionId=r,this.view=t}}function q(e){if("object"!=typeof e)return{};const r=(t=e.Authorization,o=8,"string"==typeof t&&t.length>=o);var t,o;const n=function(e){return"string"==typeof e&&e.length>0}(e["X-Nor-Appiid"]);return{apiVersion:e["Nord-Api-Version"],clientId:e["Nord-Client-Id"],hasAuthorizationToken:r,hasXnorAppiidToken:n,requestId:e["Nord-Request-Id"],sessionId:e["Nord-Session-Id"],shopperId:e.ShopperId}}const L="account",G="info";class H extends j{constructor(e){super(e),this.sharedData={category:"register",componentName:"register",methodName:"create-account",team:L,view:this.view}}attackDetected({error:e,preSignInShopperId:r}){const t={message:"attack detected",preSignInShopperId:r,...this.sharedData};return this.logger.logError(e,t),t}error({error:e,...r}){this.logger.logError(e,{category:"register",componentName:"register",...r,message:"failed to create account",methodName:"create-account",team:L,view:this.view})}preAuthError({error:e,...r}){this.logger.logError(e,{category:"register",componentName:"register",...r,message:"failed to create account because pre-auth retry failed",methodName:"create-account",team:L,view:this.view})}failedToCheckForterToken(e){this.logger.logError(e,{message:"failed to check forter token exists",...this.sharedData})}failedToGetForterToken(e,{preSignInShopperId:r,postSignInShopperId:t}){const o={message:"failed to get forter token",preSignInShopperId:r,postSignInShopperId:t,...this.sharedData};return this.logger.logError(e,o),o}failedToGetShopperId(e,{preSignInShopperId:r,postSignInShopperId:t}){const o={message:"failed to get shopper id",preSignInShopperId:r,postSignInShopperId:t,...this.sharedData};return this.logger.logError(e,o),o}failedToGetShopperToken(e,{preSignInShopperId:r,postSignInShopperId:t}){const o={message:"failed to get shopper token",preSignInShopperId:r,postSignInShopperId:t,view:this.view};return this.logger.logError(e,o),o}failedToGetSslBearerToken(e,{preSignInShopperId:r,postSignInShopperId:t,shopperId:o}){const n={message:"failed to get ssl bearer token",preSignInShopperId:r,postSignInShopperId:t,shopperId:o,...this.sharedData};return this.logger.logError(e,n),n}failedToRemoveSslRefreshCookie(e,{shopperId:r}){const t={message:"failed to remove ssl refresh cookie",shopperId:r,...this.sharedData};return this.logger.logError(e,t),t}failedToSaveShopperId(e,{preSignInShopperId:r,postSignInShopperId:t}){const o={message:"failed to save shopper id",preSignInShopperId:r,postSignInShopperId:t,...this.sharedData};return this.logger.logError(e,o),o}failedToSaveSslBearerToken(e,{preSignInShopperId:r,postSignInShopperId:t}){const o={message:"failed to save ssl bearer token",preSignInShopperId:r,postSignInShopperId:t,...this.sharedData};return this.logger.logError(e,o),o}hasEmptyForterToken({preSignInShopperId:e,postSignInShopperId:r}){const t={message:"has empty forter token",preSignInShopperId:e,postSignInShopperId:r,...this.sharedData};return this.logger.logEvent(G,t),t}redirect({mfaSigninPath:e,isUsingConflictExperience:r,shopperId:t,preSignInShopperId:o}){this.logger.logEvent(G,{category:"register",componentName:"register",isUsingConflictExperience:r,message:"redirect successful",methodName:"create-account",redirect:e,shopperId:t,team:L,preSignInShopperId:o,view:this.view})}retrievedCodeAndVerifier({code:e,verifier:r,preSignInShopperId:t}){const o={message:"retrieved code and verifier",hasVerifier:r.length>1,hasCode:e.length>1,preSignInShopperId:t,...this.sharedData};return this.logger.logEvent(G,o),o}request({headers:e,...r}){this.logger.logEvent(G,{category:"register",componentName:"register",message:"request create account",methodName:"create-account",requestHeaders:{notes:"hasAuthorizationToken should be 'false', hasXnorAppiidToken should be 'true'",...q(e)},...r,team:L,view:this.view})}status({status:e,timeTakenInMSec:r,...t}){this.logger.logEvent(G,{category:"register",componentName:"register",message:"response status",methodName:"create-account",responseStatusCode:e,timeTakenInMSec:r,team:L,...t,view:this.view})}success({status:e,...r}){this.logger.logEvent(G,{category:"register",componentName:"register",message:"created account successfully",methodName:"create-account",responseStatusCode:e,...r,team:L,view:this.view})}trackForterAttempts({attempts:e,found:r,preSignInShopperId:t}){this.logger.logEvent(G,{attemptsToFindForter:e,forterWasFound:r,message:r?`token found in ${e} attempt(s)`:`token not yet found after ${e} attempt(s)`,preSignInShopperId:t,...this.sharedData})}refreshTokenDidNotMatchUserRequest({preSignInShopperId:e,postSignInShopperId:r,refreshTokenIsPresent:t,userHasRequestedSignInRefresh:o}){const n={message:"refresh token was not returned as per user checkbox request",preSignInShopperId:e,postSignInShopperId:r,refreshTokenIsPresent:t,userHasRequestedSignInRefresh:o,...this.sharedData};return this.logger.logEvent(G,n),n}failedToSaveRefreshToken(e,{preSignInShopperId:r,postSignInShopperId:t}){const o={message:"failed to save refresh token",preSignInShopperId:r,postSignInShopperId:t,...this.sharedData};return this.logger.logError(e,o),o}}var W=t(85913),$=t(18396),X=t(30299),V=t.n(X),J=t(95509);const K=async function(e,r,o,n){const{payload:{onSuccess:s=V(),onFailure:a=V()}={}}=e,{logger:i}=n,{shopper:{Id:c,SessionId:p},createAccount:{logging:d,logging:{team:g,view:h},redirectOnSuspectedAttack:l}}=o(),u={getState:o,helpers:n},I={logging:d,loggerCategory:"Create Account"},f=new H({logger:i,view:h,nordSessionId:p});try{const e={"X-Nor-Clientid":(0,J.i)(g)},t=await(0,W.Z)({platformHelpers:u,headers:e,loggingContext:I}),{code:o,verifier:n}=t,a=await(0,$.Z)({platformHelpers:u,headers:e,code:o,verifier:n,loggingContext:I}),{code:i}=a;f.retrievedCodeAndVerifier({code:i,verifier:n,preSignInShopperId:c}),r(S({code:i,verifier:n})),s()}catch(v){if(418===(v.status||500)&&(f.attackDetected({error:v,preSignInShopperId:c}),l))return void t.g.location.replace("/signin/call-service-center");r(m()),a()}},Y=(e,r)=>({action:e,platform:"web",timestamp:Date.now(),...r}),Q=(e,r,t)=>{const{analyticsAction:n,metadata:s}=e.payload,{createAccount:{logging:{view:a}},environment:{isDevelopment:i}}=t();if(n){const e=((e,r)=>A()(N,[e,r],A()(N,[e,"default"],{})))(n,a),t={...e,...s},c=Y(n,t),p=()=>({track:!0});i&&console.info("%c %s","background: #363636; color: #bada55",`Dispatch analytic action: ${c.action_name||"not_defined"}`,{...c});r((0,o.Z)(n,null,p)(c))}};var ee=t(31854),re=t(17457);const te=(e,r,o)=>{const{payload:{action:n,context:s={},element:a={},elements:i=[],eventSchema:c}={}}=e,{businessEventLogger:p}=o,d=t.g.location.href,g=r();if(!g.environment.isServer){const e={clientId:"mwp",eventTime:Date.now(),eventType:`com.nordstrom.event.customer.${c}`},r={context:{...s,pageType:"UNKNOWN"===(0,re.Wj)(g)?"UNDETERMINED":(0,re.Wj)(g),pageInstanceId:p.getPageInstanceIdForUrl(d),pageContainer:"NOT_APPLICABLE"},customer:ee.Z.selectEventCustomer(g),eventTime:Date.now(),source:{...ee.Z.selectEventSource(g),feature:"ACCOUNT"}};switch(c){case"Engaged":e.isCore=!1,r.action=n,r.element=a;break;case"Impressed":e.isCore=!1,r.elements=i;break;default:return}p.logBusinessEvent(e,r)}};var oe=t(48108);var ne=t(32298),se=t(20253),ae=t.n(se);var ie=t(28093),ce=t(4608);var pe=t(40816);var de=t(96671),ge=t(42404);function he({status:e}){this.status=e,this.message="Auth Exception"}var le=t(17364),ue=t(85208);function Ie({isProduction:e}){const r={isProd:e},t=new ue.Z(r);return t.loadFromBrowser(),t.getData().SessionId}var Se=t(22639),me=t.n(Se);function fe(e,r){return{Accept:"application/json","Content-Type":"application/json","Nord-Api-Version":"1.0","Nord-Request-Id":me()(),"Nord-Session-Id":Ie(e),"Nord-Brand-Code":"NCOM","X-Nor-Appiid":(0,le.Q)(e),"X-Nor-Clientid":(0,J.i)(r),"X-Nor-Scope":"WebRegistered"}}var ve=t(49987),we=t(37843);function ke({status:e,message:r}){this.status=e,this.message=r}async function Te(e,r,t,o){const{logger:n,fetchEmail:a}=o,{createAccount:{code:d,logging:g,logging:{view:h,team:l},verifier:u},environment:{isProduction:S},shopper:{Id:m,SessionId:f}}=t(),{isRetry:v=!1,onSuccess:w=V(),onFailure:T=V(),userRegistrationInfo:{isJoinNordyClubChecked:_=!1},userRegistrationInfo:A}=e.payload,N=new H({logger:n,view:h,nordSessionId:f});if("checkout"!==l&&r(y({action:"CLICK",element:{id:"Access/CreateAccount",type:"BUTTON",value:"Create Account"},eventSchema:"Engaged"})),d&&u){A.mobile_number&&(A.mobile_number=(0,de.e)(A.mobile_number,"rejectAnythingExceptNumbers"));try{const e=A.email,n=A.password,c=A.keepMeSignedInIsChecked,p={email:e,password:n,code:d,verifier:u},h=await function(e,r,t){const{fetch:o,logger:n}=r,{createAccount:{logging:{team:s,view:a}},environment:{isProduction:i},shopper:{Id:c,SessionId:p}}=t(),d=new H({logger:n,view:a,nordSessionId:p}),{email:g,password:h,code:l,verifier:u}=e,I=(0,ge.H3)(t())+"v3/account",S={credentials:"same-origin",method:"POST",headers:fe({isProduction:i,logger:d,preSignInShopperId:c},s),body:JSON.stringify({email:g,password:h,code:l,verifier:u})},m=S.headers;d.request({headers:m,preSignInShopperId:c});const f=Date.now();return o(I,S).then((async e=>{const r=e.status,t=Date.now()-f;if(d.status({status:r,timeTakenInMSec:t,preSignInShopperId:c}),202===r||400===r)return{status:r,json:await e.json()};throw new he({status:r})})).catch((e=>(d.error({error:e,preSignInShopperId:c}),e)))}(p,o,t);let l=h.status;const f=h.json,v=h.message||f.message;if(400===l)throw new ke({status:l,message:v});if(202!==l)throw new he({status:l});const y={...f,...A},_=await function(e,r,t){const{fetch:o,logger:n}=r,{createAccount:{logging:{team:s,view:a}},environment:{isMobileDevice:i,isProduction:c},shopper:{Id:p,SessionId:d}}=t(),g=new H({logger:n,view:a,nordSessionId:d}),h=i?"MOW":"WEB",l=`${(0,ge.UN)(t())}customers?source=WEB&subSource=WEB_MYACCOUNT`,u={method:"POST",headers:{...fe({isProduction:c,logger:g,preSignInShopperId:p},s),"Authorization":"Bearer "+e.accessToken,"Nord-Source-Channel":"FULL_LINE","Nord-Source-Platform":h,"UserId":"SIGNUP","newrelic":"acc8d2c1-6f3e-4990-b363-d43ec8b68cac"},body:JSON.stringify({tempBrandId:e.tempBrandId,firstName:e.first_name,lastName:e.last_name,email:e.email,persistentOptIn:e.keepMeSignedInIsChecked})},I=u.headers;g.request({headers:I,preSignInShopperId:p});const S=Date.now();return o(l,u).then((async r=>{const t=r.status,o=200===t,n=Date.now()-S;if(g.status({status:t,timeTakenInMSec:n,preSignInShopperId:p}),o){const o=await r.json();return o.firstName=e.first_name,{status:t,json:o}}throw new he({status:t})})).catch((e=>(g.error({error:e,preSignInShopperId:p}),e)))}(y,o,t);if(l=_.status,200!==l)throw new he({status:l});const C=_.json,E=C.brandId;N.success({status:l,shopperId:E,preSignInShopperId:m});const D={isProduction:S,logger:N,preSignInShopperId:m,postSignInShopperId:E};(0,ve.Z)({ocpId:C.ocpId||""}),N.success(0,{location:"0"});const b="string"==typeof C.refreshToken&&C.refreshToken.length>0;N.success(0,{location:"1"}),c!==b&&N.refreshTokenDidNotMatchUserRequest({preSignInShopperId:m,postSignInShopperId:C.brandId,refreshTokenIsPresent:b,keepMeSignedInIsChecked:c}),c&&C.refreshToken?function(e,r,t){const{isProduction:o,logger:n,preSignInShopperId:s,postSignInShopperId:a}=t;try{const t=new pe.Z({isProd:o,expires:r});t.loadFromBrowser(),t.setData({refresh:e}),t.saveToBrowser()}catch(i){n&&n.failedToSaveRefreshToken(i,{preSignInShopperId:s,postSignInShopperId:a})}}(C.refreshToken,C.refreshTokenExpiresIn,D):function({isProduction:e,logger:r,postSignInShopperId:t}){try{new pe.Z({isProd:e}).removeFromBrowser()}catch(o){r.failedToRemoveSslRefreshCookie(o,{postSignInShopperId:t})}}(D),function(e,r,t){const{isProduction:o,logger:n,preSignInShopperId:s,postSignInShopperId:a}=t;try{const t=new ie.Z({isProd:o,expires:r});t.setData({bearer:e}),t.saveToBrowser()}catch(i){n.failedToSaveSslBearerToken(i,{preSignInShopperId:s,postSignInShopperId:a})}}(C.accessToken,C.expiresIn,D),function(e,r){const{isProduction:t,logger:o,preSignInShopperId:n,postSignInShopperId:s}=r;try{const r=Date.now()+1e3*e,o=new ce.Z({isProd:t,expiresDate:r});o.setData({expiration:r}),o.saveToBrowser()}catch(a){o.failedToSaveSslBearerExpiration(a,{preSignInShopperId:n,postSignInShopperId:s})}}(C.expiresIn,D),function(e){const{isProduction:r,logger:t,preSignInShopperId:o,postSignInShopperId:n}=e;try{const e=new oe.Z({isProd:r});e.loadFromBrowser(),e.setData({shopperid:n}),e.saveToBrowser()}catch(s){t.failedToSaveShopperId(s,{preSignInShopperId:o,postSignInShopperId:n})}}(D);const P=function(e){const{isProduction:r,logger:t,preSignInShopperId:o,postSignInShopperId:n}=e;try{const e=new ne.Z({isProd:r});e.loadFromBrowser();const{shopperToken:t}=e.getData();return t}catch(s){return t.failedToGetShopperToken(s,{preSignInShopperId:o,postSignInShopperId:n}),""}}(D);!function(e,{isProduction:r,logger:t}){try{if(ae()(e))return null;const t=new ne.Z({isProd:r});return t.loadFromBrowser(),t.setData({shopperToken:e}),t.saveToBrowser(),null}catch(o){return t.failedToSaveShopperToken(o),null}}(C.shopperToken,D);let B="";const F=function(e,r,{preSignInShopperId:t,postSignInShopperId:o,shopperId:n}){try{const r=new ie.Z({isProd:e});r.loadFromBrowser();const{bearer:t}=r.getData();return t}catch(s){return r.failedToGetSslBearerToken(s,{preSignInShopperId:t,postSignInShopperId:o,shopperId:n}),""}}(S,H,{preSignInShopperId:m,postSignInShopperId:E}),Z={Authorization:`Bearer ${F}`},x=await a({platformHelpers:{action:{shopperId:E,emailType:"obfuscated"},getState:t,helpers:o},headers:Z,loggingContext:{logging:g,loggerCategory:"Create Account"}});B=x&&x.obfuscated,(0,ve.Z)({ocpId:C.ocpId,email:B});const O=()=>{r(k({analyticsAction:i,metadata:{reason:"Merge bag completed successfully"}})),w()},R=e=>{r(s()),r(I()),T(e)},{mergeShoppingBag:M}=we._n,U={onSuccess:O,onFailure:R,firstName:C.firstName,ocpId:C.ocpId,keepMeSignedInIsChecked:c,preSignInShopperId:m,preSignInShopperToken:P,postSignInShopperId:C.brandId,refreshTokenExpiresIn:C.refreshTokenExpiresIn};r(M(U))}catch(C){N.error({error:C,preSignInShopperId:m}),r(k({analyticsAction:c})),T(C)}}else if(v){const e={message:"Pre-authorization failure"};N.preAuthError({error:e,preSignInShopperId:m}),r(k({analyticsAction:c,metadata:{reason:`join_the_nordy_club:${_}`}})),T(e)}else{const t=()=>r(p({...e.payload,isRetry:!0}));r(I({onFailure:t,onSuccess:t}))}}var ye=t(45430);const _e=(e,r,t,o)=>{const n={...o,fetchEmail:ye.Z};switch(e.type){case a:Te(e,r,t,n);break;case f:!function(e,r,t){const{attempts:o,found:n}=e.payload,{shopper:s,createAccount:{logging:a}}=r(),{logger:i}=t,c=s.Id||"",p=s.SessionId||"";new H({logger:i,view:a,sessionId:p}).trackForterAttempts({attempts:o,found:n,preSignInShopperId:c})}(e,t,o);break;case h:K(e,r,t,o);break;case w:return Q(e,r,t);case T:return te(e,t,o);default:return null}};C.h.add({createAccount:_e})}}]);