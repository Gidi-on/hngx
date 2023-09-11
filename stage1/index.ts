import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Defining route
app.get("/", (req: Request, res: Response) => {
  // Get the current UTC time
  const currentDate = new Date();
  currentDate.setUTCHours(currentDate.getUTCHours());

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

  res.status(200).json({
    slack_name: "Otuka Gideon",
    current_day: currentDayOfWeek,
    utc_time: currentDate.toISOString(),
    track: "Backend",
    github_file_url: "",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
