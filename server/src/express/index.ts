import * as http from "http";
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as morgan from 'morgan'
import { HANDLERS } from './handlers'

export class Expresss {
    private static app: express.Express
    private static server: http.Server

    static defineHandlers() {
        this.app.post('*', HANDLERS.Root.post)
        this.app.all('*', HANDLERS.Root.all)
    }

    static init() {
        this.app = express()
         
        this.app.use(morgan('common'))
        
        this.app.use(bodyParser.json({}))
        this.app.use(bodyParser.urlencoded({ extended: true }))
        
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Headers", process.env.EXPRESS_HEADERS_ALLOW || "X-Requested-With, Content-Type, Accept, Authorization")
            res.header("Access-Control-Expose-Headers", process.env.EXPRESS_HEADERS_EXPOSE || "")
            res.header("Access-Control-Allow-Origin", process.env.EXPRESS_HEADERS_ORIGIN || "*")
            res.header('Access-Control-Allow-Methods',process.env.EXPRESS_HEADERS_METHODS || "POST, GET, PUT, DELETE, OPTIONS, PATCH")
            'OPTIONS' == req.method ? res.send(200) : next()
        })
        
        this.defineHandlers()

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