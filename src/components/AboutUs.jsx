import React from 'react';

function AboutUs() {

    var photo = {
        width: '100%',
        borderRadius: '10px',
        webkitBoxShadow: '10px 10px 40px -13px rgba(0,0,0,0.75)',
        mozBoxShadow: '10px 10px 40px -13px rgba(0,0,0,0.75)',
        boxShadow: '10px 10px 40px -13px rgba(0,0,0,0.75)',
        marginBottom: 40,
        marginTop: 40
    }

    var about = { 
        // maxWidth: 600
        color: '#CCCCCC'
    }

    var header = {
        color: '#DDDDDD',
    }

    var question = {
        color: '#F2AB44',
        paddingTop: 40
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-8" style={about}>
                <h1 style={header}>About Us</h1>
                <hr/>
                    <h4 style={question}>There are microbreweries and craft breweries. What’s the difference?</h4>
                        It’s a size thing. Though both pour premium ingredients, passion and experimentation into the work, micros typically serve local audiences only and produce less than 15,000 US beer barrels per year. Craft Brewers take that same commitment to a wider audience.

                    <h4 style={question}>Where are Deschutes Brewery beers available?</h4>
                        Deschutes Brewery currently distributes in Alaska, Arizona, California, Colorado, Hawaii, Idaho, Illinois, Iowa, Kansas, Kentucky, Michigan, Minnesota, Missouri, Montana, Nebraska, Nevada, New Mexico, North Carolina, North Dakota, Ohio, Oregon, Pennsylvania, South Dakota, Texas, Utah, Virginia, Washington, Wisconsin, Wyoming, Washington D.C., British Columbia, and Alberta. To find out exactly where our beer is sold in the states listed, please use our beer finder tool.

                    <h4 style={question}>How can I get Deschutes beers if I do not live in one of the states listed above?</h4>
                        We suggest hopping in the car and driving to the nearest state where we distribute or calling a friend who lives in one of the states above and asking them to ship some your way through a legal mailing option.

                    <h4 style={question}>Can I order beer directly from Deschutes Brewery?</h4>
                        We wish we could but due to state and federal distribution laws, Deschutes Brewery cannot sell or ship beers to consumers over the phone or via the internet.

                    <h4 style={question}>Can I make a reservation for lunch or dinner at your pubs?</h4>
                        Our pubs are always busy with our walk-in guests so we do not take reservations. We require all members for your party to be present in order to be added to the wait list.  You are always welcome to grab a drink at our bar to enjoy while you wait. If you have additional questions about our reservation policy, please reach out to a manager at one of our pubs. Bend: 541-382-9242 or Portland: 503-296-4906.
                    
                    <h4 style={question}>How can I purchase a gift card to have mailed?</h4>
                        We offer gift cards for purchase on our webstore and at our pubs and tasting room locations. Gift cards are good for packaged beer and merchandise at our gift shop in Bend and for food, beer (on tap and to-go), and merchandise at our pub locations in Bend and Portland. It cannot be used for purchases on our webstore. To grab a gift certificate online, click here. It will be shipped through UPS and require a signature as to be sure the gift gets to the correct person.

                    <h4 style={question}>Is Deschutes Brewery going to expand distribution to the East Coast or Eastern Canada?</h4>
                        Deschutes Brewery is slowly expanding eastward as capacity allows so we can supply the freshest beer to our customers.

                    <h4 style={question}>I heard Deschutes Brewery is owned by (insert name of large domestic brewery here), is this true?</h4>
                        Deschutes Brewery has always been family owned and operated. An Employee Stock Ownership Program (ESOP) was set up in 2013 so employees now own a percentage of the company. “We are not owned by, or selling to, any large brewer or other entity, nor do we have any plans to. We’re having too much fun to change.” — Gary Fish, Founder and President.

                    <h4 style={question}>Are Deschutes Brewery beers vegan?</h4>
                        Yes! We do not use animal products in the cellaring or brewing process. The clarifying agent we use in our brewhouse is made from Irish Moss, a red algae. However, experimental beers brewed at our pubs sometime use lactose, isinglass, honey or other specialty ingredients, but we call it out in the description listed on the menu.

                    <h4 style={question}>How can I get The Abyss?</h4>
                        The Abyss is part of our Reserve Series line-up so there is limited release of this barrel-aged imperial stout. We release this beer every year in November and you can find it at locations that already sell our Reserve Series beers or by using our beer finder tool.

                    <h4 style={question}>Do your beers have GMOs?</h4>
                        Our packaged products are made using hops, water, yeast, malted barley and sometimes wheat. The only preservatives we use are hops, and any additional ingredients we use are natural including sweet orange peel, coriander, cocoa nibs, figs, dates, molasses, fruit purees, etc. We do our best to always source the highest quality non-GMO ingredients whenever possible, but a few of our beers are brewed with dextrose (derived from corn). Dextrose is commonly used by craft breweries to help increase ABV without increasing the thickness of the beer, hence creating a slightly drier flavor profile because the dextrose ferments almost completely. At this point the dextrose we use is not certified non-GMO.
                </div>
            <div className="col-md-4">
                <img style={photo} src="https://images.pexels.com/photos/1267244/pexels-photo-1267244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img><br/>
                <img style={photo} src="https://images.pexels.com/photos/1269028/pexels-photo-1269028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img><br/>
                <img style={photo} src="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img><br/>
                <img style={photo} src="https://images.pexels.com/photos/1267357/pexels-photo-1267357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img><br/>
                <img style={photo} src="https://www.deschutesbrewery.com/wp-content/uploads/2015/07/bend-pub-map.png"></img>
            </div>
        </div>
    </div>
    );
};

export default AboutUs;