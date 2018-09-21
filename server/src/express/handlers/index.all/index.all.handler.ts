import * as express from 'express'

export async function indexAllHandler(req: express.Request, res: express.Response) {
    console.log('hit')
    res.send({ message: 'ok'})
}