(function(e){function o(o){for(var t,l,r=o[0],s=o[1],c=o[2],u=0,m=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&m.push(i[l][0]),i[l]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);d&&d(o);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,o=0;o<n.length;o++){for(var a=n[o],t=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(t=!1)}t&&(n.splice(o--,1),e=l(l.s=a[0]))}return e}var t={},i={app:0},n=[];function l(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=t,l.d=function(e,o,a){l.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,o){if(1&o&&(e=l(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)l.d(a,t,function(o){return e[o]}.bind(null,t));return a},l.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(o,"a",o),o},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},l.p="/template-de-email/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=o,r=r.slice();for(var c=0;c<r.length;c++)o(r[c]);var d=s;n.push([0,"chunk-vendors"]),a()})({0:function(e,o,a){e.exports=a("56d7")},"036c":function(e){e.exports=JSON.parse('{"GerenteDeProjetos":{"id":1,"descricao":"Gerente de Projetos","experienciaExigida":"mais de 6 anos de experiência profissional na área técnica de TI ou correlata, sendo 2 anos com desenvolvimento ágil"},"ScrumMaster":{"id":2,"descricao":"Scrum Master","experienciaExigida":"mais de 6 anos de experiência profissional na área técnica de TI ou correlata, sendo 2 anos com desenvolvimento ágil"},"ArquitetoSr":{"id":3,"descricao":"Arquiteto (sênior)","experienciaExigida":"mais de 6 anos de experiência profissional na área técnica de TI ou correlata, sendo 2 anos com desenvolvimento ágil"},"DesignerDeProdutosPl":{"id":4,"descricao":"Designer UX/UI (pleno)","experienciaExigida":"mais de 4 anos de experiência profissional na área técnica de TI ou correlata"},"ProgramadorSr":{"id":5,"descricao":"Analista/Programador (sênior)","experienciaExigida":"mais de 6 anos de experiência profissional na área técnica de TI ou correlata, sendo 2 anos com desenvolvimento ágil"},"ProgramadorPl":{"id":6,"descricao":"Analista/Programador (pleno)","experienciaExigida":"mais de 4 anos de experiência profissional na área técnica de TI ou correlata"},"ProgramadorJr":{"id":7,"descricao":"Analista/Programador (júnior)","experienciaExigida":"mais de 2 anos de experiência profissional na área técnica de TI ou correlata"},"InfraAgilSr":{"id":8,"descricao":"Infra Ágil (sênior)","experienciaExigida":"mais de 6 anos de experiência profissional na área técnica de TI ou correlata, sendo 2 anos com desenvolvimento ágil"},"InfraAgilPl":{"id":9,"descricao":"Infra Ágil (pleno)","experienciaExigida":"mais de 4 anos de experiência profissional na área técnica de TI ou correlata"},"CientistaDeDadosSr":{"id":10,"descricao":"Analista de Dados (sênior)","experienciaExigida":"mais de 6 anos de experiência profissional na área técnica de TI ou correlata, sendo 2 anos com desenvolvimento ágil"},"CientistaDeDadosPl":{"id":10,"descricao":"Analista de Dados (pleno)","experienciaExigida":"mais de 4 anos de experiência profissional na área técnica de TI ou correlata"}}')},"2b83":function(e){e.exports=JSON.parse('{"Satisfatorio":{"id":1,"descricao":"Satisfatório"},"NaoSatisfatorio":{"id":2,"descricao":"Não Satisfatório"}}')},"46b5":function(e){e.exports=JSON.parse('{"Feminino":{"id":1,"descricao":"Feminino","artigo":"a"},"Masculino":{"id":2,"descricao":"Masculino","artigo":"o"}}')},"56d7":function(e,o,a){"use strict";a.r(o);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),i=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("router-view")],1)},n=[],l=a("2877"),r={},s=Object(l["a"])(r,i,n,!1,null,null,null),c=s.exports,d=(a("9edb"),a("8c4f")),u=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("FrameSeletorTemplateEmail",{on:{input:e.limpaModeloEmail},model:{value:e.templateEmailSelecionado,callback:function(o){e.templateEmailSelecionado=o},expression:"templateEmailSelecionado"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[1==e.templateEmailSelecionado?a("FrameTemplateEmailDns",{model:{value:e.modeloEmail,callback:function(o){e.modeloEmail=o},expression:"modeloEmail"}}):e._e(),2==e.templateEmailSelecionado?a("FrameTemplateEmailFirewall",{model:{value:e.modeloEmail,callback:function(o){e.modeloEmail=o},expression:"modeloEmail"}}):e._e(),3==e.templateEmailSelecionado?a("FrameTemplateEmailResultadoDiligencia",{model:{value:e.modeloEmail,callback:function(o){e.modeloEmail=o},expression:"modeloEmail"}}):e._e(),4==e.templateEmailSelecionado?a("FrameTemplateEmailConviteGithub",{model:{value:e.modeloEmail,callback:function(o){e.modeloEmail=o},expression:"modeloEmail"}}):e._e()],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[e.modeloEmail?a("FrameEmailGerado",{attrs:{modeloEmail:e.modeloEmail}}):e._e()],1)])])},m=[],p=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",[e._v(e._s(e.titulo))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("SeletorTemplateEmail",{on:{input:function(o){return e.$emit("input",e.templateEmailSelecionadoComputado)}},model:{value:e.templateEmailSelecionado,callback:function(o){e.templateEmailSelecionado=o},expression:"templateEmailSelecionado"}})],1)])])},f=[],v=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Seletor",{attrs:{label:"Template de Email",defaultValue:e.defaultValue,listaOpcoes:e.templatesDeEmail},on:{input:function(o){return e.$emit("input",e.templateEmailSelecionado)}},model:{value:e.templateEmailSelecionado,callback:function(o){e.templateEmailSelecionado=o},expression:"templateEmailSelecionado"}})],1)])])},C=[],b=a("abc8"),h=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("label",{staticClass:"form-label",attrs:{for:"seletor"}},[e._v(e._s(e.label))])]),a("div",{staticClass:"col"},[a("select",{staticClass:"form-select",attrs:{id:"seletor"},on:{input:function(o){return e.$emit("input",o.target.value)}}},[e.defaultValue?a("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v(e._s(e.defaultValue))]):e._e(),e._l(e.listaOpcoes,(function(o){return a("option",{key:o.id,domProps:{value:JSON.stringify(o)}},[e._v(e._s(o.descricao))])}))],2)])])])},x=[],E={props:{label:String,defaultValue:String,listaOpcoes:{}}},S=E,g=Object(l["a"])(S,h,x,!1,null,"9a632378",null),_=g.exports,w={data:function(){return{templateEmailSelecionado:null,defaultValue:"Escolha o tipo de modelo"}},computed:{templatesDeEmail:function(){return b}},components:{Seletor:_}},O=w,P=Object(l["a"])(O,v,C,!1,null,"fa477e1e",null),k=P.exports,D={data:function(){return{titulo:"Tipo de modelo",templateEmailSelecionado:null}},components:{SeletorTemplateEmail:k},computed:{templateEmailSelecionadoComputado:function(){return JSON.parse(this.templateEmailSelecionado).id}}},T=D,$=Object(l["a"])(T,p,f,!1,null,"78ae6ffc",null),I=$.exports,j=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Textbox",{attrs:{label:"CNAME"},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.cname,callback:function(o){e.cname=o},expression:"cname"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Checkbox",{attrs:{label:"Homologação",isChecked:e.homologacaoChecado},on:{change:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.homologacaoChecado,callback:function(o){e.homologacaoChecado=o},expression:"homologacaoChecado"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Checkbox",{attrs:{label:"Desenvolvimento",isChecked:e.desenvolvimentoChecado},on:{change:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.desenvolvimentoChecado,callback:function(o){e.desenvolvimentoChecado=o},expression:"desenvolvimentoChecado"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Textbox",{attrs:{label:"Subdomínio:",defaultValue:e.subdominio},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.subdominio,callback:function(o){e.subdominio=o},expression:"subdominio"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Textbox",{attrs:{label:"DNS interno:",defaultValue:e.dnsInterno},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.dnsInterno,callback:function(o){e.dnsInterno=o},expression:"dnsInterno"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Textbox",{attrs:{label:"DNS externo:",defaultValue:e.dnsExterno},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.dnsExterno,callback:function(o){e.dnsExterno=o},expression:"dnsExterno"}})],1)])])},y=[],N=(a("498a"),function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("label",{staticClass:"form-label",attrs:{for:"textbox"}},[e._v(e._s(e.label))])]),a("div",{staticClass:"col"},[a("input",{staticClass:"form-control",attrs:{id:"textbox",type:"text",placeholder:e.placeholder},domProps:{value:e.defaultValue},on:{input:function(o){return e.$emit("input",o.target.value)}}})])])])}),F=[],V={props:{label:String,defaultValue:String,placeholder:String}},M=V,A=Object(l["a"])(M,N,F,!1,null,"7e1e2a6b",null),G=A.exports,H=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"form-check"},[a("div",{staticClass:"col"},[a("input",e._b({staticClass:"form-check-input",attrs:{id:"checkbox",type:"checkbox"},on:{change:function(o){return e.$emit("change",o.target.checked)}}},"input",{checked:e.isChecked},!1))]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[e._v(e._s(e.label))])])])])])},J=[],R={model:{prop:"checked",event:"change"},props:{label:String,isChecked:Boolean}},U=R,B=Object(l["a"])(U,H,J,!1,null,"479b70d6",null),z=B.exports,L={components:{Textbox:G,Checkbox:z},data:function(){return{cname:null,subdominio:"sme.prefeitura.sp.gov.br",homologacaoChecado:!0,desenvolvimentoChecado:!0,dnsInterno:"10.50.1.189",dnsExterno:"186.239.235.118"}},computed:{modeloEmail:function(){var e={assunto:null,corpo:null};return e.assunto=this.cnameComputado?"Solicitação de DNS - "+this.cnameComputado.toUpperCase():"",e.corpo=this.url&&this.dnsInternoComputado&&this.dnsExternoComputado?"Prezada(o),<br><br>Favor alterar o CNAME:<ul><li>"+this.url+this.homologacao+this.desenvolvimento+"</li></ul><br>Para apontar para:<ul>"+this.dnsInternoComputado+this.dnsExternoComputado+"</ul><br>":"",e},url:function(){return this.cnameComputado&&this.subdominioComputado?this.cnameComputado+'" no subdomínio "'+this.subdominioComputado+'"':""},cnameComputado:function(){return this.cname?this.cname.trim():""},subdominioComputado:function(){return this.subdominio?this.subdominio.trim():""},homologacao:function(){return this.homologacaoChecado?',</li><li>"hom-'+this.url:""},desenvolvimento:function(){return this.desenvolvimentoChecado?',</li><li>"dev-'+this.url:""},dnsInternoComputado:function(){return this.dnsInterno?"<li>DNS interno = "+this.dnsInterno.trim()+"</li>":""},dnsExternoComputado:function(){return this.dnsExterno?"<li>DNS externo = "+this.dnsExterno.trim()+"</li>":""}}},q=L,Q=Object(l["a"])(q,j,y,!1,null,"4a22f7e8",null),X=Q.exports,K=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Textbox",{attrs:{label:"Origem:"},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.enderecoOrigem,callback:function(o){e.enderecoOrigem=o},expression:"enderecoOrigem"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Textbox",{attrs:{label:"Destino:"},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.enderecoDestino,callback:function(o){e.enderecoDestino=o},expression:"enderecoDestino"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Textbox",{directives:[{name:"show",rawName:"v-show",value:!e.icmpChecado,expression:"!icmpChecado"}],attrs:{label:"Porta/Protocolo:",placeholder:e.portaProtocoloPlaceholder},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.portaProtocolo,callback:function(o){e.portaProtocolo=o},expression:"portaProtocolo"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Checkbox",{attrs:{label:"ICMP",isChecked:e.icmpChecado},on:{change:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.icmpChecado,callback:function(o){e.icmpChecado=o},expression:"icmpChecado"}})],1)])])},W=[],Y={components:{Textbox:G,Checkbox:z},data:function(){return{enderecoOrigem:null,enderecoDestino:null,portaProtocolo:null,portaProtocoloPlaceholder:"Ex.: 80 TCP/UDP e 443 TCP/UDP",icmpChecado:!1}},computed:{modeloEmail:function(){var e={assunto:null,corpo:null};return e.assunto=this.enderecoOrigemComputado&&this.enderecoDestinoComputado?"Solicitação de Liberação no Firewall - "+this.enderecoOrigemComputado+" > "+this.enderecoDestinoComputado:"",e.corpo=this.enderecoOrigemComputado&&this.enderecoDestinoComputado&&this.portaProtocoloComputado?"Prezada(o),<br><br>Solicito liberação de acesso:<ul><li>Origem: "+this.enderecoOrigemComputado+";</li><li>Destino: "+this.enderecoDestinoComputado+";</li><li>Porta: "+this.portaProtocoloComputado+".</li></ul><br>":"",e},enderecoOrigemComputado:function(){return this.enderecoOrigem.toUpperCase().trim()},enderecoDestinoComputado:function(){return this.enderecoDestino.toUpperCase().trim()},portaProtocoloComputado:function(){return this.icmpChecado?"<li>Protocolo: ICMP</li>":this.portaProtocolo.trim()}}},Z=Y,ee=Object(l["a"])(Z,K,W,!1,null,"de240fdc",null),oe=ee.exports,ae=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("SeletorGenero",{on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.generoSelecionado,callback:function(o){e.generoSelecionado=o},expression:"generoSelecionado"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("SeletorPerfil",{on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.perfilSelecionado,callback:function(o){e.perfilSelecionado=o},expression:"perfilSelecionado"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("SeletorResultado",{on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.resultadoSelecionado,callback:function(o){e.resultadoSelecionado=o},expression:"resultadoSelecionado"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Textbox",{attrs:{label:"Observação:"},on:{input:function(o){return e.$emit("input",e.modeloEmail)}},model:{value:e.observacao,callback:function(o){e.observacao=o},expression:"observacao"}})],1)])])},te=[],ie=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Seletor",{attrs:{label:"Gênero:",defaultValue:e.defaultValue,listaOpcoes:e.generos},on:{input:function(o){return e.$emit("input",e.generoSelecionado)}},model:{value:e.generoSelecionado,callback:function(o){e.generoSelecionado=o},expression:"generoSelecionado"}})],1)])])},ne=[],le=a("46b5"),re={data:function(){return{generoSelecionado:null,defaultValue:"Escolha o gênero"}},computed:{generos:function(){return le}},components:{Seletor:_}},se=re,ce=Object(l["a"])(se,ie,ne,!1,null,"b8ddeb70",null),de=ce.exports,ue=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Seletor",{attrs:{label:"Perfil:",defaultValue:e.defaultValue,listaOpcoes:e.perfis},on:{input:function(o){return e.$emit("input",e.perfilSelecionado)}},model:{value:e.perfilSelecionado,callback:function(o){e.perfilSelecionado=o},expression:"perfilSelecionado"}})],1)])])},me=[],pe=a("036c"),fe={data:function(){return{perfilSelecionado:null,defaultValue:"Escolha o perfil"}},computed:{perfis:function(){return pe}},components:{Seletor:_}},ve=fe,Ce=Object(l["a"])(ve,ue,me,!1,null,"6939d518",null),be=Ce.exports,he=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Seletor",{attrs:{label:"Resultado:",defaultValue:e.defaultValue,listaOpcoes:e.resultados},on:{input:function(o){return e.$emit("input",e.resultadoSelecionado)}},model:{value:e.resultadoSelecionado,callback:function(o){e.resultadoSelecionado=o},expression:"resultadoSelecionado"}})],1)])])},xe=[],Ee=a("2b83"),Se={data:function(){return{resultadoSelecionado:null,defaultValue:"Escolha o resultado"}},computed:{resultados:function(){return Ee}},components:{Seletor:_}},ge=Se,_e=Object(l["a"])(ge,he,xe,!1,null,"c15b3e8a",null),we=_e.exports,Oe={components:{SeletorGenero:de,SeletorPerfil:be,SeletorResultado:we,Textbox:G},data:function(){return{generoSelecionado:null,perfilSelecionado:null,resultadoSelecionado:null,observacao:"A DPC não dispensa da apresentação dos documentos comprobatórios."}},computed:{modeloEmail:function(){var e={assunto:null,corpo:null};return e.assunto="RES: Diligência Prévia de Capacidade Técnica",e.corpo=this.resultadoSelecionadoComputadao&&this.generoSelecionadoComputado&&this.experienciaExigidaComputada?this.saudacaoComputada+',<br><br>O resultado da Diligência Prévia de Capacidade Técnica foi "<b>'+this.resultadoSelecionadoComputadao+'</b>".<br><br>'+this.generoSelecionadoComputado.toUpperCase()+" funcionári"+this.generoSelecionadoComputado+" indicad"+this.generoSelecionadoComputado+" pela AMcom possui formação superior completa e "+this.experienciaExigidaComputada+".<br><br>Observações:<ul><li>"+this.observacaoComputada+"</li></ul><br>":"",e},saudacaoComputada:function(){var e=new Date,o=e.getHours();return o<12?"Bom dia":o<19?"Boa tarde":"Boa noite"},resultadoSelecionadoComputadao:function(){return JSON.parse(this.resultadoSelecionado).descricao},generoSelecionadoComputado:function(){return JSON.parse(this.generoSelecionado).artigo},experienciaExigidaComputada:function(){return JSON.parse(this.perfilSelecionado).experienciaExigida},observacaoComputada:function(){return this.observacao.trim()}}},Pe=Oe,ke=Object(l["a"])(Pe,ae,te,!1,null,"b78c7178",null),De=ke.exports,Te=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"})},$e=[],Ie={mounted:function(){var e={assunto:null,corpo:null},o=function(){var e=new Date,o=e.getHours();return o<12?"Bom dia":o<19?"Boa tarde":"Boa noite"};e.assunto="RES: Acesso GitHub",e.corpo=o()+",<br><br>Enviado o convite para contribuir na organização do GitHub.<br>Quando aceitar, favor, sinalizar para conceder os acessos.<br>",this.$emit("input",e)}},je=Ie,ye=Object(l["a"])(je,Te,$e,!1,null,"6f4b62dc",null),Ne=ye.exports,Fe=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[e._v(" "+e._s(e.titulo)+" ")])]),a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"col",attrs:{id:"emailSuporte"}},[e._v(" "+e._s(e.emailSuporte)+" ")])]),a("div",{staticClass:"row"},[e._m(1),a("div",{staticClass:"col",attrs:{id:"emailCopia"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[e._v(" "+e._s(e.emailInfraestruturaCentralIT)+" ")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[e._v(" "+e._s(e.emailDISIS)+" ")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[e._v(" "+e._s(e.emailSolicitante)+" ")])])])]),a("div",{staticClass:"row"},[e._m(2),a("div",{staticClass:"col",attrs:{id:"assunto"},domProps:{innerHTML:e._s(e.modeloEmail.assunto)}})]),a("div",{staticClass:"row"},[e._m(3),a("div",{staticClass:"col",attrs:{id:"corpo"},domProps:{innerHTML:e._s(e.modeloEmail.corpo)}})])])},Ve=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"col"},[a("label",{attrs:{for:"emailSuporte"}},[e._v("Para:")])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"col"},[a("label",{attrs:{for:"emailCopia"}},[e._v("CC:")])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"col"},[a("label",{attrs:{for:"assunto"}},[e._v("Assunto:")])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"col"},[a("label",{attrs:{for:"corpo"}},[e._v("Corpo:")])])}],Me={props:{modeloEmail:{assunto:String,corpo:String}},data:function(){return{titulo:"Email",emailSuporte:"suporte@sme.prefeitura.sp.gov.br",emailInfraestruturaCentralIT:"infraestrutura.smesp@centralit.com.br",emailDISIS:"idscotic@sme.prefeitura.sp.gov.br",emailSolicitante:"solicitante(s)"}}},Ae=Me,Ge=Object(l["a"])(Ae,Fe,Ve,!1,null,"1695b2fc",null),He=Ge.exports,Je={name:"Home",data:function(){return{templateEmailSelecionado:null,modeloEmail:null}},components:{FrameSeletorTemplateEmail:I,FrameTemplateEmailDns:X,FrameTemplateEmailFirewall:oe,FrameTemplateEmailResultadoDiligencia:De,FrameTemplateEmailConviteGithub:Ne,FrameEmailGerado:He},methods:{limpaModeloEmail:function(){this.modeloEmail=null}}},Re=Je,Ue=Object(l["a"])(Re,u,m,!1,null,null,null),Be=Ue.exports,ze=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[e._v(" Página não encontrada "),a("br"),a("router-link",{attrs:{to:"/"}},[e._v("Ir para Home")])],1)},Le=[],qe={name:"Erro404"},Qe=qe,Xe=Object(l["a"])(Qe,ze,Le,!1,null,"4d7eb8fa",null),Ke=Xe.exports;t["a"].use(d["a"]);var We=[{path:"/",name:"Home",component:Be},{path:"*",name:"Erro404",component:Ke}],Ye=new d["a"]({mode:"history",base:"/template-de-email/",routes:We}),Ze=Ye;t["a"].config.productionTip=!1,new t["a"]({router:Ze,render:function(e){return e(c)}}).$mount("#app")},"9edb":function(e,o,a){},abc8:function(e){e.exports=JSON.parse('{"DNS":{"id":1,"descricao":"DNS"},"Firewall":{"id":2,"descricao":"Firewall"},"ResultadoDiligencia":{"id":3,"descricao":"Resultado de Diligência"},"ConviteGitHub":{"id":4,"descricao":"Convite GitHub"}}')}});
//# sourceMappingURL=app.cb5f538f.js.map