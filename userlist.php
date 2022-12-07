<?
include "db_conn.php";

$stmt = $conn->query("SELECT firstname, lastname,email, role, created_at FROM Users");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<table>
<tr>
<th>Name</th>
<th></th>
<th>Email</th>
<th>Role</th>
<th>Created at</th>
</tr>
<?php foreach ($results as $row): ?>
<table>
<tr>
<td><?=$row['fistname']?></td>
<td><?=$row['lastname']?></td>
<td><?=$row['email']?></td>
<td><?=$row['role']?></td>
<td><?=$row['created_at']?></td>
</tr>

<?php endforeach;?>
</table>