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

Locator: getByText('Language')
Expected: visible
Error: strict mode violation: getByText('Language') resolved to 2 elements:
    1) <div class="navlsl__itemTitle navlsl_icon">Language</div> aka locator('div').filter({ hasText: /^Language$/ })
    2) <span role="presentation" class="ipc-list-item__text">Language</span> aka locator('span').filter({ hasText: /^Language$/ })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Language')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - link "Home" [ref=e4]:
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
            - link "Create account" [ref=e69]:
              - /url: /registration/signin/?u=%2F&ref_=hm_nv_generic_lgin
      - generic [ref=e71]:
        - generic "Toggle language selector" [active] [ref=e72] [cursor=pointer]:
          - generic [ref=e74]: EN
        - generic [ref=e78]:
          - menu [ref=e79]:
            - menuitem "Fully supported"
            - separator [ref=e80]
            - menuitem "English (United States)": English (United States)
            - separator [ref=e81]
          - menu [ref=e82]:
            - menuitem "Learn more about partially supported languages." [ref=e83] [cursor=pointer]: Partially supported
            - generic [ref=e89]: Some content may be auto-translated
            - separator [ref=e90]
            - menuitem "Français (Canada)" [ref=e91] [cursor=pointer]: Français (Canada)
            - menuitem "Français (France)" [ref=e94] [cursor=pointer]: Français (France)
            - menuitem "Deutsch (Deutschland)" [ref=e97] [cursor=pointer]: Deutsch (Deutschland)
            - menuitem "हिंदी (भारत)" [ref=e100] [cursor=pointer]: हिंदी (भारत)
            - menuitem "Italiano (Italia)" [ref=e103] [cursor=pointer]: Italiano (Italia)
            - menuitem "Português (Brasil)" [ref=e106] [cursor=pointer]: Português (Brasil)
            - menuitem "Español (España)" [ref=e109] [cursor=pointer]: Español (España)
            - menuitem "Español (México)" [ref=e112] [cursor=pointer]: Español (México)
      - status
      - status
    - main [ref=e115]:
      - iframe [ref=e117]:
        
      - complementary "Sponsored Content" [ref=e122]:
        - iframe [ref=e124]:
          - link "Sponsored Content" [ref=f2e2]:
            - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RFlNR0awldhggigPTuDtlT8AAAGebTm6KwMAAADKAUFvbm9fdHhuX2JpZDMgICBvbm9fdHhuX2ltcDIgICB10SZu/clv1c_ek-gwQc1HcDCzbWXai5p-s0S4kwZOXgpLSYej0_L3Zz6cmdnCnPoWwEPyv_PzCgwf5wBVv1g-xEWkQeBTPC2TAMgREqblCZfLShuDStsQ3OsNALLri3kxLs8RTT9dniwBVpxgxv7mboG1PnmgsTILMjvAtcTjkma5pQY6fO-jyqqXIdFfo7x-ByiyC9ZM90NPoD9Pw-bao0TAofA0jr82WQemK0txfxFYuhn8i8BXOBz8hDQBltDLlXRnj0tIAWdjz05L0XVtmAxzMMBbFzy9sGlx3UevL1n4S3vh9FsBt_PvYJEh54Y48yRehqyJvbWSSHKtREGsWNSr8Xl1ccJLQC5MhSfUF8PEg6Y__9RyKVmER6F_WdiX105lYuVhDfNGq5Ts9wjlQY-VLaq-Uqw9P5Ob-Dni_k0H0lu_belywfcAt0xbldsA1N3DyPqbhjuSroYXw99bD3hvoEWJD0CNcYku3ruEDE_U5KxcrPhfa3IGpsYr8cLuZrdgzVxPgLQsecF4BBSjSeVE-ONKehHN3IYQTNUZqWxfaET3qw6QWESj3Ao_Ahp9ynWqdgCIguNJ_xXqJtyQceA8j_tXbivM5yfBWk8HMLSJhIgS1GlrCaFOoohYYJuSP_iBW9ZZ_xZffja-wffGcnf7MTm9C2HYhwbuHxg9Nr-GahYWx8i7gvqlGrtQEV4pVY0gZUBntOCwShtLlttBru-ZgLuskAOC9N7Fch0150phc0qId0W2AjJUJzOb7Y/https://primevideo.com/detail/amzn1.dv.gti.dfb0995e-334a-4636-b84e-9ebf344504cf/?aref=5SPd5AL1FA&ref_=dvm_crs_imd_in_s_jackryan
            - img "Sponsored Content" [ref=f2e3]
        - button "Get information, provide feedback or report sponsored ad" [ref=e125] [cursor=pointer]: SPONSORED
      - generic [ref=e128]:
        - generic [ref=e131]:
          - figure [ref=e133]:
            - generic [ref=e134]:
              - group [ref=e135]:
                - img "Primetime" [ref=e137]
                - button "Add to Watchlist" [ref=e138] [cursor=pointer]
                - generic "Primetime" [ref=e143]
              - group [ref=e145] [cursor=pointer]:
                - img "Robert Pattinson Stars in 'Primetime'" [ref=e147]
                - generic "Robert Pattinson Stars in 'Primetime'" [ref=e148]:
                  - generic [ref=e155]:
                    - generic [ref=e156]:
                      - generic [ref=e157]: Robert Pattinson Stars in 'Primetime'
                      - generic [ref=e158]: 1:03
                    - generic [ref=e159]: Watch the Teaser
                    - generic [ref=e160]:
                      - img "63 people liked this video" [ref=e161]
                      - text: "63"
                      - generic [ref=e163]:
                        - img "There are 26 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e164]
                        - text: "26"
          - figure [ref=e238]:
            - generic [ref=e239]:
              - group [ref=e240]:
                - img "Victorian Psycho" [ref=e242]
                - button "Add to Watchlist" [ref=e243] [cursor=pointer]
                - generic "Victorian Psycho" [ref=e248]
              - group [ref=e250] [cursor=pointer]:
                - img "Maika Monroe Stars in 'Victorian Psycho'" [ref=e252]
                - generic "Maika Monroe Stars in 'Victorian Psycho'" [ref=e253]:
                  - generic [ref=e260]:
                    - generic [ref=e261]:
                      - generic [ref=e262]: Maika Monroe Stars in 'Victorian Psycho'
                      - generic [ref=e263]: 1:16
                    - generic [ref=e264]: Watch the Spooky New Trailer
                    - generic [ref=e265]:
                      - img "218 people liked this video" [ref=e266]
                      - text: "218"
                      - generic [ref=e268]:
                        - img "There are 86 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e269]
                        - text: "86"
          - figure [ref=e341]:
            - generic [ref=e342]:
              - group [ref=e343]:
                - generic [ref=e344]:
                  - img "'The Mandalorian and Grogu' Cast Answer Fan Questions"
                - button "Add to Watchlist" [ref=e345] [cursor=pointer]
                - generic "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e350]
              - group [ref=e352] [cursor=pointer]:
                - img "The Mandalorian Is Here for Your Questions" [ref=e354]
                - generic "The Mandalorian Is Here for Your Questions" [ref=e355]:
                  - generic [ref=e362]:
                    - generic [ref=e363]:
                      - generic [ref=e364]: The Mandalorian Is Here for Your Questions
                      - generic [ref=e365]: 11:22
                    - generic [ref=e366]: Watch Now
                    - generic [ref=e367]:
                      - img "128 people liked this video" [ref=e368]
                      - text: "128"
                      - generic [ref=e370]:
                        - img "There are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e371]
                        - text: "49"
          - figure [ref=e445]:
            - generic [ref=e446]:
              - group [ref=e447]:
                - generic [ref=e448]:
                  - img "Vought Rising"
                - button "Add to Watchlist" [ref=e449] [cursor=pointer]
                - generic "Vought Rising" [ref=e454]
              - group [ref=e456] [cursor=pointer]:
                - generic [ref=e457]:
                  - img "\"Vought Rising\""
                - generic "\"Vought Rising\"" [ref=e458]:
                  - generic [ref=e465]:
                    - generic [ref=e466]:
                      - generic [ref=e467]: "\"Vought Rising\""
                      - generic [ref=e468]: 1:24
                    - generic [ref=e469]: Get a First Look
                    - generic [ref=e470]:
                      - img "1417 people liked this video" [ref=e471]
                      - text: 1.4K
                      - generic [ref=e473]:
                        - img "There are 558 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e474]
                        - text: "558"
          - figure [ref=e548]:
            - generic [ref=e549]:
              - group [ref=e550]:
                - generic [ref=e551]:
                  - 'img "Avatar: The Last Airbender"'
                - button "Add to Watchlist" [ref=e552] [cursor=pointer]
                - 'generic "Avatar: The Last Airbender" [ref=e557]'
              - group [ref=e559] [cursor=pointer]:
                - generic [ref=e560]:
                  - 'img "\"Avatar: The Last Airbender\""'
                - 'generic "\"Avatar: The Last Airbender\"" [ref=e561]':
                  - generic [ref=e568]:
                    - generic [ref=e569]:
                      - generic [ref=e570]: "\"Avatar: The Last Airbender\""
                      - generic [ref=e571]: 1:56
                    - generic [ref=e572]: Season 2 Premieres June 25 on Netflix
                    - generic [ref=e573]:
                      - img "123 people liked this video" [ref=e574]
                      - text: "123"
                      - generic [ref=e576]:
                        - img "There are 98 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e577]
                        - text: "98"
          - figure [ref=e649]:
            - generic [ref=e650]:
              - group [ref=e651]:
                - generic [ref=e652]:
                  - img "Toy Story 5"
                - button "Add to Watchlist" [ref=e653] [cursor=pointer]
                - generic "Toy Story 5" [ref=e658]
              - group [ref=e660] [cursor=pointer]:
                - generic [ref=e661]:
                  - img "'Toy Story 5'"
                - generic "'Toy Story 5'" [ref=e662]:
                  - generic [ref=e669]:
                    - generic [ref=e670]:
                      - generic [ref=e671]: "'Toy Story 5'"
                      - generic [ref=e672]: 1:45
                    - generic [ref=e673]: Watch the Trailer
                    - generic [ref=e674]:
                      - img "123 people liked this video" [ref=e675]
                      - text: "123"
                      - generic [ref=e677]:
                        - img "There are 72 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e678]
                        - text: "72"
          - figure [ref=e750]:
            - generic [ref=e751]:
              - group [ref=e752]:
                - generic [ref=e753]:
                  - img "Spa Weekend"
                - button "Add to Watchlist" [ref=e754] [cursor=pointer]
                - generic "Spa Weekend" [ref=e759]
              - group [ref=e761] [cursor=pointer]:
                - generic [ref=e762]:
                  - img "'Spa Weekend'"
                - generic "'Spa Weekend'" [ref=e763]:
                  - generic [ref=e770]:
                    - generic [ref=e771]:
                      - generic [ref=e772]: "'Spa Weekend'"
                      - generic [ref=e773]: 2:30
                    - generic [ref=e774]: Watch the Trailer
                    - generic [ref=e775]:
                      - img "14 people liked this video" [ref=e776]
                      - text: "14"
                      - generic [ref=e778]:
                        - img "There are 22 reactions to this video from other people, primarily Love it and Funny emojis" [ref=e779]
                        - text: "22"
          - figure [ref=e850]:
            - generic [ref=e851]:
              - group [ref=e852]:
                - generic [ref=e853]:
                  - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set"'
                - button "Add to Watchlist" [ref=e854] [cursor=pointer]
                - 'generic "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e859]'
              - group [ref=e861] [cursor=pointer]:
                - generic [ref=e862]:
                  - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set"'
                - 'generic "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e863]':
                  - generic [ref=e870]:
                    - generic [ref=e871]:
                      - generic [ref=e872]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                      - generic [ref=e873]: 5:19
                    - generic [ref=e874]: Hear Why. Watch Now.
                    - generic [ref=e875]:
                      - img "136 people liked this video" [ref=e876]
                      - text: "136"
                      - generic [ref=e878]:
                        - img "There are 52 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e879]
                        - text: "52"
          - figure [ref=e953]:
            - generic [ref=e954]:
              - group [ref=e955]:
                - generic [ref=e956]:
                  - img "Enola Holmes 3"
                - button "Add to Watchlist" [ref=e957] [cursor=pointer]
                - generic "Enola Holmes 3" [ref=e962]
              - group [ref=e964] [cursor=pointer]:
                - generic [ref=e965]:
                  - img "'Enola Homes 3'"
                - generic "'Enola Homes 3'" [ref=e966]:
                  - generic [ref=e973]:
                    - generic [ref=e974]:
                      - generic [ref=e975]: "'Enola Homes 3'"
                      - generic [ref=e976]: 1:06
                    - generic [ref=e977]: Watch the Trailer
                    - generic [ref=e978]:
                      - img "19 people liked this video" [ref=e979]
                      - text: "19"
                      - generic [ref=e981]:
                        - img "There are 23 reactions to this video from other people, primarily Love it and Funny emojis" [ref=e982]
                        - text: "23"
          - figure [ref=e1053]:
            - generic [ref=e1054]:
              - group [ref=e1055]:
                - generic [ref=e1056]:
                  - img "Rolling Credits With Danielle Macdonald"
                - button "Add to Watchlist" [ref=e1057] [cursor=pointer]
                - generic "Rolling Credits With Danielle Macdonald" [ref=e1062]
              - group [ref=e1064] [cursor=pointer]:
                - generic [ref=e1065]:
                  - img "Rolling With Danielle Macdonald"
                - generic "Rolling With Danielle Macdonald" [ref=e1066]:
                  - generic [ref=e1073]:
                    - generic [ref=e1074]:
                      - generic [ref=e1075]: Rolling With Danielle Macdonald
                      - generic [ref=e1076]: 4:28
                    - generic [ref=e1077]: Catch Up With the 'Saccharine' Star
                    - generic [ref=e1078]:
                      - img "45 people liked this video" [ref=e1079]
                      - text: "45"
                      - generic [ref=e1081]:
                        - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1082]
                        - text: "26"
        - generic [ref=e1155]:
          - generic [ref=e1156]:
            - generic [ref=e1158]: Up next
            - generic [ref=e1161]:
              - generic [ref=e1162]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e1165]
                - link "4:28 Rolling With Danielle Macdonald Catch Up With the 'Saccharine' Star 45 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1166]:
                  - /url: /video/vi3002256153/?listId=ls053181649&ref_=hm_hp_vi_10
                  - generic [ref=e1170]: 4:28
                  - generic [ref=e1172]: Rolling With Danielle Macdonald
                  - generic [ref=e1174]: Catch Up With the 'Saccharine' Star
                  - generic [ref=e1175]:
                    - img "45 people liked this video" [ref=e1176]
                    - text: "45"
                    - generic [ref=e1178]:
                      - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1179]
                      - text: "26"
              - generic [ref=e1250]:
                - img "Primetime" [ref=e1253]
                - link "1:03 Robert Pattinson Stars in 'Primetime' Watch the Teaser 63 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1254]:
                  - /url: /video/vi3322727193/?listId=ls053181649&ref_=hm_hp_vi_1
                  - generic [ref=e1258]: 1:03
                  - generic [ref=e1260]: Robert Pattinson Stars in 'Primetime'
                  - generic [ref=e1262]: Watch the Teaser
                  - generic [ref=e1263]:
                    - img "63 people liked this video" [ref=e1264]
                    - text: "63"
                    - generic [ref=e1266]:
                      - img "There are 26 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1267]
                      - text: "26"
              - generic [ref=e1340]:
                - img "Victorian Psycho" [ref=e1343]
                - link "1:16 Maika Monroe Stars in 'Victorian Psycho' Watch the Spooky New Trailer 218 people liked this videoThere are 86 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1344]:
                  - /url: /video/vi1040698137/?listId=ls053181649&ref_=hm_hp_vi_2
                  - generic [ref=e1348]: 1:16
                  - generic [ref=e1350]: Maika Monroe Stars in 'Victorian Psycho'
                  - generic [ref=e1352]: Watch the Spooky New Trailer
                  - generic [ref=e1353]:
                    - img "218 people liked this video" [ref=e1354]
                    - text: "218"
                    - generic [ref=e1356]:
                      - img "There are 86 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1357]
                      - text: "86"
              - generic [ref=e1428]:
                - img "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e1431]
                - link "11:22 The Mandalorian Is Here for Your Questions Watch Now 128 people liked this videoThere are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1432]:
                  - /url: /video/vi1325845273/?listId=ls053181649&ref_=hm_hp_vi_3
                  - generic [ref=e1436]: 11:22
                  - generic [ref=e1438]: The Mandalorian Is Here for Your Questions
                  - generic [ref=e1440]: Watch Now
                  - generic [ref=e1441]:
                    - img "128 people liked this video" [ref=e1442]
                    - text: "128"
                    - generic [ref=e1444]:
                      - img "There are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1445]
                      - text: "49"
              - generic [ref=e1518]:
                - img "Vought Rising" [ref=e1521]
                - link "1:24 \"Vought Rising\" Get a First Look 1417 people liked this videoThere are 558 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1522]:
                  - /url: /video/vi1627966233/?listId=ls053181649&ref_=hm_hp_vi_4
                  - generic [ref=e1526]: 1:24
                  - generic [ref=e1528]: "\"Vought Rising\""
                  - generic [ref=e1530]: Get a First Look
                  - generic [ref=e1531]:
                    - img "1417 people liked this video" [ref=e1532]
                    - text: 1.4K
                    - generic [ref=e1534]:
                      - img "There are 558 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1535]
                      - text: "558"
              - generic [ref=e1608]:
                - 'img "Avatar: The Last Airbender" [ref=e1611]'
                - 'link "1:56 \"Avatar: The Last Airbender\" Season 2 Premieres June 25 on Netflix 123 people liked this videoThere are 98 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1612]':
                  - /url: /video/vi1560791833/?listId=ls053181649&ref_=hm_hp_vi_5
                  - generic [ref=e1616]: 1:56
                  - generic [ref=e1618]: "\"Avatar: The Last Airbender\""
                  - generic [ref=e1620]: Season 2 Premieres June 25 on Netflix
                  - generic [ref=e1621]:
                    - img "123 people liked this video" [ref=e1622]
                    - text: "123"
                    - generic [ref=e1624]:
                      - img "There are 98 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1625]
                      - text: "98"
          - link "Browse trailers" [ref=e1697]:
            - /url: /trailers/?ref_=hm_hp_sm
            - text: Browse trailers
      - generic [ref=e1703]:
        - link "Summer Watch Guide" [ref=e1704] [cursor=pointer]:
          - /url: /imdbpicks/summer-watch-guide/?ref_=hm_chip_hm_p1_csegswg
          - generic [ref=e1705]: Summer Watch Guide
        - link "Cannes Winners" [ref=e1708] [cursor=pointer]:
          - /url: /event/ev0000147/2026/1/?ref_=hm_chip_hm_p2_csegcann
          - generic [ref=e1709]: Cannes Winners
        - link "AAPI Heritage Month" [ref=e1712] [cursor=pointer]:
          - /url: /spotlight/?ref_=hm_chip_hm_p3_csegahm
          - generic [ref=e1713]: AAPI Heritage Month
        - link "Crunchyroll Anime Awards" [ref=e1716] [cursor=pointer]:
          - /url: /event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds
          - generic [ref=e1717]: Crunchyroll Anime Awards
      - generic [ref=e1720]:
        - generic [ref=e1721]:
          - heading "Featured today" [level=3] [ref=e1724]
          - group [ref=e1726]:
            - generic [ref=e1727]:
              - group [ref=e1728]:
                - group [ref=e1729]:
                  - img "Production art" [ref=e1731]
                  - link "List" [ref=e1732]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_i
                    - generic [ref=e1740]: List
                - generic [ref=e1742]:
                  - link "What We're Watching This Week" [ref=e1743] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_t
                    - generic [ref=e1744]: What We're Watching This Week
                  - link "See the list" [ref=e1746]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_c_ls_5tw_1_cta
              - group [ref=e1747]:
                - group [ref=e1748]:
                  - img "Production art" [ref=e1750]
                  - link "Photos" [ref=e1751]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_i
                    - generic [ref=e1757]: Photos
                - generic [ref=e1759]:
                  - link "See Who's Trending on IMDb Right Now" [ref=e1760] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_t
                    - generic [ref=e1761]: See Who's Trending on IMDb Right Now
                  - link "See the gallery" [ref=e1763]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_c_sw_ts_2_cta
              - group [ref=e1764]:
                - group [ref=e1765]:
                  - img "Production art" [ref=e1767]
                  - link "Photos" [ref=e1768]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_i
                    - generic [ref=e1774]: Photos
                - generic [ref=e1776]:
                  - link "Asian Hollywood Stars to Watch" [ref=e1777] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_t
                    - generic [ref=e1778]: Asian Hollywood Stars to Watch
                  - link "See the full gallery" [ref=e1780]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_c_csegahm_apahm_gal_stars_3_cta
              - group [ref=e1781]:
                - group [ref=e1782]:
                  - img "Poster" [ref=e1784]
                  - link "List" [ref=e1785]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_i
                    - generic [ref=e1793]: List
                - generic [ref=e1795]:
                  - link "'Backrooms' and More Horrors Are Coming" [ref=e1796] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_t
                    - generic [ref=e1797]: "'Backrooms' and More Horrors Are Coming"
                  - link "See the list" [ref=e1799]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_c_cseghw_ls_horror_4_cta
              - group [ref=e1800]:
                - group [ref=e1801]:
                  - img "Event photo" [ref=e1803]
                  - link "List" [ref=e1804]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_5_i
                    - generic [ref=e1812]: List
                - generic [ref=e1814]:
                  - 'link "In Memoriam: Stars We Lost in 2026" [ref=e1815] [cursor=pointer]':
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_5_t
                    - generic [ref=e1816]: "In Memoriam: Stars We Lost in 2026"
                  - link "See more" [ref=e1818]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_c_csegbest_g_inmem26_5_cta
              - group [ref=e1819]:
                - group [ref=e1820]:
                  - generic [ref=e1821]:
                    - img "Production art"
                  - link "Photos" [ref=e1822]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_6_i
                    - generic [ref=e1828]: Photos
                - generic [ref=e1830]:
                  - link "The Best Photos on the Internet Right Now" [ref=e1831] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_6_t
                    - generic [ref=e1832]: The Best Photos on the Internet Right Now
                  - link "See the gallery" [ref=e1834]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_6_cta
              - group [ref=e1835]:
                - group [ref=e1836]:
                  - generic [ref=e1837]:
                    - img "Production art"
                  - link "Poll" [ref=e1838]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_7_i
                    - generic [ref=e1846]: Poll
                - generic [ref=e1848]:
                  - 'link "Poll: Yoda vs. Grogu" [ref=e1849] [cursor=pointer]':
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_7_t
                    - generic [ref=e1850]: "Poll: Yoda vs. Grogu"
                  - link "Vote now" [ref=e1852]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_7_cta
              - group [ref=e1853]:
                - group [ref=e1854]:
                  - generic [ref=e1855]:
                    - img "Poster"
                  - link "List" [ref=e1856]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_8_i
                    - generic [ref=e1864]: List
                - generic [ref=e1866]:
                  - link "Theatrical Releases You Can Stream or Rent" [ref=e1867] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_8_t
                    - generic [ref=e1868]: Theatrical Releases You Can Stream or Rent
                  - link "See the list" [ref=e1870]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_8_cta
              - group [ref=e1871]:
                - group [ref=e1872]:
                  - generic [ref=e1873]:
                    - img "Poster"
                  - link "List" [ref=e1874]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_9_i
                    - generic [ref=e1882]: List
                - generic [ref=e1884]:
                  - 'link "Staff Picks: What to Watch in May" [ref=e1885] [cursor=pointer]':
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_9_t
                    - generic [ref=e1886]: "Staff Picks: What to Watch in May"
                  - link "See our picks" [ref=e1888]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_9_cta
              - group [ref=e1889]:
                - group [ref=e1890]:
                  - generic [ref=e1891]:
                    - img "Poster"
                  - link "Photos" [ref=e1892]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_10_i
                    - generic [ref=e1898]: Photos
                - generic [ref=e1900]:
                  - link "The Latest Movie and TV Posters" [ref=e1901] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_10_t
                    - generic [ref=e1902]: The Latest Movie and TV Posters
                  - link "See more posters" [ref=e1904]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_10_cta
              - group [ref=e1905]:
                - group [ref=e1906]:
                  - generic [ref=e1907]:
                    - img "Poster"
                  - link "List" [ref=e1908]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_11_i
                    - generic [ref=e1916]: List
                - generic [ref=e1918]:
                  - 'link "TV Tracker: Renewed and Canceled Shows" [ref=e1919] [cursor=pointer]':
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_11_t
                    - generic [ref=e1920]: "TV Tracker: Renewed and Canceled Shows"
                  - link "Check the status" [ref=e1922]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_11_cta
              - group [ref=e1923]:
                - group [ref=e1924]:
                  - generic [ref=e1925]:
                    - img "Poster"
                  - link "List" [ref=e1926]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_12_i
                    - generic [ref=e1934]: List
                - generic [ref=e1936]:
                  - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'" [ref=e1937] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_12_t
                    - generic [ref=e1938]: My Summer Watchlist Loves 'Boosters' and 'Backrooms'
                  - link "See the recs" [ref=e1940]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_12_cta
              - group [ref=e1941]:
                - group [ref=e1942]:
                  - generic [ref=e1943]:
                    - img "Production art"
                  - link "List" [ref=e1944]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_13_i
                    - generic [ref=e1952]: List
                - generic [ref=e1954]:
                  - link "IMDb's Picks For Asian Pacific American Heritage Month" [ref=e1955] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_13_t
                    - generic [ref=e1956]: IMDb's Picks For Asian Pacific American Heritage Month
                  - link "See the list" [ref=e1958]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_13_cta
        - complementary "Sponsored Content" [ref=e1962]:
          - iframe [ref=e1965]:
            - generic "Text reads 'IMDb', 'Explore trending TV and save to your Watchlist', 'Find your next binge', 'Explore now'. IMDb promotional banner featuring dark background with blue light effects, yellow IMDb logo, white bold text, and yellow call-to-action button. Bottom displays thumbnail images of TV shows." [ref=f4e3]:
              - img "Click to learn more about this sponsored product" [ref=f4e4]
              - link "Click to learn more about this sponsored product" [ref=f4e6] [cursor=pointer]:
                - /url: https://www.imdb.com/what-to-watch/?ref_=imdb_1P_ada_uk_streaming&aref=2Wsm4O15Bf
                - generic [ref=f4e7]: Click to learn more about this sponsored product
          - button "Get information, provide feedback or report sponsored ad" [ref=e1966] [cursor=pointer]: SPONSORED
      - link "Most popular celebrities" [ref=e1970]:
        - /url: /chart/starmeter/?ref_=hm_mpc_sm
        - heading "Most popular celebrities" [level=3] [ref=e1971]: Most popular celebrities
      - generic [ref=e1979]:
        - heading "What to watch" [level=3] [ref=e1981]
        - link "Get more recommendations" [ref=e1983] [cursor=pointer]:
          - /url: /what-to-watch/?ref_=hm_watch_btn
          - generic [ref=e1984]: Get more recommendations
      - generic [ref=e1991]:
        - heading "Explore what’s streaming" [level=3] [ref=e1993]
        - link "Set your preferred services" [ref=e1995] [cursor=pointer]:
          - /url: /preferences/preferredservices/?ref_=hm_stp_btn
          - generic [ref=e1998]: Set your preferred services
      - heading "Explore movies & TV shows" [level=3] [ref=e2004]
      - heading "More to explore" [level=3] [ref=e2010]
    - generic [ref=e2015]:
      - heading "Recently viewed" [level=3] [ref=e2018]
      - generic [ref=e2020]: You have no recently viewed pages
    - contentinfo [ref=e2021]:
      - link "Sign in for more access" [ref=e2023] [cursor=pointer]:
        - /url: /registration/signin/?u=%2F&ref_=hm_ftr_reg
        - generic [ref=e2024]: Sign in for more access
      - generic [ref=e2025]:
        - generic [ref=e2026]:
          - generic [ref=e2027]:
            - generic [ref=e2028]: Follow IMDb on social
            - link "TikTok" [ref=e2029] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e2031] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e2034] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e2036] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e2038] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e2040]:
            - generic [ref=e2041]:
              - generic [ref=e2042]: Get the IMDb app
              - generic [ref=e2043]: For Android and iOS
            - group [ref=e2045]:
              - generic [ref=e2046]:
                - img "Get the IMDb app"
              - link "For Android and iOS" [ref=e2047]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e2049]:
          - link "Help" [ref=e2050]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e2052]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e2054]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e2056]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e2058]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e2060]:
          - link "Press Room" [ref=e2061]:
            - /url: /pressroom/?ref_=hm_ftr
          - link "Advertising" [ref=e2062]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e2064]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e2066]:
            - /url: /conditions/?ref_=hm_ftr
          - link "Privacy Policy" [ref=e2067]:
            - /url: /privacy/?ref_=hm_ftr
          - generic [ref=e2068]:
            - link "Your Ads Privacy Choices" [ref=e2069]:
              - /url: /privacy/redirect/?ref_=hm_ftr
              - img [ref=e2070]
            - link "Your Ads Privacy Choices" [ref=e2082]:
              - /url: /privacy/redirect/?ref_=hm_ftr
      - img "IMDb, an Amazon company" [ref=e2084]
      - paragraph [ref=e2154]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e2155] [cursor=pointer]:
      - generic [ref=e2158]: Back to top
    - img
    - status
    - img
  - alert [ref=e2159]
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
  62  |   await page.goto('https://www.imdb.com/');
  63  |   await page.getByText('EN', { exact: true }).click();
> 64  |   await expect(page.getByText('Language')).toBeVisible();
      |                                            ^ Error: expect(locator).toBeVisible() failed
  65  | });
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
  93  | // //12
  94  | // test('Top 10 on IMDb this week', async ({ page }) => {
  95  | //  const top10Link = page.getByRole('link', { name: /Top 10 on IMDb this week/i });
  96  | //   await expect(top10Link).toBeVisible();
  97  | //   await top10Link.click();
  98  | //   await expect(page).not.toHaveURL('https://www.imdb.com/');
  99  | // });
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