const tasks = arr => arr.join(' && ')

const hooks = {
  'pre-commit': tasks(['[ ! -e .nvmrc ]', 'node -v  > .nvmrc || :']),
}

module.exports = {
  hooks,
}
