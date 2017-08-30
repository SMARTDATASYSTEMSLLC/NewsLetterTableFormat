$(document).ready(function () {
    $('#btnEvents').click(function () {
        $('#eventTemplate').show();
        $("#addEvent").show();
        $('.closeButton').show();
        $('.eveClass').attr('contentEditable', 'true');
        $('#preview').show();
        $('#pdf').show();
    });

    $('#btnAchviments').click(function () {
        $('#achviTemplate').show();
        $('#addAchvi').show();
        $('.closeButton').show();
        $('.achviClass').attr('contentEditable', 'true');
        $('#preview').show();
        $('#pdf').show();
    });

    $('#preview').click(function () {
        $('#closePreviewButton').show();
        $('#btnAchviments').hide();
        $('#btnSaveAchiv').hide();
        $('#btnEvents').hide();
        $('#btnSaveEvents').hide();
    });
});

