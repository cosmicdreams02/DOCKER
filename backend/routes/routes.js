const router = require("express").Router();
const DemoModel = require("../models/demo");

router.get("/test", async (req, res) => {
  const usersData = await DemoModel.find();

  if (usersData.length == 0) {
    const user = new DemoModel({
      name: "usuario_1",
    });

    await user.save();
  } else {
    console.log(usersData);
  }

  res.json({ message: "Se accedió al backend con éxito",
  user: usersData[0] });
});

module.exports = router;

