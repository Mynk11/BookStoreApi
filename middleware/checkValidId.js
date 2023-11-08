import mongoose from 'mongoose';

// Custom middleware to check for valid _id
function checkValidId(req, res, next) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid _id format" });
  }

  // If _id is valid, continue to the next middleware or route handler
  next();
}

export default checkValidId;
