const http = require('http');

const PORT = 5002;

let LATEST_ID = 4
const store = [
  {
    id: 1,
    title: 'Cucumber',
    price: 1000,
    amount: 5,
    isDeleted: false,
  },
  {
    id: 2,
    title: 'Tomato',
    price: 2000,
    amount: 15,
    isDeleted: false,
  },
  {
    id: 3,
    title: 'Broccoli',
    price: 300,
    amount: 250,
    isDeleted: false,
  },
  {
    id: 4,
    title: 'Lettuce',
    price: 100,
    amount: 50,
    isDeleted: false,
  },
]

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/html')
  // res.setHeader('Set-Cookie', 'AuthenticationToken=amskldmasdkmalsdkasdklmslka')
  // res.write('<h1> Hello </h1>');
  // res.statusCode = 301;
  // res.setHeader('Location', 'https://stackoverflow.com/questions/62039078/error-darwin-x64-binaries-cannot-be-used-on-the-linux-x64-platform-aws-lamb')

  const { url, method } = req;

  if (url.includes('/products')) {
    if (method === 'GET') {
      const productId = Number(url.split('/')[2]);

      const product = store.find((product) => product.id === productId);

      if (product) {
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify(product));
        return res.end();
      };

      res.statusCode = 404;
      res.write(`<h1> products with id of ${productId} does not exist </h1>`);
      return res.end();
    }

    if (method === 'POST') {
      const payload = [];

      req.on('data', (data) => {
        payload.push(data);
      });


      req.on('end', () => {
        const { title, price, amount } = JSON.parse(payload.toString());

        if (!title || title.split('').length === 0) {
          res.setHeader('Content-Type', 'text/json');
          res.statusCode = 400;
          res.write(JSON.stringify({ message: 'title is required; title must be string' }));
          return res.end();
        };

        if (!price || price <= 0) {
          res.setHeader('Content-Type', 'text/json');
          res.statusCode = 400;
          res.write(JSON.stringify({ message: 'price is required; price must me greater than 0' }));
          return res.end();
        };


        const product = store.find((product) => product.title === title);

        if (product) {
          // TODO: return bad request with correct status code and message
        };


        const productPayload = {
          title,
          price,
          amount,
          id: LATEST_ID + 1,
          isDeleted: false,
        }

        store.push(productPayload);

        LATEST_ID += 1;

        res.statusCode = 201;
        return res.end();
      });
    }

    // TODO: update /products/:id + payload
    // TODO: delete /products/:id

  } else {
    console.log('here?')
    res.statusCode = 404;
    res.write('<h1> 404 not found </h1>');
    res.end();
  }


});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

