import { Analysis, MarketAnalysis, Insight ,AnalyticalPerformance} from './types';
export const ANALYTICAL_PERFORMANCE: AnalyticalPerformance = {
  publishedAnalysis:1,
  validated: 1,
  invalidated: 0,
  validationAccuracy: "Not statiscally meaningful (early stage dataset)", // percentage
  averageReactionRange: 0, // percentage
};
export const MOCK_Analysis: Analysis[] = [
 {
    asset: "crypto",
    pair: "BTCUSD",
    tf: "-1D",
    bias: "bullish",
    initialforecast: "Bearish Delivery: 84,000 to 81,000 → 60,000",
    observedoutcome: "Market Delivery: 82,800 → 59,150",
    validationstatus: "VALIDATED",
    reactionmagnitude:"~25% Bearish Move",
    result: "VALIDATED",
    beforeImage: "https://www.tradingview.com/x/gb3wKk6s/",
    afterImage: "https://www.tradingview.com/x/hxLdtTUa/",
    description: "The anticipated reaction from the rejection block played out as expected, validating the bearish scenario outlined in the original analysis. After reaching the identified resistance zone, price failed to establish acceptance above the rejection block and instead showed clear selling pressure, confirming that supply remained active within the area. The advance into resistance lacked the impulsive strength required for a bullish continuation and ultimately resulted in a sharp downside expansion. This reaction reinforced the view that the preceding upward movement was corrective in nature rather than the beginning of a sustained bullish trend. As sellers regained control, market structure shifted lower and momentum accelerated to the downside. Following the rejection, price moved aggressively toward the previously identified liquidity area, successfully reaching and sweeping the liquidity resting beneath the range. The liquidity objective highlighted in the initial thesis has now been fulfilled, demonstrating how the market utilized the resistance zone as a distribution area before seeking liquidity at lower levels. The selloff into liquidity was characterized by strong bearish displacement, indicating conviction from market participants and confirming the significance of the rejection block as the origin of the move. With the targeted liquidity now taken, the market has reached an important reaction zone where participants will be monitoring for signs of absorption, consolidation, or continuation. Outcome Summary:The bearish thesis was validated as price rejected from the identified rejection block, failed to sustain higher prices, and delivered the projected move into the liquidity area below. The key resistance zone successfully acted as the decision point for the market, while the targeted liquidity objective was achieved, completing the primary scenario outlined in the original analysis.",
    date: "2026-05-04",
    datepub: "2026-06-09",
  },
];

export const MARKET_ANALYSIS: MarketAnalysis[] = [

  {
    id: "a2",
    asset: "commodities",
    pair: "XAUUSD",
    tf: "-4H",
    conditions:"NULL",
    bias: "bearish",
    status: "Active",
    image: "https://www.tradingview.com/x/cDJvBDLZ/",
    date: "2026-06-17",
    title:"Liquidity Formation Following Bearish Expansion in XAUUSD",
    description: "I observed a clear shift in market structure following a strong impulsive bearish move that originated from a well-defined support-to-resistance region. Price reacted aggressively from this zone, confirming the presence of strong supply and initiating a downside expansion. After the impulsive decline, the market transitioned into a corrective phase, following a sweep of liquidity beneath recent lows.During this phase, price developed a recovery structure while respecting the liquidity low as a foundation. The advance has been relatively controlled, forming short-term higher lows; however, the overall movement appears corrective rather than impulsive. This suggests that the move is driven more by rebalancing and liquidity engineering rather than strong bullish intent.The liquidity formed near the lows indicates the presence of resting orders, which the market has already interacted with before initiating the current recovery. Despite this, the structure lacks the displacement and momentum typically required to confirm a sustained bullish reversal.Currently, price is approaching a short-term resistance area formed during the previous bearish expansion. This zone acts as a key reaction point, as it represents an area where supply previously entered the market. The approach toward this level remains relatively measured and lacks strong bullish conviction, which often increases the probability of a reaction rather than continuation.Speculative Outlook:Price is now testing a critical resistance region, making this a decision point for the market. If rejection behavior or bearish candlestick patterns develop within this zone, it would indicate that sellers are re-entering, potentially leading to another move lower targeting the liquidity area below.There is also a possibility of a liquidity grab above this resistance, where price briefly trades beyond the zone to capture buy-side liquidity before reversing to the downside. Such a move would further reinforce the bearish bias.However, if price manages to sustain above this resistance with strong impulsive bullish candles and clear follow-through, it would weaken the immediate bearish outlook and indicate broader structural recovery. Until such confirmation appears, the current price action favors a corrective rally within a bearish framework.",
    disclaimer: "NOT INVESTMENT ADVICE-RESEARCH ONLY.",
  },
    {
    id: "a1",
    asset: "crypto",
    pair: "BTCUSD",
    tf: "-1D",
    conditions:"NULL",
    bias: "bearish",
    status: "Completed",
    image: "https://www.tradingview.com/x/gb3wKk6s/",
    date: "2026-05-04",
    title:"Rejection at Key Resistance with Liquidity Formation in BTCUSD",
    description: "I observed a clear shift in market structure following a strong impulsive bearish move that originated from a well-defined rejection block. Price reacted sharply from this zone, confirming the presence of strong supply and initiating a downside expansion. After the impulsive drop, the market transitioned into a corrective phase, where price began forming a base within a defined liquidity area.\nDuring this phase, price developed a gradual ascending structure, respecting a short-term trendline while consistently creating higher lows. This movement appears corrective rather than impulsive, suggesting that it is driven more by rebalancing and liquidity engineering rather than strong bullish intent. The liquidity formed within this range indicates resting orders, which the market may use before the next directional move.\nCurrently, price is approaching the previously established rejection block, which acts as a key resistance zone. This area is significant as it was the origin of the last strong bearish impulse, making it a high-probability reaction point. The approach toward this zone lacks strong impulsive conviction and appears relatively controlled, which often precedes a reaction rather than continuation.\nSpeculative Outlook: Price is now entering a critical rejection block, making this a decision point for the market. If bearish candlestick patterns or rejection behavior forms within this zone, it would indicate that sellers are stepping back in, potentially leading to another downside move targeting the liquidity area below.\nThere is also a possibility of a liquidity grab above the rejection block, where price briefly breaks the zone to capture resting buy-side liquidity before reversing to the downside. This scenario would further strengthen the bearish bias.\nHowever, if price manages to sustain above the rejection block with strong impulsive bullish candles, it would invalidate the immediate bearish outlook and suggest a shift toward continuation. Until that confirmation appears, the current structure favors a bearish reaction from this key resistance zone. ",
    disclaimer: "NOT INVESTMENT ADVICE-RESEARCH ONLY.",
  },
  // {
  //   id: "a2",
  //   asset: "forex",
  //   pair: "XAUUSD",
  //   tf: "-H4",
  //   conditions:"NULL",
  //   bias: "bullish",
  //   status: "Active",
  //   image: "https://www.tradingview.com/x/hYJTeBhy/",
  //   date: "2024-03-12",
  //   title:"Supply Rejection in XAUUSD After V-Shaped Recovery",
  //   description: "I observed a strong bearish move followed by a sharp recovery, where price formed a V-shaped reaction from lower levels, indicating aggressive demand stepping in after the sell-off. However, after this recovery, price failed to continue making higher highs and instead began to stall near a defined resistance zone. This behavior suggests that the upward move was corrective rather than a full reversal, as supply started to absorb buying pressure.As the structure developed, price formed a lower high within the resistance zone and began to rotate downward, confirming weakness. The inability to break and sustain above this zone indicates that sellers remain in control at higher levels. The recent candles show a gradual decline, forming a short-term bearish structure with lower highs.Currently, price is moving away from the resistance zone and heading toward lower levels, with momentum shifting back in favor of sellers.Speculative Outlook:Price is now rejecting from a key supply zone, which acts as a critical decision area. If this rejection continues, the market may extend its bearish move toward lower support zones.There is also a possibility of a minor pullback back into the supply zone, followed by continuation downward, maintaining the bearish structure.However, if price manages to break above this resistance zone with strong bullish momentum, it would invalidate the bearish outlook and suggest a potential reversal. This makes the current area a key decision point between continuation of the downtrend or a shift toward bullish recovery."
  // },
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
