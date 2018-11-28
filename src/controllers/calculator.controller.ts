import { inject } from "@loopback/core";
import { CalculatorService, DivideResult, CalculatorParameters } from "../services";
import { get, param, HttpErrors } from "@loopback/rest";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class CalculatorController {
  constructor(
    @inject("services.CalculatorService") private calculatorService: CalculatorService
  ) { }

  @get("/divide/{arg1}/{arg2}")
  async divide(
    @param.path.integer("arg1") intA: number,
    @param.path.integer("arg2") intB: number
  ): Promise<DivideResult> {
    if (intB === 0) {
      throw new HttpErrors.PreconditionFailed('Cannot divide by zero');
    }
    return await this.calculatorService.Divide(<CalculatorParameters>{
      intA,
      intB
    })
  }

}
