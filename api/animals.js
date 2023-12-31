/*
▓█████▄  ▒█████   ███▄    █ ▄▄▄█████▓    ▄████▄   ██░ ██  ▄▄▄       ███▄    █   ▄████ ▓█████    ▄▄▄█████▓ ██░ ██  ██▓  ██████      █████▒██▓ ██▓    ▓█████
▒██▀ ██▌▒██▒  ██▒ ██ ▀█   █ ▓  ██▒ ▓▒   ▒██▀ ▀█  ▓██░ ██▒▒████▄     ██ ▀█   █  ██▒ ▀█▒▓█   ▀    ▓  ██▒ ▓▒▓██░ ██▒▓██▒▒██    ▒    ▓██   ▒▓██▒▓██▒    ▓█   ▀
░██   █▌▒██░  ██▒▓██  ▀█ ██▒▒ ▓██░ ▒░   ▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▒██░▄▄▄░▒███      ▒ ▓██░ ▒░▒██▀▀██░▒██▒░ ▓██▄      ▒████ ░▒██▒▒██░    ▒███
░▓█▄   ▌▒██   ██░▓██▒  ▐▌██▒░ ▓██▓ ░    ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█  ██▓▒▓█  ▄    ░ ▓██▓ ░ ░▓█ ░██ ░██░  ▒   ██▒   ░▓█▒  ░░██░▒██░    ▒▓█  ▄
░▒████▓ ░ ████▓▒░▒██░   ▓██░  ▒██▒ ░    ▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░░▒▓███▀▒░▒████▒     ▒██▒ ░ ░▓█▒░██▓░██░▒██████▒▒   ░▒█░   ░██░░██████▒░▒████▒
 ▒▒▓  ▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒   ▒ ░░      ░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒  ░▒   ▒ ░░ ▒░ ░     ▒ ░░    ▒ ░░▒░▒░▓  ▒ ▒▓▒ ▒ ░    ▒ ░   ░▓  ░ ▒░▓  ░░░ ▒░ ░
 ░ ▒  ▒   ░ ▒ ▒░ ░ ░░   ░ ▒░    ░         ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░  ░   ░  ░ ░  ░       ░     ▒ ░▒░ ░ ▒ ░░ ░▒  ░ ░    ░      ▒ ░░ ░ ▒  ░ ░ ░  ░
 ░ ░  ░ ░ ░ ░ ▒     ░   ░ ░   ░         ░         ░  ░░ ░  ░   ▒      ░   ░ ░ ░ ░   ░    ░        ░       ░  ░░ ░ ▒ ░░  ░  ░      ░ ░    ▒ ░  ░ ░      ░
   ░        ░ ░           ░             ░ ░       ░  ░  ░      ░  ░         ░       ░    ░  ░             ░  ░  ░ ░        ░             ░      ░  ░   ░  ░
 ░                                      ░
 */

/**
  * Returns any result after a certain amount of time
  *
  * @param {number} ms - The amount of time to wait
  * @param {any} result - The result to return
  *
  * @returns {Promise<any>}
  */
const timeout = (ms, result) => new Promise(resolve => setTimeout(() => resolve(result), ms))

export default {
  /**
   * Returns a rabbit emoji after a certain amount of time
   *
   * @returns {Promise<string>}
   */
  rabbit: () => timeout(1000, '🐇'),

  /**
   * Returns a turtle emoji after a certain amount of time
   *
   * @returns {Promise<string>}
   */
  turtle: () => timeout(2000, '🐢'),

  /**
  * Returns a snail emoji after a certain amount of time
  *
  * @returns {Promise<string>}
  */
  snail: () => timeout(3000, '🐌')
}
