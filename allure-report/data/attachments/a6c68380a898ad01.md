# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_homepage.spec.js >> IMDb Homepage >> Top 10 on IMDb this week
- Location: tests\imdb_homepage.spec.js:94:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Top 10 on IMDb this week' })
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
            - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RFkKGeMjaJ5u4KKQg045Q4cAAAGeb-QuigMAAADKAUFvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICBI2O5h/clv1c_ek-gwfUyHdDCTLlFk0EOcivQZ2tpqhM2gi2rKZZySL_GEvIP7iOU3uE4vpsYqSeoBqsEx2wUiQNW2EfPMoSYcZ1xrKko_bEnNjHnKeyag_8KhBDpqa_ubzTbdcQzxG81sTVG0-zuedjsPBfTSerwYkGHsXo405Yql0heSfgCxpNllmJYhAjffpx46gQKdOksGFTgLT0xwOW9JyeKUkq870Q4i6btRCmkeEPFExX9lCt_RmlJ5Z7iL9z4A6ZryRdanyE8L0WFNmE5TmNRYKbCurt_Q5rLZC8lxEI54XI4EEmnvr7q6HnKl8JZi1p39YnhKedrD7zLoUseJ6T9q0sAsYBirmZnC4ywrFy40X-t0aBkV5eFUC1fsQDTY_ubZamHlJaCvutlmEYFYSNPAPn5Be4FZBz2EK8bl9VFyf_CnbC8-fNLCcOazoySdKCaCOg43KF-f2GctaU6iTIqkra32W9GK4Mxr7LoR3vnzy0KzfaYfREwvvUd2wM2Cz7u1m7bDmC7EiaRLcX4iU_G9BO_OupNwq31S9ibosyY72iCqeKwMTazLrX0bwswd2hePG6hQ5WWqTfzne3O49jDSKuJhaFJwIHuz2RoLa8nMnEjuW4c4hf7P-RTfsK8BEPzYW_Vz6GwmrK7U41gLwJ3WtW6Z7NjsUGmbtPEB0uDbSJfHSU85w5MFmFiZy_aM_Y7VPjGNfRlcIynwRFl5PBdETpMYFV1bthxexMC2Q2zv8HnduwyxEegVCk/https://primevideo.com/detail/amzn1.dv.gti.323e3624-9644-491a-bf4e-7a4abaca2d06/?aref=4Le3lQtcfC&ref_=dvm_crs_imd_in_s_offcampuss1
            - img "Sponsored Content" [ref=f2e3]
        - button "Get information, provide feedback or report sponsored ad" [ref=e74] [cursor=pointer]: SPONSORED
      - generic [ref=e77]:
        - generic [ref=e80]:
          - figure [ref=e82]:
            - generic [ref=e83]:
              - group [ref=e84]:
                - img "X-Men '97" [ref=e86]
                - button "Add to Watchlist" [ref=e87] [cursor=pointer]
                - generic "X-Men '97" [ref=e92]
              - group [ref=e94] [cursor=pointer]:
                - img "\"X-Men '97\"" [ref=e96]
                - generic "\"X-Men '97\"" [ref=e97]:
                  - generic [ref=e104]:
                    - generic [ref=e105]:
                      - generic [ref=e106]: "\"X-Men '97\""
                      - generic [ref=e107]: 1:58
                    - generic [ref=e108]: Watch the Season 2 Trailer
                    - generic [ref=e109]:
                      - img "15 people liked this video" [ref=e110]
                      - text: "15"
                      - generic [ref=e112]:
                        - img "There are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e113]
                        - text: "11"
          - figure [ref=e187]:
            - generic [ref=e188]:
              - group [ref=e189]:
                - img "Enola Holmes 3" [ref=e191]
                - button "Add to Watchlist" [ref=e192] [cursor=pointer]
                - generic "Enola Holmes 3" [ref=e197]
              - group [ref=e199] [cursor=pointer]:
                - img "'Enola Homes 3'" [ref=e201]
                - generic "'Enola Homes 3'" [ref=e202]:
                  - generic [ref=e209]:
                    - generic [ref=e210]:
                      - generic [ref=e211]: "'Enola Homes 3'"
                      - generic [ref=e212]: 1:06
                    - generic [ref=e213]: Watch the Trailer
                    - generic [ref=e214]:
                      - img "27 people liked this video" [ref=e215]
                      - text: "27"
                      - generic [ref=e217]:
                        - img "There are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e218]
                        - text: "31"
          - figure [ref=e292]:
            - generic [ref=e293]:
              - group [ref=e294]:
                - img "Vought Rising" [ref=e296]
                - button "Add to Watchlist" [ref=e297] [cursor=pointer]
                - generic "Vought Rising" [ref=e302]
              - group [ref=e304] [cursor=pointer]:
                - img "\"Vought Rising\"" [ref=e306]
                - generic "\"Vought Rising\"" [ref=e307]:
                  - generic [ref=e314]:
                    - generic [ref=e315]:
                      - generic [ref=e316]: "\"Vought Rising\""
                      - generic [ref=e317]: 1:24
                    - generic [ref=e318]: Get a First Look
                    - generic [ref=e319]:
                      - img "1438 people liked this video" [ref=e320]
                      - text: 1.4K
                      - generic [ref=e322]:
                        - img "There are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e323]
                        - text: "560"
          - figure [ref=e397]:
            - generic [ref=e398]:
              - group [ref=e399]:
                - img "Primetime" [ref=e401]
                - button "Add to Watchlist" [ref=e402] [cursor=pointer]
                - generic "Primetime" [ref=e407]
              - group [ref=e409] [cursor=pointer]:
                - img "Robert Pattinson Stars in 'Primetime'" [ref=e411]
                - generic "Robert Pattinson Stars in 'Primetime'" [ref=e412]:
                  - generic [ref=e419]:
                    - generic [ref=e420]:
                      - generic [ref=e421]: Robert Pattinson Stars in 'Primetime'
                      - generic [ref=e422]: 1:03
                    - generic [ref=e423]: Watch the Teaser
                    - generic [ref=e424]:
                      - img "117 people liked this video" [ref=e425]
                      - text: "117"
                      - generic [ref=e427]:
                        - img "There are 50 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e428]
                        - text: "50"
          - figure [ref=e502]:
            - generic [ref=e503]:
              - group [ref=e504]:
                - img "Victorian Psycho" [ref=e506]
                - button "Add to Watchlist" [ref=e507] [cursor=pointer]
                - generic "Victorian Psycho" [ref=e512]
              - group [ref=e514] [cursor=pointer]:
                - img "Maika Monroe Stars in 'Victorian Psycho'" [ref=e516]
                - generic "Maika Monroe Stars in 'Victorian Psycho'" [ref=e517]:
                  - generic [ref=e524]:
                    - generic [ref=e525]:
                      - generic [ref=e526]: Maika Monroe Stars in 'Victorian Psycho'
                      - generic [ref=e527]: 1:16
                    - generic [ref=e528]: Watch the Spooky New Trailer
                    - generic [ref=e529]:
                      - img "232 people liked this video" [ref=e530]
                      - text: "232"
                      - generic [ref=e532]:
                        - img "There are 87 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e533]
                        - text: "87"
          - figure [ref=e605]:
            - generic [ref=e606]:
              - group [ref=e607]:
                - img "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e609]
                - button "Add to Watchlist" [ref=e610] [cursor=pointer]
                - generic "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e615]
              - group [ref=e617] [cursor=pointer]:
                - img "The Mandalorian Is Here for Your Questions" [ref=e619]
                - generic "The Mandalorian Is Here for Your Questions" [ref=e620]:
                  - generic [ref=e627]:
                    - generic [ref=e628]:
                      - generic [ref=e629]: The Mandalorian Is Here for Your Questions
                      - generic [ref=e630]: 11:22
                    - generic [ref=e631]: Watch Now
                    - generic [ref=e632]:
                      - img "135 people liked this video" [ref=e633]
                      - text: "135"
                      - generic [ref=e635]:
                        - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e636]
                        - text: "54"
          - figure [ref=e710]:
            - generic [ref=e711]:
              - group [ref=e712]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e714]
                - button "Add to Watchlist" [ref=e715] [cursor=pointer]
                - generic "Rolling Credits With Danielle Macdonald" [ref=e720]
              - group [ref=e722] [cursor=pointer]:
                - img "Rolling With Danielle Macdonald" [ref=e724]
                - generic "Rolling With Danielle Macdonald" [ref=e725]:
                  - generic [ref=e732]:
                    - generic [ref=e733]:
                      - generic [ref=e734]: Rolling With Danielle Macdonald
                      - generic [ref=e735]: 4:28
                    - generic [ref=e736]: Catch Up With the 'Saccharine' Star
                    - generic [ref=e737]:
                      - img "45 people liked this video" [ref=e738]
                      - text: "45"
                      - generic [ref=e740]:
                        - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e741]
                        - text: "26"
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
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e920]'
                - button "Add to Watchlist" [ref=e921] [cursor=pointer]
                - 'generic "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e926]'
              - group [ref=e928] [cursor=pointer]:
                - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e930]'
                - 'generic "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e931]':
                  - generic [ref=e938]:
                    - generic [ref=e939]:
                      - generic [ref=e940]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                      - generic [ref=e941]: 5:19
                    - generic [ref=e942]: Hear Why. Watch Now.
                    - generic [ref=e943]:
                      - img "140 people liked this video" [ref=e944]
                      - text: "140"
                      - generic [ref=e946]:
                        - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e947]
                        - text: "54"
          - figure [ref=e1021]:
            - generic [ref=e1022]:
              - group [ref=e1023]:
                - img "Spa Weekend" [ref=e1025]
                - button "Add to Watchlist" [ref=e1026] [cursor=pointer]
                - generic "Spa Weekend" [ref=e1031]
              - group [ref=e1033] [cursor=pointer]:
                - img "'Spa Weekend'" [ref=e1035]
                - generic "'Spa Weekend'" [ref=e1036]:
                  - generic [ref=e1043]:
                    - generic [ref=e1044]:
                      - generic [ref=e1045]: "'Spa Weekend'"
                      - generic [ref=e1046]: 2:30
                    - generic [ref=e1047]: Watch the Trailer
                    - generic [ref=e1048]:
                      - img "21 people liked this video" [ref=e1049]
                      - text: "21"
                      - generic [ref=e1051]:
                        - img "There are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1052]
                        - text: "29"
        - generic [ref=e1125]:
          - generic [ref=e1126]:
            - generic [ref=e1128]: Up next
            - generic [ref=e1131]:
              - generic [ref=e1132]:
                - img "Toy Story 5" [ref=e1135]
                - link "1:45 'Toy Story 5' Watch the Trailer 139 people liked this videoThere are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1136] [cursor=pointer]:
                  - /url: /video/vi369937177/?listId=ls053181649&ref_=hm_hp_vi_5
                  - generic [ref=e1140]: 1:45
                  - generic [ref=e1142]: "'Toy Story 5'"
                  - generic [ref=e1144]: Watch the Trailer
                  - generic [ref=e1145]:
                    - img "139 people liked this video" [ref=e1146]
                    - text: "139"
                    - generic [ref=e1148]:
                      - img "There are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1149]
                      - text: "82"
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
                - img "Spa Weekend" [ref=e1313]
                - link "2:30 'Spa Weekend' Watch the Trailer 21 people liked this videoThere are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1314] [cursor=pointer]:
                  - /url: /video/vi34458393/?listId=ls053181649&ref_=hm_hp_vi_7
                  - generic [ref=e1318]: 2:30
                  - generic [ref=e1320]: "'Spa Weekend'"
                  - generic [ref=e1322]: Watch the Trailer
                  - generic [ref=e1323]:
                    - img "21 people liked this video" [ref=e1324]
                    - text: "21"
                    - generic [ref=e1326]:
                      - img "There are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1327]
                      - text: "29"
              - generic [ref=e1398]:
                - img "X-Men '97" [ref=e1401]
                - link "1:58 \"X-Men '97\" Watch the Season 2 Trailer 15 people liked this videoThere are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1402] [cursor=pointer]:
                  - /url: /video/vi3758934809/?listId=ls053181649&ref_=hm_hp_vi_8
                  - generic [ref=e1406]: 1:58
                  - generic [ref=e1408]: "\"X-Men '97\""
                  - generic [ref=e1410]: Watch the Season 2 Trailer
                  - generic [ref=e1411]:
                    - img "15 people liked this video" [ref=e1412]
                    - text: "15"
                    - generic [ref=e1414]:
                      - img "There are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1415]
                      - text: "11"
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
                - img "Vought Rising" [ref=e1581]
                - link "1:24 \"Vought Rising\" Get a First Look 1438 people liked this videoThere are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1582] [cursor=pointer]:
                  - /url: /video/vi1627966233/?listId=ls053181649&ref_=hm_hp_vi_10
                  - generic [ref=e1586]: 1:24
                  - generic [ref=e1588]: "\"Vought Rising\""
                  - generic [ref=e1590]: Get a First Look
                  - generic [ref=e1591]:
                    - img "1438 people liked this video" [ref=e1592]
                    - text: 1.4K
                    - generic [ref=e1594]:
                      - img "There are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1595]
                      - text: "560"
              - generic:
                - img "Primetime" [ref=e1670]
                - link "1:03 Robert Pattinson Stars in 'Primetime' Watch the Teaser 117 people liked this videoThere are 50 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1671] [cursor=pointer]:
                  - /url: /video/vi3322727193/?listId=ls053181649&ref_=hm_hp_vi_1
                  - generic [ref=e1675]: 1:03
                  - generic [ref=e1677]: Robert Pattinson Stars in 'Primetime'
                  - generic [ref=e1679]: Watch the Teaser
                  - generic [ref=e1680]:
                    - img "117 people liked this video" [ref=e1681]
                    - text: "117"
                    - generic [ref=e1683]:
                      - img "There are 50 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1684]
                      - text: "50"
          - link "Browse trailers" [ref=e1758] [cursor=pointer]:
            - /url: /trailers/?ref_=hm_hp_sm
            - text: Browse trailers
      - generic [ref=e1764]:
        - link "Summer Watch Guide" [ref=e1765] [cursor=pointer]:
          - /url: /imdbpicks/summer-watch-guide/?ref_=hm_chip_hm_p1_csegswg
          - generic [ref=e1766]: Summer Watch Guide
        - link "Cannes Winners" [ref=e1769] [cursor=pointer]:
          - /url: /event/ev0000147/2026/1/?ref_=hm_chip_hm_p2_csegcann
          - generic [ref=e1770]: Cannes Winners
        - link "AAPI Heritage Month" [ref=e1773] [cursor=pointer]:
          - /url: /spotlight/?ref_=hm_chip_hm_p3_csegahm
          - generic [ref=e1774]: AAPI Heritage Month
        - link "Crunchyroll Anime Awards" [ref=e1777] [cursor=pointer]:
          - /url: /event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds
          - generic [ref=e1778]: Crunchyroll Anime Awards
      - generic [ref=e1781]:
        - generic [ref=e1782]:
          - heading "Featured today" [level=3] [ref=e1785]
          - group [ref=e1787]:
            - generic [ref=e1788]:
              - group [ref=e1789]:
                - group [ref=e1790]:
                  - img "Production art" [ref=e1792]
                  - link "List" [ref=e1793] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_i
                    - generic [ref=e1801]: List
                - generic [ref=e1803]:
                  - link "What We're Watching This Week" [ref=e1804] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_t
                    - generic [ref=e1805]: What We're Watching This Week
                  - link "See the list" [ref=e1807] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_c_ls_5tw_1_cta
              - group [ref=e1808]:
                - group [ref=e1809]:
                  - img "Production art" [ref=e1811]
                  - link "Photos" [ref=e1812] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_i
                    - generic [ref=e1818]: Photos
                - generic [ref=e1820]:
                  - link "See Who's Trending on IMDb Right Now" [ref=e1821] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_t
                    - generic [ref=e1822]: See Who's Trending on IMDb Right Now
                  - link "See the gallery" [ref=e1824] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_c_sw_ts_2_cta
              - group [ref=e1825]:
                - group [ref=e1826]:
                  - img "Production art" [ref=e1828]
                  - link "Photos" [ref=e1829] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_i
                    - generic [ref=e1835]: Photos
                - generic [ref=e1837]:
                  - link "Asian Hollywood Stars to Watch" [ref=e1838] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_t
                    - generic [ref=e1839]: Asian Hollywood Stars to Watch
                  - link "See the full gallery" [ref=e1841] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_c_csegahm_apahm_gal_stars_3_cta
              - group [ref=e1842]:
                - group [ref=e1843]:
                  - img "Poster" [ref=e1845]
                  - link "List" [ref=e1846] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_i
                    - generic [ref=e1854]: List
                - generic [ref=e1856]:
                  - link "'Backrooms' and More Horrors Are Coming" [ref=e1857] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_t
                    - generic [ref=e1858]: "'Backrooms' and More Horrors Are Coming"
                  - link "See the list" [ref=e1860] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_c_cseghw_ls_horror_4_cta
              - group [ref=e1861]:
                - group [ref=e1862]:
                  - img "Poster" [ref=e1864]
                  - link "List" [ref=e1865] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_5_i
                    - generic [ref=e1873]: List
                - generic [ref=e1875]:
                  - 'link "TV Tracker: Renewed and Canceled Shows" [ref=e1876] [cursor=pointer]':
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_5_t
                    - generic [ref=e1877]: "TV Tracker: Renewed and Canceled Shows"
                  - link "Check the status" [ref=e1879] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_5_cta
              - group [ref=e1880]:
                - group [ref=e1881]:
                  - img "Poster" [ref=e1883]
                  - link "List" [ref=e1884] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_6_i
                    - generic [ref=e1892]: List
                - generic [ref=e1894]:
                  - 'link "Staff Picks: What to Watch in May" [ref=e1895] [cursor=pointer]':
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_6_t
                    - generic [ref=e1896]: "Staff Picks: What to Watch in May"
                  - link "See our picks" [ref=e1898] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_6_cta
              - group [ref=e1899]:
                - group [ref=e1900]:
                  - generic [ref=e1901]:
                    - img "Poster"
                  - link "Photos" [ref=e1902] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_7_i
                    - generic [ref=e1908]: Photos
                - generic [ref=e1910]:
                  - link "The Latest Movie and TV Posters" [ref=e1911] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_7_t
                    - generic [ref=e1912]: The Latest Movie and TV Posters
                  - link "See more posters" [ref=e1914] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_7_cta
              - group [ref=e1915]:
                - group [ref=e1916]:
                  - generic [ref=e1917]:
                    - img "Event photo"
                  - link "List" [ref=e1918] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_8_i
                    - generic [ref=e1926]: List
                - generic [ref=e1928]:
                  - 'link "In Memoriam: Stars We Lost in 2026" [ref=e1929] [cursor=pointer]':
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_8_t
                    - generic [ref=e1930]: "In Memoriam: Stars We Lost in 2026"
                  - link "See more" [ref=e1932] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_c_csegbest_g_inmem26_8_cta
              - group [ref=e1933]:
                - group [ref=e1934]:
                  - generic [ref=e1935]:
                    - img "Poster"
                  - link "List" [ref=e1936] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_9_i
                    - generic [ref=e1944]: List
                - generic [ref=e1946]:
                  - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'" [ref=e1947] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_9_t
                    - generic [ref=e1948]: My Summer Watchlist Loves 'Boosters' and 'Backrooms'
                  - link "See the recs" [ref=e1950] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_9_cta
              - group [ref=e1951]:
                - group [ref=e1952]:
                  - generic [ref=e1953]:
                    - img "Production art"
                  - link "List" [ref=e1954] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_10_i
                    - generic [ref=e1962]: List
                - generic [ref=e1964]:
                  - link "IMDb's Picks For Asian Pacific American Heritage Month" [ref=e1965] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_10_t
                    - generic [ref=e1966]: IMDb's Picks For Asian Pacific American Heritage Month
                  - link "See the list" [ref=e1968] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_10_cta
              - group [ref=e1969]:
                - group [ref=e1970]:
                  - generic [ref=e1971]:
                    - img "Production art"
                  - link "Photos" [ref=e1972] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_11_i
                    - generic [ref=e1978]: Photos
                - generic [ref=e1980]:
                  - link "The Best Photos on the Internet Right Now" [ref=e1981] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_11_t
                    - generic [ref=e1982]: The Best Photos on the Internet Right Now
                  - link "See the gallery" [ref=e1984] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_11_cta
              - group [ref=e1985]:
                - group [ref=e1986]:
                  - generic [ref=e1987]:
                    - img "Poster"
                  - link "List" [ref=e1988] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_12_i
                    - generic [ref=e1996]: List
                - generic [ref=e1998]:
                  - link "Theatrical Releases You Can Stream or Rent" [ref=e1999] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_12_t
                    - generic [ref=e2000]: Theatrical Releases You Can Stream or Rent
                  - link "See the list" [ref=e2002] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_12_cta
              - group [ref=e2003]:
                - group [ref=e2004]:
                  - generic [ref=e2005]:
                    - img "Production art"
                  - link "Poll" [ref=e2006] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_13_i
                    - generic [ref=e2014]: Poll
                - generic [ref=e2016]:
                  - 'link "Poll: Yoda vs. Grogu" [ref=e2017] [cursor=pointer]':
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_13_t
                    - generic [ref=e2018]: "Poll: Yoda vs. Grogu"
                  - link "Vote now" [ref=e2020] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_13_cta
        - complementary "Sponsored Content" [ref=e2024]:
          - iframe [ref=e2026]:
            - link "Sponsored Content" [ref=f3e2] [cursor=pointer]:
              - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RE220KQLXqHneuUW3P8lLPMAAAGeb-QuXQMAAADKBEFvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDEgICD8uIX5/clv1c_ek-gwQc1HcDCzbWVai5p-s0S4kwZOXgpKibmbte2vkxoe9vg0nILMiAPCq7G6Ciw2H73gP_foab2SitjjbkXLmctm88hpvrD8e2zDy8fJxhhePvvIsmATMrJksAphkCxtM0oQzC6K3G-7exGY26u8Imq3LDRkVf3lfRqwRYZBtEHTrQSmQBLrURAikRykTfNP3pQOPXt1sWoFdtbPYhAMcb8sDZOXcrFzoa8NvHijWQUxGo0v8DrDRxYlpfr3BdlEfCXb3KUxuAqTweYoLN7LMp0KMCYlrd0p-VrLDQiBlbiPSWPry5aEDNPH7fddAfWK_BGEgRtkG52eS5tVvxv6FfeE-DpOlKRDwRE77fq_pATKxGGS-ZKPcyM639-ydx9dgECqofGLLXy6RuSChqv5hGHFMBD7zu0Kdd35IyZli9cz7R9yRgm8_XVWPf-t7s14-8r9MJOvnVAXeIm5kLsaOdWZItC7ULBfLDb52Uf6lALbkUc7tl7fGQyysdj38iWE33gJ1MUiqKdCB3EH9EpA8Y8qNvjaTLqHGQTyCVnre4r5bI62BggZytD1nLPPUyhdhB62aaYJEZwmE0M4PWS-O-wuRDHN3VgGFVrDJJcZMj62KfaiAJdXzuxFmF4B5qBKr9ARGGsfmD80Uc_aNS7V-REfFc0ehEar_Jkh7v2XPsHe_JuSX0fe7mmEVPhYkOKULKch96U29OZRxXueHUvVTduVY9nK5eD0FOM34OllaBLF7u8/https://primevideo.com/detail/amzn1.dv.gti.fd27f054-4a50-446d-8c6d-8e4553841cfc/?aref=cI3Hb4wnXq&ref_=dvm_crs_imd_in_s_system
              - img "Sponsored Content" [ref=f3e3]
          - button "Get information, provide feedback or report sponsored ad" [ref=e2027] [cursor=pointer]: SPONSORED
      - link "Most popular celebrities" [ref=e2031] [cursor=pointer]:
        - /url: /chart/starmeter/?ref_=hm_mpc_sm
        - heading "Most popular celebrities" [level=3] [ref=e2032]: Most popular celebrities
      - generic [ref=e2040]:
        - heading "What to watch" [level=3] [ref=e2042]
        - link "Get more recommendations" [ref=e2044] [cursor=pointer]:
          - /url: /what-to-watch/?ref_=hm_watch_btn
          - generic [ref=e2045]: Get more recommendations
      - generic [ref=e2052]:
        - heading "Explore what’s streaming" [level=3] [ref=e2054]
        - link "Set your preferred services" [ref=e2056] [cursor=pointer]:
          - /url: /preferences/preferredservices/?ref_=hm_stp_btn
          - generic [ref=e2059]: Set your preferred services
      - heading "Explore movies & TV shows" [level=3] [ref=e2065]
      - heading "More to explore" [level=3] [ref=e2071]
    - generic [ref=e2076]:
      - heading "Recently viewed" [level=3] [ref=e2079]
      - generic [ref=e2081]: You have no recently viewed pages
    - contentinfo [ref=e2082]:
      - link "Sign in for more access" [ref=e2084] [cursor=pointer]:
        - /url: /registration/signin/?u=%2F&ref_=hm_ftr_reg
        - generic [ref=e2085]: Sign in for more access
      - generic [ref=e2086]:
        - generic [ref=e2087]:
          - generic [ref=e2088]:
            - generic [ref=e2089]: Follow IMDb on social
            - link "TikTok" [ref=e2090] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e2092] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e2095] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e2097] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e2099] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e2101]:
            - generic [ref=e2102]:
              - generic [ref=e2103]: Get the IMDb app
              - generic [ref=e2104]: For Android and iOS
            - group [ref=e2106]:
              - img "Get the IMDb app" [ref=e2108]
              - link "For Android and iOS" [ref=e2109] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e2111]:
          - link "Help" [ref=e2112] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e2114] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e2116] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e2118] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e2120] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e2122]:
          - link "Press Room" [ref=e2123] [cursor=pointer]:
            - /url: /pressroom/?ref_=hm_ftr
          - link "Advertising" [ref=e2124] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e2126] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e2128] [cursor=pointer]:
            - /url: /conditions/?ref_=hm_ftr
          - link "Privacy Policy" [ref=e2129] [cursor=pointer]:
            - /url: /privacy/?ref_=hm_ftr
          - generic [ref=e2130]:
            - link "Your Ads Privacy Choices" [ref=e2131] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
              - img [ref=e2132]
            - link "Your Ads Privacy Choices" [ref=e2144] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
      - img "IMDb, an Amazon company" [ref=e2146]
      - paragraph [ref=e2182]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e2183] [cursor=pointer]:
      - generic [ref=e2186]: Back to top
    - img
    - status
    - img
  - alert [ref=e2187]
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
  75  |   await page.getByRole('link', { name: 'Fan favorites' }).click();
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
> 96  |   await page.getByRole('link', { name: 'Top 10 on IMDb this week' }).click();
      |                                                                      ^ Error: locator.click: Test timeout of 90000ms exceeded.
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