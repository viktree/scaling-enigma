const tasks = arr => arr.join(' && ')

const hooks = {
  'pre-commit': tasks([
    '[ ! -e .nvmrc ] && node -v  > .nvmrc || :',
    'git add .nvmrc',
  ]),
}

module.exports = {
  hooks,
}
