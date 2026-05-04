export type AssetType = "crypto" | "forex" | "stocks" | "commodities";
export type AnalysisResult = "Validated" | "Invalidated" | "Neutral";

export type AnalyticalPerformance = {
  publishedAnalysis: number;
  validated: number;
  invalidated: number;
  validationAccuracy: number; // percentage
  averageReactionRange: number; // percentage
};

export type Analysis = {
  asset?: AssetType;
  pair?: string;
  tf?: string;
  bias?: "bullish" | "bearish" | "neutral";
  reactionmagnitude?: string;
  validationstatus?: string;
  observedoutcome?: string;
  initialforecast?: string;
  result?: AnalysisResult;
  beforeImage?: string;
  afterImage?: string;
  description?: string;
  date?: string;
};

export type MarketAnalysis = {
  id: string;
  asset: AssetType;
  pair: string;
  bias: "bullish" | "bearish" | "neutral";
  status: "Active" | "Completed";
  image: string;
  date?: string;
  title?:string;
  description?: string;
  tf?: string;
  conditions?: string;
};

export type Insight = {
  title: string;
  text: string;
};
