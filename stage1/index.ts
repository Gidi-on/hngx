import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Defining route
app.get("/api", (req: Request, res: Response) => {
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

  return res.status(200).json({
    slack_name: req.query.slack_name,
    current_day: currentDayOfWeek,
    utc_time: currentDate.toISOString(),
    track: req.query.track,
    github_file_url:
      "https://github.com/Gidi-on/hngx/blob/master/stage1/index.ts",
    github_repo_url: "https://github.com/Gidi-on/hngx",
    status_code: 200,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
