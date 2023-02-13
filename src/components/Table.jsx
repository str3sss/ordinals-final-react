import React, { useEffect } from 'react';
import arrUp from '../img/arr-up.svg';
import tableTw from '../img/table-tw.svg';
import tableDis from '../img/table-dis.svg';
import getData from '../utils/GetData';
import UserTwitterBtn from './UserTwitterBtn';
import UserWebsiteBtn from './UserWebsiteBtn';
import UserDiscordBtn from './UserDiscordBtn';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { sortOrdersBy,setData, changeSortReverse, changeSort } from '../redux/ordersSlice';

function Table() {
  const data = useSelector((state) => state.data)
  const sort = useSelector((state) => state.sorting)
  const search = useSelector((state) => state.search)
  const reverseSort = useSelector((state) => state.sortReverse)
  const dispatch = useDispatch()

  function sortHandler(sort_by) {
    if (sort_by === sort) {
      dispatch(changeSortReverse())
    } else {
      dispatch(changeSort(sort_by))
    }
    dispatch(sortOrdersBy())
  }

  useEffect(() => {
    const FetchData = async () => {
      const result = await getData(search);
      dispatch(setData(result))
    };
    FetchData();
  }, [search]);

  if (!data) {
    return (
      <div className="main__content">
        <table className="main__table">
          <thead>
            <tr>
              <td>
                <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />
                <span> #</span>
              </td>
              <td>
                <span>Name</span>
              </td>
              <td>
                <span>Social</span>
              </td>
              <td>
                <img width="14" height="11" src={tableTw} className={clsx(reverseSort && 'reverse-sort')} alt="" />
                <span> subs</span>
              </td>
              <td>
                <img width="14" height="11" src={tableDis} className={clsx(reverseSort && 'reverse-sort')} alt="" />
                <span> subs</span>
              </td>
              <td>
                <span>Supply</span>
              </td>
              <td>
                <span>Ords lvls</span>
              </td>
              <td>
                <span>Transfers</span>
              </td>
              <td>
                <span>Floor</span>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="main__content">
      <table className="main__table">
        <thead>
          <tr>
            <td onClick={() => sortHandler('id')}>
              {sort === 'id' && <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />}
              <span> #</span>
            </td>
            <td onClick={() => sortHandler('name')}>
              {sort === 'name' && <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />}
              <span>Name</span>
            </td>
            <td>
              <span>Social</span>
            </td>
            <td onClick={() => sortHandler('twitter_users')}>
              {sort === 'twitter_users' && <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />}
              <img width="14" height="11" src={tableTw}  alt="" />
              <span> subs</span>
            </td>
            <td onClick={() => sortHandler('discord_users')}>
              {sort === 'discord_users' && <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />}
              <img width="14" height="11" src={tableDis}  alt="" />
              <span> subs</span>
            </td>
            <td onClick={() => sortHandler('supply')}>
              {sort === 'supply' && <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />}
              <span>Supply</span>
            </td>
            <td onClick={() => sortHandler('ords level')}>
              {sort === 'ords level' && <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />}
              <span>Ords lvls</span>
            </td>
            <td onClick={() => sortHandler('transfers')}>
              {sort === 'transfers' && <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />}
              <span>Transfers</span>
            </td>
            <td onClick={() => sortHandler('floor')}>
              {sort === 'floor' && <img width="10" height="10" src={arrUp} className={clsx(reverseSort && 'reverse-sort')} alt="" />}
              <span>Floor</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => (
            <tr key={elem.id}>
              <td>
                <span>{elem.id}</span>
              </td>
              <td>
                <div className="img">
                  <img src={elem.ico} alt="" />
                </div>
                <span title={elem.name} className="cell-name">
                  {elem.name}
                </span>
              </td>
              <td>
                <UserWebsiteBtn website_url={elem?.website} />
                <UserTwitterBtn twitter_url={elem?.twitter_link} />
                <UserDiscordBtn discord_url={elem?.discord_link} />
              </td>
              <td>
                <span>{elem.twitter_subs}</span>
              </td>
              <td>
                <span>{elem.discord_subs}</span>
              </td>
              <td>
                <span>{elem.supply}</span>
              </td>
              <td>
                <span>{elem.top_level}</span>
              </td>
              <td>
                <span>{elem.transfers}</span>
              </td>
              <td>
                <span>{elem.floor}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
