<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

try{
    $data = json_decode(file_get_contents("php://input"));

    function calculator($num1, $num2, $opt) {
    switch($opt) {
        case '+':
        $value = $num1 + $num2;
        break;
        case '-':
        $value = $num1 - $num2;
        break;
        case '*':
        $value = $num1 * $num2;
        break;
        case '/':
        $value = $num1 / $num2;
        break;
        default:
        break;
    }
    return $value;
    }

    $result = calculator($data->firstNumber, $data->secondNumber, $data->operation);

    echo json_encode($result);
}catch(Exception $e){
    echo "Error occured";
}


?>