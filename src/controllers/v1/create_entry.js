'use strict';


const models = require('../../models');
const appConfig = require('../../config')


const dropLeastRecentlyUsed = async () => {
    await models.cache.findOneAndDelete({}).sort({ recently_used: 1, created: 1 });
    await models.cache.updateMany({ recently_used: 0 });
}

const createEntry = async (key) => {

    const docsCount = await models.cache.count({});


    /**
     * check for cache max limit
     *    if cache max limit:
     *        call method to delete an entry with the lowest recently_used, 
     *        ordered by created (oldest first).
     *        basically if there are, say, 3 entries with an recently_used 
     *        of 0, the "tie-breaker" becomes created_at. The oldest 
     *        of the 3 entries should be deleted.
     */
    if (docsCount === appConfig.cache_limit) {
        await dropLeastRecentlyUsed();
    }

    const createdEntry = await models.cache.create({
        key: key,
        value: require('crypto').randomBytes(24).toString('hex')
    });

    return {
        key: createdEntry.key,
        value: createdEntry.value,
    };
}

module.exports = createEntry;