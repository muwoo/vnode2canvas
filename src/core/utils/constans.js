/**
 * default font family
 * @type {string}
 */
export const DEFAULT_FONT_FAMILY = 'Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif'

/**
 * scroll top, when view update will be reset.
 * @type {number}
 */
export let top = 0

/**
 * scroll top, when view update will not be reset
 * @type {number}
 */
export let scrollTop = 0

export let scrollerTop = 0

export let rate = 1

/**
 * Detection of the current environment
 * @type {Window}
 */
export const IN_BROWSER = window