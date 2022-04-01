    $(".appointTime").click(function(event){
        $(".appointTime").removeClass("appointActive");
        $(this).addClass("appointActive");
        var time = $(".appointActive p").text();
        $("#time").val(time);
    });
