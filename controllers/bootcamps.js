// get all bootcamps GET Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};
//Show one bootcamp GET Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show one  bootcamp" });
};
//Create bootcamp POST Public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
};
//Update bootcamp PUT Public
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update bootcamp" });
};
//Delete bootcamp DELETE Public
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete bootcamp" });
};
