function SortData(data, sort_by = 'id', reverse) {
  if (reverse) {
    switch (sort_by) {
      case 'id':
        return data.sort((a, b) => b.id - a.id);
      case 'name':
        return data.sort((a, b) => b.name.localeCompare(a.name));
      case 'twitter_users':
        return data.sort((a, b) => b.twitter_subs - a.twitter_subs);
      case 'discord_users':
        return data.sort((a, b) => b.discord_subs - a.discord_subs);
      case 'supply':
      return data.sort((a, b) => b.supply - a.supply);
      case 'top level':
        return data.sort((a, b) => b.top_level - a.top_level);
      case 'transfers':
        return data.sort((a, b) => b.transfers - a.transfers);
      case 'floor':
        return data.sort((a, b) => b.floor - a.floor)
      default:
        return data
    }
  } else {
    switch (sort_by) {
      case 'id':
        return data.sort((a, b) => a.id - b.id);
      case 'name':
        return data.sort((a, b) => a.name.localeCompare(b.name));
      case 'twitter_users':
        return data.sort((a, b) => a.twitter_subs - b.twitter_subs);
      case 'discord_users':
        return data.sort((a, b) => a.discord_subs - b.discord_subs);
      case 'supply':
        return data.sort((a, b) => a.supply - b.supply);
      case 'top level':
        return data.sort((a, b) => a.top_level - b.top_level);
      case 'transfers':
        return data.sort((a, b) => a.transfers - b.transfers);
      case 'floor':
        return data.sort((a, b) => a.floor - b.floor)
      default:
        return data
    }
  }
}

export default SortData;
