type Mods = Record<string, boolean | string>

function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([classname]) => (classname))
  ].join(' ');
}

export { classNames }