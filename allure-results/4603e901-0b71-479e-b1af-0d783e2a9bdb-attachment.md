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
    - waiting for" https://www.imdb.com/" navigation to finish...
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
            - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/REzms2vh0aGpJxCxqLouDcYAAAGeb-FRFQMAAADKAUFvbm9fdHhuX2JpZDMgICBvbm9fdHhuX2ltcDEgICBc8z7e/clv1c_ek-gwXcxHeDCDTlEk0EOcis0tv7nmhCKIMoCv1irLD9QF3kLkwVu31S5mp8Yq4J4slrQuI3CblK4Me_Kdp2-KOGIWMZneHztiwt7-g0hxXJ1yyHXFuycKlIbqr0yFsY3HZ0FHYXX5wm5-QxTY9Q9N15-geTIDu1qQ_M0-3wG-oPDAcNSANdGiP179Z4TzJ7hxVsfAUYP1cDEoXngrTmo_t6IBPGm63aqkFljWDpwuhRIKhEAMxhWO74ZQEtdACSqOjux1zl-2a0uDietSZKXsXBAbdmhx0Psw3ez-ELJxG-NpqoA21_EevQt1Mo79rPW4vx8iZra-flkmlDgMZ15wKCCA-sSUgj985MWlmKqsF41N1KNNGzPbe-6_KTvb_4iwqEgTo3NlC7GRrLrCpaIZWQd9qSjaAvDqGaT0LZ-0AaYZkKibV1h42zfdIURuw6sPyPk1PRB15VTRMpb0o5nn1D799nHAnQ4u-pW-kr00zLVMXmuBpLl-s6MW4RBZM26FHbSUl6BrKSbh4rOe8eGVq1O0IOjlIqGxATQTGjirDWsproqlo7YwnU91URLAg2dINRPyJM6KlqG49Hh6K2XuhxLAZUdA3VgHDZjP4CZozvbB1_zqvL-zkkXhkwrf8zPkYePnXPkJIfJk5X0Ye3GpgkB9QaT7vdBfUk6OD9QSFa2JBiNfXYKtjVWgMgLjjqGzOgsDnvtP7uWZhJqMyR9i_HjCl12rdXipZZuTjHUbNieqjfTRhM/https://primevideo.com/detail/amzn1.dv.gti.f5b53647-e608-46ed-8228-a609fd9b2d7e/?aref=AMxiYea0KI&ref_=dvm_crs_imd_in_s_spidernoirs1
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
                - img "Enola Holmes 3" [ref=e294]
                - button "Add to Watchlist" [ref=e295] [cursor=pointer]
                - generic "Enola Holmes 3" [ref=e300]
              - group [ref=e302] [cursor=pointer]:
                - img "'Enola Homes 3'" [ref=e304]
                - generic "'Enola Homes 3'" [ref=e305]:
                  - generic [ref=e312]:
                    - generic [ref=e313]:
                      - generic [ref=e314]: "'Enola Homes 3'"
                      - generic [ref=e315]: 1:06
                    - generic [ref=e316]: Watch the Trailer
                    - generic [ref=e317]:
                      - img "27 people liked this video" [ref=e318]
                      - text: "27"
                      - generic [ref=e320]:
                        - img "There are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e321]
                        - text: "31"
          - figure [ref=e395]:
            - generic [ref=e396]:
              - group [ref=e397]:
                - img "X-Men '97" [ref=e399]
                - button "Add to Watchlist" [ref=e400] [cursor=pointer]
                - generic "X-Men '97" [ref=e405]
              - group [ref=e407] [cursor=pointer]:
                - img "\"X-Men '97\"" [ref=e409]
                - generic "\"X-Men '97\"" [ref=e410]:
                  - generic [ref=e417]:
                    - generic [ref=e418]:
                      - generic [ref=e419]: "\"X-Men '97\""
                      - generic [ref=e420]: 1:58
                    - generic [ref=e421]: Watch the Season 2 Trailer
                    - generic [ref=e422]:
                      - img "15 people liked this video" [ref=e423]
                      - text: "15"
                      - generic [ref=e425]:
                        - img "There are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e426]
                        - text: "11"
          - figure [ref=e500]:
            - generic [ref=e501]:
              - group [ref=e502]:
                - img "Primetime" [ref=e504]
                - button "Add to Watchlist" [ref=e505] [cursor=pointer]
                - generic "Primetime" [ref=e510]
              - group [ref=e512] [cursor=pointer]:
                - img "Robert Pattinson Stars in 'Primetime'" [ref=e514]
                - generic "Robert Pattinson Stars in 'Primetime'" [ref=e515]:
                  - generic [ref=e522]:
                    - generic [ref=e523]:
                      - generic [ref=e524]: Robert Pattinson Stars in 'Primetime'
                      - generic [ref=e525]: 1:03
                    - generic [ref=e526]: Watch the Teaser
                    - generic [ref=e527]:
                      - img "117 people liked this video" [ref=e528]
                      - text: "117"
                      - generic [ref=e530]:
                        - img "There are 50 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e531]
                        - text: "50"
          - figure [ref=e605]:
            - generic [ref=e606]:
              - group [ref=e607]:
                - img "Victorian Psycho" [ref=e609]
                - button "Add to Watchlist" [ref=e610] [cursor=pointer]
                - generic "Victorian Psycho" [ref=e615]
              - group [ref=e617] [cursor=pointer]:
                - img "Maika Monroe Stars in 'Victorian Psycho'" [ref=e619]
                - generic "Maika Monroe Stars in 'Victorian Psycho'" [ref=e620]:
                  - generic [ref=e627]:
                    - generic [ref=e628]:
                      - generic [ref=e629]: Maika Monroe Stars in 'Victorian Psycho'
                      - generic [ref=e630]: 1:16
                    - generic [ref=e631]: Watch the Spooky New Trailer
                    - generic [ref=e632]:
                      - img "231 people liked this video" [ref=e633]
                      - text: "231"
                      - generic [ref=e635]:
                        - img "There are 87 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e636]
                        - text: "87"
          - figure [ref=e708]:
            - generic [ref=e709]:
              - group [ref=e710]:
                - img "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e712]
                - button "Add to Watchlist" [ref=e713] [cursor=pointer]
                - generic "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e718]
              - group [ref=e720] [cursor=pointer]:
                - img "The Mandalorian Is Here for Your Questions" [ref=e722]
                - generic "The Mandalorian Is Here for Your Questions" [ref=e723]:
                  - generic [ref=e730]:
                    - generic [ref=e731]:
                      - generic [ref=e732]: The Mandalorian Is Here for Your Questions
                      - generic [ref=e733]: 11:22
                    - generic [ref=e734]: Watch Now
                    - generic [ref=e735]:
                      - img "135 people liked this video" [ref=e736]
                      - text: "135"
                      - generic [ref=e738]:
                        - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e739]
                        - text: "54"
          - figure [ref=e813]:
            - generic [ref=e814]:
              - group [ref=e815]:
                - img "Toy Story 5" [ref=e817]
                - button "Add to Watchlist" [ref=e818] [cursor=pointer]
                - generic "Toy Story 5" [ref=e823]
              - group [ref=e825] [cursor=pointer]:
                - img "'Toy Story 5'" [ref=e827]
                - generic "'Toy Story 5'" [ref=e828]:
                  - generic [ref=e835]:
                    - generic [ref=e836]:
                      - generic [ref=e837]: "'Toy Story 5'"
                      - generic [ref=e838]: 1:45
                    - generic [ref=e839]: Watch the Trailer
                    - generic [ref=e840]:
                      - img "139 people liked this video" [ref=e841]
                      - text: "139"
                      - generic [ref=e843]:
                        - img "There are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e844]
                        - text: "82"
          - figure [ref=e916]:
            - generic [ref=e917]:
              - group [ref=e918]:
                - img "Spa Weekend" [ref=e920]
                - button "Add to Watchlist" [ref=e921] [cursor=pointer]
                - generic "Spa Weekend" [ref=e926]
              - group [ref=e928] [cursor=pointer]:
                - img "'Spa Weekend'" [ref=e930]
                - generic "'Spa Weekend'" [ref=e931]:
                  - generic [ref=e938]:
                    - generic [ref=e939]:
                      - generic [ref=e940]: "'Spa Weekend'"
                      - generic [ref=e941]: 2:30
                    - generic [ref=e942]: Watch the Trailer
                    - generic [ref=e943]:
                      - img "21 people liked this video" [ref=e944]
                      - text: "21"
                      - generic [ref=e946]:
                        - img "There are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e947]
                        - text: "29"
          - figure [ref=e1019]:
            - generic [ref=e1020]:
              - group [ref=e1021]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e1023]'
                - button "Add to Watchlist" [ref=e1024] [cursor=pointer]
                - 'generic "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e1029]'
              - group [ref=e1031] [cursor=pointer]:
                - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e1033]'
                - 'generic "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e1034]':
                  - generic [ref=e1041]:
                    - generic [ref=e1042]:
                      - generic [ref=e1043]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                      - generic [ref=e1044]: 5:19
                    - generic [ref=e1045]: Hear Why. Watch Now.
                    - generic [ref=e1046]:
                      - img "140 people liked this video" [ref=e1047]
                      - text: "140"
                      - generic [ref=e1049]:
                        - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1050]
                        - text: "54"
        - generic [ref=e1125]:
          - generic [ref=e1126]:
            - generic [ref=e1128]: Up next
            - generic [ref=e1131]:
              - generic [ref=e1132]:
                - img "Spa Weekend" [ref=e1135]
                - link "2:30 'Spa Weekend' Watch the Trailer 21 people liked this videoThere are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1136] [cursor=pointer]:
                  - /url: /video/vi34458393/?listId=ls053181649&ref_=hm_hp_vi_5
                  - generic [ref=e1140]: 2:30
                  - generic [ref=e1142]: "'Spa Weekend'"
                  - generic [ref=e1144]: Watch the Trailer
                  - generic [ref=e1145]:
                    - img "21 people liked this video" [ref=e1146]
                    - text: "21"
                    - generic [ref=e1148]:
                      - img "There are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1149]
                      - text: "29"
              - generic [ref=e1220]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e1223]'
                - 'link "5:19 It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set Hear Why. Watch Now. 140 people liked this videoThere are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1224] [cursor=pointer]':
                  - /url: /video/vi941542169/?listId=ls053181649&ref_=hm_hp_vi_6
                  - generic [ref=e1228]: 5:19
                  - generic [ref=e1230]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                  - generic [ref=e1232]: Hear Why. Watch Now.
                  - generic [ref=e1233]:
                    - img "140 people liked this video" [ref=e1234]
                    - text: "140"
                    - generic [ref=e1236]:
                      - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1237]
                      - text: "54"
              - generic [ref=e1310]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e1313]
                - link "4:28 Rolling With Danielle Macdonald Catch Up With the 'Saccharine' Star 45 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1314] [cursor=pointer]:
                  - /url: /video/vi3002256153/?listId=ls053181649&ref_=hm_hp_vi_7
                  - generic [ref=e1318]: 4:28
                  - generic [ref=e1320]: Rolling With Danielle Macdonald
                  - generic [ref=e1322]: Catch Up With the 'Saccharine' Star
                  - generic [ref=e1323]:
                    - img "45 people liked this video" [ref=e1324]
                    - text: "45"
                    - generic [ref=e1326]:
                      - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1327]
                      - text: "26"
              - generic [ref=e1398]:
                - img "Vought Rising" [ref=e1401]
                - link "1:24 \"Vought Rising\" Get a First Look 1438 people liked this videoThere are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1402] [cursor=pointer]:
                  - /url: /video/vi1627966233/?listId=ls053181649&ref_=hm_hp_vi_8
                  - generic [ref=e1406]: 1:24
                  - generic [ref=e1408]: "\"Vought Rising\""
                  - generic [ref=e1410]: Get a First Look
                  - generic [ref=e1411]:
                    - img "1438 people liked this video" [ref=e1412]
                    - text: 1.4K
                    - generic [ref=e1414]:
                      - img "There are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1415]
                      - text: "560"
              - generic [ref=e1488]:
                - img "Enola Holmes 3" [ref=e1491]
                - link "1:06 'Enola Homes 3' Watch the Trailer 27 people liked this videoThere are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1492] [cursor=pointer]:
                  - /url: /video/vi4195142425/?listId=ls053181649&ref_=hm_hp_vi_9
                  - generic [ref=e1496]: 1:06
                  - generic [ref=e1498]: "'Enola Homes 3'"
                  - generic [ref=e1500]: Watch the Trailer
                  - generic [ref=e1501]:
                    - img "27 people liked this video" [ref=e1502]
                    - text: "27"
                    - generic [ref=e1504]:
                      - img "There are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1505]
                      - text: "31"
              - generic [ref=e1578]:
                - img "X-Men '97" [ref=e1581]
                - link "1:58 \"X-Men '97\" Watch the Season 2 Trailer 15 people liked this videoThere are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1582] [cursor=pointer]:
                  - /url: /video/vi3758934809/?listId=ls053181649&ref_=hm_hp_vi_10
                  - generic [ref=e1586]: 1:58
                  - generic [ref=e1588]: "\"X-Men '97\""
                  - generic [ref=e1590]: Watch the Season 2 Trailer
                  - generic [ref=e1591]:
                    - img "15 people liked this video" [ref=e1592]
                    - text: "15"
                    - generic [ref=e1594]:
                      - img "There are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1595]
                      - text: "11"
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
                  - img "Poster" [ref=e1775]
                  - link "List" [ref=e1776] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_5_i
                    - generic [ref=e1784]: List
                - generic [ref=e1786]:
                  - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'" [ref=e1787] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_5_t
                    - generic [ref=e1788]: My Summer Watchlist Loves 'Boosters' and 'Backrooms'
                  - link "See the recs" [ref=e1790] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_5_cta
              - group [ref=e1791]:
                - group [ref=e1792]:
                  - img "Poster" [ref=e1794]
                  - link "List" [ref=e1795] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_6_i
                    - generic [ref=e1803]: List
                - generic [ref=e1805]:
                  - link "Theatrical Releases You Can Stream or Rent" [ref=e1806] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_6_t
                    - generic [ref=e1807]: Theatrical Releases You Can Stream or Rent
                  - link "See the list" [ref=e1809] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_6_cta
              - group [ref=e1810]:
                - group [ref=e1811]:
                  - generic [ref=e1812]:
                    - img "Production art"
                  - link "Poll" [ref=e1813] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_7_i
                    - generic [ref=e1821]: Poll
                - generic [ref=e1823]:
                  - 'link "Poll: Yoda vs. Grogu" [ref=e1824] [cursor=pointer]':
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_7_t
                    - generic [ref=e1825]: "Poll: Yoda vs. Grogu"
                  - link "Vote now" [ref=e1827] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_7_cta
              - group [ref=e1828]:
                - group [ref=e1829]:
                  - generic [ref=e1830]:
                    - img "Production art"
                  - link "Photos" [ref=e1831] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_8_i
                    - generic [ref=e1837]: Photos
                - generic [ref=e1839]:
                  - link "The Best Photos on the Internet Right Now" [ref=e1840] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_8_t
                    - generic [ref=e1841]: The Best Photos on the Internet Right Now
                  - link "See the gallery" [ref=e1843] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_8_cta
              - group [ref=e1844]:
                - group [ref=e1845]:
                  - generic [ref=e1846]:
                    - img "Production art"
                  - link "List" [ref=e1847] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_9_i
                    - generic [ref=e1855]: List
                - generic [ref=e1857]:
                  - link "IMDb's Picks For Asian Pacific American Heritage Month" [ref=e1858] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_9_t
                    - generic [ref=e1859]: IMDb's Picks For Asian Pacific American Heritage Month
                  - link "See the list" [ref=e1861] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_9_cta
              - group [ref=e1862]:
                - group [ref=e1863]:
                  - generic [ref=e1864]:
                    - img "Poster"
                  - link "Photos" [ref=e1865] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_10_i
                    - generic [ref=e1871]: Photos
                - generic [ref=e1873]:
                  - link "The Latest Movie and TV Posters" [ref=e1874] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_10_t
                    - generic [ref=e1875]: The Latest Movie and TV Posters
                  - link "See more posters" [ref=e1877] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_10_cta
              - group [ref=e1878]:
                - group [ref=e1879]:
                  - generic [ref=e1880]:
                    - img "Poster"
                  - link "List" [ref=e1881] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_11_i
                    - generic [ref=e1889]: List
                - generic [ref=e1891]:
                  - 'link "TV Tracker: Renewed and Canceled Shows" [ref=e1892] [cursor=pointer]':
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_11_t
                    - generic [ref=e1893]: "TV Tracker: Renewed and Canceled Shows"
                  - link "Check the status" [ref=e1895] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_11_cta
              - group [ref=e1896]:
                - group [ref=e1897]:
                  - generic [ref=e1898]:
                    - img "Event photo"
                  - link "List" [ref=e1899] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_12_i
                    - generic [ref=e1907]: List
                - generic [ref=e1909]:
                  - 'link "In Memoriam: Stars We Lost in 2026" [ref=e1910] [cursor=pointer]':
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_12_t
                    - generic [ref=e1911]: "In Memoriam: Stars We Lost in 2026"
                  - link "See more" [ref=e1913] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_c_csegbest_g_inmem26_12_cta
              - group [ref=e1914]:
                - group [ref=e1915]:
                  - generic [ref=e1916]:
                    - img "Poster"
                  - link "List" [ref=e1917] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_13_i
                    - generic [ref=e1925]: List
                - generic [ref=e1927]:
                  - 'link "Staff Picks: What to Watch in May" [ref=e1928] [cursor=pointer]':
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_13_t
                    - generic [ref=e1929]: "Staff Picks: What to Watch in May"
                  - link "See our picks" [ref=e1931] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_13_cta
        - complementary "Sponsored Content" [ref=e1935]:
          - iframe [ref=e1937]:
            - link "Sponsored Content" [ref=f3e2] [cursor=pointer]:
              - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RPJQoqslxPQPP7xoAuF4y0YAAAGeb-FROgMAAADKBEFvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDEgICAyDnKz/clv1c_ek-gwQcx3eHCDQlIdSMOQxryjkIOsCKAg9FQulBbw6X0dbtoi0RsA76kCDvVJpKBlf86zn_hUqyo5cPpX306h8Dj99Ji9emezCdLTGhOhi4NiZMKy4l7PmJgidVEJtPmhC1Unhuyv0gLW7G5-1bCx8H0BF2Ym1LaFEp8mSKDQBECqOTFfaMy1r4c8qIeHj_GNpqRs0wYBQl7XcdU9UucqFdmVdF8w_vbgiw7Tzxo9Kd72_PyNtwLOlWT7kWfQBwgQ0jBwUyvIBAahxoAoULaMu8-CRlEu-9W7sAlRV7uTw6z1YA8_IK-nSsUgC3wV6n2cvs9F5272fGC64DKLaQJDNDQoCP4fgDWVWhoHpB5DXcHQ4F28hUHoutYvHSZxcHvb7woXhcCJd44HvXtzw7Lh_r9kyp62s_NlnJgtHSdoERXyFBRjepk0Hged1BS4NYg8e1lzUhau6ldUxv1EA6MlTGSvNXZjV11Nkz7UxTZ0fFSX0NRv1EtzX4oynRx8MhNFOlIop7EkTe-MQP9708JuxoJA3JXZ8dZ9C0bzYRSORHjAq4Z7PluWPmvSCgxcayog9gWj_eDHDrtQz89BqLPQb4z_nDPrtXWkyeLGcIba-5STifAK4NyEtdvomJNVi5QHtyTbDS9IyUF2WJbaboT20hWoD9n_iMwSrC5rQwA9EHrDLi9ABBb6FnlPywBiNferTWEkUzCwXCF5NARTWCHEtZx_sp3_CmH8kpBgNaC8e4tevilNOM/https://primevideo.com/detail/amzn1.dv.gti.f5b53647-e608-46ed-8228-a609fd9b2d7e/?aref=GFd2gE0K3n&ref_=dvm_crs_imd_in_s_spidernoirs1
              - img "Sponsored Content" [ref=f3e3]
          - button "Get information, provide feedback or report sponsored ad" [ref=e1938] [cursor=pointer]: SPONSORED
      - link "Most popular celebrities" [ref=e1942] [cursor=pointer]:
        - /url: /chart/starmeter/?ref_=hm_mpc_sm
        - heading "Most popular celebrities" [level=3] [ref=e1943]: Most popular celebrities
      - generic [ref=e1951]:
        - heading "What to watch" [level=3] [ref=e1953]
        - link "Get more recommendations" [ref=e1955] [cursor=pointer]:
          - /url: /what-to-watch/?ref_=hm_watch_btn
          - generic [ref=e1956]: Get more recommendations
      - generic [ref=e1963]:
        - heading "Explore what’s streaming" [level=3] [ref=e1965]
        - link "Set your preferred services" [ref=e1967] [cursor=pointer]:
          - /url: /preferences/preferredservices/?ref_=hm_stp_btn
          - generic [ref=e1970]: Set your preferred services
      - heading "Explore movies & TV shows" [level=3] [ref=e1976]
      - heading "More to explore" [level=3] [ref=e1982]
    - generic [ref=e1987]:
      - heading "Recently viewed" [level=3] [ref=e1990]
      - generic [ref=e1992]: You have no recently viewed pages
    - contentinfo [ref=e1993]:
      - link "Sign in for more access" [ref=e1995] [cursor=pointer]:
        - /url: /registration/signin/?u=%2F&ref_=hm_ftr_reg
        - generic [ref=e1996]: Sign in for more access
      - generic [ref=e1997]:
        - generic [ref=e1998]:
          - generic [ref=e1999]:
            - generic [ref=e2000]: Follow IMDb on social
            - link "TikTok" [ref=e2001] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e2003] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e2006] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e2008] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e2010] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e2012]:
            - generic [ref=e2013]:
              - generic [ref=e2014]: Get the IMDb app
              - generic [ref=e2015]: For Android and iOS
            - group [ref=e2017]:
              - img "Get the IMDb app" [ref=e2019]
              - link "For Android and iOS" [ref=e2020] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e2022]:
          - link "Help" [ref=e2023] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e2025] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e2027] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e2029] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e2031] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e2033]:
          - link "Press Room" [ref=e2034] [cursor=pointer]:
            - /url: /pressroom/?ref_=hm_ftr
          - link "Advertising" [ref=e2035] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e2037] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e2039] [cursor=pointer]:
            - /url: /conditions/?ref_=hm_ftr
          - link "Privacy Policy" [ref=e2040] [cursor=pointer]:
            - /url: /privacy/?ref_=hm_ftr
          - generic [ref=e2041]:
            - link "Your Ads Privacy Choices" [ref=e2042] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
              - img [ref=e2043]
            - link "Your Ads Privacy Choices" [ref=e2055] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
      - img "IMDb, an Amazon company" [ref=e2057]
      - paragraph [ref=e2093]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e2094] [cursor=pointer]:
      - generic [ref=e2097]: Back to top
    - img
    - status
    - img
  - alert [ref=e2098]
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