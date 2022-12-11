import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utilities';
import { CustomDiv } from '../CustomDiv';
import { Loader } from '../Loader';
export interface InfiniteScrollContainerInterface {}

const InfiniteScrollContainer: React.FC<
  InfiniteScrollContainerInterface
> = () => {
  const [data, setData] = useState(fetchMoreData(20));
  const [more, setMore] = useState(true);

  const fetchMore = () => {
    //TODO api call
    if (data.length < 35)
      setTimeout(() => {
        setData([...data, fetchMoreData(20)]);
      }, 600);
    else setMore(false);
  };
  return (
    <InfiniteScroll
      dataLength={data.length}
      loader={<Loader />}
      next={fetchMore}
      hasMore={more}
    >
      {data.length > 0
        ? data.map((_, index) => <CustomDiv element={index + 1} key={index} />)
        : null}
    </InfiniteScroll>
  );
};

export default InfiniteScrollContainer;
