<?php 
    require_once './php/db_connect.php'
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Top Baby Names</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    


  <!-- Custom fonts for this template -->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="css/clean-blog.min.css" rel="stylesheet">
  <link href="css/style.css" rel=stylesheet>

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="index.php"> Project 6 </a>
    
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/home-bg.jpeg')">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Top Baby Names</h1>
            <span class="subheading">Survey</span>
          </div>
        </div>
      </div>
    </div>
  </header>


  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview">
          
            <h2 class ="post-title"> </h2>
            
            
<?php
        
    function input_fix($input)
    {//removes spaces or slashes
        $input=trim($input);
        $input=stripslashes($input);
        $input =htmlspecialchars($input);
        return $input;
    }

    $invalid_name=$invalid_gender="";
    if($_SERVER["REQUEST_METHOD"]=="POST") 
    {//checks the form for a submission
        if(empty($_POST["name"]))
        {
            $invalid_name= "Please enter a name";// error messages
       
        }
        
        else
        {
            $name=input_fix($_POST["name"]);//validates
        }

        if(empty($_POST["gender"]))
        {
            $invalid_gender="Please enter a gender";//error code when a gender isnt selected 
        }

        else
        {
            $gender=input_fix($_POST["gender"]);//sends to function to be validated
        }

        if(!empty($name))
        {
            $name =ucfirst(strtolower($name));//making it look nice
            $query_form= "SELECT * FROM BABYNAMES WHERE `name` = '" . $name . "' AND `gender` = '" . $gender . "'";//declaring a name variable
            $result=$db->query($query_form);//accessing table variable connecting to the db
            $row=$result->fetch_assoc();//runs through rows
            $name_row =$row['name'];//to populate names
            $gender_row=$row['gender'];//to populate gender
            $count_row =$row['count'];//to populate count
        }
        
        //if and else statement for name 
        if($name_row === $name) 
        {
            $add_count = "UPDATE `BABYNAMES` set `count` = `count` + 1 WHERE `name` ='" . $name_row."';";
            $count_update = $db->query($add_count);
        }
        
        else
        {
            $new_name="INSERT INTO BABYNAMES (`name`, `gender`, `count`) VALUES ('" . $name . "','" . $gender . "', '1')";//insert unmatched
            $add_new_name = $db->query($new_name);
   
            echo "<meta http-equiv='refresh' content ='0'>";//page refresh 
   
        }
   
}

?>    

<!--PHP display-->    
<form id="baby" method= "post" action="/~mnoel2018/p6/index.php"> 
    <fieldset>
        <label>Select Gender <span style="color:red">*</span></label>
            <div>
    <input type="radio" name="gender" value="M" required/><!--Male input-->   
    <label for="boy">Male</label><br>
    <input type="radio" name = "gender" value="F" required/><!--Female input-->
    <label for="girl">Female</label>
    <span class ="error"> <?php echo $invalid_gender ?></span>
        </div>    
    </fieldset>
    <label> Please enter baby name! <span style="color:red">*</span> </label><br>
    <input type= "text" name="name" placeholder="" required/><!--this is where they input a name and click the submit button--->
     <span class ="error"> <?php echo $invalid_name ?></span>
    
    <button type ="submit" name="submit1" value="submit">Submit</button><br>
</form>
            
    <table style = "width:100%">
        <br><h3> Top Boy Names </h3><br>
    <thead>
        <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Votes</th>
        </tr>
    </thead>            
    
            
        <tbody>  
            <?php
                $male_name = "SELECT * FROM `BABYNAMES` WHERE `gender` = 'M' ORDER BY `count` DESC LIMIT 5";  
                $male_row1=$db->query($male_name);
                $male_i=1; 
        
                foreach ($male_row1 as $result1)
                {
                    echo '<tr>
                    <td>'. $male_i++ . '</td>
                    <td>'. $result1['name'] . '</td>
                    <td>'. $result1['count'] . '</td>
                    </tr>'; 
                }
                ?>
        </tbody>
    </table>
            
            
    <table style="width:100%">
        <br><h4> Top Girl Names </h4><br>
    <thead>
        <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Votes</th>
        </tr>
    </thead> 
        
        <tbody>
    
            <?php
                $female_name = "SELECT * FROM `BABYNAMES` WHERE `gender` = 'F' ORDER BY `count` DESC LIMIT 5";
                $female_row=$db->query($female_name);
                $female_i=1; 
        
                foreach ($female_row as $result2)
                {
    
                    echo '<tr>
                    <td>'. $female_i++ . '</td>
                    <td>'. $result2['name'] . '</td>
                    <td>'. $result2['count'] . '</td>
                    </tr>'; 
                }
            ?>
           </tbody>
     </table>
            
            
  <!-- Footer -->
  <footer>
        <hr>
      <p class="copyright text-muted">Copyright &copy; 2019 Top Baby Names - Makenson Noel 
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="js/clean-blog.min.js"></script>

</body>

</html>
