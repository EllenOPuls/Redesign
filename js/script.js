$(document).ready(function() {
	
	$('.drop1').hide();

	$('.wrapper1').mouseover(function() {
        $('.drop1').slideDown('fast');
	});
	
	$('.wrapper1').mouseleave(function() {
        $('.drop1').slideUp('fast');
	});
    
    $('.drop2').hide();

	$('.wrapper2').mouseover(function() {
        $('.drop2').slideDown('fast');
	});
	
	$('.wrapper2').mouseleave(function() {
        $('.drop2').slideUp('fast');
	});
    
    $('.drop3').hide();

	$('.wrapper3').mouseover(function() {
        $('.drop3').slideDown('fast');
	});
	
	$('.wrapper3').mouseleave(function() {
        $('.drop3').slideUp('fast');
	});
    
    $('.drop4').hide();

	$('.wrapper4').mouseover(function() {
        $('.drop4').slideDown('fast');
	});
	
	$('.wrapper4').mouseleave(function() {
        $('.drop4').slideUp('fast');
	});
    
    var img = $("#privategraphicBW");
    
$('#privategraphicBW').hover(function() {
    $(this).attr('src', 'imgs/privategraphicBL.jpg');
    $(this).css('cursor', 'pointer');
    }, function() {
    $(this).attr('src', 'imgs/privategraphicBW.jpg'); 
});

var img = $("#walkingraphicBW");
    
$('#walkingraphicBW').hover(function() {
    $(this).attr('src', 'imgs/walkingraphicBL.jpg');
    $(this).css('cursor', 'pointer');
    }, function() {
    $(this).attr('src', 'imgs/walkingraphicBW.jpg'); 
});
  
var img = $("#eventboards");
    
$('#eventboards').hover(function() {
    $(this).attr('src', 'imgs/BLboards.jpg');
    $(this).css('cursor', 'pointer');
    }, function() {
    $(this).attr('src', 'imgs/bwBoards.jpg');
});
    
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var img = $(".black");
img.each(function() {
    var item = $(this);
    item.mouseenter(function() {
    if(item.attr("src") == "imgs/blackskull.jpg") {
        item.attr('src', 'imgs/blueskull.jpg'); 
    }
    else {
        item.attr('src', 'imgs/blackskull.jpg');
    }
    });
});
    
var img = $(".b");
img.each(function() {
    var item = $(this);
    item.mouseenter(function() {
    if(item.attr("src") == "imgs/sideboard.jpg") {
        item.attr('src', 'imgs/sideboard2.jpg'); 
    }
    else {
        item.attr('src', 'imgs/sideboard.jpg');
    }
    });
});

    
$('#events').click(function() {
    if($('#clickbar').css('display') == 'none') {
       $('#clickbar').slideDown(1000);
       }
    else {
      $('#clickbar').slideUp(1000);                 
    }
});
    
 $('.walkin').click(function() {
    if($('#clickbar2').css('display') == 'none') {
       $('#clickbar2').slideDown(1000);
       }
    else {
      $('#clickbar2').slideUp(1000);                 
    }
});
    
$('.private').click(function() {
    if($('#clickbar3').css('display') == 'none') {
       $('#clickbar3').slideDown(1000);
       }
    else {
      $('#clickbar3').slideUp(1000);                 
    }
});


});