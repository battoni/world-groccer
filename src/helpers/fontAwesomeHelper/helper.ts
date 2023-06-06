import {
  library,
  type IconDefinition,
} from '@fortawesome/fontawesome-svg-core';

export default function () {
  function add(icon: IconDefinition) {
    library.add(icon);
  }

  return { add };
}
