# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_homepage.spec.js >> IMDb Homepage >> Top 10 on IMDb this week
- Location: tests\imdb_homepage.spec.js:94:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: /Top 10 on IMDb this week/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: /Top 10 on IMDb this week/i })
    - waiting for navigation to finish...
    - navigated to "https://www.imdb.com/"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - link "Home" [ref=e4] [cursor=pointer]:
        - /url: /?ref_=hm_nv_home
        - img [ref=e5]
      - generic "Open navigation drawer" [ref=e14] [cursor=pointer]:
        - generic [ref=e17]: Menu
      - search [ref=e19]:
        - generic "All" [ref=e23] [cursor=pointer]:
          - generic [ref=e24]: All
        - generic [ref=e27]:
          - combobox [ref=e28]:
            - textbox "Search IMDb" [ref=e29]
            - listbox
          - status [ref=e30]: 8 suggestions available
        - button "Submit search" [ref=e31] [cursor=pointer]
      - link "Go To IMDb Pro" [ref=e36] [cursor=pointer]:
        - /url: https://pro.imdb.com/login/ap?u=/login/lwa&imdbPageAction=signUp&rf=cons_nb_hm&ref_=cons_nb_hm
        - img [ref=e39]
      - link "Watchlist" [ref=e51] [cursor=pointer]:
        - /url: /list/watchlist/?ref_=hm_nv_urwls_all
        - generic [ref=e53]: Watchlist
      - generic [ref=e54]:
        - link "Sign in" [ref=e55] [cursor=pointer]:
          - /url: /registration/signin/?u=%2F&ref_=hm_nv_generic_lgin
          - generic [ref=e56]: Sign in
        - generic [ref=e60]:
          - generic [ref=e61]:
            - link "Sign in" [ref=e63] [cursor=pointer]:
              - /url: /registration/signin/?u=%2F&ref_=hm_nv_signup_cm_btn
              - generic [ref=e64]: Sign in
            - button "Close" [ref=e65] [cursor=pointer]
          - generic [ref=e68]:
            - text: New customer?
            - link "Create account" [ref=e69] [cursor=pointer]:
              - /url: /registration/signin/?u=%2F&ref_=hm_nv_generic_lgin
      - generic "Toggle language selector" [ref=e72] [cursor=pointer]:
        - generic [ref=e74]: EN
      - status
      - status
    - main [ref=e77]:
      - iframe [ref=e79]:
        
      - generic [ref=e88]:
        - generic [ref=e91]:
          - figure [ref=e93]:
            - generic [ref=e94]:
              - group [ref=e95]:
                - img "Primetime" [ref=e97]
                - button "Add to Watchlist" [ref=e98] [cursor=pointer]
                - generic "Primetime" [ref=e103]
              - group [ref=e105] [cursor=pointer]:
                - img "Robert Pattinson Stars in 'Primetime'" [ref=e107]
                - generic "Robert Pattinson Stars in 'Primetime'" [ref=e108]:
                  - generic [ref=e115]:
                    - generic [ref=e116]:
                      - generic [ref=e117]: Robert Pattinson Stars in 'Primetime'
                      - generic [ref=e118]: 1:03
                    - generic [ref=e119]: Watch the Teaser
          - figure [ref=e122]:
            - generic [ref=e123]:
              - group [ref=e124]:
                - img "Victorian Psycho" [ref=e126]
                - button "Add to Watchlist" [ref=e127] [cursor=pointer]
                - generic "Victorian Psycho" [ref=e132]
              - group [ref=e134] [cursor=pointer]:
                - img "Maika Monroe Stars in 'Victorian Psycho'" [ref=e136]
                - generic "Maika Monroe Stars in 'Victorian Psycho'" [ref=e137]:
                  - generic [ref=e144]:
                    - generic [ref=e145]:
                      - generic [ref=e146]: Maika Monroe Stars in 'Victorian Psycho'
                      - generic [ref=e147]: 1:16
                    - generic [ref=e148]: Watch the Spooky New Trailer
          - figure [ref=e151]:
            - generic [ref=e152]:
              - group [ref=e153]:
                - generic [ref=e154]:
                  - img "'The Mandalorian and Grogu' Cast Answer Fan Questions"
                - button "Add to Watchlist" [ref=e155] [cursor=pointer]
                - generic "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e160]
              - group [ref=e162] [cursor=pointer]:
                - generic [ref=e163]:
                  - img "The Mandalorian Is Here for Your Questions"
                - generic "The Mandalorian Is Here for Your Questions" [ref=e164]:
                  - generic [ref=e171]:
                    - generic [ref=e172]:
                      - generic [ref=e173]: The Mandalorian Is Here for Your Questions
                      - generic [ref=e174]: 11:22
                    - generic [ref=e175]: Watch Now
          - figure [ref=e178]:
            - generic [ref=e179]:
              - group [ref=e180]:
                - generic [ref=e181]:
                  - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set"'
                - button "Add to Watchlist" [ref=e182] [cursor=pointer]
                - 'generic "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e187]'
              - group [ref=e189] [cursor=pointer]:
                - generic [ref=e190]:
                  - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set"'
                - 'generic "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e191]':
                  - generic [ref=e198]:
                    - generic [ref=e199]:
                      - generic [ref=e200]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                      - generic [ref=e201]: 5:19
                    - generic [ref=e202]: Hear Why. Watch Now.
          - figure [ref=e205]:
            - generic [ref=e206]:
              - group [ref=e207]:
                - generic [ref=e208]:
                  - 'img "Avatar: The Last Airbender"'
                - button "Add to Watchlist" [ref=e209] [cursor=pointer]
                - 'generic "Avatar: The Last Airbender" [ref=e214]'
              - group [ref=e216] [cursor=pointer]:
                - generic [ref=e217]:
                  - 'img "\"Avatar: The Last Airbender\""'
                - 'generic "\"Avatar: The Last Airbender\"" [ref=e218]':
                  - generic [ref=e225]:
                    - generic [ref=e226]:
                      - generic [ref=e227]: "\"Avatar: The Last Airbender\""
                      - generic [ref=e228]: 1:56
                    - generic [ref=e229]: Season 2 Premieres June 25 on Netflix
          - figure [ref=e232]:
            - generic [ref=e233]:
              - group [ref=e234]:
                - generic [ref=e235]:
                  - img "Spa Weekend"
                - button "Add to Watchlist" [ref=e236] [cursor=pointer]
                - generic "Spa Weekend" [ref=e241]
              - group [ref=e243] [cursor=pointer]:
                - generic [ref=e244]:
                  - img "'Spa Weekend'"
                - generic "'Spa Weekend'" [ref=e245]:
                  - generic [ref=e252]:
                    - generic [ref=e253]:
                      - generic [ref=e254]: "'Spa Weekend'"
                      - generic [ref=e255]: 2:30
                    - generic [ref=e256]: Watch the Trailer
          - figure [ref=e259]:
            - generic [ref=e260]:
              - group [ref=e261]:
                - generic [ref=e262]:
                  - img "Vought Rising"
                - button "Add to Watchlist" [ref=e263] [cursor=pointer]
                - generic "Vought Rising" [ref=e268]
              - group [ref=e270] [cursor=pointer]:
                - generic [ref=e271]:
                  - img "\"Vought Rising\""
                - generic "\"Vought Rising\"" [ref=e272]:
                  - generic [ref=e279]:
                    - generic [ref=e280]:
                      - generic [ref=e281]: "\"Vought Rising\""
                      - generic [ref=e282]: 1:24
                    - generic [ref=e283]: Get a First Look
          - figure [ref=e286]:
            - generic [ref=e287]:
              - group [ref=e288]:
                - generic [ref=e289]:
                  - img "Toy Story 5"
                - button "Add to Watchlist" [ref=e290] [cursor=pointer]
                - generic "Toy Story 5" [ref=e295]
              - group [ref=e297] [cursor=pointer]:
                - generic [ref=e298]:
                  - img "'Toy Story 5'"
                - generic "'Toy Story 5'" [ref=e299]:
                  - generic [ref=e306]:
                    - generic [ref=e307]:
                      - generic [ref=e308]: "'Toy Story 5'"
                      - generic [ref=e309]: 1:45
                    - generic [ref=e310]: Watch the Trailer
          - figure [ref=e313]:
            - generic [ref=e314]:
              - group [ref=e315]:
                - generic [ref=e316]:
                  - img "Enola Holmes 3"
                - button "Add to Watchlist" [ref=e317] [cursor=pointer]
                - generic "Enola Holmes 3" [ref=e322]
              - group [ref=e324] [cursor=pointer]:
                - generic [ref=e325]:
                  - img "'Enola Homes 3'"
                - generic "'Enola Homes 3'" [ref=e326]:
                  - generic [ref=e333]:
                    - generic [ref=e334]:
                      - generic [ref=e335]: "'Enola Homes 3'"
                      - generic [ref=e336]: 1:06
                    - generic [ref=e337]: Watch the Trailer
          - figure [ref=e340]:
            - generic [ref=e341]:
              - group [ref=e342]:
                - generic [ref=e343]:
                  - img "Rolling Credits With Danielle Macdonald"
                - button "Add to Watchlist" [ref=e344] [cursor=pointer]
                - generic "Rolling Credits With Danielle Macdonald" [ref=e349]
              - group [ref=e351] [cursor=pointer]:
                - generic [ref=e352]:
                  - img "Rolling With Danielle Macdonald"
                - generic "Rolling With Danielle Macdonald" [ref=e353]:
                  - generic [ref=e360]:
                    - generic [ref=e361]:
                      - generic [ref=e362]: Rolling With Danielle Macdonald
                      - generic [ref=e363]: 4:28
                    - generic [ref=e364]: Catch Up With the 'Saccharine' Star
        - generic [ref=e368]:
          - generic [ref=e369]:
            - generic [ref=e371]: Up next
            - generic [ref=e374]:
              - generic [ref=e375]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e378]
                - link "4:28 Rolling With Danielle Macdonald Catch Up With the 'Saccharine' Star" [ref=e379] [cursor=pointer]:
                  - /url: /video/vi3002256153/?listId=ls053181649&ref_=hm_hp_vi_10
                  - generic [ref=e383]: 4:28
                  - generic [ref=e385]: Rolling With Danielle Macdonald
                  - generic [ref=e387]: Catch Up With the 'Saccharine' Star
              - generic [ref=e389]:
                - img "Primetime" [ref=e392]
                - link "1:03 Robert Pattinson Stars in 'Primetime' Watch the Teaser" [ref=e393] [cursor=pointer]:
                  - /url: /video/vi3322727193/?listId=ls053181649&ref_=hm_hp_vi_1
                  - generic [ref=e397]: 1:03
                  - generic [ref=e399]: Robert Pattinson Stars in 'Primetime'
                  - generic [ref=e401]: Watch the Teaser
              - generic [ref=e403]:
                - img "Victorian Psycho" [ref=e406]
                - link "1:16 Maika Monroe Stars in 'Victorian Psycho' Watch the Spooky New Trailer" [ref=e407] [cursor=pointer]:
                  - /url: /video/vi1040698137/?listId=ls053181649&ref_=hm_hp_vi_2
                  - generic [ref=e411]: 1:16
                  - generic [ref=e413]: Maika Monroe Stars in 'Victorian Psycho'
                  - generic [ref=e415]: Watch the Spooky New Trailer
              - generic [ref=e417]:
                - img "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e420]
                - link "11:22 The Mandalorian Is Here for Your Questions Watch Now" [ref=e421] [cursor=pointer]:
                  - /url: /video/vi1325845273/?listId=ls053181649&ref_=hm_hp_vi_3
                  - generic [ref=e425]: 11:22
                  - generic [ref=e427]: The Mandalorian Is Here for Your Questions
                  - generic [ref=e429]: Watch Now
              - generic [ref=e431]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e434]'
                - 'link "5:19 It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set Hear Why. Watch Now." [ref=e435] [cursor=pointer]':
                  - /url: /video/vi941542169/?listId=ls053181649&ref_=hm_hp_vi_4
                  - generic [ref=e439]: 5:19
                  - generic [ref=e441]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                  - generic [ref=e443]: Hear Why. Watch Now.
              - generic [ref=e445]:
                - 'img "Avatar: The Last Airbender" [ref=e448]'
                - 'link "1:56 \"Avatar: The Last Airbender\" Season 2 Premieres June 25 on Netflix" [ref=e449] [cursor=pointer]':
                  - /url: /video/vi1560791833/?listId=ls053181649&ref_=hm_hp_vi_5
                  - generic [ref=e453]: 1:56
                  - generic [ref=e455]: "\"Avatar: The Last Airbender\""
                  - generic [ref=e457]: Season 2 Premieres June 25 on Netflix
          - link "Browse trailers" [ref=e460] [cursor=pointer]:
            - /url: /trailers/?ref_=hm_hp_sm
            - text: Browse trailers
      - generic [ref=e466]:
        - link "Summer Watch Guide" [ref=e467] [cursor=pointer]:
          - /url: /imdbpicks/summer-watch-guide/?ref_=hm_chip_hm_p1_csegswg
          - generic [ref=e468]: Summer Watch Guide
        - link "Cannes Winners" [ref=e471] [cursor=pointer]:
          - /url: /event/ev0000147/2026/1/?ref_=hm_chip_hm_p2_csegcann
          - generic [ref=e472]: Cannes Winners
        - link "AAPI Heritage Month" [ref=e475] [cursor=pointer]:
          - /url: /spotlight/?ref_=hm_chip_hm_p3_csegahm
          - generic [ref=e476]: AAPI Heritage Month
        - link "Crunchyroll Anime Awards" [ref=e479] [cursor=pointer]:
          - /url: /event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds
          - generic [ref=e480]: Crunchyroll Anime Awards
      - generic [ref=e484]:
        - heading "Featured today" [level=3] [ref=e487]
        - group [ref=e489]:
          - generic [ref=e490]:
            - group [ref=e491]:
              - group [ref=e492]:
                - img "Production art" [ref=e494]
                - link "List" [ref=e495] [cursor=pointer]:
                  - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_i
                  - generic [ref=e503]: List
              - generic [ref=e505]:
                - link "What We're Watching This Week" [ref=e506] [cursor=pointer]:
                  - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_t
                  - generic [ref=e507]: What We're Watching This Week
                - link "See the list" [ref=e509] [cursor=pointer]:
                  - /url: /list/ls4172120774/?ref_=hm_edcft_c_ls_5tw_1_cta
            - group [ref=e510]:
              - group [ref=e511]:
                - img "Production art" [ref=e513]
                - link "Photos" [ref=e514] [cursor=pointer]:
                  - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_i
                  - generic [ref=e520]: Photos
              - generic [ref=e522]:
                - link "See Who's Trending on IMDb Right Now" [ref=e523] [cursor=pointer]:
                  - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_t
                  - generic [ref=e524]: See Who's Trending on IMDb Right Now
                - link "See the gallery" [ref=e526] [cursor=pointer]:
                  - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_c_sw_ts_2_cta
            - group [ref=e527]:
              - group [ref=e528]:
                - img "Production art" [ref=e530]
                - link "Photos" [ref=e531] [cursor=pointer]:
                  - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_i
                  - generic [ref=e537]: Photos
              - generic [ref=e539]:
                - link "Asian Hollywood Stars to Watch" [ref=e540] [cursor=pointer]:
                  - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_t
                  - generic [ref=e541]: Asian Hollywood Stars to Watch
                - link "See the full gallery" [ref=e543] [cursor=pointer]:
                  - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_c_csegahm_apahm_gal_stars_3_cta
            - group [ref=e544]:
              - group [ref=e545]:
                - img "Poster" [ref=e547]
                - link "List" [ref=e548] [cursor=pointer]:
                  - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_i
                  - generic [ref=e556]: List
              - generic [ref=e558]:
                - link "'Backrooms' and More Horrors Are Coming" [ref=e559] [cursor=pointer]:
                  - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_t
                  - generic [ref=e560]: "'Backrooms' and More Horrors Are Coming"
                - link "See the list" [ref=e562] [cursor=pointer]:
                  - /url: /list/ls528329180/?ref_=hm_edcft_c_cseghw_ls_horror_4_cta
            - group [ref=e563]:
              - group [ref=e564]:
                - generic [ref=e565]:
                  - img "Production art"
                - link "List" [ref=e566] [cursor=pointer]:
                  - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_5_i
                  - generic [ref=e574]: List
              - generic [ref=e576]:
                - link "IMDb's Picks For Asian Pacific American Heritage Month" [ref=e577] [cursor=pointer]:
                  - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_5_t
                  - generic [ref=e578]: IMDb's Picks For Asian Pacific American Heritage Month
                - link "See the list" [ref=e580] [cursor=pointer]:
                  - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_5_cta
            - group [ref=e581]:
              - group [ref=e582]:
                - generic [ref=e583]:
                  - img "Event photo"
                - link "List" [ref=e584] [cursor=pointer]:
                  - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_6_i
                  - generic [ref=e592]: List
              - generic [ref=e594]:
                - 'link "In Memoriam: Stars We Lost in 2026" [ref=e595] [cursor=pointer]':
                  - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_6_t
                  - generic [ref=e596]: "In Memoriam: Stars We Lost in 2026"
                - link "See more" [ref=e598] [cursor=pointer]:
                  - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_c_csegbest_g_inmem26_6_cta
            - group [ref=e599]:
              - group [ref=e600]:
                - generic [ref=e601]:
                  - img "Production art"
                - link "Poll" [ref=e602] [cursor=pointer]:
                  - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_7_i
                  - generic [ref=e610]: Poll
              - generic [ref=e612]:
                - 'link "Poll: Yoda vs. Grogu" [ref=e613] [cursor=pointer]':
                  - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_7_t
                  - generic [ref=e614]: "Poll: Yoda vs. Grogu"
                - link "Vote now" [ref=e616] [cursor=pointer]:
                  - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_7_cta
            - group [ref=e617]:
              - group [ref=e618]:
                - generic [ref=e619]:
                  - img "Poster"
                - link "List" [ref=e620] [cursor=pointer]:
                  - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_8_i
                  - generic [ref=e628]: List
              - generic [ref=e630]:
                - 'link "Staff Picks: What to Watch in May" [ref=e631] [cursor=pointer]':
                  - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_8_t
                  - generic [ref=e632]: "Staff Picks: What to Watch in May"
                - link "See our picks" [ref=e634] [cursor=pointer]:
                  - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_8_cta
            - group [ref=e635]:
              - group [ref=e636]:
                - generic [ref=e637]:
                  - img "Poster"
                - link "List" [ref=e638] [cursor=pointer]:
                  - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_9_i
                  - generic [ref=e646]: List
              - generic [ref=e648]:
                - link "Theatrical Releases You Can Stream or Rent" [ref=e649] [cursor=pointer]:
                  - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_9_t
                  - generic [ref=e650]: Theatrical Releases You Can Stream or Rent
                - link "See the list" [ref=e652] [cursor=pointer]:
                  - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_9_cta
            - group [ref=e653]:
              - group [ref=e654]:
                - generic [ref=e655]:
                  - img "Poster"
                - link "List" [ref=e656] [cursor=pointer]:
                  - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_10_i
                  - generic [ref=e664]: List
              - generic [ref=e666]:
                - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'" [ref=e667] [cursor=pointer]:
                  - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_10_t
                  - generic [ref=e668]: My Summer Watchlist Loves 'Boosters' and 'Backrooms'
                - link "See the recs" [ref=e670] [cursor=pointer]:
                  - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_10_cta
            - group [ref=e671]:
              - group [ref=e672]:
                - generic [ref=e673]:
                  - img "Poster"
                - link "Photos" [ref=e674] [cursor=pointer]:
                  - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_11_i
                  - generic [ref=e680]: Photos
              - generic [ref=e682]:
                - link "The Latest Movie and TV Posters" [ref=e683] [cursor=pointer]:
                  - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_11_t
                  - generic [ref=e684]: The Latest Movie and TV Posters
                - link "See more posters" [ref=e686] [cursor=pointer]:
                  - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_11_cta
            - group [ref=e687]:
              - group [ref=e688]:
                - generic [ref=e689]:
                  - img "Production art"
                - link "Photos" [ref=e690] [cursor=pointer]:
                  - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_12_i
                  - generic [ref=e696]: Photos
              - generic [ref=e698]:
                - link "The Best Photos on the Internet Right Now" [ref=e699] [cursor=pointer]:
                  - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_12_t
                  - generic [ref=e700]: The Best Photos on the Internet Right Now
                - link "See the gallery" [ref=e702] [cursor=pointer]:
                  - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_12_cta
            - group [ref=e703]:
              - group [ref=e704]:
                - generic [ref=e705]:
                  - img "Poster"
                - link "List" [ref=e706] [cursor=pointer]:
                  - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_13_i
                  - generic [ref=e714]: List
              - generic [ref=e716]:
                - 'link "TV Tracker: Renewed and Canceled Shows" [ref=e717] [cursor=pointer]':
                  - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_13_t
                  - generic [ref=e718]: "TV Tracker: Renewed and Canceled Shows"
                - link "Check the status" [ref=e720] [cursor=pointer]:
                  - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_13_cta
      - link "Most popular celebrities" [ref=e729] [cursor=pointer]:
        - /url: /chart/starmeter/?ref_=hm_mpc_sm
        - heading "Most popular celebrities" [level=3] [ref=e730]: Most popular celebrities
      - generic [ref=e738]:
        - heading "What to watch" [level=3] [ref=e740]
        - link "Get more recommendations" [ref=e742] [cursor=pointer]:
          - /url: /what-to-watch/?ref_=hm_watch_btn
          - generic [ref=e743]: Get more recommendations
      - generic [ref=e750]:
        - heading "Explore what’s streaming" [level=3] [ref=e752]
        - link "Set your preferred services" [ref=e754] [cursor=pointer]:
          - /url: /preferences/preferredservices/?ref_=hm_stp_btn
          - generic [ref=e757]: Set your preferred services
      - heading "Explore movies & TV shows" [level=3] [ref=e763]
      - heading "More to explore" [level=3] [ref=e769]
    - generic [ref=e774]:
      - heading "Recently viewed" [level=3] [ref=e777]
      - generic [ref=e779]: You have no recently viewed pages
    - contentinfo [ref=e780]:
      - link "Sign in for more access" [ref=e782] [cursor=pointer]:
        - /url: /registration/signin/?u=%2F&ref_=hm_ftr_reg
        - generic [ref=e783]: Sign in for more access
      - generic [ref=e784]:
        - generic [ref=e785]:
          - generic [ref=e786]:
            - generic [ref=e787]: Follow IMDb on social
            - link "TikTok" [ref=e788] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e790] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e793] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e795] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e797] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e799]:
            - generic [ref=e800]:
              - generic [ref=e801]: Get the IMDb app
              - generic [ref=e802]: For Android and iOS
            - group [ref=e804]:
              - generic [ref=e805]:
                - img "Get the IMDb app"
              - link "For Android and iOS" [ref=e806] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e808]:
          - link "Help" [ref=e809] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e811] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e813] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e815] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e817] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e819]:
          - link "Press Room" [ref=e820] [cursor=pointer]:
            - /url: /pressroom/?ref_=hm_ftr
          - link "Advertising" [ref=e821] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e823] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e825] [cursor=pointer]:
            - /url: /conditions/?ref_=hm_ftr
          - link "Privacy Policy" [ref=e826] [cursor=pointer]:
            - /url: /privacy/?ref_=hm_ftr
          - generic [ref=e827]:
            - link "Your Ads Privacy Choices" [ref=e828] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
              - img [ref=e829]
            - link "Your Ads Privacy Choices" [ref=e841] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
      - img "IMDb, an Amazon company" [ref=e843]
      - paragraph [ref=e879]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e880] [cursor=pointer]:
      - generic [ref=e883]: Back to top
    - img
    - status
    - img
  - alert [ref=e884]
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
  46  | //5
  47  | test('summer watch guide', async ({ page }) => {
  48  |   await page.getByRole('link', { name: 'Summer Watch Guide' }).first().click();
  49  |   await page.getByRole('link', { name: 'Mortal Kombat II', exact: true }).click();
  50  |   await expect(page).toHaveURL(/title|movie/i);
  51  | });
  52  | 
  53  | // //6
  54  | // test('most popular celebrities', async ({ page }) => {
  55  | //   await page.getByRole('link', { name: 'Most popular celebrities' }).click();
  56  | //   await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
  57  | //   await expect(page.locator('body')).toContainText('Anne Hathaway');
  58  | // });
  59  | 
  60  | // //7
  61  | // test('language selection', async ({ page }) => {
  62  | //   await page.getByText('EN', { exact: true }).click();
  63  | //   await page.getByRole('menuitem', { name: 'हिंदी (भारत)' }).click();
  64  | //   await expect(page.getByText('मेनू')).toBeVisible();
  65  | // });
  66  | 
  67  | // //8
  68  | // test('imdb pro', async ({ page }) => {
  69  | //   await page.getByRole('link', { name: 'Go To IMDb Pro' }).click();
  70  | //   await expect(page).toHaveURL(/pro/);
  71  | // });
  72  | 
  73  | // //9
  74  | // test('fan favorites', async ({ page }) => {
  75  | //   await page.getByRole('link', { name: 'Fan favorites' }).click();
  76  | //   await page.getByRole('link', { name: 'View title page for Dacoit: A' }).first().click();
  77  | // await expect(page).toHaveURL(/fan|favorite/i);
  78  | // });
  79  | 
  80  | // //10
  81  | // test('test', async ({ page }) => {
  82  | //   await page.getByRole('link', { name: 'Cannes Red Carpet' }).click();
  83  | //   await expect(page).toHaveURL(/cannes/);
  84  | // });
  85  | 
  86  | // //11
  87  | // test('Mobile apps', async ({ page }) => {
  88  | //   await page.getByRole('link', { name: 'For Android and iOS' }).click();
  89  | //   await page.goto('https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525');
  90  | //   await expect(page).toHaveURL(/apple/);
  91  | // });
  92  | 
  93  | //12
  94  | test('Top 10 on IMDb this week', async ({ page }) => {
  95  |  const top10Link = page.getByRole('link', { name: /Top 10 on IMDb this week/i });
> 96  |   await expect(top10Link).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  97  |   await top10Link.click();
  98  |   await expect(page).not.toHaveURL('https://www.imdb.com/search/title/?moviemeter=%2C10&ref_=hm_tenup_sm');
  99  | });
  100 | 
  101 | 
  102 | // //13
  103 | // test('In theaters navigation', async ({ page }) => {
  104 | 
  105 | //   const inTheatersLink = page.getByRole('link', { name: /In theaters/i }).first();
  106 | //   await inTheatersLink.click();
  107 | 
  108 | //   await expect(page).toHaveURL(/.*browse\/cinema/);
  109 | // });
  110 | 
  111 | // //14
  112 | // test('Born today page navigation', async ({ page }) => {
  113 | //   await page.getByRole('link', { name: 'Born today' }).click();
  114 | //   const heading = page.getByRole('heading', { name: 'Born today', exact: true });
  115 | //   await expect(heading).toBeVisible();
  116 | // });
  117 | 
  118 | // //15
  119 | // test('Sign in', async ({ page }) => {
  120 | //   // await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  121 | //   // await page.getByTestId('create_account_aap').click();
  122 | //   // await page.getByRole('heading', { name: 'Sign in to IMDb using your' }).click();
  123 | 
  124 | //   await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  125 | 
  126 | //   const signInHeading = page.getByRole('heading', { name: /Sign in/i });
  127 | //   await expect(signInHeading).toBeVisible();
  128 | // });
  129 | 
  130 | });
```