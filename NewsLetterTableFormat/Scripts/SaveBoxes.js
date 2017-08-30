$(document).ready(function () {

    $('#btnSaveEvents').click(function () {

        $('#eventTemplate').hide();
        $("#addEvent").hide();
        $('.closeButton').hide();
        $('.eveClass').attr('contentEditable', 'false');
        $('#preview').show();

    });

    $('#btnSaveAchiv').click(function () {

        $('#achviTemplate').hide();
        $('#addAchvi').hide();
        $('.closeButton').hide();
        $('.achviClass').attr('contentEditable', 'false');
        $('#preview').show();
    });

    $('#closePreviewButton').click(function () {
        $('#closePreviewButton').hide();
        $('#btnAchviments').show();
        $('#btnSaveAchiv').show();
        $('#btnEvents').show();
        $('#btnSaveEvents').show();
        $('#preview').hide();

    });

});
