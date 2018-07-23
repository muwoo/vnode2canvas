/**
 * @author muwoo
 * Date: 2018/7/15
 */
let pool = function () {
  let pool = new Map()
  let length = 0
  return {
    pool,
    add (key, value) {
      this.pool.set(key, value)
      this.length ++
    },
    get (key) {
      return this.pool.get(key)
    },
    clear () {
      this.pool = new Map()
      this.length = 0
    },
    [Symbol.iterator] () {
      return this.pool.values()
    },
    length
  }
}

export const canvasItemPool = pool()
export const imgCachePool = pool()
export const scrollItemPool = pool()