import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { TARGET, REFERRER_POLICY } from './types';
import Component from './BaseLink.vue';

const options = {
  props: {
    content: 'Teste Content',
    href: 'https://guilherme.battoni.dev',
  },
};

describe('BaseLink', () => {
  test('renders component with default props', async () => {
    render(Component, { ...options });
    const { getByText } = screen;
    const { content, href } = options.props;

    expect(getByText(content)).toBeInTheDocument();
    expect(getByText(content).getAttribute('href')).toBe(href);
    expect(getByText(content).getAttribute('referrerpolicy')).toBe(
      REFERRER_POLICY.STRICT_ORIGIN_CROSS
    );
    expect(getByText(content).getAttribute('target')).toBe(TARGET.SELF);
  });
});
