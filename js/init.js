document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();

    M.Tabs.init('.tabs', {

    });

    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        constrainWidth: false
    });

    var instance = M.Carousel.init(document.querySelectorAll('.carousel'), {
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        noWrap: false,
        duration: 200,
        numVisible: 1,
        shift: 0,
    });

    setTimeout(autoplay, 4500);

    function autoplay() {
        instanceee = M.Carousel.getInstance(document.querySelectorAll('.carousel')[0]);

        instanceee.next();
        setTimeout(autoplay, 4500);
    }

    elems = document.querySelectorAll('.autocomplete');
    instances = M.Autocomplete.init(elems, {
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
        minLength: 3,
    });

    var elems = document.querySelectorAll('.fixed-action-btn');

    var instances = M.FloatingActionButton.init(elems, {
        /*toolbarEnabled: true,*/
        hoverEnabled: false
    });

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,
        {
            //edge: 'right'
        });


   /* var tap_target = document.querySelectorAll('.tap-target');
    console.log(tap_target);

    var instances = M.TapTarget.init(tap_target, {

    });
    //console.log(instances);


    var instance = M.TapTarget.getInstance(tap_target[0]);
    //console.log(instance);
    /!*
    instance.open();*!/

    elems = document.querySelectorAll('.test');
    var index, button;

    for (index = 0; index < elems.length; index++) {
        button = elems[index];
        //button.addEventListener('click', clickHandler);
        /!*button.addEventListener('dblclick', doubleClickHandler);*!/
    }

    function clickHandler(event) {
        //console.log('клик');

        instance.open();
        //console.log(instance);
        event.preventDefault();
    }*/


});