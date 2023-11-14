const MODULE_PATH = '/@vite/client'

const _onModuleUpdated = createEventHook<any>()
const _onConfigChanged = createEventHook<void>()
export const onModuleUpdated: any = _onModuleUpdated.on
export const onConfigChanged: any = _onConfigChanged.on

import(/* @vite-ignore */ MODULE_PATH)
  .then((c) => {
    const hmr = c.createHotContext('/')
    hmr.on('vite:beforeUpdate', (update: any) => {
      update.updates.forEach((u: any) => {
        _onModuleUpdated.trigger(u)
      })
    })
    hmr.on('unocss:config-changed', () => {
      _onConfigChanged.trigger()
    })
  })
  .catch((e) => {
    console.error('failed to connect to client vite server, you might need to do manual refresh to see the updates')
    console.error(e)
  })
