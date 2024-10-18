"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7315],{96453:(e,t,s)=>{s.d(t,{"Z":()=>i});const i={"MISSING_NAME":"Enter a list name.","CONTAINS_SPECIAL_CHARACTERS":"Remove the special character and try again.","ALREADY_USED":"You already used this name. Try another name.","MAX_CHARACTERS":"Shorten the list name so it’s under 40 characters."}},50263:(e,t,s)=>{s.d(t,{"CF":()=>c,"MY":()=>u,"Nx":()=>m});var i=s(37693),o=s.n(i),n=s(84868),a=s.n(n),r=s(96453);const d={id:"create",displayName:"",lastModified:""},l={status:"none",message:"",isInputValid:!0};function c(e=[],t=""){return o()(t)||o()(e)?d:"create"===t?{id:"create",displayName:"",lastModified:""}:a()(e,{"id":t})}function u(e=[]){return o()(e)?d:e.length>1?e.sort((function(e,t){return new Date(t.lastModified)-new Date(e.lastModified)}))[0]:1===e.length?e[0]:void 0}function m({textInput:e="",validateEmptyCharacters:t=!1}){return t&&o()(e)?{status:"error",message:r.Z.MISSING_NAME,isInputValid:!1}:function(e=""){return!o()(e)&&!/^[a-zA-Z0-9 '!-]+$/.test(e)}(e)?{status:"error",message:r.Z.CONTAINS_SPECIAL_CHARACTERS,isInputValid:!1}:l}},47315:(e,t,s)=>{s.d(t,{"T5":()=>$,"gB":()=>Z,"yK":()=>V,"Dr":()=>Le,"d9":()=>Ne,"Ln":()=>Ve,"xi":()=>be,"Fc":()=>Pe,"AQ":()=>De,"HO":()=>Ae,"De":()=>Oe,"P1":()=>Me,"ER":()=>Ze,"Vz":()=>_,"zf":()=>g,"$x":()=>_e,"pH":()=>K,"Ct":()=>ie,"$n":()=>a,"ZX":()=>ce,"p0":()=>F,"Jl":()=>R,"NP":()=>S,"Y5":()=>f,"Ky":()=>Y,"ae":()=>k,"xo":()=>L});var i=s(19865);const o="engagement/youraccount/add_to_wishlist_modal/load_initial_state",n=((0,i.Z)(o),"engagement/youraccount/add_to_wishlist_modal/open_add_to_wishlist_modal"),a=(0,i.Z)(n),r="engagement/youraccount/add_to_wishlist_modal/get_lists_action",d=(0,i.Z)(r),l="engagement/youraccount/add_to_wishlist_modal/get_lists_success",c=(0,i.Z)(l),u="engagement/youraccount/add_to_wishlist_modal/get_lists_failure",m=(0,i.Z)(u),p="engagement/youraccount/add_to_wishlist_modal/close_add_to_wishlist_modal",g=(0,i.Z)(p),h="engagement/youraccount/clear_modal_details",_=(0,i.Z)(h),y="engagement/youraccount/set_style_id",w=(0,i.Z)(y),I="engagement/youraccount/wish_list/send_business_event_log",f=(0,i.Z)(I),v="engagement/youraccount/select_modal_content",S=(0,i.Z)(v),E="engagement/youraccount/add_to_wishlist_modal/save_list_selection",R=(0,i.Z)(E),T="engagement/youraccount/save_create_list_input",k=(0,i.Z)(T),N="engagement/youraccount/validation_failure",L=(0,i.Z)(N),P="engagement/youraccount/add_item_to_wishlist",V=(0,i.Z)(P),A="engagement/youraccount/add_item_to_new_wishlist",Z=(0,i.Z)(A),M="engagement/youraccount/add_item_to_wishlist_success",O=(0,i.Z)(M),D="engagement/youraccount/add_item_to_new_wishlist_failure",b=(0,i.Z)(D),C="engagement/youraccount/add_item_to_wishlist_failure",W=(0,i.Z)(C),x=((0,i.Z)("engagement/youraccount/add_to_wishlist_modal/save_create_list_input"),"engagement/youraccount/add_item_to_default_wishlist"),$=(0,i.Z)(x),q="engagement/youraccount/add_item_to_default_wishlist_success",B=(0,i.Z)(q),j="engagement/youraccount/add_item_to_default_wishlist_failure",G=(0,i.Z)(j),z="engagement/youraccount/remove_item_from_wishlist",F=(0,i.Z)(z),H="engagement/youraccount/add_to_wishlist_modal/ui_logger",U=((0,i.Z)(H),"engagement/youraccount/add_to_wishlist_modal/set_style_and_get_lists"),Y=(0,i.Z)(U),J="engagement/youraccount/move_item_to_existing_wishlist",K=(0,i.Z)(J),Q="engagement/youraccount/move_item_to_existing_wishlist_success",X=(0,i.Z)(Q),ee="engagement/youraccount/move_item_to_existing_wishlist_failure",te=(0,i.Z)(ee),se="engagement/youraccount/move_item_to_new_wishlist",ie=(0,i.Z)(se),oe="engagement/youraccount/move_item_to_new_wishlist_success",ne=(0,i.Z)(oe),ae="engagement/youraccount/move_item_to_new_wishlist_failure",re=(0,i.Z)(ae),de="engagement/youraccount/add_to_wishlist_modal/set_is_signed_in",le=((0,i.Z)(de),"engagement/youraccount/opt_in_email_preferences"),ce=(0,i.Z)(le),ue=le+"_success",me=(0,i.Z)(ue),pe=le+"_failure",ge=(0,i.Z)(pe),he="engagement/youraccount/fetch_email_preferences",_e=(0,i.Z)(he),ye=he+"_cached",we=(0,i.Z)(ye),Ie=he+"_success",fe=(0,i.Z)(Ie),ve=he+"_failure",Se=(0,i.Z)(ve),Ee=()=>({track:!0}),Re=(e,t,s,i)=>({action:e||"",action_name:t||"",category:s,...i,timestamp:Date.now(),platform:"web"}),Te="engagement/myaccounts/move_item_click",ke="enagagement/myaccounts/add_to_wishlist_modal_create_newlist",Ne=(e={})=>(0,i.Z)("engagement/myaccounts/add_and_view_list",null,Ee)(Re("engagement/myaccounts/add_and_view_list","add_and_view_list","wishlist",e)),Le=(e={})=>(0,i.Z)("engagement/myaccounts/add_and_keep_shopping",null,Ee)(Re("engagement/myaccounts/add_and_keep_shopping","add_and_keep_shopping","wishlist",e)),Pe=(e={})=>(0,i.Z)("engagement/myaccounts/close_add_to_list",null,Ee)(Re("engagement/myaccounts/close_add_to_list","modal_close","product_page",e)),Ve=(e={})=>(0,i.Z)("engagement/myaccounts/pdp_add_to_wishlist_click",null,Ee)(Re("engagement/myaccounts/pdp_add_to_wishlist_click","pdp_add_to_wishlist_click","wishlist",e)),Ae=(e={})=>(0,i.Z)("engagement/myaccounts/close_wishlist_modal",null,Ee)(Re("engagement/myaccounts/close_wishlist_modal","close_wishlist_modal","wishlist",e)),Ze=(e={})=>(0,i.Z)("engagement/myaccounts/move_to_diff_wishlist_click",null,Ee)(Re("engagement/myaccounts/move_to_diff_wishlist_click","move_to_diff_wishlist_click","wishlist",e)),Me=(e={})=>(0,i.Z)(Te,null,Ee)(Re(Te,"move_item_click","wishlist",e)),Oe=(e={})=>(0,i.Z)(ke,null,Ee)(Re(ke,"add_to_wishlist_modal_create_newlist","wishlist",e)),De=(e={})=>(0,i.Z)("engagement/myaccounts/close_move_wishlist_modal",null,Ee)(Re("engagement/myaccounts/close_move_wishlist_modal","close_move_wishlist_modal","wishlist",e)),be=(e={})=>(0,i.Z)("engagement/myaccounts/cancel_move_modal",null,Ee)(Re("engagement/myaccounts/cancel_move_modal","cancel_move_modal","wishlist",e));var Ce=s(57969),We=s(46186),xe=s.n(We);const $e={addedSkus:[],color:{displayValue:"",id:""},isAddingItemToWishlist:!1,isAddToWishlistModalOpen:!1,isMovingItemToDifferentList:!1,isGettingLists:!1,quantity:1,size:{displayValue:"",id:""},skuId:0,skuImage:"",styleId:0,styleNumber:"",width:{displayValue:"",id:""},lists:[],chooseList:{selectedOption:{id:"",displayName:"",lastModified:"",wishlistItemQuantity:0},createTextInput:"",createTextInputErrors:{status:"none",message:"",isInputValid:!0}},itemAddedToWishlist:!1,brandName:"",totalQuantityAvailable:0,isItemSoldOut:!1,redirectionLocation:"",isShopperSignedIn:!1,selectedView:"",consumerId:"product-page",isConnected:!0,experimentValue:"",mostRecentlyUpdatedList:{listName:"",isDefaultList:!1,id:0},emailPreferences:{isFetchingEmailPreferences:!1,isOptedIntoEmail:"",isSavingEmailPreference:!1,isSavingError:!1}},qe={[o]:e=>xe()(e,$e,{})},Be={[n]:e=>xe()({},e,{isAddToWishlistModalOpen:!0}),[p]:e=>xe()({},e,{isAddToWishlistModalOpen:!1,createTextInputErrors:{status:"none",message:"",isInputValid:!0}}),[v]:(e,t)=>xe()({},e,{selectedView:t.payload.selectedView}),[h]:e=>xe()({},e,{...$e,styleId:e.styleId,itemAddedToWishlist:e.itemAddedToWishlist})};var je=s(50263);const Ge={[r]:e=>xe()({},e,{isGettingLists:!0}),[l]:(e,t)=>{const{wishLists:s,orderItem:i}=t.payload,o=(0,je.MY)(s);return xe()({},e,{isGettingLists:!1,lists:s,chooseList:{selectedOption:{...o}},...i})},[u]:(e,t)=>{const{error:s}=t.payload;return xe()({},e,{isGettingLists:!1,...s})}},ze={[E]:(e,t)=>{const{value:s}=t.payload,{lists:i,chooseList:{createTextInput:o}}=e,n=(0,je.CF)(i,s),a="create"===s?o:n.displayName;return xe()({},e,{chooseList:{selectedOption:{id:n.id,displayName:a,lastModified:n.lastModified}}})},[T]:(e,t)=>{const{value:s}=t.payload,{lists:i}=e,o=(0,je.Nx)({lists:i,textInput:s});return xe()({},e,{chooseList:{selectedOption:{id:"create",displayName:s,lastModified:""},createTextInput:s,createTextInputErrors:{status:o.status,message:o.message,isInputValid:o.isValid}}})}};var Fe=s(96453);const He={[N]:(e,t)=>{const{validateCreateField:s}=t.payload;return xe()({},e,{chooseList:{createTextInputErrors:{status:s.status,message:s.message,isInputValid:s.isInputValid}}})},[P]:(e,t)=>{const{redirectionLocation:s}=t.payload;return xe()({},e,{isAddingItemToWishlist:!0,itemAddedToWishlist:!1,redirectionLocation:s})},[A]:(e,t)=>{const{redirectionLocation:s}=t.payload;return xe()({},e,{isAddingItemToWishlist:!0,itemAddedToWishlist:!1,redirectionLocation:s})},[M]:e=>xe()({},e,{isAddingItemToWishlist:!1,redirectionLocation:"",itemAddedToWishlist:!0}),[D]:(e,t)=>{const{message:s}=t.payload;return xe()({},e,{isAddingItemToWishlist:!1,redirectionLocation:"",chooseList:{createTextInputErrors:{status:"error",message:Fe.Z[s],isInputValid:!1}}})},[C]:(e,t)=>{const{error:s}=t.payload;return xe()({},e,{isAddingItemToWishlist:!1,redirectionLocation:"",...s})}},Ue={[x]:e=>xe()({},e,{isAddingItemToWishlist:!0,itemAddedToWishlist:!1}),[q]:(e,t)=>{const{details:{wishListDetails:s},addedItem:{skuId:i},addedItem:o,selectedView:n}=t.payload;return xe()({},e,{isAddingItemToWishlist:!1,itemAddedToWishlist:!0,mostRecentlyUpdatedList:{listName:s.name,isDefaultList:s.defaultList,id:s.id},selectedView:n,...o,lastAddedItem:o,addedSkus:[...e.addedSkus,{skuId:i,listName:s.name,wishlistId:s.id,itemId:s.itemId}]})},[j]:(e,t)=>{const{error:s}=t.payload;return xe()({},e,{isAddingItemToWishlist:!1,itemAddedToWishlist:!1,...s})}},Ye={[N]:(e,t)=>{const{validateCreateField:s}=t.payload;return xe()({},e,{chooseList:{createTextInputErrors:{status:s.status,message:s.message,isInputValid:s.isInputValid}}})},[J]:e=>xe()({},e,{isMovingItemToDifferentList:!0,itemMovedToDifferentList:!1}),[Q]:(e,t)=>{const{destinationList:s,moveToWishlistResponse:{itemId:i},skuId:o}=t.payload,n=e.addedSkus.map((e=>e.skuId===o?{...e,listName:s.name,wishlistId:s.id,itemId:i}:e));return xe()({},e,{addedSkus:n,mostRecentlyUpdatedList:{listName:s.name,id:s.id},isMovingItemToDifferentList:!1,itemMovedToDifferentList:!0})},[ee]:(e,t)=>{const{error:s}=t.payload;return xe()({},e,{isMovingItemToDifferentList:!1,selectedView:"SERVER_ERROR",...s})},[se]:e=>xe()({},e,{isMovingItemToDifferentList:!0,itemMovedToDifferentList:!1}),[oe]:(e,t)=>{const{createTextInput:s,moveToWishlistResponse:{listId:i,itemId:o},skuId:n}=t.payload,a=e.addedSkus.map((e=>e.skuId===n?{...e,listName:s,wishlistId:i,itemId:o}:e));return xe()({},e,{addedSkus:a,mostRecentlyUpdatedList:{listName:s,id:i,isDefaultList:!1},isMovingItemToDifferentList:!1,itemMovedToDifferentList:!0})},[ae]:(e,t)=>{const{error:s}=t.payload;return xe()({},e,{isMovingItemToDifferentList:!1,selectedView:"SERVER_ERROR",...s})}};var Je=s(67546),Ke=s.n(Je);const Qe={[z]:(e,t)=>{const{addedSkus:s}=e,{itemSku:i,sourceWishlistId:o}=t.payload,n=s.filter((e=>e.skuId!==i)),a=s.find((e=>e.skuId===i)).listName;return Ke()({},e,{addedSkus:n,mostRecentlyUpdatedList:{listName:a,id:o},selectedView:"REMOVED_ITEM"})}},Xe={[de]:(e,t)=>{const{bearerToken:s}=t.payload,i=!!s;return Ke()({},e,{isShopperSignedIn:i})}},et={[y]:(e,t)=>{const{styleId:s,consumerId:i,isConnected:o,orderItem:n={}}=t.payload;return xe()({},e,{styleId:s,consumerId:i,isConnected:o,...n})}},tt={[he]:e=>xe()({},e,{emailPreferences:{isFetchingEmailPreferences:!0}}),[ye]:e=>xe()({},e,{emailPreferences:{isFetchingEmailPreferences:!1}}),[Ie]:(e,t)=>{const s="Y"===(t.payload.response.preference||{}).preferenceType;return xe()({},e,{emailPreferences:{isFetchingEmailPreferences:!1,isOptedIntoEmail:s}})},[ve]:(e,t)=>{const{error:s}=t.payload;return xe()({},e,{emailPreferences:{isFetchingEmailPreferences:!1,isOptedIntoEmail:!1},...s})}},st={[le]:e=>xe()({},e,{emailPreferences:{isSavingEmailPreference:!0,isSavingError:!1}}),[ue]:(e,t)=>xe()({},e,{emailPreferences:{isSavingError:!1,isSavingEmailPreference:!1,isOptedIntoEmail:!0}}),[pe]:(e,t)=>{const{error:s}=t.payload;return xe()({},e,{emailPreferences:{isSavingEmailPreference:!1,isSavingError:!0},...s})}};var it=s(95550);const ot=Ke()(Be,Ge,ze,qe,He,Ue,Ye,Qe,Xe,et,tt,st),nt=(0,Ce.Z)(ot,$e);it.u.add({addToWishlist:nt});var at=s(28093);var rt=s(85208);function dt({isProd:e=!1}){const t=new rt.Z({isProd:e});t.loadFromBrowser();return t.getData().SessionId}var lt=s(2284);function ct({isProd:e}){const t=new lt.Z({isProd:e});t.loadFromBrowser();const s=t.getData().forterToken;return""===s?"":function(e){return e.split("_")[0]}(s)}var ut=s(22639),mt=s.n(ut);function pt({isProd:e,shopperId:t,isMobile:s=!1}){const i=function({isProd:e=!1}){const t=new at.Z({isProd:e});return t.loadFromBrowser(),`Bearer ${t.getData().bearer.split("|")[0]}`}({isProd:e});return{...""!==i&&{"Authorization":i},"Accept":"application/json","ClientName":"wishlist","content-type":"application/json","NordApiVersion":"1.0","nord-request-id":mt()(),"nord-session-id":dt({isProd:e}),"Nord-Client-Id":"MWP-PDP-Wishlist","x-nor-appiid":ct({isProd:e}),"Nord-Customer-Experience":s?"MOBILE_WEB":"DESKTOP_WEB","shopperid":t}}const gt="account",ht="add-to-wishlist-modal",_t="info";class yt{constructor({logger:e}){this.logger=e}}class wt extends yt{constructor(e){super(e)}request({options:e={},requestInfo:t={}},s="",i=""){this.logger.logEvent(_t,{category:ht,component:ht,componentName:s,message:"request info",team:gt,request:{...e.headers,info:{...t}},shopperID:i})}status({status:e=""},t="",s=""){this.logger.logEvent(_t,{category:ht,component:ht,componentName:t,message:"response status",team:gt,status:e,shopperID:s})}success(e="",t="",s=""){this.logger.logEvent(_t,{category:ht,component:ht,componentName:t,message:e,team:gt,shopperID:s})}latency(e="",t="",s="",i=""){this.logger.logEvent(_t,{category:ht,component:ht,componentName:s,message:t,team:gt,responseLatencyinMSec:e,shopperID:i})}error({error:e={}},t="",s="",i=""){this.logger.logError(e,{category:ht,component:ht,componentName:s,message:t,team:gt,status:e.status,shopperID:i,responseError:{...e}})}uiLog({shopperId:e="",componentName:t="",message:s="",uiPayload:i={},type:o=_t}){this.logger.logEvent(o,{category:ht,component:ht,componentName:t,message:s,team:gt,shopperID:e,payload:i})}}var It=s(67882),ft=s.n(It),vt=s(42404),St=s(61704);const Et="add_to_wishlist_modal";const Rt="add_to_wishlist_modal";const Tt="add_to_wishlist_modal";var kt=s(19454);const Nt="add_to_wishlist_modal";const Lt="add_to_wishlist_modal";const Pt="add_to_wishlist_modal";var Vt=s(37066);const At=(e,t,s)=>{const{payload:{element:i={},digitalContents:o=[]}={}}=e,{businessEventLogger:n}=s,a=t(),[r,d]=(0,Vt.ZP)({feature:"WISH_LIST",element:i,digitalContents:o},n,a);n.logBusinessEvent(r,d)};var Zt=s(56998),Mt=s(44864),Ot=s(27123);const Dt=({state:e,logger:t,elementId:s="",elementValue:i="",elementState:o,elementType:n="",digitalContents:a=[]})=>(0,Vt.ZP)({action:Mt.Z.click,feature:Ot.Z.wishList,element:{id:s,value:i,state:o,type:n},digitalContents:a},t,e);function bt(e,t){const{digitalContents:s,logger:i}=e.payload,[o,n]=((e,t,s)=>Dt({state:e,logger:t,elementId:"WishlistModal/MoveButton",elementValue:"Move",elementType:Zt.Z.button,digitalContents:s}))(t(),i,s);i.logBusinessEvent(o,n)}function Ct(e,t,s,{businessEventLogger:i}){const o=s(),{actionName:n=e.type,digitalContents:a=[]}=e.payload,[r,d]=((e,t,s)=>Dt({state:e,logger:t,elementId:"Wishlist/AddedSuccess/MoveItem/CreateNewList",elementValue:"Create new list",elementType:Zt.Z.button,digitalContents:s}))(o,i,a);i.logBusinessEvent(r,d)}const Wt=(e,t,i,o)=>{switch(e.type){case n:case U:return function(e,t,s){const{type:i,payload:o}=e;i===n&&o&&o.styleId&&o.consumerId&&t(w(o)),t(d(o))}(e,t);case r:return function({payload:e={}},t,s,i){const{fetch:o,logger:n}=i,a=s(),{environment:{isProduction:r,isDevelopment:d,isMobileDevice:l},shopper:{Id:u,ShopperToken:p},sellingEssentials:g,stylesById:h,addToWishlist:{consumerId:_,styleId:y}}=a,{includeShopperToken:w=!1,addedItem:I={},isConnected:f}=e,v=(0,vt.SO)(a);let E={};const R=`${v}shopper/v3/${u}/wish-lists`,T=d?"http://wallet-mockapi.nonprod.customeraccount.vip.nordstrom.com/api/getlists/999":R;if(f){var k;const e=g.consumers[`${_}-${y}`]||{},t=ft()(h,["data",y],""),s=e.selectedRMSSkuId,i=e.selectedSoldOutSku,o=s||i,n=!s,r=ft()(e,["filterSelections","color"],""),d=ft()(e,["filterSelections","size"],""),l=ft()(e,["filterSelections","width"],""),c=St.o$.makeGetMediaShotsByColor(r)(a,{consumerId:"wishlist-page",styleId:t?.id}),u=ft()(c,["0","imageUrls","mobile"],""),m=ft()(t,["skus","byId"],{});E={skuId:o,styleNumber:ft()(h,["data",y,"styleNumber"],""),styleId:y,color:{id:r,displayValue:ft()(t,["filters","color","byId",r,"displayValue"],"")},size:{id:d,displayValue:ft()(t,["filters","size","byId",d,"displayValue"],"")},width:{id:l,displayValue:ft()(t,["filters","width","byId",l,"displayValue"],"")},brandName:ft()(t,["brand","brandName"],""),totalQuantityAvailable:null!==(k=m[o]?.totalQuantityAvailable)&&void 0!==k?k:0,quantity:ft()(e,["quantity","value"],""),skuImage:u,price:ft()(t,["price","bySkuId",o],{}),isItemSoldOut:n}}else E={...I};const N={credentials:d?"same-origin":"include",method:"GET",headers:pt({isProd:r,shopperId:u,isMobile:l})};w&&(N.headers["x-shopper-token"]=`Bearer ${p}`);const L=new wt({logger:n},"get lists of wishlists");return L.request({options:N,requestInfo:{style:E.styleId,sku:E.skuId,quantity:E.quantity}},Et,u),o(T,N,{isProtected:!0}).then((e=>{const{status:s}=e,i=e.ok,o=401===s||403===s;if(L.status({status:s},Et,u),i)return e.json().then((e=>{L.success("get lists of wishlists successfull",Et,u),t(c({wishLists:e,orderItem:E}))}));if(!o)return e.json().then((e=>{Promise.reject({...e,status:s}).catch((e=>{L.error({error:e},"get lists of wishlists failed",Et,u),t(m({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))})).catch((e=>{L.error({error:e},"get lists of wishlists failed",Et,u),t(m({error:e})),t(S({selectedView:"SERVER_ERROR"}))}));{const e={status:s,message:"unauthorized"};t(S({selectedView:"SIGN_IN"})),t(m({error:e}))}})).catch((e=>{L.error({error:e},"get lists of wishlists failed",Et,u),t(m({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))}(e,t,i,o);case P:return function({payload:e={}},t,s,i){const{fetch:o,logger:n}=i,a=s(),{environment:{isProduction:r,isDevelopment:d,isMobileDevice:l},shopper:{Id:c,ShopperToken:u}}=a,{addItemPayload:{skuId:m,quantity:p,id:h},redirectionLocation:_,includeShopperToken:y=!1}=e,w=`${(0,vt.SO)(a)}shopper/v3/${c}/wish-lists/${h}`,I=d?"http://wallet-mockapi.nonprod.customeraccount.vip.nordstrom.com/api/wish-list/add":w,f={rmsSku:m,quantity:p},v={credentials:d?"same-origin":"include",method:"POST",headers:pt({isProd:r,shopperId:c,isMobile:l}),body:JSON.stringify(f)};y&&(v.headers["x-shopper-token"]=`Bearer ${u}`);const E=new wt({logger:n},"add item to wishlist");return o(I,v).then((e=>{const{status:s}=e,i=e.ok,o=401===s||403===s;if(E.status({status:s},Rt,c),i)E.success("added item to wishlist successfully",Rt,c),t(O({})),"wishlist"===_?window.location.href="/my-account/wishlist":t(g());else{if(!o)return e.json().then((e=>{Promise.reject({...e,status:s}).catch((e=>{E.error({error:e},"adding to wishlist failed",Rt,c),t(W({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))})).catch((e=>{E.error({error:e},"adding to wishlist failed",Rt,c),t(W({error:e})),t(S({selectedView:"SERVER_ERROR"}))}));{const e={status:s,message:"unauthorized"};t(S({selectedView:"SIGN_IN"})),t(W({error:e}))}}})).catch((e=>{E.error({error:e},"adding to wishlist failed",Rt,c),t(W({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))}(e,t,i,o);case A:return function({payload:e={}},t,s,i){const{fetch:o,logger:n}=i,a=s(),{environment:{isProduction:r,isDevelopment:d,isMobileDevice:l},shopper:{Id:c,ShopperToken:u}}=a,{addItemPayload:{skuId:m,quantity:p},redirectionLocation:h,createTextInput:_,includeShopperToken:y=!1}=e,w=`${(0,vt.SO)(a)}shopper/v3/${c}/wish-lists?wishListName=${_}`,I=d?"http://wallet-mockapi.nonprod.customeraccount.vip.nordstrom.com/api/wish-list/add":w,f={rmsSku:m,quantity:p},v={credentials:d?"same-origin":"include",method:"POST",headers:pt({isProd:r,shopperId:c,isMobile:l}),body:JSON.stringify(f)};y&&(v.headers["x-shopper-token"]=`Bearer ${u}`);const E=new wt({logger:n},"add item to new wishlist");return o(I,v).then((e=>{const{status:s}=e,i=e.ok,o=401===s||403===s;if(E.status({status:s},Tt,c),i)E.success("added item to new wishlist successfully",Tt,c),t(O({})),"wishlist"===h?window.location.href="/my-account/wishlist":t(g());else{if(!o)return e.json().then((e=>{switch(e.message){case"CONTAINS_SPECIAL_CHARACTERS":case"MAX_CHARACTERS":case"MISSING_NAME":E.error({error:{status:s,...e}},"adding to new wishlist failed",Tt,c),t(b({message:e.message}));break;default:return Promise.reject({status:s,...e}).catch((e=>{E.error({error:e},"adding to new wishlist failed",Tt,c),t(W({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))}})).catch((e=>{E.error({error:e},"adding to new wishlist failed",Tt,c),t(W({error:e})),t(S({selectedView:"SERVER_ERROR"}))}));{const e={status:s,message:"unauthorized"};t(S({selectedView:"SIGN_IN"})),t(W({error:e}))}}})).catch((e=>{E.error({error:e},"adding to new wishlist failed",Tt,c),t(W({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))}(e,t,i,o);case x:return function({payload:e={}},t,s,i){const{fetch:o,logger:n}=i,r=s(),{environment:{isProduction:d,isDevelopment:l,isMobileDevice:c},shopper:{Id:u,ShopperToken:m}}=r,{addedToWishlistSuccessMessage:p=(()=>{}),consumerId:g,mediaImage:h,quantity:_,skuId:y,styleId:w,includeShopperToken:I=!1,isConnected:f=!0,orderItem:v={}}=e,E={skuId:y,style:w,quantity:_,skuImage:h,...v},R=`${(0,vt.SO)(r)}shopper/v3/${u}/items`,T={rmsSku:y,quantity:_},k={credentials:l?"same-origin":"include",method:"POST",headers:pt({isProd:d,shopperId:u,isMobile:c}),body:JSON.stringify(T)};I&&(k.headers["x-shopper-token"]=`Bearer ${m}`);const N=new wt({logger:n},"add item to default wishlist");return o(R,k).then((e=>{const{status:s}=e,i=e.ok,o=401===s||403===s;if(N.status({status:s},Nt,u),c||t(a({consumerId:g,styleId:w,isConnected:f,includeShopperToken:I,addedItem:E})),i)return e.json().then((e=>{N.success("added item to default wishlist successfully",Nt,u),t(B({details:e,addedItem:E,selectedView:"ADDED_TO_WISHLIST"})),c&&t("CURATION"===g?a({consumerId:g,styleId:w,isConnected:f,includeShopperToken:I,addedItem:E}):(0,kt.ky)(p(e.wishListDetails.name)))}));if(o){const e={status:s,message:"unauthorized"};t(S({selectedView:"SIGN_IN"})),t(G({error:e}))}})).catch((e=>{N.error({error:e},"adding to default wishlist failed",Nt,u),t(G({error:e})),t(S({selectedView:"SERVER_ERROR"})),t(a())}))}(e,t,i,o);case J:return function({payload:e={}},t,s,i){const{fetch:o,logger:n}=i,a=s(),{environment:{isProduction:r,isDevelopment:d,isMobileDevice:l},shopper:{Id:c,ShopperToken:u},addToWishlist:{mostRecentlyUpdatedList:{id:m}}}=a,{moveItemToExistingListPayload:{itemToMove:{skuId:p,quantity:g},destinationList:h},includeShopperToken:_=!1}=e,{id:y}=h,w=(0,vt.SO)(a),I=d?"http://wallet-mockapi.nonprod.customeraccount.vip.nordstrom.com/api/wish-list/add":`${w}shopper/v3/${c}/wish-lists/${m}/items?action=move&destination=${y}`,f={rmsSku:p,quantity:g},v={credentials:d?"same-origin":"include",method:"POST",headers:pt({isProd:r,shopperId:c,isMobile:l}),body:JSON.stringify(f)};_&&(v.headers["x-shopper-token"]=`Bearer ${u}`);const E=new wt({logger:n},"move item to existing wishlist");return o(I,v).then((e=>{const{status:s}=e,i=e.ok;return E.status({status:s},Lt,c),i?e.json().then((e=>{E.success("moved item to existing wishlist successfully",Lt,c),t(X({destinationList:h,moveToWishlistResponse:e,skuId:p}))})):e.json().then((e=>{Promise.reject({...e,status:s}).catch((e=>{E.error({error:e},"moving item to existing wishlist failed",Lt,c),t(te({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))}))})).catch((e=>{E.error({error:e},"moving item to existing wishlist failed",Lt,c),t(te({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))}(e,t,i,o);case se:return function({payload:e={}},t,s,i){const{fetch:o,logger:n}=i,a=s(),{environment:{isProduction:r,isDevelopment:d,isMobileDevice:l},shopper:{Id:c,ShopperToken:u},addToWishlist:{mostRecentlyUpdatedList:{id:m}}}=a,{itemToMove:{skuId:p,quantity:g},createTextInput:h,includeShopperToken:_=!1}=e,y=(0,vt.SO)(a),w=d?"http://wallet-mockapi.nonprod.customeraccount.vip.nordstrom.com/api/wish-list/add":`${y}shopper/v3/${c}/wish-lists/${m}/items?action=moveNewList&name=${h}`,I={rmsSku:p,quantity:g},f={credentials:d?"same-origin":"include",method:"POST",headers:pt({isProd:r,shopperId:c,isMobile:l}),body:JSON.stringify(I)};_&&(f.headers["x-shopper-token"]=`Bearer ${u}`);const v=new wt({logger:n},"move item to new wishlist");return o(w,f).then((e=>{const{status:s}=e,i=e.ok;return v.status({status:s},Pt,c),i?e.json().then((e=>{v.success("moved item to new wishlist successfully",Pt,c),t(ne({createTextInput:h,moveToWishlistResponse:e,skuId:p}))})):e.json().then((e=>{switch(e.message){case"CONTAINS_SPECIAL_CHARACTERS":case"MAX_CHARACTERS":case"MISSING_NAME":v.error({error:{status:s,...e}},"moving to new wishlist failed",Pt,c),t(re({message:e.message}));break;default:return Promise.reject({status:s,...e}).catch((e=>{v.error({error:e},"moving to new wishlist failed",Pt,c),t(re({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))}}))})).catch((e=>{v.error({error:e},"moving item to new wishlist failed",Pt,c),t(re({error:e})),t(S({selectedView:"SERVER_ERROR"}))}))}(e,t,i,o);case he:return function({payload:e={}},t,i,o){const{fetch:n,logger:a}=o,r=i(),{environment:{isProduction:d,isDevelopment:l,isMobileDevice:c},shopper:{Id:u},addToWishlist:{emailPreferences:{isOptedIntoEmail:m}}}=r;if("boolean"===("boolean"==typeof m))return void t(we());const p=(0,vt.ZY)(r),g=s.g.location?s.g.location.origin:"",h=l?`${p}v1/preferences/email`:`${g}/shopper-preferences/api/v1/preferences/email`,_={method:"GET",headers:pt({isProd:d,shopperId:u,isMobile:c})},y=new wt({logger:a},"fetch email preferences");y.request({options:_},"preferences_checkbox",u),n(h,_).then((e=>{const{status:s}=e;y.status({status:s});const i=401===s||403===s;if(200===s)return e.json();if(i){const e={status:s,message:"unauthorized"};t(S({selectedView:"SIGN_IN"})),t(Se({error:e}))}else t(Se({}))})).then((e=>{const s=e.preference;s&&s.preferenceType?(y.success(),t(fe({response:e}))):t(Se({}))})).catch((e=>{y.error({error:e}),t(Se({error:e}))}))}(e,t,i,o);case le:return function(e,t,i,o){const{fetch:n,logger:a}=o,r=i(),{environment:{isProduction:d,isDevelopment:l,isMobileDevice:c},shopper:{Id:u}}=r,m=(0,vt.ZY)(i()),p=s.g.location?s.g.location.origin:"",g=new wt({logger:a});n(l?`${m}/v1/preferences/email`:`${p}/shopper-preferences/api/v1/preferences/email`,{method:"POST",headers:pt({isProd:d,shopperId:u,isMobile:c}),body:JSON.stringify({preferenceType:"Y"})}).then((e=>{const{status:s}=e;g.status({status:s});const i=401===s||403===s;if(204===s)t(me());else if(i){const e={status:s,message:"unauthorized"};t(S({selectedView:"SIGN_IN"})),t(ge({error:e}))}else t(ge())})).then((e=>{g.success(),t(me(e))})).catch((e=>{g.error({error:e}),t(ge({error:e}))}))}(0,t,i,o);case I:return At(e,i,o);case H:return function({payload:e={}},t,s){const{logger:i}=s,{shopper:{Id:o}}=t(),n=new wt({logger:i}),{componentName:a,message:r,uiPayload:d,type:l}=e;n.uiLog({shopperId:o,componentName:a,message:r,uiPayload:d,type:l})}(e,i,o);case Te:return bt(e,i);case ke:return Ct(e,0,i,o);default:return null}};it.h.add({addToWishlistTasks:Wt})}}]);