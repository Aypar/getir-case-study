const mongoose = require('mongoose');
const {Records} = require('../models');

class RecordsService {

    /**
     *
     * @param startDate     : Date
     * @param endDate       : Date
     * @param minCount      : Number
     * @param maxCount      : Number
     *
     */
    getSumOfRecordsCountInDateRange = ({startDate, endDate, minCount, maxCount}) => {
        const $addFields = {totalCount: {$sum: "$counts"}};
        const $match = {
            totalCount: {$gte: minCount, $lte: maxCount},
            createdAt: {$gte: new Date(startDate), $lte: new Date(endDate)}
        }
        const $project = {
            key: "$key",
            createdAt: "$createdAt",
            totalCount: "$totalCount"
        }
        return Records.aggregate([{$addFields}, {$project}, {$match}])

    }
}

module.exports = new RecordsService();
