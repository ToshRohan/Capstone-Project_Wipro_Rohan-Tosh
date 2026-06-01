# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_whatToWatch.spec.js >> IMDb What to Watch - Functional Tests >> Movies load correctly
- Location: tests/imdb_whatToWatch.spec.js:91:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'View title page for Sapne Vs' }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - link "Home" [ref=e4] [cursor=pointer]:
        - /url: /?ref_=watch_fanfav_nv_home
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
        - /url: /list/watchlist/?ref_=watch_fanfav_nv_urwls_all
        - generic [ref=e53]: Watchlist
      - link "Sign in" [ref=e55] [cursor=pointer]:
        - /url: /registration/signin/?u=%2Fwhat-to-watch%2F&ref_=watch_fanfav_nv_generic_lgin
        - generic [ref=e56]: Sign in
      - generic "Toggle language selector" [ref=e59] [cursor=pointer]:
        - generic [ref=e61]: EN
      - status
      - status
    - main [ref=e64]:
      - generic:
        - iframe [ref=e67]:
          - iframe [ref=f57e2]:
            - generic [active] [ref=f60e1]:
              - img [ref=f60e2]
              - img [ref=f60e3]
              - img [ref=f60e4]
              - img [ref=f60e5]
              - img [ref=f60e6]
              - img [ref=f60e7]
              - img [ref=f60e8]
              - img [ref=f60e9]
              - img [ref=f60e10]
        - iframe [ref=e69]:
          - iframe [ref=f58e2]:
            - generic [active] [ref=f59e1]:
              - iframe [ref=f59e2]:
                
              - img [ref=f59e3]
              - iframe [ref=f59e4]:
                
              - iframe [ref=f59e5]:
                
              - iframe [ref=f59e6]:
                - generic [active] [ref=f64e1]:
                  - img [ref=f64e2]
                  - img [ref=f64e3]
                  - img [ref=f64e4]
                  - img [ref=f64e5]
                  - img [ref=f64e6]
              - img [ref=f59e7]
      - generic [ref=e71]:
        - heading "What to Watch - IMDb" [level=1] [ref=e74]
        - generic [ref=e75]:
          - tablist [ref=e76]:
            - tab "WATCH GUIDE" [ref=e77] [cursor=pointer]:
              - generic [ref=e78]: WATCH GUIDE
            - tab "FAN FAVORITES" [active] [selected] [ref=e79] [cursor=pointer]:
              - generic [ref=e80]: FAN FAVORITES
            - tab "TOP PICKS" [ref=e81] [cursor=pointer]:
              - generic [ref=e82]: TOP PICKS
            - tab "FROM YOUR WATCHLIST" [ref=e83] [cursor=pointer]:
              - generic [ref=e84]: FROM YOUR WATCHLIST
            - tab "MOST POPULAR" [ref=e85] [cursor=pointer]:
              - generic [ref=e86]: MOST POPULAR
          - tabpanel [ref=e87]:
            - generic [ref=e88]:
              - generic [ref=e90]:
                - group [ref=e91]:
                  - group [ref=e92]:
                    - img "The Boys" [ref=e94]
                    - button "Add to Watchlist" [ref=e95] [cursor=pointer]
                    - link "View title page for The Boys" [ref=e100] [cursor=pointer]:
                      - /url: /title/tt1190634/?ref_=watch_fanfav_i_1
                  - generic [ref=e102]:
                    - generic [ref=e105]: "8.5"
                    - button "Rate The Boys" [ref=e106] [cursor=pointer]
                  - link "View title page for The Boys" [ref=e109] [cursor=pointer]:
                    - /url: /title/tt1190634/?ref_=watch_fanfav_t_1
                    - text: The Boys
                  - generic [ref=e110]:
                    - button "Watch options" [ref=e111] [cursor=pointer]:
                      - generic [ref=e112]: Watch options
                    - link "Trailer" [ref=e114] [cursor=pointer]:
                      - /url: /video/vi1673186073/?ref_=watch_fanfav_tr_1
                      - generic [ref=e117]: Trailer
                - group [ref=e118]:
                  - group [ref=e119]:
                    - img "Backrooms" [ref=e121]
                    - button "Add to Watchlist" [ref=e122] [cursor=pointer]
                    - link "View title page for Backrooms" [ref=e127] [cursor=pointer]:
                      - /url: /title/tt26657236/?ref_=watch_fanfav_i_2
                  - generic [ref=e129]:
                    - generic [ref=e132]: "7.1"
                    - button "Rate Backrooms" [ref=e133] [cursor=pointer]
                  - link "View title page for Backrooms" [ref=e136] [cursor=pointer]:
                    - /url: /title/tt26657236/?ref_=watch_fanfav_t_2
                    - text: Backrooms
                  - generic [ref=e137]:
                    - button "Add to Watchlist" [ref=e138] [cursor=pointer]:
                      - generic [ref=e140]: Watchlist
                    - link "Trailer" [ref=e142] [cursor=pointer]:
                      - /url: /video/vi2386086681/?ref_=watch_fanfav_tr_2
                      - generic [ref=e145]: Trailer
                - group [ref=e146]:
                  - group [ref=e147]:
                    - img "Obsession" [ref=e149]
                    - button "Add to Watchlist" [ref=e150] [cursor=pointer]
                    - link "View title page for Obsession" [ref=e155] [cursor=pointer]:
                      - /url: /title/tt37287335/?ref_=watch_fanfav_i_3
                  - generic [ref=e157]:
                    - generic [ref=e160]: "8.2"
                    - button "Rate Obsession" [ref=e161] [cursor=pointer]
                  - link "View title page for Obsession" [ref=e164] [cursor=pointer]:
                    - /url: /title/tt37287335/?ref_=watch_fanfav_t_3
                    - text: Obsession
                  - generic [ref=e165]:
                    - button "Add to Watchlist" [ref=e166] [cursor=pointer]:
                      - generic [ref=e168]: Watchlist
                    - link "Trailer" [ref=e170] [cursor=pointer]:
                      - /url: /video/vi3770862361/?ref_=watch_fanfav_tr_3
                      - generic [ref=e173]: Trailer
                - group [ref=e174]:
                  - group [ref=e175]:
                    - 'img "Star Wars: The Mandalorian and Grogu" [ref=e177]'
                    - button "Add to Watchlist" [ref=e178] [cursor=pointer]
                    - 'link "View title page for Star Wars: The Mandalorian and Grogu" [ref=e183] [cursor=pointer]':
                      - /url: /title/tt30825738/?ref_=watch_fanfav_i_4
                  - generic [ref=e185]:
                    - generic [ref=e188]: "7.0"
                    - 'button "Rate Star Wars: The Mandalorian and Grogu" [ref=e189] [cursor=pointer]'
                  - 'link "View title page for Star Wars: The Mandalorian and Grogu" [ref=e192] [cursor=pointer]':
                    - /url: /title/tt30825738/?ref_=watch_fanfav_t_4
                    - text: "Star Wars: The Mandalorian and Grogu"
                  - generic [ref=e193]:
                    - button "Add to Watchlist" [ref=e194] [cursor=pointer]:
                      - generic [ref=e196]: Watchlist
                    - link "Trailer" [ref=e198] [cursor=pointer]:
                      - /url: /video/vi3811101465/?ref_=watch_fanfav_tr_4
                      - generic [ref=e201]: Trailer
                - group [ref=e202]:
                  - group [ref=e203]:
                    - img "Project Hail Mary" [ref=e205]
                    - button "Add to Watchlist" [ref=e206] [cursor=pointer]
                    - link "View title page for Project Hail Mary" [ref=e211] [cursor=pointer]:
                      - /url: /title/tt12042730/?ref_=watch_fanfav_i_5
                  - generic [ref=e213]:
                    - generic [ref=e216]: "8.3"
                    - button "Rate Project Hail Mary" [ref=e217] [cursor=pointer]
                  - link "View title page for Project Hail Mary" [ref=e220] [cursor=pointer]:
                    - /url: /title/tt12042730/?ref_=watch_fanfav_t_5
                    - text: Project Hail Mary
                  - generic [ref=e221]:
                    - button "Watch options" [ref=e222] [cursor=pointer]:
                      - generic [ref=e223]: Watch options
                    - link "Trailer" [ref=e225] [cursor=pointer]:
                      - /url: /video/vi2732378905/?ref_=watch_fanfav_tr_5
                      - generic [ref=e228]: Trailer
                - group [ref=e229]:
                  - group [ref=e230]:
                    - img "Spider-Noir" [ref=e232]
                    - button "Add to Watchlist" [ref=e233] [cursor=pointer]
                    - link "View title page for Spider-Noir" [ref=e238] [cursor=pointer]:
                      - /url: /title/tt30460310/?ref_=watch_fanfav_i_6
                  - generic [ref=e240]:
                    - generic [ref=e243]: "8.1"
                    - button "Rate Spider-Noir" [ref=e244] [cursor=pointer]
                  - link "View title page for Spider-Noir" [ref=e247] [cursor=pointer]:
                    - /url: /title/tt30460310/?ref_=watch_fanfav_t_6
                    - text: Spider-Noir
                  - generic [ref=e248]:
                    - button "Watch options" [ref=e249] [cursor=pointer]:
                      - generic [ref=e250]: Watch options
                    - link "Trailer" [ref=e252] [cursor=pointer]:
                      - /url: /video/vi1611647769/?ref_=watch_fanfav_tr_6
                      - generic [ref=e255]: Trailer
                - group [ref=e256]:
                  - group [ref=e257]:
                    - img "Michael" [ref=e259]
                    - button "Add to Watchlist" [ref=e260] [cursor=pointer]
                    - link "View title page for Michael" [ref=e265] [cursor=pointer]:
                      - /url: /title/tt11378946/?ref_=watch_fanfav_i_7
                  - generic [ref=e267]:
                    - generic [ref=e270]: "7.7"
                    - button "Rate Michael" [ref=e271] [cursor=pointer]
                  - link "View title page for Michael" [ref=e274] [cursor=pointer]:
                    - /url: /title/tt11378946/?ref_=watch_fanfav_t_7
                    - text: Michael
                  - generic [ref=e275]:
                    - button "Add to Watchlist" [ref=e276] [cursor=pointer]:
                      - generic [ref=e278]: Watchlist
                    - link "Trailer" [ref=e280] [cursor=pointer]:
                      - /url: /video/vi977259289/?ref_=watch_fanfav_tr_7
                      - generic [ref=e283]: Trailer
                - group [ref=e284]:
                  - group [ref=e285]:
                    - img "The Boroughs" [ref=e287]
                    - button "Add to Watchlist" [ref=e288] [cursor=pointer]
                    - link "View title page for The Boroughs" [ref=e293] [cursor=pointer]:
                      - /url: /title/tt27557289/?ref_=watch_fanfav_i_8
                  - generic [ref=e295]:
                    - generic [ref=e298]: "7.4"
                    - button "Rate The Boroughs" [ref=e299] [cursor=pointer]
                  - link "View title page for The Boroughs" [ref=e302] [cursor=pointer]:
                    - /url: /title/tt27557289/?ref_=watch_fanfav_t_8
                    - text: The Boroughs
                  - generic [ref=e303]:
                    - button "Watch options" [ref=e304] [cursor=pointer]:
                      - generic [ref=e305]: Watch options
                    - link "Trailer" [ref=e307] [cursor=pointer]:
                      - /url: /video/vi1510591257/?ref_=watch_fanfav_tr_8
                      - generic [ref=e310]: Trailer
                - group [ref=e311]:
                  - group [ref=e312]:
                    - img "Off Campus" [ref=e314]
                    - button "Add to Watchlist" [ref=e315] [cursor=pointer]
                    - link "View title page for Off Campus" [ref=e320] [cursor=pointer]:
                      - /url: /title/tt33546863/?ref_=watch_fanfav_i_9
                  - generic [ref=e322]:
                    - generic [ref=e325]: "8.1"
                    - button "Rate Off Campus" [ref=e326] [cursor=pointer]
                  - link "View title page for Off Campus" [ref=e329] [cursor=pointer]:
                    - /url: /title/tt33546863/?ref_=watch_fanfav_t_9
                    - text: Off Campus
                  - generic [ref=e330]:
                    - button "Watch options" [ref=e331] [cursor=pointer]:
                      - generic [ref=e332]: Watch options
                    - link "Trailer" [ref=e334] [cursor=pointer]:
                      - /url: /video/vi1299237657/?ref_=watch_fanfav_tr_9
                      - generic [ref=e337]: Trailer
                - group [ref=e338]:
                  - group [ref=e339]:
                    - 'img "The Punisher: One Last Kill" [ref=e341]'
                    - button "Add to Watchlist" [ref=e342] [cursor=pointer]
                    - 'link "View title page for The Punisher: One Last Kill" [ref=e347] [cursor=pointer]':
                      - /url: /title/tt36042156/?ref_=watch_fanfav_i_10
                  - generic [ref=e349]:
                    - generic [ref=e352]: "7.1"
                    - 'button "Rate The Punisher: One Last Kill" [ref=e353] [cursor=pointer]'
                  - 'link "View title page for The Punisher: One Last Kill" [ref=e356] [cursor=pointer]':
                    - /url: /title/tt36042156/?ref_=watch_fanfav_t_10
                    - text: "The Punisher: One Last Kill"
                  - generic [ref=e357]:
                    - button "Watch options" [ref=e358] [cursor=pointer]:
                      - generic [ref=e359]: Watch options
                    - link "Trailer" [ref=e361] [cursor=pointer]:
                      - /url: /video/vi2250296089/?ref_=watch_fanfav_tr_10
                      - generic [ref=e364]: Trailer
                - group [ref=e365]:
                  - group [ref=e366]:
                    - img "Remarkably Bright Creatures" [ref=e368]
                    - button "Add to Watchlist" [ref=e369] [cursor=pointer]
                    - link "View title page for Remarkably Bright Creatures" [ref=e374] [cursor=pointer]:
                      - /url: /title/tt33100314/?ref_=watch_fanfav_i_11
                  - generic [ref=e376]:
                    - generic [ref=e379]: "7.7"
                    - button "Rate Remarkably Bright Creatures" [ref=e380] [cursor=pointer]
                  - link "View title page for Remarkably Bright Creatures" [ref=e383] [cursor=pointer]:
                    - /url: /title/tt33100314/?ref_=watch_fanfav_t_11
                    - text: Remarkably Bright Creatures
                  - generic [ref=e384]:
                    - button "Watch options" [ref=e385] [cursor=pointer]:
                      - generic [ref=e386]: Watch options
                    - link "Trailer" [ref=e388] [cursor=pointer]:
                      - /url: /video/vi1061145369/?ref_=watch_fanfav_tr_11
                      - generic [ref=e391]: Trailer
                - group [ref=e392]:
                  - group [ref=e393]:
                    - img "The Drama" [ref=e395]
                    - button "Add to Watchlist" [ref=e396] [cursor=pointer]
                    - link "View title page for The Drama" [ref=e401] [cursor=pointer]:
                      - /url: /title/tt33071426/?ref_=watch_fanfav_i_12
                  - generic [ref=e403]:
                    - generic [ref=e406]: "7.2"
                    - button "Rate The Drama" [ref=e407] [cursor=pointer]
                  - link "View title page for The Drama" [ref=e410] [cursor=pointer]:
                    - /url: /title/tt33071426/?ref_=watch_fanfav_t_12
                    - text: The Drama
                  - generic [ref=e411]:
                    - button "Watch options" [ref=e412] [cursor=pointer]:
                      - generic [ref=e413]: Watch options
                    - link "Trailer" [ref=e415] [cursor=pointer]:
                      - /url: /video/vi2680277785/?ref_=watch_fanfav_tr_12
                      - generic [ref=e418]: Trailer
              - generic [ref=e420]:
                - paragraph [ref=e421]: Browse these IMDb collections to find the perfect next movie or TV show to watch
                - generic [ref=e422]:
                  - button "Watch Guide" [ref=e423] [cursor=pointer]:
                    - generic [ref=e424]: Watch Guide
                  - button "Top Picks" [ref=e425] [cursor=pointer]:
                    - generic [ref=e426]: Top Picks
                  - button "From Your Watchlist" [ref=e427] [cursor=pointer]:
                    - generic [ref=e428]: From Your Watchlist
                  - button "Most Popular" [ref=e429] [cursor=pointer]:
                    - generic [ref=e430]: Most Popular
              - generic [ref=e433]:
                - group [ref=e434]:
                  - group [ref=e435]:
                    - img "Oppenheimer" [ref=e437]
                    - button "Add to Watchlist" [ref=e438] [cursor=pointer]
                    - link "View title page for Oppenheimer" [ref=e443] [cursor=pointer]:
                      - /url: /title/tt15398776/?ref_=watch_fanfav_i_13
                  - generic [ref=e445]:
                    - generic [ref=e448]: "8.2"
                    - button "Rate Oppenheimer" [ref=e449] [cursor=pointer]
                  - link "View title page for Oppenheimer" [ref=e452] [cursor=pointer]:
                    - /url: /title/tt15398776/?ref_=watch_fanfav_t_13
                    - text: Oppenheimer
                  - generic [ref=e453]:
                    - button "Watch options" [ref=e454] [cursor=pointer]:
                      - generic [ref=e455]: Watch options
                    - link "Trailer" [ref=e457] [cursor=pointer]:
                      - /url: /video/vi2053751833/?ref_=watch_fanfav_tr_13
                      - generic [ref=e460]: Trailer
                - group [ref=e461]:
                  - group [ref=e462]:
                    - 'img "Top Gun: Maverick" [ref=e464]'
                    - button "Add to Watchlist" [ref=e465] [cursor=pointer]
                    - 'link "View title page for Top Gun: Maverick" [ref=e470] [cursor=pointer]':
                      - /url: /title/tt1745960/?ref_=watch_fanfav_i_14
                  - generic [ref=e472]:
                    - generic [ref=e475]: "8.2"
                    - 'button "Rate Top Gun: Maverick" [ref=e476] [cursor=pointer]'
                  - 'link "View title page for Top Gun: Maverick" [ref=e479] [cursor=pointer]':
                    - /url: /title/tt1745960/?ref_=watch_fanfav_t_14
                    - text: "Top Gun: Maverick"
                  - generic [ref=e480]:
                    - button "Watch options" [ref=e481] [cursor=pointer]:
                      - generic [ref=e482]: Watch options
                    - link "Trailer" [ref=e484] [cursor=pointer]:
                      - /url: /video/vi632472089/?ref_=watch_fanfav_tr_14
                      - generic [ref=e487]: Trailer
                - group [ref=e488]:
                  - group [ref=e489]:
                    - img "Breaking Bad" [ref=e491]
                    - button "Add to Watchlist" [ref=e492] [cursor=pointer]
                    - link "View title page for Breaking Bad" [ref=e497] [cursor=pointer]:
                      - /url: /title/tt0903747/?ref_=watch_fanfav_i_15
                  - generic [ref=e499]:
                    - generic [ref=e502]: "9.5"
                    - button "Rate Breaking Bad" [ref=e503] [cursor=pointer]
                  - link "View title page for Breaking Bad" [ref=e506] [cursor=pointer]:
                    - /url: /title/tt0903747/?ref_=watch_fanfav_t_15
                    - text: Breaking Bad
                  - generic [ref=e507]:
                    - button "Watch options" [ref=e508] [cursor=pointer]:
                      - generic [ref=e509]: Watch options
                    - link "Trailer" [ref=e511] [cursor=pointer]:
                      - /url: /video/vi547929369/?ref_=watch_fanfav_tr_15
                      - generic [ref=e514]: Trailer
                - group [ref=e515]:
                  - group [ref=e516]:
                    - 'img "Dune: Part Two" [ref=e518]'
                    - button "Add to Watchlist" [ref=e519] [cursor=pointer]
                    - 'link "View title page for Dune: Part Two" [ref=e524] [cursor=pointer]':
                      - /url: /title/tt15239678/?ref_=watch_fanfav_i_16
                  - generic [ref=e526]:
                    - generic [ref=e529]: "8.4"
                    - 'button "Rate Dune: Part Two" [ref=e530] [cursor=pointer]'
                  - 'link "View title page for Dune: Part Two" [ref=e533] [cursor=pointer]':
                    - /url: /title/tt15239678/?ref_=watch_fanfav_t_16
                    - text: "Dune: Part Two"
                  - generic [ref=e534]:
                    - button "Watch options" [ref=e535] [cursor=pointer]:
                      - generic [ref=e536]: Watch options
                    - link "Trailer" [ref=e538] [cursor=pointer]:
                      - /url: /video/vi3332425241/?ref_=watch_fanfav_tr_16
                      - generic [ref=e541]: Trailer
                - group [ref=e542]:
                  - group [ref=e543]:
                    - img "Marty Supreme" [ref=e545]
                    - button "Add to Watchlist" [ref=e546] [cursor=pointer]
                    - link "View title page for Marty Supreme" [ref=e551] [cursor=pointer]:
                      - /url: /title/tt32916440/?ref_=watch_fanfav_i_17
                  - generic [ref=e553]:
                    - generic [ref=e556]: "7.6"
                    - button "Rate Marty Supreme" [ref=e557] [cursor=pointer]
                  - link "View title page for Marty Supreme" [ref=e560] [cursor=pointer]:
                    - /url: /title/tt32916440/?ref_=watch_fanfav_t_17
                    - text: Marty Supreme
                  - generic [ref=e561]:
                    - button "Watch options" [ref=e562] [cursor=pointer]:
                      - generic [ref=e563]: Watch options
                    - link "Trailer" [ref=e565] [cursor=pointer]:
                      - /url: /video/vi2729888537/?ref_=watch_fanfav_tr_17
                      - generic [ref=e568]: Trailer
                - group [ref=e569]:
                  - group [ref=e570]:
                    - img "Interstellar" [ref=e572]
                    - button "Add to Watchlist" [ref=e573] [cursor=pointer]
                    - link "View title page for Interstellar" [ref=e578] [cursor=pointer]:
                      - /url: /title/tt0816692/?ref_=watch_fanfav_i_18
                  - generic [ref=e580]:
                    - generic [ref=e583]: "8.7"
                    - button "Rate Interstellar" [ref=e584] [cursor=pointer]
                  - link "View title page for Interstellar" [ref=e587] [cursor=pointer]:
                    - /url: /title/tt0816692/?ref_=watch_fanfav_t_18
                    - text: Interstellar
                  - generic [ref=e588]:
                    - button "Watch options" [ref=e589] [cursor=pointer]:
                      - generic [ref=e590]: Watch options
                    - link "Trailer" [ref=e592] [cursor=pointer]:
                      - /url: /video/vi892845593/?ref_=watch_fanfav_tr_18
                      - generic [ref=e595]: Trailer
                - group [ref=e596]:
                  - group [ref=e597]:
                    - img "The Substance" [ref=e599]
                    - button "Add to Watchlist" [ref=e600] [cursor=pointer]
                    - link "View title page for The Substance" [ref=e605] [cursor=pointer]:
                      - /url: /title/tt17526714/?ref_=watch_fanfav_i_19
                  - generic [ref=e607]:
                    - generic [ref=e610]: "7.2"
                    - button "Rate The Substance" [ref=e611] [cursor=pointer]
                  - link "View title page for The Substance" [ref=e614] [cursor=pointer]:
                    - /url: /title/tt17526714/?ref_=watch_fanfav_t_19
                    - text: The Substance
                  - generic [ref=e615]:
                    - button "Watch options" [ref=e616] [cursor=pointer]:
                      - generic [ref=e617]: Watch options
                    - link "Trailer" [ref=e619] [cursor=pointer]:
                      - /url: /video/vi219400473/?ref_=watch_fanfav_tr_19
                      - generic [ref=e622]: Trailer
                - group [ref=e623]:
                  - group [ref=e624]:
                    - 'img "Dune: Part One" [ref=e626]'
                    - button "Add to Watchlist" [ref=e627] [cursor=pointer]
                    - 'link "View title page for Dune: Part One" [ref=e632] [cursor=pointer]':
                      - /url: /title/tt1160419/?ref_=watch_fanfav_i_20
                  - generic [ref=e634]:
                    - generic [ref=e637]: "8.0"
                    - 'button "Rate Dune: Part One" [ref=e638] [cursor=pointer]'
                  - 'link "View title page for Dune: Part One" [ref=e641] [cursor=pointer]':
                    - /url: /title/tt1160419/?ref_=watch_fanfav_t_20
                    - text: "Dune: Part One"
                  - generic [ref=e642]:
                    - button "Watch options" [ref=e643] [cursor=pointer]:
                      - generic [ref=e644]: Watch options
                    - link "Trailer" [ref=e646] [cursor=pointer]:
                      - /url: /video/vi3986080537/?ref_=watch_fanfav_tr_20
                      - generic [ref=e649]: Trailer
                - group [ref=e650]:
                  - group [ref=e651]:
                    - img "Sinners" [ref=e653]
                    - button "Add to Watchlist" [ref=e654] [cursor=pointer]
                    - link "View title page for Sinners" [ref=e659] [cursor=pointer]:
                      - /url: /title/tt31193180/?ref_=watch_fanfav_i_21
                  - generic [ref=e661]:
                    - generic [ref=e664]: "7.5"
                    - button "Rate Sinners" [ref=e665] [cursor=pointer]
                  - link "View title page for Sinners" [ref=e668] [cursor=pointer]:
                    - /url: /title/tt31193180/?ref_=watch_fanfav_t_21
                    - text: Sinners
                  - generic [ref=e669]:
                    - button "Watch options" [ref=e670] [cursor=pointer]:
                      - generic [ref=e671]: Watch options
                    - link "Trailer" [ref=e673] [cursor=pointer]:
                      - /url: /video/vi2383464729/?ref_=watch_fanfav_tr_21
                      - generic [ref=e676]: Trailer
                - group [ref=e677]:
                  - group [ref=e678]:
                    - img "Legends" [ref=e680]
                    - button "Add to Watchlist" [ref=e681] [cursor=pointer]
                    - link "View title page for Legends" [ref=e686] [cursor=pointer]:
                      - /url: /title/tt33265765/?ref_=watch_fanfav_i_22
                  - generic [ref=e688]:
                    - generic [ref=e691]: "7.9"
                    - button "Rate Legends" [ref=e692] [cursor=pointer]
                  - link "View title page for Legends" [ref=e695] [cursor=pointer]:
                    - /url: /title/tt33265765/?ref_=watch_fanfav_t_22
                    - text: Legends
                  - generic [ref=e696]:
                    - button "Watch options" [ref=e697] [cursor=pointer]:
                      - generic [ref=e698]: Watch options
                    - link "Trailer" [ref=e700] [cursor=pointer]:
                      - /url: /video/vi1478019865/?ref_=watch_fanfav_tr_22
                      - generic [ref=e703]: Trailer
                - group [ref=e704]:
                  - group [ref=e705]:
                    - 'img "Re: Zero - Starting Life in Another World" [ref=e707]'
                    - button "Add to Watchlist" [ref=e708] [cursor=pointer]
                    - 'link "View title page for Re: Zero - Starting Life in Another World" [ref=e713] [cursor=pointer]':
                      - /url: /title/tt5607616/?ref_=watch_fanfav_i_23
                  - generic [ref=e715]:
                    - generic [ref=e718]: "8.1"
                    - 'button "Rate Re: Zero - Starting Life in Another World" [ref=e719] [cursor=pointer]'
                  - 'link "View title page for Re: Zero - Starting Life in Another World" [ref=e722] [cursor=pointer]':
                    - /url: /title/tt5607616/?ref_=watch_fanfav_t_23
                    - text: "Re: Zero - Starting Life in Another World"
                  - generic [ref=e723]:
                    - button "Watch options" [ref=e724] [cursor=pointer]:
                      - generic [ref=e725]: Watch options
                    - link "Trailer" [ref=e727] [cursor=pointer]:
                      - /url: /video/vi1323682585/?ref_=watch_fanfav_tr_23
                      - generic [ref=e730]: Trailer
                - group [ref=e731]:
                  - group [ref=e732]:
                    - 'img "Avatar: The Way of Water" [ref=e734]'
                    - button "Add to Watchlist" [ref=e735] [cursor=pointer]
                    - 'link "View title page for Avatar: The Way of Water" [ref=e740] [cursor=pointer]':
                      - /url: /title/tt1630029/?ref_=watch_fanfav_i_24
                  - generic [ref=e742]:
                    - generic [ref=e745]: "7.5"
                    - 'button "Rate Avatar: The Way of Water" [ref=e746] [cursor=pointer]'
                  - 'link "View title page for Avatar: The Way of Water" [ref=e749] [cursor=pointer]':
                    - /url: /title/tt1630029/?ref_=watch_fanfav_t_24
                    - text: "Avatar: The Way of Water"
                  - generic [ref=e750]:
                    - button "Watch options" [ref=e751] [cursor=pointer]:
                      - generic [ref=e752]: Watch options
                    - link "Trailer" [ref=e754] [cursor=pointer]:
                      - /url: /video/vi437897241/?ref_=watch_fanfav_tr_24
                      - generic [ref=e757]: Trailer
                - group [ref=e758]:
                  - group [ref=e759]:
                    - img "The Sheep Detectives" [ref=e761]
                    - button "Add to Watchlist" [ref=e762] [cursor=pointer]
                    - link "View title page for The Sheep Detectives" [ref=e767] [cursor=pointer]:
                      - /url: /title/tt32565993/?ref_=watch_fanfav_i_25
                  - generic [ref=e769]:
                    - generic [ref=e772]: "7.7"
                    - button "Rate The Sheep Detectives" [ref=e773] [cursor=pointer]
                  - link "View title page for The Sheep Detectives" [ref=e776] [cursor=pointer]:
                    - /url: /title/tt32565993/?ref_=watch_fanfav_t_25
                    - text: The Sheep Detectives
                  - generic [ref=e777]:
                    - button "Add to Watchlist" [ref=e778] [cursor=pointer]:
                      - generic [ref=e780]: Watchlist
                    - link "Trailer" [ref=e782] [cursor=pointer]:
                      - /url: /video/vi2587544345/?ref_=watch_fanfav_tr_25
                      - generic [ref=e785]: Trailer
                - group [ref=e786]:
                  - group [ref=e787]:
                    - img "Half Man" [ref=e789]
                    - button "Add to Watchlist" [ref=e790] [cursor=pointer]
                    - link "View title page for Half Man" [ref=e795] [cursor=pointer]:
                      - /url: /title/tt32767294/?ref_=watch_fanfav_i_26
                  - generic [ref=e797]:
                    - generic [ref=e800]: "8.0"
                    - button "Rate Half Man" [ref=e801] [cursor=pointer]
                  - link "View title page for Half Man" [ref=e804] [cursor=pointer]:
                    - /url: /title/tt32767294/?ref_=watch_fanfav_t_26
                    - text: Half Man
                  - generic [ref=e805]:
                    - button "Watch options" [ref=e806] [cursor=pointer]:
                      - generic [ref=e807]: Watch options
                    - link "Trailer" [ref=e809] [cursor=pointer]:
                      - /url: /video/vi101174041/?ref_=watch_fanfav_tr_26
                      - generic [ref=e812]: Trailer
                - group [ref=e813]:
                  - group [ref=e814]:
                    - img "One Battle After Another" [ref=e816]
                    - button "Add to Watchlist" [ref=e817] [cursor=pointer]
                    - link "View title page for One Battle After Another" [ref=e822] [cursor=pointer]:
                      - /url: /title/tt30144839/?ref_=watch_fanfav_i_27
                  - generic [ref=e824]:
                    - generic [ref=e827]: "7.6"
                    - button "Rate One Battle After Another" [ref=e828] [cursor=pointer]
                  - link "View title page for One Battle After Another" [ref=e831] [cursor=pointer]:
                    - /url: /title/tt30144839/?ref_=watch_fanfav_t_27
                    - text: One Battle After Another
                  - generic [ref=e832]:
                    - button "Watch options" [ref=e833] [cursor=pointer]:
                      - generic [ref=e834]: Watch options
                    - link "Trailer" [ref=e836] [cursor=pointer]:
                      - /url: /video/vi1644808217/?ref_=watch_fanfav_tr_27
                      - generic [ref=e839]: Trailer
                - group [ref=e840]:
                  - group [ref=e841]:
                    - img "Everything Everywhere All at Once" [ref=e843]
                    - button "Add to Watchlist" [ref=e844] [cursor=pointer]
                    - link "View title page for Everything Everywhere All at Once" [ref=e849] [cursor=pointer]:
                      - /url: /title/tt6710474/?ref_=watch_fanfav_i_28
                  - generic [ref=e851]:
                    - generic [ref=e854]: "7.7"
                    - button "Rate Everything Everywhere All at Once" [ref=e855] [cursor=pointer]
                  - link "View title page for Everything Everywhere All at Once" [ref=e858] [cursor=pointer]:
                    - /url: /title/tt6710474/?ref_=watch_fanfav_t_28
                    - text: Everything Everywhere All at Once
                  - generic [ref=e859]:
                    - button "Watch options" [ref=e860] [cursor=pointer]:
                      - generic [ref=e861]: Watch options
                    - link "Trailer" [ref=e863] [cursor=pointer]:
                      - /url: /video/vi1708573209/?ref_=watch_fanfav_tr_28
                      - generic [ref=e866]: Trailer
                - group [ref=e867]:
                  - group [ref=e868]:
                    - img "Anora" [ref=e870]
                    - button "Add to Watchlist" [ref=e871] [cursor=pointer]
                    - link "View title page for Anora" [ref=e876] [cursor=pointer]:
                      - /url: /title/tt28607951/?ref_=watch_fanfav_i_29
                  - generic [ref=e878]:
                    - generic [ref=e881]: "7.4"
                    - button "Rate Anora" [ref=e882] [cursor=pointer]
                  - link "View title page for Anora" [ref=e885] [cursor=pointer]:
                    - /url: /title/tt28607951/?ref_=watch_fanfav_t_29
                    - text: Anora
                  - generic [ref=e886]:
                    - button "Watch options" [ref=e887] [cursor=pointer]:
                      - generic [ref=e888]: Watch options
                    - link "Trailer" [ref=e890] [cursor=pointer]:
                      - /url: /video/vi944621081/?ref_=watch_fanfav_tr_29
                      - generic [ref=e893]: Trailer
                - group [ref=e894]:
                  - group [ref=e895]:
                    - img "All Quiet on the Western Front" [ref=e897]
                    - button "Add to Watchlist" [ref=e898] [cursor=pointer]
                    - link "View title page for All Quiet on the Western Front" [ref=e903] [cursor=pointer]:
                      - /url: /title/tt1016150/?ref_=watch_fanfav_i_30
                  - generic [ref=e905]:
                    - generic [ref=e908]: "7.8"
                    - button "Rate All Quiet on the Western Front" [ref=e909] [cursor=pointer]
                  - link "View title page for All Quiet on the Western Front" [ref=e912] [cursor=pointer]:
                    - /url: /title/tt1016150/?ref_=watch_fanfav_t_30
                    - text: All Quiet on the Western Front
                  - generic [ref=e913]:
                    - button "Watch options" [ref=e914] [cursor=pointer]:
                      - generic [ref=e915]: Watch options
                    - link "Trailer" [ref=e917] [cursor=pointer]:
                      - /url: /video/vi1789248793/?ref_=watch_fanfav_tr_30
                      - generic [ref=e920]: Trailer
                - group [ref=e921]:
                  - group [ref=e922]:
                    - img "Bugonia" [ref=e924]
                    - button "Add to Watchlist" [ref=e925] [cursor=pointer]
                    - link "View title page for Bugonia" [ref=e930] [cursor=pointer]:
                      - /url: /title/tt12300742/?ref_=watch_fanfav_i_31
                  - generic [ref=e932]:
                    - generic [ref=e935]: "7.4"
                    - button "Rate Bugonia" [ref=e936] [cursor=pointer]
                  - link "View title page for Bugonia" [ref=e939] [cursor=pointer]:
                    - /url: /title/tt12300742/?ref_=watch_fanfav_t_31
                    - text: Bugonia
                  - generic [ref=e940]:
                    - button "Watch options" [ref=e941] [cursor=pointer]:
                      - generic [ref=e942]: Watch options
                    - link "Trailer" [ref=e944] [cursor=pointer]:
                      - /url: /video/vi2994194457/?ref_=watch_fanfav_tr_31
                      - generic [ref=e947]: Trailer
                - group [ref=e948]:
                  - group [ref=e949]:
                    - img "A Knight of the Seven Kingdoms" [ref=e951]
                    - button "Add to Watchlist" [ref=e952] [cursor=pointer]
                    - link "View title page for A Knight of the Seven Kingdoms" [ref=e957] [cursor=pointer]:
                      - /url: /title/tt27497448/?ref_=watch_fanfav_i_32
                  - generic [ref=e959]:
                    - generic [ref=e962]: "8.7"
                    - button "Rate A Knight of the Seven Kingdoms" [ref=e963] [cursor=pointer]
                  - link "View title page for A Knight of the Seven Kingdoms" [ref=e966] [cursor=pointer]:
                    - /url: /title/tt27497448/?ref_=watch_fanfav_t_32
                    - text: A Knight of the Seven Kingdoms
                  - generic [ref=e967]:
                    - button "Watch options" [ref=e968] [cursor=pointer]:
                      - generic [ref=e969]: Watch options
                    - link "Trailer" [ref=e971] [cursor=pointer]:
                      - /url: /video/vi2380712729/?ref_=watch_fanfav_tr_32
                      - generic [ref=e974]: Trailer
                - group [ref=e975]:
                  - group [ref=e976]:
                    - img "Poor Things" [ref=e978]
                    - button "Add to Watchlist" [ref=e979] [cursor=pointer]
                    - link "View title page for Poor Things" [ref=e984] [cursor=pointer]:
                      - /url: /title/tt14230458/?ref_=watch_fanfav_i_33
                  - generic [ref=e986]:
                    - generic [ref=e989]: "7.7"
                    - button "Rate Poor Things" [ref=e990] [cursor=pointer]
                  - link "View title page for Poor Things" [ref=e993] [cursor=pointer]:
                    - /url: /title/tt14230458/?ref_=watch_fanfav_t_33
                    - text: Poor Things
                  - generic [ref=e994]:
                    - button "Watch options" [ref=e995] [cursor=pointer]:
                      - generic [ref=e996]: Watch options
                    - link "Trailer" [ref=e998] [cursor=pointer]:
                      - /url: /video/vi4157392665/?ref_=watch_fanfav_tr_33
                      - generic [ref=e1001]: Trailer
                - group [ref=e1002]:
                  - group [ref=e1003]:
                    - img "Weapons" [ref=e1005]
                    - button "Add to Watchlist" [ref=e1006] [cursor=pointer]
                    - link "View title page for Weapons" [ref=e1011] [cursor=pointer]:
                      - /url: /title/tt26581740/?ref_=watch_fanfav_i_34
                  - generic [ref=e1013]:
                    - generic [ref=e1016]: "7.4"
                    - button "Rate Weapons" [ref=e1017] [cursor=pointer]
                  - link "View title page for Weapons" [ref=e1020] [cursor=pointer]:
                    - /url: /title/tt26581740/?ref_=watch_fanfav_t_34
                    - text: Weapons
                  - generic [ref=e1021]:
                    - button "Watch options" [ref=e1022] [cursor=pointer]:
                      - generic [ref=e1023]: Watch options
                    - link "Trailer" [ref=e1025] [cursor=pointer]:
                      - /url: /video/vi2231289881/?ref_=watch_fanfav_tr_34
                      - generic [ref=e1028]: Trailer
                - group [ref=e1029]:
                  - group [ref=e1030]:
                    - img "Anatomy of a Fall" [ref=e1032]
                    - button "Add to Watchlist" [ref=e1033] [cursor=pointer]
                    - link "View title page for Anatomy of a Fall" [ref=e1038] [cursor=pointer]:
                      - /url: /title/tt17009710/?ref_=watch_fanfav_i_35
                  - generic [ref=e1040]:
                    - generic [ref=e1043]: "7.6"
                    - button "Rate Anatomy of a Fall" [ref=e1044] [cursor=pointer]
                  - link "View title page for Anatomy of a Fall" [ref=e1047] [cursor=pointer]:
                    - /url: /title/tt17009710/?ref_=watch_fanfav_t_35
                    - text: Anatomy of a Fall
                  - generic [ref=e1048]:
                    - button "Watch options" [ref=e1049] [cursor=pointer]:
                      - generic [ref=e1050]: Watch options
                    - link "Trailer" [ref=e1052] [cursor=pointer]:
                      - /url: /video/vi2767308569/?ref_=watch_fanfav_tr_35
                      - generic [ref=e1055]: Trailer
                - group [ref=e1056]:
                  - group [ref=e1057]:
                    - img "Wicked" [ref=e1059]
                    - button "Add to Watchlist" [ref=e1060] [cursor=pointer]
                    - link "View title page for Wicked" [ref=e1065] [cursor=pointer]:
                      - /url: /title/tt1262426/?ref_=watch_fanfav_i_36
                  - generic [ref=e1067]:
                    - generic [ref=e1070]: "7.3"
                    - button "Rate Wicked" [ref=e1071] [cursor=pointer]
                  - link "View title page for Wicked" [ref=e1074] [cursor=pointer]:
                    - /url: /title/tt1262426/?ref_=watch_fanfav_t_36
                    - text: Wicked
                  - generic [ref=e1075]:
                    - button "Watch options" [ref=e1076] [cursor=pointer]:
                      - generic [ref=e1077]: Watch options
                    - link "Trailer" [ref=e1079] [cursor=pointer]:
                      - /url: /video/vi1818805785/?ref_=watch_fanfav_tr_36
                      - generic [ref=e1082]: Trailer
                - group [ref=e1083]:
                  - group [ref=e1084]:
                    - img "The Whale" [ref=e1086]
                    - button "Add to Watchlist" [ref=e1087] [cursor=pointer]
                    - link "View title page for The Whale" [ref=e1092] [cursor=pointer]:
                      - /url: /title/tt13833688/?ref_=watch_fanfav_i_37
                  - generic [ref=e1094]:
                    - generic [ref=e1097]: "7.6"
                    - button "Rate The Whale" [ref=e1098] [cursor=pointer]
                  - link "View title page for The Whale" [ref=e1101] [cursor=pointer]:
                    - /url: /title/tt13833688/?ref_=watch_fanfav_t_37
                    - text: The Whale
                  - generic [ref=e1102]:
                    - button "Watch options" [ref=e1103] [cursor=pointer]:
                      - generic [ref=e1104]: Watch options
                    - link "Trailer" [ref=e1106] [cursor=pointer]:
                      - /url: /video/vi2833761561/?ref_=watch_fanfav_tr_37
                      - generic [ref=e1109]: Trailer
                - group [ref=e1110]:
                  - group [ref=e1111]:
                    - img "Conclave" [ref=e1113]
                    - button "Add to Watchlist" [ref=e1114] [cursor=pointer]
                    - link "View title page for Conclave" [ref=e1119] [cursor=pointer]:
                      - /url: /title/tt20215234/?ref_=watch_fanfav_i_38
                  - generic [ref=e1121]:
                    - generic [ref=e1124]: "7.4"
                    - button "Rate Conclave" [ref=e1125] [cursor=pointer]
                  - link "View title page for Conclave" [ref=e1128] [cursor=pointer]:
                    - /url: /title/tt20215234/?ref_=watch_fanfav_t_38
                    - text: Conclave
                  - generic [ref=e1129]:
                    - button "Watch options" [ref=e1130] [cursor=pointer]:
                      - generic [ref=e1131]: Watch options
                    - link "Trailer" [ref=e1133] [cursor=pointer]:
                      - /url: /video/vi659473945/?ref_=watch_fanfav_tr_38
                      - generic [ref=e1136]: Trailer
                - group [ref=e1137]:
                  - group [ref=e1138]:
                    - img "Godzilla Minus One" [ref=e1140]
                    - button "Add to Watchlist" [ref=e1141] [cursor=pointer]
                    - link "View title page for Godzilla Minus One" [ref=e1146] [cursor=pointer]:
                      - /url: /title/tt23289160/?ref_=watch_fanfav_i_39
                  - generic [ref=e1148]:
                    - generic [ref=e1151]: "7.7"
                    - button "Rate Godzilla Minus One" [ref=e1152] [cursor=pointer]
                  - link "View title page for Godzilla Minus One" [ref=e1155] [cursor=pointer]:
                    - /url: /title/tt23289160/?ref_=watch_fanfav_t_39
                    - text: Godzilla Minus One
                  - generic [ref=e1156]:
                    - button "Watch options" [ref=e1157] [cursor=pointer]:
                      - generic [ref=e1158]: Watch options
                    - link "Trailer" [ref=e1160] [cursor=pointer]:
                      - /url: /video/vi2969880089/?ref_=watch_fanfav_tr_39
                      - generic [ref=e1163]: Trailer
                - group [ref=e1164]:
                  - group [ref=e1165]:
                    - img "Flow" [ref=e1167]
                    - button "Add to Watchlist" [ref=e1168] [cursor=pointer]
                    - link "View title page for Flow" [ref=e1173] [cursor=pointer]:
                      - /url: /title/tt4772188/?ref_=watch_fanfav_i_40
                  - generic [ref=e1175]:
                    - generic [ref=e1178]: "7.8"
                    - button "Rate Flow" [ref=e1179] [cursor=pointer]
                  - link "View title page for Flow" [ref=e1182] [cursor=pointer]:
                    - /url: /title/tt4772188/?ref_=watch_fanfav_t_40
                    - text: Flow
                  - generic [ref=e1183]:
                    - button "Watch options" [ref=e1184] [cursor=pointer]:
                      - generic [ref=e1185]: Watch options
                    - link "Trailer" [ref=e1187] [cursor=pointer]:
                      - /url: /video/vi358598169/?ref_=watch_fanfav_tr_40
                      - generic [ref=e1190]: Trailer
                - group [ref=e1191]:
                  - group [ref=e1192]:
                    - img "The Holdovers" [ref=e1194]
                    - button "Add to Watchlist" [ref=e1195] [cursor=pointer]
                    - link "View title page for The Holdovers" [ref=e1200] [cursor=pointer]:
                      - /url: /title/tt14849194/?ref_=watch_fanfav_i_41
                  - generic [ref=e1202]:
                    - generic [ref=e1205]: "7.9"
                    - button "Rate The Holdovers" [ref=e1206] [cursor=pointer]
                  - link "View title page for The Holdovers" [ref=e1209] [cursor=pointer]:
                    - /url: /title/tt14849194/?ref_=watch_fanfav_t_41
                    - text: The Holdovers
                  - generic [ref=e1210]:
                    - button "Watch options" [ref=e1211] [cursor=pointer]:
                      - generic [ref=e1212]: Watch options
                    - link "Trailer" [ref=e1214] [cursor=pointer]:
                      - /url: /video/vi2476001049/?ref_=watch_fanfav_tr_41
                      - generic [ref=e1217]: Trailer
                - group [ref=e1218]:
                  - group [ref=e1219]:
                    - img "The Zone of Interest" [ref=e1221]
                    - button "Add to Watchlist" [ref=e1222] [cursor=pointer]
                    - link "View title page for The Zone of Interest" [ref=e1227] [cursor=pointer]:
                      - /url: /title/tt7160372/?ref_=watch_fanfav_i_42
                  - generic [ref=e1229]:
                    - generic [ref=e1232]: "7.3"
                    - button "Rate The Zone of Interest" [ref=e1233] [cursor=pointer]
                  - link "View title page for The Zone of Interest" [ref=e1236] [cursor=pointer]:
                    - /url: /title/tt7160372/?ref_=watch_fanfav_t_42
                    - text: The Zone of Interest
                  - generic [ref=e1237]:
                    - button "Watch options" [ref=e1238] [cursor=pointer]:
                      - generic [ref=e1239]: Watch options
                    - link "Trailer" [ref=e1241] [cursor=pointer]:
                      - /url: /video/vi1812055833/?ref_=watch_fanfav_tr_42
                      - generic [ref=e1244]: Trailer
                - group [ref=e1245]:
                  - group [ref=e1246]:
                    - generic [ref=e1247]:
                      - img "The Brutalist"
                    - button "Add to Watchlist" [ref=e1248] [cursor=pointer]
                    - link "View title page for The Brutalist" [ref=e1253] [cursor=pointer]:
                      - /url: /title/tt8999762/?ref_=watch_fanfav_i_43
                  - generic [ref=e1255]:
                    - generic [ref=e1258]: "7.2"
                    - button "Rate The Brutalist" [ref=e1259] [cursor=pointer]
                  - link "View title page for The Brutalist" [ref=e1262] [cursor=pointer]:
                    - /url: /title/tt8999762/?ref_=watch_fanfav_t_43
                    - text: The Brutalist
                  - generic [ref=e1263]:
                    - button "Watch options" [ref=e1264] [cursor=pointer]:
                      - generic [ref=e1265]: Watch options
                    - link "Trailer" [ref=e1267] [cursor=pointer]:
                      - /url: /video/vi2364786969/?ref_=watch_fanfav_tr_43
                      - generic [ref=e1270]: Trailer
                - group [ref=e1271]:
                  - group [ref=e1272]:
                    - generic [ref=e1273]:
                      - img "CODA"
                    - button "Add to Watchlist" [ref=e1274] [cursor=pointer]
                    - link "View title page for CODA" [ref=e1279] [cursor=pointer]:
                      - /url: /title/tt10366460/?ref_=watch_fanfav_i_44
                  - generic [ref=e1281]:
                    - generic [ref=e1284]: "8.0"
                    - button "Rate CODA" [ref=e1285] [cursor=pointer]
                  - link "View title page for CODA" [ref=e1288] [cursor=pointer]:
                    - /url: /title/tt10366460/?ref_=watch_fanfav_t_44
                    - text: CODA
                  - generic [ref=e1289]:
                    - button "Watch options" [ref=e1290] [cursor=pointer]:
                      - generic [ref=e1291]: Watch options
                    - link "Trailer" [ref=e1293] [cursor=pointer]:
                      - /url: /video/vi3832463385/?ref_=watch_fanfav_tr_44
                      - generic [ref=e1296]: Trailer
                - group [ref=e1297]:
                  - group [ref=e1298]:
                    - generic [ref=e1299]:
                      - img "A Real Pain"
                    - button "Add to Watchlist" [ref=e1300] [cursor=pointer]
                    - link "View title page for A Real Pain" [ref=e1305] [cursor=pointer]:
                      - /url: /title/tt21823606/?ref_=watch_fanfav_i_45
                  - generic [ref=e1307]:
                    - generic [ref=e1310]: "7.0"
                    - button "Rate A Real Pain" [ref=e1311] [cursor=pointer]
                  - link "View title page for A Real Pain" [ref=e1314] [cursor=pointer]:
                    - /url: /title/tt21823606/?ref_=watch_fanfav_t_45
                    - text: A Real Pain
                  - generic [ref=e1315]:
                    - button "Watch options" [ref=e1316] [cursor=pointer]:
                      - generic [ref=e1317]: Watch options
                    - link "Trailer" [ref=e1319] [cursor=pointer]:
                      - /url: /video/vi2556282393/?ref_=watch_fanfav_tr_45
                      - generic [ref=e1322]: Trailer
                - group [ref=e1323]:
                  - group [ref=e1324]:
                    - generic [ref=e1325]:
                      - img "I'm Still Here"
                    - button "Add to Watchlist" [ref=e1326] [cursor=pointer]
                    - link "View title page for I'm Still Here" [ref=e1331] [cursor=pointer]:
                      - /url: /title/tt14961016/?ref_=watch_fanfav_i_46
                  - generic [ref=e1333]:
                    - generic [ref=e1336]: "8.1"
                    - button "Rate I'm Still Here" [ref=e1337] [cursor=pointer]
                  - link "View title page for I'm Still Here" [ref=e1340] [cursor=pointer]:
                    - /url: /title/tt14961016/?ref_=watch_fanfav_t_46
                    - text: I'm Still Here
                  - generic [ref=e1341]:
                    - button "Watch options" [ref=e1342] [cursor=pointer]:
                      - generic [ref=e1343]: Watch options
                    - link "Trailer" [ref=e1345] [cursor=pointer]:
                      - /url: /video/vi177260825/?ref_=watch_fanfav_tr_46
                      - generic [ref=e1348]: Trailer
                - group [ref=e1349]:
                  - group [ref=e1350]:
                    - generic [ref=e1351]:
                      - img "The Dark Knight"
                    - button "Add to Watchlist" [ref=e1352] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e1357] [cursor=pointer]:
                      - /url: /title/tt0468569/?ref_=watch_fanfav_i_47
                  - generic [ref=e1359]:
                    - generic [ref=e1362]: "9.1"
                    - button "Rate The Dark Knight" [ref=e1363] [cursor=pointer]
                  - link "View title page for The Dark Knight" [ref=e1366] [cursor=pointer]:
                    - /url: /title/tt0468569/?ref_=watch_fanfav_t_47
                    - text: The Dark Knight
                  - generic [ref=e1367]:
                    - button "Watch options" [ref=e1368] [cursor=pointer]:
                      - generic [ref=e1369]: Watch options
                    - link "Trailer" [ref=e1371] [cursor=pointer]:
                      - /url: /video/vi324468761/?ref_=watch_fanfav_tr_47
                      - generic [ref=e1374]: Trailer
                - group [ref=e1375]:
                  - group [ref=e1376]:
                    - generic [ref=e1377]:
                      - img "The Boy and the Heron"
                    - button "Add to Watchlist" [ref=e1378] [cursor=pointer]
                    - link "View title page for The Boy and the Heron" [ref=e1383] [cursor=pointer]:
                      - /url: /title/tt6587046/?ref_=watch_fanfav_i_48
                  - generic [ref=e1385]:
                    - generic [ref=e1388]: "7.3"
                    - button "Rate The Boy and the Heron" [ref=e1389] [cursor=pointer]
                  - link "View title page for The Boy and the Heron" [ref=e1392] [cursor=pointer]:
                    - /url: /title/tt6587046/?ref_=watch_fanfav_t_48
                    - text: The Boy and the Heron
                  - generic [ref=e1393]:
                    - button "Watch options" [ref=e1394] [cursor=pointer]:
                      - generic [ref=e1395]: Watch options
                    - link "Trailer" [ref=e1397] [cursor=pointer]:
                      - /url: /video/vi1914357529/?ref_=watch_fanfav_tr_48
                      - generic [ref=e1400]: Trailer
    - generic [ref=e1404]:
      - heading "Recently viewed" [level=3] [ref=e1407]
      - generic [ref=e1409]: You have no recently viewed pages
    - contentinfo [ref=e1410]:
      - link "Sign in for more access" [ref=e1412] [cursor=pointer]:
        - /url: /registration/signin/?u=%2Fwhat-to-watch%2F&ref_=watch_fanfav_ftr_reg
        - generic [ref=e1413]: Sign in for more access
      - generic [ref=e1414]:
        - generic [ref=e1415]:
          - generic [ref=e1416]:
            - generic [ref=e1417]: Follow IMDb on social
            - link "TikTok" [ref=e1418] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e1420] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e1423] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e1425] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e1427] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e1429]:
            - generic [ref=e1430]:
              - generic [ref=e1431]: Get the IMDb app
              - generic [ref=e1432]: For Android and iOS
            - group [ref=e1434]:
              - img "Get the IMDb app" [ref=e1436]
              - link "For Android and iOS" [ref=e1437] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e1439]:
          - link "Help" [ref=e1440] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e1442] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e1444] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e1446] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e1448] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e1450]:
          - link "Press Room" [ref=e1451] [cursor=pointer]:
            - /url: /pressroom/?ref_=watch_fanfav_ftr
          - link "Advertising" [ref=e1452] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e1454] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e1456] [cursor=pointer]:
            - /url: /conditions/?ref_=watch_fanfav_ftr
          - link "Privacy Policy" [ref=e1457] [cursor=pointer]:
            - /url: /privacy/?ref_=watch_fanfav_ftr
          - generic [ref=e1458]:
            - link "Your Ads Privacy Choices" [ref=e1459] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=watch_fanfav_ftr
              - img [ref=e1460]
            - link "Your Ads Privacy Choices" [ref=e1472] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=watch_fanfav_ftr
      - img "IMDb, an Amazon company" [ref=e1474]
      - paragraph [ref=e1510]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e1511] [cursor=pointer]:
      - generic [ref=e1514]: Back to top
    - img
    - status
    - img
  - alert [ref=e1515]: What to Watch - IMDb
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('IMDb What to Watch - Functional Tests', () => {
  4   | 
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await page.goto('https://www.imdb.com/what-to-watch/');
  7   |   });
  8   | 
  9   |   test.afterEach(async () => {
  10  |     console.log('Test completed');
  11  |   });
  12  | 
  13  |   //1
  14  |   test('Page loads with main UI components', async ({ page }) => {
  15  |     await expect(page).toHaveURL(/what-to-watch/);
  16  |     await expect(page.locator('main')).toBeVisible();
  17  |   });
  18  | 
  19  |   //2
  20  |   test('Navigation menu is functional', async ({ page }) => {
  21  |     const navLinks = page.locator('nav a');
  22  |     await expect(navLinks.first()).toBeVisible();
  23  |     const count = await navLinks.count();
  24  |     expect(count).toBeGreaterThan(0);
  25  |   });
  26  | 
  27  |   //3
  28  |    test('Search bar accepts input', async ({ page }) => {
  29  |     const search = page.getByPlaceholder(/Search IMDb/i);
  30  |     await expect(search).toBeVisible();
  31  | 
  32  |     await search.fill('Batman');
  33  |     await expect(search).toHaveValue('Batman');
  34  |   });
  35  | 
  36  |   //4
  37  |   test('Recommendation content visible', async ({ page }) => {
  38  |     await expect(page.locator('main')).toContainText(/Watch|Recommended|Trending/i);
  39  |   });
  40  | 
  41  |   //5
  42  |   test('Page reload stability', async ({ page }) => {
  43  |     await page.reload();
  44  |     await expect(page).toHaveURL(/what-to-watch/);
  45  |   });
  46  | 
  47  |   //6
  48  |   test('Mobile view works', async ({ page }) => {
  49  |     await page.setViewportSize({ width: 375, height: 812 });
  50  |     await expect(page.locator('main')).toBeVisible();
  51  |   });
  52  | 
  53  |   //7
  54  |     test('No error messages', async ({ page }) => {
  55  |     const text = await page.textContent('body');
  56  |     expect(text).not.toContain('Error');
  57  |   });
  58  | 
  59  |   //8
  60  |     test('TC09 - Page scroll works', async ({ page }) => {
  61  |     await page.mouse.wheel(0, 2000);
  62  |   });
  63  | 
  64  |   //9
  65  |     test('TC11 - Links are present and clickable', async ({ page }) => {
  66  |     await expect(page.locator('a').first()).toBeVisible();
  67  |   });
  68  | 
  69  | //10
  70  | test('Search functionality works', async ({ page }) => {
  71  |   await page.getByTestId('suggestion-search').click();
  72  |   await page.getByTestId('suggestion-search').fill('punisher');
  73  |   await page.goto('https://www.imdb.com/title/tt5675620/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_punisher');
  74  |   await expect(page.locator('h1')).toContainText('The Punisher');
  75  | });
  76  | 
  77  | //11
  78  | test('Prime Video links are functional', async ({ page }) => {
  79  |   await page.getByRole('link', { name: 'Everything New on Prime Video' }).click();
  80  |   await page.locator('ul').filter({ hasText: /^1\. A Shot in the Dark$/ }).click();
  81  |   await expect(page.getByRole('link', { name: 'Watch on Prime Video' }).first()).toBeVisible(); 
  82  | });
  83  | 
  84  | //12
  85  | test('Fan Favorites section is visible', async ({ page }) => {
  86  |     await page.getByRole('tab', { name: 'FAN FAVORITES' }).click();
  87  |     await expect(page).toHaveURL(/what-to-watch\/fan-favorites/);
  88  | });
  89  | 
  90  | //13
  91  | test('Movies load correctly', async ({ page }) => {
  92  |   await page.getByRole('tab', { name: 'FAN FAVORITES' }).click();
> 93  |   await page.getByRole('link', { name: 'View title page for Sapne Vs' }).first().click();
      |                                                                                  ^ Error: locator.click: Test timeout of 90000ms exceeded.
  94  |   await expect(page.getByRole('link', { name: 'View ’Sapne Vs Everyone’' })).toBeVisible(); 
  95  | });
  96  | 
  97  | //14
  98  |  test('Category selector works', async ({ page }) => {
  99  |   await page.getByTestId('category-selector-button').click();
  100 |   await page.locator('.ipc-icon.ipc-icon--arrow-drop-down.ipc-btn__icon').first().click();
  101 |   await  expect(page.locator('.ipc-icon.ipc-icon--arrow-drop-down.ipc-btn__icon').first()).toBeVisible(); 
  102 |  });
  103 | 
  104 | //15
  105 |  test('Heading is visible', async ({ page }) => {
  106 |   await expect(page.getByRole('heading', { name: 'What to Watch - IMDb' })).toBeVisible();
  107 |  });
  108 | 
  109 | 
  110 | });
```