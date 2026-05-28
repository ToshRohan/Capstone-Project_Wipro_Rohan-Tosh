# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_homepage.spec.js >> IMDb Homepage >> language selection
- Location: tests\imdb_homepage.spec.js:61:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: /English/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: /English/i })

```

```yaml
- navigation:
  - link "Home":
    - /url: /?ref_=hm_nv_home
    - img
  - text: Menu
  - link:
    - /url: /?ref_=hm_nv_menu_home
    - img
  - button "Expand Movies nav links": Movies
  - button "Expand TV shows nav links": TV shows
  - button "Expand Watch nav links": Watch
  - button "Expand Awards & events nav links": Awards & events
  - button "Expand Celebs nav links": Celebs
  - button "Expand Community nav links": Community
  - button "Close navigation drawer"
  - search:
    - text: All
    - combobox:
      - textbox "Search IMDb"
      - listbox
    - status: 8 suggestions available
    - button "Submit search"
  - link "Go To IMDb Pro":
    - /url: https://pro.imdb.com/login/ap?u=/login/lwa&imdbPageAction=signUp&rf=cons_nb_hm&ref_=cons_nb_hm
    - img
  - link "Watchlist":
    - /url: /list/watchlist/?ref_=hm_nv_urwls_all
  - link "Sign in":
    - /url: /registration/signin/?u=%2F&ref_=hm_nv_generic_lgin
  - link "Sign in":
    - /url: /registration/signin/?u=%2F&ref_=hm_nv_signup_cm_btn
  - button "Close"
  - text: New customer?
  - link "Create account":
    - /url: /registration/signin/?u=%2F&ref_=hm_nv_generic_lgin
  - text: EN
  - status
  - status
- main:
  - iframe
  - complementary "Sponsored Content":
    - iframe
    - button "Get information, provide feedback or report sponsored ad": SPONSORED
  - figure:
    - group:
      - img "Primetime"
      - button "Add to Watchlist"
    - group:
      - img "Robert Pattinson Stars in 'Primetime'"
      - text: Robert Pattinson Stars in 'Primetime' 1:03 Watch the Teaser
      - img "63 people liked this video"
      - img "There are 26 reactions to this video from other people, primarily Love it and Appreciate emojis"
  - figure:
    - group:
      - img "Victorian Psycho"
      - button "Add to Watchlist"
    - group:
      - img "Maika Monroe Stars in 'Victorian Psycho'"
      - text: Maika Monroe Stars in 'Victorian Psycho' 1:16 Watch the Spooky New Trailer
      - img "218 people liked this video"
      - img "There are 86 reactions to this video from other people, primarily Love it and Excited emojis"
  - figure:
    - group:
      - img "'The Mandalorian and Grogu' Cast Answer Fan Questions"
      - button "Add to Watchlist"
    - group:
      - img "The Mandalorian Is Here for Your Questions"
      - text: The Mandalorian Is Here for Your Questions 11:22 Watch Now
      - img "128 people liked this video"
      - img "There are 49 reactions to this video from other people, primarily Love it and Appreciate emojis"
  - figure:
    - group:
      - img "Toy Story 5"
      - button "Add to Watchlist"
    - group:
      - img "'Toy Story 5'"
      - text: "'Toy Story 5' 1:45 Watch the Trailer"
      - img "123 people liked this video"
      - img "There are 72 reactions to this video from other people, primarily Love it and Excited emojis"
  - figure:
    - group:
      - img "Rolling Credits With Danielle Macdonald"
      - button "Add to Watchlist"
    - group:
      - img "Rolling With Danielle Macdonald"
      - text: Rolling With Danielle Macdonald 4:28 Catch Up With the 'Saccharine' Star
      - img "45 people liked this video"
      - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis"
  - figure:
    - group:
      - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set"'
      - button "Add to Watchlist"
    - group:
      - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set"'
      - text: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set 5:19 Hear Why. Watch Now."
      - img "136 people liked this video"
      - img "There are 52 reactions to this video from other people, primarily Love it and Appreciate emojis"
  - figure:
    - group:
      - img "Vought Rising"
      - button "Add to Watchlist"
    - group:
      - img "\"Vought Rising\""
      - text: "\"Vought Rising\" 1:24 Get a First Look"
      - img "1417 people liked this video"
      - img "There are 558 reactions to this video from other people, primarily Love it and Appreciate emojis"
  - figure:
    - group:
      - img "Spa Weekend"
      - button "Add to Watchlist"
    - group:
      - img "'Spa Weekend'"
      - text: "'Spa Weekend' 2:30 Watch the Trailer"
      - img "14 people liked this video"
      - img "There are 22 reactions to this video from other people, primarily Love it and Funny emojis"
  - figure:
    - group:
      - 'img "Avatar: The Last Airbender"'
      - button "Add to Watchlist"
    - group:
      - 'img "\"Avatar: The Last Airbender\""'
      - text: "\"Avatar: The Last Airbender\" 1:56 Season 2 Premieres June 25 on Netflix"
      - img "123 people liked this video"
      - img "There are 98 reactions to this video from other people, primarily Love it and Excited emojis"
  - figure:
    - group:
      - img "Enola Holmes 3"
      - button "Add to Watchlist"
    - group:
      - img "'Enola Homes 3'"
      - text: "'Enola Homes 3' 1:06 Watch the Trailer"
      - img "19 people liked this video"
      - img "There are 23 reactions to this video from other people, primarily Love it and Funny emojis"
  - text: Up next
  - img "Enola Holmes 3"
  - link "1:06 'Enola Homes 3' Watch the Trailer 19 people liked this videoThere are 23 reactions to this video from other people, primarily Love it and Funny emojis":
    - /url: /video/vi4195142425/?listId=ls053181649&ref_=hm_hp_vi_10
    - text: 1:06 'Enola Homes 3' Watch the Trailer
    - img "19 people liked this video"
    - img "There are 23 reactions to this video from other people, primarily Love it and Funny emojis"
  - img "Primetime"
  - link "1:03 Robert Pattinson Stars in 'Primetime' Watch the Teaser 63 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Appreciate emojis":
    - /url: /video/vi3322727193/?listId=ls053181649&ref_=hm_hp_vi_1
    - text: 1:03 Robert Pattinson Stars in 'Primetime' Watch the Teaser
    - img "63 people liked this video"
    - img "There are 26 reactions to this video from other people, primarily Love it and Appreciate emojis"
  - img "Victorian Psycho"
  - link "1:16 Maika Monroe Stars in 'Victorian Psycho' Watch the Spooky New Trailer 218 people liked this videoThere are 86 reactions to this video from other people, primarily Love it and Excited emojis":
    - /url: /video/vi1040698137/?listId=ls053181649&ref_=hm_hp_vi_2
    - text: 1:16 Maika Monroe Stars in 'Victorian Psycho' Watch the Spooky New Trailer
    - img "218 people liked this video"
    - img "There are 86 reactions to this video from other people, primarily Love it and Excited emojis"
  - img "'The Mandalorian and Grogu' Cast Answer Fan Questions"
  - link "11:22 The Mandalorian Is Here for Your Questions Watch Now 128 people liked this videoThere are 49 reactions to this video from other people, primarily Love it and Appreciate emojis":
    - /url: /video/vi1325845273/?listId=ls053181649&ref_=hm_hp_vi_3
    - text: 11:22 The Mandalorian Is Here for Your Questions Watch Now
    - img "128 people liked this video"
    - img "There are 49 reactions to this video from other people, primarily Love it and Appreciate emojis"
  - img "Toy Story 5"
  - link "1:45 'Toy Story 5' Watch the Trailer 123 people liked this videoThere are 72 reactions to this video from other people, primarily Love it and Excited emojis":
    - /url: /video/vi369937177/?listId=ls053181649&ref_=hm_hp_vi_4
    - text: 1:45 'Toy Story 5' Watch the Trailer
    - img "123 people liked this video"
    - img "There are 72 reactions to this video from other people, primarily Love it and Excited emojis"
  - img "Rolling Credits With Danielle Macdonald"
  - link "4:28 Rolling With Danielle Macdonald Catch Up With the 'Saccharine' Star 45 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Excited emojis":
    - /url: /video/vi3002256153/?listId=ls053181649&ref_=hm_hp_vi_5
    - text: 4:28 Rolling With Danielle Macdonald Catch Up With the 'Saccharine' Star
    - img "45 people liked this video"
    - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis"
  - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set"'
  - 'link "5:19 It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set Hear Why. Watch Now. 136 people liked this videoThere are 52 reactions to this video from other people, primarily Love it and Appreciate emojis"':
    - /url: /video/vi941542169/?listId=ls053181649&ref_=hm_hp_vi_6
    - text: "5:19 It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set Hear Why. Watch Now."
    - img "136 people liked this video"
    - img "There are 52 reactions to this video from other people, primarily Love it and Appreciate emojis"
  - link "Browse trailers":
    - /url: /trailers/?ref_=hm_hp_sm
  - link "Summer Watch Guide":
    - /url: /imdbpicks/summer-watch-guide/?ref_=hm_chip_hm_p1_csegswg
  - link "Cannes Winners":
    - /url: /event/ev0000147/2026/1/?ref_=hm_chip_hm_p2_csegcann
  - link "AAPI Heritage Month":
    - /url: /spotlight/?ref_=hm_chip_hm_p3_csegahm
  - link "Crunchyroll Anime Awards":
    - /url: /event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds
  - heading "Featured today" [level=3]
  - group:
    - group:
      - group:
        - img "Production art"
        - link "List":
          - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_i
      - link "What We're Watching This Week":
        - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_t
      - link "See the list":
        - /url: /list/ls4172120774/?ref_=hm_edcft_c_ls_5tw_1_cta
    - group:
      - group:
        - img "Production art"
        - link "Photos":
          - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_i
      - link "See Who's Trending on IMDb Right Now":
        - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_t
      - link "See the gallery":
        - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_c_sw_ts_2_cta
    - group:
      - group:
        - img "Production art"
        - link "Photos":
          - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_i
      - link "Asian Hollywood Stars to Watch":
        - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_t
      - link "See the full gallery":
        - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_c_csegahm_apahm_gal_stars_3_cta
    - group:
      - group:
        - img "Poster"
        - link "List":
          - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_i
      - link "'Backrooms' and More Horrors Are Coming":
        - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_t
      - link "See the list":
        - /url: /list/ls528329180/?ref_=hm_edcft_c_cseghw_ls_horror_4_cta
    - group:
      - group:
        - img "Production art"
        - link "List":
          - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_5_i
      - link "IMDb's Picks For Asian Pacific American Heritage Month":
        - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_5_t
      - link "See the list":
        - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_5_cta
    - group:
      - group:
        - img "Event photo"
        - link "List":
          - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_6_i
      - 'link "In Memoriam: Stars We Lost in 2026"':
        - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_6_t
      - link "See more":
        - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_c_csegbest_g_inmem26_6_cta
    - group:
      - group:
        - img "Production art"
        - link "Photos":
          - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_7_i
      - link "The Best Photos on the Internet Right Now":
        - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_7_t
      - link "See the gallery":
        - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_7_cta
    - group:
      - group:
        - img "Poster"
        - link "List":
          - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_8_i
      - 'link "TV Tracker: Renewed and Canceled Shows"':
        - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_8_t
      - link "Check the status":
        - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_8_cta
    - group:
      - group:
        - img "Poster"
        - link "List":
          - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_9_i
      - link "Theatrical Releases You Can Stream or Rent":
        - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_9_t
      - link "See the list":
        - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_9_cta
    - group:
      - group:
        - img "Poster"
        - link "List":
          - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_10_i
      - 'link "Staff Picks: What to Watch in May"':
        - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_10_t
      - link "See our picks":
        - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_10_cta
    - group:
      - group:
        - img "Poster"
        - link "Photos":
          - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_11_i
      - link "The Latest Movie and TV Posters":
        - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_11_t
      - link "See more posters":
        - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_11_cta
    - group:
      - group:
        - img "Production art"
        - link "Poll":
          - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_12_i
      - 'link "Poll: Yoda vs. Grogu"':
        - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_12_t
      - link "Vote now":
        - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_12_cta
    - group:
      - group:
        - img "Poster"
        - link "List":
          - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_13_i
      - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'":
        - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_13_t
      - link "See the recs":
        - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_13_cta
  - complementary "Sponsored Content":
    - iframe
    - button "Get information, provide feedback or report sponsored ad": SPONSORED
  - link "Most popular celebrities":
    - /url: /chart/starmeter/?ref_=hm_mpc_sm
    - heading "Most popular celebrities" [level=3]
  - heading "What to watch" [level=3]
  - link "Get more recommendations":
    - /url: /what-to-watch/?ref_=hm_watch_btn
  - heading "Explore what’s streaming" [level=3]
  - link "Set your preferred services":
    - /url: /preferences/preferredservices/?ref_=hm_stp_btn
  - heading "Explore movies & TV shows" [level=3]
  - heading "More to explore" [level=3]
- heading "Recently viewed" [level=3]
- text: You have no recently viewed pages
- contentinfo:
  - link "Sign in for more access":
    - /url: /registration/signin/?u=%2F&ref_=hm_ftr_reg
  - text: Follow IMDb on social
  - link "TikTok":
    - /url: https://www.tiktok.com/@imdb
  - link "Instagram":
    - /url: https://instagram.com/imdb
  - link "Twitter":
    - /url: https://twitter.com/imdb
  - link "YouTube":
    - /url: https://youtube.com/imdb/
  - link "Facebook":
    - /url: https://facebook.com/imdb
  - text: Get the IMDb app For Android and iOS
  - group:
    - img "Get the IMDb app"
    - link "For Android and iOS":
      - /url: https://slyb.app.link/Aa96cLcBeAb
  - link "Help":
    - /url: https://help.imdb.com/imdb
  - link "Site Index":
    - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
  - link "IMDbPro":
    - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
  - link "Box Office Mojo":
    - /url: https://www.boxofficemojo.com
  - link "License IMDb Data":
    - /url: https://developer.imdb.com/
  - link "Press Room":
    - /url: /pressroom/?ref_=hm_ftr
  - link "Advertising":
    - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
  - link "Jobs":
    - /url: https://www.amazon.jobs/en/teams/imdb
  - link "Conditions of Use":
    - /url: /conditions/?ref_=hm_ftr
  - link "Privacy Policy":
    - /url: /privacy/?ref_=hm_ftr
  - link "Your Ads Privacy Choices":
    - /url: /privacy/redirect/?ref_=hm_ftr
    - img
  - link "Your Ads Privacy Choices":
    - /url: /privacy/redirect/?ref_=hm_ftr
  - img "IMDb, an Amazon company"
  - paragraph: © 1990-2026 by IMDb.com, Inc.
- button "Back to top"
- img
- status
- img
- alert
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('IMDb Homepage', () => {
  4   | 
  5   | test.beforeEach(async ({ page }) => {
  6   |   await page.goto('https://www.imdb.com/');
  7   | });
  8   | 
  9   | test.afterEach(async ({ page }) => {
  10  |     console.log('Test completed');
  11  | });
  12  | 
  13  | // //1
  14  | // test('suggestion search', async ({ page }) => {
  15  | // //   await page.goto('https://www.imdb.com/');
  16  | //   await page.getByTestId('suggestion-search').click();
  17  | //   await page.getByTestId('suggestion-search').fill('The Prestige');
  18  | 
  19  | //   await expect(page.getByTestId('suggestion-search'))
  20  | //     .toHaveValue('The Prestige');
  21  | // });
  22  | 
  23  | // //2
  24  | // test('play trailer', async ({ page }) => {
  25  | // //   await page.goto('https://www.imdb.com/');
  26  | //   const page2Promise = page.waitForEvent('popup');
  27  | //   await page.locator('iframe[name="inline20"]').contentFrame().getByRole('link', { name: 'Sponsored Content' }).click();
  28  | //   const page2 = await page2Promise;
  29  | //   await expect(page2).toHaveTitle(/.*/);
  30  | // });
  31  | 
  32  | // //3
  33  | // test('open navigation drawer', async ({ page }) => {
  34  |   
  35  | //   await page.getByLabel('Open navigation drawer').click();
  36  | //   await expect(page.locator('body')).toContainText('IMDb');
  37  | // });
  38  | 
  39  | // //4
  40  | // test('watchlist', async ({ page }) => {
  41  | //   await page.getByRole('link', { name: 'Watchlist' }).click();
  42  | //   await expect(page).toHaveURL(/watchlist/);
  43  | 
  44  | // });
  45  | 
  46  | // //5
  47  | // test('summer watch guide', async ({ page }) => {
  48  | //   await page.getByRole('link', { name: 'Summer Watch Guide' }).first().click();
  49  | //   await page.getByRole('link', { name: 'Mortal Kombat II', exact: true }).click();
  50  | //   await expect(page).toHaveURL(/title|movie/i);
  51  | // });
  52  | 
  53  | // //6
  54  | // test('most popular celebrities', async ({ page }) => {
  55  | //   await page.getByRole('link', { name: 'Most popular celebrities' }).click();
  56  | //   await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
  57  | //   await expect(page.locator('body')).toContainText('Anne Hathaway');
  58  | // });
  59  | 
  60  | //7
  61  | test('language selection', async ({ page }) => {
  62  |   // await page.goto('https://www.imdb.com/');
  63  |   // await page.getByText('EN', { exact: true }).click();
  64  |   // await expect(page.getByText('English')).toBeVisible();
  65  |   const menu = page.locator('nav');
  66  |   await menu.getByText(/EN|English/i).first().click();
  67  |   const english = page.getByRole('link', { name: /English/i });
> 68  |   await expect(english).toBeVisible();
      |                         ^ Error: expect(locator).toBeVisible() failed
  69  |   await english.click();
  70  |   await expect(page).toHaveURL(/imdb/i);
  71  | });
  72  | 
  73  | // //8
  74  | // test('imdb pro', async ({ page }) => {
  75  | //   await page.getByRole('link', { name: 'Go To IMDb Pro' }).click();
  76  | //   await expect(page).toHaveURL(/pro/);
  77  | // });
  78  | 
  79  | // //9
  80  | // test('fan favorites', async ({ page }) => {
  81  | //   await page.getByRole('link', { name: 'Fan favorites' }).click();
  82  | //   await page.getByRole('link', { name: 'View title page for Dacoit: A' }).first().click();
  83  | // await expect(page).toHaveURL(/fan|favorite/i);
  84  | // });
  85  | 
  86  | // //10
  87  | // test('test', async ({ page }) => {
  88  | //   await page.getByRole('link', { name: 'Cannes Red Carpet' }).click();
  89  | //   await expect(page).toHaveURL(/cannes/);
  90  | // });
  91  | 
  92  | // //11
  93  | // test('Mobile apps', async ({ page }) => {
  94  | //   await page.getByRole('link', { name: 'For Android and iOS' }).click();
  95  | //   await page.goto('https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525');
  96  | //   await expect(page).toHaveURL(/apple/);
  97  | // });
  98  | 
  99  | // //12
  100 | // test('Top 10 on IMDb this week', async ({ page }) => {
  101 | //  const top10Link = page.getByRole('link', { name: /Top 10 on IMDb this week/i });
  102 | //   await expect(top10Link).toBeVisible();
  103 | //   await top10Link.click();
  104 | //   await expect(page).not.toHaveURL('https://www.imdb.com/');
  105 | // });
  106 | 
  107 | 
  108 | // //13
  109 | // test('In theaters navigation', async ({ page }) => {
  110 | 
  111 | //   const inTheatersLink = page.getByRole('link', { name: /In theaters/i }).first();
  112 | //   await inTheatersLink.click();
  113 | 
  114 | //   await expect(page).toHaveURL(/.*browse\/cinema/);
  115 | // });
  116 | 
  117 | // //14
  118 | // test('Born today page navigation', async ({ page }) => {
  119 | //   await page.getByRole('link', { name: 'Born today' }).click();
  120 | //   const heading = page.getByRole('heading', { name: 'Born today', exact: true });
  121 | //   await expect(heading).toBeVisible();
  122 | // });
  123 | 
  124 | // //15
  125 | // test('Sign in', async ({ page }) => {
  126 | //   // await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  127 | //   // await page.getByTestId('create_account_aap').click();
  128 | //   // await page.getByRole('heading', { name: 'Sign in to IMDb using your' }).click();
  129 | 
  130 | //   await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  131 | 
  132 | //   const signInHeading = page.getByRole('heading', { name: /Sign in/i });
  133 | //   await expect(signInHeading).toBeVisible();
  134 | // });
  135 | 
  136 | });
```