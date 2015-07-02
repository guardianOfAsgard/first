
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var template = require('express3-handlebars');
var request = require('request');
var app = express();
var passport = require('passport')
  , flash = require('connect-flash')
  , LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google').Strategy;

// var io = require('socket.io').listen(app, { log: false });
// io.set('log level', 1);

  //-----------------------------User

var users = [
    { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
  , { id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' }
];

function findById(id, fn) {
  var idx = id - 1;
  if (users[idx]) {
    fn(null, users[idx]);
  } else {
    fn(new Error('User ' + id + ' does not exist'));
  }
}

function findByUsername(username, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  findById(id, function (err, user) {
    done(err, user);
  });
});


// Use the LocalStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.  In the real world, this would query a database;
//   however, in this example we are using a baked-in set of users.
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
      
//       // Find the user by username.  If there is no user with the given
//       // username, or the password is not correct, set the user to `false` to
//       // indicate failure and set a flash message.  Otherwise, return the
//       // authenticated `user`.
//       findByUsername(username, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
//         if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
//         return done(null, user);
//       })
//     });
//   }
// ));






passport.use(new GoogleStrategy({
    consumerKey: "ventasygadgets@gmail.com"
    consumerSecret: "leventasygadgets"
    returnURL: 'http://localhost:8000/happy',
    realm: 'http://localhost'
  },
  function(identifier, profile, done) {
    User.findOrCreate({ openId: identifier }, function(err, user) {
      done(err, user);
    });
  }
));




// configure Express
app.configure(function() {
  // app.set('views', __dirname + '/views');
  // app.set('view engine', 'ejs');
  // app.engine('ejs', require('ejs-locals'));
  // app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  // app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(flash());
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  // app.use(app.router);
  // app.use(express.static(__dirname + '/../../public'));
});




  //-----------------------------User



//---------------------------------
/*var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('127.0.0.1', 27017, {auto_reconnect: true,safe:false});
db = new Db('moc', server);
 
db.open(function(err, db) {
    if(err) {
        /*console.log("Connected to 'winedb' database");
        db.collection('movimientos', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
    var s=db.collection('movimientos', function(err, collection) {
        console.log(JSON.stringify(arguments,null,4));
    });
});
    


var findAll = function(req, res) {
    var s=db.collection('movimientos', function(err, collection) {
        console.log(JSON.stringify(arguments,null,4));
    });
    console.log(JSON.stringify(s,null,4));
};*/

//findAll();



//---------------------------------






// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', template({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/', function(req, res){
	res.render('home');
});

app.get('/happy', function(req, res){
	 
console.log("some");
res.send({some:1});
});





app.get('/product/:id', function(req, res){
console.log('llegaste');
	var id = req.params.id;
	if(req.get('content-type') == "application/json")
	{
		console.log('mierda');
		request('http://localhost:3000/api/productos/' +id, function(error, response, body){
			if(!error && response.statusCode == 200)
			{	
				res.end(body);
			}	
			else{
				res.end("Mierda");
			}
		});	
	}
});

//=============================================================================================
//Users









// app.get('/account', ensureAuthenticated, function(req, res){
//   res.render('account', { user: req.user });
// });

app.get('/login', function(req, res){
  res.render('login', { user: req.user, message: req.flash('error') });
});

// POST /login
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
//
//   curl -v -d "username=bob&password=secret" http://127.0.0.1:3000/login
app.post('/login', 
  passport.authenticate('local', 
{ failureRedirect: '/login', failureFlash: true }),
  function(req, res) {
    res.redirect('happy');
  });


// app.post('/login',passport.uathenticate('local'),  function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });



























app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  //console.log('Express server listening on port ' + app.get('port'));
});












































