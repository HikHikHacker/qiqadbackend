const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const usersModel = require("./models/users");
const mealsModel = require("./models/meals");

//MIDDLEWARES
app.use(express.json());
app.use(cors());

try {
  mongoose.connect(
    "MONGO_URI=mongodb+srv://root:18151520@cluster0.bpvjl.mongodb.net/users?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
  if (mongoose.connect) {
    console.log("DB Connected");
  }
} catch (err) {
  console.log(err);
}

//NOTE: ROUTES
//CREATE NEW USER
app.post("/insert", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const gender = req.body.gender;
  const status = req.body.status;
  const picture = req.body.picture;

  console.log(name);

  const user = new usersModel({
    name: name,
    email: email,
    gender: gender,
    status: status,
    picture: picture,
  });

  try {
    await user.save();
    res.send("inserted " + user);
    console.log("Data inserted");
  } catch (err) {
    console.log(err);
  }
});

//CREATE NEW MEAL
app.post("/newmeal", async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const category = req.body.category;
  const preptime = req.body.preptime;
  const picture = req.body.picture;
  const status = req.body.status;
  const description = req.body.description;

  const meal = new mealsModel({
    name: name,
    price: price,
    category: category,
    preptime: preptime,
    picture: picture,
    description: description,
    status: status,
  });

  try {
    await meal.save();
    res.send("added " + meal);
    console.log("Data inserted");
  } catch (err) {
    console.log(err);
  }
});

//UPDATE-ONE USER
app.put("/update", async (req, res) => {
  const id = req.body.id;

  const name = req.body.newName;
  const email = req.body.newEmail;
  const gender = req.body.newGender;
  const status = req.body.newStatus;
  const picture = req.body.newPicture;

  try {
    await usersModel.findById(id, (err, userUpdate) => {
      userUpdate.name = name;
      userUpdate.email = email;
      userUpdate.gender = gender;
      userUpdate.status = status;
      userUpdate.picture = picture;

      userUpdate.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});
//DELETE ONE USER
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await usersModel.findByIdAndRemove(id).exec();
  res.send(`Deletion of user with ID: ${id} was successful`);
});

//FETCH ALL USERS
app.get("/read", async (req, res) => {
  usersModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//FETCH ALL MEALS
app.get("/readmeals", async (req, res) => {
  mealsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

//FETCH SPECIFIC USER
app.get("/find/:id", async (req, res) => {
  const id = req.params.id;
  usersModel.findById(id, (err, specificuser) => {
    if (err) {
      res.send(err);
    } else {
      res.send(specificuser);
    }
  });
});
//FETCH SPECIFIC USER BY NAME
app.get("/findname/:name", async (req, res) => {
  const username = req.params.name;
  usersModel.find(
    { name: { $regex: username } },
    (err, userbyname) => {
      if (err) {
        res.send(err);
      } else {
        res.send(userbyname);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on #3001");
});
