import * as http from "http";
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as HANDLERS from './handlers'

export class Expresss {
    private static app: express.Express
    private static server: http.Server

    static init() {
        this.app = express()

        this.app.use((req, res, next) => {
            console.log('hit')
            next()
        })

        this.app.all('*', HANDLERS.indexAllHandler)

        this.app.use(bodyParser.json({}))
        this.app.use(bodyParser.urlencoded({ extended: true }))
        
        this.app.use((req, res, next) => res.header("Access-Control-Allow-Headers", process.env.EXPRESS_HEADERS_ALLOW))
        this.app.use((req, res, next) => res.header("Access-Control-Expose-Headers", process.env.EXPRESS_HEADERS_EXPOSE))
        this.app.use((req, res, next) => res.header("Access-Control-Expose-Headers", process.env.EXPRESS_HEADERS_EXPOSE))
        this.app.use((req, res, next) => res.header('Access-Control-Allow-Methods',  process.env.EXPRESS_HEADERS_METHODS))
        this.app.use((req, res, next) => req.method === 'OPTIONS' ? res.send(200) : next())
        
        return new Promise(res => this.server = this.app.listen(process.env.EXPRESS_HOST || 3000, _ =>  res()))
    }

    static async getServer(): Promise<http.Server> {
        if (this.server) {
            return this.server
        }
        await this.init()
        return this.server
    }
}