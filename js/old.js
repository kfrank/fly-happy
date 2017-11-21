var flights = [
    {
        currency: "USD",
        price: 247,
        carrier: "AA",
        time: "5h 29min",
        nodes: ["SEA 2018-01-17T07:35+02:00 JFK 2018-01-24T16:04+02:00"]
    },
    {
        currency: "USD",
        price: 247,
        carrier: "AL",
        time: "5h 16min",
        nodes: ["SEA 2018-01-17T21:44+02:00 JFK 2018-01-24T06:00+02:00"]
    },
    {
        currency: "USD",
        price: 247,
        carrier: "JB",
        time: "5h 09min",
        nodes: ["SEA 2018-01-17T21:52+02:00 JFK 2018-01-24T06:01+02:00"]
    },
    {
        currency: "USD",
        price: 247,
        carrier: "DE",
        time: "5h 30min",
        nodes: ["SEA 2018-01-17T07:40+02:00 JFK 2018-01-24T16:10+02:00"]
    },
    {
        currency: "USD",
        price: 255,
        carrier: "AA",
        time: "9h 05min",
        nodes: ["SEA 2018-01-17T08:00+02:00 JFK 2018-01-24T20:05+02:00"]
    }
];

var carrier = {
    "AA": "American",
    "AL": "Alaska",
    "JB": "JetBlue",
    "DE": "Delta"
};

var airports = [{ "name": "Vichy-Charmeil Airport", "city": "Vichy", "country": "France", "IATA": "VHY" }, { "name": "Lyon-Bron Airport", "city": "Lyon", "country": "France", "IATA": "LYN" }, { "name": "Cannes-Mandelieu Airport", "city": "Cannes", "country": "France", "IATA": "CEQ" }, { "name": "Marseille Provence Airport", "city": "Marseille", "country": "France", "IATA": "MRS" }, { "name": "Charles de Gaulle International", "city": "Paris", "country": "France", "IATA": "CDG" }, { "name": "Toussus-le-Noble Airport", "city": "Toussous-le-noble", "country": "France", "IATA": "TNF" }, { "name": "Paris-Orly Airport", "city": "Paris", "country": "France", "IATA": "ORY" }, { "name": "Le Mans-Arnage Airport", "city": "Le Mans", "country": "France", "IATA": "LME" }, { "name": "Nantes Atlantique Airport", "city": "Nantes", "country": "France", "IATA": "NTE" }, { "name": "Nancy-Essey Airport", "city": "Nancy", "country": "France", "IATA": "ENC" }, { "name": "Frankfurt am Main International", "city": "Frankfurt", "country": "Germany", "IATA": "FRA" }, { "name": "Hamburg Airport", "city": "Hamburg", "country": "Germany", "IATA": "HAM" }, { "name": "Cologne Bonn Airport", "city": "Cologne", "country": "Germany", "IATA": "CGN" }, { "name": "Munich International Airport", "city": "Munich", "country": "Germany", "IATA": "MUC" }, { "name": "Stuttgart Airport", "city": "Stuttgart", "country": "Germany", "IATA": "STR" }, { "name": "Berlin-Tegel International Airport", "city": "Berlin", "country": "Germany", "IATA": "TXL" }, { "name": "Hannover Airport", "city": "Hannover", "country": "Germany", "IATA": "HAJ" }, { "name": "Bremen Airport", "city": "Bremen", "country": "Germany", "IATA": "BRE" }, { "name": "Frankfurt-Hahn Airport", "city": "Hahn", "country": "Germany", "IATA": "HHN" }, { "name": "Dortmund Airport", "city": "Dortmund", "country": "Germany", "IATA": "DTM" }, { "name": "Cork Airport", "city": "Cork", "country": "Ireland", "IATA": "ORK" }, { "name": "Galway Airport", "city": "Galway", "country": "Ireland", "IATA": "GWY" }, { "name": "Dublin Airport", "city": "Dublin", "country": "Ireland", "IATA": "DUB" }, { "name": "Waterford Airport", "city": "Waterford", "country": "Ireland", "IATA": "WAT" }, { "name": "Amsterdam Airport Schiphol", "city": "Amsterdam", "country": "Netherlands", "IATA": "AMS" }, { "name": "Maastricht Aachen Airport", "city": "Maastricht", "country": "Netherlands", "IATA": "MST" }, { "name": "Eindhoven Airport", "city": "Eindhoven", "country": "Netherlands", "IATA": "EIN" }, { "name": "Rotterdam The Hague Airport", "city": "Rotterdam", "country": "Netherlands", "IATA": "RTM" }, { "name": "Belfast International Airport", "city": "Belfast", "country": "United Kingdom", "IATA": "BFS" }, { "name": "Manchester Airport", "city": "Manchester", "country": "United Kingdom", "IATA": "MAN" }, { "name": "Southampton Airport", "city": "Southampton", "country": "United Kingdom", "IATA": "SOU" }, { "name": "London Heathrow Airport", "city": "London", "country": "United Kingdom", "IATA": "LHR" }, { "name": "Blackpool International Airport", "city": "Blackpool", "country": "United Kingdom", "IATA": "BLK" }, { "name": "Newcastle Airport", "city": "Newcastle", "country": "United Kingdom", "IATA": "NCL" }, { "name": "London Stansted Airport", "city": "London", "country": "United Kingdom", "IATA": "STN" }, { "name": "Miami International Airport", "city": "Miami", "country": "United States", "IATA": "MIA" }, { "name": "John F Kennedy International Airport", "city": "New York", "country": "United States", "IATA": "JFK" }, { "name": "Piedmont Triad International Airport", "city": "Greensboro", "country": "United States", "IATA": "GSO" }, { "name": "Wings Field", "city": "Philadelphia", "country": "United States", "IATA": "BBX" }, { "name": "Hardwick Field", "city": "Cleveland", "country": "United States", "IATA": "HDI" }, { "name": "Warren Field", "city": "Washington", "country": "United States", "IATA": "OCW" }];

(function () {

	var _airports = _.groupBy(airports, function (o) {
		return o.country;
	}),
	    selectIndex = [],
	    selectData = [];

	_.each(_airports, function (countryList, countryName) {
		var firstLeter = countryName.split('')[0];
		selectData.push("<li class=\"sep\" data-index=\"" + firstLeter + "\">" + countryName + "</li>");
		selectIndex.push("<li>" + firstLeter + "</li>");

		_.each(countryList, function (airport, i) {
			selectData.push("<li data-iata=\"" + airport.IATA + "\" data-city=\"" + airport.city + "\">\n\t\t\t\t" + airport.IATA + ", " + airport.name + "</li>");
		});
	});

	$('.select ul.select-index').html(_.uniq(selectIndex).join(''));
	$('.select ul.select-data').html(selectData.join(''));

	// Calendar days
	var days = [30];
	for (var i = 0; i < 31; i++) {
		days.push(i);
	}

	var daysRender = _.map(days, function (i) {
		return "<span>" + (i + 1) + "</span>";
	});

	$('.calendar .days').html(daysRender.join(''));
	$('.calendar .days span').eq(8).addClass('checked');

	// Flight Results
	doFlightsRender(true);

	// Events
	// Open inputs
	$('.control:not(.open) .control-head').on('click', function (evt) {
		$(evt.currentTarget).parent('.control').addClass('open');
	});

	$('.control .close').on('click', function (evt) {
		var z = $(evt.currentTarget).closest('.control');
		setTimeout(function () {
			z.removeClass('open');
		}, 50);
	});

	// SpinnerInput add/substract action
	$('.spinner button').on('click', function (evt) {
		var isAdding = evt.currentTarget.getAttribute('data-action') == 'plus',
		    $input = $('input[name="passengers"]:checked'),
		    $control = $input.siblings('div').find('span'),
		    value = parseInt($control.text());

		if (isAdding) value++;else if (value !== 0) value--;

		$control.text(value);
	});

	// SelectInput find index
	$('.select-index').on('click', 'li', function (evt) {
		var index = evt.currentTarget.textContent,
		    $nano = $(evt.currentTarget).parent('.select-index').siblings('.nano'),
		    el = $nano.find("li.sep[data-index=\"" + index + "\"]")[0];

		$nano.find('.nano-content').animate({ scrollTop: el.offsetTop }, 600);
	});

	// SelectInput set data
	$('.select-data').on('click', 'li:not(.sep)', function (evt) {
		var text = evt.currentTarget.textContent,
		    iata = evt.currentTarget.getAttribute('data-iata'),
		    $select = $(evt.currentTarget).closest('.select'),
		    $nameContainer = $select.find('.airport-name');

		if ($nameContainer.data('role') == 'from') {
			var _iata = iata.split('');
			var div = $('.header .fromPlace').addClass('rotate');
			var span = $('.header .fromPlace span');
			span.eq(0).text(_iata[0]);
			span.eq(1).text(_iata[1]);
			span.eq(2).text(_iata[2]);
			setTimeout(function () {
				return div.removeClass('rotate');
			}, 900);
			//$('.xfrom').text(iata);
		} else {
				var _iata = iata.split('');
				var div = $('.header .toPlace').addClass('rotate');
				var span = $('.header .toPlace span');
				span.eq(0).text(_iata[0]);
				span.eq(1).text(_iata[1]);
				span.eq(2).text(_iata[2]);
				setTimeout(function () {
					return div.removeClass('rotate');
				}, 900);
				//$('.xto').text(iata);
			}

		$nameContainer.text(text);
		$select.toggleClass('open');

		$(evt.currentTarget).addClass('selected').siblings('li').removeClass('selected');
	});

	// Date input
	$('.calendar .days span').on('click', function (evt) {
		var $this = $(evt.currentTarget),
		    day = evt.currentTarget.textContent;

		$this.addClass('checked').siblings('span').removeClass('checked');

		var date = new Date("5/" + day + "/2017");

		var _date$toDateString$sp = date.toDateString().split(' ');

		var wd = _date$toDateString$sp[0];
		var m = _date$toDateString$sp[1];
		var d = _date$toDateString$sp[2];

		$('.dateinput .control-item span').eq(0).text(wd.toUpperCase() + ", " + d + " " + m);
	});

	$('.btnBack').on('click', function (evt) {
		var wrap = document.querySelector('.wrap'),
		    index = parseInt(wrap.getAttribute('data-pos'));

		$('.ticket button.btnBook').text('Book Flight');
		wrap.setAttribute('data-pos', index - 1);
	});

	// Search button
	$('.btnSearch').on('click', function (evt) {
		doFlightsRender(false);
		setTimeout(function () {
			document.querySelector('.wrap').setAttribute('data-pos', 1);
		}, 50);
	});

	$('.ticket button').on('click', function (evt) {
		var $button = $(evt.currentTarget);
		var $loader = $('.loader').show();
		$button.text('Booking...');

		setTimeout(function () {
			$loader.hide();
			$button.html('<i class="zmdi zmdi-check-circle"></i> Flight Booked');
			$button.addClass('success');
		}, 1200);
	});

	// Select Flight
	$('.list').on('click', 'article', function (evt) {
		var index = parseInt(evt.currentTarget.getAttribute('data-index')),
		    flight = flights[index];

		var _flight$nodes$0$split = flight.nodes[0].split(' ');

		var from = _flight$nodes$0$split[0];
		var t1 = _flight$nodes$0$split[1];
		var to = _flight$nodes$0$split[2];
		var t2 = _flight$nodes$0$split[3];

		var p = $('.radio.passengers label span'),
		    peopleTotal = 0,
		    people = _.map(p, function (el, i) {
			var v = parseInt(el.textContent),
			    str = '';

			if (i == 0 && v) str = v + " Adults";
			// if (i == 1 && v) str = v + " Kids";
			// if (i == 2 && v) str = v + " Elders";

			peopleTotal += v;

			return str;
		});

		from = $('.fromPlace span').text();
		to = $('.toPlace span').text();

		var time1 = new Date(t1),
		    time2 = new Date(t2);

		var clase = $('input[name="seat"]:checked').val(),
		    dates = $('.dateinput .control-item span'),
		    place1 = _.findWhere(airports, { IATA: from }),
		    place2 = _.findWhere(airports, { IATA: to });

		var flightRender = "\n\t\t\t<div class=\"title\">\n\t\t\t\t<div>\n\t\t\t\t\t<small>" + time1.toLocaleTimeString().replace(':00', '') + "</small>\n\t\t\t\t\t<span>" + from + "</span>\n\t\t\t\t\t<small>" + place1.city + "</small>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"separator\"><i class=\"zmdi zmdi-airplane\"></i></span>\n\t\t\t\t<div>\n\t\t\t\t\t<small>" + time2.toLocaleTimeString().replace(':00', '') + "</small>\n\t\t\t\t\t<span>" + to + "</span>\n\t\t\t\t\t<small>" + place2.city + "</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"cell\">\n\t\t\t\t\t<small>Passengers</small><span>" + _.compact(people).join(',') + "</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cell\">\n\t\t\t\t\t<small>Class</small><span>" + clase + "</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"cell\">\n\t\t\t\t\t<small>Departure</small><span>" + dates[0].textContent + "</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cell\">\n\t\t\t\t\t<small>Return</small><span>" + dates[1].textContent + "</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"cell\">\n\t\t\t\t\t<small>Airline</small><span>" + carrier[flight.carrier] + "</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cell\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"total\">\n\t\t\t\t<small>Total</small> <span>&euro;" + (flight.price * peopleTotal).toFixed(2) + "</span>\n\t\t\t</div>\n\t\t";

		$('.ticket section').html(flightRender);
		setTimeout(function () {
			document.querySelector('.wrap').setAttribute('data-pos', 2);
		}, 50);
	});

	// Init scroll
	// $(".nano").nanoScroller();

	function doFlightsRender(isInit) {
		var flightsRender = _.map(flights, function (o, i) {
			var sumText = "";

			var _o$nodes$0$split = o.nodes[0].split(' ');

			var from = _o$nodes$0$split[0];
			var t1 = _o$nodes$0$split[1];
			var to = _o$nodes$0$split[2];
			var t2 = _o$nodes$0$split[3];

			var d1 = new Date(t1),
			    d2 = new Date(t2);

			if (!isInit) {
				var ppl = $('.radio.passengers label span'),
				    sum = parseInt(ppl.eq(0).text()) + parseInt(ppl.eq(1).text()) + parseInt(ppl.eq(2).text());

				sumText = sum + " people &euro;" + (o.price * sum).toFixed(2);
				from = $('.fromPlace span').text();
				to = $('.toPlace span').text();
			}

			var img;
			if (o.carrier == 'AA') img = '';else if (o.carrier == 'AL') img = '';else if (o.carrier == 'JB') img = '';else if (o.carrier == 'DL') img = '';else img = '';

			// return "<article class=\"flex-block-md\" data-index=\"" + i + "\">\n\t\t\t\t<div class=\"img\">\n\t\t\t\t\t<img src=\"" + img + "\" alt=\"ualogo\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<span class=\"time\">" + o.time + "</span>\n\t\t\t\t\t<span class=\"airline\">\n\t\t\t\t\t\t" + d1.toLocaleTimeString().replace(':00', '') + " - \n\t\t\t\t\t\t" + d2.toLocaleTimeString().replace(':00', '') + "\n\t\t\t\t\t</span>\n\t\t\t\t\t<span>" + carrier[o.carrier] + " " + from + " - " + to + "</span>\n\t\t\t\t\t<span>Non-Stop</span>\n\n\t\t\t\t\t<h5><small>" + sumText + "</small> $" + o.price + "</h5>\n\t\t\t\t</div>\n\t\t\t</article>";
		});

		$('.list .nano-content').html(flightsRender.join(''));
	}
})();