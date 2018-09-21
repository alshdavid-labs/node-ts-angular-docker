import { Expresss } from './express'

void async function main() {
    await Expresss.getServer()

    console.log('Ready to go')
}()
