import * as joi from 'joi';

export const JoiValidationSchema = joi.object({
  MONGODB: joi.string().required(),
  PORT: joi.number().default(3003),
  DEFAULT_LIMIT: joi.number().default(7),
});
