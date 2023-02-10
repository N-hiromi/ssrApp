import express from "express";
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app: express.Express = express();
const port = 9000;

// app.get("/", (req: express.Request, res: express.Response) => {
//   res.send("Hello world");
// });

// /* 表示するデータ */
// app.get("/api", (req: express.Request, res: express.Response) => {
//   res.json([
// 		{
// 			id: 1,
// 			name: "やっちゃん",
// 			color: "white",
// 			character: "几帳面"
// 		},
// 		{
// 			id: 2,
// 			name: "なみっち",
// 			color: "black",
// 			character: "怖いものなんてない"
// 		},
// 		{
// 			id: 3,
// 			name: "るるちゃん",
// 			color: "black",
// 			character: "おてんば"
// 		},
// 		{
// 			id: 4,
// 			name: "ちっち",
// 			color: "black",
// 			character: "武士道"
// 		},
// 	])
// })
app.listen(port, () => {
  console.log(`port ${port} でサーバー起動中`);
});

// app.get('/', (req, res) => {
// 	const app = ReactDOMServer.renderToString(<App />);
// 	const indexFile = path.reseolve('./build/index.html')
// })

