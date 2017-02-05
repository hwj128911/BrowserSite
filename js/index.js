/**
 * Created by HWJ on 2017/2/4.
 * Email:hwj128911@outlook.com
 * $
 */
require.config({
    paths: {
        jquery: '../asset/js/jquery-3.1.1.min',
        bootstrap: '../asset/js/bootstrap.min'
    },
    shim:{
        'bootstrap':['jquery']
    }
});

requirejs(['jquery','bootstrap'], function ($) {
    $(document).ready(function(){

        $("#demo-navbar").find(".dropdown-menu a").click(function(e){

            var href = $(this).attr("href");

            $("#tab-list").find("a[href='" + href + "']").tab("show");

            e.preventDefault();

            $(document).scrollTop($(href).offset().top - 120);

        })

    })
});