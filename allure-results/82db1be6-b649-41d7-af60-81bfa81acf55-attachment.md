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
        - iframe [ref=e125]:
          - generic "Text reads 'IMDb', 'Explore trending TV and save to your Watchlist', 'Find your next binge', 'Explore more'. IMDb promotional banner featuring dark background with blue accent line, displaying TV show movie posters including Bridgerton and other titles on right side." [ref=f3e3]:
            - img "Click to learn more about this sponsored product" [ref=f3e4]
            - link "Click to learn more about this sponsored product" [ref=f3e6] [cursor=pointer]:
              - /url: https://www.imdb.com/what-to-watch/?ref_=imdb_1P_ada_uk_streaming&aref=2Wsm4O15Bf
              - generic [ref=f3e7]: Click to learn more about this sponsored product
        - button "Get information, provide feedback or report sponsored ad" [ref=e126] [cursor=pointer]: SPONSORED
      - generic [ref=e129]:
        - generic [ref=e132]:
          - figure [ref=e134]:
            - generic [ref=e135]:
              - group [ref=e136]:
                - img "Primetime" [ref=e138]
                - button "Add to Watchlist" [ref=e139] [cursor=pointer]
                - generic "Primetime" [ref=e144]
              - group [ref=e146] [cursor=pointer]:
                - img "Robert Pattinson Stars in 'Primetime'" [ref=e148]
                - generic "Robert Pattinson Stars in 'Primetime'" [ref=e149]:
                  - generic [ref=e156]:
                    - generic [ref=e157]:
                      - generic [ref=e158]: Robert Pattinson Stars in 'Primetime'
                      - generic [ref=e159]: 1:03
                    - generic [ref=e160]: Watch the Teaser
                    - generic [ref=e161]:
                      - img "63 people liked this video" [ref=e162]
                      - text: "63"
                      - generic [ref=e164]:
                        - img "There are 26 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e165]
                        - text: "26"
          - figure [ref=e239]:
            - generic [ref=e240]:
              - group [ref=e241]:
                - img "Victorian Psycho" [ref=e243]
                - button "Add to Watchlist" [ref=e244] [cursor=pointer]
                - generic "Victorian Psycho" [ref=e249]
              - group [ref=e251] [cursor=pointer]:
                - img "Maika Monroe Stars in 'Victorian Psycho'" [ref=e253]
                - generic "Maika Monroe Stars in 'Victorian Psycho'" [ref=e254]:
                  - generic [ref=e261]:
                    - generic [ref=e262]:
                      - generic [ref=e263]: Maika Monroe Stars in 'Victorian Psycho'
                      - generic [ref=e264]: 1:16
                    - generic [ref=e265]: Watch the Spooky New Trailer
                    - generic [ref=e266]:
                      - img "218 people liked this video" [ref=e267]
                      - text: "218"
                      - generic [ref=e269]:
                        - img "There are 86 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e270]
                        - text: "86"
          - figure [ref=e342]:
            - generic [ref=e343]:
              - group [ref=e344]:
                - img "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e346]
                - button "Add to Watchlist" [ref=e347] [cursor=pointer]
                - generic "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e352]
              - group [ref=e354] [cursor=pointer]:
                - img "The Mandalorian Is Here for Your Questions" [ref=e356]
                - generic "The Mandalorian Is Here for Your Questions" [ref=e357]:
                  - generic [ref=e364]:
                    - generic [ref=e365]:
                      - generic [ref=e366]: The Mandalorian Is Here for Your Questions
                      - generic [ref=e367]: 11:22
                    - generic [ref=e368]: Watch Now
                    - generic [ref=e369]:
                      - img "128 people liked this video" [ref=e370]
                      - text: "128"
                      - generic [ref=e372]:
                        - img "There are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e373]
                        - text: "49"
          - figure [ref=e447]:
            - generic [ref=e448]:
              - group [ref=e449]:
                - img "Enola Holmes 3" [ref=e451]
                - button "Add to Watchlist" [ref=e452] [cursor=pointer]
                - generic "Enola Holmes 3" [ref=e457]
              - group [ref=e459] [cursor=pointer]:
                - generic [ref=e460]:
                  - img "'Enola Homes 3'"
                - generic "'Enola Homes 3'" [ref=e461]:
                  - generic [ref=e468]:
                    - generic [ref=e469]:
                      - generic [ref=e470]: "'Enola Homes 3'"
                      - generic [ref=e471]: 1:06
                    - generic [ref=e472]: Watch the Trailer
                    - generic [ref=e473]:
                      - img "19 people liked this video" [ref=e474]
                      - text: "19"
                      - generic [ref=e476]:
                        - img "There are 23 reactions to this video from other people, primarily Love it and Funny emojis" [ref=e477]
                        - text: "23"
          - figure [ref=e548]:
            - generic [ref=e549]:
              - group [ref=e550]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e552]'
                - button "Add to Watchlist" [ref=e553] [cursor=pointer]
                - 'generic "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e558]'
              - group [ref=e560] [cursor=pointer]:
                - generic [ref=e561]:
                  - 'img "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set"'
                - 'generic "It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set" [ref=e562]':
                  - generic [ref=e569]:
                    - generic [ref=e570]:
                      - generic [ref=e571]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                      - generic [ref=e572]: 5:19
                    - generic [ref=e573]: Hear Why. Watch Now.
                    - generic [ref=e574]:
                      - img "136 people liked this video" [ref=e575]
                      - text: "136"
                      - generic [ref=e577]:
                        - img "There are 52 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e578]
                        - text: "52"
          - figure [ref=e652]:
            - generic [ref=e653]:
              - group [ref=e654]:
                - generic [ref=e655]:
                  - img "Spa Weekend"
                - button "Add to Watchlist" [ref=e656] [cursor=pointer]
                - generic "Spa Weekend" [ref=e661]
              - group [ref=e663] [cursor=pointer]:
                - generic [ref=e664]:
                  - img "'Spa Weekend'"
                - generic "'Spa Weekend'" [ref=e665]:
                  - generic [ref=e672]:
                    - generic [ref=e673]:
                      - generic [ref=e674]: "'Spa Weekend'"
                      - generic [ref=e675]: 2:30
                    - generic [ref=e676]: Watch the Trailer
                    - generic [ref=e677]:
                      - img "14 people liked this video" [ref=e678]
                      - text: "14"
                      - generic [ref=e680]:
                        - img "There are 22 reactions to this video from other people, primarily Love it and Funny emojis" [ref=e681]
                        - text: "22"
          - figure [ref=e752]:
            - generic [ref=e753]:
              - group [ref=e754]:
                - generic [ref=e755]:
                  - img "Toy Story 5"
                - button "Add to Watchlist" [ref=e756] [cursor=pointer]
                - generic "Toy Story 5" [ref=e761]
              - group [ref=e763] [cursor=pointer]:
                - generic [ref=e764]:
                  - img "'Toy Story 5'"
                - generic "'Toy Story 5'" [ref=e765]:
                  - generic [ref=e772]:
                    - generic [ref=e773]:
                      - generic [ref=e774]: "'Toy Story 5'"
                      - generic [ref=e775]: 1:45
                    - generic [ref=e776]: Watch the Trailer
                    - generic [ref=e777]:
                      - img "123 people liked this video" [ref=e778]
                      - text: "123"
                      - generic [ref=e780]:
                        - img "There are 72 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e781]
                        - text: "72"
          - figure [ref=e853]:
            - generic [ref=e854]:
              - group [ref=e855]:
                - generic [ref=e856]:
                  - img "Vought Rising"
                - button "Add to Watchlist" [ref=e857] [cursor=pointer]
                - generic "Vought Rising" [ref=e862]
              - group [ref=e864] [cursor=pointer]:
                - generic [ref=e865]:
                  - img "\"Vought Rising\""
                - generic "\"Vought Rising\"" [ref=e866]:
                  - generic [ref=e873]:
                    - generic [ref=e874]:
                      - generic [ref=e875]: "\"Vought Rising\""
                      - generic [ref=e876]: 1:24
                    - generic [ref=e877]: Get a First Look
                    - generic [ref=e878]:
                      - img "1417 people liked this video" [ref=e879]
                      - text: 1.4K
                      - generic [ref=e881]:
                        - img "There are 558 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e882]
                        - text: "558"
          - figure [ref=e956]:
            - generic [ref=e957]:
              - group [ref=e958]:
                - generic [ref=e959]:
                  - 'img "Avatar: The Last Airbender"'
                - button "Add to Watchlist" [ref=e960] [cursor=pointer]
                - 'generic "Avatar: The Last Airbender" [ref=e965]'
              - group [ref=e967] [cursor=pointer]:
                - generic [ref=e968]:
                  - 'img "\"Avatar: The Last Airbender\""'
                - 'generic "\"Avatar: The Last Airbender\"" [ref=e969]':
                  - generic [ref=e976]:
                    - generic [ref=e977]:
                      - generic [ref=e978]: "\"Avatar: The Last Airbender\""
                      - generic [ref=e979]: 1:56
                    - generic [ref=e980]: Season 2 Premieres June 25 on Netflix
                    - generic [ref=e981]:
                      - img "123 people liked this video" [ref=e982]
                      - text: "123"
                      - generic [ref=e984]:
                        - img "There are 98 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e985]
                        - text: "98"
          - figure [ref=e1057]:
            - generic [ref=e1058]:
              - group [ref=e1059]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e1061]
                - button "Add to Watchlist" [ref=e1062] [cursor=pointer]
                - generic "Rolling Credits With Danielle Macdonald" [ref=e1067]
              - group [ref=e1069] [cursor=pointer]:
                - generic [ref=e1070]:
                  - img "Rolling With Danielle Macdonald"
                - generic "Rolling With Danielle Macdonald" [ref=e1071]:
                  - generic [ref=e1078]:
                    - generic [ref=e1079]:
                      - generic [ref=e1080]: Rolling With Danielle Macdonald
                      - generic [ref=e1081]: 4:28
                    - generic [ref=e1082]: Catch Up With the 'Saccharine' Star
                    - generic [ref=e1083]:
                      - img "45 people liked this video" [ref=e1084]
                      - text: "45"
                      - generic [ref=e1086]:
                        - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1087]
                        - text: "26"
        - generic [ref=e1160]:
          - generic [ref=e1161]:
            - generic [ref=e1163]: Up next
            - generic [ref=e1166]:
              - generic [ref=e1167]:
                - img "Rolling Credits With Danielle Macdonald" [ref=e1170]
                - link "4:28 Rolling With Danielle Macdonald Catch Up With the 'Saccharine' Star 45 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1171] [cursor=pointer]:
                  - /url: /video/vi3002256153/?listId=ls053181649&ref_=hm_hp_vi_10
                  - generic [ref=e1175]: 4:28
                  - generic [ref=e1177]: Rolling With Danielle Macdonald
                  - generic [ref=e1179]: Catch Up With the 'Saccharine' Star
                  - generic [ref=e1180]:
                    - img "45 people liked this video" [ref=e1181]
                    - text: "45"
                    - generic [ref=e1183]:
                      - img "There are 26 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1184]
                      - text: "26"
              - generic [ref=e1255]:
                - img "Primetime" [ref=e1258]
                - link "1:03 Robert Pattinson Stars in 'Primetime' Watch the Teaser 63 people liked this videoThere are 26 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1259] [cursor=pointer]:
                  - /url: /video/vi3322727193/?listId=ls053181649&ref_=hm_hp_vi_1
                  - generic [ref=e1263]: 1:03
                  - generic [ref=e1265]: Robert Pattinson Stars in 'Primetime'
                  - generic [ref=e1267]: Watch the Teaser
                  - generic [ref=e1268]:
                    - img "63 people liked this video" [ref=e1269]
                    - text: "63"
                    - generic [ref=e1271]:
                      - img "There are 26 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1272]
                      - text: "26"
              - generic [ref=e1345]:
                - img "Victorian Psycho" [ref=e1348]
                - link "1:16 Maika Monroe Stars in 'Victorian Psycho' Watch the Spooky New Trailer 218 people liked this videoThere are 86 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1349] [cursor=pointer]:
                  - /url: /video/vi1040698137/?listId=ls053181649&ref_=hm_hp_vi_2
                  - generic [ref=e1353]: 1:16
                  - generic [ref=e1355]: Maika Monroe Stars in 'Victorian Psycho'
                  - generic [ref=e1357]: Watch the Spooky New Trailer
                  - generic [ref=e1358]:
                    - img "218 people liked this video" [ref=e1359]
                    - text: "218"
                    - generic [ref=e1361]:
                      - img "There are 86 reactions to this video from other people, primarily Love it and Excited emojis" [ref=e1362]
                      - text: "86"
              - generic [ref=e1433]:
                - img "'The Mandalorian and Grogu' Cast Answer Fan Questions" [ref=e1436]
                - link "11:22 The Mandalorian Is Here for Your Questions Watch Now 128 people liked this videoThere are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1437] [cursor=pointer]:
                  - /url: /video/vi1325845273/?listId=ls053181649&ref_=hm_hp_vi_3
                  - generic [ref=e1441]: 11:22
                  - generic [ref=e1443]: The Mandalorian Is Here for Your Questions
                  - generic [ref=e1445]: Watch Now
                  - generic [ref=e1446]:
                    - img "128 people liked this video" [ref=e1447]
                    - text: "128"
                    - generic [ref=e1449]:
                      - img "There are 49 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1450]
                      - text: "49"
              - generic [ref=e1523]:
                - img "Enola Holmes 3" [ref=e1526]
                - link "1:06 'Enola Homes 3' Watch the Trailer 19 people liked this videoThere are 23 reactions to this video from other people, primarily Love it and Funny emojis" [ref=e1527] [cursor=pointer]:
                  - /url: /video/vi4195142425/?listId=ls053181649&ref_=hm_hp_vi_4
                  - generic [ref=e1531]: 1:06
                  - generic [ref=e1533]: "'Enola Homes 3'"
                  - generic [ref=e1535]: Watch the Trailer
                  - generic [ref=e1536]:
                    - img "19 people liked this video" [ref=e1537]
                    - text: "19"
                    - generic [ref=e1539]:
                      - img "There are 23 reactions to this video from other people, primarily Love it and Funny emojis" [ref=e1540]
                      - text: "23"
              - generic [ref=e1610]:
                - 'img "Why the ''Jack Ryan: Ghost War'' Cast Couldn''t Stop Laughing on Set" [ref=e1613]'
                - 'link "5:19 It Was Non-Stop Laughter on the ''Jack Ryan: Ghost War'' Cast Set Hear Why. Watch Now. 136 people liked this videoThere are 52 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1614] [cursor=pointer]':
                  - /url: /video/vi941542169/?listId=ls053181649&ref_=hm_hp_vi_5
                  - generic [ref=e1618]: 5:19
                  - generic [ref=e1620]: "It Was Non-Stop Laughter on the 'Jack Ryan: Ghost War' Cast Set"
                  - generic [ref=e1622]: Hear Why. Watch Now.
                  - generic [ref=e1623]:
                    - img "136 people liked this video" [ref=e1624]
                    - text: "136"
                    - generic [ref=e1626]:
                      - img "There are 52 reactions to this video from other people, primarily Love it and Appreciate emojis" [ref=e1627]
                      - text: "52"
          - link "Browse trailers" [ref=e1701] [cursor=pointer]:
            - /url: /trailers/?ref_=hm_hp_sm
            - text: Browse trailers
      - generic [ref=e1707]:
        - link "Summer Watch Guide" [ref=e1708] [cursor=pointer]:
          - /url: /imdbpicks/summer-watch-guide/?ref_=hm_chip_hm_p1_csegswg
          - generic [ref=e1709]: Summer Watch Guide
        - link "Cannes Winners" [ref=e1712] [cursor=pointer]:
          - /url: /event/ev0000147/2026/1/?ref_=hm_chip_hm_p2_csegcann
          - generic [ref=e1713]: Cannes Winners
        - link "AAPI Heritage Month" [ref=e1716] [cursor=pointer]:
          - /url: /spotlight/?ref_=hm_chip_hm_p3_csegahm
          - generic [ref=e1717]: AAPI Heritage Month
        - link "Crunchyroll Anime Awards" [ref=e1720] [cursor=pointer]:
          - /url: /event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds
          - generic [ref=e1721]: Crunchyroll Anime Awards
      - generic [ref=e1724]:
        - generic [ref=e1725]:
          - heading "Featured today" [level=3] [ref=e1728]
          - group [ref=e1730]:
            - generic [ref=e1731]:
              - group [ref=e1732]:
                - group [ref=e1733]:
                  - img "Production art" [ref=e1735]
                  - link "List" [ref=e1736] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_i
                    - generic [ref=e1744]: List
                - generic [ref=e1746]:
                  - link "What We're Watching This Week" [ref=e1747] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_ls_5tw_1_t
                    - generic [ref=e1748]: What We're Watching This Week
                  - link "See the list" [ref=e1750] [cursor=pointer]:
                    - /url: /list/ls4172120774/?ref_=hm_edcft_c_ls_5tw_1_cta
              - group [ref=e1751]:
                - group [ref=e1752]:
                  - img "Production art" [ref=e1754]
                  - link "Photos" [ref=e1755] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_i
                    - generic [ref=e1761]: Photos
                - generic [ref=e1763]:
                  - link "See Who's Trending on IMDb Right Now" [ref=e1764] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_sw_ts_2_t
                    - generic [ref=e1765]: See Who's Trending on IMDb Right Now
                  - link "See the gallery" [ref=e1767] [cursor=pointer]:
                    - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=hm_edcft_c_sw_ts_2_cta
              - group [ref=e1768]:
                - group [ref=e1769]:
                  - img "Production art" [ref=e1771]
                  - link "Photos" [ref=e1772] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_i
                    - generic [ref=e1778]: Photos
                - generic [ref=e1780]:
                  - link "Asian Hollywood Stars to Watch" [ref=e1781] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_csegahm_apahm_gal_stars_3_t
                    - generic [ref=e1782]: Asian Hollywood Stars to Watch
                  - link "See the full gallery" [ref=e1784] [cursor=pointer]:
                    - /url: /spotlight/asian-hollywood-stars/rg712940288/mediaviewer/rm1871432450?ref_=hm_edcft_c_csegahm_apahm_gal_stars_3_cta
              - group [ref=e1785]:
                - group [ref=e1786]:
                  - img "Poster" [ref=e1788]
                  - link "List" [ref=e1789] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_i
                    - generic [ref=e1797]: List
                - generic [ref=e1799]:
                  - link "'Backrooms' and More Horrors Are Coming" [ref=e1800] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_cseghw_ls_horror_4_t
                    - generic [ref=e1801]: "'Backrooms' and More Horrors Are Coming"
                  - link "See the list" [ref=e1803] [cursor=pointer]:
                    - /url: /list/ls528329180/?ref_=hm_edcft_c_cseghw_ls_horror_4_cta
              - group [ref=e1804]:
                - group [ref=e1805]:
                  - img "Poster" [ref=e1807]
                  - link "Photos" [ref=e1808] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_5_i
                    - generic [ref=e1814]: Photos
                - generic [ref=e1816]:
                  - link "The Latest Movie and TV Posters" [ref=e1817] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_hp_g_lp_5_t
                    - generic [ref=e1818]: The Latest Movie and TV Posters
                  - link "See more posters" [ref=e1820] [cursor=pointer]:
                    - /url: /imdbpicks/latest-posters/rg1624939264/mediaviewer/rm873122050?ref_=hm_edcft_c_hp_g_lp_5_cta
              - group [ref=e1821]:
                - group [ref=e1822]:
                  - img "Poster" [ref=e1824]
                  - link "List" [ref=e1825] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_6_i
                    - generic [ref=e1833]: List
                - generic [ref=e1835]:
                  - link "Theatrical Releases You Can Stream or Rent" [ref=e1836] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_ft_ls_tr_6_t
                    - generic [ref=e1837]: Theatrical Releases You Can Stream or Rent
                  - link "See the list" [ref=e1839] [cursor=pointer]:
                    - /url: /list/ls521170945/?ref_=hm_edcft_c_ft_ls_tr_6_cta
              - group [ref=e1840]:
                - group [ref=e1841]:
                  - generic [ref=e1842]:
                    - img "Poster"
                  - link "List" [ref=e1843] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_7_i
                    - generic [ref=e1851]: List
                - generic [ref=e1853]:
                  - 'link "Staff Picks: What to Watch in May" [ref=e1854] [cursor=pointer]':
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_ft_staffpicks_elp_7_t
                    - generic [ref=e1855]: "Staff Picks: What to Watch in May"
                  - link "See our picks" [ref=e1857] [cursor=pointer]:
                    - /url: /imdbpicks/staff-picks/?ref_=hm_edcft_c_ft_staffpicks_elp_7_cta
              - group [ref=e1858]:
                - group [ref=e1859]:
                  - generic [ref=e1860]:
                    - img "Poster"
                  - link "List" [ref=e1861] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_8_i
                    - generic [ref=e1869]: List
                - generic [ref=e1871]:
                  - 'link "TV Tracker: Renewed and Canceled Shows" [ref=e1872] [cursor=pointer]':
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_ft_ls_rc_8_t
                    - generic [ref=e1873]: "TV Tracker: Renewed and Canceled Shows"
                  - link "Check the status" [ref=e1875] [cursor=pointer]:
                    - /url: /whats-on-tv/renew-cancel/ls063853872/mediaviewer/rm646297090/?ref_=hm_edcft_c_ft_ls_rc_8_cta
              - group [ref=e1876]:
                - group [ref=e1877]:
                  - generic [ref=e1878]:
                    - img "Production art"
                  - link "List" [ref=e1879] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_9_i
                    - generic [ref=e1887]: List
                - generic [ref=e1889]:
                  - link "IMDb's Picks For Asian Pacific American Heritage Month" [ref=e1890] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_csegspot_apahmwatchlist_9_t
                    - generic [ref=e1891]: IMDb's Picks For Asian Pacific American Heritage Month
                  - link "See the list" [ref=e1893] [cursor=pointer]:
                    - /url: /list/ls540779500/?ref_=hm_edcft_c_csegspot_apahmwatchlist_9_cta
              - group [ref=e1894]:
                - group [ref=e1895]:
                  - generic [ref=e1896]:
                    - img "Production art"
                  - link "Poll" [ref=e1897] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_10_i
                    - generic [ref=e1905]: Poll
                - generic [ref=e1907]:
                  - 'link "Poll: Yoda vs. Grogu" [ref=e1908] [cursor=pointer]':
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_pls_052326_10_t
                    - generic [ref=e1909]: "Poll: Yoda vs. Grogu"
                  - link "Vote now" [ref=e1911] [cursor=pointer]:
                    - /url: /poll/FOA6lC-x77c/?ref_=hm_edcft_c_pls_052326_10_cta
              - group [ref=e1912]:
                - group [ref=e1913]:
                  - generic [ref=e1914]:
                    - img "Event photo"
                  - link "List" [ref=e1915] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_11_i
                    - generic [ref=e1923]: List
                - generic [ref=e1925]:
                  - 'link "In Memoriam: Stars We Lost in 2026" [ref=e1926] [cursor=pointer]':
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_csegbest_g_inmem26_11_t
                    - generic [ref=e1927]: "In Memoriam: Stars We Lost in 2026"
                  - link "See more" [ref=e1929] [cursor=pointer]:
                    - /url: /imdbpicks/stars-we-lost-in-2026/ls4154313445/mediaviewer/rm1358288386/?ref_=hm_edcft_c_csegbest_g_inmem26_11_cta
              - group [ref=e1930]:
                - group [ref=e1931]:
                  - generic [ref=e1932]:
                    - img "Production art"
                  - link "Photos" [ref=e1933] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_12_i
                    - generic [ref=e1939]: Photos
                - generic [ref=e1941]:
                  - link "The Best Photos on the Internet Right Now" [ref=e1942] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_ft_g_pwl_12_t
                    - generic [ref=e1943]: The Best Photos on the Internet Right Now
                  - link "See the gallery" [ref=e1945] [cursor=pointer]:
                    - /url: /gallery/rg1641716480/mediaviewer/rm3090533890/?ref_=hm_edcft_c_ft_g_pwl_12_cta
              - group [ref=e1946]:
                - group [ref=e1947]:
                  - generic [ref=e1948]:
                    - img "Poster"
                  - link "List" [ref=e1949] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_13_i
                    - generic [ref=e1957]: List
                - generic [ref=e1959]:
                  - link "My Summer Watchlist Loves 'Boosters' and 'Backrooms'" [ref=e1960] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_li_arnosummer_13_t
                    - generic [ref=e1961]: My Summer Watchlist Loves 'Boosters' and 'Backrooms'
                  - link "See the recs" [ref=e1963] [cursor=pointer]:
                    - /url: /list/ls4172359817/?ref_=hm_edcft_c_li_arnosummer_13_cta
        - complementary "Sponsored Content" [ref=e1967]:
          - iframe [ref=e1970]:
            - generic "Text reads 'IMDb', 'FAMILY FILM NIGHT, PERFECTED.', 'Browse 40+ Timeless Hits for All Ages.', 'Find family favourites'. IMDb promotional banner featuring diverse characters including a muppet, children, and adults in period costumes against turquoise starry background with castle silhouette." [ref=f5e3]:
              - img "Click to learn more about this sponsored product" [ref=f5e4]
              - link "Click to learn more about this sponsored product" [ref=f5e6] [cursor=pointer]:
                - /url: https://www.imdb.com/list/ls592567077/?ref_=imdb_1p_ada_uk_family&aref=KzyuK06AH9
                - generic [ref=f5e7]: Click to learn more about this sponsored product
          - button "Get information, provide feedback or report sponsored ad" [ref=e1971] [cursor=pointer]: SPONSORED
      - link "Most popular celebrities" [ref=e1975] [cursor=pointer]:
        - /url: /chart/starmeter/?ref_=hm_mpc_sm
        - heading "Most popular celebrities" [level=3] [ref=e1976]: Most popular celebrities
      - generic [ref=e1984]:
        - heading "What to watch" [level=3] [ref=e1986]
        - link "Get more recommendations" [ref=e1988] [cursor=pointer]:
          - /url: /what-to-watch/?ref_=hm_watch_btn
          - generic [ref=e1989]: Get more recommendations
      - generic [ref=e1996]:
        - heading "Explore what’s streaming" [level=3] [ref=e1998]
        - link "Set your preferred services" [ref=e2000] [cursor=pointer]:
          - /url: /preferences/preferredservices/?ref_=hm_stp_btn
          - generic [ref=e2003]: Set your preferred services
      - heading "Explore movies & TV shows" [level=3] [ref=e2009]
      - heading "More to explore" [level=3] [ref=e2015]
    - generic [ref=e2020]:
      - heading "Recently viewed" [level=3] [ref=e2023]
      - generic [ref=e2025]: You have no recently viewed pages
    - contentinfo [ref=e2026]:
      - link "Sign in for more access" [ref=e2028] [cursor=pointer]:
        - /url: /registration/signin/?u=%2F&ref_=hm_ftr_reg
        - generic [ref=e2029]: Sign in for more access
      - generic [ref=e2030]:
        - generic [ref=e2031]:
          - generic [ref=e2032]:
            - generic [ref=e2033]: Follow IMDb on social
            - link "TikTok" [ref=e2034] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e2036] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e2039] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e2041] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e2043] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e2045]:
            - generic [ref=e2046]:
              - generic [ref=e2047]: Get the IMDb app
              - generic [ref=e2048]: For Android and iOS
            - group [ref=e2050]:
              - img "Get the IMDb app" [ref=e2052]
              - link "For Android and iOS" [ref=e2053] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e2055]:
          - link "Help" [ref=e2056] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e2058] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e2060] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e2062] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e2064] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e2066]:
          - link "Press Room" [ref=e2067] [cursor=pointer]:
            - /url: /pressroom/?ref_=hm_ftr
          - link "Advertising" [ref=e2068] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e2070] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e2072] [cursor=pointer]:
            - /url: /conditions/?ref_=hm_ftr
          - link "Privacy Policy" [ref=e2073] [cursor=pointer]:
            - /url: /privacy/?ref_=hm_ftr
          - generic [ref=e2074]:
            - link "Your Ads Privacy Choices" [ref=e2075] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
              - img [ref=e2076]
            - link "Your Ads Privacy Choices" [ref=e2088] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=hm_ftr
      - img "IMDb, an Amazon company" [ref=e2090]
      - paragraph [ref=e2126]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e2127] [cursor=pointer]:
      - generic [ref=e2130]: Back to top
    - img
    - status
    - img
  - alert [ref=e2131]
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