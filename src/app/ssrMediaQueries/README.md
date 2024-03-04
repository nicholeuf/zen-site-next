## User agent parsing on the server to support initial call of useMediaQuery

The files in this folder are used to support server-side parsing of the user agent header to
estimate the browser width. Without this, the

From https://dev.to/rakshitnayak/how-to-implement-server-side-rendering-for-material-uis-media-queries-in-nextjs-to-avoid-flash-jpi, the flicker is caused by useMediaQuery behavior on page load.

The useMediaQuery function defaults to false. In order to perform the server-side rendering reconciliation, it needs to render twice. A first time with nothing and a second time with the children. This double pass rendering cycle comes with a drawback.

The official docs are confusing and not adapted for nextjs.

I found a nextjs solution inspiration https://stackoverflow.com/a/77746855/23029493

This impacts the about page on desktop/tablet.
