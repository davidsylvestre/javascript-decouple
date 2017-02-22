class repositoryShell {

  get(option) {
    return process.env[option]
  }
}


module.exports = repositoryShell