webpackJsonp([89399205538831],{52:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(40),o=i(r);e.default=o.default},88:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=n(1),c=n(41),s=(i(c),n(43)),p=(i(s),n(67)),f=i(p),d=function(t){return function(e){var n=(0,u.createFactory)(e),i=function(t){function e(){var n,i,a;r(this,e);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=i=o(this,t.call.apply(t,[this].concat(u))),c.call(i),a=n,o(i,a)}return a(e,t),e.prototype.componentWillReceiveProps=function(){this.cachedHandlers={}},e.prototype.render=function(){return n(l({},this.props,this.handlers))},e}(u.Component),c=function(){var e=this;this.cachedHandlers={},this.handlers=(0,f.default)("function"==typeof t?t(this.props):t,function(t,n){return function(){var i=e.cachedHandlers[n];if(i)return i.apply(void 0,arguments);var r=t(e.props);return e.cachedHandlers[n]=r,r.apply(void 0,arguments)}})};return i}};e.default=d},53:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=n(1),c=n(41),s=(i(c),n(43)),p=(i(s),n(52)),f=i(p),d=n(67),m=i(d),g=function(t,e){return function(n){var i=(0,u.createFactory)(n),c=function(t){function e(){var n,i,a;r(this,e);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=i=o(this,t.call.apply(t,[this].concat(u))),s.call(i),a=n,o(i,a)}return a(e,t),e.prototype.shouldComponentUpdate=function(t,e){var n=t!==this.props,i=!(0,f.default)(e,this.state);return n||i},e.prototype.render=function(){return i(l({},this.props,this.state,this.stateUpdaters))},e}(u.Component),s=function(){var n=this;this.state="function"==typeof t?t(this.props):t,this.stateUpdaters=(0,m.default)(e,function(t){return function(e){for(var i=arguments.length,r=Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];e&&"function"==typeof e.persist&&e.persist(),n.setState(function(n,i){return t(n,i).apply(void 0,[e].concat(r))})}})};return c}};e.default=g},414:function(t,e){},731:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c=n(1),s=i(c),p=n(2),f=i(p),d="undefined"!=typeof window,m=d&&window.navigator.userAgent.toLowerCase(),g=m&&m.indexOf("msie 9.0")>0,h=function(t){var e=("enter"===t.animationType?t.enterAnimation:t.leaveAnimation)||t.animation,n="rodal-dialog rodal-"+e+"-"+t.animationType,i=t.showCloseButton?s.default.createElement("span",{className:"rodal-close",onClick:t.onClose}):null,r=t.width,o=t.height,a=t.measure,l=t.duration,c=t.customStyles,p={width:r+a,height:o+a,animationDuration:l+"ms",WebkitAnimationDuration:l+"ms"},f=u({},p,c);return s.default.createElement("div",{style:f,className:n},t.children,i)},y=function(t){function e(){var t,n,i,a;r(this,e);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.state={isShow:!1,animationType:"leave"},i.onKeyUp=function(t){i.props.closeOnEsc&&27===t.keyCode&&i.props.onClose()},i.animationEnd=function(t){if("leave"===i.state.animationType?i.setState({isShow:!1}):i.props.closeOnEsc&&i.el.focus(),t.target===i.el){var e=i.props.onAnimationEnd;e&&e()}},a=n,o(i,a)}return a(e,t),l(e,[{key:"componentDidMount",value:function(){this.props.visible&&this.enter()}},{key:"componentWillReceiveProps",value:function(t){!this.props.visible&&t.visible?this.enter():this.props.visible&&!t.visible&&this.leave()}},{key:"enter",value:function(){this.setState({isShow:!0,animationType:"enter"})}},{key:"leave",value:function(){this.setState(g?{isShow:!1}:{animationType:"leave"})}},{key:"render",value:function(){var t=this,e=this.props,n=this.state,i=e.closeMaskOnClick?e.onClose:null,r=e.showMask?s.default.createElement("div",{className:"rodal-mask",style:e.customMaskStyles,onClick:i}):null,o={display:n.isShow?"":"none",animationDuration:e.duration+"ms",WebkitAnimationDuration:e.duration+"ms"};return s.default.createElement("div",{style:o,className:"rodal rodal-fade-"+n.animationType+" "+e.className,onAnimationEnd:this.animationEnd,tabIndex:"-1",ref:function(e){t.el=e},onKeyUp:this.onKeyUp},r,s.default.createElement(h,u({},e,{animationType:n.animationType}),e.children))}}]),e}(s.default.Component);y.propTypes={width:f.default.number,height:f.default.number,measure:f.default.string,visible:f.default.bool,showMask:f.default.bool,closeOnEsc:f.default.bool,closeMaskOnClick:f.default.bool,showCloseButton:f.default.bool,animation:f.default.string,enterAnimation:f.default.string,leaveAnimation:f.default.string,duration:f.default.number,className:f.default.string,customStyles:f.default.object,customMaskStyles:f.default.object,onClose:f.default.func.isRequired,onAnimationEnd:f.default.func},y.defaultProps={width:400,height:240,measure:"px",visible:!1,showMask:!0,closeOnEsc:!1,closeMaskOnClick:!0,showCloseButton:!0,animation:"zoom",enterAnimation:"",leaveAnimation:"",duration:300,className:"",customStyles:{},customMaskStyles:{}},e.default=y},746:function(t,e,n){t.exports=n.p+"static/海鮮梅花豬肉鍋.5e5024fb.jpg"},747:function(t,e,n){t.exports=n.p+"static/海鮮梅花豬肉鍋海報.c844b592.jpg"},748:function(t,e,n){t.exports=n.p+"static/海鮮雪花牛肉鍋海報.8f75ea15.jpg"},749:function(t,e,n){t.exports=n.p+"static/紅燒羊肉爐海報.e49cff6a.jpg"},750:function(t,e,n){t.exports=n.p+"static/麻辣海鮮梅花豬肉鍋海報.55c856cb.jpg"},751:function(t,e,n){t.exports=n.p+"static/麻辣海鮮雪花牛肉鍋海報.08760bb9.jpg"},753:function(t,e,n){t.exports=n.p+"static/南瓜鍋.742ab691.jpg"},754:function(t,e,n){t.exports=n.p+"static/咖哩鍋.f334e3a7.jpg"},755:function(t,e,n){t.exports=n.p+"static/四川麻辣鍋.26b8102e.jpg"},756:function(t,e,n){t.exports=n.p+"static/培根牛肉鍋.df072d16.jpg"},757:function(t,e,n){t.exports=n.p+"static/大腸臭臭鍋.e3fcb3f6.jpg"},758:function(t,e,n){t.exports=n.p+"static/沙茶豬羊肉鍋.2beaecb6.jpg"},759:function(t,e,n){t.exports=n.p+"static/泡菜鍋.dcfbe8f8.jpg"},760:function(t,e,n){t.exports=n.p+"static/泰式酸辣鍋.cbf10028.jpg"},761:function(t,e,n){t.exports=n.p+"static/海鮮豆腐鍋.b4a258f4.jpg"},762:function(t,e,n){t.exports=n.p+"static/海鮮魚片鍋.a5a82f95.jpg"},763:function(t,e,n){t.exports=n.p+"static/牛奶起司鍋.79d9c117.jpg"},764:function(t,e,n){t.exports=n.p+"static/番茄鍋.f97642f4.jpg"},765:function(t,e,n){t.exports=n.p+"static/素食番茄鍋.976a04aa.jpg"},766:function(t,e,n){t.exports=n.p+"static/素食鍋.f5671e6b.jpg"},767:function(t,e,n){t.exports=n.p+"static/羊肉爐鍋(冬季限定).07166429.jpg"},768:function(t,e,n){t.exports=n.p+"static/蔬菜香菇鍋.8e53cff9.jpg"},769:function(t,e,n){t.exports=n.p+"static/藥膳羊豬肉鍋.72e2a56f.jpg"},770:function(t,e,n){t.exports=n.p+"static/銅盤烤肉套餐.4acbbf58.jpg"},771:function(t,e,n){t.exports=n.p+"static/雪花牛肉鍋.43685479.jpg"},772:function(t,e,n){t.exports=n.p+"static/霜降豬肉鍋.514bfcad.jpg"},773:function(t,e,n){t.exports=n.p+"static/鴨血鍋.b3083155.jpg"},307:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){return t.raw=e,t}e.__esModule=!0;var o=r(["\n  border-top: 1px solid orange;\n  padding: 16px 8px;\n  color: gray;\n  background-color: white;\n  margin: 0 auto;\n  margin: 8px 4px;\n  position: relative;\n  width: 210px;\n\n  ","\n"],["\n  border-top: 1px solid orange;\n  padding: 16px 8px;\n  color: gray;\n  background-color: white;\n  margin: 0 auto;\n  margin: 8px 4px;\n  position: relative;\n  width: 210px;\n\n  ","\n"]),a=r(["\n    width: 80%;\n  "],["\n    width: 80%;\n  "]),l=r(["\n  max-height: 150px;\n  overflow: hidden;\n  padding: 16px;\n"],["\n  max-height: 150px;\n  overflow: hidden;\n  padding: 16px;\n"]),u=r(["\n  width: 100%\n"],["\n  width: 100%\n"]),c=r(["\n  padding: 16px 0;\n  text-align: center;\n  flex: 1;\n\n  > .title {\n    margin: 0;\n  }\n\n  > .subtitle {\n    margin: 0;\n    padding-top: 8px;\n  }\n"],["\n  padding: 16px 0;\n  text-align: center;\n  flex: 1;\n\n  > .title {\n    margin: 0;\n  }\n\n  > .subtitle {\n    margin: 0;\n    padding-top: 8px;\n  }\n"]),s=r(["\n  position: absolute;\n  top: 0;\n  right: -5px;\n  color: white;\n  background-color: orange;\n  border-radius: 16px;\n  font-size: 24px;\n  padding: 8px 12px;\n"],["\n  position: absolute;\n  top: 0;\n  right: -5px;\n  color: white;\n  background-color: orange;\n  border-radius: 16px;\n  font-size: 24px;\n  padding: 8px 12px;\n"]),p=n(1),f=i(p),d=n(2),m=i(d),g=n(7),h=i(g),y=n(54),b=i(y),v=n(44),x=i(v),w=n(88),j=i(w),O=h.default.div(o,x.default.mobile(a)),S=h.default.div(l),_=h.default.img(u),E=h.default.div(c),k=h.default.div(s),M=function(t){var e=t.imgSrc,n=t.title,i=t.subtitle,r=(t.price,t.renderPriceTag),o=t.btnText,a=t.btnOnClick;return f.default.createElement(O,null,f.default.createElement(k,null,r()),f.default.createElement(S,null,f.default.createElement(_,{src:e,alt:"頂豐小火鍋no1"})),f.default.createElement(E,null,f.default.createElement("h3",{className:"title"},n),f.default.createElement("p",{className:"subtitle"},i),o&&a&&f.default.createElement("div",null,f.default.createElement(b.default,{onClick:a},o))))};M.propTypes={price:m.default.oneOfType([m.default.number,m.default.string]).isRequired,title:m.default.string.isRequired,subtitle:m.default.string,imgSrc:m.default.string.isRequired,renderPriceTag:m.default.func.isRequired,btnText:m.default.string,btnOnClick:m.default.func},e.default=(0,j.default)({renderPriceTag:function(t){var e=t.price;return function(){return"string"==typeof e?e:"$"+e}}})(M),t.exports=e.default},308:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}e.__esModule=!0;var o=n(1),a=i(o),l=n(31),u=(i(l),n(88)),c=(i(u),n(731)),s=i(c);n(414);var p=function(t){var e=t.children,n=(t.title,r(t,["children","title"]));return a.default.createElement(s.default,n,e)};e.default=p,t.exports=e.default},44:function(t,e,n){"use strict";function i(t,e){return t.raw=e,t}e.__esModule=!0;var r=i(["\n    @media only screen and (max-width: 510px) {\n      ","\n    }\n  "],["\n    @media only screen and (max-width: 510px) {\n      ","\n    }\n  "]),o=i(["\n    @media only screen and (min-width: 511px) and (max-width: 768px) {\n      ","\n    }\n  "],["\n    @media only screen and (min-width: 511px) and (max-width: 768px) {\n      ","\n    }\n  "]),a=i(["\n    @media only screen and (min-width: 769px) {\n      ","\n    }\n  "],["\n    @media only screen and (min-width: 769px) {\n      ","\n    }\n  "]),l=n(7),u={mobile:function(){return(0,l.css)(r,l.css.apply(void 0,arguments))},tablet:function(){return(0,l.css)(o,l.css.apply(void 0,arguments))},desktop:function(){return(0,l.css)(a,l.css.apply(void 0,arguments))}};e.default=u,t.exports=e.default},319:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){return t.raw=e,t}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=r(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]),l=n(1),u=i(l),c=n(2),s=i(c),p=n(307),f=i(p),d=n(7),m=i(d),g=n(31),h=i(g),y=n(53),b=i(y),v=n(42),x=i(v),w=n(88),j=i(w),O=n(308),S=i(O),_=n(753),E=i(_),k=n(754),M=i(k),C=n(755),T=i(C),P=n(756),A=i(P),R=n(757),N=i(R),q=n(758),U=i(q),D=n(759),B=i(D),H=n(760),W=i(H),z=n(761),I=i(z),K=n(762),F=i(K),J=n(763),L=i(J),$=n(764),G=i($),Q=n(765),V=i(Q),X=n(766),Y=i(X),Z=n(767),tt=(i(Z),n(768)),et=i(tt),nt=n(769),it=i(nt),rt=n(770),ot=(i(rt),n(771)),at=i(ot),lt=n(772),ut=i(lt),ct=n(773),st=i(ct),pt=n(746),ft=i(pt),dt=n(747),mt=i(dt),gt=n(748),ht=i(gt),yt=n(750),bt=i(yt),vt=n(751),xt=i(vt),wt=n(749),jt=i(wt),Ot=m.default.div(a),St=function(t){var e=t.items,n=t.isModalOpen,i=t.toggleModal,r=t.renderProMenuContent;return u.default.createElement(Ot,{width:"15%"},u.default.createElement(S.default,{visible:n,width:80,height:80,measure:"%",onClose:i,closeMaskOnClick:!1},r()),e.map(function(t){return u.default.createElement(f.default,o({key:t.title,className:"menu-item"},t))}))};St.propTypes={renderProMenuContent:s.default.func.isRequired,toggleModal:s.default.func.isRequired,isModalOpen:s.default.bool.isRequired,items:s.default.arrayOf(s.default.object)},St.defaultProps={items:[]},e.default=(0,h.default)((0,b.default)({isModalOpen:!1},{toggleModal:function(t){var e=t.isModalOpen;return function(){return{isModalOpen:!e}}}}),(0,x.default)(function(t){var e=t.toggleModal;return{premiumItems:[{imgSrc:mt.default,title:"海鮮梅花豬肉鍋海報"},{imgSrc:ht.default,title:"海鮮雪花牛肉鍋海報"},{imgSrc:bt.default,title:"麻辣海鮮梅花豬肉鍋海報"},{imgSrc:xt.default,title:"麻辣海鮮雪花牛肉鍋海報"},{imgSrc:jt.default,title:"紅燒羊肉爐海報"}],items:[{imgSrc:ft.default,title:"豪華年菜套餐",price:"3-4 人份",subtitle:"優質重量級海鮮、牛肉、豬肉等 3-4 人豪華套餐附湯包",btnText:"閱讀更多",btnOnClick:e},{imgSrc:M.default,title:"銅盤烤肉套餐",price:290,subtitle:"牛、豬、羊 任選兩樣, 附白飯、泡菜、生菜"},{imgSrc:T.default,title:"羊肉爐鍋(冬季限定)",price:210},{imgSrc:I.default,title:"海鮮豆腐鍋",price:130},{imgSrc:B.default,title:"泡菜鍋",price:140},{imgSrc:Y.default,title:"素食鍋",price:130},{imgSrc:st.default,title:"鴨血鍋",price:140},{imgSrc:it.default,title:"藥膳羊(豬)肉鍋",price:140},{imgSrc:ut.default,title:"霜降豬肉鍋",price:170},{imgSrc:at.default,title:"雪花牛肉鍋",price:170},{imgSrc:V.default,title:"素食番茄鍋",price:140},{imgSrc:et.default,title:"蔬菜香菇鍋",price:150},{imgSrc:F.default,title:"海鮮魚片鍋",price:150},{imgSrc:G.default,title:"番茄鍋",price:150},{imgSrc:A.default,title:"培根牛肉鍋",price:150},{imgSrc:W.default,title:"泰式酸辣鍋",price:150},{imgSrc:L.default,title:"牛奶起司鍋",price:170},{imgSrc:U.default,title:"沙茶豬(羊)肉鍋",price:140},{imgSrc:M.default,title:"咖哩鍋",price:140},{imgSrc:E.default,title:"南瓜鍋",price:150},{imgSrc:N.default,title:"大腸臭臭鍋",price:130}]}}),(0,j.default)({renderProMenuContent:function(t){var e=t.premiumItems;return function(){return u.default.createElement("div",null,u.default.createElement("div",{style:{height:34,paddingBottom:8}},"豪華年菜套餐"),u.default.createElement("div",{style:{overflow:"scroll",height:"70vh"}},e.map(function(t){return u.default.createElement("div",{key:t.title},u.default.createElement("img",{src:t.imgSrc,alt:t.title}))})))}}}))(St),t.exports=e.default}});
//# sourceMappingURL=component---src-pages-menu-js-2aa594ce602046c9d283.js.map