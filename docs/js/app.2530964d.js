(function(e){function o(o){for(var n,a,r=o[0],c=o[1],u=o[2],m=0,d=[];m<r.length;m++)a=r[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(o);while(d.length)d.shift()();return l.push.apply(l,u||[]),t()}function t(){for(var e,o=0;o<l.length;o++){for(var t=l[o],n=!0,r=1;r<t.length;r++){var c=t[r];0!==i[c]&&(n=!1)}n&&(l.splice(o--,1),e=a(a.s=t[0]))}return e}var n={},i={app:0},l=[];function a(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,o,t){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)a.d(t,n,function(o){return e[o]}.bind(null,n));return t},a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=o,r=r.slice();for(var u=0;u<r.length;u++)o(r[u]);var s=c;l.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("FrameSeletorTemplateEmail",{model:{value:e.templateEmailSelecionado,callback:function(o){e.templateEmailSelecionado=o},expression:"templateEmailSelecionado"}}),1==e.templateEmailSelecionado?t("FrameSelectorTemplateEmailDNS",{model:{value:e.modeloEmail,callback:function(o){e.modeloEmail=o},expression:"modeloEmail"}}):e._e(),e._v(" "+e._s(e.modeloEmail)+" ")],1)},l=[],a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._v(" "+e._s(e.titulo)+" "),t("SeletorTemplateEmail",{on:{input:function(o){return e.$emit("input",e.templateEmailSelecionado)}},model:{value:e.templateEmailSelecionado,callback:function(o){e.templateEmailSelecionado=o},expression:"templateEmailSelecionado"}})],1)},r=[],c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("select",{on:{input:function(o){return e.$emit("input",o.target.value)}}},[t("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v("Escolha o tipo de modelo")]),e._l(e.templatesDeEmail,(function(o){return t("option",{key:o.id,domProps:{value:o.id}},[e._v(e._s(o.descricao))])}))],2)])},u=[],s=t("ce59"),m={data:function(){return{}},computed:{templatesDeEmail:function(){return s}}},d=m,p=t("2877"),h=Object(p["a"])(d,c,u,!1,null,"2030fece",null),f=h.exports,v={data:function(){return{titulo:"Tipo de modelo",templateEmailSelecionado:null}},components:{SeletorTemplateEmail:f}},b=v,E=Object(p["a"])(b,a,r,!1,null,"27ee9686",null),x=E.exports,g=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",[t("Textbox",{attrs:{label:"CNAME"},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.cname,callback:function(o){e.cname=o},expression:"cname"}})],1),t("div",[t("Checkbox",{attrs:{label:"Homologação",isChecked:e.homologacaoChecado},on:{change:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.homologacaoChecado,callback:function(o){e.homologacaoChecado=o},expression:"homologacaoChecado"}})],1),t("div",[t("Checkbox",{attrs:{label:"Desenvolvimento",isChecked:e.desenvolvimentoChecado},on:{change:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.desenvolvimentoChecado,callback:function(o){e.desenvolvimentoChecado=o},expression:"desenvolvimentoChecado"}})],1)])},S=[],_=(t("498a"),function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("label",[e._v(" "+e._s(e.label)+" "),t("input",{attrs:{type:"text"},on:{input:function(o){return e.$emit("input",o.target.value)}}})])])}),C=[],k={props:{label:String}},y=k,O=Object(p["a"])(y,_,C,!1,null,"1adf9e28",null),j=O.exports,L=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("label",[e._v(" "+e._s(e.label)+" "),t("input",e._b({attrs:{type:"checkbox"},on:{change:function(o){return e.$emit("change",o.target.checked)}}},"input",{checked:e.isChecked},!1))])])},$=[],w={model:{prop:"checked",event:"change"},props:{label:String,isChecked:Boolean}},D=w,T=Object(p["a"])(D,L,$,!1,null,"677988b6",null),N=T.exports,P={components:{Textbox:j,Checkbox:N},data:function(){return{cname:null,subdominio:null,homologacaoChecado:!0,desenvolvimentoChecado:!0,dnsInterno:null,dnsExterno:null}},computed:{modeloEmail:function(){var e={assunto:null,corpo:null};return e.assunto=this.cnameLimpo?"Solicitação de DNS - "+this.cnameLimpo.toUpperCase():"",e.corpo=this.url&&this.homologacao&&this.desenvolvimento&&this.dnsInternoLimpo&&this.dnsExternoLimpo?"Prezada(o),<br><br>Favor alterar o CNAME:<ul><li>"+this.url+this.homologacao+this.desenvolvimento+"</li></ul><br>Para apontar para:<ul>"+this.dnsInternoLimpo+this.dnsExternoLimpo+"</ul><br>":"",e},url:function(){return this.cnameLimpo&&this.subdominioLimpo?this.cnameLimpo+'" no subdomínio "'+this.subdominioLimpo+'"':""},cnameLimpo:function(){return this.cname?this.cname.trim():""},subdominioLimpo:function(){return this.subdominio?this.subdominio.trim():""},homologacao:function(){return this.homologacaoChecado?',</li><li>"hom-'+this.url:""},desenvolvimento:function(){return this.desenvolvimentoChecado?',</li><li>"dev-'+this.url:""},dnsInternoLimpo:function(){return this.dnsInterno?"<li>DNS interno = "+this.dnsInterno.trim()+"</li>":""},dnsExternoLimpo:function(){return this.dnsExterno?"<li>DNS externo = "+this.dnsExterno.trim()+"</li>":""}}},F=P,I=Object(p["a"])(F,g,S,!1,null,"855b2a68",null),M=I.exports,A={name:"App",data:function(){return{templateEmailSelecionado:null,modeloEmail:{}}},components:{FrameSeletorTemplateEmail:x,FrameSelectorTemplateEmailDNS:M}},H=A,J=Object(p["a"])(H,i,l,!1,null,null,null),G=J.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(G)}}).$mount("#app")},ce59:function(e){e.exports=JSON.parse('{"DNS":{"id":1,"descricao":"DNS"},"Firewall":{"id":2,"descricao":"Firewall"},"ResultadoDiligencia":{"id":3,"descricao":"Resultado de Diligência"},"ConviteGitHub":{"id":4,"descricao":"Convite GitHub"}}')}});
//# sourceMappingURL=app.2530964d.js.map