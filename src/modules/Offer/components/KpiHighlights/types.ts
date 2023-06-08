import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Kpi {
  hasTags?: boolean;
  icon: IconDefinition;
  isCurrency?: boolean;
  label: string;
  results: number[];
}

export { type Kpi };
