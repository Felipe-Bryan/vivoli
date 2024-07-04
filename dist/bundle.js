(()=>{"use strict";var a={726:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.familyItem=void 0,i.familyItem=function(a){return`\n<div class="accordion-item">\n    <h2 class="accordion-header">\n    <button\n        class="accordion-button collapsed"\n        type="button"\n        data-bs-toggle="collapse"\n        data-bs-target="#family${a.id}"\n        aria-expanded="false"\n        aria-controls="family${a.id}">\n        ${a.nome}\n    </button>\n    </h2>\n    <div id="family${a.id}" class="accordion-collapse collapse" data-bs-parent="#content">\n        <div class="accordion-body p-0 pt-1 family" id="${a.id}Items"></div>\n    </div>\n</div>`}},389:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.productCartItem=void 0;const e=t(724);i.productCartItem=function(a){let i=0;i=!0===a.caixa?a.qt*a.caixaQt*a.custo:a.qt*a.custo;let t=`\n<div class="row border-bottom border-top border-black bg-light">\n    <div class="m-0 p-0 col-7">${a.nome}</div>`;return!0===a.caixa?t+=`<div class="m-0 p-0 col-2 text-center">${a.qt} (${a.qt*a.caixaQt})</div>`:t+=`<div class="m-0 p-0 col-2 text-center">${a.qt}</div>`,t+=`<div class="m-0 p-0 col-3 text-center">${(0,e.cashInfo)(i)}</div>\n\n    <div class="col d-flex justify-content-end mb-1" id="productBtns">\n        <button type="button" class="btn btn-danger p-0 m-0 mx-2 px-2">\n        <i class="bi bi-dash"></i>\n        </button>\n        <button type="button" class="btn btn-success p-0 m-0 mx-2 px-2">\n        <i class="bi bi-plus"></i>\n        </button>\n    </div>\n</div>`,t}},581:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.productItem=void 0;const e=t(674),o=t(150);i.productItem=function(a){let i=`\n<div class="container-fluid border-bottom border-2 mb-2">\n    <div class="row">\n        <div class="col p-0 fw-semibold fst-italic">${a.nome}</div>\n    </div>\n\n    <div class="row">\n        <div class="p-0 m-0 col-2">Custo</div>\n        <div class="p-0 m-0 col-3 text-center">R$ ${a.custo}</div>\n        <div class="p-0 m-0 col-3">Sugerido</div>\n        <div class="p-0 m-0 col-4 text-end">R$ ${a.sugestao.toFixed(2)} (${(0,o.calcPercent)(a)}%)</div>\n    </div>`;return!0===a.caixa&&(i+=`\n    <div class="row">\n        <div class="p-0 m-0 col-6">Caixa com: <span>${a.caixaQt}</span></div>\n        <div class="p-0 m-0 col-6 text-end">R$ <span id="valorCaixa">${(0,e.calcBoxValue)(a).toFixed(2)}</span></div>\n      </div>`),i+=`\n      <div class="row">\n        <div class="p-0 m-0 col-9 d-flex justify-content-end pe-2">Total Item:</div>\n        <div class="p-0 m-0 col-3 text-end"><span id="total${a.id}">R$ 0,00</span></div>\n      </div>  \n  \n      <div class="row d-flex align-items-center justify-content-end my-1">\n        <div class="col-3 col-sm-1 d-flex align-items-center justify-content-center">\n          <button type="button" class="btn btn-danger removeBtn" id="remove${a.id}"><i class="bi bi-dash"></i></button>\n        </div>\n\n        <div class="col-3 col-sm-1 text-center" id="orderQt${a.id}">${a.qt}</div>\n\n        <div class="col-3 col-sm-1 d-flex align-items-center justify-content-center">\n          <button type="button" class="btn btn-success addBtn" id="add${a.id}"><i class="bi bi-plus"></i></button>\n        </div>\n    </div>\n</div>`,i}},927:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.familias=void 0,i.familias=[{id:"1",nome:"Le petit"},{id:"6",nome:"Di Drill"},{id:"9",nome:"Di Fruti"},{id:"14",nome:"Di Leiti"},{id:"21",nome:"Especialité"},{id:"27",nome:"Paletas Mexicanas"},{id:"30",nome:"Extrusado Absoluto"},{id:"37",nome:"Extrusado Classic"},{id:"43",nome:"Di Açaí"},{id:"45",nome:"Extrusados Premiatto"},{id:"48",nome:"Mini Extrusado"},{id:"51",nome:"Di Infantil"},{id:"53",nome:"Cones Divine"},{id:"59",nome:"Sundae"},{id:"62",nome:"Copão 400Ml"},{id:"68",nome:"Copo 400ml Splendido"},{id:"71",nome:"Potes 1,0 Litros Gormet"},{id:"74",nome:"Potes 1,5 Litros Sorbet"},{id:"78",nome:"Potes 1,8 Litros"},{id:"85",nome:"Potes 2,0 Litros"}]},804:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.produtos=void 0,i.produtos=[{id:"2",nome:"Picolé Le Petit Tuti Frutti",custo:1.39,caixaQt:36,sugestao:2,caixa:!0,familia:"1"},{id:"3",nome:"Picolé Le Petit Groselha",custo:1.39,caixaQt:36,sugestao:2,caixa:!0,familia:"1"},{id:"4",nome:"Picolé Le Petit Chocolate",custo:1.39,caixaQt:36,sugestao:2,caixa:!0,familia:"1"},{id:"5",nome:"Picolé Le Petit Chocolate Branco",custo:1.39,caixaQt:36,sugestao:2,caixa:!0,familia:"1"},{id:"7",nome:"Picolé Di Drill Churros Brigadeiro",custo:2.09,caixaQt:24,sugestao:3,caixa:!0,familia:"6"},{id:"8",nome:"Picolé Di Drill Churros Doce de leite",custo:2.09,caixaQt:24,sugestao:3,caixa:!0,familia:"6"},{id:"10",nome:"Picolé Di Fruta Abacaxi",custo:1.74,caixaQt:28,sugestao:2.5,caixa:!0,familia:"9"},{id:"11",nome:"Picolé Di FrutaLimão",custo:1.74,caixaQt:28,sugestao:2.5,caixa:!0,familia:"9"},{id:"12",nome:"Picolé Di Fruta Maracujá",custo:1.74,caixaQt:28,sugestao:2.5,caixa:!0,familia:"9"},{id:"13",nome:"Picolé Di Fruta Uva",custo:1.74,caixaQt:28,sugestao:2.5,caixa:!0,familia:"9"},{id:"15",nome:"Picolé Di Leite Chocolate",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"14"},{id:"16",nome:"Picolé Di Leite Coco",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"14"},{id:"17",nome:"Picolé Di Leite Leite Condensado",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"14"},{id:"18",nome:"Picolé Di Leite Limonada Suiça",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"14"},{id:"19",nome:"Picolé Di Leite Milho Verde",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"14"},{id:"20",nome:"Picolé Di Morango Morango",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"14"},{id:"22",nome:"Picolé Especialité Morango recheado",custo:4.23,caixaQt:26,sugestao:6,caixa:!0,familia:"21"},{id:"23",nome:"Picolé Especialité Brigadeiro Chocolate",custo:4.23,caixaQt:24,sugestao:6,caixa:!0,familia:"21"},{id:"24",nome:"Picolé Esopecialité Brigadeiro Morango",custo:4.23,caixaQt:24,sugestao:6,caixa:!0,familia:"21"},{id:"25",nome:"Picolé Especialité Tablets",custo:4.23,caixaQt:26,sugestao:6,caixa:!0,familia:"21"},{id:"26",nome:"Picolé Especialité Vivotello",custo:4.23,caixaQt:26,sugestao:6,caixa:!0,familia:"21"},{id:"28",nome:"Paleta Leite Trufado",custo:5.68,caixaQt:14,sugestao:8,caixa:!0,familia:"27"},{id:"29",nome:"Paleta Morango c/ Leite Condensado",custo:5.68,caixaQt:14,sugestao:8,caixa:!0,familia:"27"},{id:"31",nome:"Extrusado Absoluto Avelã",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"30"},{id:"32",nome:"Extrusado Absoluto Avelã ao Leite",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"30"},{id:"33",nome:"Extrusado Absoluto Chocolate Trufado",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"30"},{id:"34",nome:"Extrusado Absoluto Iogurte c/ Amarena",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"30"},{id:"35",nome:"Extrusado Absoluto Petit Gateau",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"30"},{id:"36",nome:"Extrusado Absoluto Torta de Limão",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"30"},{id:"38",nome:"Extrusado Classic Cookies",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"37"},{id:"39",nome:"Extrusado Classic Chococolate",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"37"},{id:"40",nome:"Extrusado Classic Chocolate Branco",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"37"},{id:"41",nome:"Extrusado Classic Chocolate Meio Amargo",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"37"},{id:"42",nome:"Extrusado Classic Vivolak",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"37"},{id:"44",nome:"Extrusado Di Açaí C/ Guaraná",custo:3.51,caixaQt:20,sugestao:5,caixa:!0,familia:"43"},{id:"46",nome:"Extrusado Premiatto Napolitano",custo:3.51,caixaQt:20,sugestao:5,caixa:!0,familia:"45"},{id:"47",nome:"Extrusado Premiatto Vivotella",custo:3.51,caixaQt:20,sugestao:5,caixa:!0,familia:"45"},{id:"49",nome:"Extrusado Mini Pé Moleque Preto",custo:3.87,caixaQt:20,sugestao:5.5,caixa:!0,familia:"48"},{id:"50",nome:"Extrusado Mini Skimo",custo:3.87,caixaQt:20,sugestao:5.5,caixa:!0,familia:"48"},{id:"52",nome:"Extrusado Di infantil Algodão Doce",custo:2.63,caixaQt:20,sugestao:3.75,caixa:!0,familia:"51"},{id:"54",nome:"Cone Divine Biscoito",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"53"},{id:"55",nome:"Cone Divine Black and White",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"53"},{id:"56",nome:"Cone Divine Brigadeiro",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"53"},{id:"57",nome:"Cone Divine Crocante",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"53"},{id:"58",nome:"Cone Divine Leite Trufado",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"53"},{id:"60",nome:"Sundae Nata/Chocolate",custo:4.11,caixaQt:8,sugestao:5.5,caixa:!0,familia:"59"},{id:"61",nome:"Sundae Nata/Morango",custo:4.11,caixaQt:8,sugestao:5.5,caixa:!0,familia:"59"},{id:"63",nome:"Copo 400ml Abacaxi ao Vinho",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"62"},{id:"64",nome:"Copo 400ml Bombom",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"62"},{id:"65",nome:"Copo 400ml Brigadeiro",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"62"},{id:"66",nome:"Copo 400ml Flocos",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"62"},{id:"67",nome:"Copo 400ml Napolitano",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"62"},{id:"69",nome:"Splendido Nata/Chocolate",custo:6.28,caixaQt:12,sugestao:8.5,caixa:!0,familia:"68"},{id:"70",nome:"Splendido Nata/Morango",custo:6.28,caixaQt:12,sugestao:8.5,caixa:!0,familia:"68"},{id:"72",nome:"Pote 1,020lts Açaí c/ Leitinho",custo:22.78,caixaQt:6,sugestao:29,caixa:!0,familia:"71"},{id:"73",nome:"Pote 1,020lts Açaí c/ Trufado",custo:22.78,caixaQt:6,sugestao:29,caixa:!0,familia:"71"},{id:"75",nome:"PT 1,5lts Frutas Vermelhas",custo:14.76,caixaQt:4,sugestao:20,caixa:!0,familia:"74"},{id:"76",nome:"PT 1,5lts Graviola",custo:14.76,caixaQt:4,sugestao:20,caixa:!0,familia:"74"},{id:"77",nome:"PT 1,5lts Manga",custo:14.76,caixaQt:4,sugestao:20,caixa:!0,familia:"74"},{id:"79",nome:"PT 1,8 LTS Splendido Abacaxi c/ Abacaxi",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"78"},{id:"80",nome:"PT 1,8 LTS Splendido Coco c/ Brigadeiro",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"78"},{id:"81",nome:"PT 1,8 LTS Splendido Choc branco/ choc ao leite",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"78"},{id:"82",nome:"PT 1,8LTS Splendido Iogurte / Frutas vermelhas",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"78"},{id:"83",nome:"PT 1,8 LTS Splendido Leite Trufado",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"78"},{id:"84",nome:"PT 1,8 LTS Splendido Morango ao Leite",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"78"},{id:"86",nome:"PT 2LTS Abacaxi ao Vinho",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"},{id:"87",nome:"PT 2LTS Bombom",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"},{id:"88",nome:"PT 2LTS Brigadeiro",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"},{id:"89",nome:"PT 2LTS Chocolate",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"},{id:"90",nome:"PT 2LTS Creme",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"},{id:"91",nome:"PT 2LTS Flocos",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"},{id:"92",nome:"PT 2LTS Grego Tradicional",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"},{id:"93",nome:"PT 2LTS Morango",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"},{id:"94",nome:"PT 2LTS Napolitano",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"85"}]},428:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.addOrder=void 0;const e=t(409),o=t(634),c=t(943);i.addOrder=function(a){const i=(0,e.getStorageData)("order"),t=document.getElementById(`orderQt${a}`),s=i.find((i=>i.id===a)),n=i.findIndex((i=>i.id===a));s&&(s.qt++,t.innerHTML=String(s.qt),i[n]=s,(0,o.calcItem)(s),(0,c.calcTotalvalueOrders)(i)),(0,e.saveToStorage)("order",i)}},634:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.calcItem=void 0,i.calcItem=function(a){let i=0;const t=document.getElementById(`total${a.id}`);i=!0===a.caixa?a.qt*a.custo*a.caixaQt:a.qt*a.custo,t.innerHTML=`R$ ${i.toLocaleString("pt-BR",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2})}`}},943:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.calcTotalvalueOrders=void 0;const e=t(724);i.calcTotalvalueOrders=function(a){const i=document.getElementById("totalOrderValue");let t=0;return a.forEach((a=>{!0===a.caixa?t+=a.caixaQt*a.custo*a.qt:t+=a.qt*a.custo})),i.innerHTML=(0,e.cashInfo)(t),(0,e.cashInfo)(t)}},253:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.removeOrder=void 0;const e=t(409),o=t(634),c=t(943);i.removeOrder=function(a){const i=(0,e.getStorageData)("order"),t=document.getElementById(`orderQt${a}`),s=i.find((i=>i.id===a)),n=i.findIndex((i=>i.id===a));s&&s.qt>0&&(s.qt--,t.innerHTML=String(s.qt),i[n]=s,(0,o.calcItem)(s),(0,c.calcTotalvalueOrders)(i)),(0,e.saveToStorage)("order",i)}},303:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.sendOrder=void 0;const e=t(591),o=t(643);i.sendOrder=function(a){const i=`https://wa.me/55${(0,e.getUrlValue)("t")}?text=${encodeURIComponent((0,o.textGenerate)(a))}`;window.location.replace(i)}},578:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setEmptyOrder=void 0;const e=t(409);i.setEmptyOrder=function(a){let i=[];a.forEach((a=>{let t=Object.assign(Object.assign({},a),{qt:0});i.push(t)})),(0,e.saveToStorage)("order",i)}},427:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setFamilies=void 0;const e=t(726);i.setFamilies=function(a){const i=document.getElementById("content");i&&(i.innerHTML="",a.forEach((a=>{i.innerHTML+=(0,e.familyItem)(a)})))}},754:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setProducts=void 0;const e=t(581),o=t(409),c=t(428),s=t(253);i.setProducts=function(){const a=document.querySelectorAll(".family"),i=(0,o.getStorageData)("order");a.forEach((a=>{const t=a.id.replace("Items","");i.forEach((i=>{i.familia===t&&(a.innerHTML+=(0,e.productItem)(i))}))})),document.querySelectorAll(".addBtn").forEach((a=>{const i=a.id.replace("add","");a.addEventListener("click",(()=>{(0,c.addOrder)(i)}))})),document.querySelectorAll(".removeBtn").forEach((a=>{const i=a.id.replace("remove","");a.addEventListener("click",(()=>{(0,s.removeOrder)(i)}))}))}},712:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.startCart=void 0;const e=t(389),o=t(303),c=t(247),s=t(409);i.startCart=function(){(0,c.componentVisibility)("cartContent","show"),(0,c.componentVisibility)("sendOrder","show"),(0,c.componentVisibility)("content","hide"),(0,c.componentVisibility)("viewOrder","hide"),(0,c.componentVisibility)("homeReturn","show"),window.scrollTo(0,0);const a=(0,s.getStorageData)("order"),i=document.getElementById("cartItems");i.innerHTML="",a.forEach((a=>{a.qt>0&&(i.innerHTML+=(0,e.productCartItem)(a))})),document.getElementById("sendOrder").addEventListener("click",(()=>{const a=(0,s.getStorageData)("order");(0,o.sendOrder)(a)}))}},597:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.startHome=void 0;const e=t(927),o=t(943),c=t(427),s=t(754),n=t(247),d=t(409);i.startHome=function(){(0,n.componentVisibility)("cartContent","hide"),(0,n.componentVisibility)("sendOrder","hide"),(0,n.componentVisibility)("content","show"),(0,n.componentVisibility)("viewOrder","show"),(0,n.componentVisibility)("homeReturn","hide"),window.scrollTo(0,0),(0,c.setFamilies)(e.familias);const a=(0,d.getStorageData)("order");a&&((0,s.setProducts)(),(0,o.calcTotalvalueOrders)(a))}},674:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.calcBoxValue=void 0,i.calcBoxValue=function(a){return a.custo*a.caixaQt}},150:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.calcPercent=void 0,i.calcPercent=function(a){return(100*(a.sugestao/a.custo-1)).toFixed(0)}},724:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.cashInfo=void 0,i.cashInfo=function(a){return`R$ ${a.toLocaleString("pt-BR",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2})}`}},247:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.componentVisibility=void 0,i.componentVisibility=function(a,i){const t=document.getElementById(a);"show"==i?t.removeAttribute("style"):t.setAttribute("style","display: none !important")}},591:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.getUrlValue=void 0,i.getUrlValue=function(a){return new URLSearchParams(window.location.search).get(a)||""}},409:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.getSessionStorageData=i.getStorageData=i.saveToSessionStorage=i.saveToStorage=void 0,i.saveToStorage=function(a,i){localStorage.setItem(a,JSON.stringify(i))},i.saveToSessionStorage=function(a,i){sessionStorage.setItem(a,JSON.stringify(i))},i.getStorageData=function(a){return JSON.parse(localStorage.getItem(a)||"[]")},i.getSessionStorageData=function(a){return JSON.parse(sessionStorage.getItem(a)||"[]")}},643:(a,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.textGenerate=void 0;const e=t(943),o=t(724);i.textGenerate=function(a){let i="",t=0;return a.forEach((a=>{a.qt>0&&(t=!0===a.caixa?a.caixaQt*a.custo*a.qt:a.qt*a.custo,i+=`*${a.nome}*`,!0===a.caixa?i+=`\n*Quantidade:* ${a.qt} cx`:i+=`\n*Quantidade:* ${a.qt} un`,i+=`\n*Total item:* ${(0,o.cashInfo)(t)}\n- - - - - - - - - - - - - - - - - - - - - - - -\n`)})),i+=`\n*Total pedido:* ${(0,e.calcTotalvalueOrders)(a)}`,i}}},i={};function t(e){var o=i[e];if(void 0!==o)return o.exports;var c=i[e]={exports:{}};return a[e](c,c.exports,t),c.exports}(()=>{const a=t(804),i=t(578),e=t(712),o=t(597),c=t(591);(0,i.setEmptyOrder)(a.produtos),(0,o.startHome)(),document.getElementById("viewOrder").addEventListener("click",(()=>{(0,e.startCart)()})),document.getElementById("sendOrder").addEventListener("click",(()=>{console.log(`enviar para ${(0,c.getUrlValue)("t")}`)})),document.getElementById("homeReturn").addEventListener("click",(()=>{(0,o.startHome)()}))})()})();