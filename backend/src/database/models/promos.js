const database = require('../database');
const Schema = database.Schema;

const PromoSchema = new Schema(
  {
    descriptionPromos: {
      type: String,
      required: true,
      maxlength: 255,
      enum: [
        "BTS",
        "Licence 1",
        "Licence 2",
        "Master",
      ],
    },
    nombreEleves: {
      type: Number,
      required: true,
      maxlength: 255,
    },
    commentaire: {
        type: Number,
        maxlength: 255,
    },
  },
  { timestamps: true },
);

PromoSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

PromoSchema.set('toJSON', {
  getters: true,
});

PromoSchema.set('toObject', {
  getters: true,
});

const Promo = database.model('promo', PromoSchema);

module.exports = Promo;