<?php // Implementación de la operación división
$cant1= $_POST["cantidad1"];
$cant2= $_POST["cantidad2"];
if(isset($_POST['division'])){
    echo  $cant1 / $cant2;
}

?>