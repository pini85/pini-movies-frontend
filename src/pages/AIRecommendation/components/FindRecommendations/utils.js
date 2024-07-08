export const recommendationQuestions = [
  {
    question: "What mood are you in?",
    answers: [
      {
        type: "component",
        content: "HappyEmotion",
        value: "happy",
      },
      {
        type: "component",
        content: "NeutralEmotion",
        value: "neutral",
      },
      {
        type: "component",
        content: "SadEmotion",
        value: "sad",
      },
    ],
  },
  {
    question: "What genres do you like?",
    answers: [
      {
        type: "icon",
        content: "action",
        value: "action",
      },
      { type: "icon", content: "adventure", value: "adventure" },
      { type: "icon", content: "animation", value: "animation" },
      { type: "icon", content: "comedy", value: "comedy" },
      { type: "icon", content: "crime", value: "crime" },
      { type: "icon", content: "documentary", value: "documentary" },
      { type: "icon", content: "drama", value: "drama" },
      { type: "icon", content: "family", value: "family" },
      { type: "icon", content: "fantasy", value: "fantasy" },
      { type: "icon", content: "history", value: "history" },
      { type: "icon", content: "horror", value: "horror" },
      { type: "icon", content: "music", value: "music" },
      { type: "icon", content: "mystery", value: "mystery" },
      { type: "icon", content: "romance", value: "romance" },
      { type: "icon", content: "sci-fi", value: "sci-fi" },
      { type: "icon", content: "thriller", value: "thriller" },
      { type: "icon", content: "war", value: "war" },
      { type: "icon", content: "western", value: "western" },
    ],
  },
  {
    question: "What similar movies do you want to see?",
    svg: "glass-chart",
    answers: [{ type: "component", content: "SearchMovies", value: [] }],
  },
  {
    question: "What is the occasion?",
    answers: [
      {
        type: "icon",
        content: "Just watching a movie by myself",
        value: "alone",
      },
      { type: "icon", content: "Movie Date", value: "date" },
      {
        type: "icon",
        content: "Movie Night with friends",
        value: "friends",
      },
      { type: "icon", content: "Family Movie Night", value: "houseHold" },
      { type: "icon", content: "Kids' Movie Night", value: "kids" },
      {
        type: "selector",
        placeholder: "Holiday-themed movie night ",

        content: [
          "Christmas",
          "Halloween",
          "Thanksgiving",
          "New Year's Eve",
          "Valentine's Day",
          "Easter",
          "Chinese New Year",
          "Diwali",
          "Hanukkah",
          "St. Patrick's Day",
          "International Womens Day",
          "Earth Day",
          "Ramadan",
          "Lunar New Year",
          "Cinco de Mayo",
          "Mother's Day",
          "Father's Day",
          "Independence Day (4th of July)",
          "Labor Day",
          "Veterans Day",
        ],
        value: "",
      },
      { type: "input", content: "Other (explain)", value: "" },
    ],
  },

  {
    question: "Favorite actors and directors?",
    answers: [
      {
        type: "cast-input",
        content: "favorite",
        value: [{ actors: [], directors: [] }],
      },
    ],
  },
  {
    question: "Do you like this movie?",
    answers: [
      { type: "component", content: "FineTuneRecommendations", value: null },
    ],
  },
];
