var express = require("express");
var Discord = require(`discord.js`)
var client = new Discord.Client()
var app = express();
var path = require("path");
var bodyParser = require("body-parser")
var ejs = require(`ejs`)
app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs")
app.use(express.static("public"));
var listeners = app.listen(`3412`, function() {
  console.log("Your app is listening on port " + listeners.address().port)
})

app.get("/", function(req, res) {
  res.render("index", {client : client})
});
app.get(`/invite`, function (req , res) {
  res.redirect(`invite-link-here`)//invite link here
});
app.get(`/support`, function (req , res) {
  res.redirect(`support-server-link-here`)//support server link
});
app.get(`/status`, function (req , res) {
res.render(`status.ejs`, {client : client})
});

client.login(``)//bot token here
