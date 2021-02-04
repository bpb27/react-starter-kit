# chmod u+x ./scripts/build.sh
# install client dependencies
npm i
# install server dependencies
npm i --prefix "./server"
# create client build
webpack --mode production
