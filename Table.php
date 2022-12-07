<?
include "db_conn.php";
session_start();
if(isset($_GET["id"]))        
{
    $id = $_GET["id"];
}
$username = $_SESSION['username'];
$stmt = $conn->query("SELECT title,firstname, lastname, email, company, type FROM Users WHERE created_at= '%$username%");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
switch ($id) {
    case 1:
        $stmt = $conn->query("SELECT title,firstname, lastname, email, company, type FROM Users WHERE  created_at= '%$username% AND type = Sales Lead");
        break;
    case 2:
        $stmt = $conn->query("SELECT title,firstname, lastname, email, company, type FROM Users WHERE  created_at= '%$username% AND type = Support");
        break;      
    case 3:
        $stmt = $conn->query("SELECT title,firstname, lastname, email, company, type FROM Users WHERE created_at= '%$username%' AND AssignTo ='%$username%'" );

        break;
    default:
        break;
}
$id = 10;
?>
?>
<table>
<tr>
<th>Name</th>
<th></th>
<th></th>
<th>Email</th>
<th>Company</th>
<th>Type</th>
<th></th>
</tr>
<?php foreach ($results as $row):
    $num = "%$id%";
    ?>
<table>
<tr>
<td><?=$row['title']?></td>
<td><?=$row['fistname']?></td>
<td><?=$row['lastname']?></td>
<td><?=$row['email']?></td>
<td><?=$row['company']?></td>
<td><?=$row['Type']?></td>
<td><a>View</a></td> 
</tr>

<?php
    $id++;
endforeach;?>
</table>