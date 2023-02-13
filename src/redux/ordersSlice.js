import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    data: null,
    filter: '7 Days',
    search: '',
    sorting: 'name',
    sortReverse: false,
  },
  reducers: {
    setData: (state, data) => {
      state.data = data.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    changeSortReverse: (state) => {
      state.sortReverse = !state.sortReverse;
    },
    changeSort: (state, sort_by) => {
      state.sorting = sort_by.payload;
    },
    sortOrdersBy: (state) => {
      if (state.sortReverse) {
        if (state.sorting === 'id') state.data.sort((a, b) => b.id - a.id);
        if (state.sorting === 'name') state.data.sort((a, b) => b.name.localeCompare(a.name))
        if (state.sorting === 'twitter_users') state.data.sort((a, b) => b.twitter_subs - a.twitter_subs);
        if (state.sorting === 'discord_users') state.data.sort((a, b) => b.discord_subs - a.discord_subs);
        if (state.sorting === 'supply') state.data.sort((a, b) => b.supply - a.supply);
        if (state.sorting === 'ords level')state.data.sort((a, b) => b.top_level - a.top_level);
        if (state.sorting === 'transfers')  state.data.sort((a, b) => b.transfers - a.transfers);
        if (state.sorting === 'floor')state.data.sort((a, b) => b.floor - a.floor);
      } else {
        if (state.sorting === 'id') state.data.sort((a, b) => a.id - b.id);
        if (state.sorting === 'name') state.data.sort((a, b) => a.name.localeCompare(b.name))
        if (state.sorting === 'twitter_users') state.data.sort((a, b) => a.twitter_subs - b.twitter_subs);
        if (state.sorting === 'discord_users') state.data.sort((a, b) => a.discord_subs - b.discord_subs);
        if (state.sorting === 'supply') state.data.sort((a, b) => a.supply - b.supply);
        if (state.sorting === 'ords level')state.data.sort((a, b) => a.top_level - b.top_level);
        if (state.sorting === 'transfers')  state.data.sort((a, b) => a.transfers - b.transfers);
        if (state.sorting === 'floor')state.data.sort((a, b) => a.floor - b.floor);
      }
    },
  },
});
export const { sortOrdersBy, setData, changeSortReverse, changeSort, setSearch, setFilter } = orderSlice.actions;
export const ordersReducer = orderSlice.reducer;
