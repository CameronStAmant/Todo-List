(()=>{"use strict";const e=()=>{let e=document.getElementById("workspace"),t=[];for(let d=0;d<e.children.length;d++)if("delete-btn"!=e.children[d].className){let n=e.children[d].id;t[d]="delete-"+n;let l=document.getElementById(t[d]);l.addEventListener("click",(()=>{let e=l.id.split("-")[1];null!==document.getElementById(e)&&(document.getElementById(e).remove(),l.remove())}))}},t=(e=null,t=null)=>{let d=[],n=document.getElementById("workspace");!function(){for(let e=0;e<n.children.length;e++)if("delete-btn"!=n.children[e].className){let t=document.getElementById(n.children[e].id);for(let n=0;n<t.children.length;n++)if("view-todo"==t.children[n].className){let l=t.children[n].id;d[e]=l;let o=document.getElementById(d[e]),c=function(){let t,n=d[e].split("-")[1],l=document.getElementById(n);t=document.querySelectorAll(".todoInfo"),null===l||(t[1].value=l.innerHTML,t[1].id=l.id,t[0].style.display="block",t[1].style.display="block",t[2].style.display="block")};o.getAttribute("listener","true")||(o.addEventListener("click",c),o.setAttribute("listener","true"))}}}()};(()=>{let e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="ToDo",t.id="header",e.appendChild(t);let d=document.createElement("BUTTON");d.innerHTML="+ Project",d.id="addProjectButton",e.appendChild(d);let n=document.createElement("div");n.id="createProject",e.appendChild(n);let l=document.createElement("BUTTON");l.innerHTML="+ Todo",l.id="addTodoButton",e.appendChild(l);let o=document.createElement("div");o.id="createTodo",e.appendChild(o);let c=document.createElement("div");c.id="space",e.appendChild(c);let a=document.createElement("div");a.id="workspace",a.innerHTML="Projects",c.appendChild(a);let i=document.createElement("div");i.id="todoSpace",i.innerHTML="Todo",c.appendChild(i)})(),(()=>{let e=document.createElement("FORM"),t=document.createElement("label");t.innerHTML="Name:";let d=document.createElement("INPUT");d.setAttribute("type","text"),d.id="projectName";let n=document.createElement("INPUT");n.setAttribute("type","button"),n.value="Create",n.id="addProject";let l=document.createElement("INPUT");l.setAttribute("type","button"),l.setAttribute("value","Cancel"),l.id="cancelProject",createProject.appendChild(e),createProject.appendChild(t),createProject.appendChild(d),createProject.appendChild(n),createProject.appendChild(l);const o=document.getElementById("createProject");addProjectButton.addEventListener("click",(()=>{o.style.display="block"}))})(),document.getElementById("addProject").addEventListener("click",(()=>{let t=document.getElementById("projectName").value,d=document.getElementById("workspace"),n=document.createElement("div");n.id=t,n.innerHTML=t;let l=document.createElement("BUTTON");l.innerHTML="Remove",l.className="delete-btn",l.id="delete-"+n.id,d.appendChild(n),d.appendChild(l);const o=document.getElementById("createProject"),c=document.getElementById("projectName");o.style.display="none",c.value="",e()})),(()=>{let e=document.createElement("FORM"),t=document.createElement("label");t.innerHTML="Title:";let d=document.createElement("INPUT");d.setAttribute("type","text"),d.id="todoTitle";let n=document.createElement("label");n.innerHTML="Project";let l=document.createElement("SELECT");l.id="todoProject";let o=document.createElement("INPUT");o.setAttribute("type","button"),o.id="addTodo",o.value="Create";let c=document.createElement("INPUT");c.setAttribute("type","button"),c.id="cancelTodo",c.value="Cancel",e.appendChild(t),e.appendChild(d),e.appendChild(n),e.appendChild(l),e.appendChild(o),e.appendChild(c),createTodo.appendChild(e);const a=document.getElementById("createTodo");addTodoButton.addEventListener("click",(()=>{a.style.display="block";let e=[];l.innerHTML="",e=(()=>{let e=document.getElementById("workspace"),t=[];for(let d=0;d<e.children.length;d++)"delete-btn"!=e.children[d].className&&t.push(e.children[d].id);return t})();for(let t=0;t<e.length;t++){let d=document.createElement("option");d.value=e[t],d.innerHTML=e[t],l.appendChild(d)}}))})(),document.getElementById("addTodo").addEventListener("click",(()=>{let e=document.getElementById("todoTitle").value,d=(document.getElementById("workspace"),document.createElement("div"));d.id=e,d.className="item",d.innerHTML=e;let n=document.createElement("BUTTON");n.innerHTML="View",n.className="view-todo",n.id="view-"+d.id;let l=document.getElementById("todoProject").value;document.getElementById(l).appendChild(d),document.getElementById(l).appendChild(n);const o=document.getElementById("createTodo"),c=document.getElementById("todoTitle");o.style.display="none",c.value="",t()})),(()=>{const e=document.getElementById("cancelTodo"),t=document.getElementById("createTodo"),d=document.getElementById("todoTitle");e.addEventListener("click",(()=>{t.style.display="none",d.value=""}))})(),(()=>{const e=document.getElementById("cancelProject"),t=document.getElementById("createProject"),d=document.getElementById("projectName");e.addEventListener("click",(()=>{t.style.display="none",d.value=""}))})(),document.getElementById("projectName").value="Default",addProject.click(),e(),t(),(()=>{document.createElement("FORM");let e=document.createElement("label");e.id="todoTitleLabel",e.className="todoInfo",e.innerHTML="Title:",todoSpace.appendChild(e);let t=document.createElement("INPUT");t.setAttribute("type","text"),t.className="todoInfo",e.appendChild(t);let d=document.createElement("BUTTON");d.innerHTML="Save",d.id="todoEdit",d.className="todoInfo",todoSpace.appendChild(d)})(),document.getElementById("todoEdit").addEventListener("click",(()=>{let e=document.querySelectorAll(".todoInfo"),t=e[1].id,d=e[1].value;console.log("getID "+t);let n=document.getElementById(t);console.log("updateID "+e[1]),console.log("old HTML "+n.innerHTML),n.innerHTML=d,console.log("new HTML "+n.innerHTML)}))})();