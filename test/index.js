/**
 * @author muwoo
 * Date: 2018/8/14
 */
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
