import { describe, expect, it } from 'vitest';
import {
  library,
  type IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';

describe('fontAwesomeHelper', () => {
  it('adds the icon to the library', () => {
    const mockIcon: IconDefinition = {
      prefix: 'fas',
      iconName: 'bell',
      icon: [
        512,
        512,
        [],
        'f021',
        'M512 288c0-141.4-114.6-256-256-256C114.6 32 0 146.6 0 288c0 76.8 35.2 145.4 90.4 191.2 2.4 2.4 5.8 3.6 9 3.6 3.2 0 6.6-1.2 9-3.6l68-68c18.6-18.6 43-28.8 68.6-28.8s50 10.2 68.6 28.8l68 68c5 5 11.6 7.6 18 7.6s13-2.6 18-7.6C476.8 433.4 512 364.8 512 288z',
      ],
    };

    library.add(mockIcon);

    const foundIcon = findIconDefinition({ prefix: 'fas', iconName: 'bell' });
    expect(foundIcon).not.toBeNull();
    expect(foundIcon?.icon).toBe(mockIcon.icon);
  });
});
