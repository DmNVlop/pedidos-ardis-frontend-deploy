import{r as h,u as y,j as e,B as o}from"./index-B0jkiz79.js";import{R as g,F as j,P as C}from"./Table-CDgjk8mE.js";import{R as I}from"./EditOutlined-C7Map5j7.js";import{R as P}from"./DeleteOutlined-BHXfCW9E.js";const N=()=>{const r=[],[t,s]=h.useState(r),i=y(),d=a=>{const n=t.filter(x=>x.key!==a);s(n)},l=a=>{i(`/order/${a.NoPedido}`)},c=()=>{i("/order/new")},m=[{title:"No Pedido",dataIndex:"NoPedido",key:"NoPedido"},{title:"Cliente",dataIndex:"Cliente",key:"Cliente"},{title:"Fecha IN",dataIndex:"FechaIN",key:"FechaIN"},{title:"Fecha Entrega",dataIndex:"FechaEntrega",key:"FechaEntrega"},{title:"No Piezas",dataIndex:"NoPiezas",key:"NoPiezas"},{title:"Comentario",dataIndex:"Comment",key:"Comment"},{title:"Creado por",dataIndex:"CreadoPor",key:"CreadoPor"},{title:"Acción",key:"accion",render:(a,n)=>e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>l(n),style:{marginRight:8},children:e.jsx(I,{})}),e.jsx(C,{title:"¿Seguro que quieres eliminar?",onConfirm:()=>d(n.key),children:e.jsx(o,{children:e.jsx(P,{})})})]})}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[e.jsx("h2",{children:"Pedidos"}),e.jsx(o,{type:"primary",icon:e.jsx(g,{}),onClick:c,children:"Agregar Pedido"})]}),e.jsx(j,{dataSource:t,columns:m,rowKey:"key",style:(t==null?void 0:t.length)===0?{marginBottom:"2rem"}:""})]})};export{N as default};
