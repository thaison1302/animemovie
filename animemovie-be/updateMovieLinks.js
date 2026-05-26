import dotenv from "dotenv";
import { connectToDb } from "./configs/db.js";
import { Movie } from "./models/movie.model.js";

dotenv.config();

const movieLinks = [
  { name: "Weather With You", link: "https://res.cloudinary.com/dp7tls9cx/image/upload/v1779203932/family_uj2j7r.jpg" },
  { name: "Once Peace", link: "https://res.cloudinary.com/dp7tls9cx/image/upload/v1779203933/piece_gdzhau.jpg" },
  { name: "Boruto: Naruto Next Generations", link: "https://i.pinimg.com/736x/d3/51/52/d3515290c6a8763be4bc5cd2beb75722.jpg" },
  { name: "Spy X Family", link: "https://res.cloudinary.com/dp7tls9cx/image/upload/v1779203933/spy_abjfbp.jpg" },
  { name: "Shingeki no kyojin", link: "https://res.cloudinary.com/dp7tls9cx/image/upload/v1779203933/titan_k3fysk.jpg" },
  { name: "Captain Tsubasa", link: "https://res.cloudinary.com/dp7tls9cx/image/upload/v1779203934/tubasa_asv80w.jpg" },
  { name: "Ao Ashi", link: "https://res.cloudinary.com/dp7tls9cx/image/upload/v1779203933/aoashi_wezcel.jpg" },
];

const updateMovieLinks = async () => {
  await connectToDb();

  try {
    let updated = 0;
    for (const item of movieLinks) {
      const result = await Movie.updateOne(
        { name: item.name },
        { $set: { link: item.link } }
      );

      if (result.modifiedCount > 0) {
        console.log(`✓ Updated: ${item.name} with link: ${item.link}`);
        updated++;
      } else {
        console.log(`✗ Movie not found: ${item.name}`);
      }
    }

    console.log(`\n✅ Successfully updated ${updated}/${movieLinks.length} movies`);
    process.exit(0);
  } catch (error) {
    console.error("Update failed:", error);
    process.exit(1);
  }
};

updateMovieLinks();
