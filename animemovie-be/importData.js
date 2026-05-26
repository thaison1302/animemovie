import dotenv from "dotenv";
import { connectToDb } from "./configs/db.js";
import { Movie } from "./models/movie.model.js";
import { Episode } from "./models/episode.model.js";
import { Genre } from "./models/genre.model.js";

dotenv.config();

const data = [
  {
    movieName: "Weather With You",
    description:
      "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.",
    episode: "12",
    genres: ["action"],
    episodes: [
      { id: 1, title: "Episode 1", link: "rzRUlBcmsDo" },
      { id: 2, title: "Episode 2", link: "rSKunCzOows" },
      { id: 3, title: "Episode 3", link: "tw34XM-LGzo" },
      { id: 4, title: "Episode 4", link: "BeSyI9PpQvc" },
      { id: 5, title: "Episode 5", link: "4ruyZJHvV3E" },
      { id: 6, title: "Episode 6", link: "lBiKKMF25OU" },
      { id: 7, title: "Episode 7", link: "LDcF3pv8Hts" },
      { id: 8, title: "Episode 8", link: "3vY8TaDrYrA" },
      { id: 9, title: "Episode 9", link: "7RkPV7w5OzY" },
      { id: 10, title: "Episode 10", link: "DqQbOmqz7fQ" },
      { id: 11, title: "Episode 11", link: "Gsq0HsYzC-E" },
      { id: 12, title: "Episode 12", link: "wGgoxpx-sxk" },
    ],
  },
  {
    movieName: "Once Peace",
    description:
      "One Piece is a shōnen manga series by the renowned author Eiichiro Oda. This manga has been adapted into a long-running anime series that is humorous and distinctive. One Piece opens with the execution of the Pirate King, Gol D. Roger. Before his death, he revealed that he had a treasure hidden somewhere out at sea. Whoever finds the treasure would claim it as their own. As a result, countless brave people rushed to the seas in search of the Pirate King Gol D. Roger’s mysterious treasure.",
    episode: "12",
    genres: ["adventure"],
    episodes: [
      { id: 1, title: "Episode 1", link: "MCb13lbVGE0" },
      { id: 2, title: "Episode 2", link: "Ades3pQbeh8" },
      { id: 3, title: "Episode 3", link: "S-XxKVxZ2fU" },
      { id: 4, title: "Episode 4", link: "-sKjdYceH04" },
      { id: 5, title: "Episode 5", link: "lNMSqxQtO0w" },
      { id: 6, title: "Episode 6", link: "OBDJgW-TJKc" },
      { id: 7, title: "Episode 7", link: "ZcsbhQxhFqU" },
      { id: 8, title: "Episode 8", link: "4qo0p2o0dCY" },
      { id: 9, title: "Episode 9", link: "spMqxS3a-H0" },
      { id: 10, title: "Episode 10", link: "LNbyi5TGfZ0" },
      { id: 11, title: "Episode 11", link: "S4SvOPNTZ3A" },
      { id: 12, title: "Episode 12", link: "1KMcoJBMWE4" },
    ],
  },
  {
    movieName: "Boruto: Naruto Next Generations",
    description:
      "Boruto: Naruto Next Generations is a sequel to the original Naruto series. It follows the story of Naruto Uzumaki's son, Boruto Uzumaki, who is a young ninja living in a world where his father is now the Hokage. The series explores Boruto's journey as he faces new challenges and enemies while trying to live up to his father's legacy.",
    episode: "12",
    genres: ["adventure"],
    episodes: [
      { id: 1, title: "Episode 1", link: "ppLE9xycGm4" },
      { id: 2, title: "Episode 2", link: "ld-oqpvOBAk" },
      { id: 3, title: "Episode 3", link: "EdCUezHQERc" },
      { id: 4, title: "Episode 4", link: "Qyonn5Vbg7s" },
      { id: 5, title: "Episode 5", link: "nQeIObeB--8" },
      { id: 6, title: "Episode 6", link: "4Nr11Tn_XQ0" },
      { id: 7, title: "Episode 7", link: "wmU-Nr40MCY" },
      { id: 8, title: "Episode 8", link: "3vY8TaDrYrA" },
      { id: 9, title: "Episode 9", link: "PULgjzsOybA" },
      { id: 10, title: "Episode 10", link: "B5c2PkSRfc8" },
      { id: 11, title: "Episode 11", link: "E-IQjy1RxsI" },
      { id: 12, title: "Episode 12", link: "ilAfjjqHePY" },
    ],
  },
  {
    movieName: "Spy X Family",
    description:
      "The film is a theatrical installment of the popular anime series Spy × Family. In this installment, after receiving a notice that he may be replaced in Operation Strix, Loid Forger decides to help his daughter Anya Forger win a cooking competition at Eden Academy by preparing the headmaster’s favorite dish, hoping to avoid being removed from the secret mission. However, from that point on, the Forger family uncovers a terrifying secret that threatens world peace.",
    episode: "12",
    genres: ["action"],
    episodes: [
      { id: 1, title: "Episode 1", link: "IhRWiXy526s" },
      { id: 2, title: "Episode 2", link: "MG5V-UduleI" },
      { id: 3, title: "Episode 3", link: "dt4y1FAF84c" },
      { id: 4, title: "Episode 4", link: "tEM5CeFy7zQ" },
      { id: 5, title: "Episode 5", link: "Icmpx1yL3eo" },
      { id: 6, title: "Episode 6", link: "D7ZUGW28zcM" },
      { id: 7, title: "Episode 7", link: "cEsR17MALnw" },
      { id: 8, title: "Episode 8", link: "fAJ39CFbg2I" },
      { id: 9, title: "Episode 9", link: "tb9tRvSROT4" },
      { id: 10, title: "Episode 10", link: "XgygmPtKBNA" },
      { id: 11, title: "Episode 11", link: "pjQ_Eh_XdXA" },
      { id: 12, title: "Episode 12", link: "XY5WYzr9Lc0" },
    ],
  },
  {
    movieName: "Shingeki no kyojin",
    description:
      "The story of Attack on Titan focuses on a civilization surrounded by three massive walls, the only remaining safe haven for humanity. The walls are named after the three daughters of the first king: Maria, Rose, and Sina. The people living within these walls are known as Eldians, and they believe that over a hundred years ago, humanity was nearly driven to extinction by the appearance of humanoid giants called Titans.",
    episode: "12",
    genres: ["adventure"],
    episodes: [
      { id: 1, title: "Episode 1", link: "M_OauHnAFc8" },
      { id: 2, title: "Episode 2", link: "LV-nazLVmgo" },
      { id: 3, title: "Episode 3", link: "MGRm4IzK1SQ" },
      { id: 4, title: "Episode 4", link: "nEzpVFCZ3HE" },
      { id: 5, title: "Episode 5", link: "E7WytLM2KvY" },
      { id: 6, title: "Episode 6", link: "O_PlgWfi6hU" },
      { id: 7, title: "Episode 7", link: "SlNpRThS9t8" },
      { id: 8, title: "Episode 8", link: "r7MosyoAUhQ" },
      { id: 9, title: "Episode 9", link: "2S4qGKmzBJE" },
      { id: 10, title: "Episode 10", link: "Y-eoYLBbZOA" },
      { id: 11, title: "Episode 11", link: "kM0P7QhhO6Y" },
      { id: 12, title: "Episode 12", link: "EIVVnLlhzr0" },
    ],
  },
  {
    movieName: "Captain Tsubasa",
    description:
      "Tsubasa Oozora is the main character in this series. When he was young, he narrowly escaped death thanks to a lucky soccer ball. That event inspired him to become a soccer fan. The story focuses on exciting soccer matches that bring surprises to viewers. This is a remake of 'Tsubasa: The Dream of the Soccer Field', with some details added or removed to give the series its own unique characteristics. This movie evokes childhood memories for many people.",
    episode: "12",
    genres: ["sports"],
    episodes: [
      { id: 1, title: "Episode 1", link: "oXf50MRXfM8" },
      { id: 2, title: "Episode 2", link: "NGucBaennao" },
      { id: 3, title: "Episode 3", link: "7WeUofZzD5g" },
      { id: 4, title: "Episode 4", link: "ZeC-KRARZtk" },
      { id: 5, title: "Episode 5", link: "0hvEQXg1uDg" },
      { id: 6, title: "Episode 6", link: "WY_TK_-IaWY" },
      { id: 7, title: "Episode 7", link: "E5FRxUIA8AA" },
      { id: 8, title: "Episode 8", link: "T4MPO9GkDSk" },
      { id: 9, title: "Episode 9", link: "N6EEhHZNYOs" },
      { id: 10, title: "Episode 10", link: "x4UKkgFIqCk" },
      { id: 11, title: "Episode 11", link: "PM_G7HjBcRw" },
      { id: 12, title: "Episode 12", link: "futiptE6BtY" },
    ],
  },
  {
    movieName: "Ao Ashi",
    description:
      "Ashito Aoi is a young soccer player full of ambition from a rural town in Japan. His hope of entering a prestigious high school with an excellent soccer club was dashed when he caused an incident during an important match for his team, resulting in their elimination from the tournament. However, he caught the attention of an important person who happened to visit from Tokyo. What will happen to Ashito?",
    episode: "12",
    genres: ["sports"],
    episodes: [
      { id: 1, title: "Episode 1", link: "onYY_CsJwGg" },
      { id: 2, title: "Episode 2", link: "dKAn47YfSwc" },
      { id: 3, title: "Episode 3", link: "LOO3xyFijDk" },
      { id: 4, title: "Episode 4", link: "uAKJRzwVEbI" },
      { id: 5, title: "Episode 5", link: "Hub2LifHA9w" },
      { id: 6, title: "Episode 6", link: "B0U1BQUUy68" },
      { id: 7, title: "Episode 7", link: "bueNT_mjTP8" },
      { id: 8, title: "Episode 8", link: "1JfHDsaIgb0" },
      { id: 9, title: "Episode 9", link: "XNF0wgroieA" },
      { id: 10, title: "Episode 10", link: "aBjZYosFauA" },
      { id: 11, title: "Episode 11", link: "V4g9aYMgNiA" },
      { id: 12, title: "Episode 12", link: "AkDI3OiN9kI" },
    ],
  },
];

const importData = async () => {
  await connectToDb();

  try {
    await Genre.deleteMany({});
    await Movie.deleteMany({});
    await Episode.deleteMany({});

    const genreNames = [...new Set(data.flatMap((movie) => movie.genres))];
    await Genre.insertMany(genreNames.map((name) => ({ name })));

    for (const item of data) {
      const totalEpisode = Number(item.episode) || item.episodes.length;
      const movie = await Movie.create({
        name: item.movieName,
        description: item.description,
        totalEpisode,
        genres: item.genres,
      });

      const episodeDocs = item.episodes.map((episode) => ({
        movieId: movie._id,
        name: episode.title,
        link: episode.link,
        episodeNumber: episode.id,
      }));

      await Episode.insertMany(episodeDocs);
    }

    console.log(`Inserted ${data.length} movies, ${genreNames.length} genres, and all episodes.`);
    process.exit(0);
  } catch (error) {
    console.error("Import failed:", error);
    process.exit(1);
  }
};

importData();
