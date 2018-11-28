import { getService } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { CalculatorDataSource } from '../datasources';

export interface CalculatorService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  Multiply(args: CalculatorParameters): Promise<MultiplyResult>;
  Add(args: CalculatorParameters): Promise<AddResult>;
  Divide(args: CalculatorParameters): Promise<DivideResult>;
  Subtract(args: CalculatorParameters): Promise<SubtractResult>;
}

export class CalculatorServiceProvider implements Provider<CalculatorService> {
  constructor(
    // calculator must match the name property in the datasource json file
    @inject('datasources.calculator')
    protected dataSource: CalculatorDataSource = new CalculatorDataSource(),
  ) { }

  value(): Promise<CalculatorService> {
    return getService(this.dataSource);
  }
}


export interface MultiplyResult {
  result: {
    MultiplyResult: number;
  };
}
export interface AddResult {
  result: {
    AddResult: number;
  };
}
export interface SubtractResult {
  result: {
    SubtractResult: number;
  };
}
export interface DivideResult {
  result: {
    DivideResult: number;
  };
}
export interface CalculatorParameters {
  intA: number;
  intB: number;
}
