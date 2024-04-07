export const BUTTON_COMPONENT_GITHUB_URL = `https://github.com/JAYKALIA007/galleria/blob/master/app/design-system/button/ButtonComponent.tsx`;

export const PRIMARY_BUTTON_CODE_LINES = [
  `import { ButtonComponent } from "./ButtonComponent";`,
  `export const Button = () => {`,
  ` return(`,
  `     <ButtonComponent />`,
  `)}`,
];

export const SECONDARY_BUTTON_CODE_LINES = [
  `import { ButtonVariantType, ButtonComponent } from "./ButtonComponent";`,
  `export const Button = () => {`,
  ` return(`,
  `     <ButtonComponent buttonVariant='secondary'>`,
  `        secondary`,
  `     </ButtonComponent>`,
  `)}`,
];

export const DANGER_BUTTON_CODE_LINES = [
  `import { ButtonComponent } from "./ButtonComponent";`,
  `export const Button = () => {`,
  ` return(`,
  `     <ButtonComponent buttonVariant='danger'>`,
  `        danger`,
  `     </ButtonComponent>`,
  `)}`,
];

export const OUTLINE_BUTTON_CODE_LINES = [
  `import { ButtonComponent } from "./ButtonComponent";`,
  `export const Button = () => {`,
  ` return(`,
  `     <ButtonComponent buttonVariant='outline'>`,
  `        outline`,
  `     </ButtonComponent>`,
  `)}`,
];

export const GHOST_BUTTON_CODE_LINES = [
  `import { ButtonComponent } from "./ButtonComponent";`,
  `export const Button = () => {`,
  ` return(`,
  `     <ButtonComponent buttonVariant='ghost'>`,
  `        ghost`,
  `     </ButtonComponent>`,
  `)}`,
];

export const ICON_IN_BUTTON_CODE_LINES = [
  `import { ButtonComponent } from "./ButtonComponent";`,
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
  `import { ButtonComponent } from "./ButtonComponent";`,
  `export const Button = () => {`,
  ` return(`,
  `     <ButtonComponent`,
  `         isLoading`,
  `         disabled`,
  `         loadingStateMessage="Please wait"`,
  `     />`,
  `)}`,
];
