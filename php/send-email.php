<?php
	// Your Email
	$recipient = "ialpuin@gmail.com";

	// Sanitize input
	$fname	= filter_var($_POST["fname"], FILTER_SANITIZE_STRING);
	$lname	= filter_var($_POST["lname"], FILTER_SANITIZE_EMAIL);
	$website = $_POST["website"];
	if (!preg_match("~^(?:f|ht)tps?://~i", $website)) $website = "http://" . $website;
	$website = filter_var($website, FILTER_VALIDATE_URL);
	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
	$message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

	// If non required fields are empty
	if ( empty($lname) ){
		$lname = "No last name entered.";
	}
	if ( empty($website) ){
		$website = "No website entered.";
	}

	// Headers
	$headers = 'From: '.$fname.' <'.$email.'>' . "\r\n";
	$headers .= 'Reply-To: '.$email.'' . "\r\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();

	// Subject
	$subject = "New email from contact form";

	// Build Message
	$email_content = "First Name: $fname\n";
	$email_content .= "Last Name: $lname\n";
	$email_content .= "Website: $website\n";
	$email_content .= "Email: $email\n\n";
	$email_content .= "Message:\n$message\n";

	// Check if sent
	if (mail($recipient, $subject, $email_content, $headers)) {
		http_response_code(200);
		echo "success";
	} else {
		http_response_code(500);
		echo "error";
	}
?>
