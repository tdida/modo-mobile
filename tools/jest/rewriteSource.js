function rewriteSource(t, path, libDir) {
  if (libDir === 'dist') {
    if (path.node.source.value === 'modo-mobile') {
      path.node.source.value = '../../../dist/modo-mobile';
    }
  }
}

module.exports = rewriteSource;
