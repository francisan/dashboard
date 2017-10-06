<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Fuji Dashboard System</title>


<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel='stylesheet' href="css/style.css" type='text/css' media='all' />
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
	integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
	crossorigin="anonymous">
	
<script src="js/lib/jquery-3.2.1.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
	integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
	crossorigin="anonymous"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
	integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
	crossorigin="anonymous"></script>
<script src="js/Chart.js"></script>
<script src="js/MyChart.js"></script>
<script src="js/main.js"></script>

</head>
<body>
	<div class="container" id="content" tabindex="-1">
		<!-- The main page content -->


		<div class="row">
			<h3>Dashboard System</h3>
		</div>

		<div class="row">
			<br>
		</div>

		<div class="row">
			<div class="col-md-6">
					<canvas id="monthlyExamChart"></canvas>
			</div>
			<div class="col-md-6">
					<canvas id="monthlyExamChart1"></canvas>
			</div>
		</div>
	</div>
</body>
</html>