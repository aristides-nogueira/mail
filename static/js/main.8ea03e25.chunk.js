(this.webpackJsonpmail=this.webpackJsonpmail||[]).push([[0],{116:function(e,a,t){e.exports=t(133)},121:function(e,a,t){},122:function(e,a,t){},133:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(13),c=t.n(l),r=(t(121),t(122),t(19)),s=t(7),i=t(169),m=t(95),u=t(96),d=t(171),p=t(162),f=t(165),E=t(97),b=t(86),g=t(90),v=t.n(g),y=t(91),h=t.n(y),j=t(92),N=t.n(j),C=t(73),O=t.n(C);t(126);O.a.initializeApp({apiKey:"AIzaSyAD2nlqnNZfUtGaV_Z6Ta_eB55N27-6jrM",authDomain:"classroom-emails.firebaseapp.com",databaseURL:"https://classroom-emails.firebaseio.com",projectId:"classroom-emails",storageBucket:"classroom-emails.appspot.com",messagingSenderId:"932392480727",appId:"1:932392480727:web:2c5303bf16a92a6a85a592",measurementId:"G-ZERZV8Q07P"});var S=O.a,w=S.firestore(),k=function(){return o.a.createElement("div",{style:{paddingTop:8}},"Ficamos felizes que tenha coseguido! Boas aulas!",o.a.createElement("div",null,o.a.createElement("span",{style:{color:"white",fontSize:6}},"#gratid\xe3o")))},x=function(e){var a=e.classes,t=e.name,l=e.date,c=e.studentEmail,s=Object(n.useState)(""),m=Object(r.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(""),E=Object(r.a)(p,2),b=E[0],g=E[1],v=Object(n.useState)(!1),y=Object(r.a)(v,2),h=y[0],j=y[1];return o.a.createElement("div",null,o.a.createElement("p",null,"Caso tenha logado, mas n\xe3o apareceu a turma do aluno, certifique-se que ",o.a.createElement("br",null),"fez o acesso com a conta correta  ",o.a.createElement("br",null),"(n\xe3o ir\xe1 aparecer caso esteja com seu email pessoal,  ",o.a.createElement("br",null),"o acesso deve ser feito com o email e senha  acima)"),o.a.createElement("p",null,"Se mesmo assim, n\xe3o deu certo, por favor, nos deixe seu  ",o.a.createElement("br",null),"email e telefone para contato.  ",o.a.createElement("br",null),"A equipe de suporte da EMEI Aristides entrar\xe1 em contato com voc\xea!"),o.a.createElement("div",{className:a.feedbackForm},o.a.createElement("div",{className:a.formControl},o.a.createElement(i.a,{label:"Email para contato",variant:"outlined",value:u,className:a.formField,onChange:function(e){d(e.target.value)}})),o.a.createElement("div",{className:a.formControl},o.a.createElement(i.a,{label:"Telefone para contato",variant:"outlined",value:b,className:a.formField,onChange:function(e){g(e.target.value)}})),o.a.createElement("div",{className:a.feedbackForm},o.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){w.collection("contacts").add({name:t,date:l,studentEmail:c,contactEmail:u,contactPhone:b,success:!1}),j(!0)}},"Solicitar contato"),h&&o.a.createElement("span",{style:{paddingTop:8}},"Em breve entraremos em contato!"))))},D=Object(s.a)((function(e){return{main:{display:"flex",flexDirection:"column"},feedbackForm:{display:"flex",flexDirection:"column",padding:e.spacing(2,0)},formControl:{padding:e.spacing(2,0)},formField:{width:"100%"}}}))((function(e){var a=e.success,t=e.inputedName,n=e.inputedDate,l=e.studentEmail,c=e.classes;return o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},o.a.createElement("div",{className:c.main},a?o.a.createElement(k,null):o.a.createElement(x,{classes:c,name:t,date:n,studentEmail:l})))})),I=S.firestore(),F=Object(s.a)((function(e){return{result:{display:"flex",flexDirection:"column",paddingTop:e.spacing(4),"& p":{margin:0,paddingTop:e.spacing(2)}},email:{fontWeight:"bold",fontStyle:"italic"},password:{fontWeight:"bold",fontStyle:"italic"},copyIcon:{cursor:"pointer",paddingLeft:e.spacing(1)},feedback:{display:"flex",justifyContent:"space-between"},success:{borderColor:"#4caf50 !important",backgroundColor:"#4caf50 !important"}}}))((function(e){var a=e.name,t=e.classes,l=e.birthDate,c=Object(n.useState)(null),s=Object(r.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(!1),d=Object(r.a)(u,2),p=(d[0],d[1]),g=a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").split(" ").filter((function(e){return!["da","do","das","dos",""].includes(e)})),y=g.map((function(e,a){return 0===a||a===g.length-1?e:e[0]})).join(""),j=Object(E.a)(new Date(l),"ddMMyyyy"),C="".concat(y,".").concat(j,"@edu.sme.prefeitura.sp.gov.br");return o.a.createElement("div",{className:t.result},o.a.createElement("p",null,"Seu email \xe9"),o.a.createElement("p",{className:t.email},C,o.a.createElement(b.CopyToClipboard,{text:C,onCopy:function(){return p(!0)}},o.a.createElement(v.a,{className:t.copyIcon}))),o.a.createElement("p",null,"e a senha inicial \xe9",o.a.createElement("span",{className:t.password},"12345678 "),"e precisa ser alterada no primeiro acesso."),o.a.createElement("p",null,o.a.createElement("a",{href:"https://classroom.google.com/",target:"_blank"},"Clique aqui para acessar o Google Classroom"),", por favor, ",o.a.createElement("br",null),"n\xe3o esque\xe7a de responder logo abaixo se voc\xea conseguiu ou n\xe3o",o.a.createElement("br",null),"acessar sem problemas, para que possamos ajudar quem estiver",o.a.createElement("br",null),"com dificuldades!"),o.a.createElement("div",{className:t.feedback,style:{display:null!=i?"none":"inherit"}},o.a.createElement(f.a,{variant:"contained",className:t.success,onClick:function(){m(!0),I.collection("contacts").add({name:a,date:j,studentEmail:C,success:!0})},startIcon:o.a.createElement(h.a,null)},"Consegui!"),o.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){m(!1)},startIcon:o.a.createElement(N.a,null)},"N\xe3o consegui!")),null!=i&&o.a.createElement(D,{success:i,inputedName:a,inputedDate:j,studentEmail:C}))})),T=t(93),z=t.n(T),M=t(16),q=t(168),A=Object(s.a)((function(e){return{form:{display:"flex",flexDirection:"column"},box:{padding:e.spacing(4,5)},initialTip:{padding:e.spacing(1,0),fontSize:"1.2em"},formControl:{padding:e.spacing(4,0)},formField:{width:"100%"},errorMessage:{paddingTop:e.spacing(1)}}}))((function(e){var a=e.classes,t=Object(n.useState)(""),l=Object(r.a)(t,2),c=l[0],s=l[1],E=Object(n.useState)(new Date("2015-01-02")),b=Object(r.a)(E,2),g=b[0],v=b[1],y=Object(n.useState)(!1),h=Object(r.a)(y,2),j=h[0],N=h[1],C=Object(n.useState)(!1),O=Object(r.a)(C,2),S=O[0],w=O[1];return o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},o.a.createElement("span",{className:a.initialTip},"Saiba como acessar a sua sala de aula via Google classroom!"),o.a.createElement("div",{className:a.form},o.a.createElement(d.a,{boxShadow:3,className:a.box},j?o.a.createElement(f.a,{variant:"contained",color:"primary",startIcon:o.a.createElement(z.a,null),onClick:function(){N(!1),w(!1)}},"Tentar Outra vez"):o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"Descubra seu acesso:"),o.a.createElement("div",{className:a.formControl},o.a.createElement(i.a,{label:"Nome Completo do aluno",variant:"outlined",value:c,error:S&&""===c,className:a.formField,onChange:function(e){var a=e.target.value.replace(/[^A-z\xc0-\xfa`\xb4~^\s]/gi,"");(a.match(/[a-zA-Z\xe2\xe3\xe0\xe1\xea\xe9\xe8\xed\xec\xf4\xf3\xf2\xf5\xfa\xf9`\xb4~^]/g)||""===a)&&s(a)}})),o.a.createElement("div",{className:a.formControl},o.a.createElement(M.a,{utils:m.a,locale:u.a},o.a.createElement(q.a,{autoOk:!0,disableFuture:!0,variant:"inline",inputVariant:"outlined",openTo:"year",label:"Data de Nascimento",format:"dd 'de' MMMM/yyyy",className:a.formField,value:g,onChange:v}))),o.a.createElement("div",null,o.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){w(!0),c&&N(!0)}},"Pegar Acesso")),o.a.createElement("div",{className:a.errorMessage},S&&""===c&&o.a.createElement("span",null,"Por favor, todos os campos devem ser preenchidos"))))),j&&o.a.createElement(F,{name:c,birthDate:g}))})),B=t(94),Z=t(167),G=t(166),P=function(e){return Object(B.a)(e),o.a.createElement("div",{style:{paddingBottom:20}},o.a.createElement(Z.a,{position:"static"},o.a.createElement(G.a,null,"Aristides Nogueira")))};var W=function(){return o.a.createElement("div",{className:"App",style:{fontSize:20,color:"#555"}},o.a.createElement(P,null),o.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.8ea03e25.chunk.js.map