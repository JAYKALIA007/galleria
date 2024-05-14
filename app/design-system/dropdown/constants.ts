export const DROPDOWN_COMPONENT_GITHUB_URL = `https://github.com/JAYKALIA007/galleria/blob/master/app/design-system/dropdown/Dropdown.tsx`;

export const DEFAULT_DROPDOWN_CODE_LINES = [
  `<Dropdown>`,
  `  <DropdownTrigger>`,
  `    Open`,
  `  </DropdownTrigger>`,
  `  <DropdownContent>`,
  `    <DropdownItem>Profile</DropdownItem>`,
  `    <DropdownItem>Dashboard</DropdownItem>`,
  `    <DropdownItem>Logout</DropdownItem>`,
  `  </DropdownContent>`,
  `</Dropdown>`,
];

export const DROPDOWN_WITH_HEADER_CODE_LINES = [
  `<Dropdown>`,
  `  <DropdownTrigger>`,
  `    Open`,
  `  </DropdownTrigger>`,
  `  <DropdownContent>`,
  `    <DropdownHeader>Jane Doe</DropdownHeader>`,
  `    <DropdownItem>Profile</DropdownItem>`,
  `    <DropdownItem>Dashboard</DropdownItem>`,
  `    <DropdownItem>Logout</DropdownItem>`,
  `  </DropdownContent>`,
  `</Dropdown>`,
];

export const NESTED_DROPDOWN_CODE_LINES = [
  `<Dropdown>`,
  `  <DropdownTrigger>Open</DropdownTrigger>`,
  `  <DropdownContent>`,
  `    <DropdownHeader>Jane Doe</DropdownHeader>`,
  `    <DropdownItem>Profile</DropdownItem>`,
  `    <DropdownItem>Dashboard</DropdownItem>`,
  `    <DropdownSubGroup>`,
  `      <DropdownSubGroupTrigger>Subscriptions</DropdownSubGroupTrigger>`,
  `      <DropdownSubGroupContent>`,
  `        <DropdownItem>Active</DropdownItem>`,
  `        <DropdownItem>Expired</DropdownItem>`,
  `      </DropdownSubGroupContent>`,
  `    </DropdownSubGroup>`,
  `    <DropdownItem>Logout</DropdownItem>`,
  `  </DropdownContent>`,
  `</Dropdown>`,
];

export const DISABLED_ITEM_DROPDOWN_CODE_LINES = [
  `<Dropdown>`,
  `  <DropdownTrigger>`,
  `    Open`,
  `  </DropdownTrigger>`,
  `  <DropdownContent>`,
  `    <DropdownItem>Profile</DropdownItem>`,
  `    <DropdownItem>Dashboard</DropdownItem>`,
  `    <DropdownItem disabled>Logout</DropdownItem>`,
  `  </DropdownContent>`,
  `</Dropdown>`,
];

export const RIGHT_SIDED_DROPDOWN_CODE_LINES = [
  `<Dropdown>`,
  `  <DropdownTrigger>`,
  `    Open`,
  `  </DropdownTrigger>`,
  `  <DropdownContent side="right">`,
  `    <DropdownItem>Profile</DropdownItem>`,
  `    <DropdownItem>Dashboard</DropdownItem>`,
  `    <DropdownItem>Logout</DropdownItem>`,
  `  </DropdownContent>`,
  `</Dropdown>`,
];
