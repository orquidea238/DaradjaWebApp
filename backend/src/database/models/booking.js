const database = require('../database');
const Schema = database.Schema;

const BookingSchema = new Schema(
  {
    mentor: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    etudiant: {
      type: Schema.Types.ObjectId,
      ref: 'etudiant',
    },
    debut: {
      type: Date,
      required: true,
    },
    fin: {
      type: Date,
    },
    commentaires: {
      type: String,
      maxlength: 255,
    },
    status: {
      type: String,
      enum: [
        "avenir",
        "passé",
        "annulé",
      ],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    importHash: { type: String },
  },
  { timestamps: true },
);

BookingSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

BookingSchema.set('toJSON', {
  getters: true,
});

BookingSchema.set('toObject', {
  getters: true,
});

const Booking = database.model('booking', BookingSchema);

module.exports = Booking;
