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
        - status [ref=e30]
      - button "Submit search" [ref=e31] [cursor=pointer]
    - link "Go To IMDb Pro" [ref=e36] [cursor=pointer]:
      - /url: https://pro.imdb.com/login/ap?u=/login/lwa&imdbPageAction=signUp&rf=cons_nb_hm&ref_=cons_nb_hm
      - img [ref=e39]
    - link "Watchlist" [ref=e51] [cursor=pointer]:
      - /url: /list/watchlist/?ref_=tt_nv_urwls_all
      - generic [ref=e53]: Watchlist
    - link "Sign in" [ref=e55] [cursor=pointer]:
      - /url: /registration/signin/?u=&ref_=tt_nv_generic_lgin
      - generic [ref=e56]: Sign in
    - generic "Toggle language selector" [ref=e59] [cursor=pointer]:
      - generic [ref=e61]: EN
    - status
    - status
  - main [ref=e64]:
    - generic [ref=e65]:
      - generic [ref=e75]:
        - generic [ref=e77]:
          - link "Cast & crew" [ref=e78] [cursor=pointer]:
            - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_ql_1
          - link "User reviews" [ref=e79] [cursor=pointer]:
            - /url: /title/tt0111161/reviews/?ref_=tt_ov_ql_2
          - link "Trivia" [ref=e80] [cursor=pointer]:
            - /url: /title/tt0111161/trivia/?ref_=tt_ov_ql_3
          - link "FAQ" [ref=e81] [cursor=pointer]:
            - /url: /title/tt0111161/faq/?ref_=tt_ov_ql_4
          - link "IMDbPro" [ref=e83] [cursor=pointer]:
            - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_ov_hdr&ref_=cons_tt_ov_hdr
          - button "View all topics" [ref=e84] [cursor=pointer]:
            - generic [ref=e86]: All topics
          - button "Share on social media" [ref=e88] [cursor=pointer]
        - generic [ref=e91]:
          - generic [ref=e92]:
            - heading "The Shawshank Redemption" [level=1] [ref=e93]
            - link "1994" [ref=e94] [cursor=pointer]:
              - /url: /title/tt0111161/releaseinfo/?ref_=tt_ov_rdat
            - link "R" [ref=e95] [cursor=pointer]:
              - /url: /title/tt0111161/parentalguide/?ref_=tt_ov_pg#certificates
            - text: 2h 22m
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]: IMDb RATING
              - link "View User Ratings" [ref=e100] [cursor=pointer]:
                - /url: /title/tt0111161/ratings/?ref_=tt_ov_rat
                - generic [ref=e105]:
                  - generic [ref=e106]:
                    - generic [ref=e107]: "9.3"
                    - generic [ref=e108]: /10
                  - generic [ref=e109]: 3.2M
            - generic [ref=e110]:
              - generic [ref=e111]: YOUR RATING
              - button "Rate The Shawshank Redemption" [ref=e112] [cursor=pointer]:
                - generic [ref=e119]: Rate
            - generic [ref=e120]:
              - generic [ref=e121]: POPULARITY
              - link "View Popular Movies" [ref=e122] [cursor=pointer]:
                - /url: /chart/moviemeter/?ref_=tt_ov_pop
                - generic [ref=e127]:
                  - generic [ref=e128]: "37"
                  - generic [ref=e129]: "6"
        - generic [ref=e132]:
          - generic [ref=e133]:
            - group [ref=e135]:
              - img "Tim Robbins in The Shawshank Redemption (1994)" [ref=e137]
              - button "Add to Watchlist" [ref=e138] [cursor=pointer]
              - link "View ’The Shawshank Redemption’ Poster" [ref=e143] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i
            - generic [ref=e145]:
              - button "Video Preview Preference" [ref=e147] [cursor=pointer]
              - group [ref=e149] [cursor=pointer]:
                - img "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." [ref=e151]
                - generic [ref=e159]: Play trailer2:11
            - generic [ref=e163]:
              - link "6 Videos" [ref=e164] [cursor=pointer]:
                - /url: /title/tt0111161/videogallery/?ref_=tt_ov_vi_sm
                - generic [ref=e168]: 6 Videos
              - link "99+ Photos" [ref=e169] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ov_m_sm
                - generic [ref=e174]: 99+ Photos
          - generic [ref=e175]:
            - generic [ref=e177]:
              - generic [ref=e179]:
                - link "Epic" [ref=e180] [cursor=pointer]:
                  - /url: /interest/in0000077/?ref_=tt_ov_in_1
                  - generic [ref=e181]: Epic
                - link "Period Drama" [ref=e182] [cursor=pointer]:
                  - /url: /interest/in0000083/?ref_=tt_ov_in_2
                  - generic [ref=e183]: Period Drama
                - link "Prison Drama" [ref=e184] [cursor=pointer]:
                  - /url: /interest/in0000085/?ref_=tt_ov_in_3
                  - generic [ref=e185]: Prison Drama
                - link "Psychological Drama" [ref=e186] [cursor=pointer]:
                  - /url: /interest/in0000086/?ref_=tt_ov_in_4
                  - generic [ref=e187]: Psychological Drama
                - link "Drama" [ref=e188] [cursor=pointer]:
                  - /url: /interest/in0000076/?ref_=tt_ov_in_5
                  - generic [ref=e189]: Drama
              - paragraph [ref=e190]:
                - generic [ref=e191]: A wrongfully convicted banker forms a close friendship with a hardened convict over a quarter century while retaining his humanity through simple acts of compassion.
              - generic [ref=e192]:
                - generic [ref=e193]: Director
                - link "Frank Darabont" [ref=e195] [cursor=pointer]:
                  - /url: /name/nm0001104/?ref_=tt_ov_1_1
                - generic [ref=e196]: Writers
                - generic [ref=e197]:
                  - link "Stephen King" [ref=e198] [cursor=pointer]:
                    - /url: /name/nm0000175/?ref_=tt_ov_2_1
                  - link "Frank Darabont" [ref=e199] [cursor=pointer]:
                    - /url: /name/nm0001104/?ref_=tt_ov_2_2
                - link "See full cast and crew" [ref=e200] [cursor=pointer]:
                  - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                  - text: Stars
                - generic [ref=e201] [cursor=pointer]:
                  - link "Tim Robbins" [ref=e202]:
                    - /url: /name/nm0000209/?ref_=tt_ov_3_1
                  - link "Morgan Freeman" [ref=e203]:
                    - /url: /name/nm0000151/?ref_=tt_ov_3_2
                  - link "Bob Gunton" [ref=e204]:
                    - /url: /name/nm0348409/?ref_=tt_ov_3_3
                - link "See full cast and crew" [ref=e205] [cursor=pointer]:
                  - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
              - generic [ref=e209]:
                - link "Go to IMDbPro" [ref=e210] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                  - img [ref=e211]
                - link "See production info at IMDbPro" [ref=e221] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                  - text: See production info at IMDbPro
            - generic [ref=e223]:
              - generic [ref=e225]:
                - generic [ref=e226] [cursor=pointer]:
                  - button "Add to Watchlist Added by 1.7M users" [ref=e227]:
                    - generic [ref=e229]:
                      - generic [ref=e230]: Add to Watchlist
                      - generic [ref=e231]: Added by 1.7M users
                  - button "Add title to another list" [ref=e232]
                - button "Loading" [ref=e235] [cursor=pointer]
              - link "11.8K User reviews" [ref=e237] [cursor=pointer]:
                - /url: /title/tt0111161/reviews/?ref_=tt_ov_ururv
                - generic [ref=e238]:
                  - generic [ref=e239]: 11.8K
                  - generic [ref=e240]: User reviews
              - link "154 Critic reviews" [ref=e241] [cursor=pointer]:
                - /url: /title/tt0111161/externalreviews/?ref_=tt_ov_crv
                - generic [ref=e242]:
                  - generic [ref=e243]: "154"
                  - generic [ref=e244]: Critic reviews
              - link "82 Metascore" [ref=e245] [cursor=pointer]:
                - /url: /title/tt0111161/criticreviews/?ref_=tt_ov_msc
                - generic [ref=e246]:
                  - generic [ref=e248]: "82"
                  - generic [ref=e249]: Metascore
      - generic [ref=e251]:
        - generic [ref=e252]:
          - generic [ref=e258]:
            - 'link "Top rated movie #1" [ref=e260] [cursor=pointer]':
              - /url: /chart/top/?ref_=tt_awd
            - link "See more awards and nominations" [ref=e261] [cursor=pointer]:
              - /url: /title/tt0111161/awards/?ref_=tt_awd
              - text: Nominated for 7 Oscars
            - generic [ref=e262] [cursor=pointer]: 21 wins & 43 nominations total
            - link "See more awards and nominations" [ref=e263] [cursor=pointer]:
              - /url: /title/tt0111161/awards/?ref_=tt_awd
          - generic [ref=e270]:
            - link "Videos 6" [ref=e272] [cursor=pointer]:
              - /url: /title/tt0111161/videogallery/?ref_=tt_vids_sm
              - heading "Videos 6" [level=3] [ref=e273]:
                - text: Videos
                - generic [ref=e274]: "6"
            - generic [ref=e277]:
              - group [ref=e278]:
                - group [ref=e279]:
                  - generic [ref=e280]:
                    - img "Official Trailer"
                  - link "TrailerOfficial Trailer" [ref=e281] [cursor=pointer]:
                    - /url: /video/vi3877612057/?ref_=tt_vids_vi_1
                    - generic [ref=e286]: Trailer 2:11
                - link "TrailerOfficial Trailer" [ref=e289] [cursor=pointer]:
                  - /url: /video/vi3877612057/?ref_=tt_vids_vi_t_1
                  - generic [ref=e290]: Official Trailer
              - group [ref=e293]:
                - group [ref=e294]:
                  - generic [ref=e295]:
                    - img "Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films"
                  - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e296] [cursor=pointer]:
                    - /url: /video/vi976077081/?ref_=tt_vids_vi_2
                    - generic [ref=e301]: Clip 8:43
                - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e304] [cursor=pointer]:
                  - /url: /video/vi976077081/?ref_=tt_vids_vi_t_2
                  - generic [ref=e305]: Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films
            - group [ref=e309]:
              - generic [ref=e310]:
                - group [ref=e311]:
                  - group [ref=e312]:
                    - generic [ref=e313]:
                      - img "'The Shawshank Redemption' | Anniversary Mashup"
                    - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e314] [cursor=pointer]:
                      - /url: /video/vi2425798425/?ref_=tt_vids_vi_3
                      - generic [ref=e319]: Clip 1:01
                  - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e322] [cursor=pointer]:
                    - /url: /video/vi2425798425/?ref_=tt_vids_vi_t_3
                    - generic [ref=e323]: "'The Shawshank Redemption' | Anniversary Mashup"
                - group [ref=e326]:
                  - group [ref=e327]:
                    - generic [ref=e328]:
                      - img "What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson"
                    - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e329] [cursor=pointer]:
                      - /url: /video/vi2910632473/?ref_=tt_vids_vi_4
                      - generic [ref=e334]: Video 1:55
                  - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e337] [cursor=pointer]:
                    - /url: /video/vi2910632473/?ref_=tt_vids_vi_t_4
                    - generic [ref=e338]: What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson
                - group [ref=e341]:
                  - group [ref=e342]:
                    - generic [ref=e343]:
                      - img "Who Else Almost Starred In 'The Shawshank Redemption?'"
                    - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e344] [cursor=pointer]:
                      - /url: /video/vi2032974361/?ref_=tt_vids_vi_5
                      - generic [ref=e349]: Video 2:25
                  - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e352] [cursor=pointer]:
                    - /url: /video/vi2032974361/?ref_=tt_vids_vi_t_5
                    - generic [ref=e353]: Who Else Almost Starred In 'The Shawshank Redemption?'
                - group [ref=e356]:
                  - group [ref=e357]:
                    - generic [ref=e358]:
                      - img "Roles That Tom Cruise Turned Down"
                    - link "VideoRoles That Tom Cruise Turned Down" [ref=e359] [cursor=pointer]:
                      - /url: /video/vi1874967321/?ref_=tt_vids_vi_6
                      - generic [ref=e364]: Video 2:22
                  - link "VideoRoles That Tom Cruise Turned Down" [ref=e367] [cursor=pointer]:
                    - /url: /video/vi1874967321/?ref_=tt_vids_vi_t_6
                    - generic [ref=e368]: Roles That Tom Cruise Turned Down
          - generic [ref=e371]:
            - generic [ref=e373]:
              - link "Photos 565" [ref=e374] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_sm
                - heading "Photos 565" [level=3] [ref=e375]:
                  - text: Photos
                  - generic [ref=e376]: "565"
              - button "Add photo" [ref=e379] [cursor=pointer]:
                - generic [ref=e381]: Add photo
            - generic [ref=e382]:
              - generic [ref=e383]:
                - link "View Poster" [ref=e384] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_1
                  - img "View Poster" [ref=e386]
                - link "View Poster" [ref=e387] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2954723328/?ref_=tt_ph_2
                  - img "View Poster" [ref=e389]
                - link "View Poster" [ref=e390] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3206381568/?ref_=tt_ph_3
                  - img "View Poster" [ref=e392]
              - generic [ref=e393]:
                - link "View Poster" [ref=e394] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3172827136/?ref_=tt_ph_1_1
                  - img "View Poster" [ref=e396]
                - link "View Poster" [ref=e397] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3156049920/?ref_=tt_ph_1_2
                  - img "View Poster" [ref=e399]
                - link "View Poster" [ref=e400] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3139272704/?ref_=tt_ph_1_3
                  - img "View Poster" [ref=e402]
                - link "+ 559 View Poster" [ref=e403] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3122495488/?ref_=tt_ph_more
                  - generic [ref=e404]: + 559
                  - img "View Poster" [ref=e406]
          - generic [ref=e411]:
            - generic [ref=e413]:
              - link "Top Cast 74" [ref=e414] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                - heading "Top Cast 74" [level=3] [ref=e415]:
                  - generic [ref=e416]: Top Cast
                  - generic [ref=e417]: "74"
              - 'button "Top Cast: edit" [ref=e420] [cursor=pointer]':
                - generic [ref=e423]: Edit
            - group [ref=e424]:
              - generic [ref=e425]:
                - generic [ref=e426]:
                  - group [ref=e428]:
                    - generic [ref=e429]:
                      - img "Tim Robbins"
                    - button "Add Tim Robbins to favorite people" [ref=e430] [cursor=pointer]
                    - link "Go to Tim Robbins" [ref=e432] [cursor=pointer]:
                      - /url: /name/nm0000209/?ref_=tt_cst_i_1
                  - generic [ref=e434]:
                    - link "Tim Robbins" [ref=e435] [cursor=pointer]:
                      - /url: /name/nm0000209/?ref_=tt_cst_t_1
                    - link "Andy Dufresne" [ref=e437] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000209/?ref_=tt_cst_c_1
                - generic [ref=e438]:
                  - group [ref=e440]:
                    - generic [ref=e441]:
                      - img "Morgan Freeman"
                    - button "Add Morgan Freeman to favorite people" [ref=e442] [cursor=pointer]
                    - link "Go to Morgan Freeman" [ref=e444] [cursor=pointer]:
                      - /url: /name/nm0000151/?ref_=tt_cst_i_2
                  - generic [ref=e446]:
                    - link "Morgan Freeman" [ref=e447] [cursor=pointer]:
                      - /url: /name/nm0000151/?ref_=tt_cst_t_2
                    - link "Ellis Boyd 'Red' Redding" [ref=e449] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000151/?ref_=tt_cst_c_2
                - generic [ref=e450]:
                  - group [ref=e452]:
                    - generic [ref=e453]:
                      - img "Bob Gunton"
                    - button "Add Bob Gunton to favorite people" [ref=e454] [cursor=pointer]
                    - link "Go to Bob Gunton" [ref=e456] [cursor=pointer]:
                      - /url: /name/nm0348409/?ref_=tt_cst_i_3
                  - generic [ref=e458]:
                    - link "Bob Gunton" [ref=e459] [cursor=pointer]:
                      - /url: /name/nm0348409/?ref_=tt_cst_t_3
                    - link "Warden Norton" [ref=e461] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0348409/?ref_=tt_cst_c_3
                - generic [ref=e462]:
                  - group [ref=e464]:
                    - generic [ref=e465]:
                      - img "William Sadler"
                    - button "Add William Sadler to favorite people" [ref=e466] [cursor=pointer]
                    - link "Go to William Sadler" [ref=e468] [cursor=pointer]:
                      - /url: /name/nm0006669/?ref_=tt_cst_i_4
                  - generic [ref=e470]:
                    - link "William Sadler" [ref=e471] [cursor=pointer]:
                      - /url: /name/nm0006669/?ref_=tt_cst_t_4
                    - link "Heywood" [ref=e473] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0006669/?ref_=tt_cst_c_4
                - generic [ref=e474]:
                  - group [ref=e476]:
                    - generic [ref=e477]:
                      - img "Clancy Brown"
                    - button "Add Clancy Brown to favorite people" [ref=e478] [cursor=pointer]
                    - link "Go to Clancy Brown" [ref=e480] [cursor=pointer]:
                      - /url: /name/nm0000317/?ref_=tt_cst_i_5
                  - generic [ref=e482]:
                    - link "Clancy Brown" [ref=e483] [cursor=pointer]:
                      - /url: /name/nm0000317/?ref_=tt_cst_t_5
                    - link "Captain Hadley" [ref=e485] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000317/?ref_=tt_cst_c_5
                - generic [ref=e486]:
                  - group [ref=e488]:
                    - generic [ref=e489]:
                      - img "Gil Bellows"
                    - button "Add Gil Bellows to favorite people" [ref=e490] [cursor=pointer]
                    - link "Go to Gil Bellows" [ref=e492] [cursor=pointer]:
                      - /url: /name/nm0004743/?ref_=tt_cst_i_6
                  - generic [ref=e494]:
                    - link "Gil Bellows" [ref=e495] [cursor=pointer]:
                      - /url: /name/nm0004743/?ref_=tt_cst_t_6
                    - link "Tommy" [ref=e497] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0004743/?ref_=tt_cst_c_6
                - generic [ref=e498]:
                  - group [ref=e500]:
                    - generic [ref=e501]:
                      - img "Mark Rolston"
                    - button "Add Mark Rolston to favorite people" [ref=e502] [cursor=pointer]
                    - link "Go to Mark Rolston" [ref=e504] [cursor=pointer]:
                      - /url: /name/nm0001679/?ref_=tt_cst_i_7
                  - generic [ref=e506]:
                    - link "Mark Rolston" [ref=e507] [cursor=pointer]:
                      - /url: /name/nm0001679/?ref_=tt_cst_t_7
                    - link "Bogs Diamond" [ref=e509] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0001679/?ref_=tt_cst_c_7
                - generic [ref=e510]:
                  - group [ref=e512]:
                    - generic [ref=e513]:
                      - img "James Whitmore"
                    - button "Add James Whitmore to favorite people" [ref=e514] [cursor=pointer]
                    - link "Go to James Whitmore" [ref=e516] [cursor=pointer]:
                      - /url: /name/nm0926235/?ref_=tt_cst_i_8
                  - generic [ref=e518]:
                    - link "James Whitmore" [ref=e519] [cursor=pointer]:
                      - /url: /name/nm0926235/?ref_=tt_cst_t_8
                    - link "Brooks Hatlen" [ref=e521] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0926235/?ref_=tt_cst_c_8
                - generic [ref=e522]:
                  - group [ref=e524]:
                    - generic [ref=e525]:
                      - img "Jeffrey DeMunn"
                    - button "Add Jeffrey DeMunn to favorite people" [ref=e526] [cursor=pointer]
                    - link "Go to Jeffrey DeMunn" [ref=e528] [cursor=pointer]:
                      - /url: /name/nm0218810/?ref_=tt_cst_i_9
                  - generic [ref=e530]:
                    - link "Jeffrey DeMunn" [ref=e531] [cursor=pointer]:
                      - /url: /name/nm0218810/?ref_=tt_cst_t_9
                    - link "1946 D.A." [ref=e533] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0218810/?ref_=tt_cst_c_9
                - generic [ref=e534]:
                  - group [ref=e536]:
                    - generic [ref=e537]:
                      - img "Larry Brandenburg"
                    - button "Add Larry Brandenburg to favorite people" [ref=e538] [cursor=pointer]
                    - link "Go to Larry Brandenburg" [ref=e540] [cursor=pointer]:
                      - /url: /name/nm0104594/?ref_=tt_cst_i_10
                  - generic [ref=e542]:
                    - link "Larry Brandenburg" [ref=e543] [cursor=pointer]:
                      - /url: /name/nm0104594/?ref_=tt_cst_t_10
                    - link "Skeet" [ref=e545] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0104594/?ref_=tt_cst_c_10
                - generic [ref=e546]:
                  - group [ref=e548]:
                    - generic [ref=e549]:
                      - img "Neil Giuntoli"
                    - button "Add Neil Giuntoli to favorite people" [ref=e550] [cursor=pointer]
                    - link "Go to Neil Giuntoli" [ref=e552] [cursor=pointer]:
                      - /url: /name/nm0321358/?ref_=tt_cst_i_11
                  - generic [ref=e554]:
                    - link "Neil Giuntoli" [ref=e555] [cursor=pointer]:
                      - /url: /name/nm0321358/?ref_=tt_cst_t_11
                    - link "Jigger" [ref=e557] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0321358/?ref_=tt_cst_c_11
                - generic [ref=e558]:
                  - group [ref=e560]:
                    - generic [ref=e561]:
                      - img "Brian Libby"
                    - button "Add Brian Libby to favorite people" [ref=e562] [cursor=pointer]
                    - link "Go to Brian Libby" [ref=e564] [cursor=pointer]:
                      - /url: /name/nm0508742/?ref_=tt_cst_i_12
                  - generic [ref=e566]:
                    - link "Brian Libby" [ref=e567] [cursor=pointer]:
                      - /url: /name/nm0508742/?ref_=tt_cst_t_12
                    - link "Floyd" [ref=e569] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0508742/?ref_=tt_cst_c_12
                - generic [ref=e570]:
                  - group [ref=e572]:
                    - generic [ref=e573]:
                      - img "David Proval"
                    - button "Add David Proval to favorite people" [ref=e574] [cursor=pointer]
                    - link "Go to David Proval" [ref=e576] [cursor=pointer]:
                      - /url: /name/nm0698998/?ref_=tt_cst_i_13
                  - generic [ref=e578]:
                    - link "David Proval" [ref=e579] [cursor=pointer]:
                      - /url: /name/nm0698998/?ref_=tt_cst_t_13
                    - link "Snooze" [ref=e581] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0698998/?ref_=tt_cst_c_13
                - generic [ref=e582]:
                  - group [ref=e584]:
                    - generic [ref=e585]:
                      - img "Joseph Ragno"
                    - button "Add Joseph Ragno to favorite people" [ref=e586] [cursor=pointer]
                    - link "Go to Joseph Ragno" [ref=e588] [cursor=pointer]:
                      - /url: /name/nm0706554/?ref_=tt_cst_i_14
                  - generic [ref=e590]:
                    - link "Joseph Ragno" [ref=e591] [cursor=pointer]:
                      - /url: /name/nm0706554/?ref_=tt_cst_t_14
                    - link "Ernie" [ref=e593] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0706554/?ref_=tt_cst_c_14
                - generic [ref=e594]:
                  - group [ref=e596]:
                    - generic [ref=e597]:
                      - img "Jude Ciccolella"
                    - button "Add Jude Ciccolella to favorite people" [ref=e598] [cursor=pointer]
                    - link "Go to Jude Ciccolella" [ref=e600] [cursor=pointer]:
                      - /url: /name/nm0161980/?ref_=tt_cst_i_15
                  - generic [ref=e602]:
                    - link "Jude Ciccolella" [ref=e603] [cursor=pointer]:
                      - /url: /name/nm0161980/?ref_=tt_cst_t_15
                    - link "Guard Mert" [ref=e605] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0161980/?ref_=tt_cst_c_15
                - generic [ref=e606]:
                  - group [ref=e608]:
                    - generic [ref=e609]:
                      - img "Paul McCrane"
                    - button "Add Paul McCrane to favorite people" [ref=e610] [cursor=pointer]
                    - link "Go to Paul McCrane" [ref=e612] [cursor=pointer]:
                      - /url: /name/nm0005204/?ref_=tt_cst_i_16
                  - generic [ref=e614]:
                    - link "Paul McCrane" [ref=e615] [cursor=pointer]:
                      - /url: /name/nm0005204/?ref_=tt_cst_t_16
                    - link "Guard Trout" [ref=e617] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0005204/?ref_=tt_cst_c_16
                - generic [ref=e618]:
                  - group [ref=e620]:
                    - img [ref=e622]
                    - button "Add Renee Blaine to favorite people" [ref=e624] [cursor=pointer]
                    - link "Go to Renee Blaine" [ref=e626] [cursor=pointer]:
                      - /url: /name/nm0086169/?ref_=tt_cst_i_17
                  - generic [ref=e628]:
                    - link "Renee Blaine" [ref=e629] [cursor=pointer]:
                      - /url: /name/nm0086169/?ref_=tt_cst_t_17
                    - link "Andy Dufresne's Wife" [ref=e631] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0086169/?ref_=tt_cst_c_17
                - generic [ref=e632]:
                  - group [ref=e634]:
                    - img [ref=e636]
                    - button "Add Scott Mann to favorite people" [ref=e638] [cursor=pointer]
                    - link "Go to Scott Mann" [ref=e640] [cursor=pointer]:
                      - /url: /name/nm0542957/?ref_=tt_cst_i_18
                  - generic [ref=e642]:
                    - link "Scott Mann" [ref=e643] [cursor=pointer]:
                      - /url: /name/nm0542957/?ref_=tt_cst_t_18
                    - link "Glenn Quentin" [ref=e645] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0542957/?ref_=tt_cst_c_18
            - generic [ref=e646]: Director
            - link "Frank Darabont" [ref=e648] [cursor=pointer]:
              - /url: /name/nm0001104/?ref_=tt_cst_1_1
            - generic [ref=e649]: Writers
            - generic [ref=e650]:
              - link "Stephen King" [ref=e651] [cursor=pointer]:
                - /url: /name/nm0000175/?ref_=tt_cst_2_1
              - link "Frank Darabont" [ref=e652] [cursor=pointer]:
                - /url: /name/nm0001104/?ref_=tt_cst_2_2
            - link "See full cast and crew" [ref=e653] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
              - text: All cast & crew
            - link "See full cast and crew" [ref=e654] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
            - link "Production, box office & more at IMDbPro" [ref=e657] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
            - link "Production, box office & more at IMDbPro" [ref=e658] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
          - generic [ref=e660]:
            - generic [ref=e662]:
              - link "User reviews 11.8K" [ref=e663] [cursor=pointer]:
                - /url: /title/tt0111161/reviews/?ref_=tt_ururv_sm
                - heading "User reviews 11.8K" [level=3] [ref=e664]:
                  - generic [ref=e665]: User reviews
                  - generic [ref=e666]: 11.8K
              - button "Review" [ref=e669] [cursor=pointer]:
                - generic [ref=e671]: Review
            - generic [ref=e672]:
              - generic [ref=e673]:
                - generic [ref=e676]: "9.3"
                - generic [ref=e677]: 3192.3K
              - generic [ref=e679]:
                - link "43914 1-star reviews. Select to read them." [ref=e680] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=1&ref_=tt_ururv_histo_1
                  - generic [ref=e684]: "1"
                - link "5661 2-star reviews. Select to read them." [ref=e685] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=2&ref_=tt_ururv_histo_2
                  - generic [ref=e689]: "2"
                - link "6148 3-star reviews. Select to read them." [ref=e690] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=3&ref_=tt_ururv_histo_3
                  - generic [ref=e694]: "3"
                - link "8401 4-star reviews. Select to read them." [ref=e695] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=4&ref_=tt_ururv_histo_4
                  - generic [ref=e699]: "4"
                - link "17820 5-star reviews. Select to read them." [ref=e700] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=5&ref_=tt_ururv_histo_5
                  - generic [ref=e704]: "5"
                - link "34976 6-star reviews. Select to read them." [ref=e705] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=6&ref_=tt_ururv_histo_6
                  - generic [ref=e709]: "6"
                - link "118376 7-star reviews. Select to read them." [ref=e710] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=7&ref_=tt_ururv_histo_7
                  - generic [ref=e714]: "7"
                - link "376613 8-star reviews. Select to read them." [ref=e715] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=8&ref_=tt_ururv_histo_8
                  - generic [ref=e719]: "8"
                - link "827544 9-star reviews. Select to read them." [ref=e720] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=9&ref_=tt_ururv_histo_9
                  - generic [ref=e724]: "9"
                - link "1752866 10-star reviews. Select to read them." [ref=e725] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=10&ref_=tt_ururv_histo_10
                  - generic [ref=e729]: "10"
            - heading "Featured reviews" [level=3] [ref=e732]
            - group [ref=e733]:
              - generic [ref=e734]:
                - generic [ref=e735] [cursor=pointer]:
                  - generic [ref=e736]:
                    - link "User alexkolokotronis" [ref=e738]:
                      - /url: /user/p.2vibpa6e4h2oc5snny6pkkmzb4/?ref_=tt_ururv_c_1_uname
                      - generic [ref=e739]:
                        - group [ref=e740]:
                          - generic [ref=e741]:
                            - img [ref=e743]
                            - img "Placeholder profile image" [ref=e745]
                        - generic [ref=e749]: alexkolokotronis
                    - generic "Author rating is 10" [ref=e750]:
                      - generic [ref=e752]: "10"
                  - link "This is How Movies Should Be Made" [ref=e754]:
                    - /url: /title/tt0111161/reviews/?featured=rw1822343&ref_=tt_ururv_c_1_hd
                    - heading "This is How Movies Should Be Made" [level=3] [ref=e755]
                  - text: This movie is not your ordinary Hollywood flick. It has a great and deep message. This movie has a foundation and just kept on being built on from their and that foundation is hope.
                  - text: Other than just the message of this movie the acting was phenomenal. Tim Robbins gave one of the greatest performances ever. He was inspiring, intelligent and most of all positive. His performance just made me smile. Robbins plays Andy Dufresne who was wrongfully convicted of murdering his wife and her lover. He is gets to life sentences but yet never gives up hope. In he becomes friends with Ellis Boyd "Red" Redding played by Morgan Freeman. Freeman who gives the finest performance of his career has unlike Robbins lost hope. He is in deep regret of the crime that he committed. His way of deflecting the pain away is by trying to not feel anything at all. With his friendship with Andy he learns that without our hopes and dreams we have nothing. Andy also becomes friends with the rest of Red's group. James Whitmore also gave a great performance as Brooks Halten who gets out of prison parole but in the words of Red he has been "institutionalized".
                  - text: The directing by Frank Darabont was just magnificent. He kept this movie at a great steady pace along with the writing and great cinematography. He portrayed prison life in such a horrifying way, but not in terms of the physical pain but the stress and pain that wares mentally on the inmates, some of which deserve a second chance.
                  - text: Whatever you do, don't listen to the people who say this movie is overrated because this is one of the most inspiring and greatest movies ever. It has everything you could possibly want.
                - generic [ref=e756] [cursor=pointer]:
                  - generic [ref=e757]:
                    - link "User gavin6942" [ref=e759]:
                      - /url: /user/p.ipulzcdf6eohek3d5zte3h6zz4/?ref_=tt_ururv_c_2_uname
                      - generic [ref=e760]:
                        - group [ref=e761]:
                          - generic [ref=e763]:
                            - img "Avatar"
                        - generic [ref=e766]: gavin6942
                    - generic "Author rating is 10" [ref=e767]:
                      - generic [ref=e769]: "10"
                  - link "IMDb and the Greatest Film of All Time" [ref=e771]:
                    - /url: /title/tt0111161/reviews/?featured=rw3118520&ref_=tt_ururv_c_2_hd
                    - heading "IMDb and the Greatest Film of All Time" [level=3] [ref=e772]
                  - text: Two imprisoned men (Tim Robbins and Morgan Freeman) bond over a number of years, finding solace and eventual redemption through acts of common decency.
                  - text: Is this the greatest film of all time? IMDb would have you believe so. Despite being a box office flop (that barely recouped its budget), the film received multiple award nominations and outstanding reviews from critics for its acting, story, and realism. It has since been successful on cable television, VHS, DVD, and Blu-ray.
                  - text: And it deserves this praise that seems to be growing each year. Now twenty years old, the film has not aged a day, and instead seems to be getting better. This is Tim Robbins' best role, and a fine performance from the always wonderful Morgan Freeman.
                - generic [ref=e773] [cursor=pointer]:
                  - generic [ref=e774]:
                    - link "User auuwws" [ref=e776]:
                      - /url: /user/p.x772cyhwydc5c2oj2r265uncjy/?ref_=tt_ururv_c_3_uname
                      - generic [ref=e777]:
                        - group [ref=e778]:
                          - generic [ref=e780]:
                            - img "Avatar"
                        - generic [ref=e783]: auuwws
                    - generic "Author rating is 10" [ref=e784]:
                      - generic [ref=e786]: "10"
                  - link "the shawshank redemption" [ref=e788]:
                    - /url: /title/tt0111161/reviews/?featured=rw6158379&ref_=tt_ururv_c_3_hd
                    - heading "the shawshank redemption" [level=3] [ref=e789]
                  - text: The best movie in history and the best ending in any entertainment business
                - generic [ref=e790] [cursor=pointer]:
                  - generic [ref=e791]:
                    - link "User Sleepin_Dragon" [ref=e793]:
                      - /url: /user/p.nadoqibapcutzfhtliuzriogla/?ref_=tt_ururv_c_4_uname
                      - generic [ref=e794]:
                        - group [ref=e795]:
                          - generic [ref=e797]:
                            - img "Avatar"
                        - generic [ref=e800]: Sleepin_Dragon
                    - generic "Author rating is 10" [ref=e801]:
                      - generic [ref=e803]: "10"
                  - link "An incredible movie. One that lives with you." [ref=e805]:
                    - /url: /title/tt0111161/reviews/?featured=rw6606154&ref_=tt_ururv_c_4_hd
                    - heading "An incredible movie. One that lives with you." [level=3] [ref=e806]
                  - text: It is no wonder that the film has such a high rating, it is quite literally breathtaking. What can I say that hasn't said before? Not much, it's the story, the acting, the premise, but most of all, this movie is about how it makes you feel. Sometimes you watch a film, and can't remember it days later, this film loves with you, once you've seen it, you don't forget.
                  - text: The ultimate story of friendship, of hope, and of life, and overcoming adversity.
                  - text: I understand why so many class this as the best film of all time, it isn't mine, but I get it. If you haven't seen it, or haven't seen it for some time, you need to watch it, it's amazing. 10/10.
                - generic [ref=e807] [cursor=pointer]:
                  - generic [ref=e808]:
                    - link "User baumer" [ref=e810]:
                      - /url: /user/p.odocrgj5lvfevutk3rukg7nqji/?ref_=tt_ururv_c_5_uname
                      - generic [ref=e811]:
                        - group [ref=e812]:
                          - generic [ref=e814]:
                            - img "Avatar"
                        - generic [ref=e817]: baumer
                    - generic "Author rating is 10" [ref=e818]:
                      - generic [ref=e820]: "10"
                  - link "Stephen King's best adapted movie" [ref=e822]:
                    - /url: /title/tt0111161/reviews/?featured=rw0348302&ref_=tt_ururv_c_5_hd
                    - heading "Stephen King's best adapted movie" [level=3] [ref=e823]
                  - text: Misery and Stand By Me were the best adaptations up until this one, now you can add Shawshank to that list.
                  - text: "This is simply one of the best films ever made and I know I am not the first to say that and I certainly won't be the last. The standing on the IMDb is a true barometer of that. #3 as of this date and I'm sure it could be number 1. So I'll just skip all the normal praise of the film because we all know how great it is. But let me perhaps add that what I find so fascinating about Shawshank is that Stephen King wrote it."
                  - text: King is one of the best writers in the world. Books like IT and the Castle Rock series are some of the greatest stories ever told. But his best adaptations are always done by the best directors. The Shining was brilliantly interpreted by Kubrick and of course the aforementioned Misery and Stand By Me are both by Rob Reiner. Now Frank Darabont comes onto the scene and makes arguably the best King film ever. He seems to understand what King wants to say and he conveys that beautifully.
                  - text: What makes this film one of the best ever made is the message it conveys. It is one of eternal hope. Andy Dufresne, played by Tim Robbins, has been sent to prison for a crime he did not commit. But he never loses hope. He never gives up his quest to become a free man again. His years of tenacity, patience and wits keep him not only sane, but it gives his mind and a spirit a will to live. This film has a different feel to it. There has never been anything like it before and I don't know if there will again.
                  - text: I'm not going to say any more about this film, it has already been said, but just suffice to say that I am glad that Forrest Gump won best picture in 94. I would have been equally glad if Pulp Fiction or Shawshank would have won. It is that good of a movie and one that will be appreciated for years to come.
          - generic [ref=e826]:
            - generic [ref=e827]:
              - heading "'The Shawshank Redemption' Without Morgan Freeman?" [level=2] [ref=e828]
              - emphasis [ref=e829]:
                - link "The Shawshank Redemption" [ref=e830] [cursor=pointer]:
                  - /url: /title/tt0111161/?ref_=tt_eds_center-3_lk
              - text: has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?
              - link "Who almost starred?" [ref=e831] [cursor=pointer]:
                - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_c_vd_cc_shs_cta
            - group [ref=e833]:
              - group [ref=e834]:
                - generic [ref=e835]:
                  - img "Editorial Image"
                - link "2:25" [ref=e836] [cursor=pointer]:
                  - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_vd_cc_shs_i
                  - generic [ref=e841]: 2:25
          - generic [ref=e844]:
            - generic [ref=e846]:
              - heading "More like this" [level=3] [ref=e848]:
                - generic [ref=e849]: More like this
              - link "More information" [ref=e851] [cursor=pointer]:
                - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
            - group [ref=e854]:
              - generic [ref=e855]:
                - group [ref=e856]:
                  - group [ref=e857]:
                    - generic [ref=e858]:
                      - img "The Godfather"
                    - button "Add to Watchlist" [ref=e859] [cursor=pointer]
                    - link "View title page for The Godfather" [ref=e864] [cursor=pointer]:
                      - /url: /title/tt0068646/?ref_=tt_mlt_i_1
                  - generic [ref=e866]:
                    - generic [ref=e869]: "9.2"
                    - button "Rate The Godfather" [ref=e870] [cursor=pointer]
                  - link "View title page for The Godfather" [ref=e873] [cursor=pointer]:
                    - /url: /title/tt0068646/?ref_=tt_mlt_t_1
                    - text: The Godfather
                  - button "More about this" [ref=e878] [cursor=pointer]
                - group [ref=e881]:
                  - group [ref=e882]:
                    - generic [ref=e883]:
                      - img "The Dark Knight"
                    - button "Add to Watchlist" [ref=e884] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e889] [cursor=pointer]:
                      - /url: /title/tt0468569/?ref_=tt_mlt_i_2
                  - generic [ref=e891]:
                    - generic [ref=e894]: "9.1"
                    - button "Rate The Dark Knight" [ref=e895] [cursor=pointer]
                  - link "View title page for The Dark Knight" [ref=e898] [cursor=pointer]:
                    - /url: /title/tt0468569/?ref_=tt_mlt_t_2
                    - text: The Dark Knight
                  - button "More about this" [ref=e903] [cursor=pointer]
                - group [ref=e906]:
                  - group [ref=e907]:
                    - generic [ref=e908]:
                      - img "Forrest Gump"
                    - button "Add to Watchlist" [ref=e909] [cursor=pointer]
                    - link "View title page for Forrest Gump" [ref=e914] [cursor=pointer]:
                      - /url: /title/tt0109830/?ref_=tt_mlt_i_3
                  - generic [ref=e916]:
                    - generic [ref=e919]: "8.8"
                    - button "Rate Forrest Gump" [ref=e920] [cursor=pointer]
                  - link "View title page for Forrest Gump" [ref=e923] [cursor=pointer]:
                    - /url: /title/tt0109830/?ref_=tt_mlt_t_3
                    - text: Forrest Gump
                  - button "More about this" [ref=e928] [cursor=pointer]
                - group [ref=e931]:
                  - group [ref=e932]:
                    - generic [ref=e933]:
                      - img "Fight Club"
                    - button "Add to Watchlist" [ref=e934] [cursor=pointer]
                    - link "View title page for Fight Club" [ref=e939] [cursor=pointer]:
                      - /url: /title/tt0137523/?ref_=tt_mlt_i_4
                  - generic [ref=e941]:
                    - generic [ref=e944]: "8.8"
                    - button "Rate Fight Club" [ref=e945] [cursor=pointer]
                  - link "View title page for Fight Club" [ref=e948] [cursor=pointer]:
                    - /url: /title/tt0137523/?ref_=tt_mlt_t_4
                    - text: Fight Club
                  - button "More about this" [ref=e953] [cursor=pointer]
                - group [ref=e956]:
                  - group [ref=e957]:
                    - generic [ref=e958]:
                      - img "Inception"
                    - button "Add to Watchlist" [ref=e959] [cursor=pointer]
                    - link "View title page for Inception" [ref=e964] [cursor=pointer]:
                      - /url: /title/tt1375666/?ref_=tt_mlt_i_5
                  - generic [ref=e966]:
                    - generic [ref=e969]: "8.8"
                    - button "Rate Inception" [ref=e970] [cursor=pointer]
                  - link "View title page for Inception" [ref=e973] [cursor=pointer]:
                    - /url: /title/tt1375666/?ref_=tt_mlt_t_5
                    - text: Inception
                  - button "More about this" [ref=e978] [cursor=pointer]
                - group [ref=e981]:
                  - group [ref=e982]:
                    - generic [ref=e983]:
                      - img "Seven"
                    - button "Add to Watchlist" [ref=e984] [cursor=pointer]
                    - link "View title page for Seven" [ref=e989] [cursor=pointer]:
                      - /url: /title/tt0114369/?ref_=tt_mlt_i_6
                  - generic [ref=e991]:
                    - generic [ref=e994]: "8.6"
                    - button "Rate Seven" [ref=e995] [cursor=pointer]
                  - link "View title page for Seven" [ref=e998] [cursor=pointer]:
                    - /url: /title/tt0114369/?ref_=tt_mlt_t_6
                    - text: Seven
                  - button "More about this" [ref=e1003] [cursor=pointer]
                - group [ref=e1006]:
                  - group [ref=e1007]:
                    - generic [ref=e1008]:
                      - img "Pulp Fiction"
                    - button "Add to Watchlist" [ref=e1009] [cursor=pointer]
                    - link "View title page for Pulp Fiction" [ref=e1014] [cursor=pointer]:
                      - /url: /title/tt0110912/?ref_=tt_mlt_i_7
                  - generic [ref=e1016]:
                    - generic [ref=e1019]: "8.8"
                    - button "Rate Pulp Fiction" [ref=e1020] [cursor=pointer]
                  - link "View title page for Pulp Fiction" [ref=e1023] [cursor=pointer]:
                    - /url: /title/tt0110912/?ref_=tt_mlt_t_7
                    - text: Pulp Fiction
                  - button "More about this" [ref=e1028] [cursor=pointer]
                - group [ref=e1031]:
                  - group [ref=e1032]:
                    - generic [ref=e1033]:
                      - img "Interstellar"
                    - button "Add to Watchlist" [ref=e1034] [cursor=pointer]
                    - link "View title page for Interstellar" [ref=e1039] [cursor=pointer]:
                      - /url: /title/tt0816692/?ref_=tt_mlt_i_8
                  - generic [ref=e1041]:
                    - generic [ref=e1044]: "8.7"
                    - button "Rate Interstellar" [ref=e1045] [cursor=pointer]
                  - link "View title page for Interstellar" [ref=e1048] [cursor=pointer]:
                    - /url: /title/tt0816692/?ref_=tt_mlt_t_8
                    - text: Interstellar
                  - button "More about this" [ref=e1053] [cursor=pointer]
                - group [ref=e1056]:
                  - group [ref=e1057]:
                    - generic [ref=e1058]:
                      - img "The Green Mile"
                    - button "Add to Watchlist" [ref=e1059] [cursor=pointer]
                    - link "View title page for The Green Mile" [ref=e1064] [cursor=pointer]:
                      - /url: /title/tt0120689/?ref_=tt_mlt_i_9
                  - generic [ref=e1066]:
                    - generic [ref=e1069]: "8.6"
                    - button "Rate The Green Mile" [ref=e1070] [cursor=pointer]
                  - link "View title page for The Green Mile" [ref=e1073] [cursor=pointer]:
                    - /url: /title/tt0120689/?ref_=tt_mlt_t_9
                    - text: The Green Mile
                  - button "More about this" [ref=e1078] [cursor=pointer]
                - group [ref=e1081]:
                  - group [ref=e1082]:
                    - generic [ref=e1083]:
                      - img "The Godfather Part II"
                    - button "Add to Watchlist" [ref=e1084] [cursor=pointer]
                    - link "View title page for The Godfather Part II" [ref=e1089] [cursor=pointer]:
                      - /url: /title/tt0071562/?ref_=tt_mlt_i_10
                  - generic [ref=e1091]:
                    - generic [ref=e1094]: "9.0"
                    - button "Rate The Godfather Part II" [ref=e1095] [cursor=pointer]
                  - link "View title page for The Godfather Part II" [ref=e1098] [cursor=pointer]:
                    - /url: /title/tt0071562/?ref_=tt_mlt_t_10
                    - text: The Godfather Part II
                  - button "More about this" [ref=e1103] [cursor=pointer]
                - group [ref=e1106]:
                  - group [ref=e1107]:
                    - generic [ref=e1108]:
                      - img "Schindler's List"
                    - button "Add to Watchlist" [ref=e1109] [cursor=pointer]
                    - link "View title page for Schindler's List" [ref=e1114] [cursor=pointer]:
                      - /url: /title/tt0108052/?ref_=tt_mlt_i_11
                  - generic [ref=e1116]:
                    - generic [ref=e1119]: "9.0"
                    - button "Rate Schindler's List" [ref=e1120] [cursor=pointer]
                  - link "View title page for Schindler's List" [ref=e1123] [cursor=pointer]:
                    - /url: /title/tt0108052/?ref_=tt_mlt_t_11
                    - text: Schindler's List
                  - button "More about this" [ref=e1128] [cursor=pointer]
                - group [ref=e1131]:
                  - group [ref=e1132]:
                    - generic [ref=e1133]:
                      - 'img "The Lord of the Rings: The Return of the King"'
                    - button "Add to Watchlist" [ref=e1134] [cursor=pointer]
                    - 'link "View title page for The Lord of the Rings: The Return of the King" [ref=e1139] [cursor=pointer]':
                      - /url: /title/tt0167260/?ref_=tt_mlt_i_12
                  - generic [ref=e1141]:
                    - generic [ref=e1144]: "9.0"
                    - 'button "Rate The Lord of the Rings: The Return of the King" [ref=e1145] [cursor=pointer]'
                  - 'link "View title page for The Lord of the Rings: The Return of the King" [ref=e1148] [cursor=pointer]':
                    - /url: /title/tt0167260/?ref_=tt_mlt_t_12
                    - text: "The Lord of the Rings: The Return of the King"
                  - button "More about this" [ref=e1153] [cursor=pointer]
          - generic [ref=e1156]:
            - link "Related interests" [ref=e1158] [cursor=pointer]:
              - /url: /interest/all/?ref_=tt_rin_sm
              - heading "Related interests" [level=3] [ref=e1159]:
                - generic [ref=e1160]: Related interests
            - group [ref=e1162]:
              - generic [ref=e1163]:
                - generic [ref=e1164]:
                  - group [ref=e1165]:
                    - generic [ref=e1166]:
                      - img "Orson Welles in Citizen Kane (1941)"
                    - button "Add Epic to your interests" [ref=e1167] [cursor=pointer]
                    - link "Epic" [ref=e1169] [cursor=pointer]:
                      - /url: /interest/in0000077/?ref_=tt_rin_in_i_1
                  - link "Epic" [ref=e1171] [cursor=pointer]:
                    - /url: /interest/in0000077/?ref_=tt_rin_in_t_1
                    - generic [ref=e1172]: Epic
                - generic [ref=e1173]:
                  - group [ref=e1174]:
                    - generic [ref=e1175]:
                      - img "Emma Watson, Saoirse Ronan, Florence Pugh, and Eliza Scanlen in Little Women (2019)"
                    - button "Add Period Drama to your interests" [ref=e1176] [cursor=pointer]
                    - link "Period Drama" [ref=e1178] [cursor=pointer]:
                      - /url: /interest/in0000083/?ref_=tt_rin_in_i_2
                  - link "Period Drama" [ref=e1180] [cursor=pointer]:
                    - /url: /interest/in0000083/?ref_=tt_rin_in_t_2
                    - generic [ref=e1181]: Period Drama
                - generic [ref=e1182]:
                  - group [ref=e1183]:
                    - generic [ref=e1184]:
                      - img "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)"
                    - button "Add Prison Drama to your interests" [ref=e1185] [cursor=pointer]
                    - link "Prison Drama" [ref=e1187] [cursor=pointer]:
                      - /url: /interest/in0000085/?ref_=tt_rin_in_i_3
                  - link "Prison Drama" [ref=e1189] [cursor=pointer]:
                    - /url: /interest/in0000085/?ref_=tt_rin_in_t_3
                    - generic [ref=e1190]: Prison Drama
                - generic [ref=e1191]:
                  - group [ref=e1192]:
                    - generic [ref=e1193]:
                      - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
                    - button "Add Psychological Drama to your interests" [ref=e1194] [cursor=pointer]
                    - link "Psychological Drama" [ref=e1196] [cursor=pointer]:
                      - /url: /interest/in0000086/?ref_=tt_rin_in_i_4
                  - link "Psychological Drama" [ref=e1198] [cursor=pointer]:
                    - /url: /interest/in0000086/?ref_=tt_rin_in_t_4
                    - generic [ref=e1199]: Psychological Drama
                - generic [ref=e1200]:
                  - group [ref=e1201]:
                    - generic [ref=e1202]:
                      - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
                    - button "Add Drama to your interests" [ref=e1203] [cursor=pointer]
                    - link "Drama" [ref=e1205] [cursor=pointer]:
                      - /url: /interest/in0000076/?ref_=tt_rin_in_i_5
                  - link "Drama" [ref=e1207] [cursor=pointer]:
                    - /url: /interest/in0000076/?ref_=tt_rin_in_t_5
                    - generic [ref=e1208]: Drama
          - generic [ref=e1211]:
            - link "Storyline" [ref=e1212] [cursor=pointer]:
              - /url: "#storyline"
              - heading "Storyline" [level=3] [ref=e1213]:
                - generic [ref=e1214]: Storyline
            - 'button "Storyline: edit" [ref=e1218] [cursor=pointer]':
              - generic [ref=e1221]: Edit
          - generic [ref=e1223]:
            - generic [ref=e1225]:
              - heading "Did you know" [level=3] [ref=e1227]:
                - generic [ref=e1228]: Did you know
              - 'button "Did you know: edit" [ref=e1230] [cursor=pointer]':
                - generic [ref=e1233]: Edit
            - generic [ref=e1234]:
              - link "See more" [ref=e1235] [cursor=pointer]:
                - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
                - text: Trivia
              - generic [ref=e1237] [cursor=pointer]:
                - button "See more" [ref=e1238]
                - generic [ref=e1243]:
                  - text: Andy and Red's opening chat in the prison yard, in which Red is throwing a baseball, took nine hours to shoot because director
                  - link "Frank Darabont" [ref=e1244]:
                    - /url: /name/nm0001104/?ref_=dyk_trv
                  - text: insisted on many takes of the scene before he was satisfied.
                  - link "Morgan Freeman" [ref=e1245]:
                    - /url: /name/nm0000151/?ref_=dyk_trv
                  - text: threw the baseball for the entire nine hours without a word of complaint. He showed up for work the next day with his left arm in a sling.
              - link "See more" [ref=e1246] [cursor=pointer]:
                - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
            - generic [ref=e1249]:
              - link "See more" [ref=e1250] [cursor=pointer]:
                - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
                - text: Goofs
              - generic [ref=e1252] [cursor=pointer]:
                - button "See more" [ref=e1253]
                - generic [ref=e1258]:
                  - text: Circa 1963, Heywood is shown listening to the record "24 of
                  - link "Hank Williams" [ref=e1259]:
                    - /url: /name/nm0930729/?ref_=dyk_gf
                  - text: "' Greatest Hits\", released in 1970."
              - link "See more" [ref=e1260] [cursor=pointer]:
                - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
            - generic [ref=e1263]:
              - link "See more" [ref=e1264] [cursor=pointer]:
                - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
                - text: Quotes
              - generic [ref=e1266] [cursor=pointer]:
                - button "See more" [ref=e1267]
                - list [ref=e1272]:
                  - listitem [ref=e1273]:
                    - link "Andy Dufresne" [ref=e1274]:
                      - /url: /name/nm0000209/?ref_=tt_dyk_qu
                    - text: ": ["
                    - emphasis [ref=e1275]: to Red
                    - text: "] I guess it comes down to a simple choice, really. Get busy living, or get busy dying."
              - link "See more" [ref=e1276] [cursor=pointer]:
                - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
            - generic [ref=e1279]:
              - link "See more" [ref=e1280] [cursor=pointer]:
                - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
                - text: Crazy credits
              - generic [ref=e1282] [cursor=pointer]:
                - button "See more" [ref=e1283]
                - generic [ref=e1288]: The man who cried and was beaten when Andy first arrived is listed and credited as "Fat Ass" -- the other inmates' nickname for him.
              - link "See more" [ref=e1289] [cursor=pointer]:
                - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
            - generic [ref=e1292]:
              - link "See more" [ref=e1293] [cursor=pointer]:
                - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
                - text: Alternate versions
              - generic [ref=e1295] [cursor=pointer]:
                - button "See more" [ref=e1296]
                - generic [ref=e1301]: This film was produced independently by Castle Rock Entertainment, but distributed by Columbia Pictures, which placed their logo at the beginning of the film. After the first video release, Castle Rock began to use Warner Bros. as their distributor. This film was then later re-issued on video and DVD by Warner Bros., which replaced the Columbia Pictures logo with their own. (The 1999 WB DVD uses no studio logo before Castle Rock [A Turner Company], and has no Columbia line-art logo at the end, just 10 seconds of blank screen as the music finishes. The post-2004 prints start with the 2003 WB logo and an updated Castle Rock logo [A TimeWarner Company], and have the Columbia line-art logo in the crawl at the end followed by a quick, still, 2003 WB logo. See also The American President.)
              - link "See more" [ref=e1302] [cursor=pointer]:
                - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
            - generic [ref=e1305]:
              - link "See more" [ref=e1306] [cursor=pointer]:
                - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
                - text: Connections
              - generic [ref=e1308] [cursor=pointer]:
                - button "See more" [ref=e1309]
                - generic [ref=e1312]:
                  - text: Featured in
                  - 'link "At the Movies with Ebert & Roeper: Why Gump? Why Now?" [ref=e1313]':
                    - /url: /title/tt1936736/?ref_=tt_dyk_cnn
                  - text: (1994)
              - link "See more" [ref=e1314] [cursor=pointer]:
                - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
            - generic [ref=e1317]:
              - link "See more" [ref=e1318] [cursor=pointer]:
                - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
                - text: Soundtracks
              - generic [ref=e1320] [cursor=pointer]:
                - button "See more" [ref=e1321]
                - generic [ref=e1324]:
                  - text: If I Didn't Care
                  - generic [ref=e1325]:
                    - text: by
                    - link "Jack Lawrence" [ref=e1326]:
                      - /url: /name/nm0492805/?ref_=dyk_snd
                  - generic [ref=e1327]:
                    - text: Performed by
                    - link "The Ink Spots" [ref=e1328]:
                      - /url: /name/nm1311414/?ref_=dyk_snd
                  - generic [ref=e1329]: Courtesy of MCA Records
              - link "See more" [ref=e1330] [cursor=pointer]:
                - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
          - generic [ref=e1334]:
            - generic [ref=e1335]:
              - link "Top picks" [ref=e1336] [cursor=pointer]:
                - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
                - heading "Top picks" [level=3] [ref=e1337]:
                  - generic [ref=e1338]: Top picks
              - generic [ref=e1340]: Sign in to rate and Watchlist for personalized recommendations
            - link "Sign in" [ref=e1341] [cursor=pointer]:
              - /url: /registration/signin?ref_=tt_tpks_signin
              - generic [ref=e1342]: Sign in
          - generic [ref=e1344]:
            - link "FAQ 47" [ref=e1346] [cursor=pointer]:
              - /url: /title/tt0111161/faq/?ref_=tt_faq_sm
              - heading "FAQ 47" [level=3] [ref=e1347]:
                - generic [ref=e1348]: FAQ
                - generic [ref=e1349]: "47"
            - generic [ref=e1351]:
              - generic [ref=e1352] [cursor=pointer]:
                - link "How long is The Shawshank Redemption?" [ref=e1354]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                - generic [ref=e1355]: Powered by Alexa
              - link "See the answer" [ref=e1357] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
              - link "Does the novella explain why Fat Ass is in prison? He seems too much like a cry baby to have committed any crimes." [ref=e1362] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
              - link "See the answer" [ref=e1363] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
              - link "Why does Andy talk in code to Red at the movie about getting Rita Hayworth since they have already done business before and Andy asked for the rock hammer in the same way?" [ref=e1368] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
              - link "See the answer" [ref=e1369] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
              - link "Why is Captain Hadley so cruel?" [ref=e1374] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
              - link "See the answer" [ref=e1375] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
          - generic [ref=e1378]:
            - generic [ref=e1380]:
              - heading "Details" [level=3] [ref=e1382]:
                - generic [ref=e1383]: Details
              - 'button "Details: edit" [ref=e1385] [cursor=pointer]':
                - generic [ref=e1388]: Edit
            - generic [ref=e1389]:
              - link "See more" [ref=e1390] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - text: Release date
              - link "October 14, 1994 (United States)" [ref=e1392] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
              - link "See more" [ref=e1393] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
              - generic [ref=e1396]: Country of origin
              - link "United States" [ref=e1398] [cursor=pointer]:
                - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
              - generic "See more" [ref=e1399]: Official sites
              - generic [ref=e1400]:
                - link "Official Facebook" [ref=e1401] [cursor=pointer]:
                  - /url: https://www.facebook.com/shawshankredemptionfilm/
                  - text: Official Facebook
                - link "Warner Bros. (United States)" [ref=e1403] [cursor=pointer]:
                  - /url: https://www.warnerbros.com/movies/shawshank-redemption
                  - text: Warner Bros. (United States)
              - generic [ref=e1405]: Language
              - link "English" [ref=e1407] [cursor=pointer]:
                - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
              - link "See more" [ref=e1408] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                - text: Also known as
              - generic [ref=e1409] [cursor=pointer]: Sueño de fuga
              - link "See more" [ref=e1410] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
              - link "See more" [ref=e1413] [cursor=pointer]:
                - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                - text: Filming locations
              - generic [ref=e1414] [cursor=pointer]:
                - link "Butler, Ohio, USA" [ref=e1415]:
                  - /url: /search/title/?locations=Butler%40%40%40%20Ohio%40%40%40%20USA&ref_=tt_dt_loc
                - text: (Exterior, rural town of "Buxton" where "Red" journeys to; shot of bus leaving with "Red" near end of film)
              - link "See more" [ref=e1416] [cursor=pointer]:
                - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
              - link "See more" [ref=e1419] [cursor=pointer]:
                - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                - text: Production company
              - link "Castle Rock Entertainment" [ref=e1421] [cursor=pointer]:
                - /url: /company/co0040620/?ref_=tt_dt_cmpy_1
              - link "See more" [ref=e1422] [cursor=pointer]:
                - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
              - link "See more" [ref=e1425] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
                - text: See more company credits at IMDbPro
              - link "See more" [ref=e1426] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
          - generic [ref=e1428]:
            - generic [ref=e1430]:
              - heading "Box office" [level=3] [ref=e1432]:
                - generic [ref=e1433]: Box office
              - 'button "Box office: edit" [ref=e1435] [cursor=pointer]':
                - generic [ref=e1438]: Edit
            - generic [ref=e1439]:
              - generic [ref=e1440]: Budget
              - generic [ref=e1441]: $25,000,000 (estimated)
              - generic [ref=e1442]: Gross US & Canada
              - generic [ref=e1443]: $28,767,189
              - generic [ref=e1444]: Opening weekend US & Canada
              - generic [ref=e1445]: $727,327 Sep 25, 1994
              - generic [ref=e1446]: Gross worldwide
              - generic [ref=e1447]: $29,420,884
              - generic [ref=e1448]:
                - link "Go to IMDbPro" [ref=e1449] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                  - img [ref=e1450]
                - link "See detailed box office info on IMDbPro" [ref=e1460] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                  - text: See detailed box office info on IMDbPro
          - generic [ref=e1462]:
            - generic [ref=e1464]:
              - link "Tech specs" [ref=e1465] [cursor=pointer]:
                - /url: /title/tt0111161/technical/?ref_=tt_spec_sm
                - heading "Tech specs" [level=3] [ref=e1466]:
                  - generic [ref=e1467]: Tech specs
              - 'button "Tech specs: edit" [ref=e1470] [cursor=pointer]':
                - generic [ref=e1473]: Edit
            - generic [ref=e1474]:
              - generic [ref=e1475]: Runtime
              - generic [ref=e1476]: 2h 22m(142 min)
              - generic [ref=e1477]: Color
              - link "Color" [ref=e1479] [cursor=pointer]:
                - /url: /search/title/?colors=color&ref_=tt_spec_att
              - generic [ref=e1480]: Sound mix
              - link "Dolby Digital" [ref=e1482] [cursor=pointer]:
                - /url: /search/title/?sound_mixes=dolby_digital&ref_=tt_spec_att
              - generic [ref=e1483]: Aspect ratio
              - generic [ref=e1484]: "1.85 : 1"
          - generic [ref=e1488]:
            - generic [ref=e1489]:
              - link "Contribute to this page" [ref=e1490] [cursor=pointer]:
                - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                - heading "Contribute to this page" [level=3] [ref=e1491]:
                  - generic [ref=e1492]: Contribute to this page
              - generic [ref=e1494]: Suggest an edit or add missing content
            - generic [ref=e1495]:
              - link "Go to Learn more about contributing" [ref=e1496] [cursor=pointer]:
                - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
                - text: Learn more about contributing
              - link "Go to Learn more about contributing" [ref=e1497] [cursor=pointer]:
                - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
            - link "Edit page" [ref=e1501] [cursor=pointer]:
              - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
              - generic [ref=e1504]: Edit page
        - heading "More to explore" [level=3] [ref=e1513]
  - generic [ref=e1518]:
    - heading "Recently viewed" [level=3] [ref=e1521]
    - generic [ref=e1523]: You have no recently viewed pages
  - contentinfo [ref=e1528]:
    - link "Sign in for more access" [ref=e1530] [cursor=pointer]:
      - /url: /registration/signin/?u=%2F&ref_=tt_ftr_reg
      - generic [ref=e1531]: Sign in for more access
    - generic [ref=e1532]:
      - generic [ref=e1533]:
        - generic [ref=e1534]:
          - generic [ref=e1535]: Follow IMDb on social
          - link "TikTok" [ref=e1536] [cursor=pointer]:
            - /url: https://www.tiktok.com/@imdb
          - link "Instagram" [ref=e1538] [cursor=pointer]:
            - /url: https://instagram.com/imdb
          - link "Twitter" [ref=e1541] [cursor=pointer]:
            - /url: https://twitter.com/imdb
          - link "YouTube" [ref=e1543] [cursor=pointer]:
            - /url: https://youtube.com/imdb/
          - link "Facebook" [ref=e1545] [cursor=pointer]:
            - /url: https://facebook.com/imdb
        - generic [ref=e1547]:
          - generic [ref=e1548]:
            - generic [ref=e1549]: Get the IMDb app
            - generic [ref=e1550]: For Android and iOS
          - group [ref=e1552]:
            - generic [ref=e1553]:
              - img "Get the IMDb app"
            - link "For Android and iOS" [ref=e1554] [cursor=pointer]:
              - /url: https://slyb.app.link/Aa96cLcBeAb
      - generic [ref=e1556]:
        - link "Help" [ref=e1557] [cursor=pointer]:
          - /url: https://help.imdb.com/imdb
          - text: Help
        - link "Site Index" [ref=e1559] [cursor=pointer]:
          - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
          - text: Site Index
        - link "IMDbPro" [ref=e1561] [cursor=pointer]:
          - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
          - text: IMDbPro
        - link "Box Office Mojo" [ref=e1563] [cursor=pointer]:
          - /url: https://www.boxofficemojo.com
          - text: Box Office Mojo
        - link "License IMDb Data" [ref=e1565] [cursor=pointer]:
          - /url: https://developer.imdb.com/
          - text: License IMDb Data
      - generic [ref=e1567]:
        - link "Press Room" [ref=e1568] [cursor=pointer]:
          - /url: /pressroom/?ref_=tt_ftr
        - link "Advertising" [ref=e1569] [cursor=pointer]:
          - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
          - text: Advertising
        - link "Jobs" [ref=e1571] [cursor=pointer]:
          - /url: https://www.amazon.jobs/en/teams/imdb
          - text: Jobs
        - link "Conditions of Use" [ref=e1573] [cursor=pointer]:
          - /url: /conditions/?ref_=tt_ftr
        - link "Privacy Policy" [ref=e1574] [cursor=pointer]:
          - /url: /privacy/?ref_=tt_ftr
        - generic [ref=e1575]:
          - link "Your Ads Privacy Choices" [ref=e1576] [cursor=pointer]:
            - /url: /privacy/redirect/?ref_=tt_ftr
            - img [ref=e1577]
          - link "Your Ads Privacy Choices" [ref=e1589] [cursor=pointer]:
            - /url: /privacy/redirect/?ref_=tt_ftr
    - img "IMDb, an Amazon company" [ref=e1591]
    - paragraph [ref=e1627]: © 1990-2026 by IMDb.com, Inc.
  - button "Back to top" [ref=e1628] [cursor=pointer]:
    - generic [ref=e1631]: Back to top
  - img
  - status
  - img
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