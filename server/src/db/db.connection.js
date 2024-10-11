import mongoose from "mongoose";

export const mongoDB = async (url) => {
  try {
    await mongoose
      .connect(url)
      .then(() => {
        console.log("mongoDB Connected to MongoDB Atlas successfully!");
      })
      .catch((error) => {
        console.log("error occoured in mongoDB connection: ", error);
      });
  } catch (error) {
    console.log("error occoured while connecting to database", error);
  }
};
