/**
 * Taken from @jrtilak/lazykit
 * See more about this method: https://lazykit.jrtilak.dev/docs/functions/functional/sleep
 */

/**
 * Sleeps the execution for the specified number of milliseconds.
 **/
const sleep = (ms: number): Promise<true> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
};

export default sleep;
