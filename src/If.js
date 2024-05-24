/**
 * @param {boolean} test
 * @param {Object|boolean} children
 * @constructor
 */
const If = ({ test, children }) => (test ? children : false);

export default If;
