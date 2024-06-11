const { success, error } = require('consola');
const { connect } = require('mongoose');
const { consola } = require("consola");

const startDB = async () => {
    consola.info("Connecting to Database, Please wait...");

    try {
        await connect("mongodb+srv://devhooman:zindagififa2016@cluster0.bohpfoe.mongodb.net/fyp?retryWrites=true&w=majority", { dbName: "FYP" });

        success({ message: "Connected With Database...📙", badge: true });
    } catch (err) {

        error({ message: `Unable to Connect with Database ${err}` });
    }
};

module.exports = { startDB };
