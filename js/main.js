

$(function() {
    
     $('#storyhide').hide();
    $('#storyhide1').hide();
//hides the story from view- not working not sure why
   
    
    //HEY DALLAS would I have to assign multiple stories in the html file to make this shizz work? They all have story ids.


    //Generate BTN click 

$('#btn-click').click(function (e) {
   
    e.preventDefault()
    //this code grabs stuff from the input boxes, then appends them to hte DOM, .val grabs value from the form inputs, .empty removes any text from that specific class in the story and .append then adds new value to the story. Pretty neat! Link:http://mherman.org/blog/2014/01/15/mad-libs-with-jquery-a-gentle-introduction-to-jquery/
    
 $('.person').empty().append($('input.person').val());
$('.adjective').empty().append($('input.adjective').val());
$('.noun').empty().append($('input.noun').val());
$('.noun2').empty().append($('input.plural-noun').val());
$('.verb').empty().append($('input.verb').val());
    
    $('#storyhide').show();
    $('#storyhide1').show();
    
  $('#story').show();  
    
    $(':input').val('');
    
    $('#questions').hide();
    
    });
    
//var input = $("input").val('')
//       console.log(input)
        

    

    
    //Play Again BTN
    $("#play-btn").click(function(e){
        
        //$('#storyhide').show();
        
         $('#story').hide();
        
       $('#questions').show();
////THIS ADDS STUFF TO THE DOM 
         $(":input").val('');
//$(".results").empty().append(input);
       
        $('#storyhide').hide();
    $('#storyhide1').hide();
    
    
});
    
    });