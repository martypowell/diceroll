(this.webpackJsonpdiceroll=this.webpackJsonpdiceroll||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(7),i=n.n(l),o=(n(13),n(1)),s=n(2),c=n(4),u=n(3),d=n(5),h="d",m="l",f="h",p=function(){function e(t,n){Object(o.a)(this,e),this.type=t,this.text=n}return Object(s.a)(e,[{key:"getNumber",value:function(){return 0!==this.type||this.discard?0:parseFloat(this.text)}}]),e}(),v=function(e){function t(e,n){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,0,n.toString()))).sides=e,r.discard=!1,r}return Object(d.a)(t,e),t}(p);function b(e){return new p(0,e.toString())}function E(e,t){function n(e){return t+e}function r(e,t){return new Error("At position ".concat(n(e),": ").concat(t))}function a(e){return e>="0"&&e<="9"}t=t||0;for(var l=[],i=0,o=function(t){var o,s=l.length>0?l[l.length-1]:null;if(i>0)")"===e[t]?i--:"("===e[t]&&i++,i>0&&(l[l.length-1].text+=e[t]);else if("+"===(o=e[t])||"-"===o||"*"===o||"/"===o||o===h||o===m||o===f){var c=function(n){return r(t,'Operator "'.concat(e[t],'" is missing a ').concat(n," value."))},u=[f,m,h].includes(e[t]);if(0===t||!function(e){return")"===e||a(e)}(e[t-1])){if(!u)throw c("left-hand");l.push(b(1))}if(t>0&&u){if(l.length>=2&&l.slice(l.length-2,l.length).some((function(e){return e.text===h})))throw r(t,'Invalid placement of operator "'.concat(e[t],'".'));if(l.length>=1&&2===l[l.length-1].type)throw r(t,"Calculating number of dice in a pool is not supported.")}if(t===e.length-1)throw c("right-hand");l.push(new p(1,e[t]))}else if(a(e[t]))s&&0===s.type?s.text+=e[t]:l.push(new p(0,e[t]));else{if("("!==e[t])throw r(t,'Unrecognized character "'.concat(e[t],'".'));if(t>0)if(a(e[t-1]))l.push(new p(1,"*"));else if(e[t-1]===h)throw r(t,"Calculating number of sides per die is not supported.");i++,l.push(new p(2,"")),l[l.length-1]._pos=n(t)+1}},s=0;s<e.length;s++)o(s);for(var c=0;c<l.length;c++)2===l[c].type&&(l[c]=E(l[c].text,l[c]._pos));return l}function g(e,t){var n=t||Math.random;return Math.floor(n()*e)+1}function y(e,t,n,r){return t===h?function(e,t,n){for(var r=[],a=0;a<e;a++)r.length>0&&r.push(new p(1,"+")),r.push(new v(t,g(t,n)));return r}(e,n,r):[m,f].includes(t)?function(e,t,n){function r(){throw new Error("Can only keep highest/lowest against a dice pool.")}Array.isArray(n)||r();var a=n.filter((function(e){return void 0!==e.sides}));0===a.length&&r(),a.forEach((function(e){return e.discard=!1}));var l=t===m?function(e,t){return e.getNumber()-t.getNumber()}:function(e,t){return t.getNumber()-e.getNumber()};return a.sort(l).slice(e).forEach((function(e){return e.discard=!0})),n}(e,t,n):b(function(){switch(t){case"+":return e+n;case"-":return e-n;case"*":return e*n;case"/":return e/n;default:return e}}())}function w(e,t,n){for(var r=[],a=0;a<e.length;a++){var l=e[a];if(l.type&&1===l.type&&t.includes(l.text)){var i=r[r.length-1].getNumber(),o=l.text[0],s=e[a+1],c=y(i,o,Array.isArray(s)?s:s.getNumber(),n);r.pop(),r.push(c),a++}else r.push(l)}return r}function k(e){for(var t=e.slice(),n=0;n<t.length;n++)Array.isArray(t[n])&&(t[n]=b(k(t[n])));return t=w(t,["*","/"]),(t=w(t,["+","-"])).length>=1?t[0].getNumber():0}var x={parseSymbols:E,calculate:function(e,t){var n=e.toLowerCase();!function(e){function t(t){var n=new RegExp("\\"+t,"g");return(e.match(n)||[]).length}var n=t("("),r=t(")");if(n!==r)throw new Error("Parentheses mismatch. Counted ".concat(n," opening and ").concat(r," closing."))}(n);var r=E(n);return{symbols:r=function e(t,n){return t=w(t=t.map((function(t){return Array.isArray(t)?e(t,n):t})),[h],n),t=w(t,[m,f])}(r,t),total:k(r)}}},C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).maxResults=50,n.state={formula:null,formulaError:null,results:[],showHelp:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.formulaError?a.a.createElement("div",{class:"alert alert-danger",role:"alert"},this.state.formulaError.message):"",n=this.state.showHelp?a.a.createElement("div",{class:"alert alert-info help"},a.a.createElement("h2",null,"Help"),a.a.createElement("p",null,a.a.createElement("small",null,a.a.createElement("em",null,"Click the ",a.a.createElement("strong",null,"Help")," button again to dismiss this info box."))),a.a.createElement("p",null,"Any positive integer number can be entered as part of the formula. Numbers are joined together by operators. Operators include:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"d"),": Roll dice. First number is the quantity of dice. Second number is the number of sides per die."),a.a.createElement("li",null,a.a.createElement("code",null,"*"),": Multiply the two numbers."),a.a.createElement("li",null,a.a.createElement("code",null,"/"),": Divide the first number by the second number."),a.a.createElement("li",null,a.a.createElement("code",null,"+"),": Add the two numbers."),a.a.createElement("li",null,a.a.createElement("code",null,"-"),": Subtract the second number from the first number.")),a.a.createElement("p",null,"Calculation honors traditional order of operations. Calculates dice rolls first, then expressions in parentheses, then multiplication and division, then addition and subtraction."),a.a.createElement("p",null,"Examples:",a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"2d6"),": Rolls 2 6-sided dice."),a.a.createElement("li",null,a.a.createElement("code",null,"1d20+5"),": Rolls a 20-sided die and adds 5."),a.a.createElement("li",null,a.a.createElement("code",null,"(4d8+2)/3"),": Rolls 4 8-sided dice and adds 2, then divides by 3."))),a.a.createElement("p",null,"Keep highest/lowest:",a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"3h4d6"),": Rolls 4 6-sided dice and only counts the 3 highest."),a.a.createElement("li",null,a.a.createElement("code",null,"1l2d20+3"),": Rolls 2 20-sided dice, only counts the lowest, and adds 3."))),a.a.createElement("div",{class:"container-fluid"},a.a.createElement("div",{class:"d-flex justify-content-end"},a.a.createElement("button",{class:"btn btn-info",type:"button",onClick:function(){return e.handleHelpClick()}},"Close")))):"",r="btn btn-outline-secondary"+(this.state.showHelp?" active":"");return a.a.createElement("div",{class:"container"},a.a.createElement("div",{class:"form-group"},a.a.createElement("label",{for:"rollFormula"},"Formula"),a.a.createElement("div",{class:"input-group"},a.a.createElement("input",{type:"text",class:"form-control",id:"rollFormula",onKeyUp:function(t){return e.handleFormulaKeyUp(t)},onChange:function(t){return e.setState({formula:t.target.value})}}),a.a.createElement("div",{class:"input-group-append"},a.a.createElement("button",{class:r,type:"button",onClick:function(){return e.handleHelpClick()}},"Help"),a.a.createElement("button",{class:"btn btn-primary",type:"submit",onClick:function(){return e.handleRollClick()}},"Roll")))),t,n,a.a.createElement("div",{class:"history"},this.renderHistory()))}},{key:"renderHistory",value:function(){var e=this.state.results.length-1,t=this;return this.state.results.map((function(n,r){var l=r===e?" latest":"",i="row"+l,o="result"+l;return a.a.createElement("div",{class:i},a.a.createElement("div",{class:"col-md-9"},t.renderSymbols(n.symbols)),a.a.createElement("div",{class:"col-md-3"},a.a.createElement("span",{class:o},n.total)))})).reverse()}},{key:"renderSymbols",value:function(e){var t=this;function n(e){var t="symbol"+(e.discard?" discarded":"")+(e.sides?" die "+function(e,t){var n=function(e){switch(e){case 2:return"coin";case 4:return"d4";case 6:return"d6";case 8:return"d8";case 10:return"d10";case 12:return"d12";case 20:return"d20";default:return null}}(e);return n?"".concat(n," ").concat(n,"-").concat(t):"coin"}(e.sides,e.text):"");return a.a.createElement("span",{class:t},e.text)}var r=n({text:"("}),l=n({text:")"});return e.map((function(i){if(Array.isArray(i)){var o=e.length>1&&(i.length>1||Array.isArray(i[0]));return a.a.createElement("span",null,o?r:"",t.renderSymbols(i),o?l:"")}return e.some((function(e){return e.sides}))&&"+"===i.text?"":n(i)}))}},{key:"handleFormulaKeyUp",value:function(e){13===e.keyCode&&this.handleRollClick()}},{key:"handleHelpClick",value:function(){this.setState({showHelp:!this.state.showHelp})}},{key:"handleRollClick",value:function(){try{var e=x.calculate(this.state.formula);this.addResult(e)}catch(t){this.setState({formulaError:t})}}},{key:"addResult",value:function(e){var t=this.state.results;t.push(e),t.length>this.maxResults&&t.splice(0,1),this.setState({results:t,formulaError:null})}}]),t}(a.a.Component);n(14);var A=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},a.a.createElement("a",{class:"navbar-brand",href:"."},a.a.createElement("img",{src:"image/icon.svg",width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"Diceroll"),a.a.createElement("a",{class:"nav-link p-2",href:"https://github.com/aaaantoine/diceroll",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub"},a.a.createElement("svg",{class:"navbar-nav-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 499.36",focusable:"false"},a.a.createElement("title",null,"GitHub"),a.a.createElement("path",{d:"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z",fill:"currentColor","fill-rule":"evenodd"})))),a.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2cd8f07b.chunk.js.map