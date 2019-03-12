// 3. Inside the `burgers_controller.js` file, import the following:
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");



// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (data) {
            // Send back the ID of the new quote
            res.redirect("/");
        });
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
        // if (result.changedRows == 0) {
        //     // If no rows were changed, then the ID must not exist, so 404
        //     return res.status(404).end();
        // } else {
        //     res.status(200).end();
        // }
    });
});





// 4. Create the `router` for the app, and export the `router` at the end of your file.
// Export routes for server.js to use.
module.exports = router;