<?php

    include "db_conn.php";

    $filtercategory = $_GET["category"];

    //Filter by categories
    foreach ($filtercategory as $category){ 
        $sql = "SELECT DISTINCT address, start_date, end_date, start_time, end_time, category FROM listing WHERE category LIKE '%" . $category . "%'";
        $result = $mysqli->query($sql);
    }
    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
        echo "<br>address: " . $row["address"]. "<br>Date: " . $row["start_date"]. " ~ " . $row["end_date"] . "<br>Time: " . $row["start_time"]. " ~ " . $row["end_time"] . "<br>Category: " . $row["category"]. "<br>";
        }
    } 
    else 
    {
        echo "0 results";
    }

?>