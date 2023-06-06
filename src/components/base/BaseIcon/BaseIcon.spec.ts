import { afterEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Component from './BaseIcon.vue';

let wrapper = mount(Component, { props: { icon: faBell } });
afterEach(() => wrapper.unmount());

describe('BaseIcon', () => {
  it('renders the component correctly', () => {
    wrapper = mount(Component, {
      props: {
        icon: faBell,
      },
    });

    const iconElement = wrapper.find('.icon');
    const svgElement = wrapper.findComponent({ name: 'FontAwesomeIcon' });

    expect(svgElement.exists()).toBe(true);
    expect(svgElement.classes()).toContain('svg');
    expect(svgElement.classes()).toContain('fa-bell');
    expect(svgElement.classes()).toContain('svg-inline--fa');
    expect(svgElement.classes()).not.toContain('is-button');

    expect(iconElement.exists()).toBe(true);
    expect(iconElement.classes()).toContain('icon');
    expect(iconElement.classes()).not.toContain('is-button');
  });

  it('renders the component correctly as a button', () => {
    wrapper = mount(Component, {
      props: {
        icon: faBell,
        isButton: true,
      },
    });

    const iconElement = wrapper.find('.icon');
    const svgElement = wrapper.findComponent({ name: 'FontAwesomeIcon' });

    expect(iconElement.exists()).toBe(true);
    expect(iconElement.classes()).toContain('icon');
    expect(iconElement.classes()).toContain('is-button');

    expect(svgElement.exists()).toBe(true);
    expect(svgElement.classes()).toContain('svg');
    expect(svgElement.classes()).toContain('fa-bell');
    expect(svgElement.classes()).toContain('svg-inline--fa');
  });
});
