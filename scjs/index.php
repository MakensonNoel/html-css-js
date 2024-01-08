<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Speed Converter</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

  <!-- Custom styles for this template -->
  <link href="css/coming-soon.min.css" rel="stylesheet">

</head>

<body>

  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="mp4/bg.mp4" type="video/mp4">
  </video>

  <div class="masthead">
    <div class="masthead-bg"></div>
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-12 my-auto">
          <div class="masthead-content text-white py-5 py-md-0">
            <h1 class="mb-3">Speed Converter</h1> <!-- Title -->
              <p class="mb-5"> Convert Miles Per Hour to Kilometers Per Hour and Kilometers Per Hour to Miles Per Hour. </p> <!-- Opening description -->
              
            <div class="input-group input-group-newsletter">
                <!-- My Php -->
                <?php
                
                if (isset ($_POST['units']))
                {
                    
                    $distance = $_POST['distance']; // this is the variable for distance, 
                    $units = $_POST['units']; // this is the variable for units 
                    
                    if ($units=='mph')
                    {
                        $km = $distance * 1.60934; // to get the miles to kilometers, distance has to be multiplied by 1.60934

                        if ($km > 0)
                        {
                          echo 'The distance is equal to ' .round($km).' kilometers.'; // Rounds distance 
                        }

                        else 
                        {
                          echo 'Invalid Speed'; // shows on screen when speed is less then 0 
                        }
                    }

                    else if ($units=='km')
                    {
                        $mph = $distance / 1.60934; // to get the kilometers, distance has to be divided by 1.60934
                        
                        if ($mph > 0)
                        {
                          echo 'The distance is equal to ' .round($mph).' miles.'; // Rounds distance 
                        }

                        else 
                        {
                          echo 'Invalid Speed '; // shows on screen when speed is then 0 
                        } 
                    }
                    
                }
                        
                ?>
                      
                    
                <form action="#" method="post">
                <!-- Where the user enters there input -->
                <br>
                <label for="distance">Enter Speed </label> 
                <input type="text" name="distance" /><br>
                    
                
                <!--These are the selctions for the conversions, they can be miles per hour or kilometers per hour -->    
                <label for="MPH">Miles: </label>
                <input type="radio" name="units" value="mph" /><br> 

                <label for="KM">Kilometers: </label>
                <input type="radio" name="units" value="km" /><br>
                    
                    
                <!--Submit Button -->
                <button type=submit class="btn btn-primary">Submit</button>
                </form>

                <!-- My PHP ends here -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>
</html>
