export const indexTemplate = (content) =>`
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="/static/client.js" type="aplication/javascript"></script>
  <title>My react project</title>
</head>
<body>
  <div id="react-root">${content}</div>
</body>
</html>
`;
