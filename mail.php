<?php

$message = "Имя: {$_POST['name']}<br>"; // добавляем имя в текст
$message .= "Телефон: {$_POST['phone']}"; // добавляем телефон в текст

require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();

$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'baraban.06'; // логин от вашей почты
$mail->Password = 'igrazdiil'; // пароль от почтового ящика
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->CharSet = 'UTF-8';
$mail->From = 'baraban.06@mail.ru';
$mail->FromName = 'MySite';
$mail->addAddress('bartfatim@mail.ru', 'Андрей');
$mail->isHTML(true);
$mail->Subject = 'Message from MySite';
$mail->Body = $message;

if( $mail->send() ){
	echo '<p style="color: green;">Ваше сообщение отправлено</p>';
}else{
	echo '<p style="color: red;">Ошибка!</p>';
}