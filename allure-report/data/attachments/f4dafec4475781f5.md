# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_homepage.spec.js >> IMDb Homepage >> test
- Location: tests\imdb_homepage.spec.js:81:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Cannes Red Carpet' })
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
            - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RPbpX0KU6-D5G-FCVzUv8vQAAAGeb-KpmAMAAADKAUFvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDIgICBtvFUn/clv1c_ek-gwQE2HdDCzbWVai5p-s0S4kwZOXgpMRT0JR1ytf_-GNKVHljGIFV5elWTFp9zy44bh1y3k3Zq0OOdoH5CDaCaysR4_yOS8oR3ImUpAxeZbf7votmQTMbNF6AnjEBwcy1J10QsA35Mbp8WtJHMAnEVss7YEVnw6lywHzsiZTOWg3dll7Dk08VL46vfBOsOaUw90Rxk_Aw9UKYnIUNOFPJzyRnlR0Q90u4fnpvGzWRIlCzUeuT0pnGgo0OrfpPhvYlCjAEtzdZgViC8L8AauUlkIc_vo5sFsICDC1rp2gHpY6fDtpX8hKAYNiX-OeklZp8CiSuXKKQ60k2ejxuNzgSZ564d7QTXeWSZrm31yt5MlQILF3Qfv8G11ex4Y6eciwIpu7egXZXzwngjERdkP23-3G1Wov9sJpZ1ZBsyP-DIEyhSMXZnzdbbtD_N7ZMGuvpjMuur6B3YO2twy2Y1ZG6sTF5v1cBsuiwnRLDIEGqgWplDvhXPXUCORpLlR0yL0TnHdKWN7FC02dvE9qUcc-aQ8DORZYWlL8eTTqxwhTcTjocplFBwdr0oMddGq5GBNZIC3OsbqPrNCJP9w8zzbZdC5x2ZxfEJHlle6Wwc2Pr-WXsZe9v7NrUVY2vqQ-bLpD6tZteLjcqDZp0cTsb3yxwXwuqpqd28rhi6zEbj0dsJAIuvtvbs3UYnsAqoKluPZLND1gmxWyboEip_D4HSRjve6NxpHlFt0RR4tfrswFadnHiG7av6eA/https://primevideo.com/detail/amzn1.dv.gti.fd27f054-4a50-446d-8c6d-8e4553841cfc/?aref=z16S7wFLI0&ref_=dvm_crs_imd_in_s_system
            - img "Sponsored Content" [ref=f2e3]
        - button "Get information, provide feedback or report sponsored ad" [ref=e74] [cursor=pointer]: SPONSORED
      - generic [ref=e77]:
        - generic [ref=e80]:
          - figure [ref=e82]:
            - generic [ref=e83]:
              - group [ref=e84]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e86]'
                - button "Add to Watchlist" [ref=e87] [cursor=pointer]
                - 'generic "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e92]'
              - group [ref=e94] [cursor=pointer]:
                - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e96]'
                - 'generic "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e97]':
                  - generic [ref=e104]:
                    - generic [ref=e105]:
                      - generic [ref=e106]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                      - generic [ref=e107]: 5:19
                    - generic [ref=e108]: Hear Why. Watch Now.
                    - generic [ref=e109]:
                      - img "140 people liked this video" [ref=e110]
                      - text: "140"
                      - generic [ref=e112]:
                        - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e113]
                        - text: "54"
          - figure [ref=e187]:
            - generic [ref=e188]:
              - group [ref=e189]:
                - img "Spa Weekend" [ref=e191]
                - button "Add to Watchlist" [ref=e192] [cursor=pointer]
                - generic "Spa Weekend" [ref=e197]
              - group [ref=e199] [cursor=pointer]:
                - img "'Spa Weekend'" [ref=e201]
                - generic "'Spa Weekend'" [ref=e202]:
                  - generic [ref=e209]:
                    - generic [ref=e210]:
                      - generic [ref=e211]: "'Spa Weekend'"
                      - generic [ref=e212]: 2:30
                    - generic [ref=e213]: Watch the Trailer
                    - generic [ref=e214]:
                      - img "21 people liked this video" [ref=e215]
                      - text: "21"
                      - generic [ref=e217]:
                        - img "There are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e218]
                        - text: "29"
          - figure [ref=e290]:
            - generic [ref=e291]:
              - group [ref=e292]:
                - img "X-Men '97" [ref=e294]
                - button "Add to Watchlist" [ref=e295] [cursor=pointer]
                - generic "X-Men '97" [ref=e300]
              - group [ref=e302] [cursor=pointer]:
                - img "\"X-Men '97\"" [ref=e304]
                - generic "\"X-Men '97\"" [ref=e305]:
                  - generic [ref=e312]:
                    - generic [ref=e313]:
                      - generic [ref=e314]: "\"X-Men '97\""
                      - generic [ref=e315]: 1:58
                    - generic [ref=e316]: Watch the Season 2 Trailer
                    - generic [ref=e317]:
                      - img "15 people liked this video" [ref=e318]
                      - text: "15"
                      - generic [ref=e320]:
                        - img "There are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e321]
                        - text: "11"
          - figure [ref=e395]:
            - generic [ref=e396]:
              - group [ref=e397]:
                - img "Enola Holmes 3" [ref=e399]
                - button "Add to Watchlist" [ref=e400] [cursor=pointer]
                - generic "Enola Holmes 3" [ref=e405]
              - group [ref=e407] [cursor=pointer]:
                - img "'Enola Homes 3'" [ref=e409]
                - generic "'Enola Homes 3'" [ref=e410]:
                  - generic [ref=e417]:
                    - generic [ref=e418]:
                      - generic [ref=e419]: "'Enola Homes 3'"
                      - generic [ref=e420]: 1:06
                    - generic [ref=e421]: Watch the Trailer
                    - generic [ref=e422]:
                      - img "27 people liked this video" [ref=e423]
                      - text: "27"
                      - generic [ref=e425]:
                        - img "There are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e426]
                        - text: "31"
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
                - img "Vought Rising" [ref=e817]
                - button "Add to Watchlist" [ref=e818] [cursor=pointer]
                - generic "Vought Rising" [ref=e823]
              - group [ref=e825] [cursor=pointer]:
                - img "\"Vought Rising\"" [ref=e827]
                - generic "\"Vought Rising\"" [ref=e828]:
                  - generic [ref=e835]:
                    - generic [ref=e836]:
                      - generic [ref=e837]: "\"Vought Rising\""
                      - generic [ref=e838]: 1:24
                    - generic [ref=e839]: Get a First Look
                    - generic [ref=e840]:
                      - img "1438 people liked this video" [ref=e841]
                      - text: 1.4K
                      - generic [ref=e843]:
                        - img "There are 560 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e844]
                        - text: "560"
          - figure [ref=e918]:
            - generic [ref=e919]:
              - group [ref=e920]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e922]
                - button "Add to Watchlist" [ref=e923] [cursor=pointer]
                - generic "Rolling Credits With Danielle Macdonald" [ref=e928]
              - group [ref=e930] [cursor=pointer]:
                - img "Rolling With Danielle Macdonald" [ref=e932]
                - generic "Rolling With Danielle Macdonald" [ref=e933]:
                  - generic [ref=e940]:
                    - generic [ref=e941]:
                      - generic [ref=e942]: Rolling With Danielle Macdonald
                      - generic [ref=e943]: 4:28
                    - generic [ref=e944]: Catch Up With the 'Saccharine' Star
                    - generic [ref=e945]:
                      - img "45 people liked this video" [ref=e946]
                      - text: "45"
                      - generic [ref=e948]:
                        - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e949]
                        - text: "26"
          - figure [ref=e1021]:
            - generic [ref=e1022]:
              - group [ref=e1023]:
                - img "Toy Story 5" [ref=e1025]
                - button "Add to Watchlist" [ref=e1026] [cursor=pointer]
                - generic "Toy Story 5" [ref=e1031]
              - group [ref=e1033] [cursor=pointer]:
                - img "'Toy Story 5'" [ref=e1035]
                - generic "'Toy Story 5'" [ref=e1036]:
                  - generic [ref=e1043]:
                    - generic [ref=e1044]:
                      - generic [ref=e1045]: "'Toy Story 5'"
                      - generic [ref=e1046]: 1:45
                    - generic [ref=e1047]: Watch the Trailer
                    - generic [ref=e1048]:
                      - img "139 people liked this video" [ref=e1049]
                      - text: "139"
                      - generic [ref=e1051]:
                        - img "There are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1052]
                        - text: "82"
        - generic [ref=e1125]:
          - generic [ref=e1126]:
            - generic [ref=e1128]: Up next
            - generic [ref=e1131]:
              - generic [ref=e1132]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e1135]
                - link "4:28 Rolling With Danielle Macdonald Catch Up With the 'Saccharine' Star 45 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1136] [cursor=pointer]:
                  - /url: /video/vi3002256153/?listId=ls053181649&ref_=hm_hp_vi_5
                  - generic [ref=e1140]: 4:28
                  - generic [ref=e1142]: Rolling With Danielle Macdonald
                  - generic [ref=e1144]: Catch Up With the 'Saccharine' Star
                  - generic [ref=e1145]:
                    - img "45 people liked this video" [ref=e1146]
                    - text: "45"
                    - generic [ref=e1148]:
                      - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1149]
                      - text: "26"
              - generic [ref=e1220]:
                - img "Toy Story 5" [ref=e1223]
                - link "1:45 'Toy Story 5' Watch the Trailer 139 people liked this videoThere are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1224] [cursor=pointer]:
                  - /url: /video/vi369937177/?listId=ls053181649&ref_=hm_hp_vi_6
                  - generic [ref=e1228]: 1:45
                  - generic [ref=e1230]: "'Toy Story 5'"
                  - generic [ref=e1232]: Watch the Trailer
                  - generic [ref=e1233]:
                    - img "139 people liked this video" [ref=e1234]
                    - text: "139"
                    - generic [ref=e1236]:
                      - img "There are 82 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1237]
                      - text: "82"
              - generic [ref=e1308]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e1311]'
                - 'link "5:19 It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set Hear Why. Watch Now. 140 people liked this videoThere are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1312] [cursor=pointer]':
                  - /url: /video/vi941542169/?listId=ls053181649&ref_=hm_hp_vi_7
                  - generic [ref=e1316]: 5:19
                  - generic [ref=e1318]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                  - generic [ref=e1320]: Hear Why. Watch Now.
                  - generic [ref=e1321]:
                    - img "140 people liked this video" [ref=e1322]
                    - text: "140"
                    - generic [ref=e1324]:
                      - img "There are 54 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1325]
                      - text: "54"
              - generic [ref=e1398]:
                - img "Spa Weekend" [ref=e1401]
                - link "2:30 'Spa Weekend' Watch the Trailer 21 people liked this videoThere are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1402] [cursor=pointer]:
                  - /url: /video/vi34458393/?listId=ls053181649&ref_=hm_hp_vi_8
                  - generic [ref=e1406]: 2:30
                  - generic [ref=e1408]: "'Spa Weekend'"
                  - generic [ref=e1410]: Watch the Trailer
                  - generic [ref=e1411]:
                    - img "21 people liked this video" [ref=e1412]
                    - text: "21"
                    - generic [ref=e1414]:
                      - img "There are 29 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1415]
                      - text: "29"
              - generic [ref=e1486]:
                - img "X-Men '97" [ref=e1489]
                - link "1:58 \"X-Men '97\" Watch the Season 2 Trailer 15 people liked this videoThere are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1490] [cursor=pointer]:
                  - /url: /video/vi3758934809/?listId=ls053181649&ref_=hm_hp_vi_9
                  - generic [ref=e1494]: 1:58
                  - generic [ref=e1496]: "\"X-Men '97\""
                  - generic [ref=e1498]: Watch the Season 2 Trailer
                  - generic [ref=e1499]:
                    - img "15 people liked this video" [ref=e1500]
                    - text: "15"
                    - generic [ref=e1502]:
                      - img "There are 11 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1503]
                      - text: "11"
              - generic [ref=e1576]:
                - img "Enola Holmes 3" [ref=e1579]
                - link "1:06 'Enola Homes 3' Watch the Trailer 27 people liked this videoThere are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1580] [cursor=pointer]:
                  - /url: /video/vi4195142425/?listId=ls053181649&ref_=hm_hp_vi_10
                  - generic [ref=e1584]: 1:06
                  - generic [ref=e1586]: "'Enola Homes 3'"
                  - generic [ref=e1588]: Watch the Trailer
                  - generic [ref=e1589]:
                    - img "27 people liked this video" [ref=e1590]
                    - text: "27"
                    - generic [ref=e1592]:
                      - img "There are 31 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1593]
                      - text: "31"
          - link "Browse trailers" [ref=e1667] [cursor=pointer]:
            - /url: /trailers/?ref_=hm_hp_sm
            - text: Browse trailers
      - generic [ref=e1673]:
        - link "Summer Watch Guide" [ref=e1674] [cursor=pointer]:
          - /url: /imdbpicks/summer-watch-guide/?ref_=hm_chip_hm_p1_csegswg
          - generic [ref=e1675]: Summer Watch Guide
        - link "Cannes Winners" [ref=e1678] [cursor=pointer]:
          - /url: /event/ev0000147/2026/1/?ref_=hm_chip_hm_p2_csegcann
          - generic [ref=e1679]: Cannes Winners
        - link "AAPI Heritage Month" [ref=e1682] [cursor=pointer]:
          - /url: /spotlight/?ref_=hm_chip_hm_p3_csegahm
          - generic [ref=e1683]: AAPI Heritage Month
        - link "Crunchyroll Anime Awards" [ref=e1686] [cursor=pointer]:
          - /url: /event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds
          - generic [ref=e1687]: Crunchyroll Anime Awards
      - generic [ref=e1690]:
        - generic [ref=e1691]:
          - heading "Featured today" [level=3] [ref=e1694]
          - group [ref=e1696]:
            - generic [ref=e1697]:
              - group [ref=e1698]:
                - group [ref=e1699]:
                  - img "Production art" [ref=e1701]
                  - link "List" [ref=e1702] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_i
                    - generic [ref=e1710]: List
                - generic [ref=e1712]:
                  - link "What We're Watching This Week" [ref=e1713] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_t
                    - generic [ref=e1714]: What We're Watching This Week
                  - link "See the list" [ref=e1716] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_c_ls_5tw_1_cta
              - group [ref=e1717]:
                - group [ref=e1718]:
                  - img "Production art" [ref=e1720]
                  - link "Photos" [ref=e1721] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_i
                    - generic [ref=e1727]: Photos
                - generic [ref=e1729]:
                  - link "See Who's Trending on IMDb Right Now" [ref=e1730] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_t
                    - generic [ref=e1731]: See Who's Trending on IMDb Right Now
                  - link "See the gallery" [ref=e1733] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_c_sw_ts_2_cta
              - group [ref=e1734]:
                - group [ref=e1735]:
                  - img "Production art" [ref=e1737]
                  - link "Photos" [ref=e1738] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_i
                    - generic [ref=e1744]: Photos
                - generic [ref=e1746]:
                  - link "Asian Hollywood Stars to Watch" [ref=e1747] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_t
                    - generic [ref=e1748]: Asian Hollywood Stars to Watch
                  - link "See the full gallery" [ref=e1750] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_c_csegahm_apahm_gal_stars_3_cta
              - group [ref=e1751]:
                - group [ref=e1752]:
                  - img "Poster" [ref=e1754]
                  - link "List" [ref=e1755] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_i
                    - generic [ref=e1763]: List
                - generic [ref=e1765]:
                  - link "'Backrooms' and More Horrors Are Coming" [ref=e1766] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_t
                    - generic [ref=e1767]: "'Backrooms' and More Horrors Are Coming"
                  - link "See the list" [ref=e1769] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_c_cseghw_ls_horror_4_cta
              - group [ref=e1770]:
                - group [ref=e1771]:
                  - img "Production art" [ref=e1773]
                  - link "Photos" [ref=e1774] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_5_i
                    - generic [ref=e1780]: Photos
                - generic [ref=e1782]:
                  - link "The Best Photos on the Internet Right Now" [ref=e1783] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_5_t
                    - generic [ref=e1784]: The Best Photos on the Internet Right Now
                  - link "See the gallery" [ref=e1786] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_5_cta
              - group [ref=e1787]:
                - group [ref=e1788]:
                  - img "Poster" [ref=e1790]
                  - link "List" [ref=e1791] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_6_i
                    - generic [ref=e1799]: List
                - generic [ref=e1801]:
                  - link "Theatrical Releases You Can Stream or Rent" [ref=e1802] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_6_t
                    - generic [ref=e1803]: Theatrical Releases You Can Stream or Rent
                  - link "See the list" [ref=e1805] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_6_cta
              - group [ref=e1806]:
                - group [ref=e1807]:
                  - generic [ref=e1808]:
                    - img "Poster"
                  - link "Photos" [ref=e1809] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_7_i
                    - generic [ref=e1815]: Photos
                - generic [ref=e1817]:
                  - link "The Latest Movie and TV Posters" [ref=e1818] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_7_t
                    - generic [ref=e1819]: The Latest Movie and TV Posters
                  - link "See more posters" [ref=e1821] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_7_cta
              - group [ref=e1822]:
                - group [ref=e1823]:
                  - generic [ref=e1824]:
                    - img "Poster"
                  - link "List" [ref=e1825] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_8_i
                    - generic [ref=e1833]: List
                - generic [ref=e1835]:
                  - 'link "Staff Picks: What to Watch in May" [ref=e1836] [cursor=pointer]':
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_8_t
                    - generic [ref=e1837]: "Staff Picks: What to Watch in May"
                  - link "See our picks" [ref=e1839] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_8_cta
              - group [ref=e1840]:
                - group [ref=e1841]:
                  - generic [ref=e1842]:
                    - img "Production art"
                  - link "List" [ref=e1843] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_9_i
                    - generic [ref=e1851]: List
                - generic [ref=e1853]:
                  - link "IMDb's Picks For Asian Pacific American Heritage Month" [ref=e1854] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_9_t
                    - generic [ref=e1855]: IMDb's Picks For Asian Pacific American Heritage Month
                  - link "See the list" [ref=e1857] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_9_cta
              - group [ref=e1858]:
                - group [ref=e1859]:
                  - generic [ref=e1860]:
                    - img "Poster"
                  - link "List" [ref=e1861] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_10_i
                    - generic [ref=e1869]: List
                - generic [ref=e1871]:
                  - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'" [ref=e1872] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_10_t
                    - generic [ref=e1873]: My Summer Watchlist Loves 'Boosters' and 'Backrooms'
                  - link "See the recs" [ref=e1875] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_10_cta
              - group [ref=e1876]:
                - group [ref=e1877]:
                  - generic [ref=e1878]:
                    - img "Poster"
                  - link "List" [ref=e1879] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_11_i
                    - generic [ref=e1887]: List
                - generic [ref=e1889]:
                  - 'link "TV Tracker: Renewed and Canceled Shows" [ref=e1890] [cursor=pointer]':
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_11_t
                    - generic [ref=e1891]: "TV Tracker: Renewed and Canceled Shows"
                  - link "Check the status" [ref=e1893] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_11_cta
              - group [ref=e1894]:
                - group [ref=e1895]:
                  - generic [ref=e1896]:
                    - img "Production art"
                  - link "Poll" [ref=e1897] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_12_i
                    - generic [ref=e1905]: Poll
                - generic [ref=e1907]:
                  - 'link "Poll: Yoda vs. Grogu" [ref=e1908] [cursor=pointer]':
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_12_t
                    - generic [ref=e1909]: "Poll: Yoda vs. Grogu"
                  - link "Vote now" [ref=e1911] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_12_cta
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
              - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RCTApnBlcv2PCqqNsikll3kAAAGeb-KpoQMAAADKBEFvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDIgICCrIvLc/clv1c_ek-gwQUxGtDCDAlI0yOOeusss6wpkiLPS2jUq3P25hxWe4Mz7lTvbn0BSq0Z48I4su_qB4u2J9Zllk_UTX08Z1Z7Lz0ts--c7CMLE3WdoZ2DaSrpIipiDoUeMpx7B6IxWUlUbBc2qXLQX55HQmcyPv2SaaCbm3vy6oRAtSNekSYpIyU9hgJILgRwqnxK7EJVEEC6jVk8FYW9jG6xnZFF80Qmg65vxSlWD6hJQQGt-gblX6SY8bmPHWKGQxQ-H17Ao333s3Z0GLxO-Pam3O5w6Apm9-EIxlw08Ss-pG089v7Pir7oiXH4BSomJMyfrDbn93Eq4lCxhGsm-VkcXSSxopx1axehXWlZmnE6JNWWTcucaN-xM_LiH3Hfe3mOzzRf_UgrMEnBHwAOh1CHM-WMatHyvCsIV_XHOM43XLyLbdUPj9kFdTzHcdSvsTnxqyJk5gAjR4DHOuJE4o1g5Zp5K2h3hTrrmfQatXpNbxHxBqHeOdW1BdsfCQnZZ3MBbAmTuX7nLLXlwEgAGat2PfMVG2pOy7TIz9C-n5EOh1ii6OBjaNN0r6LiIo1i76fo9Ei5J6xSsKoyCVeayca-e4-ibx7WhwmX7nNaiaU8B0ewIFxthtRSP9PaBzqKD01jx7aWHPjaewfUOKnaoGJ5gMoaCrt8BHT9gE67NsV1gXw46ckc2CwzLdpaUe7jarYBgg6-NA0uggf1IRnWvbJFl4r_MYSKlrKGnDU-tw9QHQc8i24i2x0Rmh_c/https://primevideo.com/detail/amzn1.dv.gti.f5b53647-e608-46ed-8228-a609fd9b2d7e/?aref=GFd2gE0K3n&ref_=dvm_crs_imd_in_s_spidernoirs1
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
              - img "Get the IMDb app" [ref=e2017]
              - link "For Android and iOS" [ref=e2018] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e2020]:
          - link "Help" [ref=e2021] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e2023] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e2025] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e2027] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e2029] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e2031]:
          - link "Press Room" [ref=e2032] [cursor=pointer]:
            - /url: /pressroom/?ref_=hm_ftr
          - link "Advertising" [ref=e2033] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e2035] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e2037] [cursor=pointer]:
            - /url: /conditions/?ref_=hm_ftr
          - link "Privacy Policy" [ref=e2038] [cursor=pointer]:
            - /url: /privacy/?ref_=hm_ftr
          - generic [ref=e2039]:
            - link "Your Ads Privacy Choices" [ref=e2040] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
              - img [ref=e2041]
            - link "Your Ads Privacy Choices" [ref=e2053] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
      - img "IMDb, an Amazon company" [ref=e2055]
      - paragraph [ref=e2091]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e2092] [cursor=pointer]:
      - generic [ref=e2095]: Back to top
    - img
    - status
    - img
  - alert [ref=e2096]
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
> 82  |   await page.getByRole('link', { name: 'Cannes Red Carpet' }).click();
      |                                                               ^ Error: locator.click: Test timeout of 90000ms exceeded.
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