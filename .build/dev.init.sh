cd client

if [ ! -d node_modules ]
then 
    echo "Installing Client Dependencies"
    yarn global add @angular/cli
    yarn install
fi
cd ..

cd server
if [ ! -d node_modules ]
then 
    echo "Installing Server Dependencies"
    yarn global add nodemon
    yarn global add typescript
    yarn install
fi
tsc
cd ..

npx concurrently \
    "cd server && tsc --watch --preserveWatchOutput" \
    "cd server && nodemon --inspect=0.0.0.0:9229 --watch dist dist/index.js" \
    "cd client && ng serve --host 0.0.0.0 --disable-host-check --poll=1000 --proxy-config proxy.conf.json"