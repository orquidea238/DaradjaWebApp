const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

const EtudiantSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
      maxlength: 255,
    },
    prenom: {
      type: String,
      required: true,
      maxlength: 255,
    },
    mentor: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    adresse: {
      type: String,
      maxlength: 255,
    },
    age: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        "homme",
        "femme"
      ],
    },
    diplomes: {
      type: String,
      required: true,
    },
    domaineetudes: {
      type: String,
      required: true,
    },
    entreeenfrance: {
      type: String,
    },
    paysobtentionbac: {
      type: String,
      required: true,
    },
    metiervise: {
      type: String,
      maxlength: 255,
    },
    dateentreechezdaradja: {
      type: String,
      required: true,
    },
    jobetudiant: {
      type: String,
    },
    langues: {
      type: String,
      required: true,
    },
    niveaufrancais: {
      type: String,
      required: true,
      enum: [
        "debutant",
        "intermediaire",
        "confirme"
      ],
    },
    stages: {
      type: String,
      maxlength: 255,
    },
    debutmentorat: {
      type: String,
    },
    finmentorat: {
      type: String,
    },
    telephone: {
      type: Number,
    },
    imageprofil: [FileSchema],
    bookings: [{
      type: Schema.Types.ObjectId,
      ref: 'booking',
    }],
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

EtudiantSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

EtudiantSchema.set('toJSON', {
  getters: true,
});

EtudiantSchema.set('toObject', {
  getters: true,
});

const Etudiant = database.model('etudiant', EtudiantSchema);

module.exports = Etudiant;
