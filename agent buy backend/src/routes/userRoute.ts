import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserByClerkId,
  getUserById,
  setRole,
} from "../controllers/userController";

const userRoute = Router();

// Create user
userRoute.post("/", createUser);

// Get all users
userRoute.get("/", getAllUsers);

// Get user by clerkId
userRoute.get("/clerk/:clerkId", getUserByClerkId);

// Get user by ID
// userRoute.get("/:id", getUserById);

// Set role
// userRoute.put("/setRole", setRole);

// import { getUserById, setRole } from "../controllers/userController";

// const userRoute = Router();
userRoute.put("/setRole/:_id", setRole);
userRoute.get("/getUserById/:clerkId", getUserById);
export default userRoute;
