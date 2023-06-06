import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ILink {
  class?: string;
  icon: IconDefinition;
  id: string;
  target: string;
}

const ComposedLinkProps = {};

export { ComposedLinkProps, type ILink };
