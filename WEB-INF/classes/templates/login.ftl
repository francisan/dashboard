<html >

<head>
	<title>Fujifilm Dash Board</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>
	<div class="container" style="margin-top: 300px;">
		<img src="images/login.jpg" class="img-responsive center-block" width="300" height="300" alt="Logo" />
		<form action="/login" method="POST" class="form-signin">
			<h3 class="form-signin-heading" text="Login"></h3>
			<br/>
			<input type="text" id="email" name="email" class="form-control" /> <br/> 
			
			<input type="password" id="password" name="password" class="form-control" /> <br /> 
				
			<button  class="btn btn-lg btn-primary btn-block" name="Submit" value="Login" type="Submit" >Login</button>
		</form>
	</div>
</body>
</html>