import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './calculator.datasource.json';

export class CalculatorDataSource extends juggler.DataSource {
  static dataSourceName = 'calculator';

  constructor(
    @inject('datasources.config.calculator', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
