//This function is where the user inputs the items on click
$('input').keypress(function(event)
 {
    //After the item is typed and entered, it is then added to the list 
	if(event.which === 13)
    {
		var todoItems = $(this).val();
		$(this).val("");
		$('ul').append('<li>' + todoItems + '<span><i class="fa fa-trash"</i></span>');
	}
});

//When an item is selected, it crosses the item out 
$('ul').on('click', 'li', function()
{
	$(this).toggleClass('done');
});

//This function is the delete button
$('ul').on('click', "span" , function(event)
{
    //The will remove items in the list
	$(this).parent().fadeOut(500,function()
    {
		$(this).remove();
	});
    
    //Prevents further propagation
	event.stopPropagation();
});