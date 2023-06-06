enum REFERRER_POLICY {
  NO_REFERRER = 'no-referrer',
  NO_REFERRER_DOWGRADE = 'no-referrer-when-downgrade',
  ORIGIN = 'origin',
  ORIGIN_CROSS = 'origin-when-cross-origin',
  SAME_ORIGIN = 'same-origin',
  STRICT_ORIGIN = 'strict-origin',
  STRICT_ORIGIN_CROSS = 'strict-origin-when-cross-origin',
  UNSAFE = 'unsafe-url',
}

enum TARGET {
  BLANK = '_blank',
  PARENT = '_parent',
  SELF = '_self',
  TOP = '_top',
}

const BaseLinkProps = {
  REFERRER_POLICY,
  TARGET,
};

export { BaseLinkProps, REFERRER_POLICY, TARGET };
