import * as express from 'express'

export async function post(req: express.Request, res: express.Response) {
    res.send({ message: req.body })
}