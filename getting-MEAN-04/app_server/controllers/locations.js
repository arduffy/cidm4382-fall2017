/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'PizzaFinder - where to find the best pizza in town!',
        pageHeader: {
            title: 'PizzaFinder',
            strapline: 'where to find the best pizza in town!'
        },
        sidebar: "Highly rated Pizza restraunts near you!",
        locations: [{
            name: 'Pizza Hut',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['All you can eat pizza bar', 'Premium salads', 'Hot deals'],
            distance: '100m'
        }, {
            name: 'Dominos',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Fresh Pizza', "Online ordering"],
            distance: '200m'
        }, {
            name: 'Pizza Planet',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Fast Service'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Pizza Hut',
        pageHeader: {
            title: 'Pizza Hut'
        },
        sidebar: {
            context: 'is on PizzaFinder because it has the best All you can eat pizza bar and amazing deals!.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Pizza Hut',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['All you can eat pizza bar', 'Premium salads', 'Hot deals'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '11:00am',
                closing: '11:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '11:00am',
                closing: '12:00am',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Pizza wasn\'t great, but the service was fast.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Pizza Hut on PizzaFinder',
        pageHeader: {
            title: 'Review Pizza Hut'
        }
    });
};