import { PresetForTable } from '../types/PresetForTable';
import { getData } from '../utils/httpClient';

export function getPresetsforTable() {
  return getData<PresetForTable[]>('/modes');
}
