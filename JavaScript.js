$('#suma').click(function(){
    var num1=$('#numero').val();
    var num2=$('#numero2').val();
    var resul={'n1':num1, 'n2':num2};
    console.log(resul);
    $.ajax({
        url:'suma.php',
        type:'POST',
        data:resul
    }).done(function(respuesta){
        console.log(respuesta);
        $('#resultado').text(" = "+respuesta);
    });
})
$('#resta').click(function(){
    var num1=$('#numero').val();
    var num2=$('#numero2').val();
    var resul={'n1':num1, 'n2':num2};
    console.log(resul);
    $.ajax({
        url:'resta.php',
        type:'POST',
        data:resul
    }).done(function(respuesta){
        console.log(respuesta);
        $('#resultado').text(" = "+respuesta);
    });
})
$('#mult').click(function(){
    var num1=$('#numero').val();
    var num2=$('#numero2').val();
    var resul={'n1':num1, 'n2':num2};
    console.log(resul);
    $.ajax({
        url:'producto.php',
        type:'POST',
        data:resul
    }).done(function(respuesta){
        console.log(respuesta);
        $('#resultado').text(" = "+respuesta);
    });
})
$('#div').click(function(){
    var num1=$('#numero').val();
    var num2=$('#numero2').val();
    var resul={'n1':num1, 'n2':num2};
    console.log(resul);
    $.ajax({
        url:'division.php',
        type:'POST',
        data:resul
    }).done(function(respuesta){
        console.log(respuesta);
        $('#resultado').text(" = "+respuesta);
    });
})