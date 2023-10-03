export default interface SearchQuery {
  fee_ongoing: boolean,
  fee_upfront:boolean,
  age_restriction:boolean,
  property_purpose: string,
  rate_type: string,
  repayment_type: string,
  total_amount: number,
  borrow_amount: number,
  term: number,
  period:number,
  feature_offset: boolean,
  feature_redraw: boolean,
  feature_extra: boolean,
  feature_cashback: boolean

  }