(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5893),i=n(7294),a=n(159),c="picture",u=a.e({space:"dvbnhc2k6rbm",accessToken:"ePy0oKVnOyru__0PuL0QEmIMbtQXNmD48wJmxq4ZWW8"}),s=(0,i.createContext)(),o=(0,i.createContext)({pictureData:null,setPictureData:function(){}}),l=n(4184),d=n.n(l),m=n(4824),f=n.n(m),_=function(e,t){return new Intl.DateTimeFormat("en",t).format(e)},x={yearOnly:function(e){return _(e,{year:"numeric"})},yearMonthOnly:function(e){return _(e,{year:"numeric",month:"numeric"})},fullDate:function(e){return _(e,{year:"numeric",month:"numeric",day:"numeric"})}},h="pixel";function p(e){var t=e.pictureData,n=(0,i.useContext)(o).setPictureData;return(0,r.jsxs)("div",{className:f().frame,children:[(0,r.jsx)("img",{src:t.thumbnail.fields.file.url,onClick:function(){var e=t.image.fields.file.url,r=t.imageType===h;n({url:e,isPixel:r})},className:d()(f().picture,t.imageType===h&&f().pixel)}),(0,r.jsx)("span",{className:f().date,children:x[t.dateFormat](new Date(t.creationDate))})]})}var v=n(3735),g=n.n(v);function j(e){var t=e.title,n=e.data.map((function(e){return(0,r.jsx)(p,{pictureData:e.fields},e.sys.id)}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:g().header,children:t}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:g().grid,children:n})]})}var y={pixel:"Pixel",photo:"Photography",digital:"Digital",traditional:"Traditional",other:"Misc."};function D(){var e=(0,i.useContext)(s),t=(0,i.useState)([]),n=t[0],a=t[1],u={};return(0,i.useEffect)((function(){e.getEntries({content_type:c}).then((function(e){console.log(e),e.items.forEach((function(e){var t=e.fields.imageType;t in u||(u[t]=[]),u[t].push(e)})),a(Object.keys(u).map((function(e){return(0,r.jsx)(j,{title:y[e]||y.other,data:u[e]},e)})))})).catch((function(e){return console.log(e)}))}),[e]),(0,r.jsx)("div",{children:n})}var N=n(2868),P=n.n(N);function E(){var e=(0,i.useContext)(o),t=e.pictureData,n=e.setPictureData;return(0,r.jsx)("div",{className:P().modal,onClick:function(){n(null)},children:(0,r.jsx)("img",{className:d()(P().image,t.isPixel&&P().pixel),src:t.url})})}var w=n(5323),C=n.n(w);function k(){var e=(0,i.useState)(null),t=e[0],n=e[1];return(0,r.jsxs)("div",{className:C().container,children:[(0,r.jsx)("h1",{className:C().header,children:"Stuff I made."}),(0,r.jsxs)(o.Provider,{value:{pictureData:t,setPictureData:n},children:[t?(0,r.jsx)(E,{}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(s.Provider,{value:u,children:(0,r.jsx)(D,{})})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5841)}])},4824:function(e){e.exports={frame:"frame_frame__2iA32",picture:"frame_picture__1Bsi0",pixel:"frame_pixel__1Si0C",date:"frame_date__3z8Tw"}},3735:function(e){e.exports={grid:"section_grid__-Q9tB",header:"section_header__3uOzo"}},2868:function(e){e.exports={modal:"modal_modal__2Z3RA",image:"modal_image__Ed0p8",pixel:"modal_pixel__2EdSA"}},5323:function(e){e.exports={container:"Home_container__1EcsU",header:"Home_header__3vlZW"}},9086:function(){},4654:function(){}},function(e){e.O(0,[912,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);