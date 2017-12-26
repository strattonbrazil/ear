//import { Router, Request, Response } from 'express';
import * as express from 'express';

class App {
    public express
  
    constructor() {
        this.express = express()
        this.mountRoutes()
    }
  
    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            })
        })
        this.express.use('/', router)
    }
  }
  
let app = new App().express;
let port = 8080;

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
});

console.log("hello, world");

