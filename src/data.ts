import { Analysis, MarketAnalysis, Insight ,AnalyticalPerformance} from './types';
export const ANALYTICAL_PERFORMANCE: AnalyticalPerformance = {
  publishedAnalysis:1,
  validated: 1,
  invalidated: 0,
  validationAccuracy: "Not statiscally meaningful (early stage dataset)", // percentage
  averageReactionRange: 0, // percentage
};
export const INSIGHTS: Insight[] = [
  {
    title: "Chart Patterns",
    text: "Serve as structural zones for assessing supply-demand interaction and liquidity distribution, reflecting phases of accumulation and distribution within market structure.",
  },
  {
    title: "Supply / Demand",
    text: "Defines key price zones where historical order imbalance creates conditions for potential reversal or structural reaction.",
  },
  {
    title: "Candlestick Patterns",
    text: "Provide micro-structural confirmation of market behavior, reflecting short-term shifts in order flow and validating structural responses.",
  },
    {
    title: "CHoCH (Change of Character)",
    text: "Represents a structural indication of potential transition in prevailing market behavior, signaling weakening of prior directional efficiency.",
  },
   {
    title: "BOS (Break of Structure)",
    text: "Represents continuation of established directional flow following structural displacement and resolution of prior inefficiencies.",
  },
  {
    title: "Liquidity",
    text: "Represents areas of concentrated resting interest where price is naturally drawn, functioning as a mechanism for expansion, absorption, or redistribution."
  },
];
