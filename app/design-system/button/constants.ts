export const BUTTON_COMPONENT_GITHUB_URL = `https://github.com/JAYKALIA007/galleria/blob/master/app/design-system/button/ButtonComponent.tsx`;

export const PRIMARY_BUTTON_CODE_LINES = [`<ButtonComponent />`];

export const SECONDARY_BUTTON_CODE_LINES = [
  `<ButtonComponent theme='secondary'>`,
  `   secondary`,
  `</ButtonComponent>`,
];

export const DANGER_BUTTON_CODE_LINES = [
  `<ButtonComponent theme='danger'>`,
  `   danger`,
  `</ButtonComponent>`,
];

export const OUTLINE_BUTTON_CODE_LINES = [
  `<ButtonComponent theme='outline'>`,
  `   outline`,
  `</ButtonComponent>`,
];

export const GHOST_BUTTON_CODE_LINES = [
  `<ButtonComponent buttonVariant='ghost'>`,
  `   ghost`,
  `</ButtonComponent>`,
];

export const ICON_IN_BUTTON_CODE_LINES = [
  `import { PlayIcon } from "@radix-ui/react-icons";`,
  `export const Button = () => {`,
  ` return(`,
  `     <ButtonComponent>`,
  `        <PlayIcon />`,
  `        <span>Play</span>`,
  `     </ButtonComponent>`,
  `)}`,
];

export const LOADING_BUTTON_CODE_LINES = [
  `<ButtonComponent`,
  `  isLoading`,
  `  disabled`,
  `  loadingStateMessage="Please wait"`,
  `/>`,
];

export const DEFAULT_SIZE_CODE_LINES = [`<ButtonComponent />`];

export const XS_SIZE_CODE_LINES = [`<ButtonComponent size='xs'/>`];

export const SM_SIZE_CODE_LINES = [`<ButtonComponent size='sm'/>`];

export const LG_SIZE_CODE_LINES = [`<ButtonComponent size='lg'/>`];
