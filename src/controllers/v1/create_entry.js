'use strict';


const models = require('../../models');
const appConfig = require('../../config')


const dropLeastRecentlyUsed = async () => {
    await models.cache.findOneAndDelete({}).sort({ recently_used: 1, created: 1 });
    await models.cache.updateMany({ recently_used: 0 });
}

const createEntry = async (key) => {

    const docsCount = await models.cache.count({});

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