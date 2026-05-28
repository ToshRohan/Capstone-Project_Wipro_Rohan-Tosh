# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_homepage.spec.js >> IMDb Homepage >> fan favorites
- Location: tests\imdb_homepage.spec.js:74:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Fan favorites' })
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
      - link "Sign in" [ref=e55] [cursor=pointer]:
        - /url: /registration/signin/?u=%2F&ref_=hm_nv_generic_lgin
        - generic [ref=e56]: Sign in
      - generic "Toggle language selector" [ref=e59] [cursor=pointer]:
        - generic [ref=e61]: EN
      - status
      - status
    - main [ref=e64]:
      - iframe [ref=e66]:
        
      - complementary "Sponsored Content" [ref=e71]:
        - iframe [ref=e73]:
          - link "Sponsored Content" [ref=f2e2] [cursor=pointer]:
            - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RMfNkRbP8m35J41RnuHvS8IAAAGeb-GNUAMAAADKAUFvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDIgICBJc4SK/clv1c_ek-gwXsxHdDCDblFk0EOcivQZ2tpqhMWgi0J8NDAMOLHBQRVWdLi-1mP1eZFJm01dRc9f72zWyDBiCr50SRhm8jexE52YPZvTWhhQaMeYqrOhRBrykjh0HaDLtBiP9IBzXHt-XaptgOiZHsibG2e3u6IhWNIdjUrk0aej3sFQVL52XAUiRhMrGRIvuAWVo7dNVCc2urL-P1hNwyy-ALQaBpzkNOoDmC16-FICkCpOxkzHiGPyedHJ-ITNbYmxEtIymTxtPa0tmIaXgADFXMG2TcWADoEbFmNxVxuYb20DUSw8Q6GEO2WLdxiqLEoRTdLUzURnh8JwDeIr798DP0093MvO-dBgVfAoTQ3eahVsVlcSI27S7KjazRomvGHlDhPerLTFmQxuZ0wL8jfqO5haLdWBp8jFK270o0kwNrRbVpYeDQbcYcn7EgZqgNKm9AUNuLUDQTgfqn2Uc-UEwchbRFkGcTAliti_Xnrj1Ki0JhE6xtOPxzq135skn_OYuxp4QTgVzWSiCKDEok9Q3AGb7x0WPPyJgGjH2QVxL1G0U2DWtJa5IhYFk1MxvZOhzGHD5QKyaNq2Emo_5D8_uVnD06nRDYCWbieW94SXFabQ1TyNC_E4IJmy_9V52fSN1gWT_ASjGQS4aHcoOI5iJYSQZSYDhXijKiaNqFUWV4C7h_yFOwvQQUp2VJirS4ZiWymcomcwFbsitXfKD7l8Z7-YHiBmCXQn0WqfEz5AUyWIIv197HKfScv/https://primevideo.com/detail/amzn1.dv.gti.323e3624-9644-491a-bf4e-7a4abaca2d06/?aref=4Le3lQtcfC&ref_=dvm_crs_imd_in_s_offcampuss1
            - img "Sponsored Content" [ref=f2e3]
        - button "Get information, provide feedback or report sponsored ad" [ref=e74] [cursor=pointer]: SPONSORED
      - generic [ref=e77]:
        - generic [ref=e80]:
          - figure [ref=e82]:
            - generic [ref=e83]:
              - group [ref=e84]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e86]
                - button "Add to Watchlist" [ref=e87] [cursor=pointer]
                - generic "Rolling Credits With Danielle Macdonald" [ref=e92]
              - group [ref=e94] [cursor=pointer]:
                - img "Rolling With Danielle Macdonald" [ref=e96]
                - generic "Rolling With Danielle Macdonald" [ref=e97]:
                  - generic [ref=e104]:
                    - generic [ref=e105]:
                      - generic [ref=e106]: Rolling With Danielle Macdonald
                      - generic [ref=e107]: 4:28
                    - generic [ref=e108]: Catch Up With the 'Saccharine' Star
                    - generic [ref=e109]:
                      - img "45 people liked this video" [ref=e110]
                      - text: "45"
                      - generic [ref=e112]:
                        - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e113]
                        - text: "26"
          - figure [ref=e185]:
            - generic [ref=e186]:
              - group [ref=e187]:
                - img "Vought Rising" [ref=e189]
                - button "Add to Watchlist" [ref=e190] [cursor=pointer]
                - generic "Vought Rising" [ref=e195]
              - group [ref=e197] [cursor=pointer]:
                - img "\"Vought Rising\"" [ref=e199]
                - generic "\"Vought Rising\"" [ref=e200]:
                  - generic [ref=e207]:
                    - generic [ref=e208]:
                      - generic [ref=e209]: "\"Vought Rising\""
                      - generic [ref=e210]: 1:24
                    - generic [ref=e211]: Get a First Look
                    - generic [ref=e212]:
                      - img "1438 people liked this video" [ref=e213]
                      - text: 1.4K
                      - generic [ref=e215]:
                        - img "There are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e216]
                        - text: "560"
          - figure [ref=e290]:
            - generic [ref=e291]:
              - group [ref=e292]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e294]'
                - button "Add to Watchlist" [ref=e295] [cursor=pointer]
                - 'generic "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e300]'
              - group [ref=e302] [cursor=pointer]:
                - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e304]'
                - 'generic "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e305]':
                  - generic [ref=e312]:
                    - generic [ref=e313]:
                      - generic [ref=e314]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                      - generic [ref=e315]: 5:19
                    - generic [ref=e316]: Hear Why. Watch Now.
                    - generic [ref=e317]:
                      - img "140 people liked this video" [ref=e318]
                      - text: "140"
                      - generic [ref=e320]:
                        - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e321]
                        - text: "54"
          - figure [ref=e395]:
            - generic [ref=e396]:
              - group [ref=e397]:
                - img "Toy Story 5" [ref=e399]
                - button "Add to Watchlist" [ref=e400] [cursor=pointer]
                - generic "Toy Story 5" [ref=e405]
              - group [ref=e407] [cursor=pointer]:
                - img "'Toy Story 5'" [ref=e409]
                - generic "'Toy Story 5'" [ref=e410]:
                  - generic [ref=e417]:
                    - generic [ref=e418]:
                      - generic [ref=e419]: "'Toy Story 5'"
                      - generic [ref=e420]: 1:45
                    - generic [ref=e421]: Watch the Trailer
                    - generic [ref=e422]:
                      - img "139 people liked this video" [ref=e423]
                      - text: "139"
                      - generic [ref=e425]:
                        - img "There are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e426]
                        - text: "82"
          - figure [ref=e498]:
            - generic [ref=e499]:
              - group [ref=e500]:
                - img "Primetime" [ref=e502]
                - button "Add to Watchlist" [ref=e503] [cursor=pointer]
                - generic "Primetime" [ref=e508]
              - group [ref=e510] [cursor=pointer]:
                - img "Robert Pattinson Stars in 'Primetime'" [ref=e512]
                - generic "Robert Pattinson Stars in 'Primetime'" [ref=e513]:
                  - generic [ref=e520]:
                    - generic [ref=e521]:
                      - generic [ref=e522]: Robert Pattinson Stars in 'Primetime'
                      - generic [ref=e523]: 1:03
                    - generic [ref=e524]: Watch the Teaser
                    - generic [ref=e525]:
                      - img "117 people liked this video" [ref=e526]
                      - text: "117"
                      - generic [ref=e528]:
                        - img "There are 50 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e529]
                        - text: "50"
          - figure [ref=e603]:
            - generic [ref=e604]:
              - group [ref=e605]:
                - img "Victorian Psycho" [ref=e607]
                - button "Add to Watchlist" [ref=e608] [cursor=pointer]
                - generic "Victorian Psycho" [ref=e613]
              - group [ref=e615] [cursor=pointer]:
                - img "Maika Monroe Stars in 'Victorian Psycho'" [ref=e617]
                - generic "Maika Monroe Stars in 'Victorian Psycho'" [ref=e618]:
                  - generic [ref=e625]:
                    - generic [ref=e626]:
                      - generic [ref=e627]: Maika Monroe Stars in 'Victorian Psycho'
                      - generic [ref=e628]: 1:16
                    - generic [ref=e629]: Watch the Spooky New Trailer
                    - generic [ref=e630]:
                      - img "231 people liked this video" [ref=e631]
                      - text: "231"
                      - generic [ref=e633]:
                        - img "There are 87 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e634]
                        - text: "87"
          - figure [ref=e706]:
            - generic [ref=e707]:
              - group [ref=e708]:
                - img "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e710]
                - button "Add to Watchlist" [ref=e711] [cursor=pointer]
                - generic "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e716]
              - group [ref=e718] [cursor=pointer]:
                - img "The Mandalorian Is Here for Your Questions" [ref=e720]
                - generic "The Mandalorian Is Here for Your Questions" [ref=e721]:
                  - generic [ref=e728]:
                    - generic [ref=e729]:
                      - generic [ref=e730]: The Mandalorian Is Here for Your Questions
                      - generic [ref=e731]: 11:22
                    - generic [ref=e732]: Watch Now
                    - generic [ref=e733]:
                      - img "135 people liked this video" [ref=e734]
                      - text: "135"
                      - generic [ref=e736]:
                        - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e737]
                        - text: "54"
          - figure [ref=e811]:
            - generic [ref=e812]:
              - group [ref=e813]:
                - img "Spa Weekend" [ref=e815]
                - button "Add to Watchlist" [ref=e816] [cursor=pointer]
                - generic "Spa Weekend" [ref=e821]
              - group [ref=e823] [cursor=pointer]:
                - img "'Spa Weekend'" [ref=e825]
                - generic "'Spa Weekend'" [ref=e826]:
                  - generic [ref=e833]:
                    - generic [ref=e834]:
                      - generic [ref=e835]: "'Spa Weekend'"
                      - generic [ref=e836]: 2:30
                    - generic [ref=e837]: Watch the Trailer
                    - generic [ref=e838]:
                      - img "21 people liked this video" [ref=e839]
                      - text: "21"
                      - generic [ref=e841]:
                        - img "There are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e842]
                        - text: "29"
          - figure [ref=e914]:
            - generic [ref=e915]:
              - group [ref=e916]:
                - img "X-Men '97" [ref=e918]
                - button "Add to Watchlist" [ref=e919] [cursor=pointer]
                - generic "X-Men '97" [ref=e924]
              - group [ref=e926] [cursor=pointer]:
                - img "\"X-Men '97\"" [ref=e928]
                - generic "\"X-Men '97\"" [ref=e929]:
                  - generic [ref=e936]:
                    - generic [ref=e937]:
                      - generic [ref=e938]: "\"X-Men '97\""
                      - generic [ref=e939]: 1:58
                    - generic [ref=e940]: Watch the Season 2 Trailer
                    - generic [ref=e941]:
                      - img "15 people liked this video" [ref=e942]
                      - text: "15"
                      - generic [ref=e944]:
                        - img "There are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e945]
                        - text: "11"
          - figure [ref=e1019]:
            - generic [ref=e1020]:
              - group [ref=e1021]:
                - img "Enola Holmes 3" [ref=e1023]
                - button "Add to Watchlist" [ref=e1024] [cursor=pointer]
                - generic "Enola Holmes 3" [ref=e1029]
              - group [ref=e1031] [cursor=pointer]:
                - img "'Enola Homes 3'" [ref=e1033]
                - generic "'Enola Homes 3'" [ref=e1034]:
                  - generic [ref=e1041]:
                    - generic [ref=e1042]:
                      - generic [ref=e1043]: "'Enola Homes 3'"
                      - generic [ref=e1044]: 1:06
                    - generic [ref=e1045]: Watch the Trailer
                    - generic [ref=e1046]:
                      - img "27 people liked this video" [ref=e1047]
                      - text: "27"
                      - generic [ref=e1049]:
                        - img "There are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1050]
                        - text: "31"
        - generic [ref=e1125]:
          - generic [ref=e1126]:
            - generic [ref=e1128]: Up next
            - generic [ref=e1131]:
              - generic [ref=e1132]:
                - img "X-Men '97" [ref=e1135]
                - link "1:58 \"X-Men '97\" Watch the Season 2 Trailer 15 people liked this videoThere are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1136] [cursor=pointer]:
                  - /url: /video/vi3758934809/?listId=ls053181649&ref_=hm_hp_vi_5
                  - generic [ref=e1140]: 1:58
                  - generic [ref=e1142]: "\"X-Men '97\""
                  - generic [ref=e1144]: Watch the Season 2 Trailer
                  - generic [ref=e1145]:
                    - img "15 people liked this video" [ref=e1146]
                    - text: "15"
                    - generic [ref=e1148]:
                      - img "There are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1149]
                      - text: "11"
              - generic [ref=e1222]:
                - img "Enola Holmes 3" [ref=e1225]
                - link "1:06 'Enola Homes 3' Watch the Trailer 27 people liked this videoThere are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1226] [cursor=pointer]:
                  - /url: /video/vi4195142425/?listId=ls053181649&ref_=hm_hp_vi_6
                  - generic [ref=e1230]: 1:06
                  - generic [ref=e1232]: "'Enola Homes 3'"
                  - generic [ref=e1234]: Watch the Trailer
                  - generic [ref=e1235]:
                    - img "27 people liked this video" [ref=e1236]
                    - text: "27"
                    - generic [ref=e1238]:
                      - img "There are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1239]
                      - text: "31"
              - generic [ref=e1312]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e1315]
                - link "4:28 Rolling With Danielle Macdonald Catch Up With the 'Saccharine' Star 45 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1316] [cursor=pointer]:
                  - /url: /video/vi3002256153/?listId=ls053181649&ref_=hm_hp_vi_7
                  - generic [ref=e1320]: 4:28
                  - generic [ref=e1322]: Rolling With Danielle Macdonald
                  - generic [ref=e1324]: Catch Up With the 'Saccharine' Star
                  - generic [ref=e1325]:
                    - img "45 people liked this video" [ref=e1326]
                    - text: "45"
                    - generic [ref=e1328]:
                      - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1329]
                      - text: "26"
              - generic [ref=e1400]:
                - img "Vought Rising" [ref=e1403]
                - link "1:24 \"Vought Rising\" Get a First Look 1438 people liked this videoThere are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1404] [cursor=pointer]:
                  - /url: /video/vi1627966233/?listId=ls053181649&ref_=hm_hp_vi_8
                  - generic [ref=e1408]: 1:24
                  - generic [ref=e1410]: "\"Vought Rising\""
                  - generic [ref=e1412]: Get a First Look
                  - generic [ref=e1413]:
                    - img "1438 people liked this video" [ref=e1414]
                    - text: 1.4K
                    - generic [ref=e1416]:
                      - img "There are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1417]
                      - text: "560"
              - generic [ref=e1490]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e1493]'
                - 'link "5:19 It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set Hear Why. Watch Now. 140 people liked this videoThere are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1494] [cursor=pointer]':
                  - /url: /video/vi941542169/?listId=ls053181649&ref_=hm_hp_vi_9
                  - generic [ref=e1498]: 5:19
                  - generic [ref=e1500]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                  - generic [ref=e1502]: Hear Why. Watch Now.
                  - generic [ref=e1503]:
                    - img "140 people liked this video" [ref=e1504]
                    - text: "140"
                    - generic [ref=e1506]:
                      - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1507]
                      - text: "54"
              - generic [ref=e1580]:
                - img "Toy Story 5" [ref=e1583]
                - link "1:45 'Toy Story 5' Watch the Trailer 139 people liked this videoThere are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1584] [cursor=pointer]:
                  - /url: /video/vi369937177/?listId=ls053181649&ref_=hm_hp_vi_10
                  - generic [ref=e1588]: 1:45
                  - generic [ref=e1590]: "'Toy Story 5'"
                  - generic [ref=e1592]: Watch the Trailer
                  - generic [ref=e1593]:
                    - img "139 people liked this video" [ref=e1594]
                    - text: "139"
                    - generic [ref=e1596]:
                      - img "There are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1597]
                      - text: "82"
          - link "Browse trailers" [ref=e1669] [cursor=pointer]:
            - /url: /trailers/?ref_=hm_hp_sm
            - text: Browse trailers
      - generic [ref=e1675]:
        - link "Summer Watch Guide" [ref=e1676] [cursor=pointer]:
          - /url: /imdbpicks/summer-watch-guide/?ref_=hm_chip_hm_p1_csegswg
          - generic [ref=e1677]: Summer Watch Guide
        - link "Cannes Winners" [ref=e1680] [cursor=pointer]:
          - /url: /event/ev0000147/2026/1/?ref_=hm_chip_hm_p2_csegcann
          - generic [ref=e1681]: Cannes Winners
        - link "AAPI Heritage Month" [ref=e1684] [cursor=pointer]:
          - /url: /spotlight/?ref_=hm_chip_hm_p3_csegahm
          - generic [ref=e1685]: AAPI Heritage Month
        - link "Crunchyroll Anime Awards" [ref=e1688] [cursor=pointer]:
          - /url: /event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds
          - generic [ref=e1689]: Crunchyroll Anime Awards
      - generic [ref=e1692]:
        - generic [ref=e1693]:
          - heading "Featured today" [level=3] [ref=e1696]
          - group [ref=e1698]:
            - generic [ref=e1699]:
              - group [ref=e1700]:
                - group [ref=e1701]:
                  - img "Production art" [ref=e1703]
                  - link "List" [ref=e1704] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_i
                    - generic [ref=e1712]: List
                - generic [ref=e1714]:
                  - link "What We're Watching This Week" [ref=e1715] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_t
                    - generic [ref=e1716]: What We're Watching This Week
                  - link "See the list" [ref=e1718] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_c_ls_5tw_1_cta
              - group [ref=e1719]:
                - group [ref=e1720]:
                  - img "Production art" [ref=e1722]
                  - link "Photos" [ref=e1723] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_i
                    - generic [ref=e1729]: Photos
                - generic [ref=e1731]:
                  - link "See Who's Trending on IMDb Right Now" [ref=e1732] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_t
                    - generic [ref=e1733]: See Who's Trending on IMDb Right Now
                  - link "See the gallery" [ref=e1735] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_c_sw_ts_2_cta
              - group [ref=e1736]:
                - group [ref=e1737]:
                  - img "Production art" [ref=e1739]
                  - link "Photos" [ref=e1740] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_i
                    - generic [ref=e1746]: Photos
                - generic [ref=e1748]:
                  - link "Asian Hollywood Stars to Watch" [ref=e1749] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_t
                    - generic [ref=e1750]: Asian Hollywood Stars to Watch
                  - link "See the full gallery" [ref=e1752] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_c_csegahm_apahm_gal_stars_3_cta
              - group [ref=e1753]:
                - group [ref=e1754]:
                  - img "Poster" [ref=e1756]
                  - link "List" [ref=e1757] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_i
                    - generic [ref=e1765]: List
                - generic [ref=e1767]:
                  - link "'Backrooms' and More Horrors Are Coming" [ref=e1768] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_t
                    - generic [ref=e1769]: "'Backrooms' and More Horrors Are Coming"
                  - link "See the list" [ref=e1771] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_c_cseghw_ls_horror_4_cta
              - group [ref=e1772]:
                - group [ref=e1773]:
                  - generic [ref=e1774]:
                    - img "Poster"
                  - link "List" [ref=e1775] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_5_i
                    - generic [ref=e1783]: List
                - generic [ref=e1785]:
                  - 'link "Staff Picks: What to Watch in May" [ref=e1786] [cursor=pointer]':
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_5_t
                    - generic [ref=e1787]: "Staff Picks: What to Watch in May"
                  - link "See our picks" [ref=e1789] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_5_cta
              - group [ref=e1790]:
                - group [ref=e1791]:
                  - generic [ref=e1792]:
                    - img "Production art"
                  - link "List" [ref=e1793] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_6_i
                    - generic [ref=e1801]: List
                - generic [ref=e1803]:
                  - link "IMDb's Picks For Asian Pacific American Heritage Month" [ref=e1804] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_6_t
                    - generic [ref=e1805]: IMDb's Picks For Asian Pacific American Heritage Month
                  - link "See the list" [ref=e1807] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_6_cta
              - group [ref=e1808]:
                - group [ref=e1809]:
                  - generic [ref=e1810]:
                    - img "Poster"
                  - link "Photos" [ref=e1811] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_7_i
                    - generic [ref=e1817]: Photos
                - generic [ref=e1819]:
                  - link "The Latest Movie and TV Posters" [ref=e1820] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_7_t
                    - generic [ref=e1821]: The Latest Movie and TV Posters
                  - link "See more posters" [ref=e1823] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_7_cta
              - group [ref=e1824]:
                - group [ref=e1825]:
                  - generic [ref=e1826]:
                    - img "Poster"
                  - link "List" [ref=e1827] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_8_i
                    - generic [ref=e1835]: List
                - generic [ref=e1837]:
                  - link "Theatrical Releases You Can Stream or Rent" [ref=e1838] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_8_t
                    - generic [ref=e1839]: Theatrical Releases You Can Stream or Rent
                  - link "See the list" [ref=e1841] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_8_cta
              - group [ref=e1842]:
                - group [ref=e1843]:
                  - generic [ref=e1844]:
                    - img "Production art"
                  - link "Photos" [ref=e1845] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_9_i
                    - generic [ref=e1851]: Photos
                - generic [ref=e1853]:
                  - link "The Best Photos on the Internet Right Now" [ref=e1854] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_9_t
                    - generic [ref=e1855]: The Best Photos on the Internet Right Now
                  - link "See the gallery" [ref=e1857] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_9_cta
              - group [ref=e1858]:
                - group [ref=e1859]:
                  - generic [ref=e1860]:
                    - img "Production art"
                  - link "Poll" [ref=e1861] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_10_i
                    - generic [ref=e1869]: Poll
                - generic [ref=e1871]:
                  - 'link "Poll: Yoda vs. Grogu" [ref=e1872] [cursor=pointer]':
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_10_t
                    - generic [ref=e1873]: "Poll: Yoda vs. Grogu"
                  - link "Vote now" [ref=e1875] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_10_cta
              - group [ref=e1876]:
                - group [ref=e1877]:
                  - generic [ref=e1878]:
                    - img "Poster"
                  - link "List" [ref=e1879] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_11_i
                    - generic [ref=e1887]: List
                - generic [ref=e1889]:
                  - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'" [ref=e1890] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_11_t
                    - generic [ref=e1891]: My Summer Watchlist Loves 'Boosters' and 'Backrooms'
                  - link "See the recs" [ref=e1893] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_11_cta
              - group [ref=e1894]:
                - group [ref=e1895]:
                  - generic [ref=e1896]:
                    - img "Poster"
                  - link "List" [ref=e1897] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_12_i
                    - generic [ref=e1905]: List
                - generic [ref=e1907]:
                  - 'link "TV Tracker: Renewed and Canceled Shows" [ref=e1908] [cursor=pointer]':
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_12_t
                    - generic [ref=e1909]: "TV Tracker: Renewed and Canceled Shows"
                  - link "Check the status" [ref=e1911] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_12_cta
              - group [ref=e1912]:
                - group [ref=e1913]:
                  - generic [ref=e1914]:
                    - img "Event photo"
                  - link "List" [ref=e1915] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_13_i
                    - generic [ref=e1923]: List
                - generic [ref=e1925]:
                  - 'link "In Memoriam: Stars We Lost in 2026" [ref=e1926] [cursor=pointer]':
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_13_t
                    - generic [ref=e1927]: "In Memoriam: Stars We Lost in 2026"
                  - link "See more" [ref=e1929] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_c_csegbest_g_inmem26_13_cta
        - complementary "Sponsored Content" [ref=e1933]:
          - iframe [ref=e1935]:
            - link "Sponsored Content" [ref=f3e2] [cursor=pointer]:
              - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RJjnyoqMSneev6DMe_i3PgwAAAGeb-GNQgMAAADKBEFvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICD-B0q5/clv1c_ek-gwQc1HcDCzfWVailp-s06Go3ROpo6QxLX9MTIe7NTOmtwF3jcMZc_JPcUuqULN8mWtxY3wFWi2wmL4-1SWDAYVEridcD6eihuE0nxJxhheGbprhhRLZFm5jVNt2oRzu2v_aKsx-nNpDPasw_ft3EhbrTYlV_0gORI7G2sBt6i3BVRouYDQXWrwqzZUxCAzQyZdI5Iyu3-UT7S-vZqxUr9zUREbuo6qEU0-BS0fJC1yiG8JS03Bic4pRIDsfomwTmPEsjSRisvSlXgjxJ4iNP5_Tf5JfH4eeJ7JPtrkJej_v3dB03KK8JZC1pDsnhBj0Qz0lA0RRqb8ebyVQrH2wQobFEH3rcKFMpvBzGzUkshzTezDPosXbf-iXuO_yGRYary0GAiEUSt-AMlYYKbZvxoenjiK_PbdvbU26OjAZFyJDJ4fdd3D90TjwNKW__sSkPwlRVar0cOpfYuLOBOXu2o_Hu2GZrezMvCq7asuSJBa0-3jDndzjTVZ5wl7f6Ip1YQC-awDKWeFYFR51gOX-hASHMSJ4Mi3YAQwrFlhT3D5q891CBY14xPRaxZ1lCNO5iOyp9Q2Ozle13W-OJuHJP2ZDQ6GsA_JRPghFegrFJrSio4q4YbClN4ff_u9uKgoTc_xAZ2PalZ3DQPKCKXt41K2OBTu5a_fn0k8mQQ68leWC0z1d-TtNK1TuFt7f3kbmHBhQL1JZiRDVqaDzxTMoCKloB4n7ga9m3d_Xc_kyXBmm3MqsPg/https://primevideo.com/detail/amzn1.dv.gti.16a0fcfa-f9b3-404f-9d08-344f9cedd867/?aref=oNdkZ2dbqg&ref_=dvm_crs_imd_in_s_exams1
              - img "Sponsored Content" [ref=f3e3]
          - button "Get information, provide feedback or report sponsored ad" [ref=e1936] [cursor=pointer]: SPONSORED
      - link "Most popular celebrities" [ref=e1940] [cursor=pointer]:
        - /url: /chart/starmeter/?ref_=hm_mpc_sm
        - heading "Most popular celebrities" [level=3] [ref=e1941]: Most popular celebrities
      - generic [ref=e1949]:
        - heading "What to watch" [level=3] [ref=e1951]
        - link "Get more recommendations" [ref=e1953] [cursor=pointer]:
          - /url: /what-to-watch/?ref_=hm_watch_btn
          - generic [ref=e1954]: Get more recommendations
      - generic [ref=e1961]:
        - heading "Explore what’s streaming" [level=3] [ref=e1963]
        - link "Set your preferred services" [ref=e1965] [cursor=pointer]:
          - /url: /preferences/preferredservices/?ref_=hm_stp_btn
          - generic [ref=e1968]: Set your preferred services
      - heading "Explore movies & TV shows" [level=3] [ref=e1974]
      - heading "More to explore" [level=3] [ref=e1980]
    - generic [ref=e1985]:
      - heading "Recently viewed" [level=3] [ref=e1988]
      - generic [ref=e1990]: You have no recently viewed pages
    - contentinfo [ref=e1991]:
      - link "Sign in for more access" [ref=e1993] [cursor=pointer]:
        - /url: /registration/signin/?u=%2F&ref_=hm_ftr_reg
        - generic [ref=e1994]: Sign in for more access
      - generic [ref=e1995]:
        - generic [ref=e1996]:
          - generic [ref=e1997]:
            - generic [ref=e1998]: Follow IMDb on social
            - link "TikTok" [ref=e1999] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e2001] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e2004] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e2006] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e2008] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e2010]:
            - generic [ref=e2011]:
              - generic [ref=e2012]: Get the IMDb app
              - generic [ref=e2013]: For Android and iOS
            - group [ref=e2015]:
              - generic [ref=e2016]:
                - img "Get the IMDb app"
              - link "For Android and iOS" [ref=e2017] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e2019]:
          - link "Help" [ref=e2020] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e2022] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e2024] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e2026] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e2028] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e2030]:
          - link "Press Room" [ref=e2031] [cursor=pointer]:
            - /url: /pressroom/?ref_=hm_ftr
          - link "Advertising" [ref=e2032] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e2034] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e2036] [cursor=pointer]:
            - /url: /conditions/?ref_=hm_ftr
          - link "Privacy Policy" [ref=e2037] [cursor=pointer]:
            - /url: /privacy/?ref_=hm_ftr
          - generic [ref=e2038]:
            - link "Your Ads Privacy Choices" [ref=e2039] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
              - img [ref=e2040]
            - link "Your Ads Privacy Choices" [ref=e2052] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
      - img "IMDb, an Amazon company" [ref=e2054]
      - paragraph [ref=e2090]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e2091] [cursor=pointer]:
      - generic [ref=e2094]: Back to top
    - img
    - status
    - img
  - alert [ref=e2095]
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
  13  | //1
  14  | test('suggestion search', async ({ page }) => {
  15  | //   await page.goto('https://www.imdb.com/');
  16  |   await page.getByTestId('suggestion-search').click();
  17  |   await page.getByTestId('suggestion-search').fill('The Prestige');
  18  | 
  19  |   await expect(page.getByTestId('suggestion-search'))
  20  |     .toHaveValue('The Prestige');
  21  | });
  22  | 
  23  | //2
  24  | test('play trailer', async ({ page }) => {
  25  | //   await page.goto('https://www.imdb.com/');
  26  |   const page2Promise = page.waitForEvent('popup');
  27  |   await page.locator('iframe[name="inline20"]').contentFrame().getByRole('link', { name: 'Sponsored Content' }).click();
  28  |   const page2 = await page2Promise;
  29  |   await expect(page2).toHaveTitle(/.*/);
  30  | });
  31  | 
  32  | //3
  33  | test('open navigation drawer', async ({ page }) => {
  34  |   
  35  |   await page.getByLabel('Open navigation drawer').click();
  36  |   await expect(page.locator('body')).toContainText('IMDb');
  37  | });
  38  | 
  39  | //4
  40  | test('watchlist', async ({ page }) => {
  41  |   await page.getByRole('link', { name: 'Watchlist' }).click();
  42  |   await expect(page).toHaveURL(/watchlist/);
  43  | 
  44  | });
  45  | 
  46  | //5
  47  | test('summer watch guide', async ({ page }) => {
  48  |   await page.getByRole('link', { name: 'Summer Watch Guide' }).first().click();
  49  |   await page.getByRole('link', { name: 'Mortal Kombat II', exact: true }).click();
  50  |   await expect(page).toHaveURL(/title|movie/i);
  51  | });
  52  | 
  53  | //6
  54  | test('most popular celebrities', async ({ page }) => {
  55  |   await page.getByRole('link', { name: 'Most popular celebrities' }).click();
  56  |   await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
  57  |   await expect(page.locator('body')).toContainText('Anne Hathaway');
  58  | });
  59  | 
  60  | //7
  61  | test('language selection', async ({ page }) => {
  62  |   await page.getByText('EN', { exact: true }).click();
  63  |   await page.getByRole('menuitem', { name: 'हिंदी (भारत)' }).click();
  64  |   await expect(page.getByText('मेनू')).toBeVisible();
  65  | });
  66  | 
  67  | //8
  68  | test('imdb pro', async ({ page }) => {
  69  |   await page.getByRole('link', { name: 'Go To IMDb Pro' }).click();
  70  |   await expect(page).toHaveURL(/pro/);
  71  | });
  72  | 
  73  | //9
  74  | test('fan favorites', async ({ page }) => {
> 75  |   await page.getByRole('link', { name: 'Fan favorites' }).click();
      |                                                           ^ Error: locator.click: Test timeout of 90000ms exceeded.
  76  |   await page.getByRole('link', { name: 'View title page for Dacoit: A' }).first().click();
  77  | await expect(page).toHaveURL(/fan|favorite/i);
  78  | });
  79  | 
  80  | //10
  81  | test('test', async ({ page }) => {
  82  |   await page.getByRole('link', { name: 'Cannes Red Carpet' }).click();
  83  |   await expect(page).toHaveURL(/cannes/);
  84  | });
  85  | 
  86  | //11
  87  | test('Mobile apps', async ({ page }) => {
  88  |   await page.getByRole('link', { name: 'For Android and iOS' }).click();
  89  |   await page.goto('https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525');
  90  |   await expect(page).toHaveURL(/apple/);
  91  | });
  92  | 
  93  | //12
  94  | test('Top 10 on IMDb this week', async ({ page }) => {
  95  |   await page.goto('https://www.imdb.com/');
  96  |   await page.getByRole('link', { name: 'Top 10 on IMDb this week' }).click();
  97  |   await expect(page).toHaveURL('https://www.imdb.com/search/title/?moviemeter=%2C10&ref_=hm_tenup_sm');
  98  | });
  99  | 
  100 | 
  101 | //13
  102 | test('In theaters navigation', async ({ page }) => {
  103 | 
  104 |   const inTheatersLink = page.getByRole('link', { name: /In theaters/i }).first();
  105 |   await inTheatersLink.click();
  106 | 
  107 |   await expect(page).toHaveURL(/.*browse\/cinema/);
  108 | });
  109 | 
  110 | //14
  111 | test('Born today page navigation', async ({ page }) => {
  112 |   await page.getByRole('link', { name: 'Born today' }).click();
  113 |   const heading = page.getByRole('heading', { name: 'Born today', exact: true });
  114 |   await expect(heading).toBeVisible();
  115 | });
  116 | 
  117 | //15
  118 | test('Sign in', async ({ page }) => {
  119 |   // await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  120 |   // await page.getByTestId('create_account_aap').click();
  121 |   // await page.getByRole('heading', { name: 'Sign in to IMDb using your' }).click();
  122 | 
  123 |   await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  124 | 
  125 |   const signInHeading = page.getByRole('heading', { name: /Sign in/i });
  126 |   await expect(signInHeading).toBeVisible();
  127 | });
  128 | 
  129 | });
```