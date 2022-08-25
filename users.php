<?php
 require_once "core.php";
    $users = array();
for($userCounter = 1 ; $userCounter<=10;$userCounter++)
{
    if($userCounter==1)
        $createUser = array("u_Id"=>"itoneDeveloper","u_Avatar"=>randomAvatar(),"u_Fname"=>"محمد رضا ","u_Lname"=>"شمس ","u_Email"=>"itone.itone@yahoo.com","u_Phone"=>"09014773870","u_Address"=>"خیابان سروش کوچه دهم ","u_Birthday"=>"1380/04/24","u_editable"=>true,"u_Regdate"=>"2012/12/12","u_Lastvisit"=>"2018/12/06","u_Subgroup"=>"admin");
    else
        $createUser = array("u_Id"=>getUserNames(),"u_Avatar"=>randomAvatar(),"u_Fname"=>getNames(),"u_Lname"=>getFmily(),"u_Email"=>getEmails(),"u_Phone"=>getPhons(),"u_Address"=>getAddress(),"u_Birthday"=>"1380/04/24","u_editable"=>true,"u_Regdate"=>"2012/12/12","u_Lastvisit"=>"2018/12/06","u_Subgroup"=>"کاربر عادی ");
    array_push($users,$createUser);
}
$userCounter = 1;
$propertyCounter = 1 ;
$txt = "";
$json="{";
foreach ($users as $key=>$value)
{
    $json.="\"user".$userCounter."\" : {";
    foreach ($value as $userPeropertyName=>$userPeroperty)
    {

        $json .= (($propertyCounter==count($value))?"\"".$userPeropertyName."\":"."\"".$userPeroperty."\"" : "\"".$userPeropertyName."\":"."\"".$userPeroperty."\",");
        $propertyCounter++;
    }


    $propertyCounter=1;
    $json.=(($userCounter==count($users))?"}":"},");
    $userCounter++;
}
$json.="}";
echo $json;
?>