const AbstractEntityRepository = require('./abstractEntityRepository');
const MongooseQuery = require('../utils/mongooseQuery');
const AuditLogRepository = require('./auditLogRepository');
const Booking = require('../models/booking');
const Etudiant = require('../models/etudiant');

class BookingRepository extends AbstractEntityRepository {
  async create(data, options) {
    if (this.getSession(options)) {
      await Booking.createCollection();
    }

    const [record] = await Booking.create(
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
      Booking.updateOne(
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
      Booking.deleteOne({ _id: id }),
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
      Booking.countDocuments(filter),
      options,
    );
  }

  async refreshTwoWayRelations(record, options) {
    await this.refreshTwoWayRelationOneToMany(
      record,
      'etudiant',
      Etudiant,
      'bookings',
      options,
    );
  }

  async destroyFromRelations(id, options) {
    await this.destroyRelationToMany(
      id,
      Etudiant,
      'bookings',
      options,
    );
  }

  async findById(id, options) {
    return this.wrapWithSessionIfExists(
      Booking.findById(id)
      .populate('mentor')
      .populate('etudiant'),
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

      if (filter.mentor) {
        query.appendId('mentor', filter.mentor);
      }

      if (filter.etudiant) {
        query.appendId('etudiant', filter.etudiant);
      }

      if (filter.debutRange) {
        query.appendRange(
          'debut',
          filter.debutRange,
        );
      }

      if (filter.status) {
        query.appendEqual('status', filter.status);
      }

      if (filter.createdAtRange) {
        query.appendRange(
          'createdAt',
          filter.createdAtRange,
        );
      }
    }

    const rows = await Booking.find(query.criteria)
      .skip(query.skip)
      .limit(query.limit)
      .sort(query.sort)
      .populate('mentor')
      .populate('etudiant');

    const count = await Booking.countDocuments(query.criteria);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    let query = MongooseQuery.forAutocomplete({
      limit,
      orderBy: 'id_ASC',
    });

    if (search) {
      query.appendId('_id', search);

    }

    const records = await Booking.find(query.criteria)
      .limit(query.limit)
      .sort(query.sort);

    return records.map((record) => ({
      id: record.id,
      label: record['id'],
    }));
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: Booking.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = BookingRepository;
