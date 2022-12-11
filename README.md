# Infinite scroll

This is basic react project to implement infinite scrolling, which is the base for applications that render continuously new data from de source. Ex: TIk Tok

- Using React-infinite-scroll (https://www.npmjs.com/package/react-infinite-scroll-component)

## Install

npm install --save react-infinite-scroll-component

or

yarn add react-infinite-scroll-component

// in code ES6
import InfiniteScroll from 'react-infinite-scroll-component';
// or commonjs
var InfiniteScroll = require('react-infinite-scroll-component');

## [](https://www.npmjs.com/package/react-infinite-scroll-component#using)Using

```js
<InfiniteScroll
dataLength={items.length} //This is important field to render the next data
next={fetchData}
hasMore={true}
loader={<h4>Loading...</h4>}
endMessage={
<p style={{ textAlign: 'center' }}>
<b>Yay! You have seen it all</b>
</p>
}
// below props only if you need pull down functionality
refreshFunction={this.refresh}
pullDownToRefresh
pullDownToRefreshThreshold={50}
pullDownToRefreshContent={
<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
}
releaseToRefreshContent={
<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
}

> {items}
> </InfiniteScroll>

## [](https://www.npmjs.com/package/react-infinite-scroll-component#using-scroll-on-top)Using scroll on top

<div
  id="scrollableDiv"
  style={{
    height: 300,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
  }}
>
  {/*Put the scroll bar always on the bottom*/}
  <InfiniteScroll
    dataLength={this.state.items.length}
    next={this.fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    inverse={true} //
    hasMore={true}
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
  >
    {this.state.items.map((_, index) => (
      <div style={style} key={index}>
        div - #{index}
      </div>
    ))}
  </InfiniteScroll>
</div>

```

The `InfiniteScroll` component can be used in three ways.

- Specify a value for the `height` prop if you want your **scrollable** content to have a specific height, providing scrollbars for scrolling your content and fetching more data.
- If your **scrollable** content is being rendered within a parent element that is already providing overflow scrollbars, you can set the `scrollableTarget` prop to reference the DOM element and use it's scrollbars for fetching more data.
- Without setting either the `height` or `scrollableTarget` props, the scroll will happen at `document.body` like _Facebook's_ timeline scroll.
