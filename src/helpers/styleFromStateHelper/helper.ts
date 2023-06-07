export default function () {
  function activeClass(isActive: boolean) {
    return isActive ? 'is-active' : '';
  }

  return {
    activeClass,
  };
}
