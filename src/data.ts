import { Analysis, MarketAnalysis, Insight ,AnalyticalPerformance} from './types';
export const ANALYTICAL_PERFORMANCE: AnalyticalPerformance = {
  publishedAnalysis: 120,
  validated: 78,
  invalidated: 30,
  validationAccuracy: 72.5, // percentage
  averageReactionRange: 15.3, // percentage
};
export const MOCK_Analysis: Analysis[] = [
  // {
  //   id: "TRD-015-K",
  //   asset: "crypto",
  //   pair: "LINKUSDT",
  //   bias: "bullish",
  //   entry: 18.20,
  //   stopLoss: 17.50,
  //   takeProfit: 21.00,
  //   rr: 4.0,
  //   result: "win",
  //   beforeImage: "https://picsum.photos/seed/link_before_inst/800/450",
  //   afterImage: "https://picsum.photos/seed/link_after_inst/800/450",
  //   reasoning: "Multi-point divergence at HTF support. Systematic accumulation phase completed on D1.",
  //   date: "2024-02-15",
  // },
  {
    asset: "stocks",
    pair: "NVDA",
    tf: "-D1",
    bias: "bullish",
    initialforecast: "",
    observedoutcome: "",
    validationstatus: "",
    reactionmagnitude:"",
    result: "Validated",
    beforeImage: "https://www.tradingview.com/x/XtbUPDNV/",
    afterImage: "https://www.tradingview.com/x/hYJTeBhy/",
    description: "Post-earnings institutional sponsorship. Orderflow remains heavily bid at gap origin.",
    date: "2024-02-10",
  },
];

export const MARKET_ANALYSIS: MarketAnalysis[] = [
  {
    id: "a1",
    asset: "crypto",
    pair: "BTCUSD",
    tf: "-2H",
    conditions:"NULL",
    bias: "bearish",
    status: "Completed",
    image: "https://www.tradingview.com/x/XtbUPDNV/",
    date: "2024-03-12",
    title:"Trend Continuation in BTCUSD or Rejection at Resistance at 2H",
    description: "I observed a strong bullish structure developing after a period of consolidation, where price initially formed a base and then created an impulsive move upward, establishing higher highs and higher lows. Within the earlier phase, the market showed a consolidation block followed by expansion, indicating accumulation and a shift toward demand-driven movement. As price progressed, it respected an ascending trendline, confirming continued bullish control and steady momentum.Recently, price accelerated sharply to the upside, breaking above a previous high and entering a key resistance zone. This move was impulsive with strong bullish candles, suggesting aggressive buying and continuation strength. However, the current price is now positioned inside a higher timeframe supply zone, where reactions are likely due to the presence of sell orders.At this stage, the market is extended after a strong rally and may begin to slow down or consolidate near this resistance area.Speculative Outlook:Price is now trading within a key supply zone, which acts as a critical decision point. If price shows rejection here, the market may experience a pullback or consolidation toward lower support or the ascending trendline.There is also a possibility of a liquidity grab above the zone, where price slightly breaks higher, attracts breakout buyers, and then reverses downward.However, if price sustains above this supply zone with strong bullish momentum, it would confirm continuation of the uptrend and open the path for further upside. This makes the current area a key decision point between a short-term correction or continued bullish expansion.",
  },
  {
    id: "a2",
    asset: "forex",
    pair: "XAUUSD",
    tf: "-H4",
    conditions:"NULL",
    bias: "bullish",
    status: "Active",
    image: "https://www.tradingview.com/x/hYJTeBhy/",
    date: "2024-03-12",
    title:"Supply Rejection in XAUUSD After V-Shaped Recovery",
    description: "I observed a strong bearish move followed by a sharp recovery, where price formed a V-shaped reaction from lower levels, indicating aggressive demand stepping in after the sell-off. However, after this recovery, price failed to continue making higher highs and instead began to stall near a defined resistance zone. This behavior suggests that the upward move was corrective rather than a full reversal, as supply started to absorb buying pressure.As the structure developed, price formed a lower high within the resistance zone and began to rotate downward, confirming weakness. The inability to break and sustain above this zone indicates that sellers remain in control at higher levels. The recent candles show a gradual decline, forming a short-term bearish structure with lower highs.Currently, price is moving away from the resistance zone and heading toward lower levels, with momentum shifting back in favor of sellers.Speculative Outlook:Price is now rejecting from a key supply zone, which acts as a critical decision area. If this rejection continues, the market may extend its bearish move toward lower support zones.There is also a possibility of a minor pullback back into the supply zone, followed by continuation downward, maintaining the bearish structure.However, if price manages to break above this resistance zone with strong bullish momentum, it would invalidate the bearish outlook and suggest a potential reversal. This makes the current area a key decision point between continuation of the downtrend or a shift toward bullish recovery."
  },
];

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
