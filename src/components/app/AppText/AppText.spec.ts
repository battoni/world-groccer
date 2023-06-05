import { afterEach, describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { TAGS_ENUM } from './types';
import Component from './AppText.vue';

let wrapper = shallowMount(Component);
afterEach(() => wrapper.unmount());

describe('AppText', () => {
  it('renders the correct tag and class', () => {
    wrapper = shallowMount(Component, {
      props: {
        tag: TAGS_ENUM.H1,
      },
      slots: {
        default: 'Hello, world!',
      },
    });

    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('.text-h1').exists()).toBe(true);
    expect(wrapper.text()).toContain('Hello, world!');
  });

  it('renders a <p> tag by default', () => {
    wrapper = shallowMount(Component, {
      slots: {
        default: 'Default content',
      },
    });

    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('.text-p').exists()).toBe(true);
    expect(wrapper.text()).toContain('Default content');
  });
});
