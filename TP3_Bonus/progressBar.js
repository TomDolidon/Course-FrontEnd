function progress(percent) {

    if (percent > 100) {
        alert("Rentrez une valeur entre 0 et 100 !")
    } else {
        var progressBarWidth = percent * $('#progressBar').width() / 100;

        $('#progressBar').find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
    
        if (percent < 25){
            $('#progressBar').find('div').css({ 'background': 'Red' });
        } else if (percent < 50){
            $('#progressBar').find('div').css({ 'background': 'Orange' });
        } else if (percent < 75){
            $('#progressBar').find('div').css({ 'background': 'Yellow' });
        } else{
            $('#progressBar').find('div').css({ 'background': 'LightGreen' });
        }
    }
}


function reset() {
    progress(0);
}

function avancer() {
    var val = $('#valeur').val();
    progress(val);
}


$('#valeur').on("keyup", function(event) {  
  if (event.keyCode === 13) {
    avancer($('#valeur').val());
  }
}); 
