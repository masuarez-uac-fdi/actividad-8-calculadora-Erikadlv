<?php // Implementación de la operación producto
$cant1= $_POST["cantidad1"];
$cant2= $_POST["cantidad2"];
if(isset($_POST['producto'])){
    echo  $cant1 * $cant2;
}

?>