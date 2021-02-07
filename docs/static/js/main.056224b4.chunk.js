(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=a(2),d=a(19),u=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyS","KeyA","KeyD","Space"],p=a(9),l=function(e,t){var a=t.type,c=t.payload;if(!c)return e;switch(a){case"SET_SNAKE_BODY":return Object(i.a)(Object(i.a)({},e),{},{snakeBody:c.payload});case"SET_DIRECTION":return Object(i.a)(Object(i.a)({},e),{},{direction:c.payload});case"SET_IS_ACTIVE":return Object(i.a)(Object(i.a)({},e),{},{isActive:c.payload});case"SET_APPLE_CORDS":return Object(i.a)(Object(i.a)({},e),{},{appleCords:c.payload});case"SET_COUNT":return Object(i.a)(Object(i.a)({},e),{},{count:c.count});case"SET_MAX_COUNT":return Object(i.a)(Object(i.a)({},e),{},{maxCount:c.count});case"SET_NOT_NEW_GAME":return Object(i.a)(Object(i.a)({},e),{},{newGame:c.payload});default:return e}},j=Object(n.createContext)({}),f=function(e){var t=e.children,a=Object(n.useReducer)(l,{isActive:!1,newGame:!0,snakeBody:[{cordX:200,cordY:200}],speed:100,direction:"right",appleCords:null,count:0,maxCount:0}),r=Object(p.a)(a,2),o=r[0],s=r[1];return Object(c.jsx)(j.Provider,{value:{dispatch:s,snakeBody:o.snakeBody,setSnakeBody:function(e){if(s({type:"SET_SNAKE_BODY",payload:{payload:e}}),o.snakeBody.length!==e.length){var t=e.length-1;s({type:"SET_COUNT",payload:{count:t}}),t>o.maxCount&&s({type:"SET_MAX_COUNT",payload:{count:t}})}},speed:o.speed,direction:o.direction,setDirection:function(e){s({type:"SET_DIRECTION",payload:{payload:e}})},isActive:o.isActive,setIsActive:function(e){s({type:"SET_IS_ACTIVE",payload:{payload:e}}),o.newGame&&s({type:"SET_NOT_NEW_GAME",payload:{payload:!1}})},appleCords:o.appleCords,setAppleCords:function(e){s({type:"SET_APPLE_CORDS",payload:{payload:e}})},count:o.count,maxCount:o.maxCount,newGame:o.newGame},children:t})},y=(a(16),function(){var e=Object(n.useRef)(null),t=Object(n.useContext)(j),a=t.snakeBody,r=t.setSnakeBody,o=t.speed,s=t.direction,p=t.setDirection,l=t.isActive,f=t.setIsActive,y=t.appleCords,O=t.setAppleCords,b=t.newGame;Object(n.useEffect)((function(){l&&m()}),[a,l]),Object(n.useEffect)((function(){E()}),[]),Object(n.useEffect)((function(){return document.addEventListener("keydown",h),function(){document.removeEventListener("keydown",h)}}),[l,s]);var h=function(e){if(u.includes(e.code)){var t=["ArrowUp","KeyW"].some((function(t){return t===e.code})),a=["ArrowDown","KeyS"].some((function(t){return t===e.code})),c=["ArrowLeft","KeyA"].some((function(t){return t===e.code})),n=["ArrowRight","KeyD"].some((function(t){return t===e.code}));switch(!0){case t&&"down"!==s:p("up");break;case a&&"up"!==s:p("down");break;case c&&"right"!==s:p("left");break;case n&&"left"!==s:p("right");break;case"Space"===e.code:f(!l)}}},m=function(){if(e.current){var t=e.current,c=t.getContext("2d"),n=t.getContext("2d");c&&setTimeout((function(){t.width=800,t.height=800;var e=[],o=a.map((function(a,r){var o=Object(i.a)({},a),s=o.cordX,d=o.cordY,u=y.appleCordX,p=y.appleCordY,l=0===r,j=v(r,s,d,t),f=j.x,O=j.y;return o.cordX=f,o.cordY=O,f===u&&O===p&&(E(),e.push({cordX:f,cordY:O})),c.fillStyle=l?"#FFEB3B":"#009688",c.fillRect(f,O,20,20),n.fillStyle="red",n.fillRect(u,p,20,20),o})),s=o[0],d=s.cordX,u=s.cordY,p=!1;if(a.forEach((function(e,t){if(e.cordX===d&&e.cordY===u){var a=o.slice(0,t-1);r(a),p=!0}})),!p){var l=o.concat(e);r(l)}}),o)}},v=function(e,t,c,n){var r=20,o=t,i=c;return 0===e?("right"===s&&(o+=r),"left"===s&&(o-=r),"up"===s&&(i-=r),"down"===s&&(i+=r),o>=n.width&&(o=0),o<0&&(o=n.width-r),i>n.height-r&&(i=0),i<0&&(i=n.height-r)):(o=a[e-1].cordX,i=a[e-1].cordY),{x:o,y:i}},E=function(){var e=20*Math.floor(Math.floor(781*Math.random()+20)/20),t=20*Math.floor(Math.floor(781*Math.random()+20)/20);O({appleCordX:e,appleCordY:t})};return Object(c.jsxs)("section",{className:"snake-game_wrapper",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{children:Object(c.jsx)(d.a,{className:"snake-game_canvas-wrapper",children:Object(c.jsx)("canvas",{id:"responsive-canvas",ref:e})})}),!l&&!b&&Object(c.jsx)("div",{className:"snake-game_message snake-game_message-pause",children:"\u041f\u0410\u0423\u0417\u0410"}),!l&&b&&Object(c.jsx)("div",{className:"snake-game_message snake-game_message-start",children:"\u0414\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 Space!"})]})}),O=a(20),b=a(21),h=function(){var e=Object(n.useContext)(j),t=e.count,a=e.maxCount;return Object(c.jsxs)(O.a,{id:"simple-usage-app-bar",theme:"primary",children:[Object(c.jsxs)(b.a,{id:"simple-usage-title",className:"rmd-typography--capitalize",children:["\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: ",t]}),Object(c.jsxs)(b.a,{id:"simple-usage-title",className:"rmd-typography--capitalize",children:["\u0420\u0435\u043a\u043e\u0440\u0434: ",a]})]})},m=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)(h,{}),Object(c.jsx)(y,{})]})};a(17);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{children:Object(c.jsx)(m,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.056224b4.chunk.js.map