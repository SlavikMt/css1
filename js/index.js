window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, );
        }
    });
});
//fading out main heading
$('#logo a').fadeOut(0).fadeIn(2000);
//more/less text

$(document).ready(function(){
    $("#btn_start").click(function(){
        $(".message").fadeIn(1000).show();
    });
    $("#btn_reset").click(function(){
        $(".message").hide();
    });
});


function show(btn_start,btn_reset){
  document.getElementById(btn_start).className = "btn_res"; 
  document.getElementById(btn_reset).className = "";
}




// btn news onclick displaying

 let articles = document.getElementsByClassName('news-item');
for (let i = 1; i <= articles.length; i++) {
    articles[i].addEventListener('click', disp);

    function disp() {
        let articleBtn = articles[i].querySelector('.btn-news');
        if (articleBtn.style.display === '') {
            articleBtn.style.display = 'inline-block';
        } else {
            articleBtn.style.display = '';
        }
    }
}


// navbar on scroll sticky

