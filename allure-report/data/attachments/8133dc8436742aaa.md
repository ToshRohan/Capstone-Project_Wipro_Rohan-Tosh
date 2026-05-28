# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_showtimes&tickets.spec.js >> IMDb Showtimes & Tickets >> Movie page loads successfully
- Location: tests\imdb_showtimes&tickets.spec.js:17:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h1')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h1')
    - waiting for" https://www.imdb.com/title/tt0111161/" navigation to finish...
    - navigated to "https://www.imdb.com/title/tt0111161/"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - link "Home" [ref=e4] [cursor=pointer]:
        - /url: /?ref_=tt_nv_home
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
        - /url: /list/watchlist/?ref_=tt_nv_urwls_all
        - generic [ref=e53]: Watchlist
      - generic [ref=e54]:
        - link "Sign in" [ref=e55] [cursor=pointer]:
          - /url: /registration/signin/?u=%2Ftitle%2Ftt0111161%2F&ref_=tt_nv_generic_lgin
          - generic [ref=e56]: Sign in
        - generic [ref=e60]:
          - generic [ref=e61]:
            - link "Sign in" [ref=e63] [cursor=pointer]:
              - /url: /registration/signin/?u=%2Ftitle%2Ftt0111161%2F&ref_=tt_nv_signup_cm_btn
              - generic [ref=e64]: Sign in
            - button "Close" [ref=e65] [cursor=pointer]
          - generic [ref=e68]:
            - text: New customer?
            - link "Create account" [ref=e69] [cursor=pointer]:
              - /url: /registration/signin/?u=%2Ftitle%2Ftt0111161%2F&ref_=tt_nv_generic_lgin
      - generic "Toggle language selector" [ref=e72] [cursor=pointer]:
        - generic [ref=e74]: EN
      - status
      - status
    - main [ref=e77]:
      - iframe [ref=e79]:
        
      - generic [ref=e80]:
        - generic [ref=e85]:
          - generic [ref=e87]:
            - link "Cast & crew" [ref=e88] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_ql_1
            - link "User reviews" [ref=e89] [cursor=pointer]:
              - /url: /title/tt0111161/reviews/?ref_=tt_ov_ql_2
            - link "Trivia" [ref=e90] [cursor=pointer]:
              - /url: /title/tt0111161/trivia/?ref_=tt_ov_ql_3
            - link "FAQ" [ref=e91] [cursor=pointer]:
              - /url: /title/tt0111161/faq/?ref_=tt_ov_ql_4
            - link "IMDbPro" [ref=e93] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_ov_hdr&ref_=cons_tt_ov_hdr
            - button "View all topics" [ref=e94] [cursor=pointer]:
              - generic [ref=e96]: All topics
            - button "Share on social media" [ref=e98] [cursor=pointer]
          - generic [ref=e101]:
            - generic [ref=e102]:
              - heading "The Shawshank Redemption" [level=1] [ref=e103]
              - link "1994" [ref=e104] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_ov_rdat
              - link "R" [ref=e105] [cursor=pointer]:
                - /url: /title/tt0111161/parentalguide/?ref_=tt_ov_pg#certificates
              - text: 2h 22m
            - generic [ref=e107]:
              - generic [ref=e108]:
                - generic [ref=e109]: IMDb RATING
                - link "View User Ratings" [ref=e110] [cursor=pointer]:
                  - /url: /title/tt0111161/ratings/?ref_=tt_ov_rat
                  - generic [ref=e115]:
                    - generic [ref=e116]:
                      - generic [ref=e117]: "9.3"
                      - generic [ref=e118]: /10
                    - generic [ref=e119]: 3.2M
              - generic [ref=e120]:
                - generic [ref=e121]: YOUR RATING
                - button "Rate The Shawshank Redemption" [ref=e122] [cursor=pointer]:
                  - generic [ref=e129]: Rate
              - generic [ref=e130]:
                - generic [ref=e131]: POPULARITY
                - link "View Popular Movies" [ref=e132] [cursor=pointer]:
                  - /url: /chart/moviemeter/?ref_=tt_ov_pop
                  - generic [ref=e137]:
                    - generic [ref=e138]: "37"
                    - generic [ref=e139]: "6"
          - generic [ref=e142]:
            - generic [ref=e143]:
              - group [ref=e145]:
                - img "Tim Robbins in The Shawshank Redemption (1994)" [ref=e147]
                - button "Add to Watchlist" [ref=e148] [cursor=pointer]
                - link "View ’The Shawshank Redemption’ Poster" [ref=e153] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i
              - generic [ref=e155]:
                - button "Video Autoplay Preference" [ref=e157] [cursor=pointer]
                - group [ref=e159] [cursor=pointer]:
                  - img "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." [ref=e161]
                  - generic "Watch Official Trailer" [ref=e162]:
                    - generic [ref=e169]: Play trailer2:11
                  - generic "Watch Official Trailer" [ref=e171]
              - generic [ref=e173]:
                - link "6 Videos" [ref=e174] [cursor=pointer]:
                  - /url: /title/tt0111161/videogallery/?ref_=tt_ov_vi_sm
                  - generic [ref=e178]: 6 Videos
                - link "99+ Photos" [ref=e179] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ov_m_sm
                  - generic [ref=e184]: 99+ Photos
            - generic [ref=e185]:
              - generic [ref=e187]:
                - generic [ref=e189]:
                  - link "Epic" [ref=e190] [cursor=pointer]:
                    - /url: /interest/in0000077/?ref_=tt_ov_in_1
                    - generic [ref=e191]: Epic
                  - link "Period Drama" [ref=e192] [cursor=pointer]:
                    - /url: /interest/in0000083/?ref_=tt_ov_in_2
                    - generic [ref=e193]: Period Drama
                  - link "Prison Drama" [ref=e194] [cursor=pointer]:
                    - /url: /interest/in0000085/?ref_=tt_ov_in_3
                    - generic [ref=e195]: Prison Drama
                  - link "Psychological Drama" [ref=e196] [cursor=pointer]:
                    - /url: /interest/in0000086/?ref_=tt_ov_in_4
                    - generic [ref=e197]: Psychological Drama
                  - link "Drama" [ref=e198] [cursor=pointer]:
                    - /url: /interest/in0000076/?ref_=tt_ov_in_5
                    - generic [ref=e199]: Drama
                - paragraph [ref=e200]:
                  - generic [ref=e201]: A wrongfully convicted banker forms a close friendship with a hardened convict over a quarter century while retaining his humanity through simple acts of compassion.
                - generic [ref=e202]:
                  - generic [ref=e203]: Director
                  - link "Frank Darabont" [ref=e205] [cursor=pointer]:
                    - /url: /name/nm0001104/?ref_=tt_ov_1_1
                  - generic [ref=e206]: Writers
                  - generic [ref=e207]:
                    - link "Stephen King" [ref=e208] [cursor=pointer]:
                      - /url: /name/nm0000175/?ref_=tt_ov_2_1
                    - link "Frank Darabont" [ref=e209] [cursor=pointer]:
                      - /url: /name/nm0001104/?ref_=tt_ov_2_2
                  - link "See full cast and crew" [ref=e210] [cursor=pointer]:
                    - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                    - text: Stars
                  - generic [ref=e211] [cursor=pointer]:
                    - link "Tim Robbins" [ref=e212]:
                      - /url: /name/nm0000209/?ref_=tt_ov_3_1
                    - link "Morgan Freeman" [ref=e213]:
                      - /url: /name/nm0000151/?ref_=tt_ov_3_2
                    - link "Bob Gunton" [ref=e214]:
                      - /url: /name/nm0348409/?ref_=tt_ov_3_3
                  - link "See full cast and crew" [ref=e215] [cursor=pointer]:
                    - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                - generic [ref=e219]:
                  - link "Go to IMDbPro" [ref=e220] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                    - img [ref=e221]
                  - link "See production info at IMDbPro" [ref=e231] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                    - text: See production info at IMDbPro
              - generic [ref=e233]:
                - generic [ref=e235]:
                  - generic [ref=e236] [cursor=pointer]:
                    - button "Add to Watchlist Added by 1.7M users" [ref=e237]:
                      - generic [ref=e239]:
                        - generic [ref=e240]: Add to Watchlist
                        - generic [ref=e241]: Added by 1.7M users
                    - button "Add title to another list" [ref=e242]
                  - button "Mark The Shawshank Redemption as watched" [ref=e245] [cursor=pointer]:
                    - generic [ref=e248]: Mark as watched
                - link "11.8K User reviews" [ref=e249] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?ref_=tt_ov_ururv
                  - generic [ref=e250]:
                    - generic [ref=e251]: 11.8K
                    - generic [ref=e252]: User reviews
                - link "154 Critic reviews" [ref=e253] [cursor=pointer]:
                  - /url: /title/tt0111161/externalreviews/?ref_=tt_ov_crv
                  - generic [ref=e254]:
                    - generic [ref=e255]: "154"
                    - generic [ref=e256]: Critic reviews
                - link "82 Metascore" [ref=e257] [cursor=pointer]:
                  - /url: /title/tt0111161/criticreviews/?ref_=tt_ov_msc
                  - generic [ref=e258]:
                    - generic [ref=e260]: "82"
                    - generic [ref=e261]: Metascore
        - generic [ref=e263]:
          - generic [ref=e264]:
            - generic [ref=e266]:
              - 'link "Top rated movie #1" [ref=e268] [cursor=pointer]':
                - /url: /chart/top/?ref_=tt_awd
              - link "See more awards and nominations" [ref=e269] [cursor=pointer]:
                - /url: /title/tt0111161/awards/?ref_=tt_awd
                - text: Nominated for 7 Oscars
              - generic [ref=e270] [cursor=pointer]: 21 wins & 43 nominations total
              - link "See more awards and nominations" [ref=e271] [cursor=pointer]:
                - /url: /title/tt0111161/awards/?ref_=tt_awd
            - generic [ref=e274]:
              - link "Videos 6" [ref=e276] [cursor=pointer]:
                - /url: /title/tt0111161/videogallery/?ref_=tt_vids_sm
                - heading "Videos 6" [level=3] [ref=e277]:
                  - text: Videos
                  - generic [ref=e278]: "6"
              - generic [ref=e281]:
                - group [ref=e282]:
                  - group [ref=e283]:
                    - img "Official Trailer" [ref=e285]
                    - link "TrailerOfficial Trailer" [ref=e286] [cursor=pointer]:
                      - /url: /video/vi3877612057/?ref_=tt_vids_vi_1
                      - generic [ref=e291]: Trailer 2:11
                  - link "TrailerOfficial Trailer" [ref=e294] [cursor=pointer]:
                    - /url: /video/vi3877612057/?ref_=tt_vids_vi_t_1
                    - generic [ref=e295]: Official Trailer
                - group [ref=e298]:
                  - group [ref=e299]:
                    - img "Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e301]
                    - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e302] [cursor=pointer]:
                      - /url: /video/vi976077081/?ref_=tt_vids_vi_2
                      - generic [ref=e307]: Clip 8:43
                  - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e310] [cursor=pointer]:
                    - /url: /video/vi976077081/?ref_=tt_vids_vi_t_2
                    - generic [ref=e311]: Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films
              - group [ref=e315]:
                - generic [ref=e316]:
                  - group [ref=e317]:
                    - group [ref=e318]:
                      - img "'The Shawshank Redemption' | Anniversary Mashup" [ref=e320]
                      - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e321] [cursor=pointer]:
                        - /url: /video/vi2425798425/?ref_=tt_vids_vi_3
                        - generic [ref=e326]: Clip 1:01
                    - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e329] [cursor=pointer]:
                      - /url: /video/vi2425798425/?ref_=tt_vids_vi_t_3
                      - generic [ref=e330]: "'The Shawshank Redemption' | Anniversary Mashup"
                  - group [ref=e333]:
                    - group [ref=e334]:
                      - img "What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e336]
                      - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e337] [cursor=pointer]:
                        - /url: /video/vi2910632473/?ref_=tt_vids_vi_4
                        - generic [ref=e342]: Video 1:55
                    - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e345] [cursor=pointer]:
                      - /url: /video/vi2910632473/?ref_=tt_vids_vi_t_4
                      - generic [ref=e346]: What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson
                  - group [ref=e349]:
                    - group [ref=e350]:
                      - img "Who Else Almost Starred In 'The Shawshank Redemption?'" [ref=e352]
                      - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e353] [cursor=pointer]:
                        - /url: /video/vi2032974361/?ref_=tt_vids_vi_5
                        - generic [ref=e358]: Video 2:25
                    - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e361] [cursor=pointer]:
                      - /url: /video/vi2032974361/?ref_=tt_vids_vi_t_5
                      - generic [ref=e362]: Who Else Almost Starred In 'The Shawshank Redemption?'
                  - group [ref=e365]:
                    - group [ref=e366]:
                      - img "Roles That Tom Cruise Turned Down" [ref=e368]
                      - link "VideoRoles That Tom Cruise Turned Down" [ref=e369] [cursor=pointer]:
                        - /url: /video/vi1874967321/?ref_=tt_vids_vi_6
                        - generic [ref=e374]: Video 2:22
                    - link "VideoRoles That Tom Cruise Turned Down" [ref=e377] [cursor=pointer]:
                      - /url: /video/vi1874967321/?ref_=tt_vids_vi_t_6
                      - generic [ref=e378]: Roles That Tom Cruise Turned Down
            - generic [ref=e381]:
              - generic [ref=e383]:
                - link "Photos 565" [ref=e384] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_sm
                  - heading "Photos 565" [level=3] [ref=e385]:
                    - text: Photos
                    - generic [ref=e386]: "565"
                - button "Add photo" [ref=e389] [cursor=pointer]:
                  - generic [ref=e391]: Add photo
              - generic [ref=e392]:
                - generic [ref=e393]:
                  - link "View Poster" [ref=e394] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_1
                    - img "View Poster" [ref=e396]
                  - link "View Poster" [ref=e397] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm2954723328/?ref_=tt_ph_2
                    - img "View Poster" [ref=e399]
                  - link "View Poster" [ref=e400] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3206381568/?ref_=tt_ph_3
                    - img "View Poster" [ref=e402]
                - generic [ref=e403]:
                  - link "View Poster" [ref=e404] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3172827136/?ref_=tt_ph_1_1
                    - img "View Poster" [ref=e406]
                  - link "View Poster" [ref=e407] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3156049920/?ref_=tt_ph_1_2
                    - img "View Poster" [ref=e409]
                  - link "View Poster" [ref=e410] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3139272704/?ref_=tt_ph_1_3
                    - img "View Poster" [ref=e412]
                  - link "+ 559 View Poster" [ref=e413] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3122495488/?ref_=tt_ph_more
                    - generic [ref=e414]: + 559
                    - img "View Poster" [ref=e416]
            - generic [ref=e417]:
              - generic [ref=e419]:
                - link "Top Cast 74" [ref=e420] [cursor=pointer]:
                  - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                  - heading "Top Cast 74" [level=3] [ref=e421]:
                    - generic [ref=e422]: Top Cast
                    - generic [ref=e423]: "74"
                - 'button "Top Cast: edit" [ref=e426] [cursor=pointer]':
                  - generic [ref=e429]: Edit
              - group [ref=e430]:
                - generic [ref=e431]:
                  - generic [ref=e432]:
                    - group [ref=e434]:
                      - img "Tim Robbins" [ref=e436]
                      - button "Add Tim Robbins to favorite people" [ref=e437] [cursor=pointer]
                      - link "Go to Tim Robbins" [ref=e440] [cursor=pointer]:
                        - /url: /name/nm0000209/?ref_=tt_cst_i_1
                    - generic [ref=e442]:
                      - link "Tim Robbins" [ref=e443] [cursor=pointer]:
                        - /url: /name/nm0000209/?ref_=tt_cst_t_1
                      - link "Andy Dufresne" [ref=e445] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000209/?ref_=tt_cst_c_1
                  - generic [ref=e446]:
                    - group [ref=e448]:
                      - img "Morgan Freeman" [ref=e450]
                      - button "Add Morgan Freeman to favorite people" [ref=e451] [cursor=pointer]
                      - link "Go to Morgan Freeman" [ref=e454] [cursor=pointer]:
                        - /url: /name/nm0000151/?ref_=tt_cst_i_2
                    - generic [ref=e456]:
                      - link "Morgan Freeman" [ref=e457] [cursor=pointer]:
                        - /url: /name/nm0000151/?ref_=tt_cst_t_2
                      - link "Ellis Boyd 'Red' Redding" [ref=e459] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000151/?ref_=tt_cst_c_2
                  - generic [ref=e460]:
                    - group [ref=e462]:
                      - img "Bob Gunton" [ref=e464]
                      - button "Add Bob Gunton to favorite people" [ref=e465] [cursor=pointer]
                      - link "Go to Bob Gunton" [ref=e468] [cursor=pointer]:
                        - /url: /name/nm0348409/?ref_=tt_cst_i_3
                    - generic [ref=e470]:
                      - link "Bob Gunton" [ref=e471] [cursor=pointer]:
                        - /url: /name/nm0348409/?ref_=tt_cst_t_3
                      - link "Warden Norton" [ref=e473] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0348409/?ref_=tt_cst_c_3
                  - generic [ref=e474]:
                    - group [ref=e476]:
                      - img "William Sadler" [ref=e478]
                      - button "Add William Sadler to favorite people" [ref=e479] [cursor=pointer]
                      - link "Go to William Sadler" [ref=e482] [cursor=pointer]:
                        - /url: /name/nm0006669/?ref_=tt_cst_i_4
                    - generic [ref=e484]:
                      - link "William Sadler" [ref=e485] [cursor=pointer]:
                        - /url: /name/nm0006669/?ref_=tt_cst_t_4
                      - link "Heywood" [ref=e487] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0006669/?ref_=tt_cst_c_4
                  - generic [ref=e488]:
                    - group [ref=e490]:
                      - img "Clancy Brown" [ref=e492]
                      - button "Add Clancy Brown to favorite people" [ref=e493] [cursor=pointer]
                      - link "Go to Clancy Brown" [ref=e496] [cursor=pointer]:
                        - /url: /name/nm0000317/?ref_=tt_cst_i_5
                    - generic [ref=e498]:
                      - link "Clancy Brown" [ref=e499] [cursor=pointer]:
                        - /url: /name/nm0000317/?ref_=tt_cst_t_5
                      - link "Captain Hadley" [ref=e501] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000317/?ref_=tt_cst_c_5
                  - generic [ref=e502]:
                    - group [ref=e504]:
                      - img "Gil Bellows" [ref=e506]
                      - button "Add Gil Bellows to favorite people" [ref=e507] [cursor=pointer]
                      - link "Go to Gil Bellows" [ref=e510] [cursor=pointer]:
                        - /url: /name/nm0004743/?ref_=tt_cst_i_6
                    - generic [ref=e512]:
                      - link "Gil Bellows" [ref=e513] [cursor=pointer]:
                        - /url: /name/nm0004743/?ref_=tt_cst_t_6
                      - link "Tommy" [ref=e515] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0004743/?ref_=tt_cst_c_6
                  - generic [ref=e516]:
                    - group [ref=e518]:
                      - img "Mark Rolston" [ref=e520]
                      - button "Add Mark Rolston to favorite people" [ref=e521] [cursor=pointer]
                      - link "Go to Mark Rolston" [ref=e524] [cursor=pointer]:
                        - /url: /name/nm0001679/?ref_=tt_cst_i_7
                    - generic [ref=e526]:
                      - link "Mark Rolston" [ref=e527] [cursor=pointer]:
                        - /url: /name/nm0001679/?ref_=tt_cst_t_7
                      - link "Bogs Diamond" [ref=e529] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0001679/?ref_=tt_cst_c_7
                  - generic [ref=e530]:
                    - group [ref=e532]:
                      - img "James Whitmore" [ref=e534]
                      - button "Add James Whitmore to favorite people" [ref=e535] [cursor=pointer]
                      - link "Go to James Whitmore" [ref=e538] [cursor=pointer]:
                        - /url: /name/nm0926235/?ref_=tt_cst_i_8
                    - generic [ref=e540]:
                      - link "James Whitmore" [ref=e541] [cursor=pointer]:
                        - /url: /name/nm0926235/?ref_=tt_cst_t_8
                      - link "Brooks Hatlen" [ref=e543] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0926235/?ref_=tt_cst_c_8
                  - generic [ref=e544]:
                    - group [ref=e546]:
                      - img "Jeffrey DeMunn" [ref=e548]
                      - button "Add Jeffrey DeMunn to favorite people" [ref=e549] [cursor=pointer]
                      - link "Go to Jeffrey DeMunn" [ref=e552] [cursor=pointer]:
                        - /url: /name/nm0218810/?ref_=tt_cst_i_9
                    - generic [ref=e554]:
                      - link "Jeffrey DeMunn" [ref=e555] [cursor=pointer]:
                        - /url: /name/nm0218810/?ref_=tt_cst_t_9
                      - link "1946 D.A." [ref=e557] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0218810/?ref_=tt_cst_c_9
                  - generic [ref=e558]:
                    - group [ref=e560]:
                      - img "Larry Brandenburg" [ref=e562]
                      - button "Add Larry Brandenburg to favorite people" [ref=e563] [cursor=pointer]
                      - link "Go to Larry Brandenburg" [ref=e566] [cursor=pointer]:
                        - /url: /name/nm0104594/?ref_=tt_cst_i_10
                    - generic [ref=e568]:
                      - link "Larry Brandenburg" [ref=e569] [cursor=pointer]:
                        - /url: /name/nm0104594/?ref_=tt_cst_t_10
                      - link "Skeet" [ref=e571] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0104594/?ref_=tt_cst_c_10
                  - generic [ref=e572]:
                    - group [ref=e574]:
                      - img "Neil Giuntoli" [ref=e576]
                      - button "Add Neil Giuntoli to favorite people" [ref=e577] [cursor=pointer]
                      - link "Go to Neil Giuntoli" [ref=e580] [cursor=pointer]:
                        - /url: /name/nm0321358/?ref_=tt_cst_i_11
                    - generic [ref=e582]:
                      - link "Neil Giuntoli" [ref=e583] [cursor=pointer]:
                        - /url: /name/nm0321358/?ref_=tt_cst_t_11
                      - link "Jigger" [ref=e585] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0321358/?ref_=tt_cst_c_11
                  - generic [ref=e586]:
                    - group [ref=e588]:
                      - img "Brian Libby" [ref=e590]
                      - button "Add Brian Libby to favorite people" [ref=e591] [cursor=pointer]
                      - link "Go to Brian Libby" [ref=e594] [cursor=pointer]:
                        - /url: /name/nm0508742/?ref_=tt_cst_i_12
                    - generic [ref=e596]:
                      - link "Brian Libby" [ref=e597] [cursor=pointer]:
                        - /url: /name/nm0508742/?ref_=tt_cst_t_12
                      - link "Floyd" [ref=e599] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0508742/?ref_=tt_cst_c_12
                  - generic [ref=e600]:
                    - group [ref=e602]:
                      - img "David Proval" [ref=e604]
                      - button "Add David Proval to favorite people" [ref=e605] [cursor=pointer]
                      - link "Go to David Proval" [ref=e608] [cursor=pointer]:
                        - /url: /name/nm0698998/?ref_=tt_cst_i_13
                    - generic [ref=e610]:
                      - link "David Proval" [ref=e611] [cursor=pointer]:
                        - /url: /name/nm0698998/?ref_=tt_cst_t_13
                      - link "Snooze" [ref=e613] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0698998/?ref_=tt_cst_c_13
                  - generic [ref=e614]:
                    - group [ref=e616]:
                      - img "Joseph Ragno" [ref=e618]
                      - button "Add Joseph Ragno to favorite people" [ref=e619] [cursor=pointer]
                      - link "Go to Joseph Ragno" [ref=e622] [cursor=pointer]:
                        - /url: /name/nm0706554/?ref_=tt_cst_i_14
                    - generic [ref=e624]:
                      - link "Joseph Ragno" [ref=e625] [cursor=pointer]:
                        - /url: /name/nm0706554/?ref_=tt_cst_t_14
                      - link "Ernie" [ref=e627] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0706554/?ref_=tt_cst_c_14
                  - generic [ref=e628]:
                    - group [ref=e630]:
                      - generic [ref=e631]:
                        - img "Jude Ciccolella"
                      - button "Add Jude Ciccolella to favorite people" [ref=e632] [cursor=pointer]
                      - link "Go to Jude Ciccolella" [ref=e635] [cursor=pointer]:
                        - /url: /name/nm0161980/?ref_=tt_cst_i_15
                    - generic [ref=e637]:
                      - link "Jude Ciccolella" [ref=e638] [cursor=pointer]:
                        - /url: /name/nm0161980/?ref_=tt_cst_t_15
                      - link "Guard Mert" [ref=e640] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0161980/?ref_=tt_cst_c_15
                  - generic [ref=e641]:
                    - group [ref=e643]:
                      - generic [ref=e644]:
                        - img "Paul McCrane"
                      - button "Add Paul McCrane to favorite people" [ref=e645] [cursor=pointer]
                      - link "Go to Paul McCrane" [ref=e648] [cursor=pointer]:
                        - /url: /name/nm0005204/?ref_=tt_cst_i_16
                    - generic [ref=e650]:
                      - link "Paul McCrane" [ref=e651] [cursor=pointer]:
                        - /url: /name/nm0005204/?ref_=tt_cst_t_16
                      - link "Guard Trout" [ref=e653] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0005204/?ref_=tt_cst_c_16
                  - generic [ref=e654]:
                    - group [ref=e656]:
                      - img [ref=e658]
                      - button "Add Renee Blaine to favorite people" [ref=e660] [cursor=pointer]
                      - link "Go to Renee Blaine" [ref=e663] [cursor=pointer]:
                        - /url: /name/nm0086169/?ref_=tt_cst_i_17
                    - generic [ref=e665]:
                      - link "Renee Blaine" [ref=e666] [cursor=pointer]:
                        - /url: /name/nm0086169/?ref_=tt_cst_t_17
                      - link "Andy Dufresne's Wife" [ref=e668] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0086169/?ref_=tt_cst_c_17
                  - generic [ref=e669]:
                    - group [ref=e671]:
                      - img [ref=e673]
                      - button "Add Scott Mann to favorite people" [ref=e675] [cursor=pointer]
                      - link "Go to Scott Mann" [ref=e678] [cursor=pointer]:
                        - /url: /name/nm0542957/?ref_=tt_cst_i_18
                    - generic [ref=e680]:
                      - link "Scott Mann" [ref=e681] [cursor=pointer]:
                        - /url: /name/nm0542957/?ref_=tt_cst_t_18
                      - link "Glenn Quentin" [ref=e683] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0542957/?ref_=tt_cst_c_18
              - generic [ref=e684]: Director
              - link "Frank Darabont" [ref=e686] [cursor=pointer]:
                - /url: /name/nm0001104/?ref_=tt_cst_1_1
              - generic [ref=e687]: Writers
              - generic [ref=e688]:
                - link "Stephen King" [ref=e689] [cursor=pointer]:
                  - /url: /name/nm0000175/?ref_=tt_cst_2_1
                - link "Frank Darabont" [ref=e690] [cursor=pointer]:
                  - /url: /name/nm0001104/?ref_=tt_cst_2_2
              - link "See full cast and crew" [ref=e691] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                - text: All cast & crew
              - link "See full cast and crew" [ref=e692] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
              - link "Production, box office & more at IMDbPro" [ref=e695] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
              - link "Production, box office & more at IMDbPro" [ref=e696] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
            - generic [ref=e698]:
              - generic [ref=e700]:
                - link "User reviews 11.8K" [ref=e701] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?ref_=tt_ururv_sm
                  - heading "User reviews 11.8K" [level=3] [ref=e702]:
                    - generic [ref=e703]: User reviews
                    - generic [ref=e704]: 11.8K
                - button "Review" [ref=e707] [cursor=pointer]:
                  - generic [ref=e709]: Review
              - generic [ref=e710]:
                - generic [ref=e711]:
                  - generic [ref=e714]: "9.3"
                  - generic [ref=e715]: 3192.1K
                - generic [ref=e717]:
                  - link "44007 1-star reviews. Select to read them." [ref=e718] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=1&ref_=tt_ururv_histo_1
                    - generic [ref=e722]: "1"
                  - link "5668 2-star reviews. Select to read them." [ref=e723] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=2&ref_=tt_ururv_histo_2
                    - generic [ref=e727]: "2"
                  - link "6154 3-star reviews. Select to read them." [ref=e728] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=3&ref_=tt_ururv_histo_3
                    - generic [ref=e732]: "3"
                  - link "8402 4-star reviews. Select to read them." [ref=e733] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=4&ref_=tt_ururv_histo_4
                    - generic [ref=e737]: "4"
                  - link "17864 5-star reviews. Select to read them." [ref=e738] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=5&ref_=tt_ururv_histo_5
                    - generic [ref=e742]: "5"
                  - link "35018 6-star reviews. Select to read them." [ref=e743] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=6&ref_=tt_ururv_histo_6
                    - generic [ref=e747]: "6"
                  - link "118403 7-star reviews. Select to read them." [ref=e748] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=7&ref_=tt_ururv_histo_7
                    - generic [ref=e752]: "7"
                  - link "376585 8-star reviews. Select to read them." [ref=e753] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=8&ref_=tt_ururv_histo_8
                    - generic [ref=e757]: "8"
                  - link "827405 9-star reviews. Select to read them." [ref=e758] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=9&ref_=tt_ururv_histo_9
                    - generic [ref=e762]: "9"
                  - link "1752635 10-star reviews. Select to read them." [ref=e763] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=10&ref_=tt_ururv_histo_10
                    - generic [ref=e767]: "10"
              - heading "Featured reviews" [level=3] [ref=e770]
              - group [ref=e771]:
                - generic [ref=e772]:
                  - generic [ref=e773] [cursor=pointer]:
                    - generic [ref=e774]:
                      - link "User EyeDunno" [ref=e776]:
                        - /url: /user/p.ton3wb3dr2el6lwp5pftz2illm/?ref_=tt_ururv_c_1_uname
                        - generic [ref=e777]:
                          - group [ref=e778]:
                            - generic [ref=e780]:
                              - img "Avatar"
                          - generic [ref=e783]: EyeDunno
                      - generic "Author rating is 10" [ref=e784]:
                        - generic [ref=e786]: "10"
                    - link "Don't Rent Shawshank." [ref=e788]:
                      - /url: /title/tt0111161/reviews/?featured=rw1221355&ref_=tt_ururv_c_1_hd
                      - heading "Don't Rent Shawshank." [level=3] [ref=e789]
                    - text: I'm trying to save you money; this is the last film title that you should consider borrowing. Renting Shawshank will cost you five bucks... just plunk down the $25 and own the title. You'll wind up going back to this gem time and time again. This is one of few movies that are truly timeless. And it's entertaining and moving, no matter how many times you view it.
                    - text: Forget about what others (including myself) might suggest you'll discover in "The Shawshank Redemption;" when you watch it, you'll identify something very personal in your own life with a scene, a character, or a moment in this uncomplicated movie. When you need hope, you'll look for Shawshank. When you want to believe in the will of overcoming even the greatest obstacles, Shawshank will uplift you in ways that you can't find in movies today.
                    - text: Some liken the film to some kind of spiritual awakening. Of course, some can go to a church or mosque to find enlightenment and Faith in humanity, but most places of worship are open only certain days or times. But when you need affirmation of the lasting bond of friendships that prevail over the most dire circumstances, Shawshank will give it to you. It makes grown men (like me) cry, still. I wonder whether Shawshank was truly meant for viewing in the privacy of the home, because it is a personal experience that really makes you look inward. Nominated for seven, this is the best film that never one a single Oscar.
                    - text: How ironic that an innocent man winds up being surrounded by the corruption of the legal system. Shawshank itself is similar to the character of Andy Dufresne. Prejudging this classic film, critics couldn't get past the title. The public followed suit, initially dismissing Shawshank, which failed in the box office just like "It's a Wonderful Life" and "Citizen Kane." It could have just whithered away on the store shelves, like Andy Dufresne could have in his own cell. But the characters prevailed, because Andy -- And Shawshank -- stayed true. Now, these movies are right up there as the most popular films of all time.
                    - text: Anyone who has yet to watch Shawshank may be so jaded of movies, or the film's title, or how a 2-1/2- hour movie set inside the walls of a prison can manage to tap the soul of such a wide range of people. Shawshank has not one explosion. I wonder if it even has a single special effect or digitally- enhanced frame.
                    - text: But every aspect of Shawshank fit together. The acting from the top to the bit part. The musical score. The editing. The photography. The story, from opening credits to final scene. All involved, including the town of Mansfield, Ohio (where Shawshank was actually filmed) played their roles perfectly. Shawshank is a must- see, must- own title.
                  - generic [ref=e790] [cursor=pointer]:
                    - generic [ref=e791]:
                      - link "User auuwws" [ref=e793]:
                        - /url: /user/p.x772cyhwydc5c2oj2r265uncjy/?ref_=tt_ururv_c_2_uname
                        - generic [ref=e794]:
                          - group [ref=e795]:
                            - generic [ref=e797]:
                              - img "Avatar"
                          - generic [ref=e800]: auuwws
                      - generic "Author rating is 10" [ref=e801]:
                        - generic [ref=e803]: "10"
                    - link "the shawshank redemption" [ref=e805]:
                      - /url: /title/tt0111161/reviews/?featured=rw6158379&ref_=tt_ururv_c_2_hd
                      - heading "the shawshank redemption" [level=3] [ref=e806]
                    - text: The best movie in history and the best ending in any entertainment business
                  - generic [ref=e807] [cursor=pointer]:
                    - generic [ref=e808]:
                      - link "User baumer" [ref=e810]:
                        - /url: /user/p.odocrgj5lvfevutk3rukg7nqji/?ref_=tt_ururv_c_3_uname
                        - generic [ref=e811]:
                          - group [ref=e812]:
                            - generic [ref=e814]:
                              - img "Avatar"
                          - generic [ref=e817]: baumer
                      - generic "Author rating is 10" [ref=e818]:
                        - generic [ref=e820]: "10"
                    - link "Stephen King's best adapted movie" [ref=e822]:
                      - /url: /title/tt0111161/reviews/?featured=rw0348302&ref_=tt_ururv_c_3_hd
                      - heading "Stephen King's best adapted movie" [level=3] [ref=e823]
                    - text: Misery and Stand By Me were the best adaptations up until this one, now you can add Shawshank to that list.
                    - text: "This is simply one of the best films ever made and I know I am not the first to say that and I certainly won't be the last. The standing on the IMDb is a true barometer of that. #3 as of this date and I'm sure it could be number 1. So I'll just skip all the normal praise of the film because we all know how great it is. But let me perhaps add that what I find so fascinating about Shawshank is that Stephen King wrote it."
                    - text: King is one of the best writers in the world. Books like IT and the Castle Rock series are some of the greatest stories ever told. But his best adaptations are always done by the best directors. The Shining was brilliantly interpreted by Kubrick and of course the aforementioned Misery and Stand By Me are both by Rob Reiner. Now Frank Darabont comes onto the scene and makes arguably the best King film ever. He seems to understand what King wants to say and he conveys that beautifully.
                    - text: What makes this film one of the best ever made is the message it conveys. It is one of eternal hope. Andy Dufresne, played by Tim Robbins, has been sent to prison for a crime he did not commit. But he never loses hope. He never gives up his quest to become a free man again. His years of tenacity, patience and wits keep him not only sane, but it gives his mind and a spirit a will to live. This film has a different feel to it. There has never been anything like it before and I don't know if there will again.
                    - text: I'm not going to say any more about this film, it has already been said, but just suffice to say that I am glad that Forrest Gump won best picture in 94. I would have been equally glad if Pulp Fiction or Shawshank would have won. It is that good of a movie and one that will be appreciated for years to come.
                  - generic [ref=e825] [cursor=pointer]:
                    - generic [ref=e826]:
                      - link "User Coxer99" [ref=e828]:
                        - /url: /user/p.xgoctsrtgcc25qawmehvzavskq/?ref_=tt_ururv_c_4_uname
                        - generic [ref=e829]:
                          - group [ref=e830]:
                            - generic [ref=e831]:
                              - img [ref=e833]
                              - img "Placeholder profile image" [ref=e835]
                          - generic [ref=e839]: Coxer99
                      - generic "Author rating is 10" [ref=e840]:
                        - generic [ref=e842]: "10"
                    - link "The Shawshank Redemption" [ref=e844]:
                      - /url: /title/tt0111161/reviews/?featured=rw0348222&ref_=tt_ururv_c_4_hd
                      - heading "The Shawshank Redemption" [level=3] [ref=e845]
                    - text: One of the finest films made in recent years. It's a poignant story about hope. Hope gets me. That's what makes a film like this more than a movie. It tells a lesson about life. Those are the films people talk about 50 or even 100 years from you. It's also a story for freedom. Freedom from isolation, from rule, from bigotry and hate. Freeman and Robbins are majestic in their performances. Each learns from the other. Their relationship is strong and you feel that from the first moment they make contact with one another. There is also a wonderful performance from legend James Whitmore as Brooks.
                    - text: He shines when it is his time to go back into the world, only to find that the world grew up so fast he never even got a chance to blink. Stephen King's story is brought to the screen with great elegance and excitement. It is an extraordinary motion that people "will" be talking about in 50 or 100 years.
                  - generic [ref=e846] [cursor=pointer]:
                    - link "User speedreid" [ref=e849]:
                      - /url: /user/p.tlirx2eikf7gwxcyepzahltg6e/?ref_=tt_ururv_c_5_uname
                      - generic [ref=e850]:
                        - group [ref=e851]:
                          - generic [ref=e852]:
                            - img [ref=e854]
                            - img "Placeholder profile image" [ref=e856]
                        - generic [ref=e860]: speedreid
                    - link "Prepare to be moved" [ref=e862]:
                      - /url: /title/tt0111161/reviews/?featured=rw0348718&ref_=tt_ururv_c_5_hd
                      - heading "Prepare to be moved" [level=3] [ref=e863]
                    - text: I have never seen such an amazing film since I saw The Shawshank Redemption. Shawshank encompasses friendships, hardships, hopes, and dreams. And what is so great about the movie is that it moves you, it gives you hope. Even though the circumstances between the characters and the viewers are quite different, you don't feel that far removed from what the characters are going through.
                    - text: It is a simple film, yet it has an everlasting message. Frank Darabont didn't need to put any kind of outlandish special effects to get us to love this film, the narration and the acting does that for him. Why this movie didn't win all seven Oscars is beyond me, but don't let that sway you to not see this film, let its ranking on the IMDb's top 250 list sway you, let your friends recommendation about the movie sway you.
                    - text: Set aside a little over two hours tonight and rent this movie. You will finally understand what everyone is talking about and you will understand why this is my all time favorite movie.
            - generic [ref=e867]:
              - generic [ref=e868]:
                - heading "'The Shawshank Redemption' Without Morgan Freeman?" [level=2] [ref=e869]
                - emphasis [ref=e870]:
                  - link "The Shawshank Redemption" [ref=e871] [cursor=pointer]:
                    - /url: /title/tt0111161/?ref_=tt_eds_center-3_lk
                - text: has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?
                - link "Who almost starred?" [ref=e872] [cursor=pointer]:
                  - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_c_vd_cc_shs_cta
              - group [ref=e874]:
                - group [ref=e875]:
                  - img "Editorial Image" [ref=e877]
                  - link "2:25" [ref=e878] [cursor=pointer]:
                    - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_vd_cc_shs_i
                    - generic [ref=e883]: 2:25
            - generic [ref=e886]:
              - generic [ref=e888]:
                - heading "More like this" [level=3] [ref=e890]:
                  - generic [ref=e891]: More like this
                - link "More information" [ref=e893] [cursor=pointer]:
                  - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
              - group [ref=e896]:
                - generic [ref=e897]:
                  - group [ref=e898]:
                    - group [ref=e899]:
                      - generic [ref=e900]:
                        - img "The Godfather"
                      - button "Add to Watchlist" [ref=e901] [cursor=pointer]
                      - link "View title page for The Godfather" [ref=e906] [cursor=pointer]:
                        - /url: /title/tt0068646/?ref_=tt_mlt_i_1
                    - generic [ref=e908]:
                      - generic [ref=e911]: "9.2"
                      - button "Rate The Godfather" [ref=e912] [cursor=pointer]
                    - link "View title page for The Godfather" [ref=e915] [cursor=pointer]:
                      - /url: /title/tt0068646/?ref_=tt_mlt_t_1
                      - text: The Godfather
                    - button "More about this" [ref=e920] [cursor=pointer]
                  - group [ref=e923]:
                    - group [ref=e924]:
                      - generic [ref=e925]:
                        - img "The Dark Knight"
                      - button "Add to Watchlist" [ref=e926] [cursor=pointer]
                      - link "View title page for The Dark Knight" [ref=e931] [cursor=pointer]:
                        - /url: /title/tt0468569/?ref_=tt_mlt_i_2
                    - generic [ref=e933]:
                      - generic [ref=e936]: "9.1"
                      - button "Rate The Dark Knight" [ref=e937] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e940] [cursor=pointer]:
                      - /url: /title/tt0468569/?ref_=tt_mlt_t_2
                      - text: The Dark Knight
                    - button "More about this" [ref=e945] [cursor=pointer]
                  - group [ref=e948]:
                    - group [ref=e949]:
                      - generic [ref=e950]:
                        - img "Forrest Gump"
                      - button "Add to Watchlist" [ref=e951] [cursor=pointer]
                      - link "View title page for Forrest Gump" [ref=e956] [cursor=pointer]:
                        - /url: /title/tt0109830/?ref_=tt_mlt_i_3
                    - generic [ref=e958]:
                      - generic [ref=e961]: "8.8"
                      - button "Rate Forrest Gump" [ref=e962] [cursor=pointer]
                    - link "View title page for Forrest Gump" [ref=e965] [cursor=pointer]:
                      - /url: /title/tt0109830/?ref_=tt_mlt_t_3
                      - text: Forrest Gump
                    - button "More about this" [ref=e970] [cursor=pointer]
                  - group [ref=e973]:
                    - group [ref=e974]:
                      - generic [ref=e975]:
                        - img "Fight Club"
                      - button "Add to Watchlist" [ref=e976] [cursor=pointer]
                      - link "View title page for Fight Club" [ref=e981] [cursor=pointer]:
                        - /url: /title/tt0137523/?ref_=tt_mlt_i_4
                    - generic [ref=e983]:
                      - generic [ref=e986]: "8.8"
                      - button "Rate Fight Club" [ref=e987] [cursor=pointer]
                    - link "View title page for Fight Club" [ref=e990] [cursor=pointer]:
                      - /url: /title/tt0137523/?ref_=tt_mlt_t_4
                      - text: Fight Club
                    - button "More about this" [ref=e995] [cursor=pointer]
                  - group [ref=e998]:
                    - group [ref=e999]:
                      - generic [ref=e1000]:
                        - img "Pulp Fiction"
                      - button "Add to Watchlist" [ref=e1001] [cursor=pointer]
                      - link "View title page for Pulp Fiction" [ref=e1006] [cursor=pointer]:
                        - /url: /title/tt0110912/?ref_=tt_mlt_i_5
                    - generic [ref=e1008]:
                      - generic [ref=e1011]: "8.8"
                      - button "Rate Pulp Fiction" [ref=e1012] [cursor=pointer]
                    - link "View title page for Pulp Fiction" [ref=e1015] [cursor=pointer]:
                      - /url: /title/tt0110912/?ref_=tt_mlt_t_5
                      - text: Pulp Fiction
                    - button "More about this" [ref=e1020] [cursor=pointer]
                  - group [ref=e1023]:
                    - group [ref=e1024]:
                      - generic [ref=e1025]:
                        - img "Interstellar"
                      - button "Add to Watchlist" [ref=e1026] [cursor=pointer]
                      - link "View title page for Interstellar" [ref=e1031] [cursor=pointer]:
                        - /url: /title/tt0816692/?ref_=tt_mlt_i_6
                    - generic [ref=e1033]:
                      - generic [ref=e1036]: "8.7"
                      - button "Rate Interstellar" [ref=e1037] [cursor=pointer]
                    - link "View title page for Interstellar" [ref=e1040] [cursor=pointer]:
                      - /url: /title/tt0816692/?ref_=tt_mlt_t_6
                      - text: Interstellar
                    - button "More about this" [ref=e1045] [cursor=pointer]
                  - group [ref=e1048]:
                    - group [ref=e1049]:
                      - generic [ref=e1050]:
                        - img "Seven"
                      - button "Add to Watchlist" [ref=e1051] [cursor=pointer]
                      - link "View title page for Seven" [ref=e1056] [cursor=pointer]:
                        - /url: /title/tt0114369/?ref_=tt_mlt_i_7
                    - generic [ref=e1058]:
                      - generic [ref=e1061]: "8.6"
                      - button "Rate Seven" [ref=e1062] [cursor=pointer]
                    - link "View title page for Seven" [ref=e1065] [cursor=pointer]:
                      - /url: /title/tt0114369/?ref_=tt_mlt_t_7
                      - text: Seven
                    - button "More about this" [ref=e1070] [cursor=pointer]
                  - group [ref=e1073]:
                    - group [ref=e1074]:
                      - generic [ref=e1075]:
                        - img "Inception"
                      - button "Add to Watchlist" [ref=e1076] [cursor=pointer]
                      - link "View title page for Inception" [ref=e1081] [cursor=pointer]:
                        - /url: /title/tt1375666/?ref_=tt_mlt_i_8
                    - generic [ref=e1083]:
                      - generic [ref=e1086]: "8.8"
                      - button "Rate Inception" [ref=e1087] [cursor=pointer]
                    - link "View title page for Inception" [ref=e1090] [cursor=pointer]:
                      - /url: /title/tt1375666/?ref_=tt_mlt_t_8
                      - text: Inception
                    - button "More about this" [ref=e1095] [cursor=pointer]
                  - group [ref=e1098]:
                    - group [ref=e1099]:
                      - generic [ref=e1100]:
                        - img "The Green Mile"
                      - button "Add to Watchlist" [ref=e1101] [cursor=pointer]
                      - link "View title page for The Green Mile" [ref=e1106] [cursor=pointer]:
                        - /url: /title/tt0120689/?ref_=tt_mlt_i_9
                    - generic [ref=e1108]:
                      - generic [ref=e1111]: "8.6"
                      - button "Rate The Green Mile" [ref=e1112] [cursor=pointer]
                    - link "View title page for The Green Mile" [ref=e1115] [cursor=pointer]:
                      - /url: /title/tt0120689/?ref_=tt_mlt_t_9
                      - text: The Green Mile
                    - button "More about this" [ref=e1120] [cursor=pointer]
                  - group [ref=e1123]:
                    - group [ref=e1124]:
                      - generic [ref=e1125]:
                        - img "Schindler's List"
                      - button "Add to Watchlist" [ref=e1126] [cursor=pointer]
                      - link "View title page for Schindler's List" [ref=e1131] [cursor=pointer]:
                        - /url: /title/tt0108052/?ref_=tt_mlt_i_10
                    - generic [ref=e1133]:
                      - generic [ref=e1136]: "9.0"
                      - button "Rate Schindler's List" [ref=e1137] [cursor=pointer]
                    - link "View title page for Schindler's List" [ref=e1140] [cursor=pointer]:
                      - /url: /title/tt0108052/?ref_=tt_mlt_t_10
                      - text: Schindler's List
                    - button "More about this" [ref=e1145] [cursor=pointer]
                  - group [ref=e1148]:
                    - group [ref=e1149]:
                      - generic [ref=e1150]:
                        - img "The Godfather Part II"
                      - button "Add to Watchlist" [ref=e1151] [cursor=pointer]
                      - link "View title page for The Godfather Part II" [ref=e1156] [cursor=pointer]:
                        - /url: /title/tt0071562/?ref_=tt_mlt_i_11
                    - generic [ref=e1158]:
                      - generic [ref=e1161]: "9.0"
                      - button "Rate The Godfather Part II" [ref=e1162] [cursor=pointer]
                    - link "View title page for The Godfather Part II" [ref=e1165] [cursor=pointer]:
                      - /url: /title/tt0071562/?ref_=tt_mlt_t_11
                      - text: The Godfather Part II
                    - button "More about this" [ref=e1170] [cursor=pointer]
                  - group [ref=e1173]:
                    - group [ref=e1174]:
                      - generic [ref=e1175]:
                        - img "Saving Private Ryan"
                      - button "Add to Watchlist" [ref=e1176] [cursor=pointer]
                      - link "View title page for Saving Private Ryan" [ref=e1181] [cursor=pointer]:
                        - /url: /title/tt0120815/?ref_=tt_mlt_i_12
                    - generic [ref=e1183]:
                      - generic [ref=e1186]: "8.6"
                      - button "Rate Saving Private Ryan" [ref=e1187] [cursor=pointer]
                    - link "View title page for Saving Private Ryan" [ref=e1190] [cursor=pointer]:
                      - /url: /title/tt0120815/?ref_=tt_mlt_t_12
                      - text: Saving Private Ryan
                    - button "More about this" [ref=e1195] [cursor=pointer]
            - generic [ref=e1199]:
              - link "Related interests" [ref=e1201] [cursor=pointer]:
                - /url: /interest/all/?ref_=tt_rin_sm
                - heading "Related interests" [level=3] [ref=e1202]:
                  - generic [ref=e1203]: Related interests
              - group [ref=e1205]:
                - generic [ref=e1206]:
                  - generic [ref=e1207]:
                    - group [ref=e1208]:
                      - generic [ref=e1209]:
                        - img "Orson Welles in Citizen Kane (1941)"
                      - button "Add Epic to your interests" [ref=e1210] [cursor=pointer]
                      - link "Epic" [ref=e1212] [cursor=pointer]:
                        - /url: /interest/in0000077/?ref_=tt_rin_in_i_1
                    - link "Epic" [ref=e1214] [cursor=pointer]:
                      - /url: /interest/in0000077/?ref_=tt_rin_in_t_1
                      - generic [ref=e1215]: Epic
                  - generic [ref=e1216]:
                    - group [ref=e1217]:
                      - generic [ref=e1218]:
                        - img "Emma Watson, Saoirse Ronan, Florence Pugh, and Eliza Scanlen in Little Women (2019)"
                      - button "Add Period Drama to your interests" [ref=e1219] [cursor=pointer]
                      - link "Period Drama" [ref=e1221] [cursor=pointer]:
                        - /url: /interest/in0000083/?ref_=tt_rin_in_i_2
                    - link "Period Drama" [ref=e1223] [cursor=pointer]:
                      - /url: /interest/in0000083/?ref_=tt_rin_in_t_2
                      - generic [ref=e1224]: Period Drama
                  - generic [ref=e1225]:
                    - group [ref=e1226]:
                      - generic [ref=e1227]:
                        - img "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)"
                      - button "Add Prison Drama to your interests" [ref=e1228] [cursor=pointer]
                      - link "Prison Drama" [ref=e1230] [cursor=pointer]:
                        - /url: /interest/in0000085/?ref_=tt_rin_in_i_3
                    - link "Prison Drama" [ref=e1232] [cursor=pointer]:
                      - /url: /interest/in0000085/?ref_=tt_rin_in_t_3
                      - generic [ref=e1233]: Prison Drama
                  - generic [ref=e1234]:
                    - group [ref=e1235]:
                      - generic [ref=e1236]:
                        - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
                      - button "Add Psychological Drama to your interests" [ref=e1237] [cursor=pointer]
                      - link "Psychological Drama" [ref=e1239] [cursor=pointer]:
                        - /url: /interest/in0000086/?ref_=tt_rin_in_i_4
                    - link "Psychological Drama" [ref=e1241] [cursor=pointer]:
                      - /url: /interest/in0000086/?ref_=tt_rin_in_t_4
                      - generic [ref=e1242]: Psychological Drama
                  - generic [ref=e1243]:
                    - group [ref=e1244]:
                      - generic [ref=e1245]:
                        - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
                      - button "Add Drama to your interests" [ref=e1246] [cursor=pointer]
                      - link "Drama" [ref=e1248] [cursor=pointer]:
                        - /url: /interest/in0000076/?ref_=tt_rin_in_i_5
                    - link "Drama" [ref=e1250] [cursor=pointer]:
                      - /url: /interest/in0000076/?ref_=tt_rin_in_t_5
                      - generic [ref=e1251]: Drama
            - generic [ref=e1256]:
              - link "Storyline" [ref=e1257] [cursor=pointer]:
                - /url: "#storyline"
                - heading "Storyline" [level=3] [ref=e1258]:
                  - generic [ref=e1259]: Storyline
              - 'button "Storyline: edit" [ref=e1263] [cursor=pointer]':
                - generic [ref=e1266]: Edit
            - generic [ref=e1268]:
              - generic [ref=e1270]:
                - heading "Did you know" [level=3] [ref=e1272]:
                  - generic [ref=e1273]: Did you know
                - 'button "Did you know: edit" [ref=e1275] [cursor=pointer]':
                  - generic [ref=e1278]: Edit
              - generic [ref=e1279]:
                - link "See more" [ref=e1280] [cursor=pointer]:
                  - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
                  - text: Trivia
                - generic [ref=e1285] [cursor=pointer]:
                  - text: Andy and Red's opening chat in the prison yard, in which Red is throwing a baseball, took nine hours to shoot because director
                  - link "Frank Darabont" [ref=e1286]:
                    - /url: /name/nm0001104/?ref_=dyk_trv
                  - text: insisted on many takes of the scene before he was satisfied.
                  - link "Morgan Freeman" [ref=e1287]:
                    - /url: /name/nm0000151/?ref_=dyk_trv
                  - text: threw the baseball for the entire nine hours without a word of complaint. He showed up for work the next day with his left arm in a sling.
                - link "See more" [ref=e1288] [cursor=pointer]:
                  - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
              - generic [ref=e1291]:
                - link "See more" [ref=e1292] [cursor=pointer]:
                  - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
                  - text: Goofs
                - generic [ref=e1297] [cursor=pointer]:
                  - text: Circa 1963, Heywood is shown listening to the record "24 of
                  - link "Hank Williams" [ref=e1298]:
                    - /url: /name/nm0930729/?ref_=dyk_gf
                  - text: "' Greatest Hits\", released in 1970."
                - link "See more" [ref=e1299] [cursor=pointer]:
                  - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
              - generic [ref=e1302]:
                - link "See more" [ref=e1303] [cursor=pointer]:
                  - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
                  - text: Quotes
                - list [ref=e1308] [cursor=pointer]:
                  - listitem [ref=e1309]:
                    - link "Andy Dufresne" [ref=e1310]:
                      - /url: /name/nm0000209/?ref_=tt_dyk_qu
                    - text: ": ["
                    - emphasis [ref=e1311]: to Red
                    - text: "] I guess it comes down to a simple choice, really. Get busy living, or get busy dying."
                - link "See more" [ref=e1312] [cursor=pointer]:
                  - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
              - generic [ref=e1315]:
                - link "See more" [ref=e1316] [cursor=pointer]:
                  - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
                  - text: Crazy credits
                - generic [ref=e1321] [cursor=pointer]: The man who cried and was beaten when Andy first arrived is listed and credited as "Fat Ass" -- the other inmates' nickname for him.
                - link "See more" [ref=e1322] [cursor=pointer]:
                  - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
              - generic [ref=e1325]:
                - link "See more" [ref=e1326] [cursor=pointer]:
                  - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
                  - text: Alternate versions
                - generic [ref=e1328] [cursor=pointer]:
                  - button "See more" [ref=e1329]
                  - generic [ref=e1334]: This film was produced independently by Castle Rock Entertainment, but distributed by Columbia Pictures, which placed their logo at the beginning of the film. After the first video release, Castle Rock began to use Warner Bros. as their distributor. This film was then later re-issued on video and DVD by Warner Bros., which replaced the Columbia Pictures logo with their own. (The 1999 WB DVD uses no studio logo before Castle Rock [A Turner Company], and has no Columbia line-art logo at the end, just 10 seconds of blank screen as the music finishes. The post-2004 prints start with the 2003 WB logo and an updated Castle Rock logo [A TimeWarner Company], and have the Columbia line-art logo in the crawl at the end followed by a quick, still, 2003 WB logo. See also The American President.)
                - link "See more" [ref=e1335] [cursor=pointer]:
                  - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
              - generic [ref=e1338]:
                - link "See more" [ref=e1339] [cursor=pointer]:
                  - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
                  - text: Connections
                - generic [ref=e1342] [cursor=pointer]:
                  - text: Featured in
                  - 'link "At the Movies with Ebert & Roeper: Why Gump? Why Now?" [ref=e1343]':
                    - /url: /title/tt1936736/?ref_=tt_dyk_cnn
                  - text: (1994)
                - link "See more" [ref=e1344] [cursor=pointer]:
                  - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
              - generic [ref=e1347]:
                - link "See more" [ref=e1348] [cursor=pointer]:
                  - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
                  - text: Soundtracks
                - generic [ref=e1351] [cursor=pointer]:
                  - text: If I Didn't Care
                  - generic [ref=e1352]:
                    - text: by
                    - link "Jack Lawrence" [ref=e1353]:
                      - /url: /name/nm0492805/?ref_=dyk_snd
                  - generic [ref=e1354]:
                    - text: Performed by
                    - link "The Ink Spots" [ref=e1355]:
                      - /url: /name/nm1311414/?ref_=dyk_snd
                  - generic [ref=e1356]: Courtesy of MCA Records
                - link "See more" [ref=e1357] [cursor=pointer]:
                  - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
            - generic [ref=e1361]:
              - generic [ref=e1362]:
                - link "Top picks" [ref=e1363] [cursor=pointer]:
                  - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
                  - heading "Top picks" [level=3] [ref=e1364]:
                    - generic [ref=e1365]: Top picks
                - generic [ref=e1367]: Sign in to rate and Watchlist for personalized recommendations
              - link "Sign in" [ref=e1368] [cursor=pointer]:
                - /url: /registration/signin?ref_=tt_tpks_signin
                - generic [ref=e1369]: Sign in
            - generic [ref=e1371]:
              - link "FAQ 47" [ref=e1373] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_sm
                - heading "FAQ 47" [level=3] [ref=e1374]:
                  - generic [ref=e1375]: FAQ
                  - generic [ref=e1376]: "47"
              - generic [ref=e1378]:
                - generic [ref=e1379] [cursor=pointer]:
                  - link "How long is The Shawshank Redemption?" [ref=e1381]:
                    - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                  - generic [ref=e1382]: Powered by Alexa
                - link "See the answer" [ref=e1384] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                - link "Does the novella explain why Fat Ass is in prison? He seems too much like a cry baby to have committed any crimes." [ref=e1389] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
                - link "See the answer" [ref=e1390] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
                - link "Why does Andy talk in code to Red at the movie about getting Rita Hayworth since they have already done business before and Andy asked for the rock hammer in the same way?" [ref=e1395] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
                - link "See the answer" [ref=e1396] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
                - link "Why is Captain Hadley so cruel?" [ref=e1401] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
                - link "See the answer" [ref=e1402] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
            - generic [ref=e1405]:
              - generic [ref=e1407]:
                - heading "Details" [level=3] [ref=e1409]:
                  - generic [ref=e1410]: Details
                - 'button "Details: edit" [ref=e1412] [cursor=pointer]':
                  - generic [ref=e1415]: Edit
              - generic [ref=e1416]:
                - link "See more" [ref=e1417] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                  - text: Release date
                - link "October 14, 1994 (United States)" [ref=e1419] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - link "See more" [ref=e1420] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - generic [ref=e1423]: Country of origin
                - link "United States" [ref=e1425] [cursor=pointer]:
                  - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
                - generic "See more" [ref=e1426]: Official sites
                - generic [ref=e1427]:
                  - link "Official Facebook" [ref=e1428] [cursor=pointer]:
                    - /url: https://www.facebook.com/shawshankredemptionfilm/
                    - text: Official Facebook
                  - link "Warner Bros. (United States)" [ref=e1430] [cursor=pointer]:
                    - /url: https://www.warnerbros.com/movies/shawshank-redemption
                    - text: Warner Bros. (United States)
                - generic [ref=e1432]: Language
                - link "English" [ref=e1434] [cursor=pointer]:
                  - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
                - link "See more" [ref=e1435] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                  - text: Also known as
                - generic [ref=e1436] [cursor=pointer]: Sueño de fuga
                - link "See more" [ref=e1437] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                - link "See more" [ref=e1440] [cursor=pointer]:
                  - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                  - text: Filming locations
                - generic [ref=e1441] [cursor=pointer]:
                  - link "Butler, Ohio, USA" [ref=e1442]:
                    - /url: /search/title/?locations=Butler%40%40%40%20Ohio%40%40%40%20USA&ref_=tt_dt_loc
                  - text: (Exterior, rural town of "Buxton" where "Red" journeys to; shot of bus leaving with "Red" near end of film)
                - link "See more" [ref=e1443] [cursor=pointer]:
                  - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                - link "See more" [ref=e1446] [cursor=pointer]:
                  - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                  - text: Production company
                - link "Castle Rock Entertainment" [ref=e1448] [cursor=pointer]:
                  - /url: /company/co0040620/?ref_=tt_dt_cmpy_1
                - link "See more" [ref=e1449] [cursor=pointer]:
                  - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                - link "See more" [ref=e1452] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
                  - text: See more company credits at IMDbPro
                - link "See more" [ref=e1453] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
            - generic [ref=e1455]:
              - generic [ref=e1457]:
                - heading "Box office" [level=3] [ref=e1459]:
                  - generic [ref=e1460]: Box office
                - 'button "Box office: edit" [ref=e1462] [cursor=pointer]':
                  - generic [ref=e1465]: Edit
              - generic [ref=e1466]:
                - generic [ref=e1467]: Budget
                - generic [ref=e1468]: $25,000,000 (estimated)
                - generic [ref=e1469]: Gross US & Canada
                - generic [ref=e1470]: $28,767,189
                - generic [ref=e1471]: Opening weekend US & Canada
                - generic [ref=e1472]: $727,327 Sep 25, 1994
                - generic [ref=e1473]: Gross worldwide
                - generic [ref=e1474]: $29,420,884
                - generic [ref=e1475]:
                  - link "Go to IMDbPro" [ref=e1476] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                    - img [ref=e1477]
                  - link "See detailed box office info on IMDbPro" [ref=e1487] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                    - text: See detailed box office info on IMDbPro
            - generic [ref=e1489]:
              - generic [ref=e1491]:
                - link "Tech specs" [ref=e1492] [cursor=pointer]:
                  - /url: /title/tt0111161/technical/?ref_=tt_spec_sm
                  - heading "Tech specs" [level=3] [ref=e1493]:
                    - generic [ref=e1494]: Tech specs
                - 'button "Tech specs: edit" [ref=e1497] [cursor=pointer]':
                  - generic [ref=e1500]: Edit
              - generic [ref=e1501]:
                - generic [ref=e1502]: Runtime
                - generic [ref=e1503]: 2h 22m(142 min)
                - generic [ref=e1504]: Color
                - link "Color" [ref=e1506] [cursor=pointer]:
                  - /url: /search/title/?colors=color&ref_=tt_spec_att
                - generic [ref=e1507]: Sound mix
                - link "Dolby Digital" [ref=e1509] [cursor=pointer]:
                  - /url: /search/title/?sound_mixes=dolby_digital&ref_=tt_spec_att
                - generic [ref=e1510]: Aspect ratio
                - generic [ref=e1511]: "1.85 : 1"
            - generic [ref=e1515]:
              - generic [ref=e1516]:
                - link "Contribute to this page" [ref=e1517] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                  - heading "Contribute to this page" [level=3] [ref=e1518]:
                    - generic [ref=e1519]: Contribute to this page
                - generic [ref=e1521]: Suggest an edit or add missing content
              - generic [ref=e1522]:
                - link "Go to Learn more about contributing" [ref=e1523] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
                  - text: Learn more about contributing
                - link "Go to Learn more about contributing" [ref=e1524] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
              - link "Edit page" [ref=e1528] [cursor=pointer]:
                - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                - generic [ref=e1531]: Edit page
          - generic [ref=e1532]:
            - complementary "Sponsored Content" [ref=e1535]:
              - iframe [ref=e1537]:
                - link "Sponsored Content" [ref=f4e2] [cursor=pointer]:
                  - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RCvaEwS-jXDCk9yv6eQeOycAAAGeY-7u6gMAAADKBEFvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDIgICCJriRl/clv1c_ek-gwQfRHeDCDQnMcbLS2YnJXCJcvZGVo4wCGHa9TFdAWszyw2Jp31S5Gp6KvYN4hg1zkx7R0ZXuHYrEq1osxbuQxMJyeQVQdgfnrprFLtE3SuEbOm18SKJu67UUCzSDgw4oVkKm-6fS8XnFwBSHdzKUosmPlFsQ0IBZhOJMC8zmPn2trq_Zxc-x5BMqzALfCy2fM-lz4l6lBc-UkRBUtIG8mzzevuA5fLY-eTJiiOHp3bA_tzXOSA9Gdxrlvu-XGfTkOdAQv_anVWYBJYMz7FgnlmJi7kpqJCsEh9mMhiwz6-z2LuuFI6Ta5CU8EJhh-UlFFmawBvgjCykQylrpFM8S2PQ6f0v57Zw4ViCLfIaLKm-ctMz85zlErP3D4GT85Bu_0jv5hi246zW98bqhJynx6ndU1CphTvek-q2hRyxmMRLcrw469vRdhBBBiFIq1sfy9SeGKIjtKDPPLotOd4Z_3CEq4ZBlvT5mnsMfyRfZwU0X7lG_VQXqiwzE8xASEFf93o7xzWSZBlB5Hc0MV-YYkGJyfo_jjWQRDCxksfYv4K4Coqh8DtoJAimaNUchd5HzkSPT9FpLURw15YSwZHc51TgkTaKIWnEYwinqQc7T6aG1YIU31UqdjGINuUMswn47I2oH5zSem1onkpGbvxp24jYuDrxMT80TW2dbKnwi2FNyjlnua2ilE9z4jfG5HV3hy_gPRdoZhdHGD6EwJXfIVfYTWbmU6RiPPTtLAiOj6oUj/https://primevideo.com/detail/amzn1.dv.gti.dfb0995e-334a-4636-b84e-9ebf344504cf/?aref=2ICZORAkO9&ref_=dvm_crs_imd_in_s_jackryan
                  - img "Sponsored Content" [ref=f4e3]
              - button "Get information, provide feedback or report sponsored ad" [ref=e1538] [cursor=pointer]: SPONSORED
            - generic [ref=e1539]:
              - heading "More to explore" [level=3] [ref=e1542]
              - group [ref=e1546]:
                - group [ref=e1547]:
                  - generic [ref=e1548]:
                    - img "Production art"
                  - link "List" [ref=e1549] [cursor=pointer]:
                    - /url: /imdbpicks/summer-watch-guide/?ref_=tt_csegswg_elp_i
                    - generic [ref=e1557]: List
                - generic [ref=e1559]:
                  - link "Our Summer Watch Guide" [ref=e1560] [cursor=pointer]:
                    - /url: /imdbpicks/summer-watch-guide/?ref_=tt_csegswg_elp_t
                    - generic [ref=e1561]: Our Summer Watch Guide
                  - link "Browse the guide" [ref=e1563] [cursor=pointer]:
                    - /url: /imdbpicks/summer-watch-guide/?ref_=tt_c_csegswg_elp_cta
    - generic [ref=e1569]:
      - heading "Recently viewed" [level=3] [ref=e1572]
      - generic [ref=e1574]: You have no recently viewed pages
    - contentinfo [ref=e1575]:
      - link "Sign in for more access" [ref=e1577] [cursor=pointer]:
        - /url: /registration/signin/?u=%2Ftitle%2Ftt0111161%2F&ref_=tt_ftr_reg
        - generic [ref=e1578]: Sign in for more access
      - generic [ref=e1579]:
        - generic [ref=e1580]:
          - generic [ref=e1581]:
            - generic [ref=e1582]: Follow IMDb on social
            - link "TikTok" [ref=e1583] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e1585] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e1588] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e1590] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e1592] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e1594]:
            - generic [ref=e1595]:
              - generic [ref=e1596]: Get the IMDb app
              - generic [ref=e1597]: For Android and iOS
            - group [ref=e1599]:
              - generic [ref=e1600]:
                - img "Get the IMDb app"
              - link "For Android and iOS" [ref=e1601] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e1603]:
          - link "Help" [ref=e1604] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e1606] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e1608] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e1610] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e1612] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e1614]:
          - link "Press Room" [ref=e1615] [cursor=pointer]:
            - /url: /pressroom/?ref_=tt_ftr
          - link "Advertising" [ref=e1616] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e1618] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e1620] [cursor=pointer]:
            - /url: /conditions/?ref_=tt_ftr
          - link "Privacy Policy" [ref=e1621] [cursor=pointer]:
            - /url: /privacy/?ref_=tt_ftr
          - generic [ref=e1622]:
            - link "Your Ads Privacy Choices" [ref=e1623] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=tt_ftr
              - img [ref=e1624]
            - link "Your Ads Privacy Choices" [ref=e1636] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=tt_ftr
      - img "IMDb, an Amazon company" [ref=e1638]
      - paragraph [ref=e1674]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e1675] [cursor=pointer]:
      - generic [ref=e1678]: Back to top
    - img
    - status
    - img
  - alert [ref=e1679]
```

# Test source

```ts
  1   | // @ts-check
  2   | 
  3   | import { test, expect } from '@playwright/test';
  4   | 
  5   | test.describe('IMDb Showtimes & Tickets', () => {
  6   | 
  7   |   const movieUrl = 'https://www.imdb.com/title/tt0111161/';
  8   | 
  9   |   test.beforeEach(async ({ page }) => {
  10  |     await page.goto(movieUrl);
  11  |   });
  12  |   test.afterEach(async ({ page }) => {
  13  |     console.log('Test completed');
  14  |   });
  15  | 
  16  |   // 1
  17  |   test('Movie page loads successfully', async ({ page }) => {
> 18  |     await expect(page.locator('h1')).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  19  |   });
  20  | 
  21  |   // 2
  22  |   test('Showtimes section is available on page or redirect exists', async ({ page }) => {
  23  |     await page.goto('https://www.imdb.com/title/tt0111161/');
  24  | 
  25  |     const showtimesText = page.locator('text=/showtimes|tickets/i');
  26  | 
  27  |     const count = await showtimesText.count();
  28  | 
  29  |     expect(count).toBeGreaterThanOrEqual(0); 
  30  |   });
  31  | 
  32  |   // 3
  33  |   test('Showtimes button is clickable', async ({ page }) => {
  34  |     const btn = page.getByRole('link', { name: /showtimes/i });
  35  | 
  36  |     if (await btn.count() > 0) {
  37  |       await btn.first().click();
  38  |     }
  39  |   });
  40  | 
  41  | //   // 4
  42  | //   test('Navigation to showtimes page works', async ({ page }) => {
  43  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  44  | 
  45  | //     if (await btn.count() > 0) {
  46  | //       await btn.first().click();
  47  | //       await page.waitForLoadState('domcontentloaded');
  48  | 
  49  | //       await expect(page).toHaveURL(/showtimes|tickets|cinemas/);
  50  | //     }
  51  | //   });
  52  | 
  53  | //   // 5
  54  | //   test('Showtimes page content loads', async ({ page }) => {
  55  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  56  | 
  57  | //     if (await btn.count() > 0) {
  58  | //       await btn.first().click();
  59  | //       await expect(page.locator('body')).toBeVisible();
  60  | //     }
  61  | //   });
  62  | 
  63  | //   // 6
  64  | //   test('Location prompt appears or handled', async ({ page }) => {
  65  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  66  | 
  67  | //     if (await btn.count() > 0) {
  68  | //       await btn.first().click();
  69  | 
  70  | //       const location = page.locator('text=/location/i');
  71  | //       if (await location.count() > 0) {
  72  | //         await expect(location.first()).toBeVisible();
  73  | //       }
  74  | //     }
  75  | //   });
  76  | 
  77  | //   // 7
  78  | //   test('Cinema listings exist', async ({ page }) => {
  79  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  80  | 
  81  | //     if (await btn.count() > 0) {
  82  | //       await btn.first().click();
  83  | 
  84  | //       const cinemas = page.locator('text=/cinema|theatre|theater/i');
  85  | //       if (await cinemas.count() > 0) {
  86  | //         await expect(cinemas.first()).toBeVisible();
  87  | //       }
  88  | //     }
  89  | //   });
  90  | 
  91  | //   // 8
  92  | //   test('Showtimes are visible', async ({ page }) => {
  93  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  94  | 
  95  | //     if (await btn.count() > 0) {
  96  | //       await btn.first().click();
  97  | 
  98  | //       const times = page.locator('text=/\\d{1,2}:\\d{2}/'); // 10:30, 14:00 format
  99  | //       if (await times.count() > 0) {
  100 | //         await expect(times.first()).toBeVisible();
  101 | //       }
  102 | //     }
  103 | //   });
  104 | 
  105 | //   // 9
  106 | //   test('Ticket links are visible', async ({ page }) => {
  107 | //     const btn = page.getByRole('link', { name: /showtimes/i });
  108 | 
  109 | //     if (await btn.count() > 0) {
  110 | //       await btn.first().click();
  111 | 
  112 | //       const links = page.locator('a[href*="ticket"], a[target="_blank"]');
  113 | //       await expect(links.first()).toBeVisible();
  114 | //     }
  115 | //   });
  116 | 
  117 | //   // 10
  118 | //   test('External ticket redirect works', async ({ page }) => {
```