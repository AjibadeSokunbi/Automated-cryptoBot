import { FC, useEffect, useRef } from "react";
import {
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
  widget,
} from "@/public/static/charting_library";


interface Props extends Partial<ChartingLibraryWidgetOptions> {
  params : {
    address: string
  }
}

export const TVChartContainer: FC<Props> = (
  props
) => {

  const pairId = props.params.address;

  const chartContainerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: pairId as string,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
        "https://tradeviewer.metadapp.com/chart-api/tradeview",
        undefined,
        {
          headers: {
            "x-api-key": process.env.TRADEVIEWER_API as string,
            "Content-Type": "application/json",
          },

          maxResponseLength: 1000,
          expectedOrder: "latestFirst",
        }
      ),
      interval: props.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      disabled_features: [
        "use_localstorage_for_settings",
        "header_compare",
        "header_undo_redo",
        "header_symbol_search",
        "left_toolbar",
        "header_screenshot",
        "timeframes_toolbar",
      ],
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
      theme: props.theme,
      toolbar_bg: props.toolbar_bg,
    };

    const tvWidget = new widget(widgetOptions);

    return () => {
      tvWidget.remove();
    };
  }, [props, pairId]);

  return (
    <>
      <div ref={chartContainerRef} className="w-full" />
    </>
  );
};
