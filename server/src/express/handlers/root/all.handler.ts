import * as express from 'express'

export async function all(req: express.Request, res: express.Response) {
    res.send({ message: 'Hello World'})
}