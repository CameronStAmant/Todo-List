(()=>{"use strict";const e=()=>{let e=document.getElementById("workspace"),t=[];for(let d=0;d<e.children.length;d++)if("delete-btn"!=e.children[d].className){let n=e.children[d].id;t[d]="delete-"+n;let l=document.getElementById(t[d]);l.addEventListener("click",(()=>{let e=l.id.split("-")[1];null!==document.getElementById(e)&&(document.getElementById(e).remove(),l.remove())}))}},t=(e=null,t=null)=>{let n=[],l=document.getElementById("workspace");!function(){for(let e=0;e<l.children.length;e++)if("delete-btn"!=l.children[e].className){let t=document.getElementById(l.children[e].id);for(let l=0;l<t.children.length;l++)if("view-todo"==t.children[l].className){let c=t.children[l].id;n[e]=c;let o=document.getElementById(n[e]),i=function(){let t,d=n[e].split("-")[1],l=document.getElementById(d);t=document.querySelectorAll(".todoInfo"),null===l||(n[e]="view-"+l.innerHTML,t[1].value=l.innerHTML,t[1].id=l.innerHTML,t[0].style.display="block",t[1].style.display="block",t[2].style.display="block")};o.getAttribute("listener","true")||(o.addEventListener("click",i),o.setAttribute("listener","true")),d}}}()};(()=>{let e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="ToDo",t.id="header",e.appendChild(t);let d=document.createElement("BUTTON");d.innerHTML="+ Project",d.id="addProjectButton",e.appendChild(d);let n=document.createElement("div");n.id="createProject",e.appendChild(n);let l=document.createElement("BUTTON");l.innerHTML="+ Todo",l.id="addTodoButton",e.appendChild(l);let c=document.createElement("div");c.id="createTodo",e.appendChild(c);let o=document.createElement("div");o.id="space",e.appendChild(o);let i=document.createElement("div");i.id="workspace",i.innerHTML="Projects",o.appendChild(i);let a=document.createElement("div");a.id="todoSpace",a.innerHTML="Todo",o.appendChild(a)})(),(()=>{let e=document.createElement("FORM"),t=document.createElement("label");t.innerHTML="Name:";let d=document.createElement("INPUT");d.setAttribute("type","text"),d.id="projectName";let n=document.createElement("INPUT");n.setAttribute("type","button"),n.value="Create",n.id="addProject";let l=document.createElement("INPUT");l.setAttribute("type","button"),l.setAttribute("value","Cancel"),l.id="cancelProject",createProject.appendChild(e),createProject.appendChild(t),createProject.appendChild(d),createProject.appendChild(n),createProject.appendChild(l);const c=document.getElementById("createProject");addProjectButton.addEventListener("click",(()=>{c.style.display="block"}))})(),document.getElementById("addProject").addEventListener("click",(()=>{let t=document.getElementById("projectName").value,d=document.getElementById("workspace"),n=document.createElement("div");n.id=t,n.innerHTML=t;let l=document.createElement("BUTTON");l.innerHTML="Remove",l.className="delete-btn",l.id="delete-"+n.id,d.appendChild(n),d.appendChild(l);const c=document.getElementById("createProject"),o=document.getElementById("projectName");c.style.display="none",o.value="",e()})),(()=>{let e=document.createElement("FORM"),t=document.createElement("label");t.innerHTML="Title:";let d=document.createElement("INPUT");d.setAttribute("type","text"),d.id="todoTitle";let n=document.createElement("label");n.innerHTML="Project";let l=document.createElement("SELECT");l.id="todoProject";let c=document.createElement("INPUT");c.setAttribute("type","button"),c.id="addTodo",c.value="Create";let o=document.createElement("INPUT");o.setAttribute("type","button"),o.id="cancelTodo",o.value="Cancel",e.appendChild(t),e.appendChild(d),e.appendChild(n),e.appendChild(l),e.appendChild(c),e.appendChild(o),createTodo.appendChild(e);const i=document.getElementById("createTodo");addTodoButton.addEventListener("click",(()=>{i.style.display="block";let e=[];l.innerHTML="",e=(()=>{let e=document.getElementById("workspace"),t=[];for(let d=0;d<e.children.length;d++)"delete-btn"!=e.children[d].className&&t.push(e.children[d].id);return t})();for(let t=0;t<e.length;t++){let d=document.createElement("option");d.value=e[t],d.innerHTML=e[t],l.appendChild(d)}}))})(),document.getElementById("addTodo").addEventListener("click",(()=>{let e=document.getElementById("todoTitle").value,d=(document.getElementById("workspace"),document.createElement("div"));d.id=e,d.className="item",d.innerHTML=e;let n=document.createElement("BUTTON");n.innerHTML="View",n.className="view-todo",n.id="view-"+d.id;let l=document.getElementById("todoProject").value;document.getElementById(l).appendChild(d),document.getElementById(l).appendChild(n);const c=document.getElementById("createTodo"),o=document.getElementById("todoTitle");c.style.display="none",o.value="",t()})),(()=>{const e=document.getElementById("cancelTodo"),t=document.getElementById("createTodo"),d=document.getElementById("todoTitle");e.addEventListener("click",(()=>{t.style.display="none",d.value=""}))})(),(()=>{const e=document.getElementById("cancelProject"),t=document.getElementById("createProject"),d=document.getElementById("projectName");e.addEventListener("click",(()=>{t.style.display="none",d.value=""}))})(),document.getElementById("projectName").value="Default",addProject.click(),e(),t(),(()=>{document.createElement("FORM");let e=document.createElement("label");e.id="todoTitleLabel",e.className="todoInfo",e.innerHTML="Title:",todoSpace.appendChild(e);let t=document.createElement("INPUT");t.setAttribute("type","text"),t.className="todoInfo",e.appendChild(t);let d=document.createElement("BUTTON");d.innerHTML="Save",d.id="todoEdit",d.className="todoInfo",todoSpace.appendChild(d)})(),document.getElementById("todoEdit").addEventListener("click",(()=>{let e=document.querySelectorAll(".todoInfo"),d=e[1].id,n=e[1].value,l=document.getElementById(d);document.getElementById("view-"+l.id).id="view-"+n,l.id=n,l.innerHTML=n,e[1].id=n,e[1].value=n,t(n,d)}))})();