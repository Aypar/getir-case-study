const router = require('express').Router();
const recordService = require('../../services').Records;
const {sumOfRecordsRequestValidation} = require('./records.validation')

const RecordsController = {

    getSumOfRecordsCountInDateRange: (req, res) => {
        const {body} = req;
        recordService.getSumOfRecordsCountInDateRange(body).then((result) => {
            res.status(200).json({msg: 'Success', code: 0, records: result});
        }).catch((error) => {
            res.status(500).json({msg: error.message, code: 500});
        })

    }

}

router.post('/sum-of-records-count', sumOfRecordsRequestValidation, RecordsController.getSumOfRecordsCountInDateRange);

module.exports = router;
