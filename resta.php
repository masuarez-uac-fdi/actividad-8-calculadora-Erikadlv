<?php // Implementación de la operación resta
$cant1= $_POST["cantidad1"];
$cant2= $_POST["cantidad2"];
if(isset($_POST['resta'])){
    echo  $cant1 - $cant2;
}

?>