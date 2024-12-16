import{r as s,t as K,C as X,a as Y,o as Z,c as J,j as a,B as M,O as Q,P as m}from"./index-B0jkiz79.js";import{S as k,g as ee,P as te,R as ne,F as ae,I as re}from"./Table-CDgjk8mE.js";import{R as se}from"./DeleteOutlined-BHXfCW9E.js";import{F as q,s as D}from"./index-C6nPlHol.js";const{Option:L}=k;function _(t){return(t==null?void 0:t.type)&&(t.type.isSelectOption||t.type.isSelectOptGroup)}const ie=(t,c)=>{var u;const{prefixCls:f,className:g,popupClassName:l,dropdownClassName:v,children:y,dataSource:w}=t,p=K(y);let h;p.length===1&&s.isValidElement(p[0])&&!_(p[0])&&([h]=p);const F=h?()=>h:void 0;let n;p.length&&_(p[0])?n=y:n=w?w.map(i=>{if(s.isValidElement(i))return i;switch(typeof i){case"string":return s.createElement(L,{key:i,value:i},i);case"object":{const{value:S}=i;return s.createElement(L,{key:S,value:S},i.text)}default:return}}):[];const{getPrefixCls:o}=s.useContext(X),d=o("select",f),[r]=Y("SelectLike",(u=t.dropdownStyle)===null||u===void 0?void 0:u.zIndex);return s.createElement(k,Object.assign({ref:c,suffixIcon:null},Z(t,["dataSource","dropdownClassName"]),{prefixCls:d,popupClassName:l||v,dropdownStyle:Object.assign(Object.assign({},t.dropdownStyle),{zIndex:r}),className:J(`${d}-auto-complete`,g),mode:k.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:F}),n)},A=s.forwardRef(ie),le=ee(A);A.Option=L;A._InternalPanelDoNotUseOrYouWillBeFired=le;const oe=(t,c)=>[{title:"Material",dataIndex:"material",editable:!0,required:!0,width:400},{title:"Veta",dataIndex:"veta",editable:!0,required:!1,width:100},{title:"Largo",dataIndex:"largo",editable:!0,required:!0,width:80},{title:"Ancho",dataIndex:"ancho",editable:!0,required:!0,width:80},{title:"Cantidad",dataIndex:"cantidad",editable:!0,required:!0,width:60},{title:"L1",dataIndex:"L1",editable:!0,required:!1,width:100},{title:"L2",dataIndex:"L2",editable:!0,required:!1,width:100},{title:"A1",dataIndex:"A1",editable:!0,required:!1,width:100},{title:"A2",dataIndex:"A2",editable:!0,required:!1,width:100},{title:"Comentario",dataIndex:"comment",editable:!0,required:!1,width:100},{title:"Acción",dataIndex:"accion",render:(u,f)=>t.length>=1?a.jsx(te,{title:"¿Seguro que quieres eliminar?",onConfirm:()=>c(f.key),children:a.jsx(M,{children:a.jsx(se,{})})}):null,width:100}],$=t=>{const c=t.material||"",u=t.thickness||"",f=t.width||"",g=t.height||"";return{value:`${c} - ${f}x${g}x${u}`}},fe=()=>{const{materials:t}=s.useContext(Q),[c,u]=s.useState([]),[f,g]=s.useState(0),l=s.useRef([]),v=({title:n,editable:o,children:d,dataIndex:r,record:i,handleSave:S,rowIndex:x,colIndex:P,required:z,...W})=>{const[j,G]=s.useState(!1),O=s.useRef(null),b=q.useFormInstance();s.useEffect(()=>{j&&(O.current.focus(),r!=="material"&&O.current.select())},[j]);const V=()=>{G(!j),b.setFieldsValue({[r]:i[r]})},E=async()=>{try{const e=await b.validateFields();V(),S({...i,...e}),U(x,P)}catch(e){D.error(`Error salvando: ${e.errorFields[0].errors[0]}`),console.warn("Save failed:",e)}},H=e=>{e.key==="Enter"&&(B(b.getFieldValue(r)),E())},B=e=>{t.some(C=>$(C).value===e)||(D.error("Por favor, selecciona un material válido de la lista."),b.setFieldsValue({[r]:""}))},U=(e,I)=>{const C=I+1,N=e+(C>=h.length?1:0),R=C>=h.length?0:C;l.current[N]&&l.current[N][R]&&(l.current[N][R].focus(),l.current[N][R].select())};let T=d;return o&&(T=j?a.jsx(q.Item,{style:{margin:0},name:r,rules:[{required:z,message:`${n} es requerido.`}],children:r==="material"?a.jsx(A,{options:t.map(e=>$(e)),filterOption:(e,I)=>I.value.toLowerCase().includes(e.toLowerCase()),ref:e=>{e&&(O.current=e,l.current[x]||(l.current[x]=[]),l.current[x][P]=e)},onKeyDown:H,className:"editable-cell-input",onBlur:()=>{B(b.getFieldValue(r)),E()}}):a.jsx(re,{ref:e=>{e&&(O.current=e,l.current[x]||(l.current[x]=[]),l.current[x][P]=e)},className:"editable-cell-input",onPressEnter:E,onBlur:E})}):a.jsx("div",{className:"editable-cell editable-cell-value-wrap",style:{paddingRight:24,minHeight:"24px"},onClick:V,children:d||a.jsx("span",{style:{color:"transparent"},children:"placeholder"})})),a.jsx("td",{...W,children:T})};v.propTypes={title:m.string,editable:m.bool,children:m.node,dataIndex:m.string,record:m.object,handleSave:m.func,rowIndex:m.number,colIndex:m.number,required:m.bool};const y=n=>{const o=c.filter(d=>d.key!==n);u(o)},w=n=>{u([...c,{key:f,...n}]),g(f+1)},p=n=>{const o=[...c],d=o.findIndex(i=>n.key===i.key),r=o[d];o.splice(d,1,{...r,...n}),u(o)},h=oe(c,y),F=h.map((n,o)=>n.editable?{...n,onCell:(d,r)=>({record:d,editable:n.editable,dataIndex:n.dataIndex,title:n.title||"Material",handleSave:p,rowIndex:r,colIndex:o,required:n.required})}:n);return a.jsxs(q,{form:q.useFormInstance(),component:!1,children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[a.jsxs("div",{children:["Número de pedido: ",a.jsx("span",{style:{fontWeight:"bold"},children:"6574637"})]}),a.jsx(M,{onClick:()=>w({material:"",veta:"",largo:"",ancho:"",cantidad:"",L1:"",L2:"",A1:"",A2:"",comentario:""}),type:"primary",icon:a.jsx(ne,{}),children:"Agregar"})]}),a.jsx("div",{style:{width:"100%",marginBottom:"3rem"},children:a.jsx(ae,{components:{body:{cell:v}},bordered:!0,dataSource:c,columns:F,rowClassName:"editable-row",pagination:!1,style:{width:"100%"}})})]})};export{fe as default};
