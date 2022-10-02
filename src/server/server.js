import express from 'express';
import ReactDom from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './index.Template';
import axios from 'axios';


const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    "https://www.reddit.com/api/v1/access_token",
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: "5iOVxSKsbB4vl3F-STR1xQ", password: 'klILMwfKKEkOlce82NqPkh3wDEy7ag' },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    }
  )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDom.renderToString(App()), data["access_token"])
      );
    })

});

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDom.renderToString(App()))
  );
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000')
});

