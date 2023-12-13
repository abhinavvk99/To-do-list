function addtask() {
    let taskinput=document.getElementById("taskinput")
    let tasklist=document.getElementById("tasklist")

    if (taskinput.value==="") {
        let alertbox=document.createElement("div");
        alertbox.className="alert";
        alertbox.appendChild(document.createTextNode("please enter the task"))

        let closebtn=document.createElement("span");
        closebtn.className="closebtn";
        closebtn.innerHTML="&times;";
        closebtn.onclick=function() {
            alertbox.style.display="none";
        }
        alertbox.appendChild(closebtn);

        document.body.appendChild(alertbox);
        
        let alertwidth=alertbox.offsetWidth;
        let alertheight=alertbox.offsetHeight;

        alertbox.style.marginLeft=-(alertwidth/2)+"px";
        alertbox.style.marginTop=-(alertheight/2)+"px";

        alertbox.style.display="block";
        return;
    }

let li=document.createElement("li");
li.appendChild(document.createTextNode(taskinput.value))

let remove=document.createElement("span");
remove.appendChild(document.createTextNode("x"));
remove.className="remove";
remove.onclick=function(){
    tasklist.removeChild(li);
};
li.appendChild(remove);
tasklist.appendChild(li);
taskinput.value="";

}

