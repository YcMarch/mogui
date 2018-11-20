$(document).ready(function () {

    $('.m4CList li').each(function (index) {
        $(this).click(function () {
            $('.m4CList li').removeClass('current').eq(index).addClass('current');
            $('.m4CXxkB-1').hide().eq(index).show()
        })
    });

    $('.m8CXxk li').each(function (index) {
        $(this).click(function () {
            $('.m8CXxk li').removeClass('current').eq(index).addClass('current');
            $('.m8CX-B-1').hide().eq(index).show()
        })
    });

})