export * from './animate'

export function rootStyle(badge: string, box: string, paddingCard: string, collapseFocus:string, roundedBtn:string): string {
  return `
   :root {
    --badge: ${badge};
    --box: ${box};
    --padding-card: ${paddingCard};
    --collapse-focus: ${collapseFocus};
    --rounded-btn: ${roundedBtn};
  }
  `
}
