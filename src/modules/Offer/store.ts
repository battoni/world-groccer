import { defineStore } from 'pinia';

interface Repeater {
  ctrlSum: number;
  expSum: number;
  label: string;
}

interface State {
  repeaters: Repeater[];
}

export const useOfferStore = defineStore('offer', {
  state: (): State => {
    return {
      repeaters: [],
    };
  },

  getters: {
    labels({ repeaters }) {
      return repeaters.length ? repeaters.map(({ label }) => label) : [];
    },
    dataSets({ repeaters }) {
      if (!repeaters.length) {
        return [];
      }

      const experimental: number[] = [];
      const control: number[] = [];

      repeaters.forEach(({ expSum, ctrlSum }) => {
        experimental.push(expSum);
        control.push(ctrlSum);
      });

      const dataSets = [
        {
          label: 'Control',
          backgroundColor: '#123411',
          data: control,
        },
        {
          label: 'Experimental',
          backgroundColor: '#e43e3e',
          data: experimental,
        },
      ];

      return dataSets;
    },
  },
});
