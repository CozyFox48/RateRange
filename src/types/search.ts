export default interface SearchQuery {
  fee_ongoing: boolean | null,
  fee_upfront:boolean| null,
  age_restriction:boolean | null,
  loanPurpose: string,
  rateType: string,
  repaymentType: string,
  total_amount: number,
  borrow_amount: number,
  term: number,
  period:number,
  feature_offset: boolean | null,
  feature_redraw: boolean | null,
  feature_extra: boolean | null,
  feature_cashback: boolean | null

  }