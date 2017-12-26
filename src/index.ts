import * as express from 'express';
import * as ejs from 'ejs';

class App {
    public express
  
    constructor() {
        this.express = express()
        this.mountRoutes()
    }
  
    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.render("index");
        })
        this.express.use('/', router)
    }
}
  
let app = new App().express;
app.set('view engine', 'ejs');

let port = 8080;

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
});

