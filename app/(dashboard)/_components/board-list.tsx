"use client";

import EmptyBoard from "./empty-board";
import EmptyFavorites from "./empty-favourite";
import EmptySearch from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //TODO: fetch data from server

  if (!data?.length && query.search) {
    return(
        <EmptySearch/>
    )
  }

  if (!data?.length && query.favorites) {
    return (
        <EmptyFavorites/>
    );
  }

  if(!data?.length)
  {
    return(
        <EmptyBoard/>
    )
  }

  return <div>{JSON.stringify(query)}</div>;
};
