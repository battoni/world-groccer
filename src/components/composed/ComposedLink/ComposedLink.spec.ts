import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/vue';
import { APP_ICONS } from '@Helpers';
import Plugins from '@Plugins';
import { router } from '@Libraries';

import Component from './ComposedLink.vue';

describe('ComposedLink', () => {
  const options = {
    props: {
      external: false,
      isIcon: false,
      testId: 'test-composed-link',
      link: {
        id: 'Test Link',
        target: '/',
        icon: APP_ICONS.faBell,
        class: 'extra-class',
      },
    },

    global: {
      stubs: ['BaseIcon'],
      plugins: [...Plugins, router],
    },
  };

  afterEach(() => cleanup());

  test('renders default component', () => {
    render(Component, { ...options });
    const { getByTestId } = screen;
    const { link } = options.props;

    const component = getByTestId(options.props.testId);
    expect(component).toBeInTheDocument();
    expect(component.getAttribute('href')).toBe(link.target);
    expect(component.getAttribute('class')).toContain('link');
    expect(component.getAttribute('class')).toContain(link.class);
  });

  test('renders component correctly when it is internal and have icon', () => {
    render(Component, {
      ...options,
      props: {
        ...options.props,
        isIcon: true,
      },
    });
    const { queryByText, getByTestId } = screen;

    const routerLinkText = queryByText(options.props.link.id);
    expect(routerLinkText).not.toBeInTheDocument();

    const component = getByTestId(`${options.props.testId}_base-icon`);
    expect(component).toBeInTheDocument();
  });

  test('renders component correctly when it is external', () => {
    render(Component, {
      ...options,
      props: {
        ...options.props,
        external: true,
      },
    });
    const { queryByTestId, getByText } = screen;

    const routerLink = queryByTestId(options.props.testId);
    expect(routerLink).not.toBeInTheDocument();

    const component = getByText(options.props.link.id);
    expect(component).toBeInTheDocument();
  });
});
