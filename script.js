var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'images/harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'images/krol_lew.jpg'
    },
    {
        id: 3,
        title: 'To właśnie miłość',
        desc: 'Komedia romantyczna',
        img: 'images/to_wlasnie_milosc.jpg'
    },
      {
        id: 4,
        title: 'Władca pierścieni',
        desc: 'Filmowa trylogia wg powieści Tolkiena',
        img: 'images/wladca.jpg'
    },
      {
        id: 5,
        title: 'Pulp Fiction',
        desc: 'Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii',
        img: 'images/pulp_fiction.jpg'
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.img})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));