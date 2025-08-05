export const Product = Object.freeze({
  A: 'Product A',
  B: 'Product B',
  C: 'Product C',
});

export const SimulationStep = Object.freeze({
  LANDING: 0,
  SMTP_CLIENT: 1,
  DATA_OVERVIEW: 2,
  SNS_VIEW: 3,
  SQS_VIEW: 4,
  S3_VIEW: 5,
  DATABRICKS_VIEW: 6,
  SUMMARY: 7,
});
