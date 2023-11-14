import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'
import Sammui from '../src/index'

export default defineConfig({
  shortcuts: [
    { 'mockup-phone': `
      inline-block bg-black overflow-hidden mx-auto my-0 p-2.5 rounded-50px border-4 border-solid border-#444444
      [&.carbon]:relative [&.carbon]:top-0 [&.carbon]:left-0 [&.carbon]:[background:#000000]
      [&.carbon]:h-25px [&.carbon]:w-150px [&.carbon]:mx-auto [&.carbon]:my-0 [&.carbon]:rounded-br-17px [&.carbon]:rounded-bl-17px
      [&.carbon]:z-11 before:[&.carbon]:content-[''] before:[&.carbon]:absolute before:[&.carbon]:top-35% before:[&.carbon]:left-50%
      before:[&.carbon]:w-50px before:[&.carbon]:h-4px before:[&.carbon]:bg-#0c0b0e
      before:[&.carbon]:-translate-x-2/4 before:[&.carbon]:-translate-y-2/4 before:[&.carbon]:rounded-5px
      after:[&.carbon]:content-[''] after:[&.carbon]:absolute after:[&.carbon]:w-2 after:[&.carbon]:h-2
      after:[&.carbon]:bg-[#0f0b25] after:[&.carbon]:rounded-[5px] after:[&.carbon]:left-[70%] after:[&.carbon]:top-[20%]
      [&.display]:overflow-hidden [&.display]:mt-[-25px] [&.display]:rounded-40px
    ` },
  ],
  rules: [
  ],
  presets: [
    Sammui(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
