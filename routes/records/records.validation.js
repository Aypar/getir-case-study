const Joi = require('joi');
const SumOfRecordsRequestValidationSchema = Joi.object({
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    minCount: Joi.number().required().greater(0),
    maxCount: Joi.number().required()
})

exports.sumOfRecordsRequestValidation = (req, res, next) => {
    const {body} = req;
    const validationResult = SumOfRecordsRequestValidationSchema.validate(body);
    if (validationResult.error) {
        res.status(400).json({code: 400, msg: validationResult.error})
        return;
    }
    next();
}
