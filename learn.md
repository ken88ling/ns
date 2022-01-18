npx create-nx-workspace ns
yarn nx list

yarn add @nrwl/next

yarn nx list @nrwl/next

yarn add @nrwl/react

yarn nx list @nrwl/react

yarn nx g @nrwl/react:application --help

yarn nx g @nrwl/react:application store

yarn nx run store:serve --port 3001

yarn add @material-ui/core

yarn nx g @nrwl/react:app --help

yarn nx g @nrwl/react:lib ui-shared --directory=store

yarn nx g @nrwl/react:component header --project=store-ui-shared

yarn nx g @nrwl/workspace:lib util-formatters --directory=store
