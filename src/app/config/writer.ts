import { config as vars } from './values';

const writeValueToBody = (name: keyof typeof vars, value: string) =>
  document.body.style.setProperty('--' + name, value);

/**
 * Write the contents of the document root node as custom css properties
 */
export const writeVars = () => {
  for (const name of Object.keys(vars) as (keyof typeof vars)[]) {
    let value = vars[name];

    if (typeof value === 'function') {
      value = value(vars);
    }

    writeValueToBody(name, value.toString());
  }
};

const invertGrays = () => {
  const keys: (keyof typeof vars)[] = [];
  let values: typeof vars[keyof typeof vars][] = [];

  (Object.entries(vars) as [
    keyof typeof vars,
    typeof vars[keyof typeof vars]
  ][])
    .filter(([key]) => key.includes('gray'))
    .forEach(([key, value]) => {
      keys.push(key);
      values.push(typeof value === 'function' ? value(vars) : value);
    });

  values = values.reverse();

  for (let i = 0; i < keys.length; i++) {
    // @ts-ignore type checking doesn't catch, but this will always pass
    vars[keys[i]] = values[i];
  }

  writeVars();
};

export const toggleDarkMode = (isDarkMode: boolean) => {
  vars.accentColor = vars.accentColor.lighten(isDarkMode ? 5 : -5);
  invertGrays();
};
