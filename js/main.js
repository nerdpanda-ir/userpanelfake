var checkShow = false;
function showTable(tableID) {
    var getTable =window.document.body.querySelector("#"+tableID);
    var getTbody = getTable.querySelector("tbody");

    checkShow = true;
    var ajx = ((window.XMLHttpRequest)? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"))
    ajx.open("POST","users.php",true);
    ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajx.send();
    console.log(ajx)
    ajx.addEventListener('readystatechange',function () {
        if(ajx.readyState==4&& ajx.status==200)
        {

            var users = window.JSON.parse(ajx.responseText);
            var userCounter = 1;
            // getTbody.innerText = ajx.responseText;
            var fLname = "";
            console.log(users);
            for(var usersIndex in users)
            {

                var row = window.document.createElement("tr");
                for(var userPropertyIndex in users[usersIndex])
                {
                    var obj= users[usersIndex][userPropertyIndex];

                    if(userPropertyIndex=="u_Fname"||userPropertyIndex=="u_Lname")
                        fLname+=obj+" ";
                    switch (userPropertyIndex)
                    {

                        case 'u_Id':
                        case 'u_Email':
                        case 'u_Phone':
                        case 'u_Address':
                        case 'u_Birthday':
                        case 'u_Regdate':
                        case 'u_Lastvisit':
                        case 'u_Subgroup':
                            var field = window.document.createElement("td");
                            field.innerText=obj;
                            break;
                        case "u_editable":
                            var field = window.document.createElement("td");
                            var deleteIcon =window.document.createElement('i');
                            var iconClass = ["Medium","material-icons"];
                            for(var i=0; i<iconClass.length;i++)
                                deleteIcon.classList.add(iconClass[i]);
                            deleteIcon.innerText = "delete_sweep";
                            field.appendChild(deleteIcon);
                            field.innerHTML += "&nbsp;&nbsp;&nbsp;";
                            var deleteIcon =window.document.createElement('i');
                            var iconClass = ["Medium","material-icons"];
                            for(var i=0; i<iconClass.length;i++)
                                deleteIcon.classList.add(iconClass[i]);
                            deleteIcon.innerText = "create";
                            field.appendChild(deleteIcon);
                            field.innerHTML += "&nbsp;&nbsp;&nbsp;";
                            break;
                        case 'u_Avatar':
                            var field = window.document.createElement("td");
                            var createAvatar = window.document.createElement("img");
                            createAvatar.src=obj;
                            field.appendChild(createAvatar);

                            break;
                        case 'u_Lname':
                            var field = window.document.createElement("td");
                            field.innerText+=fLname;

                            break;
                        case 'u_Email':
                            break;



                    }

                    row.appendChild(field)
                }
                /* ---------- apend ---------- */
                var fieldChick = window.document.createElement("td");
                var deleteIcon =window.document.createElement('input');
                deleteIcon.type="checkbox"
                deleteIcon.id="test"+userCounter;
                fieldChick.appendChild(deleteIcon);
                fieldChick.innerHTML += " <label "+"for="+deleteIcon.id+">"+"</label>"
                row.appendChild(fieldChick);
                getTbody.appendChild(row)
                /* ---------- apend ---------- */
                fLname = "";
                userCounter++;

            }

        }
    })
}
window.addEventListener('load',function () {
    var showUsersBtn = window.document.querySelector("#showUsers");
    if(showUsersBtn.querySelector("a").classList.contains('active')==true && (checkShow) ==false)
    {
        showTable("usersTable")

    }
    else if(showUsersBtn.querySelector("a").classList.contains('active')==false  && (checkShow) ==false)
    {

        showUsersBtn.addEventListener('click',function () {
            if((checkShow) ==false)
            {
                showTable("usersTable")

            }
        })
    }
})