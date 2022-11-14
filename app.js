const express = require('express')
const app = express()

app.use (express.static('public'))
app.use (express.static('iceland picture'))
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")

app.get("/", (req,res) => {res.render("index.ejs")})

app.get("/hebergements-classiques", (req,res) => {res.render("classiques.ejs")})

app.get("/hebergements-insolites", (req,res) => {res.render("insolites.ejs")})

app.get("/services", (req,res) => {res.render("services.ejs")})

app.get("/contact", (req,res) => {res.render("contact.ejs")})

app.get("/decouvrir-nos-hebergements", (req,res) => {res.render("CTA.ejs")})

app.get("/grastein", (req,res) => {res.render("grastein.ejs")})

app.get("/pierre-eau", (req,res) => {res.render("pierreEau.ejs")})

app.get("/pierre-feu", (req,res) => {res.render("pierreFeu.ejs")})

app.get("/pierre-lune", (req,res) => {res.render("pierreLune.ejs")})

app.get("/nuit-etoilee", (req,res) => {res.render("nuitétoilé.ejs")})


app.post("/t", (req,res) => {
    res.send(req.body.name + " " + req.body.first_name + " " + req.body.adress + " " + req.body.zip + " " + req.body.city + " " + req.body.mail + " " + req.body.phone + " " + req.body.text)
}

)















app.listen(3000)