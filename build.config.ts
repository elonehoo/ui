import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  externals: [
    'unocss',
  ],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
