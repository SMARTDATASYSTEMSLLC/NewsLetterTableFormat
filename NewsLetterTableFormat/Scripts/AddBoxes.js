//Trent's code for dropbox change
//Achivment Box
$(document).ready(function () {

    $('#addAchvi').on('click', function () {
        alert("HI");
        var skin = $('#achviTemplate').val();
        var skinSelection = '';
        if (skin == '1') {
            skinSelection = 'LightGrayAchivments';
        }
        else if (skin == '2') {
            skinSelection = 'DarkGrayAchivments';
        }
        else if (skin == '3') {
            skinSelection = 'LightGreenAchivments';
        }
        else if (skin == '4') {
            skinSelection = 'DarkGreenAchivments';
        }
        var newsBox = $('<br/><div class="' + skinSelection + ' padding"contenteditable="true" ><button style="float:right; background-color:red; border:none;" class="closeButton" onclick="$(this).parent().remove();">x</button>Replace this text with your Content</div>').addClass("achviClass");
        $('#AchivBoxes').append(newsBox);

        $('#achviTemplate option').prop('selected', false);
    });



    $('#addEvent').on('click', function () {
        var skinEve = $('#eventTemplate').val();
        var skinSelectionEve = '';
        if (skinEve == '1') {
            skinSelectionEve = 'LightGrayEvents';
        }
        else if (skinEve == '2') {
            skinSelectionEve = 'DarkGrayEvents';
        }
        else if (skinEve == '3') {
            skinSelectionEve = 'LightGreenEvents';
        }
        else if (skinEve == '4') {
            skinSelectionEve = 'DarkGreenEvents';
        }
        var newsBoxEve = $('<br/><div class="' + skinSelectionEve + ' padding"contenteditable="true" ><button style="float:right; background-color:red; border:none;" class="closeButton" onclick="$(this).parent().remove();">x</button>Replace this text with your Content</div>').addClass("eveClass");
        $('#EveBox').append(newsBoxEve);

        $('#eventTemplate option').prop('selected', false);
    });

});