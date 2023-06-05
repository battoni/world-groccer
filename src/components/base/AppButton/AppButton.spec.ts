import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { ROLES_ENUM, TYPES_ENUM } from './types';
import Component from './AppButton.vue';

describe('AppButton', () => {
  it('renders a button with correct classes and attributes', () => {
    const wrapper = shallowMount(Component, {
      props: {
        disabled: false,
        label: 'Test Button',
        loading: false,
        outset: true,
        role: ROLES_ENUM.BUTTON,
        type: TYPES_ENUM.SUCCESS,
        wide: true,
      },
    });

    const button = wrapper.find('button');
    expect(button.classes()).toContain('btn-success');
    expect(button.classes()).toContain('outset');
    expect(button.classes()).toContain('wide');
    expect(button.attributes('disabled')).toBeUndefined();
    expect(button.attributes('title')).toBe('Test Button');
    expect(button.attributes('type')).toBe(ROLES_ENUM.BUTTON);

    wrapper.unmount();
  });

  it('emits "click" event when clicked', async () => {
    const wrapper = shallowMount(Component, {
      props: {
        disabled: false,
        label: 'Test Button',
        loading: false,
        outset: true,
        role: ROLES_ENUM.BUTTON,
        type: TYPES_ENUM.SUCCESS,
        wide: true,
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.emitted('click')).toHaveLength(1);

    wrapper.unmount();
  });
});
