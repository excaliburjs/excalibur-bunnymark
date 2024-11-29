// import { defineConfig } from 'vite'
// import fs from 'fs'

// const isExcaliburSymlinked =
//   fs.existsSync('./node_modules/excalibur') &&
//   fs.lstatSync('./node_modules/excalibur').isSymbolicLink()

// export default defineConfig({
//   optimizeDeps: {
//     exclude: isExcaliburSymlinked ? ['excalibur'] : [],
//   },
//   resolve: {
//     dedupe: isExcaliburSymlinked ? ['excalibur'] : [],
//   },
// })