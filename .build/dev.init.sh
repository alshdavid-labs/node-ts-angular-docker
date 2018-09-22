if ! [ -x "$(command -v ng)" ]; then
    yarn global add @angular/cli
fi

if ! [ -x "$(command -v tsc)" ]; then
    yarn global add typescript
fi

if ! [ -x "$(command -v nodemon)" ]; then
    yarn global add nodemon
fi

cd client
if [ ! -d node_modules ]
then 
    echo "Installing Client Dependencies"
    yarn install
fi
cd ..

cd server
if [ ! -d node_modules ]
then 
    echo "Installing Server Dependencies"    
    yarn install
fi
tsc
cd ..

npx concurrently \
    "cd server && tsc --watch --preserveWatchOutput" \
    "cd server && nodemon --inspect=0.0.0.0:9229 --ignore dist/public --watch dist dist/index.js" \
    "cd client && ng build --watch --poll=1000 --output-path=../server/dist/public"