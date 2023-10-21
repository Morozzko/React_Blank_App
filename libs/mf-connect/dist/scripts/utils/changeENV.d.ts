import type { MFType } from './lib/types';
import { ConfigType } from './lib/types';
export declare const changeENV: (name: string, fp: string, dictionary: Record<string, MFType>, imports?: string[], config?: ConfigType['config']) => void;
