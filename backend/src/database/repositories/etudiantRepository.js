const AbstractEntityRepository = require('./abstractEntityRepository');
const MongooseQuery = require('../utils/mongooseQuery');
const AuditLogRepository = require('./auditLogRepository');
const Etudiant = require('../models/etudiant');
const Booking = require('../models/booking');

class EtudiantRepository extends AbstractEntityRepository {
  async create(data, options) {
    if (this.getSession(options)) {
      await Etudiant.createCollection();
    }

    const [record] = await Etudiant.create(
      [
        {
          ...data,
          createdBy: this.getCurrentUser(options).id,
          updatedBy: this.getCurrentUser(options).id,
        },
      ],
      this.getSessionOptionsIfExists(options),
    );

    await this._auditLogs(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );

    await this.refreshTwoWayRelations(record, options);

    return this.findById(record.id, options);
  }

  async update(id, data, options) {
    await this.wrapWithSessionIfExists(
      Etudiant.updateOne(
        { _id: id },
        {
          ...data,
          updatedBy: this.getCurrentUser(options).id,
        },
      ),
      options,
    );

    await this._auditLogs(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    const record = await this.findById(id, options);
    await this.refreshTwoWayRelations(record, options);
    return record;
  }

  async destroy(id, options) {
    await this.wrapWithSessionIfExists(
      Etudiant.deleteOne({ _id: id }),
      options,
    );

    await this._auditLogs(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );

    await this.destroyFromRelations(id, options);
  }

  async count(filter, options) {
    return this.wrapWithSessionIfExists(
      Etudiant.countDocuments(filter),
      options,
    );
  }

  async refreshTwoWayRelations(record, options) {
    await this.refreshTwoWayRelationManyToOne(
      record,
      Etudiant,
      'bookings',
      Booking,
      'etudiant',
      options,
    );
  }

  async destroyFromRelations(id, options) {
    await this.destroyRelationToOne(
      id,
      Booking,
      'etudiant',
      options,
    );
  }

  async findById(id, options) {
    return this.wrapWithSessionIfExists(
      Etudiant.findById(id)
      .populate('mentor')
      .populate('bookings'),
      options,
    );
  }

  async findAndCountAll(
    {
      requestedAttributes,
      filter,
      limit,
      offset,
      orderBy,
    } = {
      requestedAttributes: null,
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    const query = MongooseQuery.forList({
      limit,
      offset,
      orderBy: orderBy || 'createdAt_DESC',
    });

    if (filter) {
      if (filter.id) {
        query.appendId('_id', filter.id);
      }

      if (filter.nom) {
        query.appendIlike('nom', filter.nom);
      }

      if (filter.prenom) {
        query.appendIlike('prenom', filter.prenom);
      }

      if (filter.mentor) {
        query.appendId('mentor', filter.mentor);
      }

      if (filter.genre) {
        query.appendEqual('genre', filter.genre);
      }

      if (filter.createdAtRange) {
        query.appendRange(
          'createdAt',
          filter.createdAtRange,
        );
      }
    }

    const rows = await Etudiant.find(query.criteria)
      .skip(query.skip)
      .limit(query.limit)
      .sort(query.sort)
      .populate('mentor')
      .populate('bookings');

    const count = await Etudiant.countDocuments(query.criteria);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    let query = MongooseQuery.forAutocomplete({
      limit,
      orderBy: 'nom_ASC',
    });

    if (search) {
      query.appendId('_id', search);
      query.appendIlike('nom', search);
    }

    const records = await Etudiant.find(query.criteria)
      .limit(query.limit)
      .sort(query.sort);

    return records.map((record) => ({
      id: record.id,
      label: record['nom'],
    }));
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: Etudiant.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = EtudiantRepository;
