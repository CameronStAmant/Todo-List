(()=>{"use strict";const e=()=>{let e=document.getElementById("workspace"),t=[];for(let d=1;d<e.children.length;d++)if("delete-btn"!=e.children[d].className){let n=e.children[d].id;t[d]="delete-"+n;let l=document.getElementById(t[d]);l.addEventListener("click",(()=>{let e=l.id.split("-")[1];null!==document.getElementById(e)&&(document.getElementById(e).remove(),l.remove())}))}},t=(e=null,t=null)=>{let d=[],n=document.getElementById("workspace");!function(){for(let e=0;e<n.children.length;e++)if("delete-btn"!=n.children[e].className){let t=document.getElementById(n.children[e].id);for(let n=0;n<t.children.length;n++)for(let l=0;l<t.children[n].children.length;l++)if("view-todo"==t.children[n].children[l].className){let c=t.children[n].children[l].id;d[e]=c;let o=document.getElementById(d[e]),i=function(){let t,n=d[e].split("-")[1],l=document.getElementById(n);if(t=document.querySelectorAll(".todoInfo"),null===l);else{t[1].value=l.firstElementChild.innerHTML,t[1].id=l.id;let e=document.createAttribute("description");e.value=l.getAttribute("description"),t[3].setAttributeNode(e),t[3].value=e.value,t[0].style.display="block",t[1].style.display="block",t[2].style.display="block",t[3].style.display="block",t[4].style.display="block"}};o.getAttribute("listener","true")||(o.addEventListener("click",i),o.setAttribute("listener","true"))}}}()},d=()=>{document.getElementById("workspace"),document.querySelectorAll(".delete-todo").forEach((function(e){e.addEventListener("click",(()=>{let t=e.id.split("-")[1];null!==document.getElementById(t)&&(document.getElementById(t).remove(),e.remove())}))}))};(()=>{let e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="ToDo",t.id="header",e.appendChild(t);let d=document.createElement("BUTTON");d.innerHTML="+ Project",d.id="addProjectButton",e.appendChild(d);let n=document.createElement("BUTTON");n.innerHTML="+ Todo",n.id="addTodoButton",e.appendChild(n);let l=document.createElement("div");l.id="createProject",e.appendChild(l);let c=document.createElement("div");c.id="createTodo",e.appendChild(c);let o=document.createElement("div");o.id="space",e.appendChild(o);let i=document.createElement("div");i.id="workspace",o.appendChild(i);let a=document.createElement("p");a.innerHTML="Projects",a.id="projectHeader",i.appendChild(a);let r=document.createElement("div");r.id="todoSpace",r.innerHTML="Todo",o.appendChild(r)})(),(()=>{let e=document.createElement("FORM"),t=document.createElement("label");t.innerHTML="Name:";let d=document.createElement("INPUT");d.setAttribute("type","text"),d.id="projectName";let n=document.createElement("INPUT");n.setAttribute("type","button"),n.value="Create",n.id="addProject";let l=document.createElement("INPUT");l.setAttribute("type","button"),l.setAttribute("value","Cancel"),l.id="cancelProject",createProject.appendChild(e),createProject.appendChild(t),createProject.appendChild(d),createProject.appendChild(n),createProject.appendChild(l);const c=document.getElementById("createProject"),o=document.getElementById("createTodo");addProjectButton.addEventListener("click",(()=>{o.style.display="none",c.style.display="block"}))})(),document.getElementById("addProject").addEventListener("click",(()=>{let t=document.getElementById("projectName").value,d=document.getElementById("workspace"),n=document.createElement("div");n.id=t,n.className="project";let l=document.createElement("p");l.innerHTML=t,l.className="project",document.createElement("br");let c=document.createElement("BUTTON");c.innerHTML="Remove",c.className="delete-btn",c.id="delete-"+n.id,d.appendChild(n),n.appendChild(l),l.appendChild(c);const o=document.getElementById("createProject"),i=document.getElementById("projectName");o.style.display="none",i.value="",e()})),(()=>{let e=document.createElement("FORM"),t=document.createElement("label");t.innerHTML="Title:";let d=document.createElement("INPUT");d.setAttribute("type","text"),d.id="todoTitle";let n=document.createElement("label");n.innerHTML="Description:";let l=document.createElement("INPUT");l.setAttribute("type","text"),l.id="todoDescription";let c=document.createElement("label");c.innerHTML="Project";let o=document.createElement("SELECT");o.id="todoProject";let i=document.createElement("INPUT");i.setAttribute("type","button"),i.id="addTodo",i.value="Create";let a=document.createElement("INPUT");a.setAttribute("type","button"),a.id="cancelTodo",a.value="Cancel",e.appendChild(t),e.appendChild(d),e.appendChild(n),e.appendChild(l),e.appendChild(c),e.appendChild(o),e.appendChild(i),e.appendChild(a),createTodo.appendChild(e);const r=document.getElementById("createTodo"),m=document.getElementById("createProject");addTodoButton.addEventListener("click",(()=>{m.style.display="none",r.style.display="block";let e=[];o.innerHTML="",e=(()=>{let e=document.getElementById("workspace"),t=[];for(let d=1;d<e.children.length;d++)"delete-btn"!=e.children[d].className&&t.push(e.children[d].id);return t})();for(let t=0;t<e.length;t++){let d=document.createElement("option");d.value=e[t],d.innerHTML=e[t],o.appendChild(d)}}))})(),document.getElementById("addTodo").addEventListener("click",(()=>{let e=document.getElementById("todoTitle").value,n=document.getElementById("todoDescription").value;console.log(n),document.getElementById("workspace");let l=document.createElement("div");l.id=e;let c=document.createAttribute("description");c.value=n,l.setAttributeNode(c),l.className="item";let o=document.createElement("BUTTON");o.innerHTML="View",o.className="view-todo",o.id="view-"+l.id;let i=document.createElement("BUTTON");i.innerHTML="Delete",i.className="delete-todo",i.id="delete-"+l.id;let a=document.getElementById("todoProject").value,r=document.createElement("p");r.innerHTML=e,r.className="pItem",document.createElement("br"),document.getElementById(a).appendChild(l),document.getElementById(l.id).appendChild(r),document.getElementById(l.id).appendChild(o),document.getElementById(l.id).appendChild(i);const m=document.getElementById("createTodo"),u=document.getElementById("todoTitle");m.style.display="none",u.value="",t(),d()})),(()=>{const e=document.getElementById("cancelTodo"),t=document.getElementById("createTodo"),d=document.getElementById("todoTitle");e.addEventListener("click",(()=>{t.style.display="none",d.value=""}))})(),(()=>{const e=document.getElementById("cancelProject"),t=document.getElementById("createProject"),d=document.getElementById("projectName");e.addEventListener("click",(()=>{t.style.display="none",d.value=""}))})(),document.getElementById("projectName").value="Default",addProject.click(),e(),d(),t(),(()=>{document.createElement("FORM");let e=document.createElement("label");e.id="todoTitleLabel",e.className="todoInfo",e.innerHTML="Title:",todoSpace.appendChild(e);let t=document.createElement("INPUT");t.setAttribute("type","text"),t.className="todoInfo",e.appendChild(t);let d=document.createElement("label");d.id="todoDescriptionLabel",d.className="todoInfo",d.innerHTML="Description:",todoSpace.appendChild(d);let n=document.createElement("INPUT");n.setAttribute("type","text"),n.className="todoInfo",d.appendChild(n);let l=document.createElement("BUTTON");l.innerHTML="Save",l.id="todoEdit",l.className="todoInfo",todoSpace.appendChild(l)})(),document.getElementById("todoEdit").addEventListener("click",(()=>{let e=document.querySelectorAll(".todoInfo"),t=e[1].id,d=e[1].value,n=e[3].value,l=document.getElementById(t);l.firstElementChild.innerHTML=d,l.setAttribute("description",n),e[0].style.display="none",e[1].style.display="none",e[2].style.display="none",e[3].style.display="none",e[4].style.display="none"})),d()})();