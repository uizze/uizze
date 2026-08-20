// Source scripts default to slash commands. The provider build replaces only
// this exact declaration, avoiding heuristic rewrites across executable code.
export const UIZZE_COMMAND_PREFIX = '/'; // @uizze-provider-command-prefix
export const UIZZE_PROVIDER_ID = 'source'; // @uizze-provider-id
export const UIZZE_COMMAND = `${UIZZE_COMMAND_PREFIX}uizze`;
