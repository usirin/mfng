# Exploring possibilities for microfrontends of the next generation

Do we still need to deploy microfrontends and their BFFs, independent of the
main app? Or can we instead compose them at build-time (lazily), and utilize
server components to let them fetch their data in the server?

## Features

- [x] react server components
- [x] server-side rendering
- [x] streaming
- [x] client components loaded as separate chunks
- [x] server actions
- [x] simple routing
- [ ] advanced routing (~~maybe use `react-router`?~~ I don't think think is
      feasable since the concepts of RSC and React Router do not really line
      up.)
- [ ] (lazy) microfrontend compositon demo
- [ ] stylesheets
- [ ] support poisened imports
- [ ] server references manifest
