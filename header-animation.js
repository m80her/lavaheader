// header animation

    // unobtrusively add 5 divs to the topbar element
    function populate() {

        $('#mast').append('<div id="animation"></div>');

        for (i=0; i<5; i++) {
            $('#mast #animation').append('<div></div>');
        }

    }

    // animate the divs in the topbar
    function runIt() {

        var startPos = Math.floor(Math.random() * 50) + '%'                 // random start position 0 - 50%
        var endPos = Math.floor(Math.random() * 50) + '%'                   // random end position 0 - 50%
        var width = Math.floor(Math.random() * (150-20) + 20) + 'px'        // random width 20 - 150px
        var duration = Math.floor(Math.random() * (7000 - 2000) + 2000)     // random duration 2000 - 7000ms

        // $(this).css('transform','translate('+startPos+')');
        // $(this).css('transform','translate('+endPos+')');
        
        $(this).stop(true).animate({
            opacity: 1,
            left: startPos,
            width: width
        }, duration, function() {
            $(this).animate({
                opacity: 0,
                left: endPos,
                width: width
            }, duration, runIt); // callback to loop animation
        });

    }


    $().ready(function() {

        populate();

        $('#mast #animation div').each(runIt);

    });

	// $('ol.vid-listing > li').eq(-1).css( "height", $('ol.vid-listing > li').eq(-2).outerHeight() );

// end header animation
