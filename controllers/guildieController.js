// const { getToken, decode } = require('../utils/token');
const db = require("../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
  addGuildie: async function (req, res) {
    try {
      const guildie = req.body.guildieName;
      const userId = req.body._id;
      const newGuildie = await db.Guildie.create({
        name: guildie,
        userId: userId,
      });

      const addGuildie = await db.User.updateOne(
        { _id: ObjectID(userId) },
        {
          $push: {
            guildies: newGuildie,
          },
        }
      );
      res.status(200).json(addGuildie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  removeGuildie: async function (req, res) {
    try {
      const guildieId = req.body.guildieId;
      const userId = req.body.userId;
      const guildieExists = await db.User.count({
        _id: ObjectID(userId),
        guildies: ObjectID(guildieId),
      });
      if (guildieExists === 1) {
        const deleteGuildie = await db.Image.updateOne(
          { _id: ObjectID(userId) },
          {
            $pull: {
              tags: ObjectID(guildieId),
            },
          }
        );
        res.status(200).json(deleteGuildie);
      } else {
        res.status(200).json({ message: "This guildie does not exist" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllGuildies: async function (req, res) {
    try {
      let userId = req.body._id;
      const guildies = await db.Guildie.find({ userId: ObjectID(userId) });
      res.status(200).json(guildies);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
