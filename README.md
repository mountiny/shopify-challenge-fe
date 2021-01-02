# Shopify Frontend developer Code Challenge - Vít Horáček

The app is deployed on Vercel and you can see it [here](https://shopify-challenge-fe.vercel.app/).

I have decided to use Next.js and their provided [TailwindCSS starter](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).

I have around a year of experience with making Next.js applications as a freelancer. I have really become to love the integration they provide with Vercel and the ease of use of this tech stack. I recommned anyone to try it out just because of its great Developer Experience.

For most of the styling, I have chosen TailwindCSS 2.0. I have used this solution in couple of my previous projects and it was the most convenient solution for styles I have come across yet. It is unopiniated yet it is mostly written dierctly in the js/jsx files so I do not have to switch between SCSS files of CSS modules. At the same time, it is easy to add more complex animations or solutions required by the project.

For fetching from the API, I will use SWR library together with Axios library which I believe makes this rehydration very straightforward.

### Features

#### Accessibility

I have tried to make the app as accessible as possible. You can move through the search input and Nominate buttons easily and intuitively using your keyboard. You can use tabulator to switch to the next button and Enter to trigger the action required (to nomite, to remove nomination or to remove all nominations).

#### Search

The search is executed after each change in the search input. New data is fetched from OMDb and shown in the left column. A user can then click on nominate button which will save this movie to their nomination list and display it in the right column as well. Remove all button has been disabled until first nomination has been added. User can remove nomination either by clicking on the heart button or remove all using the button.

If the search bar is empty, the box showing results of the search is set up to focus the search input on click to make it even easier for the user to start searching.

#### Nominations list is saved in localStorage

I have created useNominations hook which abstracts the functionality behind keeping and saving user's nomination list to localStorage.

#### Notification

When user nominates their 5th movie, the banner in the top of the screen shows up by sliding down to notify user about using all of his 5 nominations. User can either click on the banner to dismiss it or it will fade away on its own after 5 seconds. The banner will also show again is user tried to add another nomination additionally to those 5 they already have selected.

#### Responsivness

The website is designed to be mobile first. The layout is adjusting to wthe width of the device and the font sizes and margins are also adapting to make the website look the best as possible on all screen sizes.

### How to run localy

```
git clone https://github.com/mountiny/shopify-challenge-fe.git
cd shopify-challenge-fe
npm install
npm run dev
```

You will also need to get your own OMDb api key, which you can generate [here](http://www.omdbapi.com/apikey.aspx). Then change .env.template file to .env.local and add the API key to prepare environment variable