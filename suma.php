<?php // Implementación de la operación suma
$cant1= $_POST["cantidad1"];
$cant2= $_POST["cantidad2"];
if(isset($_POST['suma'])){
    echo  $cant1 + $cant2;
}
?>