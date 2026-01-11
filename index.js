function combineUsers(...arrays) {
    return {
        date: new Date(),
        users: [].concat(...arrays)
    };
}

module.exports = combineUsers;

module.exports = mergeUsers;
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};