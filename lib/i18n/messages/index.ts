import { id, type Messages } from './id';
import { en } from './en';

export type Lang = 'id' | 'en';

export const LANGS: readonly Lang[] = ['id', 'en'];
export const DEFAULT_LANG: Lang = 'id';

export const messages: Record<Lang, Messages> = { id, en };

export type { Messages };
