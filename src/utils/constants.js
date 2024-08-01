export const netflix_logo_url = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const netflix_home_page_background_url = 'https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg'

export const user_icon_url ='https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg'

export const alt_netflix_logo_url ='https://app.gemoo.com/share/image-annotation/614847723887263744?codeId=P50bQR8509Z3g'

export const fetch_now_playing_movies_url ='https://api.themoviedb.org/3/movie/now_playing?page=2'

export const fetch_popular_movies_url ='https://api.themoviedb.org/3/movie/popular?page=2'

export const fetch_toprated_movies_url ='https://api.themoviedb.org/3/movie/top_rated?page=2'

export const fetch_upcoming_movies_url ='https://api.themoviedb.org/3/movie/upcoming?page=2'

export const youtube_url = 'https://www.youtube.com/embed/'

export const search_IMDB_movie_by_name_url ='https://api.themoviedb.org/3/search/movie?query='
export const search_IMDB_movie_by_name_url_suffix = '&include_adult=false&language=en-US&page=1'

export const sorry_message = 'Sorry..! Video is not available on the store 😢 Please try some other movie 🙏🏿'

export const loading_video_msg = 'Loading... Please wait 🙏🏿 🙏🏿'

export const iframe_end_url = "?controls=1&showinfo=0&rel=0&autoplay=1&loop=1&mute=0&playlist="

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_URL}`
    }
  };

  export const tmdb_img_url = 'https://image.tmdb.org/t/p/w780'

  export const supportedLanguages = [
    {
     identifier:'en',
     name:'English'
  },
  {
    identifier:'hindi',
    name:'Hindi'
  },
 {
  identifier:'spanish',
  name:'Spanish'
},
]

