const fUser = require("../models/farmData");

module.export = {
  Create: async (req, res) => {
    try {
      const user = new fUser({ ...req.body });

      await user.save();
      return res.json({
        status: user ? 201 : 401,
        message: user ? "success" : "registration unsuccessful",
      });
    } catch (error) {}
  },
};
