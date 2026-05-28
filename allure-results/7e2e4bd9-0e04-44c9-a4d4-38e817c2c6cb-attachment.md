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
          - link "Sponsored Content" [ref=f2e2] [cursor=pointer]:
            - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RAPp61plmAlVs9_-xvC0zAwAAAGebTm6VAMAAADKAUFvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDIgICCRGHQC/clv1c_ek-gwYU2HcDCzbWVai5p-s0S4kwZOfLAoUmEYRRoT05s83hLb6SGRraUr5Jd2i8w2353kf-f43usIkhZIxiUGcvDlU_rdbCIaSo3CyUpA6vRJNU0I7gjz-7MiRXFACpVVlR0CXqCRbHgSoJKpYk0igkFF9DWsFDy8ixQHzBueABXMlahlrAk09TeLEY55U4BX3V7wqlljDdOEEzLp1_KP997z8XWK3eark-Y9D1Mb2wGmi0UsubFTSD85saeWlhXBdpmtUZj8LUg4sxX3r99IARMAlyMh0FdQh3IZGD5SHHekB2ZNq-5ZXu-J1TUZ4z-27MoLtgwKJFfdY50Nlw218t16LRuTcuDkJMyYudH2dPNpRKJF5ipjsFWnIAMJhIERNbvhNtKN8HmmQyaKtBQ5M_TRYq1rlsk5TGlCDK3dsH50tE2rMZgs_wDzTfuu3u3BSsk4PEH5WLxto5_kXjFLGiN5RoGyvCapXyLryHBdoHWOVVES13P6c2bjDetCrTzGftI51JbBS2RDY_FB_OiTTpwcBLQY86Va-6ZyL5o2VFTYlRphXirlewAjKrWS-BjMvB3OMWS116vRWI0WNJmbo1NJdoCDi0KqvhqAo4mY0R98DiwRU87EvpUd637dabm71WlrmDuwKJIcOrpdFD-sXnzR_H-t8281TfP6Q3IydsNDIsu1ujkjFUy3T6T71PFMqsb1gG3XyroUtknMBWHaF_da8vYHVKzT8G-mflcHnp14hsGSlXalg/https://primevideo.com/detail/amzn1.dv.gti.16a0fcfa-f9b3-404f-9d08-344f9cedd867/?aref=i95sefbp3J&ref_=dvm_crs_imd_in_s_exams1
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
                - generic [ref=e353]:
                  - img "The Mandalorian Is Here for Your Questions"
                - generic "The Mandalorian Is Here for Your Questions" [ref=e354]:
                  - generic [ref=e361]:
                    - generic [ref=e362]:
                      - generic [ref=e363]: The Mandalorian Is Here for Your Questions
                      - generic [ref=e364]: 11:22
                    - generic [ref=e365]: Watch Now
                    - generic [ref=e366]:
                      - img "128 people liked this video" [ref=e367]
                      - text: "128"
                      - generic [ref=e369]:
                        - img "There are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e370]
                        - text: "49"
          - figure [ref=e444]:
            - generic [ref=e445]:
              - group [ref=e446]:
                - generic [ref=e447]:
                  - 'img "Avatar: The Last Airbender"'
                - button "Add to Watchlist" [ref=e448] [cursor=pointer]
                - 'generic "Avatar: The Last Airbender" [ref=e453]'
              - group [ref=e455] [cursor=pointer]:
                - generic [ref=e456]:
                  - 'img "\"Avatar: The Last Airbender\""'
                - 'generic "\"Avatar: The Last Airbender\"" [ref=e457]':
                  - generic [ref=e464]:
                    - generic [ref=e465]:
                      - generic [ref=e466]: "\"Avatar: The Last Airbender\""
                      - generic [ref=e467]: 1:56
                    - generic [ref=e468]: Season 2 Premieres June 25 on Netflix
                    - generic [ref=e469]:
                      - img "123 people liked this video" [ref=e470]
                      - text: "123"
                      - generic [ref=e472]:
                        - img "There are 98 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e473]
                        - text: "98"
          - figure [ref=e545]:
            - generic [ref=e546]:
              - group [ref=e547]:
                - generic [ref=e548]:
                  - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set"'
                - button "Add to Watchlist" [ref=e549] [cursor=pointer]
                - 'generic "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e554]'
              - group [ref=e556] [cursor=pointer]:
                - generic [ref=e557]:
                  - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set"'
                - 'generic "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e558]':
                  - generic [ref=e565]:
                    - generic [ref=e566]:
                      - generic [ref=e567]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                      - generic [ref=e568]: 5:19
                    - generic [ref=e569]: Hear Why. Watch Now.
                    - generic [ref=e570]:
                      - img "136 people liked this video" [ref=e571]
                      - text: "136"
                      - generic [ref=e573]:
                        - img "There are 52 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e574]
                        - text: "52"
          - figure [ref=e648]:
            - generic [ref=e649]:
              - group [ref=e650]:
                - generic [ref=e651]:
                  - img "Spa Weekend"
                - button "Add to Watchlist" [ref=e652] [cursor=pointer]
                - generic "Spa Weekend" [ref=e657]
              - group [ref=e659] [cursor=pointer]:
                - generic [ref=e660]:
                  - img "'Spa Weekend'"
                - generic "'Spa Weekend'" [ref=e661]:
                  - generic [ref=e668]:
                    - generic [ref=e669]:
                      - generic [ref=e670]: "'Spa Weekend'"
                      - generic [ref=e671]: 2:30
                    - generic [ref=e672]: Watch the Trailer
                    - generic [ref=e673]:
                      - img "14 people liked this video" [ref=e674]
                      - text: "14"
                      - generic [ref=e676]:
                        - img "There are 22 reactions to this video from other people, primarily Love it and Funny emojis" [ref=e677]
                        - text: "22"
          - figure [ref=e748]:
            - generic [ref=e749]:
              - group [ref=e750]:
                - generic [ref=e751]:
                  - img "Vought Rising"
                - button "Add to Watchlist" [ref=e752] [cursor=pointer]
                - generic "Vought Rising" [ref=e757]
              - group [ref=e759] [cursor=pointer]:
                - generic [ref=e760]:
                  - img "\"Vought Rising\""
                - generic "\"Vought Rising\"" [ref=e761]:
                  - generic [ref=e768]:
                    - generic [ref=e769]:
                      - generic [ref=e770]: "\"Vought Rising\""
                      - generic [ref=e771]: 1:24
                    - generic [ref=e772]: Get a First Look
                    - generic [ref=e773]:
                      - img "1417 people liked this video" [ref=e774]
                      - text: 1.4K
                      - generic [ref=e776]:
                        - img "There are 558 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e777]
                        - text: "558"
          - figure [ref=e851]:
            - generic [ref=e852]:
              - group [ref=e853]:
                - generic [ref=e854]:
                  - img "Rolling Credits With Danielle Macdonald"
                - button "Add to Watchlist" [ref=e855] [cursor=pointer]
                - generic "Rolling Credits With Danielle Macdonald" [ref=e860]
              - group [ref=e862] [cursor=pointer]:
                - generic [ref=e863]:
                  - img "Rolling With Danielle Macdonald"
                - generic "Rolling With Danielle Macdonald" [ref=e864]:
                  - generic [ref=e871]:
                    - generic [ref=e872]:
                      - generic [ref=e873]: Rolling With Danielle Macdonald
                      - generic [ref=e874]: 4:28
                    - generic [ref=e875]: Catch Up With the 'Saccharine' Star
                    - generic [ref=e876]:
                      - img "45 people liked this video" [ref=e877]
                      - text: "45"
                      - generic [ref=e879]:
                        - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e880]
                        - text: "26"
          - figure [ref=e952]:
            - generic [ref=e953]:
              - group [ref=e954]:
                - generic [ref=e955]:
                  - img "Enola Holmes 3"
                - button "Add to Watchlist" [ref=e956] [cursor=pointer]
                - generic "Enola Holmes 3" [ref=e961]
              - group [ref=e963] [cursor=pointer]:
                - generic [ref=e964]:
                  - img "'Enola Homes 3'"
                - generic "'Enola Homes 3'" [ref=e965]:
                  - generic [ref=e972]:
                    - generic [ref=e973]:
                      - generic [ref=e974]: "'Enola Homes 3'"
                      - generic [ref=e975]: 1:06
                    - generic [ref=e976]: Watch the Trailer
                    - generic [ref=e977]:
                      - img "19 people liked this video" [ref=e978]
                      - text: "19"
                      - generic [ref=e980]:
                        - img "There are 23 reactions to this video from other people, primarily Love it and Funny emojis" [ref=e981]
                        - text: "23"
          - figure [ref=e1052]:
            - generic [ref=e1053]:
              - group [ref=e1054]:
                - generic [ref=e1055]:
                  - img "Toy Story 5"
                - button "Add to Watchlist" [ref=e1056] [cursor=pointer]
                - generic "Toy Story 5" [ref=e1061]
              - group [ref=e1063] [cursor=pointer]:
                - generic [ref=e1064]:
                  - img "'Toy Story 5'"
                - generic "'Toy Story 5'" [ref=e1065]:
                  - generic [ref=e1072]:
                    - generic [ref=e1073]:
                      - generic [ref=e1074]: "'Toy Story 5'"
                      - generic [ref=e1075]: 1:45
                    - generic [ref=e1076]: Watch the Trailer
                    - generic [ref=e1077]:
                      - img "123 people liked this video" [ref=e1078]
                      - text: "123"
                      - generic [ref=e1080]:
                        - img "There are 72 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1081]
                        - text: "72"
        - generic [ref=e1154]:
          - generic [ref=e1155]:
            - generic [ref=e1157]: Up next
            - generic [ref=e1160]:
              - generic [ref=e1161]:
                - img "Toy Story 5" [ref=e1164]
                - link "1:45 'Toy Story 5' Watch the Trailer 123 people liked this videoThere are 72 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1165] [cursor=pointer]:
                  - /url: /video/vi369937177/?listId=ls053181649&ref_=hm_hp_vi_10
                  - generic [ref=e1169]: 1:45
                  - generic [ref=e1171]: "'Toy Story 5'"
                  - generic [ref=e1173]: Watch the Trailer
                  - generic [ref=e1174]:
                    - img "123 people liked this video" [ref=e1175]
                    - text: "123"
                    - generic [ref=e1177]:
                      - img "There are 72 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1178]
                      - text: "72"
              - generic [ref=e1249]:
                - img "Primetime" [ref=e1252]
                - link "1:03 Robert Pattinson Stars in 'Primetime' Watch the Teaser 63 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1253] [cursor=pointer]:
                  - /url: /video/vi3322727193/?listId=ls053181649&ref_=hm_hp_vi_1
                  - generic [ref=e1257]: 1:03
                  - generic [ref=e1259]: Robert Pattinson Stars in 'Primetime'
                  - generic [ref=e1261]: Watch the Teaser
                  - generic [ref=e1262]:
                    - img "63 people liked this video" [ref=e1263]
                    - text: "63"
                    - generic [ref=e1265]:
                      - img "There are 26 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1266]
                      - text: "26"
              - generic [ref=e1339]:
                - img "Victorian Psycho" [ref=e1342]
                - link "1:16 Maika Monroe Stars in 'Victorian Psycho' Watch the Spooky New Trailer 218 people liked this videoThere are 86 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1343] [cursor=pointer]:
                  - /url: /video/vi1040698137/?listId=ls053181649&ref_=hm_hp_vi_2
                  - generic [ref=e1347]: 1:16
                  - generic [ref=e1349]: Maika Monroe Stars in 'Victorian Psycho'
                  - generic [ref=e1351]: Watch the Spooky New Trailer
                  - generic [ref=e1352]:
                    - img "218 people liked this video" [ref=e1353]
                    - text: "218"
                    - generic [ref=e1355]:
                      - img "There are 86 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1356]
                      - text: "86"
              - generic [ref=e1427]:
                - img "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e1430]
                - link "11:22 The Mandalorian Is Here for Your Questions Watch Now 128 people liked this videoThere are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1431] [cursor=pointer]:
                  - /url: /video/vi1325845273/?listId=ls053181649&ref_=hm_hp_vi_3
                  - generic [ref=e1435]: 11:22
                  - generic [ref=e1437]: The Mandalorian Is Here for Your Questions
                  - generic [ref=e1439]: Watch Now
                  - generic [ref=e1440]:
                    - img "128 people liked this video" [ref=e1441]
                    - text: "128"
                    - generic [ref=e1443]:
                      - img "There are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1444]
                      - text: "49"
              - generic [ref=e1517]:
                - 'img "Avatar: The Last Airbender" [ref=e1520]'
                - 'link "1:56 \"Avatar: The Last Airbender\" Season 2 Premieres June 25 on Netflix 123 people liked this videoThere are 98 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1521] [cursor=pointer]':
                  - /url: /video/vi1560791833/?listId=ls053181649&ref_=hm_hp_vi_4
                  - generic [ref=e1525]: 1:56
                  - generic [ref=e1527]: "\"Avatar: The Last Airbender\""
                  - generic [ref=e1529]: Season 2 Premieres June 25 on Netflix
                  - generic [ref=e1530]:
                    - img "123 people liked this video" [ref=e1531]
                    - text: "123"
                    - generic [ref=e1533]:
                      - img "There are 98 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1534]
                      - text: "98"
              - generic [ref=e1605]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e1608]'
                - 'link "5:19 It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set Hear Why. Watch Now. 136 people liked this videoThere are 52 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1609] [cursor=pointer]':
                  - /url: /video/vi941542169/?listId=ls053181649&ref_=hm_hp_vi_5
                  - generic [ref=e1613]: 5:19
                  - generic [ref=e1615]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                  - generic [ref=e1617]: Hear Why. Watch Now.
                  - generic [ref=e1618]:
                    - img "136 people liked this video" [ref=e1619]
                    - text: "136"
                    - generic [ref=e1621]:
                      - img "There are 52 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1622]
                      - text: "52"
          - link "Browse trailers" [ref=e1696] [cursor=pointer]:
            - /url: /trailers/?ref_=hm_hp_sm
            - text: Browse trailers
      - generic [ref=e1702]:
        - link "Summer Watch Guide" [ref=e1703] [cursor=pointer]:
          - /url: /imdbpicks/summer-watch-guide/?ref_=hm_chip_hm_p1_csegswg
          - generic [ref=e1704]: Summer Watch Guide
        - link "Cannes Winners" [ref=e1707] [cursor=pointer]:
          - /url: /event/ev0000147/2026/1/?ref_=hm_chip_hm_p2_csegcann
          - generic [ref=e1708]: Cannes Winners
        - link "AAPI Heritage Month" [ref=e1711] [cursor=pointer]:
          - /url: /spotlight/?ref_=hm_chip_hm_p3_csegahm
          - generic [ref=e1712]: AAPI Heritage Month
        - link "Crunchyroll Anime Awards" [ref=e1715] [cursor=pointer]:
          - /url: /event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds
          - generic [ref=e1716]: Crunchyroll Anime Awards
      - generic [ref=e1719]:
        - generic [ref=e1720]:
          - heading "Featured today" [level=3] [ref=e1723]
          - group [ref=e1725]:
            - generic [ref=e1726]:
              - group [ref=e1727]:
                - group [ref=e1728]:
                  - img "Production art" [ref=e1730]
                  - link "List" [ref=e1731] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_i
                    - generic [ref=e1739]: List
                - generic [ref=e1741]:
                  - link "What We're Watching This Week" [ref=e1742] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_t
                    - generic [ref=e1743]: What We're Watching This Week
                  - link "See the list" [ref=e1745] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_c_ls_5tw_1_cta
              - group [ref=e1746]:
                - group [ref=e1747]:
                  - img "Production art" [ref=e1749]
                  - link "Photos" [ref=e1750] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_i
                    - generic [ref=e1756]: Photos
                - generic [ref=e1758]:
                  - link "See Who's Trending on IMDb Right Now" [ref=e1759] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_t
                    - generic [ref=e1760]: See Who's Trending on IMDb Right Now
                  - link "See the gallery" [ref=e1762] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_c_sw_ts_2_cta
              - group [ref=e1763]:
                - group [ref=e1764]:
                  - img "Production art" [ref=e1766]
                  - link "Photos" [ref=e1767] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_i
                    - generic [ref=e1773]: Photos
                - generic [ref=e1775]:
                  - link "Asian Hollywood Stars to Watch" [ref=e1776] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_t
                    - generic [ref=e1777]: Asian Hollywood Stars to Watch
                  - link "See the full gallery" [ref=e1779] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_c_csegahm_apahm_gal_stars_3_cta
              - group [ref=e1780]:
                - group [ref=e1781]:
                  - img "Poster" [ref=e1783]
                  - link "List" [ref=e1784] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_i
                    - generic [ref=e1792]: List
                - generic [ref=e1794]:
                  - link "'Backrooms' and More Horrors Are Coming" [ref=e1795] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_t
                    - generic [ref=e1796]: "'Backrooms' and More Horrors Are Coming"
                  - link "See the list" [ref=e1798] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_c_cseghw_ls_horror_4_cta
              - group [ref=e1799]:
                - group [ref=e1800]:
                  - generic [ref=e1801]:
                    - img "Poster"
                  - link "List" [ref=e1802] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_5_i
                    - generic [ref=e1810]: List
                - generic [ref=e1812]:
                  - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'" [ref=e1813] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_5_t
                    - generic [ref=e1814]: My Summer Watchlist Loves 'Boosters' and 'Backrooms'
                  - link "See the recs" [ref=e1816] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_5_cta
              - group [ref=e1817]:
                - group [ref=e1818]:
                  - generic [ref=e1819]:
                    - img "Event photo"
                  - link "List" [ref=e1820] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_6_i
                    - generic [ref=e1828]: List
                - generic [ref=e1830]:
                  - 'link "In Memoriam: Stars We Lost in 2026" [ref=e1831] [cursor=pointer]':
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_6_t
                    - generic [ref=e1832]: "In Memoriam: Stars We Lost in 2026"
                  - link "See more" [ref=e1834] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_c_csegbest_g_inmem26_6_cta
              - group [ref=e1835]:
                - group [ref=e1836]:
                  - generic [ref=e1837]:
                    - img "Poster"
                  - link "Photos" [ref=e1838] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_7_i
                    - generic [ref=e1844]: Photos
                - generic [ref=e1846]:
                  - link "The Latest Movie and TV Posters" [ref=e1847] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_7_t
                    - generic [ref=e1848]: The Latest Movie and TV Posters
                  - link "See more posters" [ref=e1850] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_7_cta
              - group [ref=e1851]:
                - group [ref=e1852]:
                  - generic [ref=e1853]:
                    - img "Production art"
                  - link "Photos" [ref=e1854] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_8_i
                    - generic [ref=e1860]: Photos
                - generic [ref=e1862]:
                  - link "The Best Photos on the Internet Right Now" [ref=e1863] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_8_t
                    - generic [ref=e1864]: The Best Photos on the Internet Right Now
                  - link "See the gallery" [ref=e1866] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_8_cta
              - group [ref=e1867]:
                - group [ref=e1868]:
                  - generic [ref=e1869]:
                    - img "Poster"
                  - link "List" [ref=e1870] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_9_i
                    - generic [ref=e1878]: List
                - generic [ref=e1880]:
                  - 'link "TV Tracker: Renewed and Canceled Shows" [ref=e1881] [cursor=pointer]':
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_9_t
                    - generic [ref=e1882]: "TV Tracker: Renewed and Canceled Shows"
                  - link "Check the status" [ref=e1884] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_9_cta
              - group [ref=e1885]:
                - group [ref=e1886]:
                  - generic [ref=e1887]:
                    - img "Production art"
                  - link "List" [ref=e1888] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_10_i
                    - generic [ref=e1896]: List
                - generic [ref=e1898]:
                  - link "IMDb's Picks For Asian Pacific American Heritage Month" [ref=e1899] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_10_t
                    - generic [ref=e1900]: IMDb's Picks For Asian Pacific American Heritage Month
                  - link "See the list" [ref=e1902] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_10_cta
              - group [ref=e1903]:
                - group [ref=e1904]:
                  - generic [ref=e1905]:
                    - img "Production art"
                  - link "Poll" [ref=e1906] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_11_i
                    - generic [ref=e1914]: Poll
                - generic [ref=e1916]:
                  - 'link "Poll: Yoda vs. Grogu" [ref=e1917] [cursor=pointer]':
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_11_t
                    - generic [ref=e1918]: "Poll: Yoda vs. Grogu"
                  - link "Vote now" [ref=e1920] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_11_cta
              - group [ref=e1921]:
                - group [ref=e1922]:
                  - generic [ref=e1923]:
                    - img "Poster"
                  - link "List" [ref=e1924] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_12_i
                    - generic [ref=e1932]: List
                - generic [ref=e1934]:
                  - 'link "Staff Picks: What to Watch in May" [ref=e1935] [cursor=pointer]':
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_12_t
                    - generic [ref=e1936]: "Staff Picks: What to Watch in May"
                  - link "See our picks" [ref=e1938] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_12_cta
              - group [ref=e1939]:
                - group [ref=e1940]:
                  - generic [ref=e1941]:
                    - img "Poster"
                  - link "List" [ref=e1942] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_13_i
                    - generic [ref=e1950]: List
                - generic [ref=e1952]:
                  - link "Theatrical Releases You Can Stream or Rent" [ref=e1953] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_13_t
                    - generic [ref=e1954]: Theatrical Releases You Can Stream or Rent
                  - link "See the list" [ref=e1956] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_13_cta
        - complementary "Sponsored Content" [ref=e1960]:
          - iframe [ref=e1963]:
            - generic "Text reads 'IMDb', 'Explore trending TV and save to your Watchlist', 'Find your next binge', 'Explore now'. IMDb promotional banner featuring dark background with blue light effects, yellow IMDb logo, white bold text, and yellow call-to-action button. Bottom displays thumbnail images of TV shows." [ref=f4e3]:
              - img "Click to learn more about this sponsored product" [ref=f4e4]
              - link "Click to learn more about this sponsored product" [ref=f4e6] [cursor=pointer]:
                - /url: https://www.imdb.com/what-to-watch/?ref_=imdb_1P_ada_uk_streaming&aref=2Wsm4O15Bf
                - generic [ref=f4e7]: Click to learn more about this sponsored product
          - button "Get information, provide feedback or report sponsored ad" [ref=e1964] [cursor=pointer]: SPONSORED
      - link "Most popular celebrities" [ref=e1968] [cursor=pointer]:
        - /url: /chart/starmeter/?ref_=hm_mpc_sm
        - heading "Most popular celebrities" [level=3] [ref=e1969]: Most popular celebrities
      - generic [ref=e1977]:
        - heading "What to watch" [level=3] [ref=e1979]
        - link "Get more recommendations" [ref=e1981] [cursor=pointer]:
          - /url: /what-to-watch/?ref_=hm_watch_btn
          - generic [ref=e1982]: Get more recommendations
      - generic [ref=e1989]:
        - heading "Explore what’s streaming" [level=3] [ref=e1991]
        - link "Set your preferred services" [ref=e1993] [cursor=pointer]:
          - /url: /preferences/preferredservices/?ref_=hm_stp_btn
          - generic [ref=e1996]: Set your preferred services
      - heading "Explore movies & TV shows" [level=3] [ref=e2002]
      - heading "More to explore" [level=3] [ref=e2008]
    - generic [ref=e2013]:
      - heading "Recently viewed" [level=3] [ref=e2016]
      - generic [ref=e2018]: You have no recently viewed pages
    - contentinfo [ref=e2019]:
      - link "Sign in for more access" [ref=e2021] [cursor=pointer]:
        - /url: /registration/signin/?u=%2F&ref_=hm_ftr_reg
        - generic [ref=e2022]: Sign in for more access
      - generic [ref=e2023]:
        - generic [ref=e2024]:
          - generic [ref=e2025]:
            - generic [ref=e2026]: Follow IMDb on social
            - link "TikTok" [ref=e2027] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e2029] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e2032] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e2034] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e2036] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e2038]:
            - generic [ref=e2039]:
              - generic [ref=e2040]: Get the IMDb app
              - generic [ref=e2041]: For Android and iOS
            - group [ref=e2043]:
              - generic [ref=e2044]:
                - img "Get the IMDb app"
              - link "For Android and iOS" [ref=e2045] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e2047]:
          - link "Help" [ref=e2048] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e2050] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e2052] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e2054] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e2056] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e2058]:
          - link "Press Room" [ref=e2059] [cursor=pointer]:
            - /url: /pressroom/?ref_=hm_ftr
          - link "Advertising" [ref=e2060] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e2062] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e2064] [cursor=pointer]:
            - /url: /conditions/?ref_=hm_ftr
          - link "Privacy Policy" [ref=e2065] [cursor=pointer]:
            - /url: /privacy/?ref_=hm_ftr
          - generic [ref=e2066]:
            - link "Your Ads Privacy Choices" [ref=e2067] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
              - img [ref=e2068]
            - link "Your Ads Privacy Choices" [ref=e2080] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
      - img "IMDb, an Amazon company" [ref=e2082]
      - paragraph [ref=e2118]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e2119] [cursor=pointer]:
      - generic [ref=e2122]: Back to top
    - img
    - status
    - img
  - alert [ref=e2123]
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