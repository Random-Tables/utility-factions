const index = require("./index.json");
const activity = require("./activity.json");
const name = require("./name.json");
const rank = require("./rank.json");
const status = require("./status.json");
const calls = require("./calls.json");

const utilitySenses = require("@random-tables/utility-senses");

module.exports = {
  ...index,
  tableData: {
    activity,
    name,
    rank,
    status,
  },
  requirements: [utilitySenses],
  calls,
};
