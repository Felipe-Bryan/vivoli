(()=>{"use strict";var a={726:(a,i,o)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.familyItem=void 0;const t=o(498);i.familyItem=function(a){return`\n<div class="accordion-item">\n    <h2 class="accordion-header">\n    <button\n        class="accordion-button collapsed"\n        type="button"\n        data-bs-toggle="collapse"\n        data-bs-target="#${(0,t.removeInvalidChar)(a.nome)}"\n        aria-expanded="false"\n        aria-controls="${(0,t.removeInvalidChar)(a.nome)}">\n        ${a.nome}\n    </button>\n    </h2>\n    <div id="${(0,t.removeInvalidChar)(a.nome)}" class="accordion-collapse collapse" data-bs-parent="#content">\n        <div class="accordion-body p-0 pt-1 family" title="${a.nome}" id="${(0,t.removeInvalidChar)(a.nome)}Items"></div>\n    </div>\n</div>`}},581:(a,i,o)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.productItem=void 0;const t=o(674),e=o(150);i.productItem=function(a){let i=`\n<div class="container-fluid border-bottom border-2 mb-2">\n    <div class="row">\n        <div class="col p-0 fw-semibold fst-italic">${a.nome}</div>\n    </div>\n\n    <div class="row">\n        <div class="p-0 m-0 col-2">Custo</div>\n        <div class="p-0 m-0 col-3 text-center">R$ ${a.custo}</div>\n        <div class="p-0 m-0 col-3">Sugerido</div>\n        <div class="p-0 m-0 col-4 text-end">R$ ${a.sugestao.toFixed(2)} (${(0,e.calcPercent)(a)}%)</div>\n    </div>`;return!0===a.caixa&&(i+=`<div class="row">\n        <div class="p-0 m-0 col-6">Caixa com: <span>${a.caixaQt}</span></div>\n        <div class="p-0 m-0 col-6 text-end">R$ <span id="valorCaixa">${(0,t.calcBoxValue)(a).toFixed(2)}</span></div>\n        </div>`),i+='<div class="row d-flex align-items-center justify-content-end my-1">\n        <div class="col-3 col-sm-1 d-flex align-items-center justify-content-center">\n        <button type="button" class="btn btn-danger"><i class="bi bi-dash"></i></button>\n        </div>\n\n        <div class="col-3 col-sm-1 text-center" id="orderQt">1</div>\n\n        <div class="col-3 col-sm-1 d-flex align-items-center justify-content-center">\n        <button type="button" class="btn btn-success"><i class="bi bi-plus"></i></button>\n        </div>\n    </div>\n</div>',i}},927:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.familias=void 0,i.familias=[{nome:"Le petit"},{nome:"Di Drill"},{nome:"Di Fruti"},{nome:"Di Leiti"},{nome:"Especialité"},{nome:"Paletas Mexicanas"},{nome:"Extrusado Absoluto"},{nome:"Extrusado Classic"},{nome:"Di Açaí"},{nome:"Extrusados Premiatto"},{nome:"Mini Extrusado"},{nome:"Di Infantil"},{nome:"Cones Divine"},{nome:"Sundae"},{nome:"Copão 400Ml"},{nome:"Copo 400ml Splendido"},{nome:"Potes 1,0 Litros Gormet"},{nome:"Potes 1,5 Litros Sorbet"},{nome:"Potes 1,8 Litros"},{nome:"Potes 2,0 Litros"},{nome:"Potes 7,0 Litros"}]},804:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.produtos=void 0,i.produtos=[{id:"1",nome:"Picolé Le Petit Tuti Frutti",custo:1.39,caixaQt:36,sugestao:2,caixa:!0,familia:"Le petit"},{id:"2",nome:"Picolé Le Petit Groselha",custo:1.39,caixaQt:36,sugestao:2,caixa:!0,familia:"Le petit"},{id:"3",nome:"Picolé Le Petit Chocolate",custo:1.39,caixaQt:36,sugestao:2,caixa:!0,familia:"Le petit"},{id:"4",nome:"Picolé Le Petit Chocolate Branco",custo:1.39,caixaQt:36,sugestao:2,caixa:!0,familia:"Le petit"},{id:"6",nome:"Picolé Di Drill Churros Brigadeiro",custo:2.09,caixaQt:24,sugestao:3,caixa:!0,familia:"Di Drill"},{id:"7",nome:"Picolé Di Drill Churros Doce de leite",custo:2.09,caixaQt:24,sugestao:3,caixa:!0,familia:"Di Drill"},{id:"9",nome:"Picolé Di Fruta Abacaxi",custo:1.74,caixaQt:28,sugestao:2.5,caixa:!0,familia:"Di Fruti"},{id:"10",nome:"Picolé Di FrutaLimão",custo:1.74,caixaQt:28,sugestao:2.5,caixa:!0,familia:"Di Fruti"},{id:"11",nome:"Picolé Di Fruta Maracujá",custo:1.74,caixaQt:28,sugestao:2.5,caixa:!0,familia:"Di Fruti"},{id:"12",nome:"Picolé Di Fruta Uva",custo:1.74,caixaQt:28,sugestao:2.5,caixa:!0,familia:"Di Fruti"},{id:"14",nome:"Picolé Di Leite Chocolate",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"Di Leiti"},{id:"15",nome:"Picolé Di Leite Coco",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"Di Leiti"},{id:"16",nome:"Picolé Di Leite Leite Condensado",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"Di Leiti"},{id:"17",nome:"Picolé Di Leite Limonada Suiça",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"Di Leiti"},{id:"18",nome:"Picolé Di Leite Milho Verde",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"Di Leiti"},{id:"19",nome:"Picolé Di Morango Morango",custo:2.27,caixaQt:28,sugestao:3.25,caixa:!0,familia:"Di Leiti"},{id:"21",nome:"Picolé Especialité Morango recheado",custo:4.23,caixaQt:26,sugestao:6,caixa:!0,familia:"Especialité"},{id:"22",nome:"Picolé Especialité Brigadeiro Chocolate",custo:4.23,caixaQt:24,sugestao:6,caixa:!0,familia:"Especialité"},{id:"23",nome:"Picolé Esopecialité Brigadeiro Morango",custo:4.23,caixaQt:24,sugestao:6,caixa:!0,familia:"Especialité"},{id:"24",nome:"Picolé Especialité Tablets",custo:4.23,caixaQt:26,sugestao:6,caixa:!0,familia:"Especialité"},{id:"25",nome:"Picolé Especialité Vivotello",custo:4.23,caixaQt:26,sugestao:6,caixa:!0,familia:"Especialité"},{id:"27",nome:"Paleta Leite Trufado",custo:5.68,caixaQt:14,sugestao:8,caixa:!0,familia:"Paletas Mexicanas"},{id:"28",nome:"Paleta Morango c/ Leite Condensado",custo:5.68,caixaQt:14,sugestao:8,caixa:!0,familia:"Paletas Mexicanas"},{id:"30",nome:"Extrusado Absoluto Avelã",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Absoluto"},{id:"31",nome:"Extrusado Absoluto Avelã ao Leite",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Absoluto"},{id:"32",nome:"Extrusado Absoluto Chocolate Trufado",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Absoluto"},{id:"33",nome:"Extrusado Absoluto Iogurte c/ Amarena",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Absoluto"},{id:"34",nome:"Extrusado Absoluto Petit Gateau",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Absoluto"},{id:"35",nome:"Extrusado Absoluto Torta de Limão",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Absoluto"},{id:"37",nome:"Extrusado Classic Cookies",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Classic"},{id:"38",nome:"Extrusado Classic Chococolate",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Classic"},{id:"39",nome:"Extrusado Classic Chocolate Branco",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Classic"},{id:"40",nome:"Extrusado Classic Chocolate Meio Amargo",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Classic"},{id:"41",nome:"Extrusado Classic Vivolak",custo:5.11,caixaQt:20,sugestao:7.25,caixa:!0,familia:"Extrusado Classic"},{id:"43",nome:"Extrusado Di Açaí C/ Guaraná",custo:3.51,caixaQt:20,sugestao:5,caixa:!0,familia:"Di Açaí"},{id:"45",nome:"Extrusado Premiatto Napolitano",custo:3.51,caixaQt:20,sugestao:5,caixa:!0,familia:"Extrusados Premiatto"},{id:"46",nome:"Extrusado Premiatto Vivotella",custo:3.51,caixaQt:20,sugestao:5,caixa:!0,familia:"Extrusados Premiatto"},{id:"48",nome:"Extrusado Mini Pé Moleque Preto",custo:3.87,caixaQt:20,sugestao:5.5,caixa:!0,familia:"Mini Extrusado"},{id:"49",nome:"Extrusado Mini Skimo",custo:3.87,caixaQt:20,sugestao:5.5,caixa:!0,familia:"Mini Extrusado"},{id:"51",nome:"Extrusado Di infantil Algodão Doce",custo:2.63,caixaQt:20,sugestao:3.75,caixa:!0,familia:"Di Infantil"},{id:"53",nome:"Cone Divine Biscoito",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"Cones Divine"},{id:"54",nome:"Cone Divine Black and White",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"Cones Divine"},{id:"55",nome:"Cone Divine Brigadeiro",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"Cones Divine"},{id:"56",nome:"Cone Divine Crocante",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"Cones Divine"},{id:"57",nome:"Cone Divine Leite Trufado",custo:5.25,caixaQt:16,sugestao:7.5,caixa:!0,familia:"Cones Divine"},{id:"59",nome:"Sundae Nata/Chocolate",custo:4.11,caixaQt:8,sugestao:5.5,caixa:!0,familia:"Sundae"},{id:"60",nome:"Sundae Nata/Morango",custo:4.11,caixaQt:8,sugestao:5.5,caixa:!0,familia:"Sundae"},{id:"62",nome:"Copo 400ml Abacaxi ao Vinho",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"Copão 400Ml"},{id:"63",nome:"Copo 400ml Bombom",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"Copão 400Ml"},{id:"64",nome:"Copo 400ml Brigadeiro",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"Copão 400Ml"},{id:"65",nome:"Copo 400ml Flocos",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"Copão 400Ml"},{id:"66",nome:"Copo 400ml Napolitano",custo:5.87,caixaQt:12,sugestao:8,caixa:!0,familia:"Copão 400Ml"},{id:"68",nome:"Splendido Nata/Chocolate",custo:6.28,caixaQt:12,sugestao:8.5,caixa:!0,familia:"Copo 400ml Splendido"},{id:"69",nome:"Splendido Nata/Morango",custo:6.28,caixaQt:12,sugestao:8.5,caixa:!0,familia:"Copo 400ml Splendido"},{id:"71",nome:"Pote 1,020lts Açaí c/ Leitinho",custo:22.78,caixaQt:6,sugestao:29,caixa:!0,familia:"Potes 1,0 Litros Gormet"},{id:"72",nome:"Pote 1,020lts Açaí c/ Trufado",custo:22.78,caixaQt:6,sugestao:29,caixa:!0,familia:"Potes 1,0 Litros Gormet"},{id:"74",nome:"PT 1,5lts Frutas Vermelhas",custo:14.76,caixaQt:4,sugestao:20,caixa:!0,familia:"Potes 1,5 Litros Sorbet"},{id:"75",nome:"PT 1,5lts Graviola",custo:14.76,caixaQt:4,sugestao:20,caixa:!0,familia:"Potes 1,5 Litros Sorbet"},{id:"76",nome:"PT 1,5lts Manga",custo:14.76,caixaQt:4,sugestao:20,caixa:!0,familia:"Potes 1,5 Litros Sorbet"},{id:"78",nome:"PT 1,8 LTS Splendido Abacaxi c/ Abacaxi",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"Potes 1,8 Litros"},{id:"79",nome:"PT 1,8 LTS Splendido Coco c/ Brigadeiro",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"Potes 1,8 Litros"},{id:"80",nome:"PT 1,8 LTS Splendido Choc branco/ choc ao leite",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"Potes 1,8 Litros"},{id:"81",nome:"PT 1,8LTS Splendido Iogurte / Frutas vermelhas",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"Potes 1,8 Litros"},{id:"82",nome:"PT 1,8 LTS Splendido Leite Trufado",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"Potes 1,8 Litros"},{id:"83",nome:"PT 1,8 LTS Splendido Morango ao Leite",custo:23.3,caixaQt:2,sugestao:31,caixa:!0,familia:"Potes 1,8 Litros"},{id:"85",nome:"PT 2LTS Abacaxi ao Vinho",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"86",nome:"PT 2LTS Bombom",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"87",nome:"PT 2LTS Brigadeiro",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"88",nome:"PT 2LTS Chocolate",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"89",nome:"PT 2LTS Creme",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"90",nome:"PT 2LTS Flocos",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"91",nome:"PT 2LTS Grego Tradicional",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"92",nome:"PT 2LTS Morango",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"93",nome:"PT 2LTS Napolitano",custo:20.78,caixaQt:8,sugestao:28,caixa:!1,familia:"Potes 2,0 Litros"},{id:"95",nome:"PT 7LTS Abacaxi ao Vinho",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"},{id:"96",nome:"PT 7LTS Bombom",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"},{id:"97",nome:"PT 7LTS Brigadeiro",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"},{id:"98",nome:"PT 7LTS Chocolate",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"},{id:"99",nome:"PT 7LTS Creme",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"},{id:"100",nome:"PT 7LTS Flocos",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"},{id:"101",nome:"PT 7LTS Grego Tradicional",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"},{id:"102",nome:"PT 7LTS Morango",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"},{id:"103",nome:"PT 7LTS Napolitano",custo:64.62,caixaQt:1,sugestao:85,caixa:!0,familia:"Potes 7,0 Litros"}]},427:(a,i,o)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setFamilies=void 0;const t=o(726);i.setFamilies=function(a){const i=document.getElementById("content");i&&(i.innerHTML="",a.forEach((a=>{i.innerHTML+=(0,t.familyItem)(a)})))}},754:(a,i,o)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setProducts=void 0;const t=o(581);i.setProducts=function(a){document.querySelectorAll(".family").forEach((i=>{console.log(i.title),a.forEach((a=>{i.title===a.familia&&(i.innerHTML+=(0,t.productItem)(a))}))}))}},674:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.calcBoxValue=void 0,i.calcBoxValue=function(a){return a.custo*a.caixaQt}},150:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.calcPercent=void 0,i.calcPercent=function(a){return(100*(a.sugestao/a.custo-1)).toFixed(0)}},591:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.getUrlValue=void 0,i.getUrlValue=function(a){return new URLSearchParams(window.location.search).get(a)||""}},498:(a,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.removeInvalidChar=void 0,i.removeInvalidChar=function(a){return a.toLowerCase().replace(" ","-").replace(",","-").replace("á","a").replace("â","a").replace("à","a").replace("ã","a").replace("é","e").replace("ê","e").replace("í","i").replace("ó","o").replace("ô","o").replace("ú","u").replace("ü","u").replace("ç","c")}}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var s=i[t]={exports:{}};return a[t](s,s.exports,o),s.exports}(()=>{const a=o(927),i=o(804),t=o(427),e=o(754),s=o(591);(0,t.setFamilies)(a.familias),(0,e.setProducts)(i.produtos),console.log((0,s.getUrlValue)("t"))})()})();