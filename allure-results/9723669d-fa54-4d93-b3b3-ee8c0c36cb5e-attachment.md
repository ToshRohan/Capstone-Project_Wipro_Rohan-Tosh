# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_showtimes&tickets.spec.js >> IMDb Showtimes & Tickets >> Movie page loads successfully
- Location: tests\imdb_showtimes&tickets.spec.js:17:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
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
        - generic [ref=e90]:
          - generic [ref=e92]:
            - link "Cast & crew" [ref=e93] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_ql_1
            - link "User reviews" [ref=e94] [cursor=pointer]:
              - /url: /title/tt0111161/reviews/?ref_=tt_ov_ql_2
            - link "Trivia" [ref=e95] [cursor=pointer]:
              - /url: /title/tt0111161/trivia/?ref_=tt_ov_ql_3
            - link "FAQ" [ref=e96] [cursor=pointer]:
              - /url: /title/tt0111161/faq/?ref_=tt_ov_ql_4
            - link "IMDbPro" [ref=e98] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_ov_hdr&ref_=cons_tt_ov_hdr
            - button "View all topics" [ref=e99] [cursor=pointer]:
              - generic [ref=e101]: All topics
            - button "Share on social media" [ref=e103] [cursor=pointer]
          - generic [ref=e106]:
            - generic [ref=e107]:
              - heading "The Shawshank Redemption" [level=1] [ref=e108]
              - link "1994" [ref=e109] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_ov_rdat
              - link "R" [ref=e110] [cursor=pointer]:
                - /url: /title/tt0111161/parentalguide/?ref_=tt_ov_pg#certificates
              - text: 2h 22m
            - generic [ref=e112]:
              - generic [ref=e113]:
                - generic [ref=e114]: IMDb RATING
                - link "View User Ratings" [ref=e115] [cursor=pointer]:
                  - /url: /title/tt0111161/ratings/?ref_=tt_ov_rat
                  - generic [ref=e120]:
                    - generic [ref=e121]:
                      - generic [ref=e122]: "9.3"
                      - generic [ref=e123]: /10
                    - generic [ref=e124]: 3.2M
              - generic [ref=e125]:
                - generic [ref=e126]: YOUR RATING
                - button "Rate The Shawshank Redemption" [ref=e127] [cursor=pointer]:
                  - generic [ref=e134]: Rate
              - generic [ref=e135]:
                - generic [ref=e136]: POPULARITY
                - link "View Popular Movies" [ref=e137] [cursor=pointer]:
                  - /url: /chart/moviemeter/?ref_=tt_ov_pop
                  - generic [ref=e142]:
                    - generic [ref=e143]: "37"
                    - generic [ref=e144]: "6"
          - generic [ref=e147]:
            - generic [ref=e148]:
              - group [ref=e150]:
                - img "Tim Robbins in The Shawshank Redemption (1994)" [ref=e152]
                - button "Add to Watchlist" [ref=e153] [cursor=pointer]
                - link "View ’The Shawshank Redemption’ Poster" [ref=e158] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i
              - generic [ref=e160]:
                - button "Video Autoplay Preference" [ref=e162] [cursor=pointer]
                - group [ref=e164] [cursor=pointer]:
                  - img "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." [ref=e166]
                  - generic "Watch Official Trailer" [ref=e167]:
                    - generic [ref=e174]: Play trailer2:11
                  - generic "Watch Official Trailer" [ref=e176]
              - generic [ref=e178]:
                - link "6 Videos" [ref=e179] [cursor=pointer]:
                  - /url: /title/tt0111161/videogallery/?ref_=tt_ov_vi_sm
                  - generic [ref=e183]: 6 Videos
                - link "99+ Photos" [ref=e184] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ov_m_sm
                  - generic [ref=e189]: 99+ Photos
            - generic [ref=e190]:
              - generic [ref=e192]:
                - generic [ref=e194]:
                  - link "Epic" [ref=e195] [cursor=pointer]:
                    - /url: /interest/in0000077/?ref_=tt_ov_in_1
                    - generic [ref=e196]: Epic
                  - link "Period Drama" [ref=e197] [cursor=pointer]:
                    - /url: /interest/in0000083/?ref_=tt_ov_in_2
                    - generic [ref=e198]: Period Drama
                  - link "Prison Drama" [ref=e199] [cursor=pointer]:
                    - /url: /interest/in0000085/?ref_=tt_ov_in_3
                    - generic [ref=e200]: Prison Drama
                  - link "Psychological Drama" [ref=e201] [cursor=pointer]:
                    - /url: /interest/in0000086/?ref_=tt_ov_in_4
                    - generic [ref=e202]: Psychological Drama
                  - link "Drama" [ref=e203] [cursor=pointer]:
                    - /url: /interest/in0000076/?ref_=tt_ov_in_5
                    - generic [ref=e204]: Drama
                - paragraph [ref=e205]:
                  - generic [ref=e206]: A wrongfully convicted banker forms a close friendship with a hardened convict over a quarter century while retaining his humanity through simple acts of compassion.
                - generic [ref=e207]:
                  - generic [ref=e208]: Director
                  - link "Frank Darabont" [ref=e210] [cursor=pointer]:
                    - /url: /name/nm0001104/?ref_=tt_ov_1_1
                  - generic [ref=e211]: Writers
                  - generic [ref=e212]:
                    - link "Stephen King" [ref=e213] [cursor=pointer]:
                      - /url: /name/nm0000175/?ref_=tt_ov_2_1
                    - link "Frank Darabont" [ref=e214] [cursor=pointer]:
                      - /url: /name/nm0001104/?ref_=tt_ov_2_2
                  - link "See full cast and crew" [ref=e215] [cursor=pointer]:
                    - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                    - text: Stars
                  - generic [ref=e216] [cursor=pointer]:
                    - link "Tim Robbins" [ref=e217]:
                      - /url: /name/nm0000209/?ref_=tt_ov_3_1
                    - link "Morgan Freeman" [ref=e218]:
                      - /url: /name/nm0000151/?ref_=tt_ov_3_2
                    - link "Bob Gunton" [ref=e219]:
                      - /url: /name/nm0348409/?ref_=tt_ov_3_3
                  - link "See full cast and crew" [ref=e220] [cursor=pointer]:
                    - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                - generic [ref=e224]:
                  - link "Go to IMDbPro" [ref=e225] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                    - img [ref=e226]
                  - link "See production info at IMDbPro" [ref=e236] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                    - text: See production info at IMDbPro
              - generic [ref=e238]:
                - generic [ref=e240]:
                  - generic [ref=e241] [cursor=pointer]:
                    - button "Add to Watchlist Added by 1.7M users" [ref=e242]:
                      - generic [ref=e244]:
                        - generic [ref=e245]: Add to Watchlist
                        - generic [ref=e246]: Added by 1.7M users
                    - button "Add title to another list" [ref=e247]
                  - button "Mark The Shawshank Redemption as watched" [ref=e250] [cursor=pointer]:
                    - generic [ref=e253]: Mark as watched
                - link "11.8K User reviews" [ref=e254] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?ref_=tt_ov_ururv
                  - generic [ref=e255]:
                    - generic [ref=e256]: 11.8K
                    - generic [ref=e257]: User reviews
                - link "154 Critic reviews" [ref=e258] [cursor=pointer]:
                  - /url: /title/tt0111161/externalreviews/?ref_=tt_ov_crv
                  - generic [ref=e259]:
                    - generic [ref=e260]: "154"
                    - generic [ref=e261]: Critic reviews
                - link "82 Metascore" [ref=e262] [cursor=pointer]:
                  - /url: /title/tt0111161/criticreviews/?ref_=tt_ov_msc
                  - generic [ref=e263]:
                    - generic [ref=e265]: "82"
                    - generic [ref=e266]: Metascore
        - generic [ref=e268]:
          - generic [ref=e269]:
            - generic [ref=e275]:
              - 'link "Top rated movie #1" [ref=e277] [cursor=pointer]':
                - /url: /chart/top/?ref_=tt_awd
              - link "See more awards and nominations" [ref=e278] [cursor=pointer]:
                - /url: /title/tt0111161/awards/?ref_=tt_awd
                - text: Nominated for 7 Oscars
              - generic [ref=e279] [cursor=pointer]: 21 wins & 43 nominations total
              - link "See more awards and nominations" [ref=e280] [cursor=pointer]:
                - /url: /title/tt0111161/awards/?ref_=tt_awd
            - generic [ref=e283]:
              - link "Videos 6" [ref=e285] [cursor=pointer]:
                - /url: /title/tt0111161/videogallery/?ref_=tt_vids_sm
                - heading "Videos 6" [level=3] [ref=e286]:
                  - text: Videos
                  - generic [ref=e287]: "6"
              - generic [ref=e290]:
                - group [ref=e291]:
                  - group [ref=e292]:
                    - generic [ref=e293]:
                      - img "Official Trailer"
                    - link "TrailerOfficial Trailer" [ref=e294] [cursor=pointer]:
                      - /url: /video/vi3877612057/?ref_=tt_vids_vi_1
                      - generic [ref=e299]: Trailer 2:11
                  - link "TrailerOfficial Trailer" [ref=e302] [cursor=pointer]:
                    - /url: /video/vi3877612057/?ref_=tt_vids_vi_t_1
                    - generic [ref=e303]: Official Trailer
                - group [ref=e306]:
                  - group [ref=e307]:
                    - generic [ref=e308]:
                      - img "Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films"
                    - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e309] [cursor=pointer]:
                      - /url: /video/vi976077081/?ref_=tt_vids_vi_2
                      - generic [ref=e314]: Clip 8:43
                  - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e317] [cursor=pointer]:
                    - /url: /video/vi976077081/?ref_=tt_vids_vi_t_2
                    - generic [ref=e318]: Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films
              - group [ref=e322]:
                - generic [ref=e323]:
                  - group [ref=e324]:
                    - group [ref=e325]:
                      - generic [ref=e326]:
                        - img "'The Shawshank Redemption' | Anniversary Mashup"
                      - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e327] [cursor=pointer]:
                        - /url: /video/vi2425798425/?ref_=tt_vids_vi_3
                        - generic [ref=e332]: Clip 1:01
                    - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e335] [cursor=pointer]:
                      - /url: /video/vi2425798425/?ref_=tt_vids_vi_t_3
                      - generic [ref=e336]: "'The Shawshank Redemption' | Anniversary Mashup"
                  - group [ref=e339]:
                    - group [ref=e340]:
                      - generic [ref=e341]:
                        - img "What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson"
                      - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e342] [cursor=pointer]:
                        - /url: /video/vi2910632473/?ref_=tt_vids_vi_4
                        - generic [ref=e347]: Video 1:55
                    - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e350] [cursor=pointer]:
                      - /url: /video/vi2910632473/?ref_=tt_vids_vi_t_4
                      - generic [ref=e351]: What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson
                  - group [ref=e354]:
                    - group [ref=e355]:
                      - generic [ref=e356]:
                        - img "Who Else Almost Starred In 'The Shawshank Redemption?'"
                      - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e357] [cursor=pointer]:
                        - /url: /video/vi2032974361/?ref_=tt_vids_vi_5
                        - generic [ref=e362]: Video 2:25
                    - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e365] [cursor=pointer]:
                      - /url: /video/vi2032974361/?ref_=tt_vids_vi_t_5
                      - generic [ref=e366]: Who Else Almost Starred In 'The Shawshank Redemption?'
                  - group [ref=e369]:
                    - group [ref=e370]:
                      - generic [ref=e371]:
                        - img "Roles That Tom Cruise Turned Down"
                      - link "VideoRoles That Tom Cruise Turned Down" [ref=e372] [cursor=pointer]:
                        - /url: /video/vi1874967321/?ref_=tt_vids_vi_6
                        - generic [ref=e377]: Video 2:22
                    - link "VideoRoles That Tom Cruise Turned Down" [ref=e380] [cursor=pointer]:
                      - /url: /video/vi1874967321/?ref_=tt_vids_vi_t_6
                      - generic [ref=e381]: Roles That Tom Cruise Turned Down
            - generic [ref=e384]:
              - generic [ref=e386]:
                - link "Photos 565" [ref=e387] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_sm
                  - heading "Photos 565" [level=3] [ref=e388]:
                    - text: Photos
                    - generic [ref=e389]: "565"
                - button "Add photo" [ref=e392] [cursor=pointer]:
                  - generic [ref=e394]: Add photo
              - generic [ref=e395]:
                - generic [ref=e396]:
                  - link "View Poster" [ref=e397] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_1
                    - img "View Poster" [ref=e399]
                  - link "View Poster" [ref=e400] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm2954723328/?ref_=tt_ph_2
                    - img "View Poster" [ref=e402]
                  - link "View Poster" [ref=e403] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3206381568/?ref_=tt_ph_3
                    - img "View Poster" [ref=e405]
                - generic [ref=e406]:
                  - link "View Poster" [ref=e407] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3172827136/?ref_=tt_ph_1_1
                    - img "View Poster" [ref=e409]
                  - link "View Poster" [ref=e410] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3156049920/?ref_=tt_ph_1_2
                    - img "View Poster" [ref=e412]
                  - link "View Poster" [ref=e413] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3139272704/?ref_=tt_ph_1_3
                    - img "View Poster" [ref=e415]
                  - link "+ 559 View Poster" [ref=e416] [cursor=pointer]:
                    - /url: /title/tt0111161/mediaviewer/rm3122495488/?ref_=tt_ph_more
                    - generic [ref=e417]: + 559
                    - img "View Poster" [ref=e419]
            - generic [ref=e424]:
              - generic [ref=e426]:
                - link "Top Cast 74" [ref=e427] [cursor=pointer]:
                  - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                  - heading "Top Cast 74" [level=3] [ref=e428]:
                    - generic [ref=e429]: Top Cast
                    - generic [ref=e430]: "74"
                - 'button "Top Cast: edit" [ref=e433] [cursor=pointer]':
                  - generic [ref=e436]: Edit
              - group [ref=e437]:
                - generic [ref=e438]:
                  - generic [ref=e439]:
                    - group [ref=e441]:
                      - generic [ref=e442]:
                        - img "Tim Robbins"
                      - button "Add Tim Robbins to favorite people" [ref=e443] [cursor=pointer]
                      - link "Go to Tim Robbins" [ref=e445] [cursor=pointer]:
                        - /url: /name/nm0000209/?ref_=tt_cst_i_1
                    - generic [ref=e447]:
                      - link "Tim Robbins" [ref=e448] [cursor=pointer]:
                        - /url: /name/nm0000209/?ref_=tt_cst_t_1
                      - link "Andy Dufresne" [ref=e450] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000209/?ref_=tt_cst_c_1
                  - generic [ref=e451]:
                    - group [ref=e453]:
                      - generic [ref=e454]:
                        - img "Morgan Freeman"
                      - button "Add Morgan Freeman to favorite people" [ref=e455] [cursor=pointer]
                      - link "Go to Morgan Freeman" [ref=e457] [cursor=pointer]:
                        - /url: /name/nm0000151/?ref_=tt_cst_i_2
                    - generic [ref=e459]:
                      - link "Morgan Freeman" [ref=e460] [cursor=pointer]:
                        - /url: /name/nm0000151/?ref_=tt_cst_t_2
                      - link "Ellis Boyd 'Red' Redding" [ref=e462] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000151/?ref_=tt_cst_c_2
                  - generic [ref=e463]:
                    - group [ref=e465]:
                      - generic [ref=e466]:
                        - img "Bob Gunton"
                      - button "Add Bob Gunton to favorite people" [ref=e467] [cursor=pointer]
                      - link "Go to Bob Gunton" [ref=e469] [cursor=pointer]:
                        - /url: /name/nm0348409/?ref_=tt_cst_i_3
                    - generic [ref=e471]:
                      - link "Bob Gunton" [ref=e472] [cursor=pointer]:
                        - /url: /name/nm0348409/?ref_=tt_cst_t_3
                      - link "Warden Norton" [ref=e474] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0348409/?ref_=tt_cst_c_3
                  - generic [ref=e475]:
                    - group [ref=e477]:
                      - generic [ref=e478]:
                        - img "William Sadler"
                      - button "Add William Sadler to favorite people" [ref=e479] [cursor=pointer]
                      - link "Go to William Sadler" [ref=e481] [cursor=pointer]:
                        - /url: /name/nm0006669/?ref_=tt_cst_i_4
                    - generic [ref=e483]:
                      - link "William Sadler" [ref=e484] [cursor=pointer]:
                        - /url: /name/nm0006669/?ref_=tt_cst_t_4
                      - link "Heywood" [ref=e486] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0006669/?ref_=tt_cst_c_4
                  - generic [ref=e487]:
                    - group [ref=e489]:
                      - generic [ref=e490]:
                        - img "Clancy Brown"
                      - button "Add Clancy Brown to favorite people" [ref=e491] [cursor=pointer]
                      - link "Go to Clancy Brown" [ref=e493] [cursor=pointer]:
                        - /url: /name/nm0000317/?ref_=tt_cst_i_5
                    - generic [ref=e495]:
                      - link "Clancy Brown" [ref=e496] [cursor=pointer]:
                        - /url: /name/nm0000317/?ref_=tt_cst_t_5
                      - link "Captain Hadley" [ref=e498] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000317/?ref_=tt_cst_c_5
                  - generic [ref=e499]:
                    - group [ref=e501]:
                      - generic [ref=e502]:
                        - img "Gil Bellows"
                      - button "Add Gil Bellows to favorite people" [ref=e503] [cursor=pointer]
                      - link "Go to Gil Bellows" [ref=e505] [cursor=pointer]:
                        - /url: /name/nm0004743/?ref_=tt_cst_i_6
                    - generic [ref=e507]:
                      - link "Gil Bellows" [ref=e508] [cursor=pointer]:
                        - /url: /name/nm0004743/?ref_=tt_cst_t_6
                      - link "Tommy" [ref=e510] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0004743/?ref_=tt_cst_c_6
                  - generic [ref=e511]:
                    - group [ref=e513]:
                      - generic [ref=e514]:
                        - img "Mark Rolston"
                      - button "Add Mark Rolston to favorite people" [ref=e515] [cursor=pointer]
                      - link "Go to Mark Rolston" [ref=e517] [cursor=pointer]:
                        - /url: /name/nm0001679/?ref_=tt_cst_i_7
                    - generic [ref=e519]:
                      - link "Mark Rolston" [ref=e520] [cursor=pointer]:
                        - /url: /name/nm0001679/?ref_=tt_cst_t_7
                      - link "Bogs Diamond" [ref=e522] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0001679/?ref_=tt_cst_c_7
                  - generic [ref=e523]:
                    - group [ref=e525]:
                      - generic [ref=e526]:
                        - img "James Whitmore"
                      - button "Add James Whitmore to favorite people" [ref=e527] [cursor=pointer]
                      - link "Go to James Whitmore" [ref=e529] [cursor=pointer]:
                        - /url: /name/nm0926235/?ref_=tt_cst_i_8
                    - generic [ref=e531]:
                      - link "James Whitmore" [ref=e532] [cursor=pointer]:
                        - /url: /name/nm0926235/?ref_=tt_cst_t_8
                      - link "Brooks Hatlen" [ref=e534] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0926235/?ref_=tt_cst_c_8
                  - generic [ref=e535]:
                    - group [ref=e537]:
                      - generic [ref=e538]:
                        - img "Jeffrey DeMunn"
                      - button "Add Jeffrey DeMunn to favorite people" [ref=e539] [cursor=pointer]
                      - link "Go to Jeffrey DeMunn" [ref=e541] [cursor=pointer]:
                        - /url: /name/nm0218810/?ref_=tt_cst_i_9
                    - generic [ref=e543]:
                      - link "Jeffrey DeMunn" [ref=e544] [cursor=pointer]:
                        - /url: /name/nm0218810/?ref_=tt_cst_t_9
                      - link "1946 D.A." [ref=e546] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0218810/?ref_=tt_cst_c_9
                  - generic [ref=e547]:
                    - group [ref=e549]:
                      - generic [ref=e550]:
                        - img "Larry Brandenburg"
                      - button "Add Larry Brandenburg to favorite people" [ref=e551] [cursor=pointer]
                      - link "Go to Larry Brandenburg" [ref=e553] [cursor=pointer]:
                        - /url: /name/nm0104594/?ref_=tt_cst_i_10
                    - generic [ref=e555]:
                      - link "Larry Brandenburg" [ref=e556] [cursor=pointer]:
                        - /url: /name/nm0104594/?ref_=tt_cst_t_10
                      - link "Skeet" [ref=e558] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0104594/?ref_=tt_cst_c_10
                  - generic [ref=e559]:
                    - group [ref=e561]:
                      - generic [ref=e562]:
                        - img "Neil Giuntoli"
                      - button "Add Neil Giuntoli to favorite people" [ref=e563] [cursor=pointer]
                      - link "Go to Neil Giuntoli" [ref=e565] [cursor=pointer]:
                        - /url: /name/nm0321358/?ref_=tt_cst_i_11
                    - generic [ref=e567]:
                      - link "Neil Giuntoli" [ref=e568] [cursor=pointer]:
                        - /url: /name/nm0321358/?ref_=tt_cst_t_11
                      - link "Jigger" [ref=e570] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0321358/?ref_=tt_cst_c_11
                  - generic [ref=e571]:
                    - group [ref=e573]:
                      - generic [ref=e574]:
                        - img "Brian Libby"
                      - button "Add Brian Libby to favorite people" [ref=e575] [cursor=pointer]
                      - link "Go to Brian Libby" [ref=e577] [cursor=pointer]:
                        - /url: /name/nm0508742/?ref_=tt_cst_i_12
                    - generic [ref=e579]:
                      - link "Brian Libby" [ref=e580] [cursor=pointer]:
                        - /url: /name/nm0508742/?ref_=tt_cst_t_12
                      - link "Floyd" [ref=e582] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0508742/?ref_=tt_cst_c_12
                  - generic [ref=e583]:
                    - group [ref=e585]:
                      - generic [ref=e586]:
                        - img "David Proval"
                      - button "Add David Proval to favorite people" [ref=e587] [cursor=pointer]
                      - link "Go to David Proval" [ref=e589] [cursor=pointer]:
                        - /url: /name/nm0698998/?ref_=tt_cst_i_13
                    - generic [ref=e591]:
                      - link "David Proval" [ref=e592] [cursor=pointer]:
                        - /url: /name/nm0698998/?ref_=tt_cst_t_13
                      - link "Snooze" [ref=e594] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0698998/?ref_=tt_cst_c_13
                  - generic [ref=e595]:
                    - group [ref=e597]:
                      - generic [ref=e598]:
                        - img "Joseph Ragno"
                      - button "Add Joseph Ragno to favorite people" [ref=e599] [cursor=pointer]
                      - link "Go to Joseph Ragno" [ref=e601] [cursor=pointer]:
                        - /url: /name/nm0706554/?ref_=tt_cst_i_14
                    - generic [ref=e603]:
                      - link "Joseph Ragno" [ref=e604] [cursor=pointer]:
                        - /url: /name/nm0706554/?ref_=tt_cst_t_14
                      - link "Ernie" [ref=e606] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0706554/?ref_=tt_cst_c_14
                  - generic [ref=e607]:
                    - group [ref=e609]:
                      - generic [ref=e610]:
                        - img "Jude Ciccolella"
                      - button "Add Jude Ciccolella to favorite people" [ref=e611] [cursor=pointer]
                      - link "Go to Jude Ciccolella" [ref=e613] [cursor=pointer]:
                        - /url: /name/nm0161980/?ref_=tt_cst_i_15
                    - generic [ref=e615]:
                      - link "Jude Ciccolella" [ref=e616] [cursor=pointer]:
                        - /url: /name/nm0161980/?ref_=tt_cst_t_15
                      - link "Guard Mert" [ref=e618] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0161980/?ref_=tt_cst_c_15
                  - generic [ref=e619]:
                    - group [ref=e621]:
                      - generic [ref=e622]:
                        - img "Paul McCrane"
                      - button "Add Paul McCrane to favorite people" [ref=e623] [cursor=pointer]
                      - link "Go to Paul McCrane" [ref=e625] [cursor=pointer]:
                        - /url: /name/nm0005204/?ref_=tt_cst_i_16
                    - generic [ref=e627]:
                      - link "Paul McCrane" [ref=e628] [cursor=pointer]:
                        - /url: /name/nm0005204/?ref_=tt_cst_t_16
                      - link "Guard Trout" [ref=e630] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0005204/?ref_=tt_cst_c_16
                  - generic [ref=e631]:
                    - group [ref=e633]:
                      - img [ref=e635]
                      - button "Add Renee Blaine to favorite people" [ref=e637] [cursor=pointer]
                      - link "Go to Renee Blaine" [ref=e639] [cursor=pointer]:
                        - /url: /name/nm0086169/?ref_=tt_cst_i_17
                    - generic [ref=e641]:
                      - link "Renee Blaine" [ref=e642] [cursor=pointer]:
                        - /url: /name/nm0086169/?ref_=tt_cst_t_17
                      - link "Andy Dufresne's Wife" [ref=e644] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0086169/?ref_=tt_cst_c_17
                  - generic [ref=e645]:
                    - group [ref=e647]:
                      - img [ref=e649]
                      - button "Add Scott Mann to favorite people" [ref=e651] [cursor=pointer]
                      - link "Go to Scott Mann" [ref=e653] [cursor=pointer]:
                        - /url: /name/nm0542957/?ref_=tt_cst_i_18
                    - generic [ref=e655]:
                      - link "Scott Mann" [ref=e656] [cursor=pointer]:
                        - /url: /name/nm0542957/?ref_=tt_cst_t_18
                      - link "Glenn Quentin" [ref=e658] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0542957/?ref_=tt_cst_c_18
              - generic [ref=e659]: Director
              - link "Frank Darabont" [ref=e661] [cursor=pointer]:
                - /url: /name/nm0001104/?ref_=tt_cst_1_1
              - generic [ref=e662]: Writers
              - generic [ref=e663]:
                - link "Stephen King" [ref=e664] [cursor=pointer]:
                  - /url: /name/nm0000175/?ref_=tt_cst_2_1
                - link "Frank Darabont" [ref=e665] [cursor=pointer]:
                  - /url: /name/nm0001104/?ref_=tt_cst_2_2
              - link "See full cast and crew" [ref=e666] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                - text: All cast & crew
              - link "See full cast and crew" [ref=e667] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
              - link "Production, box office & more at IMDbPro" [ref=e670] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
              - link "Production, box office & more at IMDbPro" [ref=e671] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
            - generic [ref=e673]:
              - generic [ref=e675]:
                - link "User reviews 11.8K" [ref=e676] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?ref_=tt_ururv_sm
                  - heading "User reviews 11.8K" [level=3] [ref=e677]:
                    - generic [ref=e678]: User reviews
                    - generic [ref=e679]: 11.8K
                - button "Review" [ref=e682] [cursor=pointer]:
                  - generic [ref=e684]: Review
              - generic [ref=e685]:
                - generic [ref=e686]:
                  - generic [ref=e689]: "9.3"
                  - generic [ref=e690]: 3192.3K
                - generic [ref=e692]:
                  - link "43915 1-star reviews. Select to read them." [ref=e693] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=1&ref_=tt_ururv_histo_1
                    - generic [ref=e697]: "1"
                  - link "5661 2-star reviews. Select to read them." [ref=e698] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=2&ref_=tt_ururv_histo_2
                    - generic [ref=e702]: "2"
                  - link "6148 3-star reviews. Select to read them." [ref=e703] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=3&ref_=tt_ururv_histo_3
                    - generic [ref=e707]: "3"
                  - link "8401 4-star reviews. Select to read them." [ref=e708] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=4&ref_=tt_ururv_histo_4
                    - generic [ref=e712]: "4"
                  - link "17821 5-star reviews. Select to read them." [ref=e713] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=5&ref_=tt_ururv_histo_5
                    - generic [ref=e717]: "5"
                  - link "34976 6-star reviews. Select to read them." [ref=e718] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=6&ref_=tt_ururv_histo_6
                    - generic [ref=e722]: "6"
                  - link "118376 7-star reviews. Select to read them." [ref=e723] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=7&ref_=tt_ururv_histo_7
                    - generic [ref=e727]: "7"
                  - link "376619 8-star reviews. Select to read them." [ref=e728] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=8&ref_=tt_ururv_histo_8
                    - generic [ref=e732]: "8"
                  - link "827546 9-star reviews. Select to read them." [ref=e733] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=9&ref_=tt_ururv_histo_9
                    - generic [ref=e737]: "9"
                  - link "1752883 10-star reviews. Select to read them." [ref=e738] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=10&ref_=tt_ururv_histo_10
                    - generic [ref=e742]: "10"
              - heading "Featured reviews" [level=3] [ref=e745]
              - group [ref=e746]:
                - generic [ref=e747]:
                  - generic [ref=e748] [cursor=pointer]:
                    - generic [ref=e749]:
                      - link "User alexkolokotronis" [ref=e751]:
                        - /url: /user/p.2vibpa6e4h2oc5snny6pkkmzb4/?ref_=tt_ururv_c_1_uname
                        - generic [ref=e752]:
                          - group [ref=e753]:
                            - generic [ref=e754]:
                              - img [ref=e756]
                              - img "Placeholder profile image" [ref=e758]
                          - generic [ref=e762]: alexkolokotronis
                      - generic "Author rating is 10" [ref=e763]:
                        - generic [ref=e765]: "10"
                    - link "This is How Movies Should Be Made" [ref=e767]:
                      - /url: /title/tt0111161/reviews/?featured=rw1822343&ref_=tt_ururv_c_1_hd
                      - heading "This is How Movies Should Be Made" [level=3] [ref=e768]
                    - text: This movie is not your ordinary Hollywood flick. It has a great and deep message. This movie has a foundation and just kept on being built on from their and that foundation is hope.
                    - text: Other than just the message of this movie the acting was phenomenal. Tim Robbins gave one of the greatest performances ever. He was inspiring, intelligent and most of all positive. His performance just made me smile. Robbins plays Andy Dufresne who was wrongfully convicted of murdering his wife and her lover. He is gets to life sentences but yet never gives up hope. In he becomes friends with Ellis Boyd "Red" Redding played by Morgan Freeman. Freeman who gives the finest performance of his career has unlike Robbins lost hope. He is in deep regret of the crime that he committed. His way of deflecting the pain away is by trying to not feel anything at all. With his friendship with Andy he learns that without our hopes and dreams we have nothing. Andy also becomes friends with the rest of Red's group. James Whitmore also gave a great performance as Brooks Halten who gets out of prison parole but in the words of Red he has been "institutionalized".
                    - text: The directing by Frank Darabont was just magnificent. He kept this movie at a great steady pace along with the writing and great cinematography. He portrayed prison life in such a horrifying way, but not in terms of the physical pain but the stress and pain that wares mentally on the inmates, some of which deserve a second chance.
                    - text: Whatever you do, don't listen to the people who say this movie is overrated because this is one of the most inspiring and greatest movies ever. It has everything you could possibly want.
                  - generic [ref=e769] [cursor=pointer]:
                    - generic [ref=e770]:
                      - link "User gavin6942" [ref=e772]:
                        - /url: /user/p.ipulzcdf6eohek3d5zte3h6zz4/?ref_=tt_ururv_c_2_uname
                        - generic [ref=e773]:
                          - group [ref=e774]:
                            - generic [ref=e776]:
                              - img "Avatar"
                          - generic [ref=e779]: gavin6942
                      - generic "Author rating is 10" [ref=e780]:
                        - generic [ref=e782]: "10"
                    - link "IMDb and the Greatest Film of All Time" [ref=e784]:
                      - /url: /title/tt0111161/reviews/?featured=rw3118520&ref_=tt_ururv_c_2_hd
                      - heading "IMDb and the Greatest Film of All Time" [level=3] [ref=e785]
                    - text: Two imprisoned men (Tim Robbins and Morgan Freeman) bond over a number of years, finding solace and eventual redemption through acts of common decency.
                    - text: Is this the greatest film of all time? IMDb would have you believe so. Despite being a box office flop (that barely recouped its budget), the film received multiple award nominations and outstanding reviews from critics for its acting, story, and realism. It has since been successful on cable television, VHS, DVD, and Blu-ray.
                    - text: And it deserves this praise that seems to be growing each year. Now twenty years old, the film has not aged a day, and instead seems to be getting better. This is Tim Robbins' best role, and a fine performance from the always wonderful Morgan Freeman.
                  - generic [ref=e786] [cursor=pointer]:
                    - generic [ref=e787]:
                      - link "User auuwws" [ref=e789]:
                        - /url: /user/p.x772cyhwydc5c2oj2r265uncjy/?ref_=tt_ururv_c_3_uname
                        - generic [ref=e790]:
                          - group [ref=e791]:
                            - generic [ref=e793]:
                              - img "Avatar"
                          - generic [ref=e796]: auuwws
                      - generic "Author rating is 10" [ref=e797]:
                        - generic [ref=e799]: "10"
                    - link "the shawshank redemption" [ref=e801]:
                      - /url: /title/tt0111161/reviews/?featured=rw6158379&ref_=tt_ururv_c_3_hd
                      - heading "the shawshank redemption" [level=3] [ref=e802]
                    - text: The best movie in history and the best ending in any entertainment business
                  - generic [ref=e803] [cursor=pointer]:
                    - generic [ref=e804]:
                      - link "User Sleepin_Dragon" [ref=e806]:
                        - /url: /user/p.nadoqibapcutzfhtliuzriogla/?ref_=tt_ururv_c_4_uname
                        - generic [ref=e807]:
                          - group [ref=e808]:
                            - generic [ref=e810]:
                              - img "Avatar"
                          - generic [ref=e813]: Sleepin_Dragon
                      - generic "Author rating is 10" [ref=e814]:
                        - generic [ref=e816]: "10"
                    - link "An incredible movie. One that lives with you." [ref=e818]:
                      - /url: /title/tt0111161/reviews/?featured=rw6606154&ref_=tt_ururv_c_4_hd
                      - heading "An incredible movie. One that lives with you." [level=3] [ref=e819]
                    - text: It is no wonder that the film has such a high rating, it is quite literally breathtaking. What can I say that hasn't said before? Not much, it's the story, the acting, the premise, but most of all, this movie is about how it makes you feel. Sometimes you watch a film, and can't remember it days later, this film loves with you, once you've seen it, you don't forget.
                    - text: The ultimate story of friendship, of hope, and of life, and overcoming adversity.
                    - text: I understand why so many class this as the best film of all time, it isn't mine, but I get it. If you haven't seen it, or haven't seen it for some time, you need to watch it, it's amazing. 10/10.
                  - generic [ref=e820] [cursor=pointer]:
                    - generic [ref=e821]:
                      - link "User baumer" [ref=e823]:
                        - /url: /user/p.odocrgj5lvfevutk3rukg7nqji/?ref_=tt_ururv_c_5_uname
                        - generic [ref=e824]:
                          - group [ref=e825]:
                            - generic [ref=e827]:
                              - img "Avatar"
                          - generic [ref=e830]: baumer
                      - generic "Author rating is 10" [ref=e831]:
                        - generic [ref=e833]: "10"
                    - link "Stephen King's best adapted movie" [ref=e835]:
                      - /url: /title/tt0111161/reviews/?featured=rw0348302&ref_=tt_ururv_c_5_hd
                      - heading "Stephen King's best adapted movie" [level=3] [ref=e836]
                    - text: Misery and Stand By Me were the best adaptations up until this one, now you can add Shawshank to that list.
                    - text: "This is simply one of the best films ever made and I know I am not the first to say that and I certainly won't be the last. The standing on the IMDb is a true barometer of that. #3 as of this date and I'm sure it could be number 1. So I'll just skip all the normal praise of the film because we all know how great it is. But let me perhaps add that what I find so fascinating about Shawshank is that Stephen King wrote it."
                    - text: King is one of the best writers in the world. Books like IT and the Castle Rock series are some of the greatest stories ever told. But his best adaptations are always done by the best directors. The Shining was brilliantly interpreted by Kubrick and of course the aforementioned Misery and Stand By Me are both by Rob Reiner. Now Frank Darabont comes onto the scene and makes arguably the best King film ever. He seems to understand what King wants to say and he conveys that beautifully.
                    - text: What makes this film one of the best ever made is the message it conveys. It is one of eternal hope. Andy Dufresne, played by Tim Robbins, has been sent to prison for a crime he did not commit. But he never loses hope. He never gives up his quest to become a free man again. His years of tenacity, patience and wits keep him not only sane, but it gives his mind and a spirit a will to live. This film has a different feel to it. There has never been anything like it before and I don't know if there will again.
                    - text: I'm not going to say any more about this film, it has already been said, but just suffice to say that I am glad that Forrest Gump won best picture in 94. I would have been equally glad if Pulp Fiction or Shawshank would have won. It is that good of a movie and one that will be appreciated for years to come.
            - generic [ref=e840]:
              - generic [ref=e841]:
                - heading "'The Shawshank Redemption' Without Morgan Freeman?" [level=2] [ref=e842]
                - emphasis [ref=e843]:
                  - link "The Shawshank Redemption" [ref=e844] [cursor=pointer]:
                    - /url: /title/tt0111161/?ref_=tt_eds_center-3_lk
                - text: has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?
                - link "Who almost starred?" [ref=e845] [cursor=pointer]:
                  - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_c_vd_cc_shs_cta
              - group [ref=e847]:
                - group [ref=e848]:
                  - generic [ref=e849]:
                    - img "Editorial Image"
                  - link "2:25" [ref=e850] [cursor=pointer]:
                    - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_vd_cc_shs_i
                    - generic [ref=e855]: 2:25
            - generic [ref=e858]:
              - generic [ref=e860]:
                - heading "More like this" [level=3] [ref=e862]:
                  - generic [ref=e863]: More like this
                - link "More information" [ref=e865] [cursor=pointer]:
                  - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
              - group [ref=e868]:
                - generic [ref=e869]:
                  - group [ref=e870]:
                    - group [ref=e871]:
                      - generic [ref=e872]:
                        - img "The Godfather"
                      - button "Add to Watchlist" [ref=e873] [cursor=pointer]
                      - link "View title page for The Godfather" [ref=e878] [cursor=pointer]:
                        - /url: /title/tt0068646/?ref_=tt_mlt_i_1
                    - generic [ref=e880]:
                      - generic [ref=e883]: "9.2"
                      - button "Rate The Godfather" [ref=e884] [cursor=pointer]
                    - link "View title page for The Godfather" [ref=e887] [cursor=pointer]:
                      - /url: /title/tt0068646/?ref_=tt_mlt_t_1
                      - text: The Godfather
                    - button "More about this" [ref=e892] [cursor=pointer]
                  - group [ref=e895]:
                    - group [ref=e896]:
                      - generic [ref=e897]:
                        - img "The Dark Knight"
                      - button "Add to Watchlist" [ref=e898] [cursor=pointer]
                      - link "View title page for The Dark Knight" [ref=e903] [cursor=pointer]:
                        - /url: /title/tt0468569/?ref_=tt_mlt_i_2
                    - generic [ref=e905]:
                      - generic [ref=e908]: "9.1"
                      - button "Rate The Dark Knight" [ref=e909] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e912] [cursor=pointer]:
                      - /url: /title/tt0468569/?ref_=tt_mlt_t_2
                      - text: The Dark Knight
                    - button "More about this" [ref=e917] [cursor=pointer]
                  - group [ref=e920]:
                    - group [ref=e921]:
                      - generic [ref=e922]:
                        - img "Forrest Gump"
                      - button "Add to Watchlist" [ref=e923] [cursor=pointer]
                      - link "View title page for Forrest Gump" [ref=e928] [cursor=pointer]:
                        - /url: /title/tt0109830/?ref_=tt_mlt_i_3
                    - generic [ref=e930]:
                      - generic [ref=e933]: "8.8"
                      - button "Rate Forrest Gump" [ref=e934] [cursor=pointer]
                    - link "View title page for Forrest Gump" [ref=e937] [cursor=pointer]:
                      - /url: /title/tt0109830/?ref_=tt_mlt_t_3
                      - text: Forrest Gump
                    - button "More about this" [ref=e942] [cursor=pointer]
                  - group [ref=e945]:
                    - group [ref=e946]:
                      - generic [ref=e947]:
                        - img "Fight Club"
                      - button "Add to Watchlist" [ref=e948] [cursor=pointer]
                      - link "View title page for Fight Club" [ref=e953] [cursor=pointer]:
                        - /url: /title/tt0137523/?ref_=tt_mlt_i_4
                    - generic [ref=e955]:
                      - generic [ref=e958]: "8.8"
                      - button "Rate Fight Club" [ref=e959] [cursor=pointer]
                    - link "View title page for Fight Club" [ref=e962] [cursor=pointer]:
                      - /url: /title/tt0137523/?ref_=tt_mlt_t_4
                      - text: Fight Club
                    - button "More about this" [ref=e967] [cursor=pointer]
                  - group [ref=e970]:
                    - group [ref=e971]:
                      - generic [ref=e972]:
                        - img "Inception"
                      - button "Add to Watchlist" [ref=e973] [cursor=pointer]
                      - link "View title page for Inception" [ref=e978] [cursor=pointer]:
                        - /url: /title/tt1375666/?ref_=tt_mlt_i_5
                    - generic [ref=e980]:
                      - generic [ref=e983]: "8.8"
                      - button "Rate Inception" [ref=e984] [cursor=pointer]
                    - link "View title page for Inception" [ref=e987] [cursor=pointer]:
                      - /url: /title/tt1375666/?ref_=tt_mlt_t_5
                      - text: Inception
                    - button "More about this" [ref=e992] [cursor=pointer]
                  - group [ref=e995]:
                    - group [ref=e996]:
                      - generic [ref=e997]:
                        - img "Seven"
                      - button "Add to Watchlist" [ref=e998] [cursor=pointer]
                      - link "View title page for Seven" [ref=e1003] [cursor=pointer]:
                        - /url: /title/tt0114369/?ref_=tt_mlt_i_6
                    - generic [ref=e1005]:
                      - generic [ref=e1008]: "8.6"
                      - button "Rate Seven" [ref=e1009] [cursor=pointer]
                    - link "View title page for Seven" [ref=e1012] [cursor=pointer]:
                      - /url: /title/tt0114369/?ref_=tt_mlt_t_6
                      - text: Seven
                    - button "More about this" [ref=e1017] [cursor=pointer]
                  - group [ref=e1020]:
                    - group [ref=e1021]:
                      - generic [ref=e1022]:
                        - img "Pulp Fiction"
                      - button "Add to Watchlist" [ref=e1023] [cursor=pointer]
                      - link "View title page for Pulp Fiction" [ref=e1028] [cursor=pointer]:
                        - /url: /title/tt0110912/?ref_=tt_mlt_i_7
                    - generic [ref=e1030]:
                      - generic [ref=e1033]: "8.8"
                      - button "Rate Pulp Fiction" [ref=e1034] [cursor=pointer]
                    - link "View title page for Pulp Fiction" [ref=e1037] [cursor=pointer]:
                      - /url: /title/tt0110912/?ref_=tt_mlt_t_7
                      - text: Pulp Fiction
                    - button "More about this" [ref=e1042] [cursor=pointer]
                  - group [ref=e1045]:
                    - group [ref=e1046]:
                      - generic [ref=e1047]:
                        - img "Interstellar"
                      - button "Add to Watchlist" [ref=e1048] [cursor=pointer]
                      - link "View title page for Interstellar" [ref=e1053] [cursor=pointer]:
                        - /url: /title/tt0816692/?ref_=tt_mlt_i_8
                    - generic [ref=e1055]:
                      - generic [ref=e1058]: "8.7"
                      - button "Rate Interstellar" [ref=e1059] [cursor=pointer]
                    - link "View title page for Interstellar" [ref=e1062] [cursor=pointer]:
                      - /url: /title/tt0816692/?ref_=tt_mlt_t_8
                      - text: Interstellar
                    - button "More about this" [ref=e1067] [cursor=pointer]
                  - group [ref=e1070]:
                    - group [ref=e1071]:
                      - generic [ref=e1072]:
                        - img "The Green Mile"
                      - button "Add to Watchlist" [ref=e1073] [cursor=pointer]
                      - link "View title page for The Green Mile" [ref=e1078] [cursor=pointer]:
                        - /url: /title/tt0120689/?ref_=tt_mlt_i_9
                    - generic [ref=e1080]:
                      - generic [ref=e1083]: "8.6"
                      - button "Rate The Green Mile" [ref=e1084] [cursor=pointer]
                    - link "View title page for The Green Mile" [ref=e1087] [cursor=pointer]:
                      - /url: /title/tt0120689/?ref_=tt_mlt_t_9
                      - text: The Green Mile
                    - button "More about this" [ref=e1092] [cursor=pointer]
                  - group [ref=e1095]:
                    - group [ref=e1096]:
                      - generic [ref=e1097]:
                        - img "The Godfather Part II"
                      - button "Add to Watchlist" [ref=e1098] [cursor=pointer]
                      - link "View title page for The Godfather Part II" [ref=e1103] [cursor=pointer]:
                        - /url: /title/tt0071562/?ref_=tt_mlt_i_10
                    - generic [ref=e1105]:
                      - generic [ref=e1108]: "9.0"
                      - button "Rate The Godfather Part II" [ref=e1109] [cursor=pointer]
                    - link "View title page for The Godfather Part II" [ref=e1112] [cursor=pointer]:
                      - /url: /title/tt0071562/?ref_=tt_mlt_t_10
                      - text: The Godfather Part II
                    - button "More about this" [ref=e1117] [cursor=pointer]
                  - group [ref=e1120]:
                    - group [ref=e1121]:
                      - generic [ref=e1122]:
                        - img "Schindler's List"
                      - button "Add to Watchlist" [ref=e1123] [cursor=pointer]
                      - link "View title page for Schindler's List" [ref=e1128] [cursor=pointer]:
                        - /url: /title/tt0108052/?ref_=tt_mlt_i_11
                    - generic [ref=e1130]:
                      - generic [ref=e1133]: "9.0"
                      - button "Rate Schindler's List" [ref=e1134] [cursor=pointer]
                    - link "View title page for Schindler's List" [ref=e1137] [cursor=pointer]:
                      - /url: /title/tt0108052/?ref_=tt_mlt_t_11
                      - text: Schindler's List
                    - button "More about this" [ref=e1142] [cursor=pointer]
                  - group [ref=e1145]:
                    - group [ref=e1146]:
                      - generic [ref=e1147]:
                        - 'img "The Lord of the Rings: The Return of the King"'
                      - button "Add to Watchlist" [ref=e1148] [cursor=pointer]
                      - 'link "View title page for The Lord of the Rings: The Return of the King" [ref=e1153] [cursor=pointer]':
                        - /url: /title/tt0167260/?ref_=tt_mlt_i_12
                    - generic [ref=e1155]:
                      - generic [ref=e1158]: "9.0"
                      - 'button "Rate The Lord of the Rings: The Return of the King" [ref=e1159] [cursor=pointer]'
                    - 'link "View title page for The Lord of the Rings: The Return of the King" [ref=e1162] [cursor=pointer]':
                      - /url: /title/tt0167260/?ref_=tt_mlt_t_12
                      - text: "The Lord of the Rings: The Return of the King"
                    - button "More about this" [ref=e1167] [cursor=pointer]
            - generic [ref=e1171]:
              - link "Related interests" [ref=e1173] [cursor=pointer]:
                - /url: /interest/all/?ref_=tt_rin_sm
                - heading "Related interests" [level=3] [ref=e1174]:
                  - generic [ref=e1175]: Related interests
              - group [ref=e1177]:
                - generic [ref=e1178]:
                  - generic [ref=e1179]:
                    - group [ref=e1180]:
                      - generic [ref=e1181]:
                        - img "Orson Welles in Citizen Kane (1941)"
                      - button "Add Epic to your interests" [ref=e1182] [cursor=pointer]
                      - link "Epic" [ref=e1184] [cursor=pointer]:
                        - /url: /interest/in0000077/?ref_=tt_rin_in_i_1
                    - link "Epic" [ref=e1186] [cursor=pointer]:
                      - /url: /interest/in0000077/?ref_=tt_rin_in_t_1
                      - generic [ref=e1187]: Epic
                  - generic [ref=e1188]:
                    - group [ref=e1189]:
                      - generic [ref=e1190]:
                        - img "Emma Watson, Saoirse Ronan, Florence Pugh, and Eliza Scanlen in Little Women (2019)"
                      - button "Add Period Drama to your interests" [ref=e1191] [cursor=pointer]
                      - link "Period Drama" [ref=e1193] [cursor=pointer]:
                        - /url: /interest/in0000083/?ref_=tt_rin_in_i_2
                    - link "Period Drama" [ref=e1195] [cursor=pointer]:
                      - /url: /interest/in0000083/?ref_=tt_rin_in_t_2
                      - generic [ref=e1196]: Period Drama
                  - generic [ref=e1197]:
                    - group [ref=e1198]:
                      - generic [ref=e1199]:
                        - img "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)"
                      - button "Add Prison Drama to your interests" [ref=e1200] [cursor=pointer]
                      - link "Prison Drama" [ref=e1202] [cursor=pointer]:
                        - /url: /interest/in0000085/?ref_=tt_rin_in_i_3
                    - link "Prison Drama" [ref=e1204] [cursor=pointer]:
                      - /url: /interest/in0000085/?ref_=tt_rin_in_t_3
                      - generic [ref=e1205]: Prison Drama
                  - generic [ref=e1206]:
                    - group [ref=e1207]:
                      - generic [ref=e1208]:
                        - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
                      - button "Add Psychological Drama to your interests" [ref=e1209] [cursor=pointer]
                      - link "Psychological Drama" [ref=e1211] [cursor=pointer]:
                        - /url: /interest/in0000086/?ref_=tt_rin_in_i_4
                    - link "Psychological Drama" [ref=e1213] [cursor=pointer]:
                      - /url: /interest/in0000086/?ref_=tt_rin_in_t_4
                      - generic [ref=e1214]: Psychological Drama
                  - generic [ref=e1215]:
                    - group [ref=e1216]:
                      - generic [ref=e1217]:
                        - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
                      - button "Add Drama to your interests" [ref=e1218] [cursor=pointer]
                      - link "Drama" [ref=e1220] [cursor=pointer]:
                        - /url: /interest/in0000076/?ref_=tt_rin_in_i_5
                    - link "Drama" [ref=e1222] [cursor=pointer]:
                      - /url: /interest/in0000076/?ref_=tt_rin_in_t_5
                      - generic [ref=e1223]: Drama
            - generic [ref=e1228]:
              - link "Storyline" [ref=e1229] [cursor=pointer]:
                - /url: "#storyline"
                - heading "Storyline" [level=3] [ref=e1230]:
                  - generic [ref=e1231]: Storyline
              - 'button "Storyline: edit" [ref=e1235] [cursor=pointer]':
                - generic [ref=e1238]: Edit
            - generic [ref=e1240]:
              - generic [ref=e1242]:
                - heading "Did you know" [level=3] [ref=e1244]:
                  - generic [ref=e1245]: Did you know
                - 'button "Did you know: edit" [ref=e1247] [cursor=pointer]':
                  - generic [ref=e1250]: Edit
              - generic [ref=e1251]:
                - link "See more" [ref=e1252] [cursor=pointer]:
                  - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
                  - text: Trivia
                - generic [ref=e1257] [cursor=pointer]:
                  - text: Andy and Red's opening chat in the prison yard, in which Red is throwing a baseball, took nine hours to shoot because director
                  - link "Frank Darabont" [ref=e1258]:
                    - /url: /name/nm0001104/?ref_=dyk_trv
                  - text: insisted on many takes of the scene before he was satisfied.
                  - link "Morgan Freeman" [ref=e1259]:
                    - /url: /name/nm0000151/?ref_=dyk_trv
                  - text: threw the baseball for the entire nine hours without a word of complaint. He showed up for work the next day with his left arm in a sling.
                - link "See more" [ref=e1260] [cursor=pointer]:
                  - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
              - generic [ref=e1263]:
                - link "See more" [ref=e1264] [cursor=pointer]:
                  - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
                  - text: Goofs
                - generic [ref=e1269] [cursor=pointer]:
                  - text: Circa 1963, Heywood is shown listening to the record "24 of
                  - link "Hank Williams" [ref=e1270]:
                    - /url: /name/nm0930729/?ref_=dyk_gf
                  - text: "' Greatest Hits\", released in 1970."
                - link "See more" [ref=e1271] [cursor=pointer]:
                  - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
              - generic [ref=e1274]:
                - link "See more" [ref=e1275] [cursor=pointer]:
                  - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
                  - text: Quotes
                - list [ref=e1280] [cursor=pointer]:
                  - listitem [ref=e1281]:
                    - link "Andy Dufresne" [ref=e1282]:
                      - /url: /name/nm0000209/?ref_=tt_dyk_qu
                    - text: ": ["
                    - emphasis [ref=e1283]: to Red
                    - text: "] I guess it comes down to a simple choice, really. Get busy living, or get busy dying."
                - link "See more" [ref=e1284] [cursor=pointer]:
                  - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
              - generic [ref=e1287]:
                - link "See more" [ref=e1288] [cursor=pointer]:
                  - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
                  - text: Crazy credits
                - generic [ref=e1293] [cursor=pointer]: The man who cried and was beaten when Andy first arrived is listed and credited as "Fat Ass" -- the other inmates' nickname for him.
                - link "See more" [ref=e1294] [cursor=pointer]:
                  - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
              - generic [ref=e1297]:
                - link "See more" [ref=e1298] [cursor=pointer]:
                  - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
                  - text: Alternate versions
                - generic [ref=e1300] [cursor=pointer]:
                  - button "See more" [ref=e1301]
                  - generic [ref=e1306]: This film was produced independently by Castle Rock Entertainment, but distributed by Columbia Pictures, which placed their logo at the beginning of the film. After the first video release, Castle Rock began to use Warner Bros. as their distributor. This film was then later re-issued on video and DVD by Warner Bros., which replaced the Columbia Pictures logo with their own. (The 1999 WB DVD uses no studio logo before Castle Rock [A Turner Company], and has no Columbia line-art logo at the end, just 10 seconds of blank screen as the music finishes. The post-2004 prints start with the 2003 WB logo and an updated Castle Rock logo [A TimeWarner Company], and have the Columbia line-art logo in the crawl at the end followed by a quick, still, 2003 WB logo. See also The American President.)
                - link "See more" [ref=e1307] [cursor=pointer]:
                  - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
              - generic [ref=e1310]:
                - link "See more" [ref=e1311] [cursor=pointer]:
                  - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
                  - text: Connections
                - generic [ref=e1314] [cursor=pointer]:
                  - text: Featured in
                  - 'link "At the Movies with Ebert & Roeper: Why Gump? Why Now?" [ref=e1315]':
                    - /url: /title/tt1936736/?ref_=tt_dyk_cnn
                  - text: (1994)
                - link "See more" [ref=e1316] [cursor=pointer]:
                  - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
              - generic [ref=e1319]:
                - link "See more" [ref=e1320] [cursor=pointer]:
                  - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
                  - text: Soundtracks
                - generic [ref=e1323] [cursor=pointer]:
                  - text: If I Didn't Care
                  - generic [ref=e1324]:
                    - text: by
                    - link "Jack Lawrence" [ref=e1325]:
                      - /url: /name/nm0492805/?ref_=dyk_snd
                  - generic [ref=e1326]:
                    - text: Performed by
                    - link "The Ink Spots" [ref=e1327]:
                      - /url: /name/nm1311414/?ref_=dyk_snd
                  - generic [ref=e1328]: Courtesy of MCA Records
                - link "See more" [ref=e1329] [cursor=pointer]:
                  - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
            - generic [ref=e1333]:
              - generic [ref=e1334]:
                - link "Top picks" [ref=e1335] [cursor=pointer]:
                  - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
                  - heading "Top picks" [level=3] [ref=e1336]:
                    - generic [ref=e1337]: Top picks
                - generic [ref=e1339]: Sign in to rate and Watchlist for personalized recommendations
              - link "Sign in" [ref=e1340] [cursor=pointer]:
                - /url: /registration/signin?ref_=tt_tpks_signin
                - generic [ref=e1341]: Sign in
            - generic [ref=e1343]:
              - link "FAQ 47" [ref=e1345] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_sm
                - heading "FAQ 47" [level=3] [ref=e1346]:
                  - generic [ref=e1347]: FAQ
                  - generic [ref=e1348]: "47"
              - generic [ref=e1350]:
                - generic [ref=e1351] [cursor=pointer]:
                  - link "How long is The Shawshank Redemption?" [ref=e1353]:
                    - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                  - generic [ref=e1354]: Powered by Alexa
                - link "See the answer" [ref=e1356] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                - link "Does the novella explain why Fat Ass is in prison? He seems too much like a cry baby to have committed any crimes." [ref=e1361] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
                - link "See the answer" [ref=e1362] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
                - link "Why does Andy talk in code to Red at the movie about getting Rita Hayworth since they have already done business before and Andy asked for the rock hammer in the same way?" [ref=e1367] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
                - link "See the answer" [ref=e1368] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
                - link "Why is Captain Hadley so cruel?" [ref=e1373] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
                - link "See the answer" [ref=e1374] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
            - generic [ref=e1377]:
              - generic [ref=e1379]:
                - heading "Details" [level=3] [ref=e1381]:
                  - generic [ref=e1382]: Details
                - 'button "Details: edit" [ref=e1384] [cursor=pointer]':
                  - generic [ref=e1387]: Edit
              - generic [ref=e1388]:
                - link "See more" [ref=e1389] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                  - text: Release date
                - link "October 14, 1994 (United States)" [ref=e1391] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - link "See more" [ref=e1392] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - generic [ref=e1395]: Country of origin
                - link "United States" [ref=e1397] [cursor=pointer]:
                  - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
                - generic "See more" [ref=e1398]: Official sites
                - generic [ref=e1399]:
                  - link "Official Facebook" [ref=e1400] [cursor=pointer]:
                    - /url: https://www.facebook.com/shawshankredemptionfilm/
                    - text: Official Facebook
                  - link "Warner Bros. (United States)" [ref=e1402] [cursor=pointer]:
                    - /url: https://www.warnerbros.com/movies/shawshank-redemption
                    - text: Warner Bros. (United States)
                - generic [ref=e1404]: Language
                - link "English" [ref=e1406] [cursor=pointer]:
                  - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
                - link "See more" [ref=e1407] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                  - text: Also known as
                - generic [ref=e1408] [cursor=pointer]: Sueño de fuga
                - link "See more" [ref=e1409] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                - link "See more" [ref=e1412] [cursor=pointer]:
                  - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                  - text: Filming locations
                - generic [ref=e1413] [cursor=pointer]:
                  - link "Butler, Ohio, USA" [ref=e1414]:
                    - /url: /search/title/?locations=Butler%40%40%40%20Ohio%40%40%40%20USA&ref_=tt_dt_loc
                  - text: (Exterior, rural town of "Buxton" where "Red" journeys to; shot of bus leaving with "Red" near end of film)
                - link "See more" [ref=e1415] [cursor=pointer]:
                  - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                - link "See more" [ref=e1418] [cursor=pointer]:
                  - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                  - text: Production company
                - link "Castle Rock Entertainment" [ref=e1420] [cursor=pointer]:
                  - /url: /company/co0040620/?ref_=tt_dt_cmpy_1
                - link "See more" [ref=e1421] [cursor=pointer]:
                  - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                - link "See more" [ref=e1424] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
                  - text: See more company credits at IMDbPro
                - link "See more" [ref=e1425] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
            - generic [ref=e1427]:
              - generic [ref=e1429]:
                - heading "Box office" [level=3] [ref=e1431]:
                  - generic [ref=e1432]: Box office
                - 'button "Box office: edit" [ref=e1434] [cursor=pointer]':
                  - generic [ref=e1437]: Edit
              - generic [ref=e1438]:
                - generic [ref=e1439]: Budget
                - generic [ref=e1440]: $25,000,000 (estimated)
                - generic [ref=e1441]: Gross US & Canada
                - generic [ref=e1442]: $28,767,189
                - generic [ref=e1443]: Opening weekend US & Canada
                - generic [ref=e1444]: $727,327 Sep 25, 1994
                - generic [ref=e1445]: Gross worldwide
                - generic [ref=e1446]: $29,420,884
                - generic [ref=e1447]:
                  - link "Go to IMDbPro" [ref=e1448] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                    - img [ref=e1449]
                  - link "See detailed box office info on IMDbPro" [ref=e1459] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                    - text: See detailed box office info on IMDbPro
            - generic [ref=e1461]:
              - generic [ref=e1463]:
                - link "Tech specs" [ref=e1464] [cursor=pointer]:
                  - /url: /title/tt0111161/technical/?ref_=tt_spec_sm
                  - heading "Tech specs" [level=3] [ref=e1465]:
                    - generic [ref=e1466]: Tech specs
                - 'button "Tech specs: edit" [ref=e1469] [cursor=pointer]':
                  - generic [ref=e1472]: Edit
              - generic [ref=e1473]:
                - generic [ref=e1474]: Runtime
                - generic [ref=e1475]: 2h 22m(142 min)
                - generic [ref=e1476]: Color
                - link "Color" [ref=e1478] [cursor=pointer]:
                  - /url: /search/title/?colors=color&ref_=tt_spec_att
                - generic [ref=e1479]: Sound mix
                - link "Dolby Digital" [ref=e1481] [cursor=pointer]:
                  - /url: /search/title/?sound_mixes=dolby_digital&ref_=tt_spec_att
                - generic [ref=e1482]: Aspect ratio
                - generic [ref=e1483]: "1.85 : 1"
            - generic [ref=e1487]:
              - generic [ref=e1488]:
                - link "Contribute to this page" [ref=e1489] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                  - heading "Contribute to this page" [level=3] [ref=e1490]:
                    - generic [ref=e1491]: Contribute to this page
                - generic [ref=e1493]: Suggest an edit or add missing content
              - generic [ref=e1494]:
                - link "Go to Learn more about contributing" [ref=e1495] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
                  - text: Learn more about contributing
                - link "Go to Learn more about contributing" [ref=e1496] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
              - link "Edit page" [ref=e1500] [cursor=pointer]:
                - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                - generic [ref=e1503]: Edit page
          - generic [ref=e1509]:
            - heading "More to explore" [level=3] [ref=e1512]
            - group [ref=e1516]:
              - group [ref=e1517]:
                - generic [ref=e1518]:
                  - img "Production art"
                - link "Photos" [ref=e1519] [cursor=pointer]:
                  - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=tt_sw_ts_i
                  - generic [ref=e1525]: Photos
              - generic [ref=e1527]:
                - link "See Who's Trending on IMDb Right Now" [ref=e1528] [cursor=pointer]:
                  - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=tt_sw_ts_t
                  - generic [ref=e1529]: See Who's Trending on IMDb Right Now
                - link "See the gallery" [ref=e1531] [cursor=pointer]:
                  - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=tt_c_sw_ts_cta
    - generic [ref=e1546]:
      - heading "Recently viewed" [level=3] [ref=e1549]
      - generic [ref=e1551]: You have no recently viewed pages
    - contentinfo [ref=e1556]:
      - link "Sign in for more access" [ref=e1558] [cursor=pointer]:
        - /url: /registration/signin/?u=%2Ftitle%2Ftt0111161%2F&ref_=tt_ftr_reg
        - generic [ref=e1559]: Sign in for more access
      - generic [ref=e1560]:
        - generic [ref=e1561]:
          - generic [ref=e1562]:
            - generic [ref=e1563]: Follow IMDb on social
            - link "TikTok" [ref=e1564] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e1566] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e1569] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e1571] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e1573] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e1575]:
            - generic [ref=e1576]:
              - generic [ref=e1577]: Get the IMDb app
              - generic [ref=e1578]: For Android and iOS
            - group [ref=e1580]:
              - generic [ref=e1581]:
                - img "Get the IMDb app"
              - link "For Android and iOS" [ref=e1582] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e1584]:
          - link "Help" [ref=e1585] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e1587] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e1589] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e1591] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e1593] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e1595]:
          - link "Press Room" [ref=e1596] [cursor=pointer]:
            - /url: /pressroom/?ref_=tt_ftr
          - link "Advertising" [ref=e1597] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e1599] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e1601] [cursor=pointer]:
            - /url: /conditions/?ref_=tt_ftr
          - link "Privacy Policy" [ref=e1602] [cursor=pointer]:
            - /url: /privacy/?ref_=tt_ftr
          - generic [ref=e1603]:
            - link "Your Ads Privacy Choices" [ref=e1604] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=tt_ftr
              - img [ref=e1605]
            - link "Your Ads Privacy Choices" [ref=e1617] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=tt_ftr
      - img "IMDb, an Amazon company" [ref=e1619]
      - paragraph [ref=e1655]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e1656] [cursor=pointer]:
      - generic [ref=e1659]: Back to top
    - img
    - status
    - img
  - alert [ref=e1660]
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
  18  |       await expect.poll(async () => {
  19  |       return await page.locator('h1').count();
> 20  |     }).toBeGreaterThan(0);
      |        ^ Error: expect(received).toBeGreaterThan(expected)
  21  |   });
  22  | 
  23  |   
  24  |   // // 2
  25  |   // test('Showtimes section is available on page or redirect exists', async ({ page }) => {
  26  |   //   await page.goto('https://www.imdb.com/title/tt0111161/');
  27  | 
  28  |   //   const showtimesText = page.locator('text=/showtimes|tickets/i');
  29  | 
  30  |   //   const count = await showtimesText.count();
  31  | 
  32  |   //   expect(count).toBeGreaterThanOrEqual(0); 
  33  |   // });
  34  | 
  35  |   // // 3
  36  |   // test('Showtimes button is clickable', async ({ page }) => {
  37  |   //   const btn = page.getByRole('link', { name: /showtimes/i });
  38  | 
  39  |   //   if (await btn.count() > 0) {
  40  |   //     await btn.first().click();
  41  |   //   }
  42  |   // });
  43  | 
  44  | //   // 4
  45  | //   test('Navigation to showtimes page works', async ({ page }) => {
  46  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  47  | 
  48  | //     if (await btn.count() > 0) {
  49  | //       await btn.first().click();
  50  | //       await page.waitForLoadState('domcontentloaded');
  51  | 
  52  | //       await expect(page).toHaveURL(/showtimes|tickets|cinemas/);
  53  | //     }
  54  | //   });
  55  | 
  56  | //   // 5
  57  | //   test('Showtimes page content loads', async ({ page }) => {
  58  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  59  | 
  60  | //     if (await btn.count() > 0) {
  61  | //       await btn.first().click();
  62  | //       await expect(page.locator('body')).toBeVisible();
  63  | //     }
  64  | //   });
  65  | 
  66  | //   // 6
  67  | //   test('Location prompt appears or handled', async ({ page }) => {
  68  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  69  | 
  70  | //     if (await btn.count() > 0) {
  71  | //       await btn.first().click();
  72  | 
  73  | //       const location = page.locator('text=/location/i');
  74  | //       if (await location.count() > 0) {
  75  | //         await expect(location.first()).toBeVisible();
  76  | //       }
  77  | //     }
  78  | //   });
  79  | 
  80  | //   // 7
  81  | //   test('Cinema listings exist', async ({ page }) => {
  82  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  83  | 
  84  | //     if (await btn.count() > 0) {
  85  | //       await btn.first().click();
  86  | 
  87  | //       const cinemas = page.locator('text=/cinema|theatre|theater/i');
  88  | //       if (await cinemas.count() > 0) {
  89  | //         await expect(cinemas.first()).toBeVisible();
  90  | //       }
  91  | //     }
  92  | //   });
  93  | 
  94  | //   // 8
  95  | //   test('Showtimes are visible', async ({ page }) => {
  96  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  97  | 
  98  | //     if (await btn.count() > 0) {
  99  | //       await btn.first().click();
  100 | 
  101 | //       const times = page.locator('text=/\\d{1,2}:\\d{2}/'); // 10:30, 14:00 format
  102 | //       if (await times.count() > 0) {
  103 | //         await expect(times.first()).toBeVisible();
  104 | //       }
  105 | //     }
  106 | //   });
  107 | 
  108 | //   // 9
  109 | //   test('Ticket links are visible', async ({ page }) => {
  110 | //     const btn = page.getByRole('link', { name: /showtimes/i });
  111 | 
  112 | //     if (await btn.count() > 0) {
  113 | //       await btn.first().click();
  114 | 
  115 | //       const links = page.locator('a[href*="ticket"], a[target="_blank"]');
  116 | //       await expect(links.first()).toBeVisible();
  117 | //     }
  118 | //   });
  119 | 
  120 | //   // 10
```