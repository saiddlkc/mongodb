import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

// Exercise 1
async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/UserDB");
}

main().catch((err) => console.log(err));

const commentSchema = new mongoose.Schema({
  text: String,
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Comment = mongoose.model("Comment", commentSchema);

const comment = new Comment({
  text: "Nice car",
  carId: "65f19327bf62d6761736b1d7",
  userId: "65f179ad76a3b6a2042b8f7c",
});

// comment.save();

const CarSchema = new mongoose.Schema({
  brand: String,
  name: String,
  price: Number,
  description: {
    type: String,
    required: [true, "no description was Defined"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  language: String,
  car: CarSchema,
  comment: commentSchema,
});

// Exercise 2
const User = mongoose.model("User", UserSchema);

// const said = new User({
//   name: "Said",
//   email: "said@gmail.com",
//   location: "Germany",
//   language: "German",
// });

// said.save();

// Exercise 3
User.find({ name: "Said" })
  .then((users) => {
    // console.log("User found:", users);
  })
  .catch((err) => {
    console.error(err);
  });

// Exercise 4
User.updateOne({ name: "Said" }, { language: "English" })
  .then(() => {})
  .catch((err) => {
    console.error(err);
  });

// Exercise 5
User.deleteOne({ _id: "65f17b87b0a8d626289b231c" })
  .then(() => {})
  .catch((err) => {
    console.error(err);
  });

// Exercise 6
const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  language: String,
  review: {
    type: String,
    required: [true, "no review was Defined"],
  },
});

const Person = mongoose.model("Person", personSchema);

const Ali = new Person({
  name: "Ali",
  email: "ali@gmail.com",
  location: "Germany",
  language: "German",
  review: "Mr Nice Guy",
});

// Ali.save();

// Exercise 7
const tahiroo = new Person({
  name: "Tahiroo",
  email: "tajmfamai.com",
  location: "Germany",
  language: "German",
});
// tahiroo.save();

// Exercise 8
// Person.find({ language: "German" })
//   .then((users) => {
//     if (users.length > 0) {
//       console.log(users);
//     } else {
//       console.log("No user found");
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Exercise 9
// Car.find({ price: { $gte: 40000, $lte: 70000 } })
//   .then((cars) => {
//     console.log("Autos im Preisbereich:", cars);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Exercise 10

const Car = mongoose.model("Car", CarSchema);

const said = new User({
  name: "Said",
  email: "said@gmail.com",
  location: "Germany",
  language: "German",
  car: CarSchema,
});

// Exercise 11
// const updateSaid = async () => {
//   try {
//     await C65.save();
//     const res = await User.updateOne(
//       { _id: "65f179ad76a3b6a2042b8f7c" },
//       { $set: { car: C65 } }
//     );
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   }
// };
// updateSaid();

// Exercise 12

// Car.aggregate([
//   {
//     $group: {
//       _id: null,
//       averagePrice: { $avg: "$price" },
//     },
//   },
// ])
//   .then((results) => {
//     const roundedAveragePrice = results[0].averagePrice.toFixed(0);
//     console.log("Durchschnittspreis:", roundedAveragePrice);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Exercise 13

// const commentSchema = new mongoose.Schema({
//     text: String,
//     carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   });

//   const Comment = mongoose.model("Comment", commentSchema);

//   const comment = new Comment({
//     text: "Nice car",
//     carId: "65f19327bf62d6761736b1d7",
//     userId: "65f179ad76a3b6a2042b8f7c",
//   });

//   comment.save();

// Exercise 14
