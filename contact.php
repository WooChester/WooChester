<? php
	
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];
	
	$email_from = "chesterwoo409@gmail.com";
	$email_subject = "Form Submission";
	$email_body = "Name: $name\n"
					"E-mail: $email\n"
					"Message: $message\n";
					
	$to = $email_from;
	
	$headers = "From: $email_from \r\n";
	$headers = "Reply-To: $visitor_email \r\n";
	
	mail($to, $email_subject, $email_body, $headers);
	
	header("Location: indexBetterWebsite.html");



?>