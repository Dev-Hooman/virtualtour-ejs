const Service = require("../models/Service");

exports.getIndex = async (req, res, next) => {
  try {
    const { venueId } = req.params;

    const serviceData = await Service.findById(venueId);

    console.log("All service Data: ", serviceData);

    res.render("index", {
      serviceData: serviceData,
      pageTitle : " Virtual Tour || Event Planner ",
      path: "/",
    });

  } catch (error) {
    console.log(error)
    return res.status(500).send("Oops something went wrong!!");
  }
};
