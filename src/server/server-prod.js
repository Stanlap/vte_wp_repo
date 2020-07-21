import path from 'path'
import express from 'express'
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const passport = require('passport');
// const userDB = require('./neDB');
// const countRF = require('./public/vte_brain');
const app = express(),
            // DIST_DIR = __dirname,
            DIST_DIR = path.resolve(__dirname, '../dist')
// const PATHS = require('globals')


app.use(express.json());
app.use(express.urlencoded({
                extended: false
            }));
            
app.use(express.static(DIST_DIR))

app.use(
    session({
        secret: 'obobNMN23h',
        store: new fileStore(),
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 60 * 60 * 1000
        },
        resave: false,
        saveUninitialized: false
    })
)
// require('./config-passport');
// require(`${DIST_DIR}/back_js/config-passport.js`);
// require('../../dist/back_js/config-passport.js')
app.use(passport.initialize());
app.use(passport.session());



app.get('/about_us', (req, res) => {
    res.sendFile(`${DIST_DIR}/about_us.html`)
})
app.get('/chat', (req, res) => {
    res.sendFile(`${DIST_DIR}/chat.html`)
})
app.get('/login', (req, res) => {
    res.sendFile(`${DIST_DIR}/login.html`)
})
// app.get('/', (req, res) => {
//     res.sendFile(`${DIST_DIR}/main_auth.html`)
// })
app.get('/', (req, res) => {
    res.sendFile(`${DIST_DIR}/main_auth.html`)
})
app.get('/profile', (req, res) => {
    res.sendFile(`${DIST_DIR}/profile.html`)
})
app.get('/prog_list', (req, res) => {
    res.sendFile(`${DIST_DIR}/prog_list.html`)
})
app.get('/regist', (req, res) => {
    res.sendFile(`${DIST_DIR}/regist.html`)
})

app.post('/login', (req, res, next) => {
    passport.authenticate('local', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            // return res.render('login', {
            //     title: 'Login',
            //     passMessage: 'Пользователь не идентифицирован.'
            // });
            return res.sendFile(HTML_FILE)
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            // return res.render('mainAuth', {
            //     title: 'Main Page Authenticated'
            // });
            return res.sendFile(HTML_FILE)
        });
    })(req, res, next);
});


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})