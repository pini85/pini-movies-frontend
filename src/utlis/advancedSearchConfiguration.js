export const advancedSearchRunTime = (runTime) => {
  switch (runTime) {
    case 1:
      return '&with_runtime.lte=90';
    case 1.5:
      return '&with_runtime.gte=90&with_runtime.lte=120';
    case 2:
      return '&with_runtime.gte=120&with_runtime.lte=180';
    case 3:
      return '&with_runtime.gte=180';
    default:
      return '';
  }
};

export const advancedSearchRating = (rating) => {
  switch (rating) {
    case 9:
      return '&vote_average.gte=9';
    case 8:
      return '&vote_average.gte=8';
    case 7:
      return '&vote_average.gte=7';
    case 6:
      return '&vote_average.gte=6';
    case 5:
      return '&vote_average.gte=5';
    case 4:
      return '&vote_average.gte=4';
    case 3:
      return '&vote_average.gte=3';
    case 2:
      return '&vote_average.gte=2';
    case 1:
      return '&vote_average.gte=1';
    default:
      return '';
  }
};

export const advancedSearchVotes = (votes) => {
  switch (votes) {
    case 20000:
      return '&vote_count.gte=20000';
    case 15000:
      return '&vote_count.gte=15000';
    case 10000:
      return '&vote_count.gte=10000';
    case 9000:
      return '&vote_count.gte=9000';
    case 8000:
      return '&vote_count.gt=8000';
    case 7000:
      return '&vote_count.gte=7000';
    case 6000:
      return '&vote_count.gte=6000';
    case 5000:
      return '&vote_count.gte=5000';
    case 4000:
      return '&vote_count.gte=4000';
    case 3000:
      return '&vote_count.gte=3000';
    case 2000:
      return '&vote_count.gte=2000';
    case 1000:
      return '&vote_count.gte=1000';
    case 500:
      return '&vote_count.gte=500';
    case 100:
      return '&vote_count.gte=100';
    default:
      return '&vote_count.gte=100';
  }
};

// export const advancedSearchGenres = (genres) => {
//   switch (genres) {
//     case "Action":
//       return "with_genres=28";
//   }
// };

export const advancedSearchCast = (castObjects) => {
  const casts = [castObjects.actors, castObjects.directors, castObjects.writers];
  //check if any casts has a casts length
  const hasCasts = casts.some((cast) => cast.casts.length > 0);

  let string;
  if (hasCasts) {
    string = '&with_cast=';
  } else {
    return (string = '');
  }

  casts.forEach((obj, objIndex) => {
    if (obj.casts.length < 1) return;

    const option = obj.type === 'or' ? '|' : ',';

    obj.casts.forEach((cast, castIndex) => {
      if (objIndex === 0 && castIndex === 0) {
        string += cast.id;
      } else {
        string += option + cast.id;
      }
    });
  });

  return string;
};
export const displayFromYear = (value) => {
  if (value) {
    return `&primary_release_date.gte=${value}-01-01`;
  } else {
    return '';
  }
};
export const displayToYear = (value) => {
  if (value) {
    return `&primary_release_date.lte=${value}-01-01`;
  } else {
    return '';
  }
};

export const advancedSearchSortBy = (value) => {
  switch (value) {
    case 'vote-average':
      return '&sort_by=vote_average.desc';
    default:
      return '&sort_by=vote_average.desc';
  }
};
export const displayGenre = (value) => {
  if (value) {
    return `&with_genres=${value}`;
  } else {
    return '';
  }
};
