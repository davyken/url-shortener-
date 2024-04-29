import pool from "../db_config/db.js";
import chalk from "chalk";

// My function to save a shortened URL to the database
async function saveShortenedURL(originalURL, shortenedURL) {
  try {
    const query = {
      text: "INSERT INTO url_table(long_url, short_url) VALUES($1, $2)",
      values: [originalURL, shortenedURL],
    };
    await pool.query(query);
    console.log("Shortened URL saved successfully");
  } catch (error) {
    console.error(chalk.blue("AN ERROR OCCURRED"), error);
    throw error.message;
  }
}

// My function to obtain the list of shortened URLs from the database
async function getAllShortenedURLs() {
  try {
    const query = "SELECT short_url FROM url_table";
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error(
      chalk.blue(
        "An error occurred while obtaining shortened URLs, please try again"
      )
    );
    throw error.message;
  }
}

export { saveShortenedURL, getAllShortenedURLs };
