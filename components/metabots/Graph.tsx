"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Script from "next/script";
import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from "@/public/static/charting_library";

interface Props {}

const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  symbol: "AAPL",
  interval: "15" as ResolutionString,
  library_path: "/static/charting_library/",
  locale: "en",
  disabled_features: [
    "use_localstorage_for_settings",
    "header_compare",
    "header_undo_redo",
    "header_symbol_search",
  ],
  fullscreen: false,
  autosize: true,
  theme: "dark",
  toolbar_bg: "#101720",
  overrides: {
    "paneProperties.background": "#101720",
    "paneProperties.backgroundType": "solid",
  },
};

const TVChartContainer = dynamic(
  () =>
    import("@/components/metabots/TVChartContainer").then(
      (mod) => mod.TVChartContainer
    ),
  { ssr: false }
);
const Graph = () => {
  const [isScriptReady, setIsScriptReady] = useState(false);
  return (
    <>
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="afterInteractive"
        onReady={() => {
          setIsScriptReady(true);
        }}
      />
      {isScriptReady && <TVChartContainer {...defaultWidgetProps} />}
    </>
  );
};

export default Graph;
