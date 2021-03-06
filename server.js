const express = require("express");
const dotenv = require("dotenv");
//Router files
const bootcamps = require("./routes/bootcamps");
const morgan = require("morgan");

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Moute routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode `)
);
