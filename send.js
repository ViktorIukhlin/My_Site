$(function () {
    $('#recall').submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: data,
            beforeSend: function () {
                $('#submit').next().text('Отправляю...');
            },
            success: function (res) {
                $('#recall').find('input').val('');
                $('#submit').next().html(res);
            },
            error: function () {
                alert('Ошибка!');
            }
        });
    });
});

