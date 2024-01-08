var report = function(milesPerHour, kilometersPerHour)
{

    document.getElementById("result").innerHTML =
    milesPerHour + " MPH = " + kilometersPerHour + " KM";

};

var Invalid = function()
{
    document.getElementById("result").innerHTML = "INVALID SPEED ";
  
};

document.getElementById("MPH_KM").onclick = function ()
{

    var mph = document.getElementById("Speed").value;
 
    if(mph < 0)
    {
        
        return Invalid();
    }
    
    var km =  mph * 1.60934;
    report(mph, km);
};

document.getElementById("KM_MPH").onclick = function () 
{

    var km = document.getElementById("Speed").value;
    
   if(km < 0)
   {
    
    return Invalid();   
   }
    
    var mph = km * 0.621371;
    report(mph, km);
};