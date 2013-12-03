var Handler = {
    run : function () {
        var page = location.href.match(/page=([a-z0-9]+)/);
        console.log(page);
        if(page != null && page[1]) {
            page = page[1];
            var controller = page + "Controller";
            console.log(controller, this[controller]);
            try {
                this[controller]();
                setTimeout(function(){
                    location.reload();
                }, (10 * 60 * 1000));
            } catch (e) {
                console.log("Controller error: " + e.message)
            }
            return true;
        }

        console.log('Controller not found');
    },

    getNextPlanet : function (Planet) {
        var firstPlanet = $('#myPlanets .smallplanet:first').next();
        var nextPlanet = Planet.parent().next();

        if(nextPlanet.length == 0) {
            nextPlanet = $('#myPlanets .smallplanet:first').next();
        } else {
            var planetName = nextPlanet.find('.planet-name').text();
            if(planetName.match(/^M.*/) != null) {
                nextPlanet = nextPlanet.next();
            }
        }


        return nextPlanet;
    },

    resourcesController : function() {
        console.log('res');
        var order = [
            [$('.supply1 .fastBuild'), 15],
            [$('.supply2 .fastBuild'), 14],
            [$('.supply3 .fastBuild'), 18],
            [$('.supply4 .fastBuild'), 10],
        ];

        $('#building .level').each(function(){ $(this).find('span').remove() });

        for(i in order) {
            if(!order[i][0]) {
                continue;
            }
            var level = parseInt(order[i][0].parent().find('.level').text());

            if(level == NaN) {
                continue;
            }
            var weight = order[i][1];
            order[i][2] = weight * level;
        }

        min = 99999; minKey = 99999;
        for(i in order) {
            if(order[i][2] < min) {
                min = order[i][2] < min ? order[i][2] : min;
                minKey = i;
            }

        }

        console.log(order, minKey);

        if(order[minKey][0]) {
            order[minKey][0].click();
        }
    },

    movementController : function() {
        var nextPlanet = this.getNextPlanet($('#myPlanets .active'));
        location.href = nextPlanet.find('a').attr('href');
    },

    fleet1Controller : function() {
        $('#button203,#button202').find('a').click();
        $('#continue').click();
    },

    fleet2Controller : function() {
        var player = $('#playerName>span').text();

        if(player == 'vhredny') {
            var nextPlanet = this.getNextPlanet($('#myPlanets .active'));
            var coords = nextPlanet.find('.planet-koords').text().replace(/\[|\]/g, '').replace(/\:/g, '#');

            $('#slbox').find('option').each(function(){
                var o = $(this), t = this.value;
                if(t.indexOf(coords) === 0) {
                    o.attr('selected', 'selected');
                }
            });


        } else {
            $('#slbox').find('option').each(function(){
                var o = $(this), t = o.text();
                if(t.match(/^M.*/) != null) {
                    o.attr('selected', 'selected');
                }
            });
        }

        $('#slbox').change();
        $('#continue').click();

    },

    fleet3Controller : function() {
        var player = $('#playerName>span').text();

        $($('div#resources').find('a.max').get().reverse()).each(function(){ $(this).click() });

        //$('#allresources').click();
        if(player == 'vhredny') {
            $('#missionButton4').click();
        } else {
            $('#missionButton3').click();
        }
        $('#start').click();
    }
};

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
            {
                return unescape(y);
            }
    }
}


if(null != location.href.match(/ogame\.pl/)) {
    if(parseInt(getCookie('OG_SEND')) == 1) {
    console.log('Hello');
        Handler.run();
        // function unsetCookie() {
        //     document.cookie='OG_SEND=0';
        // }
        //setTimeout('unsetCookie', 5000);
    }
}

