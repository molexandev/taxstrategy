$(function () {
   
    var $range = $(".calculate__input-filter"),
        $input = $(".calculate__input-num"),
        $input2 = $(".calculate__input-num-2"),
        instance,
        min = 50000,
        max = 1000000;


    $range.ionRangeSlider({
        skin: "big",
        type: "single",        
        min: min,
        max: max,
        step: 10000,
        from: 400000,
        onStart: function (data) {
            $input.prop("value", data.from);
            $input2.prop("value", formatValue(data.from * 1.28, 2));
        },
        onChange: function (data) {
            $input.prop("value", data.from);
            $input2.prop("value", formatValue(data.from * 1.28, 2));
        },
    });

    instance = $range.data("ionRangeSlider");

    $input.on("change keyup", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val,
        });
    });

    function formatValue(value, decimalPlaces) {
        return Number(value.toFixed(decimalPlaces));
    }

    $(".clients-stories__slider").slick({
      dots: true,
      arrows: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      draggable: true,
  });


    $(".rating-1").rateYo({
      starWidth: "22px",
      starHeight: "22px",
      ratedFill: "#C8B178",
      rating: 5,
      spacing: "5px"
    });

    $(".rating-2").rateYo({
      starWidth: "17px",
      ratedFill: "#C8B178",
      rating: 5,
      spacing: "3px"
    });

});
