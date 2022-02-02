let data = [
    {
        title: "Apocalypse Now", description: "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.", year: 1979, img: "http://localhost:5000/src/images/apocalypsenow.jpg", actors: ["Martin Sheen", "Marlon Brando"],
        rating: 3, type: "Movie"
    }, {
        title: "Casablanca", description: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.", year: 1942, img: "http://localhost:5000/src/images/casablanca.jpg", actors: ["Humphrey Bogart", "Ingrid Bergman"],
        rating: 4, type: "Movie"
    }, {
        title: "Alien", description: "Alien attacks Earth.", year: 1979, img: "http://localhost:5000/src/images/alien.jpg", actors: ["Sigourney Weaver", "Tom Skerritt"],
        rating: 2, type: "Movie"
    },
    {
        title: "Django Unchained", description: "Cowboy fights with slaveowners.", year: 2010, img: "http://localhost:5000/src/images/django.jpg", actors: ["Jamie Fox", "Leonardo Dicaprio"],
        rating: 4, type: "Movie"
    }, {
        title: "Fight Club", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", year: 1999, img: "http://localhost:5000/src/images/fightc.jpg", actors: ["Brad Pitt", "Edward Norton"],
        rating: 3, type: "Movie"
    }, {
        title: "Gladiator", description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", year: 2000, img: "http://localhost:5000/src/images/gladiator.jpg", actors: ["Russell Crowe", "Joaquin Phoenix"],
        rating: 4, type: "Movie"
    }, {
        title: "Godfather", description: "Day to day life of mafia", year: 1972, img: "http://localhost:5000/src/images/godfather.jpg", actors: ["Al Pacino", "Marlon Brando"],
        rating: 3, type: "Movie"
    }, {
        title: "Inception", description: "A group discovers how to change reality", year: 2010, img: "http://localhost:5000/src/images/inception.jpg", actors: ["Leonardo Dicaprio", "Joseph Gordon-Levitt"],
        rating: 1, type: "Movie"
    }, {
        title: "Interstellar", description: "Men travels to space", year: 2014, img: "http://localhost:5000/src/images/interstellar.jpg", actors: ["Matthew McConaughey", "Anne Hathaway"],
        rating: 2, type: "Movie"
    }, {
        title: "Life is Beautiful", description: "Jewish waiter and his son become victims of the Holocaust", year: 1997, img: "http://localhost:5000/src/images/lifeisb.jpg", actors: ["Roberto Benigni", "Nicoletta Braschi"],
        rating: 5, type: "Movie"
    }, {
        title: "Matrix", description: "Young developer enters the matrix", year: 1999, img: "http://localhost:5000/src/images/matrix.jpg", actors: ["Keanu Reeves", "Laurence Fishburne"],
        rating: 2, type: "Movie"
    }, {
        title: "Memento", description: "A man with short-term memory loss attempts to track down his wife's murderer.", year: 2000, img: "http://localhost:5000/src/images/memento.jpg", actors: ["Guy Pearce", "Carrie-Anne Moss"],
        rating: 3, type: "Movie"
    }, {
        title: "Parasite", description: "Greed and class discrimination threaten the newly formed symbiotic relationship", year: 2019, img: "http://localhost:5000/src/images/parasite.jpg", actors: ["Kang-ho Song", "Sun-kyun Lee"],
        rating: 2, type: "Movie"
    }, {
        title: "Pulp Fiction", description: "nesto nesto", year: 1994, img: "http://localhost:5000/src/images/pulp.jpg", actors: ["John Travolta", "Uma Thurman"],
        rating: 4, type: "Movie"
    }, {
        title: "Rambo", description: "2008", year: 2008, img: "http://localhost:5000/src/images/rambo.jpg", actors: ["Sylvester Stallone", "Julie Benz"],
        rating: 2, type: "Movie"
    }, {
        title: "Saving Private Ryan", description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines", year: 1998, img: "http://localhost:5000/src/images/savingpr.jpg", actors: ["Tom Hanks", "Matt Damon"],
        rating: 3, type: "Movie"
    }, {
        title: "The Shawshank Redemption", description: "Two imprisoned men bond over a number of years", year: 1994, img: "http://localhost:5000/src/images/ssredemtion.jpg", actors: ["Tim Robbins", "Morgan Freeman"],
        rating: 2, type: "Movie"
    }, {
        title: "The Dark Knight", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must react.", year: 2008, img: "http://localhost:5000/src/images/tdk.jpg", actors: ["Christian Bale", "Heath Ledge"],
        rating: 1, type: "Movie"
    }, {
        title: "Terminator", description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son", year: 1991, img: "http://localhost:5000/src/images/terminator.jpg", actors: ["Arnold Schwarzenegger", "Linda Hamilton"],
        rating: 2, type: "Movie"
    }, {
        title: "The Pianist", description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto", year: 2002, img: "http://localhost:5000/src/images/thepianist.jpg", actors: ["Adrien Brody", "Thomas Kretschmann"],
        rating: 5, type: "Movie"
    }, {
        title: "Whiplash", description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness", year: 1894, img: "http://localhost:5000/src/images/whiplash.jpg", actors: ["Miles Teller", "J.K. Simmons"],
        rating: 1, type: "Movie"
    }, {
        title: "Sherlock", description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London", year: 2010, img: "http://localhost:5000/src/images/sherlock.jpg", actors: ["Benedict Cumberbatch", "Martin Freeman"],
        rating: 3, type: "TV Show"
    }, {
        title: "Game of Thrones", description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia", year: 2010, img: "http://localhost:5000/src/images/got.jpg", actors: ["Emilia Clarke", "Peter Dinklage"],
        rating: 1, type: "TV Show"
    }, {
        title: "The Sopranos", description: "New Jersey mob boss Tony Soprano deals with personal and professional issues", year: 1999, img: "http://localhost:5000/src/images/sopranos.jpg", actors: ["James Gandolfini", "Lorraine Bracco"],
        rating: 4, type: "TV Show"
    }, {
        title: "The Wire", description: "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement", year: 2002, img: "http://localhost:5000/src/images/wire.jpg", actors: ["Dominic West", "Lance Reddick"],
        rating: 1, type: "TV Show"
    }, {
        title: "Chernobyl", description: "In April 1986, an explosion at the Chernobyl nuclear power plant", year: 2019, img: "http://localhost:5000/src/images/cherno.jpg", actors: ["Jessie Buckley", "Jared Harris"],
        rating: 2, type: "TV Show"
    }, {
        title: "Breaking Bad", description: "A high school chemistry teacher diagnosed with inoperable lung cancer", year: 2008, img: "http://localhost:5000/src/images/bb.jpg", actors: ["Bryan Cranston", "Aaron Paul"],
        rating: 3, type: "TV Show"
    }, {
        title: "Band of Brothers", description: "Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe", year: 2001, img: "http://localhost:5000/src/images/band.jpg", actors: ["Scott Grimes", "Damian Lewis"],
        rating: 2, type: "TV Show"
    }, {
        title: "True Detective", description: "police investigations unearth the personal and professional secrets of those involved", year: 2014, img: "http://localhost:5000/src/images/trued.jpg", actors: ["Vince Vaughn", "Colin Farrell"],
        rating: 4, type: "TV Show"
    }, {
        title: "Firefly", description: "Five hundred years in the future, a renegade crew aboard a small spacecraft", year: 2002, img: "http://localhost:5000/src/images/firefly.jpg", actors: ["Nathan Fillion", "Gina Torres"],
        rating: 5, type: "TV Show"
    }, {
        title: "The Office", description: "A mockumentary on a group of typical office workers", year: 2005, img: "http://localhost:5000/src/images/office.jpg", actors: ["Steve Carell", "Jenna Fischer"],
        rating: 1, type: "TV Show"
    }, {
        title: "Only Fools and Horses", description: "Two brothers from London's rough Peckham estate", year: 1981, img: "http://localhost:5000/src/images/mucke.jpg", actors: ["David Jason", "Nicholas Lyndhurst"],
        rating: 5, type: "TV Show"
    }, {
        title: "Seinfeld", description: "Misadventures of neurotic New York City stand-up comedian Jerry Seinfeld", year: 1989, img: "http://localhost:5000/src/images/seinfeld.jpg", actors: ["Jerry Seinfeld", "Julia Louis-Dreyfus"],
        rating: 3, type: "TV Show"
    }, {
        title: "Friends", description: "personal and professional lives of six twenty to thirty-something-year-old friends", year: 1994, img: "http://localhost:5000/src/images/friends.jpg", actors: ["Jennifer Aniston", "Courteney Cox"],
        rating: 1, type: "TV Show"
    }, {
        title: "Black Mirror", description: "anthology series exploring a twisted, high-tech multiverse", year: 2011, img: "http://localhost:5000/src/images/blackm.jpg", actors: ["Daniel Lapaine", "Hannah John-Kamen"],
        rating: 3, type: "TV Show"
    }, {
        title: "Twin Peaks", description: "An idiosyncratic FBI agent investigates the murder of a young woman", year: 1990, img: "http://localhost:5000/src/images/twinp.jpg", actors: ["Kyle MacLachlan", "Michael Ontkean"],
        rating: 2, type: "TV Show"
    }, {
        title: "Fawlty Towers", description: "Hotel owner Basil Fawlty's incompetence, short fuse, and arrogance", year: 1975, img: "http://localhost:5000/src/images/fawltytowers.jpg", actors: ["John Cleese", "Prunella Scales"],
        rating: 4, type: "TV Show"
    }, {
        title: "Better Call Saul", description: "The trials and tribulations of criminal lawyer Jimmy McGill", year: 2015, img: "http://localhost:5000/src/images/saul.jpg", actors: ["Bob Odenkirk", "Rhea Seehorn"],
        rating: 1, type: "TV Show"
    }, {
        title: "Narcos", description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar", year: 2015, img: "http://localhost:5000/src/images/narcos.jpg", actors: ["Pedro Pascal", "Lizbeth Eden"],
        rating: 2, type: "TV Show"
    },
]

exports.data = data