const newsRouter = require("express").Router();
const NewsAPI = require("newsapi");
const news = new NewsAPI(process.env.NEWS_API);

const convertDateTimeToDate = (datetimeStr) => {
    const datetimeObj = new Date(datetimeStr);
    const dateStr = datetimeObj.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    return dateStr;
};

newsRouter.post("/query", async (req, res) => {
    const newsArray = [];
    const { query } = req.body;
    news.v2
        .everything({
            q: query,
            language: "en",
            sortBy: "relevancy",
        })
        .then((response) => {
            response.articles.forEach((article) => {
                newsArray.push({
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    publishedAt: convertDateTimeToDate(article.publishedAt),
                    content: article.content,
                    source: article.source.name,
                });
            });
            res.status(200).json(newsArray);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
});

module.exports = newsRouter;
