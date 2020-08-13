<?php
$_POST = json_decode(file_get_contents("php://input"), true);

$message = "Имя: {$_POST['name']}<br>"; // добавляем имя в текст
$message .= "Телефон: {$_POST['phone']}"; // добавляем телефон в текст

require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();

$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'bartfatim_bs'; // логин от вашей почты
$mail->Password = 'Target557999768637'; // пароль от почтового ящика
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->CharSet = 'UTF-8';
$mail->From = 'bartfatim_bs@mail.ru';
$mail->FromName = 'MySite';
$mail->addAddress('bartfatim@mail.ru', 'Андрей');
$mail->isHTML(true);
$mail->Subject = 'Message from MySite';
$mail->Body = $message;

if( $mail->send() ){
	echo json_encode(['result' => $_POST]);
}else{
	echo var_dump($_POST);
}