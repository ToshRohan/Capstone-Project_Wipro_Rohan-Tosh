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
                      - link "Go to Tim Robbins" [ref=e446] [cursor=pointer]:
                        - /url: /name/nm0000209/?ref_=tt_cst_i_1
                    - generic [ref=e448]:
                      - link "Tim Robbins" [ref=e449] [cursor=pointer]:
                        - /url: /name/nm0000209/?ref_=tt_cst_t_1
                      - link "Andy Dufresne" [ref=e451] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000209/?ref_=tt_cst_c_1
                  - generic [ref=e452]:
                    - group [ref=e454]:
                      - generic [ref=e455]:
                        - img "Morgan Freeman"
                      - button "Add Morgan Freeman to favorite people" [ref=e456] [cursor=pointer]
                      - link "Go to Morgan Freeman" [ref=e459] [cursor=pointer]:
                        - /url: /name/nm0000151/?ref_=tt_cst_i_2
                    - generic [ref=e461]:
                      - link "Morgan Freeman" [ref=e462] [cursor=pointer]:
                        - /url: /name/nm0000151/?ref_=tt_cst_t_2
                      - link "Ellis Boyd 'Red' Redding" [ref=e464] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000151/?ref_=tt_cst_c_2
                  - generic [ref=e465]:
                    - group [ref=e467]:
                      - generic [ref=e468]:
                        - img "Bob Gunton"
                      - button "Add Bob Gunton to favorite people" [ref=e469] [cursor=pointer]
                      - link "Go to Bob Gunton" [ref=e472] [cursor=pointer]:
                        - /url: /name/nm0348409/?ref_=tt_cst_i_3
                    - generic [ref=e474]:
                      - link "Bob Gunton" [ref=e475] [cursor=pointer]:
                        - /url: /name/nm0348409/?ref_=tt_cst_t_3
                      - link "Warden Norton" [ref=e477] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0348409/?ref_=tt_cst_c_3
                  - generic [ref=e478]:
                    - group [ref=e480]:
                      - generic [ref=e481]:
                        - img "William Sadler"
                      - button "Add William Sadler to favorite people" [ref=e482] [cursor=pointer]
                      - link "Go to William Sadler" [ref=e485] [cursor=pointer]:
                        - /url: /name/nm0006669/?ref_=tt_cst_i_4
                    - generic [ref=e487]:
                      - link "William Sadler" [ref=e488] [cursor=pointer]:
                        - /url: /name/nm0006669/?ref_=tt_cst_t_4
                      - link "Heywood" [ref=e490] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0006669/?ref_=tt_cst_c_4
                  - generic [ref=e491]:
                    - group [ref=e493]:
                      - generic [ref=e494]:
                        - img "Clancy Brown"
                      - button "Add Clancy Brown to favorite people" [ref=e495] [cursor=pointer]
                      - link "Go to Clancy Brown" [ref=e498] [cursor=pointer]:
                        - /url: /name/nm0000317/?ref_=tt_cst_i_5
                    - generic [ref=e500]:
                      - link "Clancy Brown" [ref=e501] [cursor=pointer]:
                        - /url: /name/nm0000317/?ref_=tt_cst_t_5
                      - link "Captain Hadley" [ref=e503] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0000317/?ref_=tt_cst_c_5
                  - generic [ref=e504]:
                    - group [ref=e506]:
                      - generic [ref=e507]:
                        - img "Gil Bellows"
                      - button "Add Gil Bellows to favorite people" [ref=e508] [cursor=pointer]
                      - link "Go to Gil Bellows" [ref=e511] [cursor=pointer]:
                        - /url: /name/nm0004743/?ref_=tt_cst_i_6
                    - generic [ref=e513]:
                      - link "Gil Bellows" [ref=e514] [cursor=pointer]:
                        - /url: /name/nm0004743/?ref_=tt_cst_t_6
                      - link "Tommy" [ref=e516] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0004743/?ref_=tt_cst_c_6
                  - generic [ref=e517]:
                    - group [ref=e519]:
                      - generic [ref=e520]:
                        - img "Mark Rolston"
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
                      - generic [ref=e533]:
                        - img "James Whitmore"
                      - button "Add James Whitmore to favorite people" [ref=e534] [cursor=pointer]
                      - link "Go to James Whitmore" [ref=e537] [cursor=pointer]:
                        - /url: /name/nm0926235/?ref_=tt_cst_i_8
                    - generic [ref=e539]:
                      - link "James Whitmore" [ref=e540] [cursor=pointer]:
                        - /url: /name/nm0926235/?ref_=tt_cst_t_8
                      - link "Brooks Hatlen" [ref=e542] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0926235/?ref_=tt_cst_c_8
                  - generic [ref=e543]:
                    - group [ref=e545]:
                      - generic [ref=e546]:
                        - img "Jeffrey DeMunn"
                      - button "Add Jeffrey DeMunn to favorite people" [ref=e547] [cursor=pointer]
                      - link "Go to Jeffrey DeMunn" [ref=e550] [cursor=pointer]:
                        - /url: /name/nm0218810/?ref_=tt_cst_i_9
                    - generic [ref=e552]:
                      - link "Jeffrey DeMunn" [ref=e553] [cursor=pointer]:
                        - /url: /name/nm0218810/?ref_=tt_cst_t_9
                      - link "1946 D.A." [ref=e555] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0218810/?ref_=tt_cst_c_9
                  - generic [ref=e556]:
                    - group [ref=e558]:
                      - generic [ref=e559]:
                        - img "Larry Brandenburg"
                      - button "Add Larry Brandenburg to favorite people" [ref=e560] [cursor=pointer]
                      - link "Go to Larry Brandenburg" [ref=e563] [cursor=pointer]:
                        - /url: /name/nm0104594/?ref_=tt_cst_i_10
                    - generic [ref=e565]:
                      - link "Larry Brandenburg" [ref=e566] [cursor=pointer]:
                        - /url: /name/nm0104594/?ref_=tt_cst_t_10
                      - link "Skeet" [ref=e568] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0104594/?ref_=tt_cst_c_10
                  - generic [ref=e569]:
                    - group [ref=e571]:
                      - generic [ref=e572]:
                        - img "Neil Giuntoli"
                      - button "Add Neil Giuntoli to favorite people" [ref=e573] [cursor=pointer]
                      - link "Go to Neil Giuntoli" [ref=e576] [cursor=pointer]:
                        - /url: /name/nm0321358/?ref_=tt_cst_i_11
                    - generic [ref=e578]:
                      - link "Neil Giuntoli" [ref=e579] [cursor=pointer]:
                        - /url: /name/nm0321358/?ref_=tt_cst_t_11
                      - link "Jigger" [ref=e581] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0321358/?ref_=tt_cst_c_11
                  - generic [ref=e582]:
                    - group [ref=e584]:
                      - generic [ref=e585]:
                        - img "Brian Libby"
                      - button "Add Brian Libby to favorite people" [ref=e586] [cursor=pointer]
                      - link "Go to Brian Libby" [ref=e589] [cursor=pointer]:
                        - /url: /name/nm0508742/?ref_=tt_cst_i_12
                    - generic [ref=e591]:
                      - link "Brian Libby" [ref=e592] [cursor=pointer]:
                        - /url: /name/nm0508742/?ref_=tt_cst_t_12
                      - link "Floyd" [ref=e594] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0508742/?ref_=tt_cst_c_12
                  - generic [ref=e595]:
                    - group [ref=e597]:
                      - generic [ref=e598]:
                        - img "David Proval"
                      - button "Add David Proval to favorite people" [ref=e599] [cursor=pointer]
                      - link "Go to David Proval" [ref=e602] [cursor=pointer]:
                        - /url: /name/nm0698998/?ref_=tt_cst_i_13
                    - generic [ref=e604]:
                      - link "David Proval" [ref=e605] [cursor=pointer]:
                        - /url: /name/nm0698998/?ref_=tt_cst_t_13
                      - link "Snooze" [ref=e607] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0698998/?ref_=tt_cst_c_13
                  - generic [ref=e608]:
                    - group [ref=e610]:
                      - generic [ref=e611]:
                        - img "Joseph Ragno"
                      - button "Add Joseph Ragno to favorite people" [ref=e612] [cursor=pointer]
                      - link "Go to Joseph Ragno" [ref=e615] [cursor=pointer]:
                        - /url: /name/nm0706554/?ref_=tt_cst_i_14
                    - generic [ref=e617]:
                      - link "Joseph Ragno" [ref=e618] [cursor=pointer]:
                        - /url: /name/nm0706554/?ref_=tt_cst_t_14
                      - link "Ernie" [ref=e620] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0706554/?ref_=tt_cst_c_14
                  - generic [ref=e621]:
                    - group [ref=e623]:
                      - generic [ref=e624]:
                        - img "Jude Ciccolella"
                      - button "Add Jude Ciccolella to favorite people" [ref=e625] [cursor=pointer]
                      - link "Go to Jude Ciccolella" [ref=e628] [cursor=pointer]:
                        - /url: /name/nm0161980/?ref_=tt_cst_i_15
                    - generic [ref=e630]:
                      - link "Jude Ciccolella" [ref=e631] [cursor=pointer]:
                        - /url: /name/nm0161980/?ref_=tt_cst_t_15
                      - link "Guard Mert" [ref=e633] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0161980/?ref_=tt_cst_c_15
                  - generic [ref=e634]:
                    - group [ref=e636]:
                      - generic [ref=e637]:
                        - img "Paul McCrane"
                      - button "Add Paul McCrane to favorite people" [ref=e638] [cursor=pointer]
                      - link "Go to Paul McCrane" [ref=e641] [cursor=pointer]:
                        - /url: /name/nm0005204/?ref_=tt_cst_i_16
                    - generic [ref=e643]:
                      - link "Paul McCrane" [ref=e644] [cursor=pointer]:
                        - /url: /name/nm0005204/?ref_=tt_cst_t_16
                      - link "Guard Trout" [ref=e646] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0005204/?ref_=tt_cst_c_16
                  - generic [ref=e647]:
                    - group [ref=e649]:
                      - img [ref=e651]
                      - button "Add Renee Blaine to favorite people" [ref=e653] [cursor=pointer]
                      - link "Go to Renee Blaine" [ref=e656] [cursor=pointer]:
                        - /url: /name/nm0086169/?ref_=tt_cst_i_17
                    - generic [ref=e658]:
                      - link "Renee Blaine" [ref=e659] [cursor=pointer]:
                        - /url: /name/nm0086169/?ref_=tt_cst_t_17
                      - link "Andy Dufresne's Wife" [ref=e661] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0086169/?ref_=tt_cst_c_17
                  - generic [ref=e662]:
                    - group [ref=e664]:
                      - img [ref=e666]
                      - button "Add Scott Mann to favorite people" [ref=e668] [cursor=pointer]
                      - link "Go to Scott Mann" [ref=e671] [cursor=pointer]:
                        - /url: /name/nm0542957/?ref_=tt_cst_i_18
                    - generic [ref=e673]:
                      - link "Scott Mann" [ref=e674] [cursor=pointer]:
                        - /url: /name/nm0542957/?ref_=tt_cst_t_18
                      - link "Glenn Quentin" [ref=e676] [cursor=pointer]:
                        - /url: /title/tt0111161/characters/nm0542957/?ref_=tt_cst_c_18
              - generic [ref=e677]: Director
              - link "Frank Darabont" [ref=e679] [cursor=pointer]:
                - /url: /name/nm0001104/?ref_=tt_cst_1_1
              - generic [ref=e680]: Writers
              - generic [ref=e681]:
                - link "Stephen King" [ref=e682] [cursor=pointer]:
                  - /url: /name/nm0000175/?ref_=tt_cst_2_1
                - link "Frank Darabont" [ref=e683] [cursor=pointer]:
                  - /url: /name/nm0001104/?ref_=tt_cst_2_2
              - link "See full cast and crew" [ref=e684] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                - text: All cast & crew
              - link "See full cast and crew" [ref=e685] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
              - link "Production, box office & more at IMDbPro" [ref=e688] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
              - link "Production, box office & more at IMDbPro" [ref=e689] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
            - generic [ref=e691]:
              - generic [ref=e693]:
                - link "User reviews 11.8K" [ref=e694] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?ref_=tt_ururv_sm
                  - heading "User reviews 11.8K" [level=3] [ref=e695]:
                    - generic [ref=e696]: User reviews
                    - generic [ref=e697]: 11.8K
                - button "Review" [ref=e700] [cursor=pointer]:
                  - generic [ref=e702]: Review
              - generic [ref=e703]:
                - generic [ref=e704]:
                  - generic [ref=e707]: "9.3"
                  - generic [ref=e708]: 3192K
                - generic [ref=e710]:
                  - link "44007 1-star reviews. Select to read them." [ref=e711] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=1&ref_=tt_ururv_histo_1
                    - generic [ref=e715]: "1"
                  - link "5668 2-star reviews. Select to read them." [ref=e716] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=2&ref_=tt_ururv_histo_2
                    - generic [ref=e720]: "2"
                  - link "6153 3-star reviews. Select to read them." [ref=e721] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=3&ref_=tt_ururv_histo_3
                    - generic [ref=e725]: "3"
                  - link "8402 4-star reviews. Select to read them." [ref=e726] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=4&ref_=tt_ururv_histo_4
                    - generic [ref=e730]: "4"
                  - link "17863 5-star reviews. Select to read them." [ref=e731] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=5&ref_=tt_ururv_histo_5
                    - generic [ref=e735]: "5"
                  - link "35021 6-star reviews. Select to read them." [ref=e736] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=6&ref_=tt_ururv_histo_6
                    - generic [ref=e740]: "6"
                  - link "118397 7-star reviews. Select to read them." [ref=e741] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=7&ref_=tt_ururv_histo_7
                    - generic [ref=e745]: "7"
                  - link "376568 8-star reviews. Select to read them." [ref=e746] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=8&ref_=tt_ururv_histo_8
                    - generic [ref=e750]: "8"
                  - link "827393 9-star reviews. Select to read them." [ref=e751] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=9&ref_=tt_ururv_histo_9
                    - generic [ref=e755]: "9"
                  - link "1752593 10-star reviews. Select to read them." [ref=e756] [cursor=pointer]:
                    - /url: /title/tt0111161/reviews/?rating=10&ref_=tt_ururv_histo_10
                    - generic [ref=e760]: "10"
              - heading "Featured reviews" [level=3] [ref=e763]
              - group [ref=e764]:
                - generic [ref=e765]:
                  - generic [ref=e766] [cursor=pointer]:
                    - generic [ref=e767]:
                      - link "User Sleepin_Dragon" [ref=e769]:
                        - /url: /user/p.nadoqibapcutzfhtliuzriogla/?ref_=tt_ururv_c_1_uname
                        - generic [ref=e770]:
                          - group [ref=e771]:
                            - generic [ref=e773]:
                              - img "Avatar"
                          - generic [ref=e776]: Sleepin_Dragon
                      - generic "Author rating is 10" [ref=e777]:
                        - generic [ref=e779]: "10"
                    - link "An incredible movie. One that lives with you." [ref=e781]:
                      - /url: /title/tt0111161/reviews/?featured=rw6606154&ref_=tt_ururv_c_1_hd
                      - heading "An incredible movie. One that lives with you." [level=3] [ref=e782]
                    - text: It is no wonder that the film has such a high rating, it is quite literally breathtaking. What can I say that hasn't said before? Not much, it's the story, the acting, the premise, but most of all, this movie is about how it makes you feel. Sometimes you watch a film, and can't remember it days later, this film loves with you, once you've seen it, you don't forget.
                    - text: The ultimate story of friendship, of hope, and of life, and overcoming adversity.
                    - text: I understand why so many class this as the best film of all time, it isn't mine, but I get it. If you haven't seen it, or haven't seen it for some time, you need to watch it, it's amazing. 10/10.
                  - generic [ref=e783] [cursor=pointer]:
                    - generic [ref=e784]:
                      - link "User nowego" [ref=e786]:
                        - /url: /user/p.ncve4xodxwur6wfxnfgnuwgsxy/?ref_=tt_ururv_c_2_uname
                        - generic [ref=e787]:
                          - group [ref=e788]:
                            - generic [ref=e790]:
                              - img "Avatar"
                          - generic [ref=e793]: nowego
                      - generic "Author rating is 10" [ref=e794]:
                        - generic [ref=e796]: "10"
                    - link "Eternal Hope" [ref=e798]:
                      - /url: /title/tt0111161/reviews/?featured=rw4203332&ref_=tt_ururv_c_2_hd
                      - heading "Eternal Hope" [level=3] [ref=e799]
                    - text: I've lost count of the number of times I have seen this movie, but it is more than 20. It has to be one of the best movies ever made. It made me take notice Morgan Freeman and Tim Robbins like I had never noticed any actors before.
                    - text: I have from a very young age been a huge fan of anything Stephen King writes and had already read the short story that this movie is based on years prior to seeing this movie.
                    - text: Not everything Stephen King has written that gets turned into a movie comes out well, but this is as close to perfection as it gets and has everything you could ever want in a movie.
                    - text: Something that is outstanding is the fact that it has no real action, no special effects and no gimmicks. 99% of the movie is just men in a prison uniforms talking. Yet it absolutely hooks you almost from the beginning and has you glued to the screen to the end.
                    - text: For me what really makes this film one of the best is the message of eternal hope it conveys throughout. The never ever give up hope attitude of the main character so well conveyed by Tim Robbins. The ending is just spine tingling every time I see it, no matter how many times I have seen it.
                    - text: Brilliant, brilliant movie and a must see for everyone.
                  - generic [ref=e800] [cursor=pointer]:
                    - generic [ref=e801]:
                      - link "User auuwws" [ref=e803]:
                        - /url: /user/p.x772cyhwydc5c2oj2r265uncjy/?ref_=tt_ururv_c_3_uname
                        - generic [ref=e804]:
                          - group [ref=e805]:
                            - generic [ref=e807]:
                              - img "Avatar"
                          - generic [ref=e810]: auuwws
                      - generic "Author rating is 10" [ref=e811]:
                        - generic [ref=e813]: "10"
                    - link "the shawshank redemption" [ref=e815]:
                      - /url: /title/tt0111161/reviews/?featured=rw6158379&ref_=tt_ururv_c_3_hd
                      - heading "the shawshank redemption" [level=3] [ref=e816]
                    - text: The best movie in history and the best ending in any entertainment business
                  - generic [ref=e817] [cursor=pointer]:
                    - link "User speedreid" [ref=e820]:
                      - /url: /user/p.tlirx2eikf7gwxcyepzahltg6e/?ref_=tt_ururv_c_4_uname
                      - generic [ref=e821]:
                        - group [ref=e822]:
                          - generic [ref=e823]:
                            - img [ref=e825]
                            - img "Placeholder profile image" [ref=e827]
                        - generic [ref=e831]: speedreid
                    - link "Prepare to be moved" [ref=e833]:
                      - /url: /title/tt0111161/reviews/?featured=rw0348718&ref_=tt_ururv_c_4_hd
                      - heading "Prepare to be moved" [level=3] [ref=e834]
                    - text: I have never seen such an amazing film since I saw The Shawshank Redemption. Shawshank encompasses friendships, hardships, hopes, and dreams. And what is so great about the movie is that it moves you, it gives you hope. Even though the circumstances between the characters and the viewers are quite different, you don't feel that far removed from what the characters are going through.
                    - text: It is a simple film, yet it has an everlasting message. Frank Darabont didn't need to put any kind of outlandish special effects to get us to love this film, the narration and the acting does that for him. Why this movie didn't win all seven Oscars is beyond me, but don't let that sway you to not see this film, let its ranking on the IMDb's top 250 list sway you, let your friends recommendation about the movie sway you.
                    - text: Set aside a little over two hours tonight and rent this movie. You will finally understand what everyone is talking about and you will understand why this is my all time favorite movie.
                  - generic [ref=e835] [cursor=pointer]:
                    - generic [ref=e836]:
                      - link "User gavin6942" [ref=e838]:
                        - /url: /user/p.ipulzcdf6eohek3d5zte3h6zz4/?ref_=tt_ururv_c_5_uname
                        - generic [ref=e839]:
                          - group [ref=e840]:
                            - generic [ref=e842]:
                              - img "Avatar"
                          - generic [ref=e845]: gavin6942
                      - generic "Author rating is 10" [ref=e846]:
                        - generic [ref=e848]: "10"
                    - link "IMDb and the Greatest Film of All Time" [ref=e850]:
                      - /url: /title/tt0111161/reviews/?featured=rw3118520&ref_=tt_ururv_c_5_hd
                      - heading "IMDb and the Greatest Film of All Time" [level=3] [ref=e851]
                    - text: Two imprisoned men (Tim Robbins and Morgan Freeman) bond over a number of years, finding solace and eventual redemption through acts of common decency.
                    - text: Is this the greatest film of all time? IMDb would have you believe so. Despite being a box office flop (that barely recouped its budget), the film received multiple award nominations and outstanding reviews from critics for its acting, story, and realism. It has since been successful on cable television, VHS, DVD, and Blu-ray.
                    - text: And it deserves this praise that seems to be growing each year. Now twenty years old, the film has not aged a day, and instead seems to be getting better. This is Tim Robbins' best role, and a fine performance from the always wonderful Morgan Freeman.
            - generic [ref=e855]:
              - generic [ref=e856]:
                - heading "'The Shawshank Redemption' Without Morgan Freeman?" [level=2] [ref=e857]
                - emphasis [ref=e858]:
                  - link "The Shawshank Redemption" [ref=e859] [cursor=pointer]:
                    - /url: /title/tt0111161/?ref_=tt_eds_center-3_lk
                - text: has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?
                - link "Who almost starred?" [ref=e860] [cursor=pointer]:
                  - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_c_vd_cc_shs_cta
              - group [ref=e862]:
                - group [ref=e863]:
                  - generic [ref=e864]:
                    - img "Editorial Image"
                  - link "2:25" [ref=e865] [cursor=pointer]:
                    - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_vd_cc_shs_i
                    - generic [ref=e870]: 2:25
            - generic [ref=e873]:
              - generic [ref=e875]:
                - heading "More like this" [level=3] [ref=e877]:
                  - generic [ref=e878]: More like this
                - link "More information" [ref=e880] [cursor=pointer]:
                  - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
              - group [ref=e883]:
                - generic [ref=e884]:
                  - group [ref=e885]:
                    - group [ref=e886]:
                      - generic [ref=e887]:
                        - img "The Godfather"
                      - button "Add to Watchlist" [ref=e888] [cursor=pointer]
                      - link "View title page for The Godfather" [ref=e893] [cursor=pointer]:
                        - /url: /title/tt0068646/?ref_=tt_mlt_i_1
                    - generic [ref=e895]:
                      - generic [ref=e898]: "9.2"
                      - button "Rate The Godfather" [ref=e899] [cursor=pointer]
                    - link "View title page for The Godfather" [ref=e902] [cursor=pointer]:
                      - /url: /title/tt0068646/?ref_=tt_mlt_t_1
                      - text: The Godfather
                    - button "More about this" [ref=e907] [cursor=pointer]
                  - group [ref=e910]:
                    - group [ref=e911]:
                      - generic [ref=e912]:
                        - img "The Dark Knight"
                      - button "Add to Watchlist" [ref=e913] [cursor=pointer]
                      - link "View title page for The Dark Knight" [ref=e918] [cursor=pointer]:
                        - /url: /title/tt0468569/?ref_=tt_mlt_i_2
                    - generic [ref=e920]:
                      - generic [ref=e923]: "9.1"
                      - button "Rate The Dark Knight" [ref=e924] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e927] [cursor=pointer]:
                      - /url: /title/tt0468569/?ref_=tt_mlt_t_2
                      - text: The Dark Knight
                    - button "More about this" [ref=e932] [cursor=pointer]
                  - group [ref=e935]:
                    - group [ref=e936]:
                      - generic [ref=e937]:
                        - img "Forrest Gump"
                      - button "Add to Watchlist" [ref=e938] [cursor=pointer]
                      - link "View title page for Forrest Gump" [ref=e943] [cursor=pointer]:
                        - /url: /title/tt0109830/?ref_=tt_mlt_i_3
                    - generic [ref=e945]:
                      - generic [ref=e948]: "8.8"
                      - button "Rate Forrest Gump" [ref=e949] [cursor=pointer]
                    - link "View title page for Forrest Gump" [ref=e952] [cursor=pointer]:
                      - /url: /title/tt0109830/?ref_=tt_mlt_t_3
                      - text: Forrest Gump
                    - button "More about this" [ref=e957] [cursor=pointer]
                  - group [ref=e960]:
                    - group [ref=e961]:
                      - generic [ref=e962]:
                        - img "Fight Club"
                      - button "Add to Watchlist" [ref=e963] [cursor=pointer]
                      - link "View title page for Fight Club" [ref=e968] [cursor=pointer]:
                        - /url: /title/tt0137523/?ref_=tt_mlt_i_4
                    - generic [ref=e970]:
                      - generic [ref=e973]: "8.8"
                      - button "Rate Fight Club" [ref=e974] [cursor=pointer]
                    - link "View title page for Fight Club" [ref=e977] [cursor=pointer]:
                      - /url: /title/tt0137523/?ref_=tt_mlt_t_4
                      - text: Fight Club
                    - button "More about this" [ref=e982] [cursor=pointer]
                  - group [ref=e985]:
                    - group [ref=e986]:
                      - generic [ref=e987]:
                        - img "Pulp Fiction"
                      - button "Add to Watchlist" [ref=e988] [cursor=pointer]
                      - link "View title page for Pulp Fiction" [ref=e993] [cursor=pointer]:
                        - /url: /title/tt0110912/?ref_=tt_mlt_i_5
                    - generic [ref=e995]:
                      - generic [ref=e998]: "8.8"
                      - button "Rate Pulp Fiction" [ref=e999] [cursor=pointer]
                    - link "View title page for Pulp Fiction" [ref=e1002] [cursor=pointer]:
                      - /url: /title/tt0110912/?ref_=tt_mlt_t_5
                      - text: Pulp Fiction
                    - button "More about this" [ref=e1007] [cursor=pointer]
                  - group [ref=e1010]:
                    - group [ref=e1011]:
                      - generic [ref=e1012]:
                        - img "Interstellar"
                      - button "Add to Watchlist" [ref=e1013] [cursor=pointer]
                      - link "View title page for Interstellar" [ref=e1018] [cursor=pointer]:
                        - /url: /title/tt0816692/?ref_=tt_mlt_i_6
                    - generic [ref=e1020]:
                      - generic [ref=e1023]: "8.7"
                      - button "Rate Interstellar" [ref=e1024] [cursor=pointer]
                    - link "View title page for Interstellar" [ref=e1027] [cursor=pointer]:
                      - /url: /title/tt0816692/?ref_=tt_mlt_t_6
                      - text: Interstellar
                    - button "More about this" [ref=e1032] [cursor=pointer]
                  - group [ref=e1035]:
                    - group [ref=e1036]:
                      - generic [ref=e1037]:
                        - img "Seven"
                      - button "Add to Watchlist" [ref=e1038] [cursor=pointer]
                      - link "View title page for Seven" [ref=e1043] [cursor=pointer]:
                        - /url: /title/tt0114369/?ref_=tt_mlt_i_7
                    - generic [ref=e1045]:
                      - generic [ref=e1048]: "8.6"
                      - button "Rate Seven" [ref=e1049] [cursor=pointer]
                    - link "View title page for Seven" [ref=e1052] [cursor=pointer]:
                      - /url: /title/tt0114369/?ref_=tt_mlt_t_7
                      - text: Seven
                    - button "More about this" [ref=e1057] [cursor=pointer]
                  - group [ref=e1060]:
                    - group [ref=e1061]:
                      - generic [ref=e1062]:
                        - img "Inception"
                      - button "Add to Watchlist" [ref=e1063] [cursor=pointer]
                      - link "View title page for Inception" [ref=e1068] [cursor=pointer]:
                        - /url: /title/tt1375666/?ref_=tt_mlt_i_8
                    - generic [ref=e1070]:
                      - generic [ref=e1073]: "8.8"
                      - button "Rate Inception" [ref=e1074] [cursor=pointer]
                    - link "View title page for Inception" [ref=e1077] [cursor=pointer]:
                      - /url: /title/tt1375666/?ref_=tt_mlt_t_8
                      - text: Inception
                    - button "More about this" [ref=e1082] [cursor=pointer]
                  - group [ref=e1085]:
                    - group [ref=e1086]:
                      - generic [ref=e1087]:
                        - img "The Green Mile"
                      - button "Add to Watchlist" [ref=e1088] [cursor=pointer]
                      - link "View title page for The Green Mile" [ref=e1093] [cursor=pointer]:
                        - /url: /title/tt0120689/?ref_=tt_mlt_i_9
                    - generic [ref=e1095]:
                      - generic [ref=e1098]: "8.6"
                      - button "Rate The Green Mile" [ref=e1099] [cursor=pointer]
                    - link "View title page for The Green Mile" [ref=e1102] [cursor=pointer]:
                      - /url: /title/tt0120689/?ref_=tt_mlt_t_9
                      - text: The Green Mile
                    - button "More about this" [ref=e1107] [cursor=pointer]
                  - group [ref=e1110]:
                    - group [ref=e1111]:
                      - generic [ref=e1112]:
                        - img "Schindler's List"
                      - button "Add to Watchlist" [ref=e1113] [cursor=pointer]
                      - link "View title page for Schindler's List" [ref=e1118] [cursor=pointer]:
                        - /url: /title/tt0108052/?ref_=tt_mlt_i_10
                    - generic [ref=e1120]:
                      - generic [ref=e1123]: "9.0"
                      - button "Rate Schindler's List" [ref=e1124] [cursor=pointer]
                    - link "View title page for Schindler's List" [ref=e1127] [cursor=pointer]:
                      - /url: /title/tt0108052/?ref_=tt_mlt_t_10
                      - text: Schindler's List
                    - button "More about this" [ref=e1132] [cursor=pointer]
                  - group [ref=e1135]:
                    - group [ref=e1136]:
                      - generic [ref=e1137]:
                        - img "The Godfather Part II"
                      - button "Add to Watchlist" [ref=e1138] [cursor=pointer]
                      - link "View title page for The Godfather Part II" [ref=e1143] [cursor=pointer]:
                        - /url: /title/tt0071562/?ref_=tt_mlt_i_11
                    - generic [ref=e1145]:
                      - generic [ref=e1148]: "9.0"
                      - button "Rate The Godfather Part II" [ref=e1149] [cursor=pointer]
                    - link "View title page for The Godfather Part II" [ref=e1152] [cursor=pointer]:
                      - /url: /title/tt0071562/?ref_=tt_mlt_t_11
                      - text: The Godfather Part II
                    - button "More about this" [ref=e1157] [cursor=pointer]
                  - group [ref=e1160]:
                    - group [ref=e1161]:
                      - generic [ref=e1162]:
                        - img "Saving Private Ryan"
                      - button "Add to Watchlist" [ref=e1163] [cursor=pointer]
                      - link "View title page for Saving Private Ryan" [ref=e1168] [cursor=pointer]:
                        - /url: /title/tt0120815/?ref_=tt_mlt_i_12
                    - generic [ref=e1170]:
                      - generic [ref=e1173]: "8.6"
                      - button "Rate Saving Private Ryan" [ref=e1174] [cursor=pointer]
                    - link "View title page for Saving Private Ryan" [ref=e1177] [cursor=pointer]:
                      - /url: /title/tt0120815/?ref_=tt_mlt_t_12
                      - text: Saving Private Ryan
                    - button "More about this" [ref=e1182] [cursor=pointer]
            - generic [ref=e1186]:
              - link "Related interests" [ref=e1188] [cursor=pointer]:
                - /url: /interest/all/?ref_=tt_rin_sm
                - heading "Related interests" [level=3] [ref=e1189]:
                  - generic [ref=e1190]: Related interests
              - group [ref=e1192]:
                - generic [ref=e1193]:
                  - generic [ref=e1194]:
                    - group [ref=e1195]:
                      - generic [ref=e1196]:
                        - img "Orson Welles in Citizen Kane (1941)"
                      - button "Add Epic to your interests" [ref=e1197] [cursor=pointer]
                      - link "Epic" [ref=e1199] [cursor=pointer]:
                        - /url: /interest/in0000077/?ref_=tt_rin_in_i_1
                    - link "Epic" [ref=e1201] [cursor=pointer]:
                      - /url: /interest/in0000077/?ref_=tt_rin_in_t_1
                      - generic [ref=e1202]: Epic
                  - generic [ref=e1203]:
                    - group [ref=e1204]:
                      - generic [ref=e1205]:
                        - img "Emma Watson, Saoirse Ronan, Florence Pugh, and Eliza Scanlen in Little Women (2019)"
                      - button "Add Period Drama to your interests" [ref=e1206] [cursor=pointer]
                      - link "Period Drama" [ref=e1208] [cursor=pointer]:
                        - /url: /interest/in0000083/?ref_=tt_rin_in_i_2
                    - link "Period Drama" [ref=e1210] [cursor=pointer]:
                      - /url: /interest/in0000083/?ref_=tt_rin_in_t_2
                      - generic [ref=e1211]: Period Drama
                  - generic [ref=e1212]:
                    - group [ref=e1213]:
                      - generic [ref=e1214]:
                        - img "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)"
                      - button "Add Prison Drama to your interests" [ref=e1215] [cursor=pointer]
                      - link "Prison Drama" [ref=e1217] [cursor=pointer]:
                        - /url: /interest/in0000085/?ref_=tt_rin_in_i_3
                    - link "Prison Drama" [ref=e1219] [cursor=pointer]:
                      - /url: /interest/in0000085/?ref_=tt_rin_in_t_3
                      - generic [ref=e1220]: Prison Drama
                  - generic [ref=e1221]:
                    - group [ref=e1222]:
                      - generic [ref=e1223]:
                        - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
                      - button "Add Psychological Drama to your interests" [ref=e1224] [cursor=pointer]
                      - link "Psychological Drama" [ref=e1226] [cursor=pointer]:
                        - /url: /interest/in0000086/?ref_=tt_rin_in_i_4
                    - link "Psychological Drama" [ref=e1228] [cursor=pointer]:
                      - /url: /interest/in0000086/?ref_=tt_rin_in_t_4
                      - generic [ref=e1229]: Psychological Drama
                  - generic [ref=e1230]:
                    - group [ref=e1231]:
                      - generic [ref=e1232]:
                        - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
                      - button "Add Drama to your interests" [ref=e1233] [cursor=pointer]
                      - link "Drama" [ref=e1235] [cursor=pointer]:
                        - /url: /interest/in0000076/?ref_=tt_rin_in_i_5
                    - link "Drama" [ref=e1237] [cursor=pointer]:
                      - /url: /interest/in0000076/?ref_=tt_rin_in_t_5
                      - generic [ref=e1238]: Drama
            - generic [ref=e1243]:
              - link "Storyline" [ref=e1244] [cursor=pointer]:
                - /url: "#storyline"
                - heading "Storyline" [level=3] [ref=e1245]:
                  - generic [ref=e1246]: Storyline
              - 'button "Storyline: edit" [ref=e1250] [cursor=pointer]':
                - generic [ref=e1253]: Edit
            - generic [ref=e1255]:
              - generic [ref=e1257]:
                - heading "Did you know" [level=3] [ref=e1259]:
                  - generic [ref=e1260]: Did you know
                - 'button "Did you know: edit" [ref=e1262] [cursor=pointer]':
                  - generic [ref=e1265]: Edit
              - generic [ref=e1266]:
                - link "See more" [ref=e1267] [cursor=pointer]:
                  - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
                  - text: Trivia
                - generic [ref=e1272] [cursor=pointer]:
                  - text: Andy and Red's opening chat in the prison yard, in which Red is throwing a baseball, took nine hours to shoot because director
                  - link "Frank Darabont" [ref=e1273]:
                    - /url: /name/nm0001104/?ref_=dyk_trv
                  - text: insisted on many takes of the scene before he was satisfied.
                  - link "Morgan Freeman" [ref=e1274]:
                    - /url: /name/nm0000151/?ref_=dyk_trv
                  - text: threw the baseball for the entire nine hours without a word of complaint. He showed up for work the next day with his left arm in a sling.
                - link "See more" [ref=e1275] [cursor=pointer]:
                  - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
              - generic [ref=e1278]:
                - link "See more" [ref=e1279] [cursor=pointer]:
                  - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
                  - text: Goofs
                - generic [ref=e1284] [cursor=pointer]:
                  - text: Circa 1963, Heywood is shown listening to the record "24 of
                  - link "Hank Williams" [ref=e1285]:
                    - /url: /name/nm0930729/?ref_=dyk_gf
                  - text: "' Greatest Hits\", released in 1970."
                - link "See more" [ref=e1286] [cursor=pointer]:
                  - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
              - generic [ref=e1289]:
                - link "See more" [ref=e1290] [cursor=pointer]:
                  - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
                  - text: Quotes
                - list [ref=e1295] [cursor=pointer]:
                  - listitem [ref=e1296]:
                    - link "Andy Dufresne" [ref=e1297]:
                      - /url: /name/nm0000209/?ref_=tt_dyk_qu
                    - text: ": ["
                    - emphasis [ref=e1298]: to Red
                    - text: "] I guess it comes down to a simple choice, really. Get busy living, or get busy dying."
                - link "See more" [ref=e1299] [cursor=pointer]:
                  - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
              - generic [ref=e1302]:
                - link "See more" [ref=e1303] [cursor=pointer]:
                  - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
                  - text: Crazy credits
                - generic [ref=e1308] [cursor=pointer]: The man who cried and was beaten when Andy first arrived is listed and credited as "Fat Ass" -- the other inmates' nickname for him.
                - link "See more" [ref=e1309] [cursor=pointer]:
                  - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
              - generic [ref=e1312]:
                - link "See more" [ref=e1313] [cursor=pointer]:
                  - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
                  - text: Alternate versions
                - generic [ref=e1315] [cursor=pointer]:
                  - button "See more" [ref=e1316]
                  - generic [ref=e1321]: This film was produced independently by Castle Rock Entertainment, but distributed by Columbia Pictures, which placed their logo at the beginning of the film. After the first video release, Castle Rock began to use Warner Bros. as their distributor. This film was then later re-issued on video and DVD by Warner Bros., which replaced the Columbia Pictures logo with their own. (The 1999 WB DVD uses no studio logo before Castle Rock [A Turner Company], and has no Columbia line-art logo at the end, just 10 seconds of blank screen as the music finishes. The post-2004 prints start with the 2003 WB logo and an updated Castle Rock logo [A TimeWarner Company], and have the Columbia line-art logo in the crawl at the end followed by a quick, still, 2003 WB logo. See also The American President.)
                - link "See more" [ref=e1322] [cursor=pointer]:
                  - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
              - generic [ref=e1325]:
                - link "See more" [ref=e1326] [cursor=pointer]:
                  - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
                  - text: Connections
                - generic [ref=e1329] [cursor=pointer]:
                  - text: Featured in
                  - 'link "At the Movies with Ebert & Roeper: Why Gump? Why Now?" [ref=e1330]':
                    - /url: /title/tt1936736/?ref_=tt_dyk_cnn
                  - text: (1994)
                - link "See more" [ref=e1331] [cursor=pointer]:
                  - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
              - generic [ref=e1334]:
                - link "See more" [ref=e1335] [cursor=pointer]:
                  - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
                  - text: Soundtracks
                - generic [ref=e1338] [cursor=pointer]:
                  - text: If I Didn't Care
                  - generic [ref=e1339]:
                    - text: by
                    - link "Jack Lawrence" [ref=e1340]:
                      - /url: /name/nm0492805/?ref_=dyk_snd
                  - generic [ref=e1341]:
                    - text: Performed by
                    - link "The Ink Spots" [ref=e1342]:
                      - /url: /name/nm1311414/?ref_=dyk_snd
                  - generic [ref=e1343]: Courtesy of MCA Records
                - link "See more" [ref=e1344] [cursor=pointer]:
                  - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
            - generic [ref=e1348]:
              - generic [ref=e1349]:
                - link "Top picks" [ref=e1350] [cursor=pointer]:
                  - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
                  - heading "Top picks" [level=3] [ref=e1351]:
                    - generic [ref=e1352]: Top picks
                - generic [ref=e1354]: Sign in to rate and Watchlist for personalized recommendations
              - link "Sign in" [ref=e1355] [cursor=pointer]:
                - /url: /registration/signin?ref_=tt_tpks_signin
                - generic [ref=e1356]: Sign in
            - generic [ref=e1358]:
              - link "FAQ 47" [ref=e1360] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_sm
                - heading "FAQ 47" [level=3] [ref=e1361]:
                  - generic [ref=e1362]: FAQ
                  - generic [ref=e1363]: "47"
              - generic [ref=e1365]:
                - generic [ref=e1366] [cursor=pointer]:
                  - link "How long is The Shawshank Redemption?" [ref=e1368]:
                    - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                  - generic [ref=e1369]: Powered by Alexa
                - link "See the answer" [ref=e1371] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                - link "Does the novella explain why Fat Ass is in prison? He seems too much like a cry baby to have committed any crimes." [ref=e1376] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
                - link "See the answer" [ref=e1377] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
                - link "Why does Andy talk in code to Red at the movie about getting Rita Hayworth since they have already done business before and Andy asked for the rock hammer in the same way?" [ref=e1382] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
                - link "See the answer" [ref=e1383] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
                - link "Why is Captain Hadley so cruel?" [ref=e1388] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
                - link "See the answer" [ref=e1389] [cursor=pointer]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
            - generic [ref=e1392]:
              - generic [ref=e1394]:
                - heading "Details" [level=3] [ref=e1396]:
                  - generic [ref=e1397]: Details
                - 'button "Details: edit" [ref=e1399] [cursor=pointer]':
                  - generic [ref=e1402]: Edit
              - generic [ref=e1403]:
                - link "See more" [ref=e1404] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                  - text: Release date
                - link "October 14, 1994 (United States)" [ref=e1406] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - link "See more" [ref=e1407] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - generic [ref=e1410]: Country of origin
                - link "United States" [ref=e1412] [cursor=pointer]:
                  - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
                - generic "See more" [ref=e1413]: Official sites
                - generic [ref=e1414]:
                  - link "Official Facebook" [ref=e1415] [cursor=pointer]:
                    - /url: https://www.facebook.com/shawshankredemptionfilm/
                    - text: Official Facebook
                  - link "Warner Bros. (United States)" [ref=e1417] [cursor=pointer]:
                    - /url: https://www.warnerbros.com/movies/shawshank-redemption
                    - text: Warner Bros. (United States)
                - generic [ref=e1419]: Language
                - link "English" [ref=e1421] [cursor=pointer]:
                  - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
                - link "See more" [ref=e1422] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                  - text: Also known as
                - generic [ref=e1423] [cursor=pointer]: Sueño de fuga
                - link "See more" [ref=e1424] [cursor=pointer]:
                  - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                - link "See more" [ref=e1427] [cursor=pointer]:
                  - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                  - text: Filming locations
                - generic [ref=e1428] [cursor=pointer]:
                  - link "Butler, Ohio, USA" [ref=e1429]:
                    - /url: /search/title/?locations=Butler%40%40%40%20Ohio%40%40%40%20USA&ref_=tt_dt_loc
                  - text: (Exterior, rural town of "Buxton" where "Red" journeys to; shot of bus leaving with "Red" near end of film)
                - link "See more" [ref=e1430] [cursor=pointer]:
                  - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                - link "See more" [ref=e1433] [cursor=pointer]:
                  - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                  - text: Production company
                - link "Castle Rock Entertainment" [ref=e1435] [cursor=pointer]:
                  - /url: /company/co0040620/?ref_=tt_dt_cmpy_1
                - link "See more" [ref=e1436] [cursor=pointer]:
                  - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                - link "See more" [ref=e1439] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
                  - text: See more company credits at IMDbPro
                - link "See more" [ref=e1440] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
            - generic [ref=e1442]:
              - generic [ref=e1444]:
                - heading "Box office" [level=3] [ref=e1446]:
                  - generic [ref=e1447]: Box office
                - 'button "Box office: edit" [ref=e1449] [cursor=pointer]':
                  - generic [ref=e1452]: Edit
              - generic [ref=e1453]:
                - generic [ref=e1454]: Budget
                - generic [ref=e1455]: $25,000,000 (estimated)
                - generic [ref=e1456]: Gross US & Canada
                - generic [ref=e1457]: $28,767,189
                - generic [ref=e1458]: Opening weekend US & Canada
                - generic [ref=e1459]: $727,327 Sep 25, 1994
                - generic [ref=e1460]: Gross worldwide
                - generic [ref=e1461]: $29,420,884
                - generic [ref=e1462]:
                  - link "Go to IMDbPro" [ref=e1463] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                    - img [ref=e1464]
                  - link "See detailed box office info on IMDbPro" [ref=e1474] [cursor=pointer]:
                    - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                    - text: See detailed box office info on IMDbPro
            - generic [ref=e1476]:
              - generic [ref=e1478]:
                - link "Tech specs" [ref=e1479] [cursor=pointer]:
                  - /url: /title/tt0111161/technical/?ref_=tt_spec_sm
                  - heading "Tech specs" [level=3] [ref=e1480]:
                    - generic [ref=e1481]: Tech specs
                - 'button "Tech specs: edit" [ref=e1484] [cursor=pointer]':
                  - generic [ref=e1487]: Edit
              - generic [ref=e1488]:
                - generic [ref=e1489]: Runtime
                - generic [ref=e1490]: 2h 22m(142 min)
                - generic [ref=e1491]: Color
                - link "Color" [ref=e1493] [cursor=pointer]:
                  - /url: /search/title/?colors=color&ref_=tt_spec_att
                - generic [ref=e1494]: Sound mix
                - link "Dolby Digital" [ref=e1496] [cursor=pointer]:
                  - /url: /search/title/?sound_mixes=dolby_digital&ref_=tt_spec_att
                - generic [ref=e1497]: Aspect ratio
                - generic [ref=e1498]: "1.85 : 1"
            - generic [ref=e1502]:
              - generic [ref=e1503]:
                - link "Contribute to this page" [ref=e1504] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                  - heading "Contribute to this page" [level=3] [ref=e1505]:
                    - generic [ref=e1506]: Contribute to this page
                - generic [ref=e1508]: Suggest an edit or add missing content
              - generic [ref=e1509]:
                - link "Go to Learn more about contributing" [ref=e1510] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
                  - text: Learn more about contributing
                - link "Go to Learn more about contributing" [ref=e1511] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
              - link "Edit page" [ref=e1515] [cursor=pointer]:
                - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                - generic [ref=e1518]: Edit page
          - generic [ref=e1524]:
            - heading "More to explore" [level=3] [ref=e1527]
            - group [ref=e1531]:
              - group [ref=e1532]:
                - generic [ref=e1533]:
                  - img "Production art"
                - link "List" [ref=e1534] [cursor=pointer]:
                  - /url: /imdbpicks/summer-watch-guide/?ref_=tt_csegswg_elp_i
                  - generic [ref=e1542]: List
              - generic [ref=e1544]:
                - link "Our Summer Watch Guide" [ref=e1545] [cursor=pointer]:
                  - /url: /imdbpicks/summer-watch-guide/?ref_=tt_csegswg_elp_t
                  - generic [ref=e1546]: Our Summer Watch Guide
                - link "Browse the guide" [ref=e1548] [cursor=pointer]:
                  - /url: /imdbpicks/summer-watch-guide/?ref_=tt_c_csegswg_elp_cta
    - generic [ref=e1563]:
      - heading "Recently viewed" [level=3] [ref=e1566]
      - generic [ref=e1568]: You have no recently viewed pages
    - contentinfo [ref=e1573]:
      - link "Sign in for more access" [ref=e1575] [cursor=pointer]:
        - /url: /registration/signin/?u=%2Ftitle%2Ftt0111161%2F&ref_=tt_ftr_reg
        - generic [ref=e1576]: Sign in for more access
      - generic [ref=e1577]:
        - generic [ref=e1578]:
          - generic [ref=e1579]:
            - generic [ref=e1580]: Follow IMDb on social
            - link "TikTok" [ref=e1581] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e1583] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e1586] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e1588] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e1590] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e1592]:
            - generic [ref=e1593]:
              - generic [ref=e1594]: Get the IMDb app
              - generic [ref=e1595]: For Android and iOS
            - group [ref=e1597]:
              - generic [ref=e1598]:
                - img "Get the IMDb app"
              - link "For Android and iOS" [ref=e1599] [cursor=pointer]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e1601]:
          - link "Help" [ref=e1602] [cursor=pointer]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e1604] [cursor=pointer]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e1606] [cursor=pointer]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e1608] [cursor=pointer]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e1610] [cursor=pointer]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e1612]:
          - link "Press Room" [ref=e1613] [cursor=pointer]:
            - /url: /pressroom/?ref_=tt_ftr
          - link "Advertising" [ref=e1614] [cursor=pointer]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e1616] [cursor=pointer]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e1618] [cursor=pointer]:
            - /url: /conditions/?ref_=tt_ftr
          - link "Privacy Policy" [ref=e1619] [cursor=pointer]:
            - /url: /privacy/?ref_=tt_ftr
          - generic [ref=e1620]:
            - link "Your Ads Privacy Choices" [ref=e1621] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=tt_ftr
              - img [ref=e1622]
            - link "Your Ads Privacy Choices" [ref=e1634] [cursor=pointer]:
              - /url: /privacy/redirect/?ref_=tt_ftr
      - img "IMDb, an Amazon company" [ref=e1636]
      - paragraph [ref=e1672]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e1673] [cursor=pointer]:
      - generic [ref=e1676]: Back to top
    - img
    - status
    - img
  - alert [ref=e1677]
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
  23  |   // // 2
  24  |   // test('Showtimes section is available on page or redirect exists', async ({ page }) => {
  25  |   //   await page.goto('https://www.imdb.com/title/tt0111161/');
  26  | 
  27  |   //   const showtimesText = page.locator('text=/showtimes|tickets/i');
  28  | 
  29  |   //   const count = await showtimesText.count();
  30  | 
  31  |   //   expect(count).toBeGreaterThanOrEqual(0); 
  32  |   // });
  33  | 
  34  |   // // 3
  35  |   // test('Showtimes button is clickable', async ({ page }) => {
  36  |   //   const btn = page.getByRole('link', { name: /showtimes/i });
  37  | 
  38  |   //   if (await btn.count() > 0) {
  39  |   //     await btn.first().click();
  40  |   //   }
  41  |   // });
  42  | 
  43  | //   // 4
  44  | //   test('Navigation to showtimes page works', async ({ page }) => {
  45  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  46  | 
  47  | //     if (await btn.count() > 0) {
  48  | //       await btn.first().click();
  49  | //       await page.waitForLoadState('domcontentloaded');
  50  | 
  51  | //       await expect(page).toHaveURL(/showtimes|tickets|cinemas/);
  52  | //     }
  53  | //   });
  54  | 
  55  | //   // 5
  56  | //   test('Showtimes page content loads', async ({ page }) => {
  57  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  58  | 
  59  | //     if (await btn.count() > 0) {
  60  | //       await btn.first().click();
  61  | //       await expect(page.locator('body')).toBeVisible();
  62  | //     }
  63  | //   });
  64  | 
  65  | //   // 6
  66  | //   test('Location prompt appears or handled', async ({ page }) => {
  67  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  68  | 
  69  | //     if (await btn.count() > 0) {
  70  | //       await btn.first().click();
  71  | 
  72  | //       const location = page.locator('text=/location/i');
  73  | //       if (await location.count() > 0) {
  74  | //         await expect(location.first()).toBeVisible();
  75  | //       }
  76  | //     }
  77  | //   });
  78  | 
  79  | //   // 7
  80  | //   test('Cinema listings exist', async ({ page }) => {
  81  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  82  | 
  83  | //     if (await btn.count() > 0) {
  84  | //       await btn.first().click();
  85  | 
  86  | //       const cinemas = page.locator('text=/cinema|theatre|theater/i');
  87  | //       if (await cinemas.count() > 0) {
  88  | //         await expect(cinemas.first()).toBeVisible();
  89  | //       }
  90  | //     }
  91  | //   });
  92  | 
  93  | //   // 8
  94  | //   test('Showtimes are visible', async ({ page }) => {
  95  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  96  | 
  97  | //     if (await btn.count() > 0) {
  98  | //       await btn.first().click();
  99  | 
  100 | //       const times = page.locator('text=/\\d{1,2}:\\d{2}/'); // 10:30, 14:00 format
  101 | //       if (await times.count() > 0) {
  102 | //         await expect(times.first()).toBeVisible();
  103 | //       }
  104 | //     }
  105 | //   });
  106 | 
  107 | //   // 9
  108 | //   test('Ticket links are visible', async ({ page }) => {
  109 | //     const btn = page.getByRole('link', { name: /showtimes/i });
  110 | 
  111 | //     if (await btn.count() > 0) {
  112 | //       await btn.first().click();
  113 | 
  114 | //       const links = page.locator('a[href*="ticket"], a[target="_blank"]');
  115 | //       await expect(links.first()).toBeVisible();
  116 | //     }
  117 | //   });
  118 | 
  119 | //   // 10
  120 | //   test('External ticket redirect works', async ({ page }) => {
```