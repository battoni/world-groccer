import { afterEach, describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { TYPES_ENUM } from './types';
import Component from './BaseLoader.vue';

let wrapper = shallowMount(Component);
afterEach(() => wrapper.unmount());

describe('BaseLoader', () => {
  it('renders with the default type', () => {
    wrapper = shallowMount(Component);

    expect(wrapper.find('.border-border-success').exists()).toBe(true);
  });

  it('renders with the provided type', () => {
    wrapper = shallowMount(Component, {
      props: {
        type: TYPES_ENUM.ERROR,
      },
    });

    expect(wrapper.find('.border-border-error').exists()).toBe(true);
  });
});
